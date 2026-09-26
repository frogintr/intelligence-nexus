"use client";

import React from "react";

export function CoverTransmissionCanvas() {
  return (
    <div className="my-10 border-2 border-stone-300 dark:border-white/[0.12] bg-[#fdfcf9] dark:bg-[#07090e] p-6 sm:p-8 shadow-inner font-mono text-xs">
      <div className="flex items-center justify-between border-b border-stone-200 dark:border-white/[0.08] pb-3 mb-6">
        <div className="flex items-center space-x-2 text-[#9e2a2b] dark:text-[#e5c378] font-bold">
          <span className="w-2.5 h-2.5 border border-current flex items-center justify-center">
            <span className="w-1 h-1 bg-current" />
          </span>
          <span>PLATE I // COPPERPLATE SYSTEM TRANSMISSION MATRIX</span>
        </div>
        <span className="text-stone-400 font-serif italic">FIGURE 1.0 · AESTHETICA MECHANICA</span>
      </div>

      <svg viewBox="0 0 900 320" className="w-full h-auto text-stone-700 dark:text-stone-200 select-none">
        <defs>
          <marker id="arrow-plate" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="currentColor" opacity="0.7" />
          </marker>
          <pattern id="hatch-copper" width="12" height="12" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="0" y2="12" stroke="currentColor" strokeWidth="0.5" opacity="0.08" />
          </pattern>
        </defs>

        {/* Outer Frame with Hatched Corner Ticks */}
        <rect x="20" y="20" width="860" height="280" fill="url(#hatch-copper)" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        <rect x="26" y="26" width="848" height="268" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.2" strokeDasharray="4 2" />

        {/* Corner Accents */}
        <line x1="20" y1="35" x2="35" y2="20" stroke="#c5a059" strokeWidth="1.5" />
        <line x1="880" y1="35" x2="865" y2="20" stroke="#c5a059" strokeWidth="1.5" />
        <line x1="20" y1="285" x2="35" y2="300" stroke="#c5a059" strokeWidth="1.5" />
        <line x1="880" y1="285" x2="865" y2="300" stroke="#c5a059" strokeWidth="1.5" />

        {/* Subtle Central Compass Astrolabe Circles */}
        <circle cx="450" cy="160" r="110" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.12" strokeDasharray="3 3" />
        <circle cx="450" cy="160" r="60" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.1" />
        <line x1="450" y1="35" x2="450" y2="285" stroke="currentColor" strokeWidth="0.5" opacity="0.08" strokeDasharray="2 4" />
        <line x1="300" y1="160" x2="600" y2="160" stroke="currentColor" strokeWidth="0.5" opacity="0.08" strokeDasharray="2 4" />

        {/* NODE 1: 10Y UST */}
        <g transform="translate(50, 95)">
          <rect x="0" y="0" width="165" height="130" rx="2" className="fill-white dark:fill-[#0c0f16] stroke-[#9e2a2b] dark:stroke-[#c5a059]" strokeWidth="1.5" />
          <text x="82" y="28" textAnchor="middle" className="text-[10px] font-bold fill-stone-400 tracking-wider">01 // DISCOUNT ANCHOR</text>
          <text x="82" y="58" textAnchor="middle" className="text-xl font-bold font-mono fill-[#9e2a2b] dark:fill-[#e5c378]">10Y UST 4.18%</text>
          <line x1="20" y1="72" x2="145" y2="72" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
          <text x="82" y="90" textAnchor="middle" className="text-[10px] font-serif fill-stone-600 dark:fill-stone-300">全球贴现率估值中轴</text>
          <text x="82" y="108" textAnchor="middle" className="text-[9px] fill-stone-400">Equity Risk Premium (ERP)</text>
        </g>

        {/* Transmission Arrow 1 -> 2 */}
        <path d="M 215 160 L 265 160" fill="none" stroke="#c5a059" strokeWidth="1.5" markerEnd="url(#arrow-plate)" />

        {/* NODE 2: DXY & CNH */}
        <g transform="translate(270, 95)">
          <rect x="0" y="0" width="165" height="130" rx="2" className="fill-white dark:fill-[#0c0f16] stroke-sky-700 dark:stroke-sky-400" strokeWidth="1.5" />
          <text x="82" y="28" textAnchor="middle" className="text-[10px] font-bold fill-stone-400 tracking-wider">02 // LIQUIDITY VECTOR</text>
          <text x="82" y="58" textAnchor="middle" className="text-xl font-bold font-mono fill-sky-700 dark:fill-sky-400">DXY · CNH</text>
          <line x1="20" y1="72" x2="145" y2="72" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
          <text x="82" y="90" textAnchor="middle" className="text-[10px] font-serif fill-stone-600 dark:fill-stone-300">跨国资金流再平衡通道</text>
          <text x="82" y="108" textAnchor="middle" className="text-[9px] fill-stone-400">Offshore FX Arbitrage</text>
        </g>

        {/* Transmission Arrow 2 -> 3 */}
        <path d="M 435 160 L 485 160" fill="none" stroke="#c5a059" strokeWidth="1.5" markerEnd="url(#arrow-plate)" />

        {/* NODE 3: AGENTIC CAPEX */}
        <g transform="translate(490, 95)">
          <rect x="0" y="0" width="165" height="130" rx="2" className="fill-white dark:fill-[#0c0f16] stroke-emerald-700 dark:stroke-emerald-400" strokeWidth="1.5" />
          <text x="82" y="28" textAnchor="middle" className="text-[10px] font-bold fill-stone-400 tracking-wider">03 // AGENTIC CAPEX</text>
          <text x="82" y="58" textAnchor="middle" className="text-xl font-bold font-mono fill-emerald-700 dark:fill-emerald-400">DeepSeek · MoE</text>
          <line x1="20" y1="72" x2="145" y2="72" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
          <text x="82" y="90" textAnchor="middle" className="text-[10px] font-serif fill-stone-600 dark:fill-stone-300">工业级多智能体流水线</text>
          <text x="82" y="108" textAnchor="middle" className="text-[9px] fill-stone-400">Multi-Agent Swarm Bus</text>
        </g>

        {/* Transmission Arrow 3 -> 4 */}
        <path d="M 655 160 L 705 160" fill="none" stroke="#c5a059" strokeWidth="1.5" markerEnd="url(#arrow-plate)" />

        {/* NODE 4: SYSTEMATIC ALPHA */}
        <g transform="translate(710, 95)">
          <rect x="0" y="0" width="165" height="130" rx="2" className="fill-white dark:fill-[#0c0f16] stroke-amber-700 dark:stroke-amber-400" strokeWidth="1.5" />
          <text x="82" y="28" textAnchor="middle" className="text-[10px] font-bold fill-stone-400 tracking-wider">04 // SYSTEMATIC ALPHA</text>
          <text x="82" y="58" textAnchor="middle" className="text-xl font-bold font-mono fill-amber-700 dark:fill-amber-400">Sharpe 3.12</text>
          <line x1="20" y1="72" x2="145" y2="72" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
          <text x="82" y="90" textAnchor="middle" className="text-[10px] font-serif fill-stone-600 dark:fill-stone-300">盘口 OFI 协整对冲闭环</text>
          <text x="82" y="108" textAnchor="middle" className="text-[9px] fill-stone-400">VectorBT · Kill-Switch</text>
        </g>

        {/* Coordinates Watermark */}
        <text x="40" y="275" className="text-[9px] font-mono fill-stone-400">COORDINATES: 31°14'N 121°28'E // 40°42'N 74°00'W</text>
        <text x="860" y="275" textAnchor="end" className="text-[9px] font-mono fill-stone-400">LATENCY: &lt; 50MS · 100% REPRODUCIBLE</text>
      </svg>

      <div className="text-center pt-4 border-t border-stone-200/60 dark:border-white/[0.04]">
        <p className="text-sm font-serif italic text-stone-600 dark:text-stone-400">
          Plate I. The Sovereign Transmission Engine: Macro Discount Rates Translating to Automated Agentic Trading Alpha.
        </p>
      </div>
    </div>
  );
}
