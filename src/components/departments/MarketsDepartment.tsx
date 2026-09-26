"use client";

import React from "react";
import { StockMarket, CommodityItem } from "../../types";
import { ArrowLeft, Globe2, Layers, TrendingUp, TrendingDown, DollarSign } from "lucide-react";

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
          className="inline-flex items-center space-x-2 text-sm font-serif text-[#9e2a2b] dark:text-[#e5c378] font-bold hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>返回封面精选导读 (Back to Cover)</span>
        </button>
        <span className="text-xs font-mono text-stone-400">
          DEPARTMENT VI OF VII · CROSS-ASSET TAPE
        </span>
      </div>

      {/* Monumental Department Header */}
      <div className="border-b-2 border-stone-800 dark:border-stone-400 pb-6">
        <div className="text-xs font-mono tracking-widest text-[#166534] dark:text-[#4ade80] uppercase font-bold mb-2">
          DEPARTMENT VI · CROSS-ASSET FINANCIAL TAPE &amp; COMMODITIES
        </div>
        <h2 className="text-4xl sm:text-6xl font-serif font-black tracking-tight text-stone-900 dark:text-white uppercase leading-tight">
          中美股票主线与大宗商品全景复盘
        </h2>
        <p className="mt-3 text-base sm:text-lg font-serif italic text-stone-700 dark:text-stone-300 max-w-4xl leading-relaxed">
          全球云厂商与半导体资本开支博弈 · A/H股红利出清与高能商品供需测算，以华尔街与金融时报传统报纸宽幅版面呈现。
        </p>
      </div>

      {/* Stocks Panoramic Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* US Equities */}
        <div className="bg-white dark:bg-[#1a1622] border-2 border-stone-200/90 dark:border-white/[0.08] p-8 shadow-sm space-y-6">
          <div className="flex items-center justify-between border-b border-stone-200/80 dark:border-white/[0.06] pb-4">
            <span className="font-serif font-black text-xl text-stone-900 dark:text-white flex items-center space-x-2">
              <span className="text-2xl">🇺🇸</span>
              <span>美股主线板块及龙头博弈</span>
            </span>
            <span className="text-xs font-mono text-stone-400 font-bold uppercase">
              S&amp;P 500 / NASDAQ 100
            </span>
          </div>

          <div className="divide-y divide-stone-100 dark:divide-white/[0.04]">
            {stocks.us.map((item, idx) => (
              <div key={idx} className="py-4 space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-bold text-stone-900 dark:text-white font-serif">
                    {item.name}
                  </h4>
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
                  <span>资金动能 / 梯队：</span>
                  <span className="text-stone-800 dark:text-stone-200 font-bold">
                    {item.volumeOrTrend}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* China A-Shares & H-Shares */}
        <div className="bg-white dark:bg-[#12151e] border border-stone-200/90 dark:border-white/[0.08] p-8 shadow-xs space-y-6">
          <div className="flex items-center justify-between border-b border-stone-100 dark:border-white/[0.04] pb-4">
            <span className="font-serif font-bold text-lg text-stone-900 dark:text-white flex items-center space-x-2">
              <span className="text-xl">🇨🇳</span>
              <span>A/H 股主线板块及热点纵深</span>
            </span>
            <span className="text-xs font-mono text-stone-400 uppercase">
              CSI 300 / HSTECH
            </span>
          </div>

          <div className="divide-y divide-stone-100 dark:divide-white/[0.04]">
            {stocks.china.map((item, idx) => (
              <div key={idx} className="py-4 space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-bold text-stone-900 dark:text-white font-serif">
                    {item.name}
                  </h4>
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
                  <span>连板高度 / 情绪：</span>
                  <span className="text-stone-800 dark:text-stone-200 font-bold">
                    {item.volumeOrTrend}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Global Commodities Strip */}
      <div className="bg-white dark:bg-[#12151e] border border-stone-200/90 dark:border-white/[0.08] p-8 shadow-xs space-y-6">
        <div className="flex items-center justify-between border-b border-stone-100 dark:border-white/[0.04] pb-4">
          <span className="font-serif font-bold text-lg text-stone-900 dark:text-white flex items-center space-x-2">
            <Layers className="w-5 h-5 text-[#9e2a2b] dark:text-[#c5a059]" />
            <span>全球大宗商品定价与宏观供需剪刀差</span>
          </span>
          <span className="text-xs font-mono text-stone-400 uppercase">
            ENERGY / METALS / GRAINS
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {commodities.map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-[#fbf9f5] dark:bg-[#0c0f16] border border-stone-200/80 dark:border-white/[0.06] space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase px-2 py-0.5 bg-stone-200/70 dark:bg-white/[0.05] text-stone-600 dark:text-stone-300 font-bold">
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

              <div className="flex items-baseline justify-between pt-1">
                <span className="font-serif font-bold text-lg text-stone-900 dark:text-white">
                  {item.name}
                </span>
                <span className="text-base font-mono font-bold text-stone-800 dark:text-stone-200">
                  {item.price}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 font-serif leading-relaxed pt-3 border-t border-stone-200/50 dark:border-white/[0.04]">
                {item.supplyDemandSummary}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
