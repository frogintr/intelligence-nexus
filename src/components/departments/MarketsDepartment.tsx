"use client";

import React from "react";
import { StockMarket, CommodityItem } from "../../types";
import { ArrowLeft, Globe2, Layers, TrendingUp, TrendingDown, DollarSign, Sparkles, BarChart2 } from "lucide-react";

interface Props {
  stocks: {
    us: StockMarket[];
    china: StockMarket[];
  };
  commodities: CommodityItem[];
  onBackToCover: () => void;
}

export function MarketsDepartment({ stocks, commodities, onBackToCover }: Props) {
  return (
    <div className="space-y-16">
      {/* Top Department Breadcrumbs */}
      <div className="flex items-center justify-between border-b border-stone-200 dark:border-white/[0.08] pb-4">
        <button
          onClick={onBackToCover}
          className="inline-flex items-center space-x-2 text-sm font-serif text-[#e50914] dark:text-[#ff4d4f] font-bold hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>返回封面精选导读 (Back to Cover)</span>
        </button>
        <span className="text-xs font-mono text-stone-400">
          DEPARTMENT VI OF VII · DAILYART ASSET LEDGER
        </span>
      </div>

      {/* Monumental Department Header */}
      <div className="border-b-2 border-stone-900 dark:border-stone-300 pb-6 space-y-4">
        <div className="flex items-center space-x-3">
          <span className="inline-block px-3 py-1 text-xs font-mono uppercase tracking-widest bg-[#e50914] text-white font-bold shadow-xs">
            DEPARTMENT VI · CURATED ASSET LEDGER
          </span>
          <span className="text-xs font-serif italic text-stone-500 dark:text-stone-400">
            // 全球股期全景 · 艺术杂志策展账本
          </span>
        </div>
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-black tracking-tight text-stone-900 dark:text-stone-50 leading-[1.08] uppercase">
          中美股票主线与大宗商品全景复盘
        </h2>
        <p className="text-base sm:text-xl font-serif italic text-stone-700 dark:text-stone-300 max-w-4xl leading-relaxed">
          全球云厂商与半导体资本开支博弈 · A/H股红利出清与高能商品供需测算，以 DailyArt 艺术杂志策展体例呈现跨资产多维定价与资金流向。
        </p>

        {/* Standardized Editorial Metadata Rail */}
        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-stone-500 dark:text-stone-400 border-t border-stone-200/80 dark:border-white/[0.06] pt-4">
          <span className="text-stone-900 dark:text-stone-200 font-semibold font-serif text-sm">
            By Nexus Cross-Asset Financial Tape Desk
          </span>
          <span>•</span>
          <span>NEW YORK &amp; HONG KONG</span>
          <span>•</span>
          <span>4 US BELLWETHERS · 4 CHINA GIANTS</span>
          <span>•</span>
          <span>5 GLOBAL COMMODITIES</span>
          <span>•</span>
          <span className="text-[#e50914] font-bold">DAILYART VERNACULAR</span>
        </div>
      </div>

      {/* Stocks Panoramic Grid (DailyArt 2-Column Exhibition Spread) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* US Equities Exhibition Wing */}
        <div className="bg-white dark:bg-[#12151e] border border-stone-200 dark:border-white/10 p-8 shadow-xs space-y-6">
          <div className="flex items-center justify-between border-b border-stone-200/80 dark:border-white/[0.06] pb-4">
            <span className="font-serif font-black text-xl text-stone-900 dark:text-white flex items-center space-x-2">
              <span className="text-2xl">🇺🇸</span>
              <span>美股主线龙头与半导体博弈</span>
            </span>
            <span className="text-xs font-mono px-2 py-0.5 bg-stone-900 text-white dark:bg-white dark:text-stone-950 font-bold uppercase tracking-wider">
              S&amp;P 500 / NASDAQ 100
            </span>
          </div>

          <div className="divide-y divide-stone-100 dark:divide-white/[0.04]">
            {stocks.us.map((item, idx) => (
              <div key={idx} className="py-5 space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-mono text-[#e50914] font-bold">
                      [0{idx + 1}]
                    </span>
                    <h4 className="text-lg font-bold text-stone-900 dark:text-white font-serif tracking-tight">
                      {item.name}
                    </h4>
                  </div>
                  <span
                    className={`text-xs font-mono font-bold px-2.5 py-0.5 border ${
                      item.isPositive
                        ? "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/20"
                        : "bg-rose-50 dark:bg-rose-500/10 text-rose-700 dark:text-rose-400 border-rose-200 dark:border-rose-500/20"
                    }`}
                  >
                    {item.change}
                  </span>
                </div>
                <p className="text-sm font-serif text-stone-600 dark:text-stone-300 leading-relaxed">
                  {item.catalyst}
                </p>
                <div className="flex items-center justify-between text-xs font-mono text-stone-400 pt-1">
                  <span>资金动能与机构梯队：</span>
                  <span className="text-stone-900 dark:text-stone-200 font-bold">
                    {item.volumeOrTrend}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* China A-Shares & H-Shares Exhibition Wing */}
        <div className="bg-white dark:bg-[#12151e] border border-stone-200 dark:border-white/10 p-8 shadow-xs space-y-6">
          <div className="flex items-center justify-between border-b border-stone-200/80 dark:border-white/[0.06] pb-4">
            <span className="font-serif font-black text-xl text-stone-900 dark:text-white flex items-center space-x-2">
              <span className="text-2xl">🇨🇳</span>
              <span>A/H 股主线板块及热点纵深</span>
            </span>
            <span className="text-xs font-mono px-2 py-0.5 bg-stone-900 text-white dark:bg-white dark:text-stone-950 font-bold uppercase tracking-wider">
              CSI 300 / HSTECH
            </span>
          </div>

          <div className="divide-y divide-stone-100 dark:divide-white/[0.04]">
            {stocks.china.map((item, idx) => (
              <div key={idx} className="py-5 space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-mono text-[#e50914] font-bold">
                      [0{idx + 1}]
                    </span>
                    <h4 className="text-lg font-bold text-stone-900 dark:text-white font-serif tracking-tight">
                      {item.name}
                    </h4>
                  </div>
                  <span
                    className={`text-xs font-mono font-bold px-2.5 py-0.5 border ${
                      item.isPositive
                        ? "bg-rose-50 dark:bg-rose-500/10 text-rose-700 dark:text-rose-400 border-rose-200 dark:border-rose-500/20"
                        : "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/20"
                    }`}
                  >
                    {item.change}
                  </span>
                </div>
                <p className="text-sm font-serif text-stone-600 dark:text-stone-300 leading-relaxed">
                  {item.catalyst}
                </p>
                <div className="flex items-center justify-between text-xs font-mono text-stone-400 pt-1">
                  <span>连板高度与情绪周期：</span>
                  <span className="text-stone-900 dark:text-stone-200 font-bold">
                    {item.volumeOrTrend}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Global Commodities Strip (DailyArt Museum Catalog Grid Pattern) */}
      <div className="bg-white dark:bg-[#12151e] border border-stone-200 dark:border-white/10 p-8 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center justify-between border-b border-stone-200/80 dark:border-white/[0.06] pb-4">
          <div className="flex items-center space-x-3">
            <span className="inline-block px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-wider bg-[#e50914] text-white font-bold">
              COMMODITIES LEDGER
            </span>
            <span className="font-serif font-black text-xl text-stone-900 dark:text-white">
              全球大宗商品定价与宏观供需剪刀差
            </span>
          </div>
          <span className="text-xs font-mono text-stone-400 uppercase hidden sm:inline-block">
            ENERGY / METALS / GRAINS · LIVE QUOTED
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {commodities.map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-[#faf9f5] dark:bg-[#0c0f16] border border-stone-200 dark:border-white/[0.08] hover:border-[#e50914]/50 dark:hover:border-[#e50914]/50 transition-all space-y-4 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 bg-stone-200 dark:bg-white/[0.08] text-stone-700 dark:text-stone-300 font-bold">
                    {item.sector}
                  </span>
                  <span
                    className={`text-xs font-mono font-bold ${
                      item.isPositive
                        ? "text-emerald-700 dark:text-emerald-400"
                        : "text-rose-700 dark:text-rose-400"
                    }`}
                  >
                    {item.change}
                  </span>
                </div>

                <div className="pt-1">
                  <h4 className="font-serif font-bold text-lg text-stone-900 dark:text-white">
                    {item.name}
                  </h4>
                  <div className="text-xl font-mono font-black text-stone-900 dark:text-stone-100 mt-1">
                    {item.price}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 font-serif leading-relaxed pt-3 mt-3 border-t border-stone-200/80 dark:border-white/[0.06]">
                  {item.supplyDemandSummary}
                </p>
              </div>

              <div className="pt-2 text-right">
                <span className="text-[10px] font-mono text-[#e50914] font-bold uppercase tracking-wider">
                  INDEX ANCHOR // 0{idx + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

