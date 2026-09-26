"use client";

import React, { useState, useMemo } from "react";
import {
  CREATORS_DATA,
  CONTENT_MODELS,
  QUANT_ROADMAP,
  Creator,
} from "../data/creatorsData";
import {
  Search,
  ExternalLink,
  Youtube,
  Sparkles,
  Zap,
  TrendingUp,
  Shield,
  Layers,
  Code2,
  Cpu,
  Target,
  Clock,
  ArrowRight,
  SlidersHorizontal,
  BookmarkCheck,
  AlertTriangle,
  FileCode,
  Terminal,
  BookOpen,
  X,
  PlayCircle,
  Lightbulb,
  CheckCircle2,
} from "lucide-react";

type TrackFilter = "ALL" | "AI 深度解读" | "AI 量化交易";
type TierFilter = "ALL" | "头部权威" | "新锐先锋" | "代码基建" | "实战派黑马";

export function CreatorsView() {
  const [activeTab, setActiveTab] = useState<"radar" | "content" | "roadmap" | "playbook">("radar");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTrack, setSelectedTrack] = useState<TrackFilter>("ALL");
  const [selectedTier, setSelectedTier] = useState<TierFilter>("ALL");
  const [selectedCreator, setSelectedCreator] = useState<Creator | null>(null);

  // Filtered creators list
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
      {/* Editorial Masthead / Hero Banner */}
      <section className="relative overflow-hidden rounded-2xl border border-slate-200/90 dark:border-white/[0.08] bg-gradient-to-b from-[#f5f2eb] to-[#f9f8f5] dark:from-[#0f131c] dark:to-[#0a0d14] p-6 sm:p-10 shadow-sm">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#997328]/10 via-[#c5a059]/5 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-[#997328]/30 dark:border-[#c5a059]/40 bg-[#997328]/10 dark:bg-[#c5a059]/10 text-[#997328] dark:text-[#e5c378] text-xs font-mono font-bold tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>GLOBAL YOUTUBE INTEL · RESEARCH RADAR</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white font-sans">
            全球 YouTube AI 与量化交易创作者雷达
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 font-serif leading-relaxed">
            精选 40 位全球顶尖工程实战派与对冲基金研究员全景图谱。每位博主均配备**三大代表作拆解、前30秒Hook秘诀、文案剧本架构与量化交易启示**；深度解构 4 象限爆款选题矩阵与 4 阶量化工程跃迁蓝图，全量本地化离线归档，直击技术与实盘本质。
          </p>

          {/* Quick Metrics Bar */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 rounded-lg border border-slate-200/80 dark:border-white/[0.06] bg-white/70 dark:bg-white/[0.02]">
              <div className="text-[11px] text-slate-500 dark:text-slate-400 font-mono uppercase">精选创作者</div>
              <div className="text-xl font-bold font-mono text-[#997328] dark:text-[#e5c378]">40 位全量深度</div>
            </div>
            <div className="p-3 rounded-lg border border-slate-200/80 dark:border-white/[0.06] bg-white/70 dark:bg-white/[0.02]">
              <div className="text-[11px] text-slate-500 dark:text-slate-400 font-mono uppercase">深度代表作拆解</div>
              <div className="text-xl font-bold font-mono text-slate-900 dark:text-white">120 篇核心课程</div>
            </div>
            <div className="p-3 rounded-lg border border-slate-200/80 dark:border-white/[0.06] bg-white/70 dark:bg-white/[0.02]">
              <div className="text-[11px] text-slate-500 dark:text-slate-400 font-mono uppercase">留存模型</div>
              <div className="text-xl font-bold font-mono text-emerald-600 dark:text-emerald-400">30s 黄金 Hook</div>
            </div>
            <div className="p-3 rounded-lg border border-slate-200/80 dark:border-white/[0.06] bg-white/70 dark:bg-white/[0.02]">
              <div className="text-[11px] text-slate-500 dark:text-slate-400 font-mono uppercase">量化工程线</div>
              <div className="text-xl font-bold font-mono text-indigo-600 dark:text-indigo-400">4 阶跃迁体系</div>
            </div>
          </div>
        </div>

        {/* View Segment Switcher */}
        <div className="mt-8 flex flex-wrap items-center gap-2 border-t border-slate-200/80 dark:border-white/[0.08] pt-6">
          <button
            onClick={() => setActiveTab("radar")}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-xs font-medium transition-all ${
              activeTab === "radar"
                ? "bg-[#997328] dark:bg-[#c5a059] text-white dark:text-slate-950 font-semibold shadow-sm"
                : "bg-white/80 dark:bg-white/[0.04] text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/[0.08] border border-slate-200 dark:border-white/[0.08]"
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>创作者图谱雷达 ({filteredCreators.length})</span>
          </button>
          <button
            onClick={() => setActiveTab("content")}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-xs font-medium transition-all ${
              activeTab === "content"
                ? "bg-[#997328] dark:bg-[#c5a059] text-white dark:text-slate-950 font-semibold shadow-sm"
                : "bg-white/80 dark:bg-white/[0.04] text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/[0.08] border border-slate-200 dark:border-white/[0.08]"
            }`}
          >
            <Target className="w-3.5 h-3.5" />
            <span>4象限选题与30秒Hook</span>
          </button>
          <button
            onClick={() => setActiveTab("roadmap")}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-xs font-medium transition-all ${
              activeTab === "roadmap"
                ? "bg-[#997328] dark:bg-[#c5a059] text-white dark:text-slate-950 font-semibold shadow-sm"
                : "bg-white/80 dark:bg-white/[0.04] text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/[0.08] border border-slate-200 dark:border-white/[0.08]"
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>4阶量化工程路线</span>
          </button>
          <button
            onClick={() => setActiveTab("playbook")}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-xs font-medium transition-all ${
              activeTab === "playbook"
                ? "bg-[#997328] dark:bg-[#c5a059] text-white dark:text-slate-950 font-semibold shadow-sm"
                : "bg-white/80 dark:bg-white/[0.04] text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/[0.08] border border-slate-200 dark:border-white/[0.08]"
            }`}
          >
            <BookmarkCheck className="w-3.5 h-3.5" />
            <span>个人 IP 破局指南</span>
          </button>
        </div>
      </section>

      {/* TAB 1: CREATOR RADAR */}
      {activeTab === "radar" && (
        <section className="space-y-6">
          {/* Controls Bar: Search & Filters */}
          <div className="p-4 sm:p-5 rounded-xl border border-slate-200/90 dark:border-white/[0.08] bg-white/80 dark:bg-[#0c0f17] shadow-sm space-y-4">
            <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center">
              {/* Search Input */}
              <div className="relative flex-1">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="搜索博主名称、标签、定位或代表作 (如 Karpathy, 强化学习, VectorBT, Freqtrade)..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg text-xs sm:text-sm bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.08] text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#997328] dark:focus:ring-[#c5a059] transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                  >
                    清空
                  </button>
                )}
              </div>

              {/* Track Switcher */}
              <div className="flex items-center space-x-1.5 p-1 rounded-lg bg-slate-100 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/[0.06] text-xs">
                {(["ALL", "AI 深度解读", "AI 量化交易"] as TrackFilter[]).map((t) => (
                  <button
                    key={t}
                    onClick={() => setSelectedTrack(t)}
                    className={`px-3 py-1.5 rounded-md font-medium transition-all ${
                      selectedTrack === t
                        ? "bg-white dark:bg-[#121620] text-[#997328] dark:text-[#e5c378] shadow-sm font-semibold"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                    }`}
                  >
                    {t === "ALL" ? "全部赛道 (40)" : t}
                  </button>
                ))}
              </div>
            </div>

            {/* Tier Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100 dark:border-white/[0.04]">
              <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 flex items-center mr-1">
                <SlidersHorizontal className="w-3 h-3 mr-1" />
                层级梯队:
              </span>
              {(
                [
                  { label: "全部", val: "ALL" },
                  { label: "头部权威", val: "头部权威" },
                  { label: "新锐先锋", val: "新锐先锋" },
                  { label: "代码基建", val: "代码基建" },
                  { label: "实战派黑马", val: "实战派黑马" },
                ] as { label: string; val: TierFilter }[]
              ).map((tier) => (
                <button
                  key={tier.val}
                  onClick={() => setSelectedTier(tier.val)}
                  className={`px-2.5 py-1 rounded-full text-xs font-mono transition-all ${
                    selectedTier === tier.val
                      ? "bg-[#997328]/15 dark:bg-[#c5a059]/20 text-[#997328] dark:text-[#e5c378] border border-[#997328]/40 dark:border-[#c5a059]/40 font-semibold"
                      : "text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-white/[0.02] border border-slate-200/80 dark:border-white/[0.06] hover:bg-slate-100 dark:hover:bg-white/[0.05]"
                  }`}
                >
                  {tier.label}
                </button>
              ))}
              <span className="ml-auto text-[11px] font-mono text-slate-400">
                显示 {filteredCreators.length} / {CREATORS_DATA.length} 位
              </span>
            </div>
          </div>

          {/* Creators Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
            {filteredCreators.map((creator) => (
              <div
                key={creator.id}
                className="group flex flex-col justify-between rounded-xl border border-slate-200/90 dark:border-white/[0.08] bg-white dark:bg-[#0c0f17] p-5 sm:p-6 shadow-sm hover:border-[#997328]/50 dark:hover:border-[#c5a059]/50 hover:shadow-md transition-all duration-200"
              >
                <div>
                  {/* Card Top: Channel Identity & Links */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-[#997328]/20 to-[#6d5118]/20 dark:from-[#c5a059]/20 dark:to-[#8c6d32]/20 border border-[#997328]/30 dark:border-[#c5a059]/30 flex items-center justify-center font-mono font-bold text-sm text-[#997328] dark:text-[#e5c378] group-hover:scale-105 transition-transform shrink-0">
                        {creator.name.slice(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <h3 className="text-base font-bold text-slate-900 dark:text-white font-sans group-hover:text-[#997328] dark:group-hover:text-[#e5c378] transition-colors">
                            {creator.name}
                          </h3>
                          <span className="text-[11px] font-mono text-slate-400">
                            {creator.handle}
                          </span>
                        </div>
                        <div className="flex flex-wrap items-center gap-1.5 mt-1">
                          <span
                            className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded ${
                              creator.track === "AI 深度解读"
                                ? "bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-500/20"
                                : "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20"
                            }`}
                          >
                            {creator.track}
                          </span>
                          <span className="text-[10px] font-mono text-[#997328] dark:text-[#e5c378] px-1.5 py-0.5 rounded bg-[#997328]/10 dark:bg-[#c5a059]/10 border border-[#997328]/20 dark:border-[#c5a059]/20">
                            {creator.tier}
                          </span>
                        </div>
                      </div>
                    </div>

                    <a
                      href={creator.channelUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg border border-slate-200 dark:border-white/[0.08] text-slate-500 hover:text-red-600 dark:text-slate-400 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/20 transition-all flex items-center space-x-1 text-xs shrink-0"
                      title="打开 YouTube 频道（如受限，请使用完整离线智库）"
                    >
                      <Youtube className="w-4 h-4 text-red-500" />
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  {/* Tagline / Core Statement */}
                  {creator.tagline && (
                    <div className="mt-3 text-xs font-semibold text-[#997328] dark:text-[#e5c378] font-sans">
                      “{creator.tagline}”
                    </div>
                  )}

                  {/* Positioning / Profile Summary */}
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-serif leading-relaxed line-clamp-3">
                    {creator.profile}
                  </p>

                  {/* Tags */}
                  {creator.tags && creator.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-3">
                      {creator.tags.map((t, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-white/[0.04] text-slate-600 dark:text-slate-400"
                        >
                          #{t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Card Action & Viral Topics */}
                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-white/[0.04] flex items-center justify-between gap-3">
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                    包含 {creator.videos ? creator.videos.length : 3} 篇代表作拆解
                  </div>

                  <button
                    onClick={() => setSelectedCreator(creator)}
                    className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#997328]/10 dark:bg-[#c5a059]/10 hover:bg-[#997328]/20 dark:hover:bg-[#c5a059]/20 text-[#997328] dark:text-[#e5c378] border border-[#997328]/30 dark:border-[#c5a059]/30 text-xs font-medium transition-all"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>查看深度档案</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredCreators.length === 0 && (
            <div className="text-center py-16 border border-dashed border-slate-300 dark:border-white/[0.1] rounded-xl">
              <p className="text-slate-500 dark:text-slate-400 text-sm font-serif">
                未找到匹配“{searchQuery}”的创作者，请尝试调整筛选或搜索关键词。
              </p>
            </div>
          )}
        </section>
      )}

      {/* CREATOR DEEP DOSSIER MODAL */}
      {selectedCreator && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border border-slate-200/90 dark:border-white/[0.1] bg-[#fdfcf9] dark:bg-[#0c0f17] p-6 sm:p-8 shadow-2xl space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 border-b border-slate-200 dark:border-white/[0.08] pb-5">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#997328]/20 to-[#6d5118]/20 dark:from-[#c5a059]/20 dark:to-[#8c6d32]/20 border border-[#997328]/40 dark:border-[#c5a059]/40 flex items-center justify-center font-mono font-extrabold text-xl text-[#997328] dark:text-[#e5c378]">
                  {selectedCreator.name.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-sans">
                      {selectedCreator.name}
                    </h2>
                    <span className="text-xs font-mono text-slate-400">
                      {selectedCreator.handle}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-[#997328] dark:text-[#e5c378] mt-0.5">
                    {selectedCreator.tagline}
                  </p>
                  <div className="flex flex-wrap items-center gap-2 mt-2">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-500/20">
                      {selectedCreator.track}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#997328]/10 dark:bg-[#c5a059]/10 text-[#997328] dark:text-[#e5c378] border border-[#997328]/30 dark:border-[#c5a059]/30">
                      {selectedCreator.tier}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <a
                  href={selectedCreator.channelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg border border-slate-200 dark:border-white/[0.08] text-slate-500 hover:text-red-600 dark:text-slate-400 dark:hover:text-red-400 transition-colors"
                  title="访问 YouTube 频道"
                >
                  <Youtube className="w-4 h-4 text-red-500" />
                </a>
                <button
                  onClick={() => setSelectedCreator(null)}
                  className="p-2 rounded-lg border border-slate-200 dark:border-white/[0.08] text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Profile & Style */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200/80 dark:border-white/[0.06] space-y-1.5">
                <div className="text-[11px] font-mono uppercase text-[#997328] dark:text-[#e5c378] font-bold">
                  创作者人物背景与定位
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-serif leading-relaxed">
                  {selectedCreator.profile}
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200/80 dark:border-white/[0.06] space-y-1.5">
                <div className="text-[11px] font-mono uppercase text-indigo-600 dark:text-indigo-400 font-bold">
                  视听与剪辑风格特征
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-serif leading-relaxed">
                  {selectedCreator.contentStyle}
                </p>
              </div>
            </div>

            {/* Representative Videos Deep Dive */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm font-bold text-slate-900 dark:text-white font-sans">
                <PlayCircle className="w-4 h-4 text-[#997328] dark:text-[#c5a059]" />
                <span>三大现象级代表作与核心逻辑深度拆解</span>
              </div>
              <div className="space-y-3">
                {selectedCreator.videos &&
                  selectedCreator.videos.map((vid, vIdx) => (
                    <div
                      key={vIdx}
                      className="p-4 rounded-xl border border-slate-200/80 dark:border-white/[0.06] bg-white dark:bg-white/[0.01] space-y-2"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white font-sans">
                          {vIdx + 1}. {vid.title}
                        </div>
                      </div>
                      <div className="text-xs text-[#997328] dark:text-[#e5c378] font-mono">
                        主题：{vid.theme}
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-300 font-serif leading-relaxed bg-slate-50 dark:bg-white/[0.02] p-2.5 rounded-lg border border-slate-100 dark:border-white/[0.03]">
                        <strong className="text-slate-800 dark:text-slate-200">硬核看点剖析：</strong>
                        {vid.keyInsights}
                      </p>
                    </div>
                  ))}
              </div>
            </div>

            {/* Hook Analysis & Script Framework */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 dark:bg-emerald-500/[0.02] space-y-1.5">
                <div className="text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400">
                  前 30 秒黄金留存 Hook 拆解
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-300 font-serif leading-relaxed italic">
                  {selectedCreator.hookAnalysis}
                </p>
              </div>
              <div className="p-4 rounded-xl border border-blue-500/20 bg-blue-500/5 dark:bg-blue-500/[0.02] space-y-1.5">
                <div className="text-xs font-mono font-bold text-blue-700 dark:text-blue-400">
                  文案节奏与叙事推进架构
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-300 font-serif leading-relaxed">
                  {selectedCreator.scriptFramework}
                </p>
              </div>
            </div>

            {/* Actionable Takeaways */}
            {selectedCreator.actionableTakeaways && (
              <div className="p-4 rounded-xl border border-amber-500/20 bg-amber-500/5 dark:bg-amber-500/[0.02] space-y-3">
                <div className="flex items-center space-x-2 text-xs font-mono font-bold text-amber-700 dark:text-amber-400">
                  <Lightbulb className="w-4 h-4" />
                  <span>核心实操启示 (Actionable Takeaways)</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-serif leading-relaxed text-slate-700 dark:text-slate-300">
                  <div className="p-2.5 rounded bg-white/80 dark:bg-white/[0.02] border border-amber-500/10">
                    <span className="font-bold text-slate-900 dark:text-white block mb-1">
                      💡 对量化交易者的实战启示：
                    </span>
                    {selectedCreator.actionableTakeaways.forTrading}
                  </div>
                  <div className="p-2.5 rounded bg-white/80 dark:bg-white/[0.02] border border-amber-500/10">
                    <span className="font-bold text-slate-900 dark:text-white block mb-1">
                      🎬 对内容创作者的交付启示：
                    </span>
                    {selectedCreator.actionableTakeaways.forCreator}
                  </div>
                </div>
              </div>
            )}

            {/* Offline Safety Note */}
            <div className="text-center pt-2">
              <span className="text-[11px] text-slate-400 font-mono">
                本档案为 Intelligence Nexus 离线结构化智库 · 无需翻墙即可全览核心代码推导与创作架构
              </span>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: CONTENT FRAMEWORKS & 30S HOOK */}
      {activeTab === "content" && (
        <section className="space-y-10">
          {/* 4-Quadrant Topic Matrix */}
          <div>
            <div className="flex items-center space-x-3 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#997328] dark:bg-[#c5a059]" />
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white font-sans">
                4 象限爆款选题矩阵
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-serif mb-6">
              根据全球 Top 40 创作者算法推流数据提炼，覆盖从“吸睛破圈”到“高信任转化”的完整受众认知路径。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {CONTENT_MODELS.quadrants.map((quad, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-200/90 dark:border-white/[0.08] bg-white dark:bg-[#0c0f17] p-5 sm:p-6 shadow-sm hover:border-[#997328]/40 dark:hover:border-[#c5a059]/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-[#997328]/10 dark:bg-[#c5a059]/10 text-[#997328] dark:text-[#e5c378] border border-[#997328]/30 dark:border-[#c5a059]/30">
                        象限 0{idx + 1} · {quad.badge}
                      </span>
                      <Target className="w-4 h-4 text-slate-400" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white font-sans">
                      {quad.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-serif leading-relaxed">
                      {quad.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-white/[0.04]">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1">
                      经典爆款标题范式
                    </div>
                    <div className="p-3 rounded-lg bg-slate-50 dark:bg-white/[0.02] border border-slate-200/60 dark:border-white/[0.04] text-xs font-mono text-slate-800 dark:text-slate-200 font-medium">
                      “{quad.example}”
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 30-Second Retention Hook Formulas */}
          <div className="pt-6 border-t border-slate-200/80 dark:border-white/[0.08]">
            <div className="flex items-center space-x-3 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white font-sans">
                前 30 秒黄金留存 Hook 公式 (Retention Blueprints)
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-serif mb-6">
              在 YouTube 推荐算法中，前 30 秒留存率决定了视频能否进入首页流量池。以下为顶流博主反复实测生效的黄金脚本模板。
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {CONTENT_MODELS.hooks.map((hook, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-200/90 dark:border-white/[0.08] bg-white dark:bg-[#0c0f17] p-5 sm:p-6 shadow-sm space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white font-sans">
                        {hook.mode}
                      </h3>
                      <p className="text-xs font-mono text-[#997328] dark:text-[#e5c378] mt-0.5">
                        {hook.creators}
                      </p>
                    </div>
                    <Clock className="w-4 h-4 text-slate-400" />
                  </div>

                  <div className="space-y-3 pt-2">
                    {hook.timeline.map((step, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-3 rounded-lg bg-slate-50 dark:bg-white/[0.02] border border-slate-200/60 dark:border-white/[0.04] space-y-1.5"
                      >
                        <div className="flex items-center justify-between text-xs font-mono">
                          <span className="font-bold text-[#997328] dark:text-[#e5c378]">
                            {step.time}
                          </span>
                          <span className="px-2 py-0.5 rounded bg-slate-200/60 dark:bg-white/[0.06] text-[10px] text-slate-600 dark:text-slate-300">
                            {step.label}
                          </span>
                        </div>
                        <p className="text-xs text-slate-700 dark:text-slate-300 font-serif leading-relaxed italic">
                          {step.script}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 5-Step Video Narrative Arc */}
          <div className="pt-6 border-t border-slate-200/80 dark:border-white/[0.08]">
            <div className="flex items-center space-x-3 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white font-sans">
                视频节奏与文案推进骨架 (5-Step Framework)
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-serif mb-6">
              告别枯燥流水账代码讲解，采用高信息密度与戏剧张力的 5 段式推进架构。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
              {CONTENT_MODELS.retentionSteps.map((step) => (
                <div
                  key={step.step}
                  className="rounded-xl border border-slate-200/90 dark:border-white/[0.08] bg-white dark:bg-[#0c0f17] p-4 flex flex-col justify-between"
                >
                  <div>
                    <div className="text-2xl font-black font-mono text-[#997328]/30 dark:text-[#c5a059]/30 mb-2">
                      {step.step}
                    </div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white font-sans mb-1.5">
                      {step.title}
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 font-serif leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* TAB 3: QUANT ENGINEERING ROADMAP */}
      {activeTab === "roadmap" && (
        <section className="space-y-8">
          <div>
            <div className="flex items-center space-x-3 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-500" />
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white font-sans">
                从学习者到「AI 量化实战者」的 4 阶工程跃迁蓝图
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-serif mb-6">
              拒绝过度优化（Curve-fitting）与玩具代码。从工业级底座搭建、毫秒级向量化回测、多智能体协同，到实盘物理熔断防御。
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {QUANT_ROADMAP.map((phase, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-slate-200/90 dark:border-white/[0.08] bg-white dark:bg-[#0c0f17] p-6 shadow-sm hover:border-[#997328]/40 dark:hover:border-[#c5a059]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 border border-indigo-500/20">
                      PHASE 0{idx + 1}
                    </span>
                    <Layers className="w-4 h-4 text-slate-400" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white font-sans">
                    {phase.phase}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-serif leading-relaxed">
                    {phase.desc}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 dark:border-white/[0.04]">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center">
                    <Code2 className="w-3 h-3 mr-1 text-[#997328] dark:text-[#c5a059]" />
                    核心工具链与量化指标
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {phase.tech.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-xs font-mono px-2.5 py-1 rounded bg-slate-50 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/[0.06] text-slate-800 dark:text-slate-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Golden Defense Guardrail Box */}
          <div className="p-6 rounded-xl border border-amber-500/30 bg-amber-500/5 dark:bg-amber-500/[0.03] space-y-3">
            <div className="flex items-center space-x-2 text-amber-700 dark:text-amber-400 font-bold text-sm">
              <AlertTriangle className="w-4 h-4" />
              <span>量化工程生存底线：物理熔断器（Hard Kill-Switch）</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-serif leading-relaxed">
              任何进入实盘的自动化策略，必须在代码最外层具备无依赖的断路机制：当单日回撤超过设定阈值（如 -2%）、或交易所 API 返回异常滑点时，直接注销委托、强制市价平仓、并发送 Telegram/钉钉告警，杜绝因极端单边行情或脚本死循环导致本金穿仓。
            </p>
          </div>
        </section>
      )}

      {/* TAB 4: PERSONAL IP PLAYBOOK */}
      {activeTab === "playbook" && (
        <section className="space-y-8">
          <div>
            <div className="flex items-center space-x-3 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#997328] dark:bg-[#c5a059]" />
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white font-sans">
                个人技术 IP 破局：做自己的 AI 量化交易频道
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-serif mb-6">
              如何建立无法被 AI 替代的信任壁垒？三项核心原则，少走 80% 的内容创作弯路。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CONTENT_MODELS.ipPlaybook.map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-slate-200/90 dark:border-white/[0.08] bg-white dark:bg-[#0c0f17] p-6 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#997328]/10 dark:bg-[#c5a059]/10 border border-[#997328]/20 dark:border-[#c5a059]/20 flex items-center justify-center text-[#997328] dark:text-[#e5c378] font-bold font-mono mb-4">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white font-sans">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-[#997328] dark:text-[#e5c378] font-serif">
                    {item.summary}
                  </p>
                  <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-serif">
                    {item.points.map((p, pIdx) => (
                      <li key={pIdx} className="flex items-start space-x-2">
                        <span className="text-[#997328] dark:text-[#c5a059] mt-1">•</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* GitHub Delivery Banner */}
          <div className="p-6 rounded-xl border border-slate-200/90 dark:border-white/[0.08] bg-gradient-to-r from-slate-900 to-slate-800 text-white shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="inline-flex items-center space-x-1.5 text-xs font-mono text-[#e5c378]">
                <Terminal className="w-3.5 h-3.5" />
                <span>CODE REPOSITORY READY</span>
              </div>
              <h4 className="text-lg font-bold font-sans">
                将你的每一个实验，沉淀为高质量 GitHub 仓库
              </h4>
              <p className="text-xs text-slate-300 font-serif">
                包含完整的 requirements.txt、.env.example 与 Mermaid 架构图，让观众能随时一键复现。
              </p>
            </div>
            <a
              href="https://github.com/frogintr/intelligence-nexus"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-lg bg-[#c5a059] text-slate-950 font-bold text-xs hover:bg-[#d6b26b] transition-all shadow-md shrink-0"
            >
              <FileCode className="w-4 h-4" />
              <span>查看开源仓库</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </section>
      )}
    </div>
  );
}
