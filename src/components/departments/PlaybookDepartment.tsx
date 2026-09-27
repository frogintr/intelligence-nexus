"use client";

import React from "react";
import { CONTENT_MODELS, QUANT_ROADMAP } from "../../data/creatorsData";
import { ArrowLeft, Target, Layers, Sparkles, Zap, Shield, TrendingUp, CheckCircle2, BookmarkCheck, Clock, Lightbulb } from "lucide-react";
import { PlaybookRoadmapDiagram } from "./PlaybookRoadmapDiagram";

interface Props {
  onBackToCover: () => void;
}

export function PlaybookDepartment({ onBackToCover }: Props) {
  const { quadrants, hooks, retentionSteps, ipPlaybook } = CONTENT_MODELS;

  return (
    <div className="space-y-16">
      {/* Top Department Breadcrumbs */}
      <div className="flex items-center justify-between border-b border-stone-200 dark:border-white/[0.08] pb-4">
        <button
          onClick={onBackToCover}
          className="inline-flex items-center space-x-2 text-sm font-serif text-[#9e2a2b] dark:text-[#e5c378] font-bold hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>返回封面精选导读 (Back to Cover)</span>
        </button>
        <span className="text-xs font-mono text-stone-400">
          DEPARTMENT V OF VII · VIRAL PLAYBOOK &amp; ROADMAP
        </span>
      </div>

      {/* Monumental Department Header */}
      <div className="border-b-2 border-stone-800 dark:border-stone-400 pb-6 space-y-4">
        <div className="text-xs font-mono tracking-widest text-[#4338ca] dark:text-[#818cf8] uppercase font-bold">
          DEPARTMENT V · STRATEGIC BLUEPRINT &amp; ENGINEERING TRAJECTORY // 爆款选题矩阵与四阶量化工程跃迁蓝图
        </div>
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-black tracking-tight text-stone-900 dark:text-stone-50 leading-[1.08] uppercase">
          爆款选题矩阵与四阶量化工程跃迁蓝图
        </h2>
        <p className="text-base sm:text-xl font-serif italic text-stone-700 dark:text-stone-300 max-w-4xl leading-relaxed">
          解构顶级科技创作者内容发酵的底层心理学坐标，以及量化投研从零到实盘对冲基金级工程基建的四阶跃迁路径。
        </p>

        {/* Standardized Editorial Metadata Rail */}
        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-stone-500 dark:text-stone-400 border-t border-stone-200/80 dark:border-white/[0.06] pt-4">
          <span className="text-stone-900 dark:text-stone-200 font-semibold font-serif text-sm">
            By Nexus Strategic Engineering Group
          </span>
          <span>•</span>
          <span>4 PSYCHOLOGICAL QUADRANTS</span>
          <span>•</span>
          <span>4 RETENTION BLUEPRINTS</span>
          <span>•</span>
          <span>4-STAGE ENGINEERING TRAJECTORY</span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SECTION 1: FOUR-QUADRANT VIRAL TOPIC MATRIX                               */}
      {/* ========================================================================= */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-stone-200 dark:border-white/[0.08] pb-3">
          <div className="flex items-center space-x-2 text-sm font-mono text-[#9e2a2b] dark:text-[#e5c378] uppercase font-bold">
            <Target className="w-4 h-4" />
            <span>THE 4-QUADRANT VIRAL TOPIC MATRIX // 4 象限爆款选题矩阵</span>
          </div>
          <span className="text-xs font-mono text-stone-400">
            CONTENT PSYCHOLOGY MODEL
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {quadrants.map((q, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#0d172b] border-2 border-indigo-900/10 dark:border-indigo-400/20 p-8 sm:p-10 shadow-sm space-y-5"
            >
              <div className="flex items-center justify-between border-b border-stone-200/80 dark:border-white/[0.06] pb-3">
                <span className="text-xs font-mono font-black px-3.5 py-1 bg-[#4338ca] text-white uppercase tracking-wider">
                  QUADRANT 0{idx + 1}
                </span>
                <span className="text-xs font-mono font-bold px-3 py-0.5 bg-[#4338ca]/10 text-[#4338ca] dark:bg-[#818cf8]/20 dark:text-[#818cf8]">
                  {q.badge}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-black text-stone-900 dark:text-white">
                {q.title}
              </h3>

              <div className="p-5 bg-[#f0f4f8] dark:bg-[#080f1e] border-l-4 border-[#4338ca] dark:border-[#818cf8] text-base sm:text-lg font-serif italic text-stone-800 dark:text-stone-200 leading-relaxed">
                &ldquo;{q.example}&rdquo;
              </div>

              <p className="text-base font-serif text-stone-700 dark:text-stone-300 leading-relaxed">
                {q.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: 30-SECOND RETENTION HOOK BLUEPRINTS                            */}
      {/* ========================================================================= */}
      <section className="space-y-6 pt-8 border-t-2 border-stone-200 dark:border-white/[0.08]">
        <div className="flex items-center justify-between border-b border-stone-200 dark:border-white/[0.08] pb-3">
          <div className="flex items-center space-x-2 text-sm font-mono text-[#4338ca] dark:text-[#818cf8] uppercase font-bold">
            <Clock className="w-4 h-4" />
            <span>30-SECOND RETENTION HOOK BLUEPRINTS // 前 30 秒黄金抓手公式</span>
          </div>
          <span className="text-xs font-mono text-stone-400 font-bold">
            AUDIENCE RETENTION FORMULAS
          </span>
        </div>

        <div className="space-y-8">
          {hooks.map((h, hIdx) => (
            <div
              key={hIdx}
              className="bg-white dark:bg-[#0d172b] border-2 border-indigo-900/10 dark:border-indigo-400/20 p-8 sm:p-10 shadow-sm space-y-5"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200/80 dark:border-white/[0.06] pb-3">
                <h3 className="text-2xl sm:text-3xl font-serif font-black text-stone-900 dark:text-white">
                  {h.mode}
                </h3>
                <span className="text-xs font-mono text-[#4338ca] dark:text-[#818cf8] font-bold">
                  {h.creators}
                </span>
              </div>

              <div className="space-y-4 pt-2">
                {h.timeline.map((item, tIdx) => (
                  <div
                    key={tIdx}
                    className="p-5 bg-stone-50 dark:bg-[#080f1e] border border-stone-200/80 dark:border-white/[0.04] space-y-2"
                  >
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="font-bold text-[#4338ca] dark:text-[#818cf8] text-sm">
                        ⏱ {item.time}
                      </span>
                      <span className="text-stone-600 dark:text-stone-300 font-serif font-bold text-sm">
                        {item.label}
                      </span>
                    </div>
                    <p className="text-base font-serif italic text-stone-800 dark:text-stone-200 leading-relaxed">
                      {item.script}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: 4-STAGE QUANTITATIVE ENGINEERING ROADMAP                       */}
      {/* ========================================================================= */}
      {/* ========================================================================= */}
      {/* SECTION 3: 4-STAGE QUANTITATIVE ENGINEERING ROADMAP                       */}
      {/* ========================================================================= */}
      <section className="space-y-6 pt-8 border-t-2 border-stone-200 dark:border-white/[0.08]">
        <div className="flex items-center justify-between border-b border-stone-200 dark:border-white/[0.08] pb-3">
          <div className="flex items-center space-x-2 text-sm font-mono text-[#4338ca] dark:text-[#818cf8] uppercase font-bold">
            <Layers className="w-4 h-4" />
            <span>4-STAGE QUANTITATIVE ENGINEERING ROADMAP // 四阶量化工程跃迁蓝图</span>
          </div>
          <span className="text-xs font-mono text-stone-400 font-bold">
            FROM ZERO TO PRODUCTION HEDGE FUND
          </span>
        </div>

        {/* Museum Blueprint Trajectory Schematic */}
        <PlaybookRoadmapDiagram />

        <div className="space-y-8">
          {QUANT_ROADMAP.map((stg, sIdx) => (
            <div
              key={sIdx}
              className="bg-white dark:bg-[#0d172b] border-2 border-indigo-900/10 dark:border-indigo-400/20 p-8 sm:p-10 shadow-sm space-y-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200/80 dark:border-white/[0.06] pb-3">
                <div className="flex items-center space-x-3">
                  <span className="text-xs font-mono font-bold px-3 py-1 bg-[#4338ca] text-white">
                    STAGE 0{sIdx + 1}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif font-black text-stone-900 dark:text-white">
                    {stg.phase}
                  </h3>
                </div>
              </div>

              <p className="font-serif text-base sm:text-lg text-stone-700 dark:text-stone-300 leading-relaxed">
                {stg.desc}
              </p>

              <div className="pt-4 border-t border-stone-200/80 dark:border-white/[0.06]">
                <span className="text-xs font-mono text-stone-400 uppercase block mb-3 font-bold">
                  核心技术基建栈 (CORE TECH STACK)
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {stg.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-3.5 py-1 text-xs font-mono bg-stone-100 dark:bg-white/[0.05] text-stone-800 dark:text-stone-200 border border-stone-300 dark:border-white/[0.1] font-bold shadow-2xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: IP COMMERCIAL PLAYBOOK                                         */}
      {/* ========================================================================= */}
      <section className="space-y-6 pt-8 border-t-2 border-stone-200 dark:border-white/[0.08]">
        <div className="flex items-center justify-between border-b border-stone-200 dark:border-white/[0.08] pb-3">
          <div className="flex items-center space-x-2 text-sm font-mono text-[#4338ca] dark:text-[#818cf8] uppercase font-bold">
            <BookmarkCheck className="w-4 h-4" />
            <span>INDIVIDUAL IP PLAYBOOK // 个人 IP 商业破局指南</span>
          </div>
          <span className="text-xs font-mono text-stone-400 font-bold">
            TRUST &amp; REVENUE ENGINE
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ipPlaybook.map((p, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#0d172b] border-2 border-indigo-900/10 dark:border-indigo-400/20 p-8 shadow-sm space-y-4"
            >
              <h3 className="text-2xl font-serif font-black text-stone-900 dark:text-white">
                {p.title}
              </h3>
              <p className="text-base font-serif text-stone-700 dark:text-stone-300 leading-relaxed">
                {p.summary}
              </p>
              <div className="pt-4 border-t border-stone-200/80 dark:border-white/[0.06] space-y-2.5">
                {p.points.map((pt, pIdx) => (
                  <div key={pIdx} className="flex items-start space-x-2 text-sm font-serif text-stone-700 dark:text-stone-300 leading-relaxed">
                    <span className="text-[#4338ca] dark:text-[#818cf8] font-bold">•</span>
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
