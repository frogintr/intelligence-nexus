"use client";

import React from "react";
import { AiUpdate } from "../../types";
import { ArrowLeft, BookOpen, ExternalLink, Sparkles, Terminal, CheckCircle2 } from "lucide-react";
import { AiArchitectureDiagram } from "./AiArchitectureDiagram";

interface Props {
  updates: AiUpdate[];
  onBackToCover: () => void;
}

export function AiDepartment({ updates, onBackToCover }: Props) {
  return (
    <div className="space-y-12">
      {/* Top Department Breadcrumbs & Navigation */}
      <div className="flex items-center justify-between border-b border-stone-200 dark:border-white/[0.08] pb-4">
        <button
          onClick={onBackToCover}
          className="inline-flex items-center space-x-2 text-sm font-serif text-[#e50914] dark:text-[#ff4d4f] font-bold hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>返回封面精选导读 (Back to Cover)</span>
        </button>
        <span className="text-xs font-mono text-stone-400">
          DEPARTMENT II OF VII · AI FRONTIER LAB
        </span>
      </div>

      {/* Monumental Department Header */}
      <div className="border-b-2 border-stone-800 dark:border-stone-400 pb-6 space-y-4">
        <div className="text-xs font-mono tracking-widest text-[#e50914] dark:text-[#ff4d4f] uppercase font-bold">
          DEPARTMENT II · AI FRONTIER REVOLUTION &amp; AGENTIC SYSTEMS // 前沿范式与工业级智能体实践
        </div>
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-black tracking-tight text-stone-900 dark:text-stone-50 leading-[1.08] uppercase">
          前沿范式与工业级智能体实践
        </h2>
        <p className="text-base sm:text-xl font-serif italic text-stone-700 dark:text-stone-300 max-w-4xl leading-relaxed">
          深入拆解开源大模型混合专家（MoE）双层稀疏路由实测、计算机图形界面自主交互（Computer Use）安全沙箱及生产级多智能体协同流水线。
        </p>

        {/* Standardized Editorial Metadata Rail */}
        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-stone-500 dark:text-stone-400 border-t border-stone-200/80 dark:border-white/[0.06] pt-4">
          <span className="text-stone-900 dark:text-stone-200 font-semibold font-serif text-sm">
            By Nexus Frontier AI Engineering Group
          </span>
          <span>•</span>
          <span>SAN FRANCISCO &amp; BEIJING</span>
          <span>•</span>
          <span>RESEARCH MONOGRAPHS NO. 01–04</span>
          <span>•</span>
          <span>100% PRODUCTION REPRODUCIBLE</span>
        </div>
      </div>

      {/* Case Studies Long-form Stream */}
      <div className="space-y-12">
        {updates.map((item, idx) => (
          <article
            key={item.id}
            className="bg-white dark:bg-[#12151e] border-2 border-stone-200/90 dark:border-white/[0.08] p-8 sm:p-14 shadow-sm space-y-6"
          >
            {/* Meta Header */}
            <div className="flex items-center justify-between border-b border-stone-200/80 dark:border-white/[0.06] pb-4">
              <div className="flex items-center space-x-3">
                <span className="px-3.5 py-1 text-xs font-mono uppercase tracking-widest bg-[#e50914] text-white font-bold shadow-xs">
                  {item.tag}
                </span>
                <span className="text-sm font-serif italic text-stone-600 dark:text-stone-300">
                  {item.category}
                </span>
              </div>
              <span className="text-xs font-mono text-stone-400 font-bold">
                RESEARCH MONOGRAPH NO. {String(idx + 1).padStart(2, "0")} · PEER VERIFIED
              </span>
            </div>

            {/* Headline */}
            <h3 className="text-3xl sm:text-5xl font-serif font-black text-stone-900 dark:text-white leading-[1.12]">
              {item.title}
            </h3>

            {/* Main Narrative Excerpt with Drop-Cap */}
            <p className="drop-cap font-serif text-lg sm:text-xl text-stone-800 dark:text-stone-200 leading-relaxed">
              {item.summary}
            </p>

            {/* In-depth Architectural Analysis (Thick Content) */}
            {item.detailedAnalysis && (
              <div className="p-6 sm:p-8 bg-[#fbf9f5] dark:bg-[#0c0f16] border-l-4 border-[#e50914] dark:border-[#ff4d4f] space-y-2">
                <span className="text-xs font-mono uppercase tracking-widest text-[#e50914] dark:text-[#ff4d4f] font-bold block">
                  TECHNICAL DEEP-DIVE &amp; ARCHITECTURAL SPECIFICATION (机制剖析与工程实测)
                </span>
                <p className="font-serif text-base sm:text-lg text-stone-700 dark:text-stone-300 leading-relaxed">
                  {item.detailedAnalysis}
                </p>
              </div>
            )}

            {/* Museum Architectural Blueprint Schematic */}
            <AiArchitectureDiagram diagramId={item.id} />

            {/* Industrial Benchmark Metrics Grid (4 Pedestals) */}
            {item.benchmarkMetrics && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 bg-[#fbf9f5] dark:bg-[#0c0f16] border border-stone-200/90 dark:border-white/[0.08] font-mono shadow-2xs">
                {Object.entries(item.benchmarkMetrics).map(([key, val], mIdx) => (
                  <div key={mIdx} className="space-y-1">
                    <div className="text-[11px] text-stone-500 dark:text-stone-400 uppercase tracking-wider">
                      {key}
                    </div>
                    <div className="text-xl sm:text-2xl font-bold text-[#e50914] dark:text-[#ff4d4f]">
                      {val}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* YouTube Embed Framed in Gallery Inset */}
            {item.youtubeId && (
              <div className="my-8 border-2 border-stone-300 dark:border-white/[0.15] bg-black aspect-video relative shadow-lg overflow-hidden group/vid">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube-nocookie.com/embed/${item.youtubeId}`}
                  title={item.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            )}

            {/* Key Engineering Takeaways in Museum Placard Box */}
            <div className="p-8 bg-[#fbf9f5] dark:bg-[#0c0f16] border border-stone-200/90 dark:border-white/[0.08] space-y-5">
              <div className="text-xs font-mono uppercase tracking-widest text-[#e50914] dark:text-[#ff4d4f] font-black flex items-center space-x-2">
                <BookOpen className="w-4 h-4" />
                <span>CORE ENGINEERING CONCLUSIONS // 核心实战工程结论</span>
              </div>
              <div className="space-y-4">
                {item.takeaways.map((takeaway, tIdx) => (
                  <div key={tIdx} className="flex items-start space-x-3.5 text-base sm:text-lg font-serif text-stone-800 dark:text-stone-200 leading-relaxed">
                    <span className="text-[#e50914] dark:text-[#ff4d4f] font-black font-mono text-base mt-0.5">
                      [{String(tIdx + 1).padStart(2, "0")}]
                    </span>
                    <span>{takeaway}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Article Footer Colophon */}
            <div className="pt-4 border-t border-stone-200/80 dark:border-white/[0.06] flex items-center justify-between text-xs font-mono text-stone-400">
              <span>READING TIME: ~6 MINS · INDUSTRIAL SPECIFICATION</span>
              <span className="text-[#e50914] dark:text-[#ff4d4f] font-bold">
                100% REPRODUCIBLE IN PRODUCTION
              </span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
