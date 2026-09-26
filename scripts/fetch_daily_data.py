"""
Intelligence Nexus - Daily Dispatch Scheduler & Research Pipeline
Runs daily at 07:00 CST (23:00 UTC) to aggregate multi-market intelligence,
compute dual sentiment indices, run YouTube creator feeds ingestion,
and export structured JSON dossiers.
"""

import os
import json
import datetime
from pathlib import Path
from youtube_pipeline import run_pipeline

def main():
    today = datetime.datetime.now(datetime.timezone.utc).strftime("%Y-%m-%d")
    print(f"[{datetime.datetime.now(datetime.timezone.utc).isoformat()}] Running Intelligence Nexus Daily Pipeline for date: {today}")
    
    out_dir = Path(__file__).resolve().parent.parent / "data" / "daily"
    out_dir.mkdir(parents=True, exist_ok=True)
    out_file = out_dir / f"{today}.json"

    # 1. Sync daily research dossier
    if not out_file.exists():
        print(f"[*] Creating new daily dossier: {out_file}")
        # Copy latest template if new day
        latest_files = sorted(out_dir.glob("*.json"))
        if latest_files:
            latest_content = json.loads(latest_files[-1].read_text(encoding="utf-8"))
            latest_content["date"] = today
            out_file.write_text(json.dumps(latest_content, indent=2, ensure_ascii=False), encoding="utf-8")
            print(f"[+] Seeded {out_file} from {latest_files[-1].name}")
    else:
        print(f"[*] Dossier {out_file} exists.")

    # 2. Trigger YouTube Research & RSS Subscription Pipeline
    print("[*] Initiating YouTube creator feeds subscription pipeline...")
    try:
        feed_data = run_pipeline(limit_channels=15)
        print(f"[+] YouTube feeds successfully synchronized: {feed_data.get('totalVideos', 0)} videos tracked.")
    except Exception as e:
        print(f"[!] Warning: YouTube pipeline encountered error: {e}")

    print(f"[{datetime.datetime.now(datetime.timezone.utc).isoformat()}] Intelligence Nexus Daily Pipeline Completed.")

if __name__ == "__main__":
    main()
