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

  // Score badge coloring
  const getScoreColor = (score: number) => {
    if (score >= 75) return "text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 border-emerald-200 dark:border-emerald-500/30";
    if (score >= 55) return "text-amber-800 dark:text-amber-300 bg-amber-50 dark:bg-amber-500/10 border-amber-200 dark:border-amber-500/30";
    if (score >= 45) return "text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-500/10 border-slate-300 dark:border-slate-500/30";
    if (score >= 25) return "text-orange-700 dark:text-orange-400 bg-orange-50 dark:bg-orange-500/10 border-orange-200 dark:border-orange-500/30";
    return "text-rose-700 dark:text-rose-500 bg-rose-50 dark:bg-rose-500/10 border-rose-200 dark:border-rose-500/30";
  };

  const getProgressGradient = (score: number) => {
    if (score >= 60) return "from-emerald-500 to-amber-400";
    if (score >= 40) return "from-amber-400 to-orange-400";
    return "from-orange-500 to-rose-600";
  };

  return (
    <section className="my-8">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-[#997328] dark:bg-[#c5a059]" />
          <h2 className="text-sm font-mono uppercase tracking-widest text-slate-800 dark:text-slate-300 font-bold">
            DUAL SENTIMENT GAUGES // 中美双市场情绪分立监测
          </h2>
        </div>
        <span className="text-[11px] font-mono text-slate-500 hidden sm:inline">
          [ 严禁合并加权 · 结构化并列呈现 ]
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* US Market Gauge */}
        <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-[#10131c] border border-slate-200/80 dark:border-white/[0.08] p-6 shadow-card-light dark:shadow-xl transition-colors">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">🇺🇸</span>
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white font-sans tracking-wide">
                  美股市场情绪 · FEAR &amp; GREED
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                  CNN F&amp;G 复合模型 · 7项微观因子锚定
                </p>
              </div>
            </div>
            <div
              className={`px-3 py-1 rounded-full text-xs font-mono font-bold border ${getScoreColor(
                us.score
              )}`}
            >
              {us.score} / 100
            </div>
          </div>

          {/* Progress Bar Gauge */}
          <div className="my-5">
            <div className="flex justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400 mb-1.5">
              <span>Extreme Fear (0)</span>
              <span className="font-bold text-slate-800 dark:text-slate-200">{us.level}</span>
              <span>Extreme Greed (100)</span>
            </div>
            <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden p-0.5 border border-slate-200 dark:border-white/[0.05]">
              <div
                className={`h-full rounded-full bg-gradient-to-r ${getProgressGradient(
                  us.score
                )} transition-all duration-700`}
                style={{ width: `${us.score}%` }}
              />
            </div>
          </div>

          <p className="text-xs text-slate-700 dark:text-slate-300 font-serif leading-relaxed mb-4 bg-slate-50/80 dark:bg-white/[0.02] p-3 rounded-lg border border-slate-200/70 dark:border-white/[0.04]">
            {us.details}
          </p>

          {/* Micro metrics grid */}
          <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-100 dark:border-white/[0.06]">
            {Object.entries(us.metrics).map(([k, v], idx) => (
              <div key={idx} className="bg-slate-50/80 dark:bg-white/[0.02] p-2.5 rounded-lg border border-slate-100 dark:border-transparent">
                <span className="block text-[10px] font-mono text-slate-500 uppercase">
                  {k}
                </span>
                <span className="block text-xs font-mono font-bold text-slate-800 dark:text-slate-200 mt-0.5 truncate">
                  {v}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* China Market Gauge */}
        <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-[#10131c] border border-slate-200/80 dark:border-white/[0.08] p-6 shadow-card-light dark:shadow-xl transition-colors">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">🇨🇳</span>
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white font-sans tracking-wide">
                  A股综合情绪温度计 · CHINA MARKET
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                  量能梯队与赚钱效应 · 真实交投流动性
                </p>
              </div>
            </div>
            <div
              className={`px-3 py-1 rounded-full text-xs font-mono font-bold border ${getScoreColor(
                china.score
              )}`}
            >
              {china.score}℃ / 100℃
            </div>
          </div>

          {/* Progress Bar Gauge */}
          <div className="my-5">
            <div className="flex justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400 mb-1.5">
              <span>冰点整固 (0℃)</span>
              <span className="font-bold text-slate-800 dark:text-slate-200">{china.level}</span>
              <span>过热沸腾 (100℃)</span>
            </div>
            <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden p-0.5 border border-slate-200 dark:border-white/[0.05]">
              <div
                className={`h-full rounded-full bg-gradient-to-r ${getProgressGradient(
                  china.score
                )} transition-all duration-700`}
                style={{ width: `${china.score}%` }}
              />
            </div>
          </div>

          <p className="text-xs text-slate-700 dark:text-slate-300 font-serif leading-relaxed mb-4 bg-slate-50/80 dark:bg-white/[0.02] p-3 rounded-lg border border-slate-200/70 dark:border-white/[0.04]">
            {china.details}
          </p>

          {/* Micro metrics grid */}
          <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-100 dark:border-white/[0.06]">
            {Object.entries(china.metrics).map(([k, v], idx) => (
              <div key={idx} className="bg-slate-50/80 dark:bg-white/[0.02] p-2.5 rounded-lg border border-slate-100 dark:border-transparent">
                <span className="block text-[10px] font-mono text-slate-500 uppercase">
                  {k}
                </span>
                <span className="block text-xs font-mono font-bold text-slate-800 dark:text-slate-200 mt-0.5 truncate">
                  {v}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
