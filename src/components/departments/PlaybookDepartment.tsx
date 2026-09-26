"use client";

import React from "react";
import { CONTENT_MODELS, QUANT_ROADMAP } from "../../data/creatorsData";
import { ArrowLeft, Target, Layers, Sparkles, Zap, Shield, TrendingUp, CheckCircle2, BookmarkCheck, Clock, Lightbulb } from "lucide-react";

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
      <div className="border-b-2 border-stone-800 dark:border-stone-400 pb-6">
        <div className="text-xs font-mono tracking-widest text-[#9e2a2b] dark:text-[#e5c378] uppercase font-bold mb-2">
          DEPARTMENT V · STRATEGIC BLUEPRINT &amp; ENGINEERING TRAJECTORY
        </div>
        <h2 className="text-3xl sm:text-5xl font-serif font-black tracking-tight text-stone-900 dark:text-white uppercase">
          爆款选题矩阵与四阶量化工程跃迁蓝图
        </h2>
        <p className="mt-3 text-base sm:text-lg font-serif italic text-stone-600 dark:text-stone-300 max-w-3xl leading-relaxed">
          解构顶级科技创作者内容发酵的底层心理学坐标，以及量化投研从零到实盘对冲基金级工程基建的四阶跃迁路径。
        </p>
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
              className="bg-white dark:bg-[#12151e] border border-stone-200/90 dark:border-white/[0.08] p-8 shadow-xs space-y-4"
            >
              <div className="flex items-center justify-between border-b border-stone-100 dark:border-white/[0.04] pb-3">
                <span className="text-xs font-mono font-bold px-3 py-1 bg-[#9e2a2b] text-white uppercase">
                  QUADRANT 0{idx + 1}
                </span>
                <span className="text-xs font-mono font-bold px-2 py-0.5 bg-[#9e2a2b]/10 text-[#9e2a2b] dark:bg-[#c5a059]/15 dark:text-[#e5c378]">
                  {q.badge}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 dark:text-white">
                {q.title}
              </h3>

              <div className="p-4 bg-[#fbf9f5] dark:bg-[#0c0f16] border border-stone-200/70 dark:border-white/[0.04] text-sm font-serif italic text-stone-800 dark:text-stone-200">
                &ldquo;{q.example}&rdquo;
              </div>

              <p className="text-sm font-serif text-stone-600 dark:text-stone-300 leading-relaxed">
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
          <div className="flex items-center space-x-2 text-sm font-mono text-[#9e2a2b] dark:text-[#e5c378] uppercase font-bold">
            <Clock className="w-4 h-4" />
            <span>30-SECOND RETENTION HOOK BLUEPRINTS // 前 30 秒黄金抓手公式</span>
          </div>
          <span className="text-xs font-mono text-stone-400">
            AUDIENCE RETENTION FORMULAS
          </span>
        </div>

        <div className="space-y-8">
          {hooks.map((h, hIdx) => (
            <div
              key={hIdx}
              className="bg-white dark:bg-[#12151e] border border-stone-200/90 dark:border-white/[0.08] p-8 shadow-xs space-y-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-100 dark:border-white/[0.04] pb-3">
                <h3 className="text-xl font-serif font-bold text-stone-900 dark:text-white">
                  {h.mode}
                </h3>
                <span className="text-xs font-mono text-[#9e2a2b] dark:text-[#e5c378] font-bold">
                  {h.creators}
                </span>
              </div>

              <div className="space-y-4 pt-2">
                {h.timeline.map((item, tIdx) => (
                  <div
                    key={tIdx}
                    className="p-4 bg-stone-50 dark:bg-[#0c0f16] border border-stone-200/70 dark:border-white/[0.04] space-y-1.5"
                  >
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="font-bold text-[#9e2a2b] dark:text-[#e5c378]">
                        ⏱ {item.time}
                      </span>
                      <span className="text-stone-500 font-serif font-bold">
                        {item.label}
                      </span>
                    </div>
                    <p className="text-sm font-serif italic text-stone-700 dark:text-stone-300 leading-relaxed">
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
      <section className="space-y-6 pt-8 border-t-2 border-stone-200 dark:border-white/[0.08]">
        <div className="flex items-center justify-between border-b border-stone-200 dark:border-white/[0.08] pb-3">
          <div className="flex items-center space-x-2 text-sm font-mono text-[#9e2a2b] dark:text-[#e5c378] uppercase font-bold">
            <Layers className="w-4 h-4" />
            <span>4-STAGE QUANTITATIVE ENGINEERING ROADMAP // 四阶量化工程跃迁蓝图</span>
          </div>
          <span className="text-xs font-mono text-stone-400">
            FROM ZERO TO PRODUCTION HEDGE FUND
          </span>
        </div>

        <div className="space-y-8">
          {QUANT_ROADMAP.map((stg, sIdx) => (
            <div
              key={sIdx}
              className="bg-white dark:bg-[#12151e] border border-stone-200/90 dark:border-white/[0.08] p-8 shadow-xs space-y-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-100 dark:border-white/[0.04] pb-3">
                <div className="flex items-center space-x-3">
                  <span className="text-xs font-mono font-bold px-3 py-1 bg-[#9e2a2b] text-white">
                    STAGE 0{sIdx + 1}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 dark:text-white">
                    {stg.phase}
                  </h3>
                </div>
              </div>

              <p className="font-serif text-base text-stone-700 dark:text-stone-300 leading-relaxed">
                {stg.desc}
              </p>

              <div className="pt-3 border-t border-stone-100 dark:border-white/[0.04]">
                <span className="text-xs font-mono text-stone-400 uppercase block mb-2">
                  核心技术基建栈 (CORE TECH STACK)
                </span>
                <div className="flex flex-wrap gap-2">
                  {stg.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-mono bg-stone-100 dark:bg-white/[0.04] text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-white/[0.06] font-bold"
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
          <div className="flex items-center space-x-2 text-sm font-mono text-[#9e2a2b] dark:text-[#e5c378] uppercase font-bold">
            <BookmarkCheck className="w-4 h-4" />
            <span>INDIVIDUAL IP PLAYBOOK // 个人 IP 商业破局指南</span>
          </div>
          <span className="text-xs font-mono text-stone-400">
            TRUST &amp; REVENUE ENGINE
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ipPlaybook.map((p, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#12151e] border border-stone-200/90 dark:border-white/[0.08] p-8 shadow-xs space-y-4"
            >
              <h3 className="text-xl font-serif font-bold text-stone-900 dark:text-white">
                {p.title}
              </h3>
              <p className="text-sm font-serif text-stone-600 dark:text-stone-300 leading-relaxed">
                {p.summary}
              </p>
              <div className="pt-3 border-t border-stone-100 dark:border-white/[0.04] space-y-2">
                {p.points.map((pt, pIdx) => (
                  <div key={pIdx} className="flex items-start space-x-2 text-xs font-serif text-stone-700 dark:text-stone-300 leading-relaxed">
                    <span className="text-[#9e2a2b] dark:text-[#e5c378] font-bold">•</span>
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
