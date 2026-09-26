"use client";

import React from "react";
import { DailyDossier } from "../../types";
import { Compass, Quote, TrendingUp, DollarSign, Activity, Flame, Scale, ArrowRight, BookOpen, Cpu, Layers, Terminal } from "lucide-react";

interface Props {
  dossier: DailyDossier;
  onSelectDepartment: (dept: string) => void;
}

export function CoverDepartment({ dossier, onSelectDepartment }: Props) {
  const { oneLinerSummary, macroAnchors, sentiment, aiUpdates, quantResearch, stocks } = dossier;
  const { us, china } = sentiment;

  const anchorList = [
    {
      num: "01",
      code: "10Y UST",
      name: "全球资产估值中枢",
      value: macroAnchors.us10yYield,
      desc: "无风险基准利率 · 贴现率中轴",
      icon: TrendingUp,
      accent: "text-[#9e2a2b] dark:text-[#e5c378]",
    },
    {
      num: "02",
      code: "DXY INDEX",
      name: "跨国流动性风向标",
      value: macroAnchors.dxyIndex,
      desc: "美元指数 · 全球信贷紧缩度",
      icon: DollarSign,
      accent: "text-sky-700 dark:text-sky-400",
    },
    {
      num: "03",
      code: "USD / CNH",
      name: "内外资产定价连通器",
      value: macroAnchors.usdcnh,
      desc: "离岸汇率 · 风险偏好中轴",
      icon: Activity,
      accent: "text-emerald-700 dark:text-emerald-400",
    },
    {
      num: "04",
      code: "BRENT CRUDE",
      name: "工业成本与通胀底线",
      value: macroAnchors.brentOil,
      desc: "国际原油 · 二次通胀监测",
      icon: Flame,
      accent: "text-amber-700 dark:text-amber-400",
    },
  ];

  return (
    <div className="space-y-16">
      {/* ========================================================================= */}
      {/* 1. FRONT-PAGE HERO 3-STORY SPREAD (宽幅封面特辑与侧边双联)               */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Lead Cover Dispatch (7 Cols / ~60%) */}
        <article className="lg:col-span-8 bg-white dark:bg-[#12151e] border border-stone-200/90 dark:border-white/[0.08] p-8 sm:p-12 shadow-xs">
          {/* DailyArt Category Kicker */}
          <div className="flex items-center justify-between border-b border-stone-200/80 dark:border-white/[0.06] pb-4 mb-6">
            <div className="flex items-center space-x-3">
              <span className="inline-block px-3.5 py-1 text-xs font-mono uppercase tracking-widest bg-[#e50914] text-white font-bold shadow-xs">
                COVER DISPATCH
              </span>
              <span className="text-sm font-serif italic text-stone-500 dark:text-stone-400">
                // 封面特辑 · 今日宏观定调
              </span>
            </div>
            <span className="text-xs font-mono text-stone-400 font-bold">
              EST. READING: 8 MINS
            </span>
          </div>

          {/* Lead Headline in Classical High-Contrast Serif (Monumental & Authoritative) */}
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-black tracking-tight text-stone-900 dark:text-stone-50 leading-[1.08] mb-6">
            贴现率估值中枢与智能体生产力奇点：全球跨国流动性的大重构
          </h2>

          {/* Editorial Byline & Metadata */}
          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm font-mono text-stone-500 dark:text-stone-400 border-b border-stone-100 dark:border-white/[0.04] pb-5 mb-8">
            <span className="text-stone-900 dark:text-stone-200 font-semibold font-serif text-base">
              By Nexus Quantitative Research Group
            </span>
            <span>•</span>
            <span>SHANGHAI &amp; NEW YORK</span>
            <span>•</span>
            <span>RELEASED AT 07:00:00 CST</span>
          </div>

          {/* Oversized Editorial Pull-Quote with Drop Cap */}
          <div className="my-8 p-6 sm:p-10 bg-[#fbf9f5] dark:bg-[#0c0f16] border-l-4 border-[#e50914] dark:border-[#c5a059] relative">
            <Quote className="w-12 h-12 text-[#e50914]/15 dark:text-[#c5a059]/20 absolute -top-3 -left-3 pointer-events-none" />
            <p className="font-serif text-2xl sm:text-3xl lg:text-4xl text-stone-800 dark:text-stone-100 italic font-medium leading-relaxed">
              &ldquo;{oneLinerSummary}&rdquo;
            </p>
          </div>

          {/* Lead Narrative with Drop Cap */}
          <p className="drop-cap font-serif text-lg sm:text-2xl text-stone-700 dark:text-stone-300 leading-relaxed my-8">
            当 10 年期美债收益率在 4.18% 构筑起全球无风险贴现率的高悬走廊，美元指数徘徊于 103.85 震荡区间，跨国资本的风险溢价定价机制正在发生深刻裂变。一方面，以硅谷与华尔街为代表的算力资本开支（Capex）正在从单一大模型训练向生产级“长程多智能体自主决策流水线”全面迁移；另一方面，离岸人民币汇率与中国资产估值洼地的重估博弈，正催生出极度分化的跨市场统计套利与波动率交易机会。
          </p>

          {/* Museum-Framed Copperplate Engraving / System Transmission Canvas */}
          <div className="my-10 border border-stone-300/80 dark:border-white/[0.1] bg-[#fdfcf9] dark:bg-[#090b10] p-6 sm:p-8 shadow-inner">
            <div className="flex items-center justify-between text-xs font-mono text-stone-400 uppercase tracking-widest border-b border-stone-200/60 dark:border-white/[0.04] pb-3 mb-6">
              <span>PLATE I // SYSTEM TRANSMISSION MATRIX</span>
              <span>FIGURE 1.0</span>
            </div>

            {/* Architectural Flowchart SVG */}
            <div className="py-6 px-2 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-center">
              <div className="p-4 border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 w-full sm:w-1/4 shadow-xs">
                <div className="text-xs text-stone-400">DISCOUNT ANCHOR</div>
                <div className="text-lg sm:text-xl font-bold text-[#e50914] dark:text-[#e5c378]">10Y UST 4.18%</div>
                <div className="text-xs text-stone-500 mt-1 font-serif">贴现率估值中轴</div>
              </div>

              <span className="text-stone-400 font-bold text-lg hidden sm:inline">⟶</span>

              <div className="p-4 border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 w-full sm:w-1/4 shadow-xs">
                <div className="text-xs text-stone-400">LIQUIDITY VECTOR</div>
                <div className="text-lg sm:text-xl font-bold text-sky-700 dark:text-sky-400">DXY &amp; CNH</div>
                <div className="text-xs text-stone-500 mt-1 font-serif">跨国流动性再平衡</div>
              </div>

              <span className="text-stone-400 font-bold text-lg hidden sm:inline">⟶</span>

              <div className="p-4 border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 w-full sm:w-1/4 shadow-xs">
                <div className="text-xs text-stone-400">AGENTIC CAPEX</div>
                <div className="text-lg sm:text-xl font-bold text-emerald-700 dark:text-emerald-400">DeepSeek &amp; MoE</div>
                <div className="text-xs text-stone-500 mt-1 font-serif">智能体工业级落地</div>
              </div>

              <span className="text-stone-400 font-bold text-lg hidden sm:inline">⟶</span>

              <div className="p-4 border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 w-full sm:w-1/4 shadow-xs">
                <div className="text-xs text-stone-400">SYSTEMATIC ALPHA</div>
                <div className="text-lg sm:text-xl font-bold text-amber-700 dark:text-amber-400">Sharpe 3.12</div>
                <div className="text-xs text-stone-500 mt-1 font-serif">量化多空统计套利</div>
              </div>
            </div>

            {/* Museum Placard Inscription Caption */}
            <div className="text-center pt-4 border-t border-stone-200/60 dark:border-white/[0.04]">
              <p className="text-sm font-serif italic text-stone-500 dark:text-stone-400">
                Plate I. The Sovereign Transmission Engine: Macro Discount Rates Translating to Automated Agentic Trading Alpha.
              </p>
            </div>
          </div>

          {/* Quick CTA to AI Department */}
          <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-stone-200/80 dark:border-white/[0.06] text-sm font-serif gap-4">
            <span className="text-stone-500 dark:text-stone-400 italic">
              本期封面经对冲基金实盘回测流水线与 arXiv 预印本联合校验
            </span>
            <button
              onClick={() => onSelectDepartment("ai")}
              className="inline-flex items-center space-x-2 text-[#e50914] dark:text-[#e5c378] font-bold text-base hover:underline"
            >
              <span>浏览完整 AI 前沿特写</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </article>

        {/* Right Column: Stacked Side Placards (4 Cols / ~40%) */}
        <div className="lg:col-span-4 space-y-8">
          {/* Placard 1: Dual Sentiment Barometer */}
          <div className="bg-white dark:bg-[#12151e] border-2 border-stone-200/90 dark:border-white/[0.08] p-6 sm:p-8 shadow-sm">
            <div className="flex items-center justify-between border-b border-stone-200/80 dark:border-white/[0.06] pb-3 mb-5">
              <div className="flex items-center space-x-2">
                <span className="px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-wider bg-[#e50914] text-white font-black shadow-2xs">
                  FEATURE I
                </span>
                <h3 className="text-base font-serif font-black tracking-wide uppercase text-stone-900 dark:text-white">
                  中美双轨情绪标尺
                </h3>
              </div>
              <span className="text-xs font-mono text-stone-400 font-bold">
                DUAL BAROMETER
              </span>
            </div>

            {/* US Sentiment Indicator */}
            <div className="p-5 bg-stone-50/90 dark:bg-white/[0.02] border border-stone-200/80 dark:border-white/[0.05] mb-5 shadow-2xs">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <span className="text-xl">🇺🇸</span>
                  <span className="text-base font-serif font-bold text-stone-900 dark:text-white">
                    美股情绪 · FEAR &amp; GREED
                  </span>
                </div>
                <span className="px-2.5 py-0.5 text-xs font-mono font-bold bg-amber-500/15 text-amber-800 dark:text-amber-300 border border-amber-500/30">
                  {us.level} ({us.score})
                </span>
              </div>

              <div className="w-full h-2.5 bg-stone-200 dark:bg-stone-800 rounded-none overflow-hidden my-3">
                <div
                  className="h-full bg-gradient-to-r from-amber-500 to-emerald-600 transition-all duration-500"
                  style={{ width: `${us.score}%` }}
                />
              </div>

              <p className="text-xs sm:text-sm font-serif text-stone-700 dark:text-stone-300 leading-relaxed mt-2">
                {us.details}
              </p>
            </div>

            {/* China Sentiment Indicator */}
            <div className="p-5 bg-stone-50/90 dark:bg-white/[0.02] border border-stone-200/80 dark:border-white/[0.05] shadow-2xs">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <span className="text-xl">🇨🇳</span>
                  <span className="text-base font-serif font-bold text-stone-900 dark:text-white">
                    中国资产 · 情绪标尺
                  </span>
                </div>
                <span className="px-2.5 py-0.5 text-xs font-mono font-bold bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 border border-emerald-500/30">
                  {china.level} ({china.score})
                </span>
              </div>

              <div className="w-full h-2.5 bg-stone-200 dark:bg-stone-800 rounded-none overflow-hidden my-3">
                <div
                  className="h-full bg-gradient-to-r from-stone-400 to-emerald-600 transition-all duration-500"
                  style={{ width: `${china.score}%` }}
                />
              </div>

              <p className="text-xs sm:text-sm font-serif text-stone-700 dark:text-stone-300 leading-relaxed mt-2">
                {china.details}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-stone-200/60 dark:border-white/[0.04] text-xs font-mono text-stone-400 italic">
              *严禁合并加权 · 尊重跨国制度与资本流动差异的分立式测绘
            </div>
          </div>

          {/* Placard 2: Four Liquidity Anchors Ledger */}
          <div className="bg-white dark:bg-[#12151e] border-2 border-stone-200/90 dark:border-white/[0.08] p-6 sm:p-8 shadow-sm">
            <div className="flex items-center justify-between border-b border-stone-200/80 dark:border-white/[0.06] pb-3 mb-5">
              <div className="flex items-center space-x-2">
                <span className="px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-wider bg-[#b88e39] text-stone-950 font-black shadow-2xs">
                  FEATURE II
                </span>
                <h3 className="text-base font-serif font-black tracking-wide uppercase text-stone-900 dark:text-white">
                  全球四大核心宏观定价锚
                </h3>
              </div>
              <span className="text-xs font-mono text-stone-400 font-bold">
                PRICING LEDGER
              </span>
            </div>

            <div className="divide-y divide-stone-200/80 dark:divide-white/[0.06]">
              {anchorList.map((item) => (
                <div key={item.num} className="py-3.5 flex items-center justify-between">
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs font-mono text-stone-400 font-bold">
                        [{item.num}]
                      </span>
                      <span className="text-base font-mono font-black text-stone-900 dark:text-white">
                        {item.code}
                      </span>
                    </div>
                    <div className="text-xs font-serif text-stone-500 dark:text-stone-400 mt-0.5">
                      {item.name}
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-xl sm:text-2xl font-black font-mono text-stone-900 dark:text-stone-50">
                      {item.value}
                    </div>
                    <div className="text-xs font-mono text-stone-400">
                      {item.desc.split(" · ")[0]}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-3 border-t border-stone-200/80 dark:border-white/[0.06] flex items-center justify-between text-xs font-mono text-stone-400">
              <span>PRICING REGIME: T+0</span>
              <span className="text-[#e50914] dark:text-[#e5c378] font-bold">LIVE ANCHORED</span>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. CURATED DEPARTMENT PORTALS (本期核心专栏直通矩阵，一键进入各馆)        */}
      {/* ========================================================================= */}
      <div className="space-y-6">
        <div className="flex items-center justify-between border-b-2 border-stone-800 dark:border-stone-400 pb-3">
          <div>
            <div className="text-xs font-mono tracking-widest text-[#9e2a2b] dark:text-[#e5c378] uppercase font-bold">
              CURATED DEPARTMENTS // 本期核心专栏总览
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-black uppercase text-stone-900 dark:text-white">
              点击即可进入专属独立展厅阅读
            </h3>
          </div>
          <span className="text-xs font-mono text-stone-400 hidden sm:inline-block">
            ISSUE 042 EXHIBITION
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Portal 1: AI Frontiers */}
          <div className="bg-white dark:bg-[#12151e] border border-stone-200/90 dark:border-white/[0.08] p-6 sm:p-8 flex flex-col justify-between hover:border-[#9e2a2b]/50 dark:hover:border-[#c5a059]/50 transition-all shadow-xs group">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-stone-400 mb-3">
                <span className="text-[#9e2a2b] dark:text-[#e5c378] font-bold">DEPARTMENT II</span>
                <span>3 大实证案例</span>
              </div>
              <h4 className="text-xl font-serif font-bold text-stone-900 dark:text-white mb-2 group-hover:text-[#9e2a2b] dark:group-hover:text-[#e5c378] transition-colors">
                前沿范式与工业智能体
              </h4>
              <p className="text-xs sm:text-sm font-serif text-stone-600 dark:text-stone-300 leading-relaxed mb-6">
                深入拆解 DeepSeek R1 混合专家架构实测、Anthropic Computer Use 自主交易及多智能体生产流水线。
              </p>
            </div>
            <button
              onClick={() => onSelectDepartment("ai")}
              className="w-full flex items-center justify-center space-x-1.5 py-2.5 bg-stone-100 hover:bg-[#9e2a2b] hover:text-white dark:bg-white/[0.06] dark:hover:bg-[#c5a059] dark:hover:text-stone-950 text-stone-800 dark:text-stone-200 text-xs font-serif font-bold transition-all"
            >
              <span>浏览 AI 前沿专栏</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Portal 2: Quant Alpha */}
          <div className="bg-white dark:bg-[#12151e] border border-stone-200/90 dark:border-white/[0.08] p-6 sm:p-8 flex flex-col justify-between hover:border-[#9e2a2b]/50 dark:hover:border-[#c5a059]/50 transition-all shadow-xs group">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-stone-400 mb-3">
                <span className="text-[#9e2a2b] dark:text-[#e5c378] font-bold">DEPARTMENT III</span>
                <span>PLATE IV 画作</span>
              </div>
              <h4 className="text-xl font-serif font-bold text-stone-900 dark:text-white mb-2 group-hover:text-[#9e2a2b] dark:group-hover:text-[#e5c378] transition-colors">
                量化 Alpha 艺术展厅
              </h4>
              <p className="text-xs sm:text-sm font-serif text-stone-600 dark:text-stone-300 leading-relaxed mb-6">
                展陈微观市场结构与非线性动量因子，附带夏普比率 3.12 的装裱级 Python 可复现策略源码。
              </p>
            </div>
            <button
              onClick={() => onSelectDepartment("quant")}
              className="w-full flex items-center justify-center space-x-1.5 py-2.5 bg-stone-100 hover:bg-[#9e2a2b] hover:text-white dark:bg-white/[0.06] dark:hover:bg-[#c5a059] dark:hover:text-stone-950 text-stone-800 dark:text-stone-200 text-xs font-serif font-bold transition-all"
            >
              <span>进入量化艺术展厅</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Portal 3: 40 Creators Archive */}
          <div className="bg-white dark:bg-[#12151e] border border-stone-200/90 dark:border-white/[0.08] p-6 sm:p-8 flex flex-col justify-between hover:border-[#9e2a2b]/50 dark:hover:border-[#c5a059]/50 transition-all shadow-xs group">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-stone-400 mb-3">
                <span className="text-[#9e2a2b] dark:text-[#e5c378] font-bold">DEPARTMENT IV</span>
                <span>40 位学者全量</span>
              </div>
              <h4 className="text-xl font-serif font-bold text-stone-900 dark:text-white mb-2 group-hover:text-[#9e2a2b] dark:group-hover:text-[#e5c378] transition-colors">
                40位创作者学术馆藏
              </h4>
              <p className="text-xs sm:text-sm font-serif text-stone-600 dark:text-stone-300 leading-relaxed mb-6">
                收录 Andrej Karpathy、Two Sigma、QuantConnect 等 40 位博主详析档案、前30秒Hook秘诀与代表作拆解。
              </p>
            </div>
            <button
              onClick={() => onSelectDepartment("creators")}
              className="w-full flex items-center justify-center space-x-1.5 py-2.5 bg-stone-100 hover:bg-[#9e2a2b] hover:text-white dark:bg-white/[0.06] dark:hover:bg-[#c5a059] dark:hover:text-stone-950 text-stone-800 dark:text-stone-200 text-xs font-serif font-bold transition-all"
            >
              <span>查阅 40 位创作者智库</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Portal 4: Markets & Playbook */}
          <div className="bg-white dark:bg-[#12151e] border border-stone-200/90 dark:border-white/[0.08] p-6 sm:p-8 flex flex-col justify-between hover:border-[#9e2a2b]/50 dark:hover:border-[#c5a059]/50 transition-all shadow-xs group">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-stone-400 mb-3">
                <span className="text-[#9e2a2b] dark:text-[#e5c378] font-bold">DEPARTMENT V &amp; VI</span>
                <span>跨资产复盘</span>
              </div>
              <h4 className="text-xl font-serif font-bold text-stone-900 dark:text-white mb-2 group-hover:text-[#9e2a2b] dark:group-hover:text-[#e5c378] transition-colors">
                股期全景与工程路线
              </h4>
              <p className="text-xs sm:text-sm font-serif text-stone-600 dark:text-stone-300 leading-relaxed mb-6">
                中美股票龙头博弈、大宗商品供需差测算，及 4 象限爆款选题矩阵与 4 阶量化工程跃迁蓝图。
              </p>
            </div>
            <button
              onClick={() => onSelectDepartment("markets")}
              className="w-full flex items-center justify-center space-x-1.5 py-2.5 bg-stone-100 hover:bg-[#9e2a2b] hover:text-white dark:bg-white/[0.06] dark:hover:bg-[#c5a059] dark:hover:text-stone-950 text-stone-800 dark:text-stone-200 text-xs font-serif font-bold transition-all"
            >
              <span>查看全球股期全景</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
