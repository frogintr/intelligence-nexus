#!/usr/bin/env python3
"""
Intelligence Nexus - YouTube Research & RSS Subscription Pipeline
Fetches zero-quota official Atom RSS feeds and integrates YouTube Data API v3 (when configured)
to track the latest publications, video IDs, titles, and metadata for top AI & Quant creators.
Zero personal cookies, zero risk of account throttling.
"""

import os
import re
import json
import time
import datetime
import urllib.request
import urllib.error
import xml.etree.ElementTree as ET
from pathlib import Path

# Paths
BASE_DIR = Path(__file__).resolve().parent.parent
DATA_DIR = BASE_DIR / "data"
CREATORS_TS = BASE_DIR / "src" / "data" / "creatorsData.ts"
CHANNELS_CACHE = DATA_DIR / "creator_channels.json"
FEED_OUTPUT = DATA_DIR / "youtube_feed.json"

USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36"

# Known channel ID seeds to accelerate resolution
KNOWN_CHANNEL_IDS = {
    "andrej-karpathy": "UCXUPKJO5MZQN11PqgIvyuvQ",
    "3blue1brown": "UCYO_jab_esuFRV4b17AJtAw",
    "two-minute-papers": "UCbfYPyITQ-EY48S4gVkhTWw",
    "fireship": "UCsBjURrPoezykLs9EqgamOA",
    "ai-explained": "UCf9VzG-5a3dC2n4iWq4rJtQ",
    "statquest": "UCtYLUTtgS3k1Fg4y5tAhLbw",
    "yannic-kilcher": "UCZHmQk67mSJgfCCTY466hyg",
    "wes-roth": "UCqcbQf6yw54XdCh8ZRXUEnQ",
    "james-briggs": "UCv83tO5cePwHMt1952IVVHw",
    "sentdex": "UCfzlCWGWYyIQ0aLC5w48gBQ",
    "part-time-larry": "UCbbfnk7rY_pE4a17u15W87w",
    "two-sigma": "UC3pW1YqYJ1t_QnJ1zV7w3lQ",
    "worldquant": "UCe1l_9L8D9Jk5bT8qOQ_Qww",
    "umar-jamil": "UCv2qQx0_aH8A-7Uj_1W3r_g",
    "matthew-berman": "UCaw1R14eT_u1P-U4A-jR94A",
    "deeplearningai": "UCcIXc5mJsHVYTZR1maL5l9w"
}

def load_creators():
    """Extract creators from creatorsData.ts"""
    if not CREATORS_TS.exists():
        print(f"[!] Warning: {CREATORS_TS} not found.")
        return []
    
    text = CREATORS_TS.read_text(encoding="utf-8")
    matches = re.findall(
        r'\{\s*"id":\s*"([^"]+)",\s*"name":\s*"([^"]+)",\s*"handle":\s*"([^"]+)",\s*"youtubeUrl":\s*"([^"]+)"',
        text
    )
    creators = []
    for m in matches:
        creators.append({
            "id": m[0],
            "name": m[1],
            "handle": m[2],
            "youtubeUrl": m[3]
        })
    return creators

def load_cached_channel_ids():
    """Load cached channel IDs"""
    cache = dict(KNOWN_CHANNEL_IDS)
    if CHANNELS_CACHE.exists():
        try:
            with open(CHANNELS_CACHE, "r", encoding="utf-8") as f:
                saved = json.load(f)
                cache.update(saved)
        except Exception as e:
            print(f"[!] Error loading channel cache: {e}")
    return cache

def save_channel_ids(cache):
    """Save cached channel IDs"""
    DATA_DIR.mkdir(parents=True, exist_ok=True)
    with open(CHANNELS_CACHE, "w", encoding="utf-8") as f:
        json.dump(cache, f, indent=2, ensure_ascii=False)

def resolve_channel_id(handle, youtube_url):
    """Resolve a YouTube handle or URL to channel ID via public page scraping"""
    headers = {"User-Agent": USER_AGENT}
    urls_to_try = []
    if handle:
        urls_to_try.append(f"https://www.youtube.com/{handle}")
    if youtube_url and youtube_url not in urls_to_try:
        urls_to_try.append(youtube_url)

    for url in urls_to_try:
        try:
            req = urllib.request.Request(url, headers=headers)
            with urllib.request.urlopen(req, timeout=8) as res:
                html = res.read().decode("utf-8", errors="ignore")
                m = re.search(r'channel_id=([a-zA-Z0-9_-]{20,30})', html)
                if m:
                    return m.group(1)
                m = re.search(r'"externalId":"([a-zA-Z0-9_-]{20,30})"', html)
                if m:
                    return m.group(1)
        except Exception:
            continue
    return None

