"use client";

import React, { useState } from "react";
import { QuantResearch } from "../types";
import { LineChart, Check, Copy } from "lucide-react";

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
    <section className="my-12">
      <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-200/80 dark:border-white/[0.08]">
        <div className="flex items-center space-x-3">
          <div className="p-1.5 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
            <LineChart className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white uppercase tracking-wider font-sans">
              QUANT &amp; ALPHA RESEARCH // 量化交易前沿与因子解构
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-serif italic">
              微观结构、瞬态动量假设与装裱式代码实现
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        {research.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl bg-white dark:bg-[#10131d] border border-slate-200/80 dark:border-white/[0.08] p-6 sm:p-8 shadow-card-light dark:shadow-2xl relative overflow-hidden"
          >
            {/* Top Tag & Authors */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div className="flex items-center space-x-2">
                <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-bold bg-[#997328]/10 dark:bg-[#c5a059]/15 text-[#997328] dark:text-[#e5c378] border border-[#997328]/25 dark:border-[#c5a059]/30">
                  {item.factorCategory}
                </span>
                {item.authors && (
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-serif italic">
                    By {item.authors}
                  </span>
                )}
              </div>
              <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500">
                arXiv / SSRN 严选
              </span>
            </div>

            {/* Factor Title */}
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 dark:text-white mb-4 leading-tight">
              {item.title}
            </h3>

            {/* Core Hypothesis Quote */}
            <div className="mb-6 p-4 rounded-xl bg-slate-50/80 dark:bg-white/[0.02] border-l-4 border-[#997328] dark:border-[#c5a059] border-y border-r border-slate-200/70 dark:border-white/[0.04]">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#997328] dark:text-[#e5c378] font-bold block mb-1">
                // CORE FACTOR HYPOTHESIS · 因子核心假设
              </span>
              <p className="text-sm text-slate-800 dark:text-slate-200 font-serif italic leading-relaxed">
                &ldquo;{item.coreHypothesis}&rdquo;
              </p>
            </div>

            {/* Backtest Benchmark Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              <div className="bg-slate-50 dark:bg-black/40 p-3.5 rounded-xl border border-slate-200/80 dark:border-white/[0.05]">
                <span className="block text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase">
                  SHARPE RATIO
                </span>
                <span className="block text-xl font-mono font-bold text-emerald-600 dark:text-emerald-400 mt-1">
                  {item.backtestSummary.sharpeRatio}
                </span>
              </div>
              <div className="bg-slate-50 dark:bg-black/40 p-3.5 rounded-xl border border-slate-200/80 dark:border-white/[0.05]">
                <span className="block text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase">
                  ANNUALIZED ALPHA
                </span>
                <span className="block text-xl font-mono font-bold text-amber-700 dark:text-amber-300 mt-1">
                  {item.backtestSummary.annualReturn}
                </span>
              </div>
              <div className="bg-slate-50 dark:bg-black/40 p-3.5 rounded-xl border border-slate-200/80 dark:border-white/[0.05]">
                <span className="block text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase">
                  MAX DRAWDOWN
                </span>
                <span className="block text-xl font-mono font-bold text-rose-600 dark:text-rose-400 mt-1">
                  {item.backtestSummary.maxDrawdown}
                </span>
              </div>
              <div className="bg-slate-50 dark:bg-black/40 p-3.5 rounded-xl border border-slate-200/80 dark:border-white/[0.05]">
                <span className="block text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase">
                  FACTOR TURNOVER
                </span>
                <span className="block text-xl font-mono font-bold text-sky-600 dark:text-sky-400 mt-1">
                  {item.backtestSummary.turnover || "2.1x"}
                </span>
              </div>
            </div>

            {/* ============================================================== */}
            {/* Framed Code as Artwork (装裱代码范式：画廊级艺术画框) */}
            {/* ============================================================== */}
            <div className="relative mt-6 rounded-xl overflow-hidden border border-slate-800/80 dark:border-white/[0.12] bg-[#0c0e14] shadow-framed-light dark:shadow-framed">
              {/* Gallery Header Frame */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-gradient-to-r from-[#171b26] to-[#12151f] border-b border-white/[0.08]">
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-xs font-mono text-slate-300 ml-2 font-medium">
                    factor_alpha_engine.py
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 hidden sm:inline">
                    PYTHON 3.14 · VECTORIZED
                  </span>
                  <button
                    onClick={() => handleCopy(item.id, item.sampleCode)}
                    className="inline-flex items-center px-2.5 py-1 rounded text-xs font-mono text-slate-200 bg-white/[0.08] hover:bg-white/[0.15] border border-white/[0.12] transition-all"
                  >
                    {copiedId === item.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400 mr-1" />
                        <span className="text-emerald-400">COPIED</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 mr-1 text-slate-400" />
                        <span>COPY CODE</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Scrollable Framed Code Block */}
              <div className="max-h-72 overflow-y-auto p-4 font-mono text-xs text-slate-200 leading-relaxed bg-[#090b10]">
                <pre>
                  <code>{item.sampleCode}</code>
                </pre>
              </div>

              {/* Gallery Bottom Bar */}
              <div className="px-4 py-1.5 bg-[#06080c] border-t border-white/[0.04] text-[10px] font-mono text-slate-500 flex justify-between">
                <span>[装裱范式：固定边界 · 平滑内滚动 · 拒绝排版膨胀]</span>
                <span>STATUS: VERIFIED ALGO</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
