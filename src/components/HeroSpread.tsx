"use client";

import React from "react";
import { MacroAnchors as MacroType, SentimentData } from "../types";
import { Compass, Quote, TrendingUp, DollarSign, Activity, Flame, ShieldAlert, Sparkles, Scale } from "lucide-react";

interface Props {
  oneLiner: string;
  anchors: MacroType;
  sentiment: {
    us: SentimentData;
    china: SentimentData;
  };
}

export function HeroSpread({ oneLiner, anchors, sentiment }: Props) {
  const { us, china } = sentiment;

  const anchorList = [
    {
      num: "01",
      code: "10Y UST",
      name: "全球资产估值中枢",
      value: anchors.us10yYield,
      desc: "无风险基准利率 · 贴现率中轴",
      accent: "text-[#9e2a2b] dark:text-[#e5c378]",
      icon: TrendingUp,
    },
    {
      num: "02",
      code: "DXY INDEX",
      name: "跨国流动性风向标",
      value: anchors.dxyIndex,
      desc: "美元指数 · 全球信贷紧缩度",
      accent: "text-sky-700 dark:text-sky-400",
      icon: DollarSign,
    },
    {
      num: "03",
      code: "USD / CNH",
      name: "内外资产定价连通器",
      value: anchors.usdcnh,
      desc: "离岸汇率 · 风险偏好中枢",
      accent: "text-emerald-700 dark:text-emerald-400",
      icon: Activity,
    },
    {
      num: "04",
      code: "BRENT CRUDE",
      name: "工业成本与通胀底线",
      value: anchors.brentOil,
      desc: "国际原油 · 二次通胀监测",
      accent: "text-amber-700 dark:text-amber-400",
      icon: Flame,
    },
  ];

  return (
    <section id="cover-story" className="space-y-6">
      {/* 3-Card Curated DailyArt Front-Page Spread */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* ========================================================================= */}
        {/* COLUMN 1: Lead Cover Story & Architectural Engraving (65% / 8 Cols)       */}
        {/* ========================================================================= */}
        <article className="lg:col-span-8 bg-white dark:bg-[#12151e] border border-stone-200/90 dark:border-white/[0.08] p-6 sm:p-10 shadow-xs relative">
          {/* DailyArt Category Kicker */}
          <div className="flex items-center justify-between border-b border-stone-200/80 dark:border-white/[0.06] pb-3 mb-5">
            <div className="flex items-center space-x-2">
              <span className="inline-block px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-widest bg-[#9e2a2b] text-white font-bold">
                COVER DISPATCH
              </span>
              <span className="text-xs font-serif italic text-stone-500 dark:text-stone-400">
                // 封面特辑 · 今日宏观定调
              </span>
            </div>
            <span className="text-[11px] font-mono text-stone-400">
              EST. READING: 8 MINS
            </span>
          </div>

          {/* Lead Headline in Classical Serif */}
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-black tracking-tight text-stone-900 dark:text-stone-50 leading-[1.15] mb-4">
            贴现率估值中枢与智能体生产力奇点：全球跨国流动性的大重构
          </h2>

          {/* Editorial Byline & Metadata */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-stone-500 dark:text-stone-400 border-b border-stone-100 dark:border-white/[0.04] pb-4 mb-6">
            <span className="text-stone-900 dark:text-stone-200 font-semibold font-serif">
              By Nexus Quantitative Research Group
            </span>
            <span>•</span>
            <span>SHANGHAI &amp; NEW YORK</span>
            <span>•</span>
            <span>RELEASED AT 07:00:00 CST</span>
          </div>

          {/* Oversized Editorial Pull-Quote with Drop Cap */}
          <div className="my-6 p-6 rounded-none bg-[#fbf9f5] dark:bg-[#0c0f16] border-l-4 border-[#9e2a2b] dark:border-[#c5a059] relative">
            <Quote className="w-8 h-8 text-[#9e2a2b]/20 dark:text-[#c5a059]/20 absolute -top-2 -left-2 pointer-events-none" />
            <p className="font-serif text-lg sm:text-2xl text-stone-800 dark:text-stone-200 italic font-medium leading-relaxed">
              &ldquo;{oneLiner}&rdquo;
            </p>
          </div>

          {/* Lead Editorial Narrative with Drop-Cap */}
          <p className="drop-cap font-serif text-sm sm:text-base text-stone-700 dark:text-stone-300 leading-relaxed my-6">
            当 10 年期美债收益率在 4.18% 构筑起全球无风险贴现率的高悬走廊，美元指数徘徊于 103.85 震荡区间，跨国资本的风险溢价定价机制正在发生深刻裂变。一方面，以硅谷与华尔街为代表的算力资本开支（Capex）正在从单一大模型训练向生产级“长程多智能体自主决策流水线”全面迁移；另一方面，离岸人民币汇率与中国资产估值洼地的重估博弈，正催生出极度分化的跨市场统计套利与波动率交易机会。
          </p>

          {/* Museum-Framed Copperplate Engraving / Transmission Canvas */}
          <div className="my-8 border border-stone-300/80 dark:border-white/[0.1] bg-[#fdfcf9] dark:bg-[#090b10] p-4 sm:p-6 shadow-inner">
            <div className="flex items-center justify-between text-[10px] font-mono text-stone-400 uppercase tracking-widest border-b border-stone-200/60 dark:border-white/[0.04] pb-2 mb-4">
              <span>PLATE I // SYSTEM TRANSMISSION MATRIX</span>
              <span>FIGURE 1.0</span>
            </div>

            {/* Architectural Flowchart SVG */}
            <div className="py-6 px-2 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-center">
              {/* Box 1 */}
              <div className="p-3.5 border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 w-full sm:w-1/4">
                <div className="text-[10px] text-stone-400">DISCOUNT ANCHOR</div>
                <div className="text-base font-bold text-[#9e2a2b] dark:text-[#e5c378]">10Y UST 4.18%</div>
                <div className="text-[10px] text-stone-500 mt-1 font-serif">贴现率估值天花板</div>
              </div>

              <span className="text-stone-400 font-bold hidden sm:inline">⟶</span>

              {/* Box 2 */}
              <div className="p-3.5 border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 w-full sm:w-1/4">
                <div className="text-[10px] text-stone-400">LIQUIDITY VECTOR</div>
                <div className="text-base font-bold text-sky-700 dark:text-sky-400">DXY &amp; CNH</div>
                <div className="text-[10px] text-stone-500 mt-1 font-serif">跨国资本再平衡</div>
              </div>

              <span className="text-stone-400 font-bold hidden sm:inline">⟶</span>

              {/* Box 3 */}
              <div className="p-3.5 border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 w-full sm:w-1/4">
                <div className="text-[10px] text-stone-400">AGENTIC CAPEX</div>
                <div className="text-base font-bold text-emerald-700 dark:text-emerald-400">DeepSeek &amp; MoE</div>
                <div className="text-[10px] text-stone-500 mt-1 font-serif">智能体工业级落地</div>
              </div>

              <span className="text-stone-400 font-bold hidden sm:inline">⟶</span>

              {/* Box 4 */}
              <div className="p-3.5 border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 w-full sm:w-1/4">
                <div className="text-[10px] text-stone-400">SYSTEMATIC ALPHA</div>
                <div className="text-base font-bold text-amber-700 dark:text-amber-400">Sharpe 3.12</div>
                <div className="text-[10px] text-stone-500 mt-1 font-serif">量化多空统计套利</div>
              </div>
            </div>

            {/* Museum Placard Inscription Caption */}
            <div className="text-center pt-3 border-t border-stone-200/60 dark:border-white/[0.04]">
              <p className="text-xs font-serif italic text-stone-500 dark:text-stone-400">
                Plate I. The Sovereign Transmission Engine: Macro Discount Rates Translating to Automated Agentic Trading Alpha.
              </p>
            </div>
          </div>

          {/* Read Full Investigation CTA */}
          <div className="flex items-center justify-between pt-4 border-t border-stone-200/80 dark:border-white/[0.06] text-xs font-serif">
            <span className="text-stone-500 dark:text-stone-400 italic">
              本期特辑经对冲基金实盘回测流水线与 arXiv 预印本联合校验
            </span>
            <a
              href="#ai-frontiers"
              className="text-[#9e2a2b] dark:text-[#e5c378] font-bold hover:underline"
            >
              继续通读前沿范式 →
            </a>
          </div>
        </article>

        {/* ========================================================================= */}
        {/* COLUMN 2: Stacked Editorial Side Placards (35% / 4 Cols)                  */}
        {/* ========================================================================= */}
        <div className="lg:col-span-4 space-y-8">
          {/* 1. Museum Dual Sentiment Barometer (中美情绪双标尺) */}
          <div className="bg-white dark:bg-[#12151e] border border-stone-200/90 dark:border-white/[0.08] p-5 sm:p-6 shadow-xs">
            {/* Placard Header */}
            <div className="flex items-center justify-between border-b border-stone-200/80 dark:border-white/[0.06] pb-3 mb-4">
              <div className="flex items-center space-x-2">
                <Scale className="w-4 h-4 text-[#9e2a2b] dark:text-[#c5a059]" />
                <h3 className="text-xs font-bold font-serif tracking-wider uppercase text-stone-900 dark:text-white">
                  DUAL SENTIMENT BAROMETER
                </h3>
              </div>
              <span className="text-[10px] font-mono text-stone-400">
                中美分立测绘
              </span>
            </div>

            {/* US Sentiment Indicator */}
            <div className="p-3.5 bg-stone-50/70 dark:bg-white/[0.02] border border-stone-200/70 dark:border-white/[0.05] mb-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-1.5">
                  <span className="text-sm">🇺🇸</span>
                  <span className="text-xs font-serif font-bold text-stone-900 dark:text-white">
                    美股情绪 · FEAR &amp; GREED
                  </span>
                </div>
                <span className="px-2 py-0.5 text-[10px] font-mono font-bold bg-amber-500/15 text-amber-700 dark:text-amber-400 border border-amber-500/30">
                  {us.level} ({us.score})
                </span>
              </div>

              {/* Progress Rule */}
              <div className="w-full h-1.5 bg-stone-200 dark:bg-stone-800 rounded-none overflow-hidden my-2">
                <div
                  className="h-full bg-gradient-to-r from-amber-500 to-emerald-600 transition-all duration-500"
                  style={{ width: `${us.score}%` }}
                />
              </div>

              <p className="text-[11px] font-serif text-stone-600 dark:text-stone-300 leading-snug mt-2">
                {us.details}
              </p>
            </div>

            {/* China Sentiment Indicator */}
            <div className="p-3.5 bg-stone-50/70 dark:bg-white/[0.02] border border-stone-200/70 dark:border-white/[0.05]">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-1.5">
                  <span className="text-sm">🇨🇳</span>
                  <span className="text-xs font-serif font-bold text-stone-900 dark:text-white">
                    中国资产 · 情绪标尺
                  </span>
                </div>
                <span className="px-2 py-0.5 text-[10px] font-mono font-bold bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30">
                  {china.level} ({china.score})
                </span>
              </div>

              {/* Progress Rule */}
              <div className="w-full h-1.5 bg-stone-200 dark:bg-stone-800 rounded-none overflow-hidden my-2">
                <div
                  className="h-full bg-gradient-to-r from-stone-400 to-emerald-600 transition-all duration-500"
                  style={{ width: `${china.score}%` }}
                />
              </div>

              <p className="text-[11px] font-serif text-stone-600 dark:text-stone-300 leading-snug mt-2">
                {china.details}
              </p>
            </div>

            {/* Methodological Footnote */}
            <div className="mt-4 pt-2 border-t border-stone-100 dark:border-white/[0.04] text-[10px] font-mono text-stone-400 italic">
              *严禁合并加权 · 尊重资本流动与制度差异的分立式测绘
            </div>
          </div>

          {/* 2. Global Macro Liquidity Anchors Ledger (流动性四大锚点账簿) */}
          <div id="macro-anchors" className="bg-white dark:bg-[#12151e] border border-stone-200/90 dark:border-white/[0.08] p-5 sm:p-6 shadow-xs">
            {/* Placard Header */}
            <div className="flex items-center justify-between border-b border-stone-200/80 dark:border-white/[0.06] pb-3 mb-4">
              <div className="flex items-center space-x-2">
                <Compass className="w-4 h-4 text-[#9e2a2b] dark:text-[#c5a059]" />
                <h3 className="text-xs font-bold font-serif tracking-wider uppercase text-stone-900 dark:text-white">
                  MACRO PRICING LEDGER
                </h3>
              </div>
              <span className="text-[10px] font-mono text-stone-400">
                四大核心定价锚
              </span>
            </div>

            {/* Financial Ledger Rows */}
            <div className="divide-y divide-stone-200/80 dark:divide-white/[0.06]">
              {anchorList.map((item) => (
                <div key={item.num} className="py-3 flex items-center justify-between group">
                  <div>
                    <div className="flex items-center space-x-1.5">
                      <span className="text-[10px] font-mono text-stone-400 font-bold">
                        [{item.num}]
                      </span>
                      <span className="text-xs font-mono font-bold text-stone-900 dark:text-white">
                        {item.code}
                      </span>
                    </div>
                    <div className="text-[11px] font-serif text-stone-500 dark:text-stone-400">
                      {item.name}
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-base font-extrabold font-mono text-stone-900 dark:text-stone-100">
                      {item.value}
                    </div>
                    <div className="text-[10px] font-mono text-stone-400">
                      {item.desc.split(" · ")[0]}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Ledger Footnote */}
            <div className="mt-4 pt-3 border-t border-stone-200/80 dark:border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-stone-400">
              <span>PRICING REGIME: T+0</span>
              <span className="text-[#9e2a2b] dark:text-[#e5c378] font-bold">LIVE ANCHORED</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
