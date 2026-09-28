"use client";

import React, { useState, useMemo, useEffect } from "react";
import { CREATORS_DATA, Creator } from "../../data/creatorsData";
import youtubeFeedData from "../../../data/youtube_feed.json";
import {
  Search,
  ExternalLink,
  Youtube,
  BookOpen,
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  SlidersHorizontal,
  X,
  PlayCircle,
  Lightbulb,
  CheckCircle2,
  Cpu,
  Radio,
  Clock,
  Sparkles,
} from "lucide-react";

type TrackFilter = "ALL" | "AI 深度解读" | "AI 量化交易";
type TierFilter = "ALL" | "头部权威" | "新锐先锋" | "代码基建" | "实战派黑马";

interface Props {
  onBackToCover?: () => void;
}

export function CreatorsDepartment({ onBackToCover }: Props) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTrack, setSelectedTrack] = useState<TrackFilter>("ALL");
  const [selectedTier, setSelectedTier] = useState<TierFilter>("ALL");
  const [selectedCreator, setSelectedCreator] = useState<Creator | null>(null);

  const handleBack = () => {
    if (onBackToCover) {
      onBackToCover();
    } else {
      window.location.href = "/#cover";
    }
  };

  const filteredCreators = useMemo(() => {
    return CREATORS_DATA.filter((c) => {
      const matchTrack = selectedTrack === "ALL" || c.track === selectedTrack;
      const matchTier = selectedTier === "ALL" || c.tierLabel === selectedTier;
      const q = searchQuery.toLowerCase().trim();
      const matchQuery =
        !q ||
        c.name.toLowerCase().includes(q) ||
        c.tagline?.toLowerCase().includes(q) ||
        c.profile.toLowerCase().includes(q) ||
        (c.tags && c.tags.some((t) => t.toLowerCase().includes(q))) ||
        c.viralTopics.some((t) => t.toLowerCase().includes(q));
      return matchTrack && matchTier && matchQuery;
    });
  }, [searchQuery, selectedTrack, selectedTier]);

  // Current Index in the filtered list
  const currentIndex = useMemo(() => {
    if (!selectedCreator) return -1;
    return filteredCreators.findIndex((c) => c.id === selectedCreator.id);
  }, [selectedCreator, filteredCreators]);

  const handlePrevCreator = () => {
    if (filteredCreators.length === 0) return;
    const prevIdx = currentIndex > 0 ? currentIndex - 1 : filteredCreators.length - 1;
    setSelectedCreator(filteredCreators[prevIdx]);
  };

  const handleNextCreator = () => {
    if (filteredCreators.length === 0) return;
    const nextIdx = currentIndex < filteredCreators.length - 1 ? currentIndex + 1 : 0;
    setSelectedCreator(filteredCreators[nextIdx]);
  };

  // Keyboard navigation & body scroll lock
  useEffect(() => {
    if (!selectedCreator) return;

    const origOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedCreator(null);
      } else if (e.key === "ArrowLeft") {
        handlePrevCreator();
      } else if (e.key === "ArrowRight") {
        handleNextCreator();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = origOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedCreator, currentIndex, filteredCreators]);

  return (
    <div className="space-y-12">
      {/* Top Department Breadcrumbs */}
      <div className="flex items-center justify-between border-b border-stone-200 dark:border-white/[0.08] pb-4">
        <button
          onClick={handleBack}
          className="inline-flex items-center space-x-2 text-sm font-serif text-[#e50914] dark:text-[#f43f5e] font-bold hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>返回封面精选导读 (Back to Cover)</span>
        </button>
        <span className="text-xs font-mono text-stone-400">
          DEPARTMENT IV OF VII · 40 CREATOR INTELLIGENCE ARCHIVE
        </span>
      </div>

      {/* Monumental Department Header */}
      <div className="border-b-2 border-stone-800 dark:border-stone-400 pb-6 space-y-4">
        <div className="text-xs font-mono tracking-widest text-[#e50914] dark:text-[#f43f5e] uppercase font-bold">
          DEPARTMENT IV · THE 40 CREATOR INTELLIGENCE ARCHIVE // 全球创作者学术馆藏
        </div>
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-black tracking-tight text-stone-900 dark:text-stone-50 leading-[1.08] uppercase">
          全球 YouTube AI 与量化交易创作者学术馆藏
        </h2>
        <p className="text-base sm:text-xl font-serif italic text-stone-700 dark:text-stone-300 max-w-4xl leading-relaxed">
          精选 40 位全球顶尖工程实战派与对冲基金研究员全景图谱。每位博主均配备三大代表作拆解、前30秒Hook秘诀、文案剧本架构与量化交易启示，全量本地化离线归档并直连官方零配额视频流。
        </p>

        {/* Standardized Editorial Metadata Rail */}
        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-stone-500 dark:text-stone-400 border-t border-stone-200/80 dark:border-white/[0.06] pt-4">
          <span className="text-stone-900 dark:text-stone-200 font-semibold font-serif text-sm">
            By Nexus Creator Intelligence Archive
          </span>
          <span>•</span>
          <span>40 FULL MONOGRAPHS</span>
          <span>•</span>
          <span>120 SIGNATURE MASTERPIECES</span>
          <span>•</span>
          <span>ZERO-QUOTA ATOM RSS STREAM</span>
        </div>

        {/* 4 Metrics in Museum Placards */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-4 bg-white dark:bg-[#12151e] border border-stone-200/90 dark:border-white/[0.08]">
            <div className="text-xs text-stone-400 font-mono uppercase">精选创作者</div>
            <div className="text-xl sm:text-2xl font-bold font-mono text-[#e50914] dark:text-[#f43f5e] mt-1">40 位全量深度</div>
          </div>
          <div className="p-4 bg-white dark:bg-[#12151e] border border-stone-200/90 dark:border-white/[0.08]">
            <div className="text-xs text-stone-400 font-mono uppercase">代表作深度拆解</div>
            <div className="text-xl sm:text-2xl font-bold font-mono text-stone-900 dark:text-white mt-1">120 篇核心课程</div>
          </div>
          <div className="p-4 bg-white dark:bg-[#12151e] border border-stone-200/90 dark:border-white/[0.08]">
            <div className="text-xs text-stone-400 font-mono uppercase">用户留存模型</div>
            <div className="text-xl sm:text-2xl font-bold font-mono text-emerald-700 dark:text-emerald-400 mt-1">30s 黄金 Hook</div>
          </div>
          <div className="p-4 bg-white dark:bg-[#12151e] border border-stone-200/90 dark:border-white/[0.08]">
            <div className="text-xs text-stone-400 font-mono uppercase">量化工程线</div>
            <div className="text-xl sm:text-2xl font-bold font-mono text-sky-700 dark:text-sky-400 mt-1">4 阶跃迁体系</div>
          </div>
        </div>
      </div>

      {/* Controls Bar: Search & Exhibition Wings Filters */}
      <div className="p-6 bg-white dark:bg-[#12151e] border border-stone-200/90 dark:border-white/[0.08] shadow-xs space-y-5">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="搜索博主名称、领域、代表作 (如 Karpathy, 强化学习, VectorBT, Freqtrade, Two Sigma)..."
              className="w-full pl-12 pr-12 py-3 text-sm sm:text-base bg-[#fbf9f5] dark:bg-[#0c0f16] border border-stone-300 dark:border-white/[0.1] text-stone-900 dark:text-white placeholder:text-stone-400 focus:outline-none focus:border-[#e50914] dark:focus:border-[#f43f5e] transition-all font-sans"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 dark:hover:text-stone-200"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Track Tabs */}
          <div className="flex rounded border border-stone-300 dark:border-white/[0.1] p-1 bg-[#fbf9f5] dark:bg-[#0c0f16] shrink-0">
            {(["ALL", "AI 深度解读", "AI 量化交易"] as TrackFilter[]).map((track) => (
              <button
                key={track}
                onClick={() => setSelectedTrack(track)}
                className={`px-4 py-2 text-xs sm:text-sm font-serif font-bold transition-all ${
                  selectedTrack === track
                    ? "bg-[#e50914] text-white dark:bg-[#c5a059] dark:text-stone-950 shadow-xs"
                    : "text-stone-600 dark:text-stone-400 hover:text-stone-950 dark:hover:text-white"
                }`}
              >
                {track === "ALL" ? "全部赛道" : track}
              </button>
            ))}
          </div>
        </div>

        {/* Tier Badges Row */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-stone-100 dark:border-white/[0.04]">
          <span className="text-xs font-mono text-stone-400 mr-2 flex items-center space-x-1">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>博主分级展厅：</span>
          </span>
          {[
            { id: "ALL", label: "全部层级" },
            { id: "头部权威", label: "头部权威 (宗师流)" },
            { id: "新锐先锋", label: "新锐先锋 (极客流)" },
            { id: "代码基建", label: "代码基建 (引擎流)" },
            { id: "实战派黑马", label: "实战派黑马 (实盘流)" },
          ].map((tier) => (
            <button
              key={tier.id}
              onClick={() => setSelectedTier(tier.id as TierFilter)}
              className={`px-3 py-1 text-xs font-mono rounded-full transition-all ${
                selectedTier === tier.id
                  ? "bg-[#e50914]/15 dark:bg-[#c5a059]/20 text-[#e50914] dark:text-[#e5c378] border border-[#e50914]/40 dark:border-[#c5a059]/40 font-bold"
                  : "text-stone-600 dark:text-stone-400 bg-stone-50 dark:bg-white/[0.02] border border-stone-200 dark:border-white/[0.06] hover:bg-stone-100 dark:hover:bg-white/[0.05]"
              }`}
            >
              {tier.label}
            </button>
          ))}
          <span className="ml-auto text-xs font-mono text-stone-400">
            显示 {filteredCreators.length} / {CREATORS_DATA.length} 位创作者
          </span>
        </div>
      </div>

      {/* Creators Cards Grid (Spacious & Readable) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {filteredCreators.map((creator) => {
          const tierBadgeStyle =
            creator.tierLabel === "头部权威"
              ? "bg-[#e50914] text-white"
              : creator.tierLabel === "新锐先锋"
              ? "bg-[#b88e39] text-stone-950 font-bold"
              : creator.tierLabel === "代码基建"
              ? "bg-[#1e3a8a] text-white"
              : "bg-[#059669] text-white";

          return (
            <article
              key={creator.id}
              className="bg-white dark:bg-[#12151e] border-2 border-stone-200/90 dark:border-white/[0.08] p-8 flex flex-col justify-between hover:border-[#e50914] dark:hover:border-[#c5a059] transition-all shadow-sm hover:shadow-md group cursor-pointer"
              onClick={() => setSelectedCreator(creator)}
            >
              <div>
                {/* Card Top: Channel Identity & Links */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 border-2 border-stone-300 dark:border-white/20 bg-[#fbf9f5] dark:bg-[#0c0f16] flex items-center justify-center font-mono font-black text-xl text-[#e50914] dark:text-[#e5c378] group-hover:scale-105 transition-transform shrink-0 shadow-xs">
                      {creator.name.slice(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <h3 className="text-2xl font-serif font-black text-stone-900 dark:text-white group-hover:text-[#e50914] dark:group-hover:text-[#e5c378] transition-colors leading-tight">
                        {creator.name}
                      </h3>
                      <span className="text-xs font-mono text-stone-400 block mt-0.5">
                        {creator.handle}
                      </span>
                      <div className="flex flex-wrap items-center gap-2 mt-2">
                        <span className="text-[11px] font-mono px-2.5 py-0.5 bg-[#e50914]/10 text-[#e50914] dark:bg-[#c5a059]/15 dark:text-[#e5c378] font-bold">
                          {creator.track}
                        </span>
                        <span
                          className={`text-[11px] font-mono px-2.5 py-0.5 font-bold uppercase tracking-wider ${tierBadgeStyle}`}
                        >
                          {creator.tierLabel}
                        </span>
                      </div>
                    </div>
                  </div>

                  <a
                    href={creator.channelUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-2.5 border border-stone-200 dark:border-white/[0.1] text-stone-400 hover:text-red-600 hover:border-red-500/30 transition-all shrink-0 bg-stone-50 dark:bg-white/[0.02]"
                    title="访问 YouTube 频道"
                  >
                    <Youtube className="w-5 h-5 text-red-600" />
                  </a>
                </div>

                {/* Tagline */}
                {creator.tagline && (
                  <div className="mt-5 text-base font-serif italic font-bold text-[#e50914] dark:text-[#e5c378] leading-snug">
                    “{creator.tagline}”
                  </div>
                )}

                {/* Bio Summary */}
                <p className="mt-3 text-base font-serif text-stone-700 dark:text-stone-300 leading-relaxed line-clamp-3">
                  {creator.profile}
                </p>

                {/* Tags */}
                {creator.tags && creator.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-5">
                    {creator.tags.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-mono px-2.5 py-0.5 bg-stone-100 dark:bg-white/[0.04] text-stone-600 dark:text-stone-400 border border-stone-200/60 dark:border-white/[0.04]"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Card Action */}
              <div className="mt-8 pt-5 border-t border-stone-200/80 dark:border-white/[0.06] flex items-center justify-between">
                <span className="text-xs font-mono text-stone-500 dark:text-stone-400 font-bold">
                  收录 {creator.videos ? creator.videos.length : 3} 篇核心代表作拆解
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedCreator(creator);
                  }}
                  className="inline-flex items-center space-x-2 px-5 py-2.5 bg-[#e50914] hover:bg-[#700f2d] text-white dark:bg-[#c5a059] dark:hover:bg-[#b88e39] dark:text-stone-950 text-xs font-serif font-bold uppercase tracking-wider transition-all shadow-xs group/btn"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>查阅学术详析档案</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </article>
          );
        })}
      </div>

      {filteredCreators.length === 0 && (
        <div className="text-center py-16 border border-dashed border-stone-300 dark:border-white/[0.1] bg-white dark:bg-[#12151e]">
          <p className="text-stone-500 dark:text-stone-400 text-base font-serif">
            未找到匹配“{searchQuery}”的创作者，请尝试调整筛选或搜索关键词。
          </p>
        </div>
      )}

      {/* ========================================================================= */}
      {/* GRAND EDITORIAL MONOGRAPH SPREAD (居中全景宽幅跨页画册展开展陈)             */}
      {/* ========================================================================= */}
      {selectedCreator && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 lg:p-8 overflow-hidden">
          {/* Backdrop Blur Overlay */}
          <div
            className="fixed inset-0 bg-stone-950/80 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
            onClick={() => setSelectedCreator(null)}
          />

          {/* Centered Grand Editorial Monograph Canvas (Balanced 2-Page Spread) */}
          <div
            className="relative w-full max-w-[1580px] h-[92vh] max-h-[960px] bg-[#fbf9f5] dark:bg-[#0c0f16] border-2 border-stone-800 dark:border-stone-400 shadow-2xl flex flex-col justify-between overflow-hidden animate-in zoom-in-95 duration-200 z-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 1. Monograph Top Masthead Rail */}
            <div className="bg-[#f4f1ea] dark:bg-[#080a10] border-b-2 border-stone-800 dark:border-stone-400 px-6 py-3.5 flex items-center justify-between gap-4 shrink-0">
              {/* Left Identity & Serial Stamp */}
              <div className="flex items-center space-x-3 sm:space-x-4">
                <span className="px-2.5 py-1 text-xs font-mono uppercase tracking-widest bg-[#e50914] text-white font-bold">
                  DOSSIER #{String(currentIndex + 1).padStart(2, "0")}
                </span>
                <div className="hidden sm:block">
                  <span className="font-serif font-black text-stone-900 dark:text-white text-base">
                    {selectedCreator.name}
                  </span>
                  <span className="text-xs font-mono text-stone-400 ml-2">
                    {selectedCreator.handle}
                  </span>
                </div>
              </div>

              {/* Center Flipper Navigator */}
              <div className="flex items-center space-x-1.5 sm:space-x-2 bg-stone-200/80 dark:bg-white/[0.06] p-1 border border-stone-300 dark:border-white/[0.1] font-mono text-xs">
                <button
                  onClick={handlePrevCreator}
                  className="px-2.5 sm:px-3 py-1 bg-white dark:bg-white/10 hover:bg-stone-100 dark:hover:bg-white/20 text-stone-800 dark:text-stone-200 font-bold transition-colors flex items-center space-x-1"
                  title="上一位创作者 (快捷键: ←)"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">上一位</span>
                </button>
                <span className="px-2 font-bold text-stone-600 dark:text-stone-300">
                  {currentIndex + 1} / {filteredCreators.length}
                </span>
                <button
                  onClick={handleNextCreator}
                  className="px-2.5 sm:px-3 py-1 bg-white dark:bg-white/10 hover:bg-stone-100 dark:hover:bg-white/20 text-stone-800 dark:text-stone-200 font-bold transition-colors flex items-center space-x-1"
                  title="下一位创作者 (快捷键: →)"
                >
                  <span className="hidden sm:inline">下一位</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Right Channel Link & Close Buttons */}
              <div className="flex items-center space-x-3">
                <a
                  href={selectedCreator.channelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 bg-red-600 hover:bg-red-700 text-white text-xs font-serif font-bold transition-colors shadow-2xs"
                  title="在新标签页中打开官方 YouTube 频道"
                >
                  <Youtube className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">YouTube 频道</span>
                </a>
                <button
                  onClick={() => setSelectedCreator(null)}
                  className="inline-flex items-center space-x-1 px-3 py-1.5 border border-stone-400 dark:border-white/20 bg-white dark:bg-stone-900 text-stone-800 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-white/10 text-xs font-mono font-bold transition-colors"
                  title="关闭档案画册 (快捷键: ESC)"
                >
                  <X className="w-4 h-4" />
                  <span className="hidden sm:inline">ESC</span>
                </button>
              </div>
            </div>

            {/* 2. Main Double-Page Reading Canvas */}
            <div className="grid grid-cols-1 lg:grid-cols-12 flex-1 overflow-hidden divide-y lg:divide-y-0 lg:divide-x divide-stone-300 dark:divide-white/10">
              {/* ================================================================= */}
              {/* LEFT PAGE (5 cols / ~42% width): Scholar Identity & Methodology   */}
              {/* ================================================================= */}
              <div className="lg:col-span-5 overflow-y-auto p-6 sm:p-8 space-y-6 bg-[#fdfcf9] dark:bg-[#090b10]">
                {/* Scholar Identity Crest */}
                <div className="flex items-start space-x-4 border-b border-stone-200/80 dark:border-white/[0.06] pb-5">
                  <div className="w-16 h-16 border-2 border-stone-800 dark:border-stone-400 bg-white dark:bg-[#12151e] flex items-center justify-center font-mono font-black text-2xl text-[#e50914] dark:text-[#e5c378] shadow-xs shrink-0">
                    {selectedCreator.name.slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-serif font-black text-stone-900 dark:text-white leading-tight">
                      {selectedCreator.name}
                    </h2>
                    <span className="text-xs font-mono text-stone-400 block mt-0.5">
                      {selectedCreator.handle}
                    </span>
                    <div className="flex flex-wrap items-center gap-2 mt-2">
                      <span className="text-[11px] font-mono px-2 py-0.5 bg-[#e50914] text-white font-bold">
                        {selectedCreator.tierLabel}
                      </span>
                      <span className="text-[11px] font-mono px-2 py-0.5 bg-stone-200 dark:bg-white/[0.08] text-stone-700 dark:text-stone-300 font-bold">
                        {selectedCreator.track}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Oversized Tagline Callout */}
                {selectedCreator.tagline && (
                  <div className="p-5 bg-white dark:bg-[#12151e] border-l-4 border-[#e50914] dark:border-[#c5a059] shadow-xs">
                    <p className="text-lg sm:text-xl font-serif italic font-bold text-[#e50914] dark:text-[#e5c378] leading-relaxed">
                      “{selectedCreator.tagline}”
                    </p>
                  </div>
                )}

                {/* Section 01: Academic Positioning & Bio */}
                <div className="space-y-3">
                  <div className="text-xs font-mono text-[#e50914] dark:text-[#f43f5e] uppercase font-bold tracking-wider">
                    01 // ACADEMIC POSITIONING &amp; BACKGROUND (学术定位与背景履历)
                  </div>
                  <div className="p-6 bg-white dark:bg-[#12151e] border border-stone-200/90 dark:border-white/[0.08] shadow-xs">
                    <p className="drop-cap font-serif text-base sm:text-lg text-stone-800 dark:text-stone-200 leading-relaxed">
                      {selectedCreator.profile}
                    </p>
                  </div>
                </div>

                {/* Section 05: Quantitative Trading Insight (High Contrast Placard) */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-xs font-mono text-[#e50914] dark:text-[#e5c378] uppercase font-bold tracking-wider">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>05 // QUANTITATIVE TRADING INSIGHT (量化投研启示与实盘交付法则)</span>
                  </div>
                  <div className="p-6 bg-[#fbf9f5] dark:bg-[#080d18] border-2 border-[#e50914]/30 dark:border-[#c5a059]/30 shadow-xs space-y-4">
                    <div>
                      <span className="text-[11px] font-mono text-stone-400 uppercase block mb-1 font-bold">
                        FOR TRADING // 量化实盘指导
                      </span>
                      <p className="font-serif text-base text-stone-900 dark:text-stone-100 leading-relaxed font-medium">
                        {selectedCreator.actionableTakeaways?.forTrading || selectedCreator.positioning}
                      </p>
                    </div>
                    {selectedCreator.actionableTakeaways?.forCreator && (
                      <div className="pt-3 border-t border-stone-200 dark:border-white/[0.06]">
                        <span className="text-[11px] font-mono text-stone-400 uppercase block mb-1 font-bold">
                          FOR CREATOR // 内容制作交付
                        </span>
                        <p className="font-serif text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                          {selectedCreator.actionableTakeaways.forCreator}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Section 03: 30-Second Retention Hook Analysis */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-xs font-mono text-emerald-700 dark:text-emerald-400 uppercase font-bold tracking-wider">
                    <Clock className="w-4 h-4" />
                    <span>03 // 30-SECOND RETENTION HOOK ANALYSIS (前 30 秒黄金抓手公式)</span>
                  </div>
                  <div className="p-6 bg-white dark:bg-[#12151e] border border-stone-200/90 dark:border-white/[0.08] shadow-xs space-y-4">
                    <div className="grid grid-cols-3 gap-2 text-xs font-mono text-center">
                      <div className="p-2.5 bg-stone-50 dark:bg-[#0c0f16] border border-stone-200/70 dark:border-white/[0.06]">
                        <span className="text-[#e50914] dark:text-[#f43f5e] font-bold">0:00 - 0:06</span>
                        <div className="font-serif font-bold text-stone-800 dark:text-stone-200 mt-1">
                          视觉强抓手
                        </div>
                      </div>
                      <div className="p-2.5 bg-stone-50 dark:bg-[#0c0f16] border border-stone-200/70 dark:border-white/[0.06]">
                        <span className="text-sky-700 dark:text-sky-400 font-bold">0:06 - 0:16</span>
                        <div className="font-serif font-bold text-stone-800 dark:text-stone-200 mt-1">
                          痛点与悬念
                        </div>
                      </div>
                      <div className="p-2.5 bg-stone-50 dark:bg-[#0c0f16] border border-stone-200/70 dark:border-white/[0.06]">
                        <span className="text-emerald-700 dark:text-emerald-400 font-bold">0:16 - 0:30</span>
                        <div className="font-serif font-bold text-stone-800 dark:text-stone-200 mt-1">
                          核心解法交付
                        </div>
                      </div>
                    </div>

                    <p className="font-serif text-sm sm:text-base text-stone-800 dark:text-stone-200 leading-relaxed pt-1">
                      {selectedCreator.hookAnalysis}
                    </p>
                  </div>
                </div>

                {/* Tags Cloud */}
                {selectedCreator.tags && selectedCreator.tags.length > 0 && (
                  <div className="pt-2">
                    <div className="text-[11px] font-mono text-stone-400 uppercase mb-2 font-bold">
                      ACADEMIC TAGS // 学术标签
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedCreator.tags.map((t, idx) => (
                        <span
                          key={idx}
                          className="text-xs font-mono px-2.5 py-0.5 bg-stone-100 dark:bg-white/[0.04] text-stone-600 dark:text-stone-400 border border-stone-200/60 dark:border-white/[0.04]"
                        >
                          #{t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* ================================================================= */}
              {/* RIGHT PAGE (7 cols / ~58% width): Masterpieces, Scripts & RSS Feeds */}
              {/* ================================================================= */}
              <div className="lg:col-span-7 overflow-y-auto p-6 sm:p-10 space-y-8 bg-white dark:bg-[#0e121c]">
                {/* Section 02: Three Signature Masterpieces */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 text-xs font-mono text-[#e50914] dark:text-[#e5c378] uppercase font-bold tracking-wider border-b border-stone-200 dark:border-white/[0.08] pb-2">
                    <PlayCircle className="w-4 h-4" />
                    <span>02 // THREE SIGNATURE MASTERPIECES (三大代表作深度拆解)</span>
                  </div>

                  <div className="space-y-4">
                    {selectedCreator.videos.map((vid, idx) => (
                      <div
                        key={idx}
                        className="p-5 sm:p-6 bg-[#fbf9f5] dark:bg-[#131722] border-2 border-stone-200/80 dark:border-white/[0.08] shadow-xs space-y-3"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200/60 dark:border-white/[0.04] pb-2.5">
                          <span className="text-xs font-mono font-bold px-2 py-0.5 bg-stone-200 dark:bg-white/[0.08] text-stone-800 dark:text-stone-200">
                            MASTERPIECE 0{idx + 1}
                          </span>
                          <span className="text-xs font-serif italic text-[#e50914] dark:text-[#e5c378] font-bold">
                            {vid.theme}
                          </span>
                        </div>
                        <h4 className="text-lg sm:text-xl font-bold font-serif text-stone-900 dark:text-white leading-snug">
                          {vid.title}
                        </h4>
                        <p className="text-sm font-serif text-stone-700 dark:text-stone-300 leading-relaxed">
                          {vid.keyInsights}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section 04: Video Script Architecture */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-xs font-mono text-sky-700 dark:text-sky-400 uppercase font-bold tracking-wider border-b border-stone-200 dark:border-white/[0.08] pb-2">
                    <BookOpen className="w-4 h-4" />
                    <span>04 // VIDEO SCRIPT ARCHITECTURE (文案剧本架构与完播率节奏)</span>
                  </div>
                  <div className="p-6 bg-[#f8fafc] dark:bg-[#111624] border border-stone-200/90 dark:border-white/[0.08] shadow-xs">
                    <p className="font-serif text-base text-stone-800 dark:text-stone-200 leading-relaxed">
                      {selectedCreator.scriptFramework}
                    </p>
                  </div>
                </div>

                {/* Section 06: Live YouTube RSS Feed & Latest Releases */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-stone-200 dark:border-white/[0.08] pb-2">
                    <div className="flex items-center space-x-2 text-xs font-mono text-emerald-700 dark:text-emerald-400 uppercase font-bold tracking-wider">
                      <Radio className="w-4 h-4 animate-pulse" />
                      <span>06 // LIVE YOUTUBE RSS FEED &amp; LATEST PUBLICATIONS (官方 RSS 零配额最新发布追踪)</span>
                    </div>
                    <span className="text-[10px] font-mono text-stone-400 border border-stone-200 dark:border-white/[0.08] px-2 py-0.5">
                      ZERO-QUOTA ATOM STREAM
                    </span>
                  </div>

                  {(() => {
                    const creatorFeed = (youtubeFeedData.feed as Record<string, any>)[selectedCreator.id];
                    if (creatorFeed && creatorFeed.latestVideos && creatorFeed.latestVideos.length > 0) {
                      return (
                        <div className="space-y-3">
                          <div className="p-3 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-500/20 flex items-center justify-between text-xs font-mono text-emerald-800 dark:text-emerald-300">
                            <span>已同步该频道最近公开发布的 {creatorFeed.latestVideos.length} 支视频条目</span>
                            <span>更新时间: {youtubeFeedData.updatedAt?.slice(0, 10)}</span>
                          </div>
                          <div className="divide-y divide-stone-200/80 dark:divide-white/[0.06] bg-[#fbf9f5] dark:bg-[#111520] border border-stone-200/90 dark:border-white/[0.08]">
                            {creatorFeed.latestVideos.slice(0, 6).map((v: any, vIdx: number) => (
                              <div key={vIdx} className="p-4 sm:p-5 space-y-2 hover:bg-stone-50 dark:hover:bg-white/[0.02] transition-colors">
                                <div className="flex flex-wrap items-baseline justify-between gap-2">
                                  <a
                                    href={v.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-serif font-bold text-base sm:text-lg text-stone-900 dark:text-white hover:text-red-600 transition-colors inline-flex items-center space-x-1.5"
                                  >
                                    <span>{v.title}</span>
                                    <ExternalLink className="w-3.5 h-3.5 text-stone-400 inline" />
                                  </a>
                                  <span className="text-xs font-mono text-stone-400 flex items-center space-x-1">
                                    <Clock className="w-3 h-3" />
                                    <span>{v.published?.slice(0, 10)}</span>
                                  </span>
                                </div>
                                {v.description && (
                                  <p className="text-xs sm:text-sm font-serif text-stone-600 dark:text-stone-300 leading-relaxed line-clamp-2">
                                    {v.description}
                                  </p>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    }
                    return (
                      <div className="p-6 bg-[#fbf9f5] dark:bg-[#111520] border border-stone-200/90 dark:border-white/[0.08] text-center space-y-2">
                        <p className="text-sm font-serif text-stone-600 dark:text-stone-300">
                          本频道已列入 YouTube RSS 零配额监控池。后台调度将在下一个周期自动拉取该博主最新视频条目。
                        </p>
                        <a
                          href={selectedCreator.channelUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 text-xs font-mono text-red-600 hover:underline pt-1"
                        >
                          <Youtube className="w-4 h-4" />
                          <span>直接前往 YouTube 频道查看最新动态 ➔</span>
                        </a>
                      </div>
                    );
                  })()}
                </div>
              </div>
            </div>

            {/* 3. Bottom Colophon Rail */}
            <div className="border-t border-stone-200 dark:border-white/[0.08] bg-[#f4f1ea] dark:bg-[#080a10] px-6 py-3 flex flex-wrap items-center justify-between text-xs font-mono text-stone-500 dark:text-stone-400 gap-3 shrink-0">
              <div className="flex items-center space-x-3">
                <span className="font-bold text-stone-800 dark:text-stone-200">
                  DOSSIER CATALOG // {selectedCreator.id.toUpperCase()}
                </span>
                <span>•</span>
                <span>100% VERIFIED PEER REVIEWED</span>
              </div>
              <div className="hidden md:flex items-center space-x-2 text-stone-400">
                <span>快捷键：</span>
                <kbd className="px-1.5 py-0.5 bg-white dark:bg-white/10 border border-stone-300 dark:border-white/20 text-stone-700 dark:text-stone-200 text-[10px]">←</kbd>
                <kbd className="px-1.5 py-0.5 bg-white dark:bg-white/10 border border-stone-300 dark:border-white/20 text-stone-700 dark:text-stone-200 text-[10px]">→</kbd>
                <span>翻页切换</span>
                <span>•</span>
                <kbd className="px-1.5 py-0.5 bg-white dark:bg-white/10 border border-stone-300 dark:border-white/20 text-stone-700 dark:text-stone-200 text-[10px]">ESC</kbd>
                <span>退出画册</span>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={handlePrevCreator}
                  className="px-3 py-1 bg-white dark:bg-white/10 border border-stone-300 dark:border-white/20 hover:bg-stone-100 text-stone-800 dark:text-stone-200 font-bold"
                >
                  上一位
                </button>
                <button
                  onClick={handleNextCreator}
                  className="px-3 py-1 bg-[#e50914] dark:bg-[#c5a059] text-white dark:text-stone-950 font-bold hover:opacity-90"
                >
                  下一位
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
