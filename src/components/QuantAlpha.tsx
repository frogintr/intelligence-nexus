"use client";

import React, { useState } from "react";
import { QuantResearch } from "../types";
import { Check, Copy, Terminal, Code2, LineChart, Award } from "lucide-react";

interface Props {
  research: QuantResearch[];
}

export function QuantAlpha({ research }: Props) {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="quant-alpha" className="space-y-6">
      {/* DailyArt Section Masthead */}
      <div className="flex items-center justify-between border-b-2 border-stone-800 dark:border-stone-400 pb-2">
        <div>
          <div className="text-[10px] font-mono tracking-widest text-[#9e2a2b] dark:text-[#e5c378] uppercase font-bold">
            DEPARTMENT II · QUANTITATIVE ALPHA GALLERY
          </div>
          <h2 className="text-xl sm:text-2xl font-serif font-black uppercase tracking-tight text-stone-900 dark:text-stone-50">
            量化 Alpha 艺术展厅与装裱级因子
          </h2>
        </div>
        <span className="text-[11px] font-mono text-stone-400 hidden sm:inline-block">
          CODE AS MUSEUM ART
        </span>
      </div>

      <div className="space-y-8">
        {research.map((item, idx) => (
          <article
            key={item.id}
            className="bg-white dark:bg-[#12151e] border border-stone-200/90 dark:border-white/[0.08] p-6 sm:p-10 shadow-xs relative"
          >
            {/* Museum Placard Inscription Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-100 dark:border-white/[0.04] pb-3 mb-4">
              <div className="flex items-center space-x-2">
                <span className="px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-widest bg-[#9e2a2b] text-white font-bold">
                  {item.factorCategory}
                </span>
                {item.authors && (
                  <span className="text-xs font-serif italic text-stone-600 dark:text-stone-400">
                    By {item.authors}
                  </span>
                )}
              </div>
              <span className="text-[11px] font-mono text-stone-400">
                PLATE NO. {String(idx + 1).padStart(2, "0")} · PEER REVIEWED
              </span>
            </div>

            {/* High-Contrast Editorial Title */}
            <h3 className="text-xl sm:text-3xl font-serif font-bold text-stone-900 dark:text-white leading-snug mb-3">
              {item.title}
            </h3>

            {/* Core Hypothesis & Logic */}
            <p className="font-serif text-sm text-stone-700 dark:text-stone-300 leading-relaxed mb-6">
              {item.coreHypothesis}
            </p>

            {/* Performance Indicators Placard */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-[#fbf9f5] dark:bg-[#0c0f16] border border-stone-200/80 dark:border-white/[0.06] mb-6 font-mono">
              <div>
                <div className="text-[10px] text-stone-400 uppercase">SHARPE RATIO</div>
                <div className="text-lg font-bold text-[#9e2a2b] dark:text-[#e5c378]">3.12 (ANN.)</div>
              </div>
              <div>
                <div className="text-[10px] text-stone-400 uppercase">MAX DRAWDOWN</div>
                <div className="text-lg font-bold text-emerald-700 dark:text-emerald-400">4.8%</div>
              </div>
              <div>
                <div className="text-[10px] text-stone-400 uppercase">INFORMATION RATIO</div>
                <div className="text-lg font-bold text-stone-800 dark:text-stone-200">1.84</div>
              </div>
              <div>
                <div className="text-[10px] text-stone-400 uppercase">SIGNAL HORIZON</div>
                <div className="text-lg font-bold text-stone-800 dark:text-stone-200">15m ~ 1h</div>
              </div>
            </div>

            {/* Framed Code Canvas (装裱级代码画作) */}
            <div className="my-6 border border-stone-300 dark:border-white/[0.12] bg-[#0b0e14] shadow-md overflow-hidden">
              <div className="flex items-center justify-between px-4 py-2.5 bg-[#141822] border-b border-white/[0.08]">
                <div className="flex items-center space-x-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-[11px] font-mono text-stone-400">
                    vectorized_alpha_engine.py — Python 3.11+
                  </span>
                </div>
                <button
                  onClick={() => handleCopy(item.id, item.sampleCode)}
                  className="flex items-center space-x-1 px-3 py-1 rounded bg-white/[0.06] hover:bg-white/[0.12] text-[11px] font-mono text-stone-300 transition-colors"
                >
                  {copiedId === item.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">已复制源码</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>复制策略代码</span>
                    </>
                  )}
                </button>
              </div>

              <pre className="p-5 overflow-x-auto text-xs font-mono text-stone-300 leading-relaxed max-h-[380px] scrollbar-thin">
                <code>{item.sampleCode}</code>
              </pre>
            </div>

            {/* Museum Placard Inscription Caption */}
            <div className="pt-2 text-center">
              <p className="text-xs font-serif italic text-stone-500 dark:text-stone-400">
                Plate IV. Algorithmic Formulation for Cross-Asset Reinforcement Learning Hedging Protocol.
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
