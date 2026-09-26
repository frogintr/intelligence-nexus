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
            className="bg-white dark:bg-[#12151e] border border-stone-200/90 dark:border-white/[0.08] p-8 sm:p-12 shadow-xs space-y-6"
          >
            {/* Meta Header */}
            <div className="flex items-center justify-between border-b border-stone-100 dark:border-white/[0.04] pb-4">
              <div className="flex items-center space-x-3">
                <span className="px-3 py-1 text-xs font-mono uppercase tracking-widest bg-[#9e2a2b] text-white font-bold">
                  {item.tag}
                </span>
                <span className="text-sm font-serif italic text-stone-600 dark:text-stone-400">
                  {item.category}
                </span>
              </div>
              <span className="text-xs font-mono text-stone-400">
                DISPATCH NO. {String(idx + 1).padStart(2, "0")} · 2026 EDITION
              </span>
            </div>

            {/* Headline */}
            <h3 className="text-2xl sm:text-4xl font-serif font-bold text-stone-900 dark:text-white leading-snug">
              {item.title}
            </h3>

            {/* Main Narrative Excerpt */}
            <p className="font-serif text-base sm:text-lg text-stone-700 dark:text-stone-300 leading-relaxed">
              {item.summary}
            </p>

            {/* YouTube Embed Framed in Gallery Inset */}
            {item.youtubeId && (
              <div className="my-8 border border-stone-300 dark:border-white/[0.1] bg-black aspect-video relative shadow-md">
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
            <div className="p-6 bg-[#fbf9f5] dark:bg-[#0c0f16] border border-stone-200/90 dark:border-white/[0.06] space-y-4">
              <div className="text-xs font-mono uppercase tracking-widest text-[#9e2a2b] dark:text-[#e5c378] font-bold flex items-center space-x-2">
                <BookOpen className="w-4 h-4" />
                <span>CORE ENGINEERING CONCLUSIONS // 核心实战工程结论</span>
              </div>
              <div className="space-y-3">
                {item.takeaways.map((takeaway, tIdx) => (
                  <div key={tIdx} className="flex items-start space-x-3 text-sm sm:text-base font-serif text-stone-800 dark:text-stone-200 leading-relaxed">
                    <span className="text-[#9e2a2b] dark:text-[#e5c378] font-bold font-mono text-base mt-0.5">
                      [{String(tIdx + 1).padStart(2, "0")}]
                    </span>
                    <span>{takeaway}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Article Footer Colophon */}
            <div className="pt-4 border-t border-stone-100 dark:border-white/[0.04] flex items-center justify-between text-xs font-mono text-stone-400">
              <span>READING TIME: ~5 MINS · INDUSTRIAL PROTOCOL</span>
              <span className="text-[#9e2a2b] dark:text-[#e5c378] font-semibold">
                FULL CODE REPRODUCIBLE
              </span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