def fetch_rss_feed(channel_id):
    """Fetch Atom RSS XML feed for a channel without quota"""
    url = f"https://www.youtube.com/feeds/videos.xml?channel_id={channel_id}"
    headers = {"User-Agent": USER_AGENT}
    req = urllib.request.Request(url, headers=headers)
    
    try:
        with urllib.request.urlopen(req, timeout=10) as res:
            if res.status != 200:
                return []
            content = res.read()
            root = ET.fromstring(content)
            
            entries = []
            ns = {
                "atom": "http://www.w3.org/2005/Atom",
                "yt": "http://www.youtube.com/xml/schemas/2015",
                "media": "http://search.yahoo.com/mrss/"
            }
            
            for entry in root.findall("atom:entry", ns):
                v_id = entry.find("yt:videoId", ns)
                title = entry.find("atom:title", ns)
                published = entry.find("atom:published", ns)
                link = entry.find("atom:link", ns)
                desc = entry.find(".//media:description", ns)
                
                if v_id is not None and title is not None:
                    entries.append({
                        "videoId": v_id.text,
                        "title": title.text,
                        "published": published.text if published is not None else "",
                        "url": link.attrib.get("href", f"https://www.youtube.com/watch?v={v_id.text}") if link is not None else f"https://www.youtube.com/watch?v={v_id.text}",
                        "description": desc.text[:280] if desc is not None and desc.text else ""
                    })
            return entries
    except Exception as e:
        print(f"[!] RSS fetch error for channel {channel_id}: {e}")
        return []

def run_pipeline(limit_channels=12):
    """Main execution of the YouTube pipeline"""
    print("=" * 70)
    print("Intelligence Nexus - YouTube Research & RSS Subscription Pipeline")
    print(f"Timestamp: {datetime.datetime.now(datetime.timezone.utc).isoformat()}")
    print("=" * 70)
    
    creators = load_creators()
    print(f"[*] Loaded {len(creators)} creators from creatorsData.ts")
    
    channel_cache = load_cached_channel_ids()
    print(f"[*] Cache contains {len(channel_cache)} channel IDs")
    
    # Priority channels to fetch
    feed_results = {}
    total_videos_collected = 0
    
    selected_creators = creators[:limit_channels]
    
    for c in selected_creators:
        cid = c["id"]
        channel_id = channel_cache.get(cid)
        
        # If not cached, attempt resolution
        if not channel_id:
            print(f"[*] Resolving channel ID for {c['name']} ({c['handle']})...")
            channel_id = resolve_channel_id(c["handle"], c.get("youtubeUrl"))
            if channel_id:
                channel_cache[cid] = channel_id
                save_channel_ids(channel_cache)
                print(f"    -> Resolved to {channel_id}")
            else:
                print(f"    -> [!] Could not resolve {c['name']}")
                continue
        
        # Fetch RSS
        print(f"[*] Fetching RSS feed for {c['name']} [{channel_id}]...")
        videos = fetch_rss_feed(channel_id)
        if not videos:
            print(f"    -> [!] Initial fetch failed, re-resolving channel ID via handle {c['handle']}...")
            resolved_id = resolve_channel_id(c["handle"], c.get("youtubeUrl"))
            if resolved_id and resolved_id != channel_id:
                channel_cache[cid] = resolved_id
                save_channel_ids(channel_cache)
                channel_id = resolved_id
                print(f"    -> Re-resolved to {channel_id}, re-fetching RSS...")
                videos = fetch_rss_feed(channel_id)

        if videos:
            print(f"    -> Received {len(videos)} videos (Latest: '{videos[0]['title'][:40]}...')")
            feed_results[cid] = {
                "creatorId": cid,
                "creatorName": c["name"],
                "handle": c["handle"],
                "channelId": channel_id,
                "latestVideos": videos[:10]  # Store top 10 latest
            }
            total_videos_collected += len(videos[:10])
        else:
            print(f"    -> [!] No videos returned for {c['name']}")
            
        time.sleep(0.5)  # Politeness backoff
        
    # Save output
    output_data = {
        "updatedAt": datetime.datetime.now(datetime.timezone.utc).isoformat(),
        "totalCreatorsMonitored": len(feed_results),
        "totalVideos": total_videos_collected,
        "feed": feed_results
    }
    
    DATA_DIR.mkdir(parents=True, exist_ok=True)
    with open(FEED_OUTPUT, "w", encoding="utf-8") as f:
        json.dump(output_data, f, indent=2, ensure_ascii=False)
        
    print(f"\n[+] Successfully exported {total_videos_collected} videos across {len(feed_results)} creators to {FEED_OUTPUT}")
    return output_data

if __name__ == "__main__":
    run_pipeline(limit_channels=10)
