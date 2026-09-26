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
    <section id="market-panoramic" className="my-16">
      {/* DailyArt Section Heading */}
      <div className="flex items-center justify-between mb-8 pb-3 border-b border-stone-200/90 dark:border-white/[0.08]">
        <div className="flex items-center space-x-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#9e2a2b] dark:bg-[#c5a059]" />
          <div>
            <h2 className="text-base sm:text-lg font-bold text-stone-900 dark:text-white uppercase tracking-wider font-serif">
              MARKET PANORAMIC // 中美股票主线与大宗商品全景复盘
            </h2>
            <p className="text-xs text-stone-500 dark:text-stone-400 font-serif italic mt-0.5">
              全球云厂商资本开支博弈 · A/H股红利出清与高能商品供需测算
            </p>
          </div>
        </div>

        <span className="text-[11px] font-mono text-stone-400 hidden sm:inline-block">
          GLOBAL TAPE MONITOR
        </span>
      </div>

      {/* Stocks Panoramic Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* US Equities */}
        <div className="rounded-2xl bg-white dark:bg-[#0c0f17] border border-stone-200/90 dark:border-white/[0.08] p-6 sm:p-8 shadow-sm">
          <div className="flex items-center justify-between mb-6 pb-2 border-b border-stone-100 dark:border-white/[0.06]">
            <span className="font-serif font-bold text-base text-stone-900 dark:text-white flex items-center">
              <span className="mr-2">🇺🇸</span> 美股主线板块及龙头博弈
            </span>
            <span className="text-[10px] font-mono text-stone-400 uppercase">
              S&amp;P 500 / NASDAQ 100
            </span>
          </div>

          <div className="space-y-4">
            {stocks.us.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-stone-50/80 dark:bg-white/[0.02] border border-stone-200/60 dark:border-white/[0.04] hover:border-stone-300 dark:hover:border-white/[0.1] transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-bold text-stone-900 dark:text-white font-sans">
                    {item.name}
                  </h4>
                  <span
                    className={`text-xs font-mono font-bold px-2 py-0.5 rounded border ${
                      item.isPositive
                        ? "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/20"
                        : "bg-rose-50 dark:bg-rose-500/10 text-rose-700 dark:text-rose-400 border-rose-200 dark:border-rose-500/20"
                    }`}
                  >
                    {item.change}
                  </span>
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-300 font-serif leading-relaxed mb-2">
                  {item.catalyst}
                </p>
                <div className="flex items-center justify-between text-[11px] font-mono text-stone-400 pt-2 border-t border-stone-200/40 dark:border-white/[0.03]">
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
        <div className="rounded-2xl bg-white dark:bg-[#0c0f17] border border-stone-200/90 dark:border-white/[0.08] p-6 sm:p-8 shadow-sm">
          <div className="flex items-center justify-between mb-6 pb-2 border-b border-stone-100 dark:border-white/[0.06]">
            <span className="font-serif font-bold text-base text-stone-900 dark:text-white flex items-center">
              <span className="mr-2">🇨🇳</span> A/H 股主线板块及热点纵深
            </span>
            <span className="text-[10px] font-mono text-stone-400 uppercase">
              CSI 300 / HANG SENG TECH
            </span>
          </div>

          <div className="space-y-4">
            {stocks.china.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-stone-50/80 dark:bg-white/[0.02] border border-stone-200/60 dark:border-white/[0.04] hover:border-stone-300 dark:hover:border-white/[0.1] transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-bold text-stone-900 dark:text-white font-sans">
                    {item.name}
                  </h4>
                  <span
                    className={`text-xs font-mono font-bold px-2 py-0.5 rounded border ${
                      item.isPositive
                        ? "bg-rose-50 dark:bg-rose-500/10 text-rose-700 dark:text-rose-400 border-rose-200 dark:border-rose-500/20"
                        : "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/20"
                    }`}
                  >
                    {item.change}
                  </span>
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-300 font-serif leading-relaxed mb-2">
                  {item.catalyst}
                </p>
                <div className="flex items-center justify-between text-[11px] font-mono text-stone-400 pt-2 border-t border-stone-200/40 dark:border-white/[0.03]">
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
      <div className="rounded-2xl bg-white dark:bg-[#0c0f17] border border-stone-200/90 dark:border-white/[0.08] p-6 sm:p-8 shadow-sm">
        <div className="flex items-center justify-between mb-6 pb-2 border-b border-stone-100 dark:border-white/[0.06]">
          <span className="font-serif font-bold text-base text-stone-900 dark:text-white flex items-center">
            <Layers className="w-4 h-4 mr-2 text-[#9e2a2b] dark:text-[#c5a059]" />
            全球大宗商品定价与宏观供需剪刀差
          </span>
          <span className="text-[10px] font-mono text-stone-400 uppercase">
            ENERGY / METALS / GRAINS
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {commodities.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-stone-50/80 dark:bg-white/[0.02] border border-stone-200/70 dark:border-white/[0.04] space-y-2"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-stone-200/70 dark:bg-white/[0.05] text-stone-600 dark:text-stone-300">
                  {item.sector}
                </span>
                <span
                  className={`text-xs font-mono font-bold ${
                    item.isPositive
                      ? "text-emerald-600 dark:text-emerald-400"
                      : "text-rose-600 dark:text-rose-400"
                  }`}
                >
                  {item.change}
                </span>
              </div>

              <div className="flex items-baseline justify-between pt-1">
                <span className="font-serif font-bold text-base text-stone-900 dark:text-white">
                  {item.name}
                </span>
                <span className="text-sm font-mono font-bold text-stone-800 dark:text-stone-200">
                  {item.price}
                </span>
              </div>

              <p className="text-xs text-stone-600 dark:text-stone-400 font-serif leading-relaxed pt-2 border-t border-stone-200/40 dark:border-white/[0.03]">
                {item.supplyDemandSummary}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
