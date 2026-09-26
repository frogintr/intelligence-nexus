"use client";

import React from "react";
import { AiUpdate } from "../../types";
import { ArrowLeft, BookOpen, ExternalLink, Sparkles, Terminal, CheckCircle2 } from "lucide-react";

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
          className="inline-flex items-center space-x-2 text-sm font-serif text-[#9e2a2b] dark:text-[#e5c378] font-bold hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>返回封面精选导读 (Back to Cover)</span>
        </button>
        <span className="text-xs font-mono text-stone-400">
          DEPARTMENT II OF VII
        </span>
      </div>

      {/* Monumental Department Header */}
      <div className="border-b-2 border-stone-800 dark:border-stone-400 pb-6">
        <div className="text-xs font-mono tracking-widest text-[#9e2a2b] dark:text-[#e5c378] uppercase font-bold mb-2">
          DEPARTMENT II · AI FRONTIER REVOLUTION &amp; AGENTIC SYSTEMS
        </div>
        <h2 className="text-3xl sm:text-5xl font-serif font-black tracking-tight text-stone-900 dark:text-white uppercase">
          前沿范式与工业级智能体实践
        </h2>
        <p className="mt-3 text-base sm:text-lg font-serif italic text-stone-600 dark:text-stone-300 max-w-3xl leading-relaxed">
          深入拆解开源大模型混合专家（MoE）路由实测、计算机图形界面自主交互（Computer Use）及生产级多智能体协同流水线。
        </p>
      </div>

      {/* Case Studies Long-form Stream */}
      <div className="space-y-12">
        {updates.map((item, idx) => (
          <article
            key={item.id}
            className="bg-white dark:bg-[#0e1424] border-2 border-stone-200/90 dark:border-blue-900/30 p-8 sm:p-14 shadow-sm space-y-6"
          >
            {/* Meta Header */}
            <div className="flex items-center justify-between border-b border-stone-200/80 dark:border-white/[0.06] pb-4">
              <div className="flex items-center space-x-3">
                <span className="px-3.5 py-1 text-xs font-mono uppercase tracking-widest bg-[#1e3a8a] text-white font-bold shadow-xs">
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

            {/* YouTube Embed Framed in Gallery Inset */}
            {item.youtubeId && (
              <div className="my-8 border-2 border-stone-300 dark:border-white/[0.15] bg-black aspect-video relative shadow-lg">
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
            <div className="p-8 bg-[#f4f7fb] dark:bg-[#080d18] border border-blue-900/20 dark:border-blue-500/20 space-y-5">
              <div className="text-xs font-mono uppercase tracking-widest text-[#1e3a8a] dark:text-[#60a5fa] font-black flex items-center space-x-2">
                <BookOpen className="w-4 h-4" />
                <span>CORE ENGINEERING CONCLUSIONS // 核心实战工程结论</span>
              </div>
              <div className="space-y-4">
                {item.takeaways.map((takeaway, tIdx) => (
                  <div key={tIdx} className="flex items-start space-x-3.5 text-base sm:text-lg font-serif text-stone-800 dark:text-stone-200 leading-relaxed">
                    <span className="text-[#1e3a8a] dark:text-[#60a5fa] font-black font-mono text-base mt-0.5">
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
              <span className="text-[#1e3a8a] dark:text-[#60a5fa] font-bold">
                100% REPRODUCIBLE IN PRODUCTION
              </span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
