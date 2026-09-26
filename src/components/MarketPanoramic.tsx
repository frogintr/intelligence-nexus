import React from "react";
import { StockMarket, CommodityItem } from "../types";
import { Globe2, Layers } from "lucide-react";

interface Props {
  stocks: {
    us: StockMarket[];
    china: StockMarket[];
  };
  commodities: CommodityItem[];
}

export function MarketPanoramic({ stocks, commodities }: Props) {
  return (
    <section className="my-12">
      {/* Stocks Panoramic */}
      <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-200/80 dark:border-white/[0.08]">
        <div className="flex items-center space-x-3">
          <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
            <Globe2 className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white uppercase tracking-wider font-sans">
              MARKET PANORAMIC // 中美股票主线与连板资金流
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-serif italic">
              云厂商资本开支博弈 · A/H股红利防守与硬科技梯队
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* US Equities */}
        <div className="rounded-2xl bg-white dark:bg-[#10131d] border border-slate-200/80 dark:border-white/[0.08] p-6 shadow-card-light dark:shadow-xl transition-colors">
          <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-100 dark:border-white/[0.06]">
            <span className="font-sans font-bold text-sm text-slate-900 dark:text-white flex items-center">
              <span className="mr-2">🇺🇸</span> 美股主线板块及龙头博弈
            </span>
            <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 uppercase">
              S&amp;P 500 / NASDAQ 100
            </span>
          </div>
          <div className="space-y-4">
            {stocks.us.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-50/80 dark:bg-white/[0.02] border border-slate-200/60 dark:border-white/[0.04] hover:border-slate-300 dark:hover:border-white/[0.1] transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white font-sans">
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
                <p className="text-xs text-slate-600 dark:text-slate-300 font-serif leading-relaxed mb-3">
                  {item.catalyst}
                </p>
                <div className="flex items-center justify-between text-xs font-mono pt-2 border-t border-slate-200/50 dark:border-white/[0.04]">
                  <span className="text-slate-400 dark:text-slate-500 text-[10px]">交投态势:</span>
                  <span className="text-[11px] text-[#997328] dark:text-[#e5c378] font-bold">
                    {item.volumeOrTrend}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* China Equities */}
        <div className="rounded-2xl bg-white dark:bg-[#10131d] border border-slate-200/80 dark:border-white/[0.08] p-6 shadow-card-light dark:shadow-xl transition-colors">
          <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-100 dark:border-white/[0.06]">
            <span className="font-sans font-bold text-sm text-slate-900 dark:text-white flex items-center">
              <span className="mr-2">🇨🇳</span> A/H 股主线与短线题材梯队
            </span>
            <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 uppercase">
              交投量能与赚钱效应
            </span>
          </div>
          <div className="space-y-4">
            {stocks.china.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-50/80 dark:bg-white/[0.02] border border-slate-200/60 dark:border-white/[0.04] hover:border-slate-300 dark:hover:border-white/[0.1] transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white font-sans">
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
                <p className="text-xs text-slate-600 dark:text-slate-300 font-serif leading-relaxed mb-3">
                  {item.catalyst}
                </p>
                <div className="flex items-center justify-between text-xs font-mono pt-2 border-t border-slate-200/50 dark:border-white/[0.04]">
                  <span className="text-slate-400 dark:text-slate-500 text-[10px]">交投态势:</span>
                  <span className="text-[11px] text-[#997328] dark:text-[#e5c378] font-bold">
                    {item.volumeOrTrend}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Commodities Grid */}
      <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-200/80 dark:border-white/[0.08]">
        <div className="flex items-center space-x-3">
          <div className="p-1.5 rounded-lg bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white uppercase tracking-wider font-sans">
              COMMODITIES &amp; FUTURES // 大宗商品与跨周期供需
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-serif italic">
              能源库存扰动、贵金属避险溢价与工业有色矿端变量
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {commodities.map((item, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-white dark:bg-[#10131d] border border-slate-200/80 dark:border-white/[0.08] flex flex-col justify-between hover:border-slate-300 dark:hover:border-white/[0.18] transition-all shadow-card-light dark:shadow-lg"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  {item.sector}
                </span>
                <span
                  className={`text-[11px] font-mono px-2 py-0.5 rounded-full border font-bold ${
                    item.isPositive
                      ? "text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 border-emerald-200 dark:border-emerald-500/30"
                      : "text-rose-700 dark:text-rose-400 bg-rose-50 dark:bg-rose-500/10 border-rose-200 dark:border-rose-500/30"
                  }`}
                >
                  {item.change}
                </span>
              </div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white font-sans mb-1">
                {item.name}
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 font-serif leading-relaxed mb-4">
                {item.supplyDemandSummary}
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 dark:border-white/[0.05] flex items-center justify-between text-[11px] font-mono">
              <span className="text-slate-500 dark:text-slate-400">最新报价</span>
              <span className="text-[#997328] dark:text-[#e5c378] font-bold">{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
