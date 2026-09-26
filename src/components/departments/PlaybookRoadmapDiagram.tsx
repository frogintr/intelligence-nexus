"use client";

import React from "react";

export function PlaybookRoadmapDiagram() {
  return (
    <div className="my-6 border border-stone-300/80 dark:border-white/[0.1] bg-[#fdfcf9] dark:bg-[#070b14] p-6 sm:p-8 shadow-inner font-mono text-xs text-stone-700 dark:text-stone-200">
      <div className="flex items-center justify-between border-b border-stone-200 dark:border-white/[0.06] pb-3 mb-6">
        <div className="flex items-center space-x-2 text-[#4338ca] dark:text-[#818cf8] font-bold">
          <span className="w-2 h-2 rounded-full bg-[#4338ca] dark:bg-[#818cf8]" />
          <span>ROADMAP BLUEPRINT // 4-STAGE QUANTITATIVE INFRASTRUCTURE EVOLUTION</span>
        </div>
        <span className="text-stone-400">FIGURE 5.1 · PRODUCTION TRAJECTORY</span>
      </div>

      <svg viewBox="0 0 900 240" className="w-full h-auto">
        <defs>
          <marker id="arrow-roadmap" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="#6366f1" />
          </marker>
        </defs>

        {/* Stage 1 */}
        <g transform="translate(30, 40)">
          <rect x="0" y="0" width="180" height="150" rx="4" className="fill-white dark:fill-[#0f172a] stroke-stone-300 dark:stroke-stone-700" strokeWidth="1.5" />
          <rect x="0" y="0" width="180" height="28" rx="4" className="fill-indigo-50 dark:fill-indigo-950/40" />
          <text x="90" y="19" textAnchor="middle" className="font-bold text-[11px] fill-[#4338ca] dark:fill-[#818cf8]">STAGE 01 · DATA LAKE</text>
          <text x="90" y="55" textAnchor="middle" className="font-bold text-xs fill-stone-900 dark:fill-stone-100">数据基建与清洗</text>
          <line x1="20" y1="70" x2="160" y2="70" stroke="currentColor" strokeWidth="0.5" opacity="0.1" />
          <text x="90" y="90" textAnchor="middle" className="text-[10px] fill-stone-500">Parquet / ClickHouse</text>
          <text x="90" y="110" textAnchor="middle" className="text-[10px] fill-stone-500">L2 Tick 除权除息清洗</text>
          <text x="90" y="130" textAnchor="middle" className="text-[9px] fill-emerald-600 dark:fill-emerald-400 font-bold">100% 杜绝未来函数</text>
        </g>

        {/* Arrow 1 -> 2 */}
        <line x1="210" y1="115" x2="250" y2="115" stroke="#6366f1" strokeWidth="1.5" markerEnd="url(#arrow-roadmap)" />

        {/* Stage 2 */}
        <g transform="translate(255, 40)">
          <rect x="0" y="0" width="180" height="150" rx="4" className="fill-white dark:fill-[#0f172a] stroke-stone-300 dark:stroke-stone-700" strokeWidth="1.5" />
          <rect x="0" y="0" width="180" height="28" rx="4" className="fill-indigo-50 dark:fill-indigo-950/40" />
          <text x="90" y="19" textAnchor="middle" className="font-bold text-[11px] fill-[#4338ca] dark:fill-[#818cf8]">STAGE 02 · RESEARCH</text>
          <text x="90" y="55" textAnchor="middle" className="font-bold text-xs fill-stone-900 dark:fill-stone-100">向量化回测与证伪</text>
          <line x1="20" y1="70" x2="160" y2="70" stroke="currentColor" strokeWidth="0.5" opacity="0.1" />
          <text x="90" y="90" textAnchor="middle" className="text-[10px] fill-stone-500">VectorBT / Polars</text>
          <text x="90" y="110" textAnchor="middle" className="text-[10px] fill-stone-500">参数网格矩阵并行搜寻</text>
          <text x="90" y="130" textAnchor="middle" className="text-[9px] fill-[#4338ca] dark:fill-[#818cf8] font-bold">分钟级假说证伪闭环</text>
        </g>

        {/* Arrow 2 -> 3 */}
        <line x1="435" y1="115" x2="475" y2="115" stroke="#6366f1" strokeWidth="1.5" markerEnd="url(#arrow-roadmap)" />

        {/* Stage 3 */}
        <g transform="translate(480, 40)">
          <rect x="0" y="0" width="180" height="150" rx="4" className="fill-white dark:fill-[#0f172a] stroke-stone-300 dark:stroke-stone-700" strokeWidth="1.5" />
          <rect x="0" y="0" width="180" height="28" rx="4" className="fill-indigo-50 dark:fill-indigo-950/40" />
          <text x="90" y="19" textAnchor="middle" className="font-bold text-[11px] fill-[#4338ca] dark:fill-[#818cf8]">STAGE 03 · ALPHA</text>
          <text x="90" y="55" textAnchor="middle" className="font-bold text-xs fill-stone-900 dark:fill-stone-100">微观结构与低延时</text>
          <line x1="20" y1="70" x2="160" y2="70" stroke="currentColor" strokeWidth="0.5" opacity="0.1" />
          <text x="90" y="90" textAnchor="middle" className="text-[10px] fill-stone-500">Rust / C++ / C#</text>
          <text x="90" y="110" textAnchor="middle" className="text-[10px] fill-stone-500">OFI 盘口脉冲与冲击成本</text>
          <text x="90" y="130" textAnchor="middle" className="text-[9px] fill-amber-600 dark:fill-amber-400 font-bold">亚毫秒级信号推断</text>
        </g>

        {/* Arrow 3 -> 4 */}
        <line x1="660" y1="115" x2="700" y2="115" stroke="#6366f1" strokeWidth="1.5" markerEnd="url(#arrow-roadmap)" />

        {/* Stage 4 */}
        <g transform="translate(705, 40)">
          <rect x="0" y="0" width="170" height="150" rx="4" className="fill-white dark:fill-[#0f172a] stroke-rose-500/80" strokeWidth="1.5" />
          <rect x="0" y="0" width="170" height="28" rx="4" className="fill-rose-50 dark:fill-rose-950/40" />
          <text x="85" y="19" textAnchor="middle" className="font-bold text-[11px] fill-rose-600 dark:fill-rose-400">STAGE 04 · EXECUTION</text>
          <text x="85" y="55" textAnchor="middle" className="font-bold text-xs fill-stone-900 dark:fill-stone-100">机房托管与物理熔断</text>
          <line x1="15" y1="70" x2="155" y2="70" stroke="currentColor" strokeWidth="0.5" opacity="0.1" />
          <text x="85" y="90" textAnchor="middle" className="text-[10px] fill-stone-500">FIX Protocol / Co-location</text>
          <text x="85" y="110" textAnchor="middle" className="text-[10px] fill-stone-500">独立看门狗心跳审计</text>
          <text x="85" y="130" textAnchor="middle" className="text-[9px] fill-rose-600 dark:fill-rose-400 font-bold">Kill-Switch 物理硬熔断</text>
        </g>
      </svg>

      <div className="mt-4 flex flex-wrap items-center justify-between text-[11px] text-stone-500 dark:text-stone-400 pt-3 border-t border-stone-200 dark:border-white/[0.04]">
        <span>• 跃迁原则：每一阶段工程成果必须作为下一阶段的确定性黑盒依赖，拒绝跨阶段跃进</span>
        <span>• 防御性设计：生产级系统始终假设数据必然存在噪声、网络必然出现抖动、因子必然发生衰减</span>
      </div>
    </div>
  );
}
