import React from "react";
import { SentimentData } from "../types";

interface Props {
  sentiment: {
    us: SentimentData;
    china: SentimentData;
  };
}

export function SentimentGauges({ sentiment }: Props) {
  const { us, china } = sentiment;

  const getScoreColor = (score: number) => {
    if (score >= 75) return "text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 border-emerald-200 dark:border-emerald-500/30";
    if (score >= 55) return "text-amber-800 dark:text-amber-300 bg-amber-50 dark:bg-amber-500/10 border-amber-200 dark:border-amber-500/30";
    if (score >= 45) return "text-stone-700 dark:text-stone-300 bg-stone-100 dark:bg-stone-500/10 border-stone-300 dark:border-stone-500/30";
    if (score >= 25) return "text-orange-700 dark:text-orange-400 bg-orange-50 dark:bg-orange-500/10 border-orange-200 dark:border-orange-500/30";
    return "text-rose-700 dark:text-rose-500 bg-rose-50 dark:bg-rose-500/10 border-rose-200 dark:border-rose-500/30";
  };

  const getProgressGradient = (score: number) => {
    if (score >= 60) return "from-emerald-500 to-amber-400";
    if (score >= 40) return "from-amber-400 to-orange-400";
    return "from-orange-500 to-rose-600";
  };

  return (
    <section id="sentiment-gauges" className="my-16">
      <div className="flex items-center justify-between mb-8 pb-3 border-b border-stone-200/90 dark:border-white/[0.08]">
        <div className="flex items-center space-x-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#9e2a2b] dark:bg-[#c5a059]" />
          <div>
            <h2 className="text-base sm:text-lg font-bold text-stone-900 dark:text-white uppercase tracking-wider font-serif">
              DUAL SENTIMENT GAUGES // 中美双市场情绪分立标尺
            </h2>
            <p className="text-xs text-stone-500 dark:text-stone-400 font-serif italic mt-0.5">
              严禁合并加权 · 尊重资本流动与制度差异的分立式测绘
            </p>
          </div>
        </div>

        <span className="text-[11px] font-mono text-stone-400 hidden sm:inline-block">
          INDEPENDENT SCALES
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* US Market Gauge */}
        <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-[#0c0f17] border border-stone-200/90 dark:border-white/[0.08] p-6 sm:p-8 shadow-sm transition-all hover:border-[#9e2a2b]/40 dark:hover:border-[#c5a059]/40">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">🇺🇸</span>
              <div>
                <h3 className="text-base font-bold text-stone-900 dark:text-white font-serif tracking-wide">
                  美股市场情绪 · FEAR &amp; GREED
                </h3>
                <p className="text-xs text-stone-500 dark:text-stone-400 font-mono">
                  CNN F&amp;G 复合模型 · 7项微观因子锚定
                </p>
              </div>
            </div>
            <div
              className={`px-3 py-1 rounded-full text-xs font-mono font-bold border ${getScoreColor(
                us.score
              )}`}
            >
              {us.level} ({us.score})
            </div>
          </div>

          {/* Meter Bar */}
          <div className="mt-6 space-y-2">
            <div className="flex justify-between text-xs font-mono text-stone-400">
              <span>EXTREME FEAR (0)</span>
              <span>NEUTRAL (50)</span>
              <span>EXTREME GREED (100)</span>
            </div>
            <div className="h-3 w-full rounded-full bg-stone-100 dark:bg-white/[0.05] overflow-hidden p-0.5 border border-stone-200/60 dark:border-white/[0.05]">
              <div
                className={`h-full rounded-full bg-gradient-to-r ${getProgressGradient(
                  us.score
                )} transition-all duration-700`}
                style={{ width: `${Math.min(Math.max(us.score, 3), 100)}%` }}
              />
            </div>
          </div>

          {/* US Details & Metrics */}
          <div className="mt-6 pt-4 border-t border-stone-100 dark:border-white/[0.04] space-y-3">
            <p className="text-xs font-serif text-stone-600 dark:text-stone-300 leading-relaxed">
              {us.details}
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {us.metrics &&
                Object.entries(us.metrics).map(([key, val], idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-stone-50 dark:bg-white/[0.03] text-stone-700 dark:text-stone-300 border border-stone-200/80 dark:border-white/[0.06]"
                  >
                    <span className="text-stone-400">{key}:</span> {val}
                  </span>
                ))}
            </div>
          </div>
        </div>

        {/* China Market Gauge */}
        <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-[#0c0f17] border border-stone-200/90 dark:border-white/[0.08] p-6 sm:p-8 shadow-sm transition-all hover:border-[#9e2a2b]/40 dark:hover:border-[#c5a059]/40">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">🇨🇳</span>
              <div>
                <h3 className="text-base font-bold text-stone-900 dark:text-white font-serif tracking-wide">
                  A股市场体温 · LIQUIDITY &amp; SENTIMENT
                </h3>
                <p className="text-xs text-stone-500 dark:text-stone-400 font-mono">
                  全市场两融余额、两市成交额与赚钱效应综合度量
                </p>
              </div>
            </div>
            <div
              className={`px-3 py-1 rounded-full text-xs font-mono font-bold border ${getScoreColor(
                china.score
              )}`}
            >
              {china.level} ({china.score})
            </div>
          </div>

          {/* Meter Bar */}
          <div className="mt-6 space-y-2">
            <div className="flex justify-between text-xs font-mono text-stone-400">
              <span>冰点出清 (0)</span>
              <span>结构分化 (50)</span>
              <span>主升浪过热 (100)</span>
            </div>
            <div className="h-3 w-full rounded-full bg-stone-100 dark:bg-white/[0.05] overflow-hidden p-0.5 border border-stone-200/60 dark:border-white/[0.05]">
              <div
                className={`h-full rounded-full bg-gradient-to-r ${getProgressGradient(
                  china.score
                )} transition-all duration-700`}
                style={{ width: `${Math.min(Math.max(china.score, 3), 100)}%` }}
              />
            </div>
          </div>

          {/* China Details & Metrics */}
          <div className="mt-6 pt-4 border-t border-stone-100 dark:border-white/[0.04] space-y-3">
            <p className="text-xs font-serif text-stone-600 dark:text-stone-300 leading-relaxed">
              {china.details}
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {china.metrics &&
                Object.entries(china.metrics).map(([key, val], idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-stone-50 dark:bg-white/[0.03] text-stone-700 dark:text-stone-300 border border-stone-200/80 dark:border-white/[0.06]"
                  >
                    <span className="text-stone-400">{key}:</span> {val}
                  </span>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
