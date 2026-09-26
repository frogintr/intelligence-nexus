import React from "react";
import { MacroAnchors as MacroType } from "../types";
import { TrendingUp, DollarSign, Activity, Flame, Compass } from "lucide-react";

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
      sub: "无风险基准利率",
      icon: TrendingUp,
      accent: "text-amber-400",
      bgGlow: "from-amber-500/10 to-transparent",
    },
    {
      title: "DXY INDEX",
      label: "全球流动性风向标",
      value: anchors.dxyIndex,
      sub: "美元跨国强弱",
      icon: DollarSign,
      accent: "text-sky-400",
      bgGlow: "from-sky-500/10 to-transparent",
    },
    {
      title: "USD / CNH",
      label: "内外资产估值锚",
      value: anchors.usdcnh,
      sub: "离岸人民币汇率",
      icon: Activity,
      accent: "text-emerald-400",
      bgGlow: "from-emerald-500/10 to-transparent",
    },
    {
      title: "BRENT CRUDE",
      label: "全球通胀与工业成本",
      value: anchors.brentOil,
      sub: "国际原油定价",
      icon: Flame,
      accent: "text-rose-400",
      bgGlow: "from-rose-500/10 to-transparent",
    },
  ];

  return (
    <section className="my-8">
      {/* Editorial One-Liner Vision */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#131722] via-[#0f121a] to-[#131722] border border-white/[0.08] p-6 sm:p-8 mb-6 shadow-2xl">
        <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[#e5c378] to-[#8c6d32]" />
        <div className="flex items-start space-x-4">
          <div className="p-2.5 rounded-xl bg-[#c5a059]/10 border border-[#c5a059]/30 text-[#e5c378] hidden sm:block">
            <Compass className="w-6 h-6 animate-spin-slow" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center space-x-3">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#e5c378] font-bold">
                EXECUTIVE VISION // 每日宏观主线定调
              </span>
            </div>
            <p className="font-serif text-lg sm:text-2xl text-slate-100 font-medium leading-relaxed italic">
              &ldquo;{oneLiner}&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* 4 Macro Anchors Grid (严整四格，科学美学架构) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="relative overflow-hidden rounded-xl bg-[#11141d]/90 border border-white/[0.06] p-4 sm:p-5 hover:border-white/[0.15] transition-all group"
            >
              <div
                className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${item.bgGlow} rounded-bl-full pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity`}
              />
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-mono text-slate-400 font-bold tracking-wider">
                  {item.title}
                </span>
                <Icon className={`w-4 h-4 ${item.accent}`} />
              </div>
              <div className="text-2xl sm:text-3xl font-mono font-bold text-white tracking-tight my-1">
                {item.value}
              </div>
              <div className="flex items-center justify-between text-[11px] text-slate-400 mt-2 pt-2 border-t border-white/[0.05]">
                <span>{item.label}</span>
                <span className="text-slate-500 font-serif italic hidden sm:inline">
                  {item.sub}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
