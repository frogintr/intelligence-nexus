"use client";

import React, { useState, useMemo } from "react";
import { CREATORS_DATA, Creator } from "../../data/creatorsData";
import {
  Search,
  ExternalLink,
  Youtube,
  BookOpen,
  ArrowLeft,
  ArrowRight,
  SlidersHorizontal,
  X,
  PlayCircle,
  Lightbulb,
  CheckCircle2,
  Cpu,
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

  return (
    <div className="space-y-12">
      {/* Top Department Breadcrumbs */}
      <div className="flex items-center justify-between border-b border-stone-200 dark:border-white/[0.08] pb-4">
        <button
          onClick={handleBack}
          className="inline-flex items-center space-x-2 text-sm font-serif text-[#9e2a2b] dark:text-[#e5c378] font-bold hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>返回封面精选导读 (Back to Cover)</span>
        </button>
        <span className="text-xs font-mono text-stone-400">
          DEPARTMENT IV OF VII · 40 DOSSIERS
        </span>
      </div>

      {/* Monumental Department Header */}
      <div className="border-b-2 border-stone-800 dark:border-stone-400 pb-6">
        <div className="text-xs font-mono tracking-widest text-[#9e2a2b] dark:text-[#e5c378] uppercase font-bold mb-2">
          DEPARTMENT IV · THE 40 CREATOR INTELLIGENCE ARCHIVE
        </div>
        <h2 className="text-3xl sm:text-5xl font-serif font-black tracking-tight text-stone-900 dark:text-white uppercase">
          全球 YouTube AI 与量化交易创作者学术馆藏
        </h2>
        <p className="mt-3 text-base sm:text-lg font-serif italic text-stone-600 dark:text-stone-300 max-w-3xl leading-relaxed">
          精选 40 位全球顶尖工程实战派与对冲基金研究员全景图谱。每位博主均配备<strong>三大代表作拆解、前30秒Hook秘诀、文案剧本架构与量化交易启示</strong>，全量本地化离线归档。
        </p>

        {/* 4 Metrics in Museum Placards */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-4 bg-white dark:bg-[#12151e] border border-stone-200/90 dark:border-white/[0.08]">
            <div className="text-xs text-stone-400 font-mono uppercase">精选创作者</div>
            <div className="text-xl sm:text-2xl font-bold font-mono text-[#9e2a2b] dark:text-[#e5c378] mt-1">40 位全量深度</div>
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
              className="w-full pl-12 pr-12 py-3 text-sm sm:text-base bg-[#fbf9f5] dark:bg-[#0c0f16] border border-stone-300 dark:border-white/[0.1] text-stone-900 dark:text-white placeholder:text-stone-400 focus:outline-none focus:border-[#9e2a2b] dark:focus:border-[#c5a059] transition-all font-sans"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-700 dark:hover:text-stone-200"
              >
                清空
              </button>
            )}
          </div>

          {/* Track Switcher */}
          <div className="flex items-center space-x-1 p-1 bg-stone-100 dark:bg-[#0c0f16] border border-stone-200 dark:border-white/[0.08] text-xs font-serif">
            {(["ALL", "AI 深度解读", "AI 量化交易"] as TrackFilter[]).map((t) => (
              <button
                key={t}
                onClick={() => setSelectedTrack(t)}
                className={`px-4 py-2 font-bold transition-all ${
                  selectedTrack === t
                    ? "bg-[#9e2a2b] dark:bg-[#c5a059] text-white dark:text-stone-950 shadow-xs"
                    : "text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white"
                }`}
              >
                {t === "ALL" ? "全部赛道 (40)" : t}
              </button>
            ))}
          </div>
        </div>

        {/* Tier Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-stone-100 dark:border-white/[0.04]">
          <span className="text-xs font-mono text-stone-500 dark:text-stone-400 flex items-center mr-2">
            <SlidersHorizontal className="w-3.5 h-3.5 mr-1" />
            梯队筛选:
          </span>
          {(
            [
              { label: "全部梯队", val: "ALL" },
              { label: "头部权威", val: "头部权威" },
              { label: "新锐先锋", val: "新锐先锋" },
              { label: "代码基建", val: "代码基建" },
              { label: "实战派黑马", val: "实战派黑马" },
            ] as { label: string; val: TierFilter }[]
          ).map((tier) => (
            <button
              key={tier.val}
              onClick={() => setSelectedTier(tier.val)}
              className={`px-3 py-1 text-xs font-mono transition-all ${
                selectedTier === tier.val
                  ? "bg-[#9e2a2b]/15 dark:bg-[#c5a059]/20 text-[#9e2a2b] dark:text-[#e5c378] border border-[#9e2a2b]/40 dark:border-[#c5a059]/40 font-bold"
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {filteredCreators.map((creator) => (
          <article
            key={creator.id}
            className="bg-white dark:bg-[#12151e] border border-stone-200/90 dark:border-white/[0.08] p-6 sm:p-8 flex flex-col justify-between hover:border-[#9e2a2b]/50 dark:hover:border-[#c5a059]/50 transition-all shadow-xs group"
          >
            <div>
              {/* Card Top: Channel Identity & Links */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center space-x-3.5">
                  <div className="w-12 h-12 border border-stone-300 dark:border-white/10 bg-[#fbf9f5] dark:bg-[#0c0f16] flex items-center justify-center font-mono font-bold text-base text-[#9e2a2b] dark:text-[#e5c378] group-hover:scale-105 transition-transform shrink-0">
                    {creator.name.slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="text-xl font-serif font-bold text-stone-900 dark:text-white group-hover:text-[#9e2a2b] dark:group-hover:text-[#e5c378] transition-colors">
                        {creator.name}
                      </h3>
                    </div>
                    <span className="text-xs font-mono text-stone-400">
                      {creator.handle}
                    </span>
                    <div className="flex flex-wrap items-center gap-2 mt-1">
                      <span className="text-[11px] font-mono px-2 py-0.5 bg-[#9e2a2b]/10 text-[#9e2a2b] dark:bg-[#c5a059]/15 dark:text-[#e5c378] font-bold">
                        {creator.track}
                      </span>
                      <span className="text-[11px] font-mono px-2 py-0.5 bg-stone-100 dark:bg-white/[0.04] text-stone-600 dark:text-stone-300">
                        {creator.tier}
                      </span>
                    </div>
                  </div>
                </div>

                <a
                  href={creator.channelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-stone-200 dark:border-white/[0.08] text-stone-400 hover:text-red-600 transition-colors shrink-0"
                  title="访问 YouTube 频道"
                >
                  <Youtube className="w-4 h-4 text-red-600" />
                </a>
              </div>

              {/* Tagline */}
              {creator.tagline && (
                <div className="mt-4 text-sm font-serif italic font-bold text-[#9e2a2b] dark:text-[#e5c378]">
                  “{creator.tagline}”
                </div>
              )}

              {/* Bio Summary */}
              <p className="mt-2 text-sm sm:text-base font-serif text-stone-600 dark:text-stone-300 leading-relaxed line-clamp-3">
                {creator.profile}
              </p>

              {/* Tags */}
              {creator.tags && creator.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {creator.tags.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono px-2 py-0.5 bg-stone-100 dark:bg-white/[0.04] text-stone-600 dark:text-stone-400"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Card Action */}
            <div className="mt-6 pt-4 border-t border-stone-100 dark:border-white/[0.04] flex items-center justify-between">
              <span className="text-xs font-mono text-stone-400">
                收录 {creator.videos ? creator.videos.length : 3} 篇核心代表作
              </span>
              <button
                onClick={() => setSelectedCreator(creator)}
                className="inline-flex items-center space-x-1.5 px-4 py-2 bg-[#9e2a2b]/10 dark:bg-[#c5a059]/10 hover:bg-[#9e2a2b] hover:text-white dark:hover:bg-[#c5a059] dark:hover:text-stone-950 text-[#9e2a2b] dark:text-[#e5c378] text-xs font-serif font-bold transition-all"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>查看学术详析档案</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </article>
        ))}
      </div>

      {filteredCreators.length === 0 && (
        <div className="text-center py-16 border border-dashed border-stone-300 dark:border-white/[0.1] bg-white dark:bg-[#12151e]">
          <p className="text-stone-500 dark:text-stone-400 text-base font-serif">
            未找到匹配“{searchQuery}”的创作者，请尝试调整筛选或搜索关键词。
          </p>
        </div>
      )}

      {/* ========================================================================= */}
      {/* CREATOR DEEP DOSSIER MODAL (学术专刊详析大抽屉)                           */}
      {/* ========================================================================= */}
      {selectedCreator && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div
            className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-[#fbf9f5] dark:bg-[#0c0f16] border border-stone-300 dark:border-white/[0.15] p-6 sm:p-12 shadow-2xl space-y-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 border-b-2 border-stone-800 dark:border-stone-400 pb-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 border border-stone-300 dark:border-white/10 bg-white dark:bg-[#12151e] flex items-center justify-center font-mono font-bold text-2xl text-[#9e2a2b] dark:text-[#e5c378]">
                  {selectedCreator.name.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <div className="flex items-center space-x-3">
                    <h2 className="text-2xl sm:text-3xl font-serif font-black text-stone-900 dark:text-white">
                      {selectedCreator.name}
                    </h2>
                    <span className="text-xs font-mono text-stone-400">
                      {selectedCreator.handle}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base font-serif italic text-[#9e2a2b] dark:text-[#e5c378] mt-1">
                    “{selectedCreator.tagline}”
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <a
                  href={selectedCreator.channelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-stone-200 dark:border-white/[0.08] text-stone-500 hover:text-red-600 transition-colors"
                  title="访问 YouTube 频道"
                >
                  <Youtube className="w-5 h-5 text-red-600" />
                </a>
                <button
                  onClick={() => setSelectedCreator(null)}
                  className="p-2 border border-stone-200 dark:border-white/[0.08] text-stone-500 hover:text-stone-900 dark:hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Profile Bio */}
            <div className="p-6 bg-white dark:bg-[#12151e] border border-stone-200/90 dark:border-white/[0.08]">
              <div className="text-xs font-mono text-[#9e2a2b] dark:text-[#e5c378] uppercase font-bold mb-2">
                ACADEMIC POSITIONING // 学术定位与履历
              </div>
              <p className="font-serif text-base text-stone-700 dark:text-stone-300 leading-relaxed">
                {selectedCreator.profile}
              </p>
            </div>

            {/* Section 1: Three Signature Works */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-sm font-mono text-[#9e2a2b] dark:text-[#e5c378] uppercase font-bold">
                <PlayCircle className="w-4 h-4" />
                <span>THREE SIGNATURE MASTERPIECES // 三大代表作深度拆解</span>
              </div>

              <div className="space-y-4">
                {selectedCreator.videos &&
                  selectedCreator.videos.map((vid, vIdx) => (
                    <div
                      key={vIdx}
                      className="p-6 bg-white dark:bg-[#12151e] border border-stone-200/90 dark:border-white/[0.08] space-y-2"
                    >
                      <div className="flex items-baseline justify-between">
                        <h4 className="text-base sm:text-lg font-serif font-bold text-stone-900 dark:text-white">
                          [{String(vIdx + 1).padStart(2, "0")}] {vid.title}
                        </h4>
                        <span className="text-xs font-mono text-stone-400">
                          {vid.theme}
                        </span>
                      </div>
                      <p className="text-sm font-serif text-stone-600 dark:text-stone-300 leading-relaxed pt-2 border-t border-stone-100 dark:border-white/[0.04]">
                        {vid.keyInsights}
                      </p>
                    </div>
                  ))}
              </div>
            </div>

            {/* Section 2: 30s Hook Secret */}
            <div className="p-6 bg-white dark:bg-[#12151e] border border-stone-200/90 dark:border-white/[0.08] space-y-3">
              <div className="flex items-center space-x-2 text-sm font-mono text-emerald-700 dark:text-emerald-400 uppercase font-bold">
                <Lightbulb className="w-4 h-4" />
                <span>FIRST 30-SECOND RETENTION HOOK // 前 30 秒黄金抓手</span>
              </div>
              <p className="font-serif text-sm sm:text-base text-stone-700 dark:text-stone-300 leading-relaxed">
                {selectedCreator.hookAnalysis}
              </p>
            </div>

            {/* Section 3: Script Architecture */}
            <div className="p-6 bg-white dark:bg-[#12151e] border border-stone-200/90 dark:border-white/[0.08] space-y-3">
              <div className="flex items-center space-x-2 text-sm font-mono text-sky-700 dark:text-sky-400 uppercase font-bold">
                <BookOpen className="w-4 h-4" />
                <span>VIDEO SCRIPT ARCHITECTURE // 文案剧本架构</span>
              </div>
              <p className="font-serif text-sm sm:text-base text-stone-700 dark:text-stone-300 leading-relaxed">
                {selectedCreator.scriptFramework}
              </p>
            </div>

            {/* Section 4: Quantitative Trading Insight */}
            <div className="p-6 bg-[#fbf9f5] dark:bg-[#0c0f16] border border-stone-200/90 dark:border-white/[0.08] space-y-3">
              <div className="flex items-center space-x-2 text-sm font-mono text-[#9e2a2b] dark:text-[#e5c378] uppercase font-bold">
                <CheckCircle2 className="w-4 h-4" />
                <span>QUANTITATIVE TRADING INSIGHT // 量化投研启示</span>
              </div>
              <p className="font-serif text-sm sm:text-base text-stone-800 dark:text-stone-200 leading-relaxed font-medium">
                {selectedCreator.actionableTakeaways?.forTrading || selectedCreator.positioning}
              </p>
            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-stone-200 dark:border-white/[0.08] flex justify-end">
              <button
                onClick={() => setSelectedCreator(null)}
                className="px-6 py-2.5 bg-[#9e2a2b] text-white text-xs font-serif font-bold uppercase tracking-wider"
              >
                关闭学术档案 (Close)
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
