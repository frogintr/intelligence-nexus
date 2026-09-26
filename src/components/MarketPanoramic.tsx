import React from "react";
import { StockMarket, CommodityItem } from "../types";
import { Globe2, Layers, TrendingUp, TrendingDown } from "lucide-react";

interface Props {
  stocks: {
    us: StockMarket[];
    china: StockMarket[];
  };
  commodities: CommodityItem[];
}

export function MarketPanoramic({ stocks, commodities }: Props) {
  return (
    <section id="market-panoramic" className="space-y-6">
      {/* DailyArt Section Masthead */}
      <div className="flex items-center justify-between border-b-2 border-stone-800 dark:border-stone-400 pb-2">
        <div>
          <div className="text-[10px] font-mono tracking-widest text-[#9e2a2b] dark:text-[#e5c378] uppercase font-bold">
            DEPARTMENT IV · GLOBAL TAPE PANORAMIC
          </div>
          <h2 className="text-xl sm:text-2xl font-serif font-black uppercase tracking-tight text-stone-900 dark:text-stone-50">
            中美股票主线与大宗商品全景复盘
          </h2>
        </div>
        <span className="text-[11px] font-mono text-stone-400 hidden sm:inline-block">
          CROSS-ASSET LEDGER
        </span>
      </div>

      {/* Stocks Panoramic Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* US Equities */}
        <div className="bg-white dark:bg-[#12151e] border border-stone-200/90 dark:border-white/[0.08] p-5 sm:p-6 shadow-xs">
          <div className="flex items-center justify-between border-b border-stone-100 dark:border-white/[0.04] pb-3 mb-4">
            <span className="font-serif font-bold text-sm text-stone-900 dark:text-white flex items-center space-x-2">
              <span>🇺🇸</span>
              <span>美股主线板块及龙头博弈</span>
            </span>
            <span className="text-[10px] font-mono text-stone-400 uppercase">
              S&amp;P 500 / NASDAQ
            </span>
          </div>

          <div className="divide-y divide-stone-100 dark:divide-white/[0.04]">
            {stocks.us.map((item, idx) => (
              <div key={idx} className="py-3.5 space-y-1.5">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-stone-900 dark:text-white font-sans">
                    {item.name}
                  </h4>
                  <span
                    className={`text-[11px] font-mono font-bold px-2 py-0.5 border ${
                      item.isPositive
                        ? "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/20"
                        : "bg-rose-50 dark:bg-rose-500/10 text-rose-700 dark:text-rose-400 border-rose-200 dark:border-rose-500/20"
                    }`}
                  >
                    {item.change}
                  </span>
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-300 font-serif leading-relaxed">
                  {item.catalyst}
                </p>
                <div className="flex items-center justify-between text-[10px] font-mono text-stone-400 pt-1">
                  <span>资金动能 / 梯队：</span>
                  <span className="text-stone-700 dark:text-stone-300 font-medium">
                    {item.volumeOrTrend}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* China A-Shares & H-Shares */}
        <div className="bg-white dark:bg-[#12151e] border border-stone-200/90 dark:border-white/[0.08] p-5 sm:p-6 shadow-xs">
          <div className="flex items-center justify-between border-b border-stone-100 dark:border-white/[0.04] pb-3 mb-4">
            <span className="font-serif font-bold text-sm text-stone-900 dark:text-white flex items-center space-x-2">
              <span>🇨🇳</span>
              <span>A/H 股主线板块及热点纵深</span>
            </span>
            <span className="text-[10px] font-mono text-stone-400 uppercase">
              CSI 300 / HSTECH
            </span>
          </div>

          <div className="divide-y divide-stone-100 dark:divide-white/[0.04]">
            {stocks.china.map((item, idx) => (
              <div key={idx} className="py-3.5 space-y-1.5">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-stone-900 dark:text-white font-sans">
                    {item.name}
                  </h4>
                  <span
                    className={`text-[11px] font-mono font-bold px-2 py-0.5 border ${
                      item.isPositive
                        ? "bg-rose-50 dark:bg-rose-500/10 text-rose-700 dark:text-rose-400 border-rose-200 dark:border-rose-500/20"
                        : "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/20"
                    }`}
                  >
                    {item.change}
                  </span>
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-300 font-serif leading-relaxed">
                  {item.catalyst}
                </p>
                <div className="flex items-center justify-between text-[10px] font-mono text-stone-400 pt-1">
                  <span>连板高度 / 情绪：</span>
                  <span className="text-stone-700 dark:text-stone-300 font-medium">
                    {item.volumeOrTrend}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Global Commodities Strip */}
      <div className="bg-white dark:bg-[#12151e] border border-stone-200/90 dark:border-white/[0.08] p-5 sm:p-6 shadow-xs">
        <div className="flex items-center justify-between border-b border-stone-100 dark:border-white/[0.04] pb-3 mb-4">
          <span className="font-serif font-bold text-sm text-stone-900 dark:text-white flex items-center space-x-2">
            <Layers className="w-4 h-4 text-[#9e2a2b] dark:text-[#c5a059]" />
            <span>全球大宗商品定价与宏观供需剪刀差</span>
          </span>
          <span className="text-[10px] font-mono text-stone-400 uppercase">
            ENERGY / METALS / GRAINS
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {commodities.map((item, idx) => (
            <div
              key={idx}
              className="p-4 bg-[#fbf9f5] dark:bg-[#0c0f16] border border-stone-200/70 dark:border-white/[0.05] space-y-2"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 bg-stone-200/60 dark:bg-white/[0.05] text-stone-600 dark:text-stone-300">
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
                <span className="font-serif font-bold text-sm text-stone-900 dark:text-white">
                  {item.name}
                </span>
                <span className="text-sm font-mono font-bold text-stone-800 dark:text-stone-200">
                  {item.price}
                </span>
              </div>

              <p className="text-[11px] text-stone-600 dark:text-stone-400 font-serif leading-relaxed pt-2 border-t border-stone-200/40 dark:border-white/[0.03]">
                {item.supplyDemandSummary}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
