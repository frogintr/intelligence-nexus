"use client";

import React, { useState } from "react";
import { QuantResearch } from "../types";
import { LineChart, Check, Copy, Sparkles, Terminal, Code2 } from "lucide-react";

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
    <section id="quant-alpha" className="my-16">
      {/* DailyArt Section Heading */}
      <div className="flex items-center justify-between mb-8 pb-3 border-b border-stone-200/90 dark:border-white/[0.08]">
        <div className="flex items-center space-x-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#9e2a2b] dark:bg-[#c5a059]" />
          <div>
            <h2 className="text-base sm:text-lg font-bold text-stone-900 dark:text-white uppercase tracking-wider font-serif">
              QUANT GALLERY // 量化 Alpha 艺术展厅与因子解构
            </h2>
            <p className="text-xs text-stone-500 dark:text-stone-400 font-serif italic mt-0.5">
              微观市场结构、非线性动量假说与装裱级 Python 原生实现
            </p>
          </div>
        </div>

        <span className="text-[11px] font-mono text-stone-400 hidden sm:inline-block">
          MUSEUM ARCHIVE · CODE AS ART
        </span>
      </div>

      <div className="space-y-10">
        {research.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl bg-white dark:bg-[#0c0f17] border border-stone-200/90 dark:border-white/[0.08] p-6 sm:p-10 shadow-sm relative overflow-hidden"
          >
            {/* Top Tag & Authors */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div className="flex items-center space-x-2">
                <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-bold bg-[#9e2a2b]/10 dark:bg-[#c5a059]/15 text-[#9e2a2b] dark:text-[#e5c378] border border-[#9e2a2b]/20 dark:border-[#c5a059]/30">
                  {item.factorCategory}
                </span>
                {item.authors && (
                  <span className="text-xs text-stone-500 dark:text-stone-400 font-serif italic">
                    By {item.authors}
                  </span>
                )}
              </div>
              <span className="text-[11px] font-mono text-stone-400">
                SSRN / arXiv PEER-REVIEWED
              </span>
            </div>

            {/* High-Contrast Title */}
            <h3 className="text-xl sm:text-2xl font-bold text-stone-900 dark:text-white font-serif mb-3 leading-snug">
              {item.title}
            </h3>

            {/* Core Hypothesis */}
            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-serif leading-relaxed mb-6">
              {item.coreHypothesis}
            </p>

            {/* DailyArt "Framed Code as Artwork" (装裱级代码框) */}
            <div className="relative rounded-xl overflow-hidden border border-stone-300/80 dark:border-white/[0.12] bg-[#0d1017] shadow-xl my-6">
              {/* Terminal Frame Top Bar */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-[#151922] border-b border-white/[0.08]">
                <div className="flex items-center space-x-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-[11px] font-mono text-stone-400">
                    vectorized_alpha.py — Python 3.11+
                  </span>
                </div>
                <button
                  onClick={() => handleCopy(item.id, item.sampleCode)}
                  className="flex items-center space-x-1 px-2.5 py-1 rounded bg-white/[0.06] hover:bg-white/[0.12] text-[11px] font-mono text-stone-300 transition-colors"
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

              {/* Code Contents */}
              <div className="p-4 sm:p-6 overflow-x-auto text-xs font-mono text-stone-200 leading-relaxed max-h-[380px] overflow-y-auto">
                <pre>
                  <code>{item.sampleCode}</code>
                </pre>
              </div>

              {/* DailyArt Museum Placard (作品展览铭牌) */}
              <div className="px-5 py-3.5 bg-[#12151e] border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-stone-400 text-xs">
                <div className="flex items-center space-x-2">
                  <span className="font-mono text-[#e5c378] font-bold">MUSEUM PLACARD:</span>
                  <span className="font-serif italic text-stone-300">
                    Sharpe {item.backtestSummary.sharpeRatio} · Ann. Return {item.backtestSummary.annualReturn}
                  </span>
                </div>
                <div className="flex items-center space-x-4 font-mono text-[11px]">
                  <span>MAX DD: {item.backtestSummary.maxDrawdown}</span>
                  <span className="text-emerald-400">● 100% PRODUCTION READY</span>
                </div>
              </div>
            </div>

            {/* Backtest & Risk Profile Placard */}
            {item.backtestSummary && (
              <div className="p-4 rounded-xl bg-stone-50 dark:bg-white/[0.02] border border-stone-200/80 dark:border-white/[0.06] text-xs font-serif text-stone-700 dark:text-stone-300 flex items-start space-x-3">
                <Sparkles className="w-4 h-4 text-[#9e2a2b] dark:text-[#c5a059] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-stone-900 dark:text-white font-sans">
                    回测特征与稳健性归因：
                  </strong>
                  <span className="ml-1">
                    年化收益率 {item.backtestSummary.annualReturn}，夏普比率 {item.backtestSummary.sharpeRatio}，最大回撤控制在 {item.backtestSummary.maxDrawdown}。
                  </span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
