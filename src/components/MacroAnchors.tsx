import React from "react";
import { MacroAnchors as MacroType } from "../types";
import { TrendingUp, DollarSign, Activity, Flame, Compass, Quote } from "lucide-react";

interface Props {
  oneLiner: string;
  anchors: MacroType;
}

export function MacroAnchors({ oneLiner, anchors }: Props) {
  const items = [
    {
      title: "10Y US TREASURY",
      label: "全球资产估值中枢",
      value: anchors.us10yYield,
      sub: "无风险基准利率 · 贴现率中轴",
      icon: TrendingUp,
      accent: "text-[#9e2a2b] dark:text-[#e5c378]",
      tag: "锚点 01",
    },
    {
      title: "DXY INDEX",
      label: "全球跨国流动性风向标",
      value: anchors.dxyIndex,
      sub: "美元指数 · 全球信贷紧缩度",
      icon: DollarSign,
      accent: "text-sky-700 dark:text-sky-400",
      tag: "锚点 02",
    },
    {
      title: "USD / CNH",
      label: "内外资产定价连通器",
      value: anchors.usdcnh,
      sub: "离岸人民币汇率 · 风险偏好",
      icon: Activity,
      accent: "text-emerald-700 dark:text-emerald-400",
      tag: "锚点 03",
    },
    {
      title: "BRENT CRUDE",
      label: "全球工业成本与通胀底线",
      value: anchors.brentOil,
      sub: "国际原油基准 · 二次通胀监测",
      icon: Flame,
      accent: "text-amber-700 dark:text-amber-400",
      tag: "锚点 04",
    },
  ];

  return (
    <div className="space-y-6">
      {/* 1. DailyArt Magazine Executive Lead Vision (今日主线定调) */}
      <section
        id="editorial-vision"
        className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#f7f5ef] via-[#fbfaf8] to-[#f5f2eb] dark:from-[#11151f] dark:via-[#0c0f16] dark:to-[#11151f] border border-stone-200/90 dark:border-white/[0.08] p-6 sm:p-10 shadow-sm"
      >
        <div className="absolute top-0 left-0 w-2 h-full bg-[#9e2a2b] dark:bg-[#c5a059]" />

        <div className="flex flex-col md:flex-row items-start justify-between gap-6 relative z-10">
          <div className="space-y-3 max-w-4xl">
            <div className="flex items-center space-x-3">
              <span className="inline-flex items-center space-x-1.5 text-[11px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded bg-[#9e2a2b]/10 dark:bg-[#c5a059]/15 text-[#9e2a2b] dark:text-[#e5c378] font-bold border border-[#9e2a2b]/20 dark:border-[#c5a059]/30">
                <Compass className="w-3.5 h-3.5" />
                <span>EXECUTIVE VISION // 每日宏观主线定调</span>
              </span>
              <span className="text-[11px] font-mono text-stone-400">
                ISSUE HEADLINE
              </span>
            </div>

            {/* Oversized High-Contrast Editorial Serif Quote */}
            <div className="relative">
              <Quote className="w-8 h-8 text-[#9e2a2b]/20 dark:text-[#c5a059]/20 absolute -top-3 -left-3 pointer-events-none" />
              <p className="font-serif text-xl sm:text-3xl text-stone-900 dark:text-stone-100 font-medium leading-relaxed italic pl-5 border-l-2 border-[#9e2a2b]/40 dark:border-[#c5a059]/40">
                &ldquo;{oneLiner}&rdquo;
              </p>
            </div>
          </div>

          <div className="hidden lg:flex flex-col items-end justify-center shrink-0 border-l border-stone-200 dark:border-white/[0.08] pl-6 text-right font-mono text-xs">
            <span className="text-stone-400 text-[10px] uppercase">ANALYSIS PROTOCOL</span>
            <span className="font-bold text-stone-800 dark:text-stone-200 mt-1">
              MACRO FLOW COUPLING
            </span>
            <span className="text-[11px] text-[#9e2a2b] dark:text-[#e5c378] mt-1">
              RIGOROUS 4-ANCHOR MODEL
            </span>
          </div>
        </div>
      </section>

      {/* 2. Four Macro Anchors Framed as Museum Placards (博物馆铭牌展陈) */}
      <section id="macro-anchors" className="pt-2">
        <div className="flex items-center justify-between mb-3 border-b border-stone-200/80 dark:border-white/[0.06] pb-2">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-[#9e2a2b] dark:bg-[#c5a059]" />
            <h2 className="text-sm font-bold font-sans tracking-wide text-stone-900 dark:text-white uppercase">
              全球宏观流动性 4 大核心定价锚
            </h2>
          </div>
          <span className="text-[11px] font-mono text-stone-400">
            LIQUIDITY ANCHOR REGIME
          </span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative overflow-hidden rounded-xl bg-white dark:bg-[#0c0f17] border border-stone-200/90 dark:border-white/[0.08] p-5 hover:border-[#9e2a2b]/40 dark:hover:border-[#c5a059]/40 hover:shadow-md transition-all group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-stone-100 dark:bg-white/[0.04] text-stone-500 dark:text-stone-400">
                    {item.tag}
                  </span>
                  <Icon className={`w-4 h-4 ${item.accent} transition-transform group-hover:scale-110`} />
                </div>

                <div className="text-xs font-bold text-stone-500 dark:text-stone-400 font-sans tracking-wider uppercase">
                  {item.title}
                </div>

                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-stone-900 dark:text-white tracking-tight my-1.5">
                  {item.value}
                </div>

                <div className="text-xs font-serif font-bold text-stone-800 dark:text-stone-200">
                  {item.label}
                </div>

                <div className="text-[11px] text-stone-500 dark:text-stone-400 font-serif mt-1">
                  {item.sub}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
