"use client";

import React from "react";

interface Props {
  plateId: string;
}

export function QuantArchitectureDiagram({ plateId }: Props) {
  if (plateId === "ofi-order-flow-imbalance") {
    return (
      <div className="my-6 border border-white/[0.1] bg-[#07090e] p-6 sm:p-8 shadow-2xl font-mono text-xs text-stone-200">
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-3 mb-6">
          <div className="flex items-center space-x-2 text-[#e5c378] font-bold">
            <span className="w-2 h-2 rounded-full bg-[#e5c378]" />
            <span>PLATE I SCHEMATIC // L2 LIMIT ORDER BOOK DEPTH &amp; OFI MICROSTRUCTURE</span>
          </div>
          <span className="text-stone-400">FIGURE 3.1 · SUB-MILLISECOND ORDER FLOW</span>
        </div>

        <svg viewBox="0 0 900 280" className="w-full h-auto text-stone-300">
          <defs>
            <marker id="arrow-gold" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#c5a059" />
            </marker>
            <marker id="arrow-green" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#10b981" />
            </marker>
          </defs>

          {/* Left: Bid Depth Ladder (Green) */}
          <rect x="40" y="40" width="220" height="200" rx="3" className="fill-[#0c1412] stroke-emerald-500/40" strokeWidth="1.5" />
          <text x="150" y="65" textAnchor="middle" className="font-bold text-xs fill-emerald-400">BID DEPTH LADDER (BUY SIDE)</text>
          
          <rect x="55" y="80" width="190" height="28" rx="2" className="fill-emerald-950/60 stroke-emerald-500/30" />
          <text x="65" y="98" className="text-[10px] fill-stone-400">L1 Bid: $184.20</text>
          <text x="235" y="98" textAnchor="end" className="text-[10px] fill-emerald-300 font-bold">14,200 shs (ΔV &gt; 0)</text>

          <rect x="55" y="115" width="190" height="28" rx="2" className="fill-emerald-950/40 stroke-emerald-500/20" />
          <text x="65" y="133" className="text-[10px] fill-stone-400">L2 Bid: $184.15</text>
          <text x="235" y="133" textAnchor="end" className="text-[10px] fill-emerald-300 font-bold">28,500 shs</text>

          <rect x="55" y="150" width="190" height="28" rx="2" className="fill-emerald-950/20 stroke-emerald-500/10" />
          <text x="65" y="168" className="text-[10px] fill-stone-400">L3 Bid: $184.10</text>
          <text x="235" y="168" textAnchor="end" className="text-[10px] fill-emerald-300 font-bold">42,100 shs</text>

          <text x="150" y="215" textAnchor="middle" className="text-[10px] fill-emerald-400 font-bold">Bid Momentum: Inflow +22.4%</text>

          {/* Center: OFI Vector Differential Operator */}
          <rect x="310" y="70" width="280" height="140" rx="4" className="fill-[#131722] stroke-[#c5a059]" strokeWidth="1.5" />
          <text x="450" y="95" textAnchor="middle" className="font-bold text-xs fill-[#e5c378]">OFI VECTOR ACCUMULATOR</text>
          <text x="450" y="120" textAnchor="middle" className="text-[11px] fill-emerald-400 font-bold">OFI_t = I_{"{P_b}"} ΔV_b - I_{"{P_a}"} ΔV_a</text>
          <rect x="330" y="135" width="240" height="35" rx="3" className="fill-[#0c0e14] stroke-white/[0.08]" />
          <text x="450" y="157" textAnchor="middle" className="text-[10px] fill-stone-300">Kyle's Lambda: ΔP_mid = λ · OFI_t + ε_t</text>
          <text x="450" y="195" textAnchor="middle" className="text-[9px] fill-stone-400">Cross-Sectional R² = 0.384</text>

          {/* Connectors from Bids and Asks */}
          <line x1="260" y1="140" x2="310" y2="140" stroke="#10b981" strokeWidth="1.5" markerEnd="url(#arrow-green)" />
          <line x1="640" y1="140" x2="590" y2="140" stroke="#f43f5e" strokeWidth="1.5" />

          {/* Right: Ask Depth Ladder (Rose) */}
          <rect x="640" y="40" width="220" height="200" rx="3" className="fill-[#170e12] stroke-rose-500/40" strokeWidth="1.5" />
          <text x="750" y="65" textAnchor="middle" className="font-bold text-xs fill-rose-400">ASK DEPTH LADDER (SELL SIDE)</text>

          <rect x="655" y="80" width="190" height="28" rx="2" className="fill-rose-950/60 stroke-rose-500/30" />
          <text x="665" y="98" className="text-[10px] fill-stone-400">L1 Ask: $184.25</text>
          <text x="835" y="98" textAnchor="end" className="text-[10px] fill-rose-300 font-bold">6,800 shs (Depleted)</text>

          <rect x="655" y="115" width="190" height="28" rx="2" className="fill-rose-950/40 stroke-rose-500/20" />
          <text x="665" y="133" className="text-[10px] fill-stone-400">L2 Ask: $184.30</text>
          <text x="835" y="133" textAnchor="end" className="text-[10px] fill-rose-300 font-bold">11,200 shs</text>

          <rect x="655" y="150" width="190" height="28" rx="2" className="fill-rose-950/20 stroke-rose-500/10" />
          <text x="665" y="168" className="text-[10px] fill-stone-400">L3 Ask: $184.35</text>
          <text x="835" y="168" textAnchor="end" className="text-[10px] fill-rose-300 font-bold">19,400 shs</text>

          <text x="750" y="215" textAnchor="middle" className="text-[10px] fill-rose-400 font-bold">Ask Depletion: Outflow -41.2%</text>
        </svg>

        <div className="mt-4 flex flex-wrap items-center justify-between text-[11px] text-stone-400 pt-3 border-t border-white/[0.06]">
          <span>• 微观机制：买一队列增厚与卖一挂单撤销叠加，触发即刻向上价格跳跃</span>
          <span>• 信号衰减半衰期：高频盘口脉冲在 45秒~2分钟 内被流动性提供商套利抹平</span>
        </div>
      </div>
    );
  }

  if (plateId === "kalman-cointegration-arbitrage") {
    return (
      <div className="my-6 border border-white/[0.1] bg-[#07090e] p-6 sm:p-8 shadow-2xl font-mono text-xs text-stone-200">
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-3 mb-6">
          <div className="flex items-center space-x-2 text-[#e5c378] font-bold">
            <span className="w-2 h-2 rounded-full bg-[#e5c378]" />
            <span>PLATE II SCHEMATIC // DYNAMIC KALMAN FILTER COINTEGRATION SPREAD</span>
          </div>
          <span className="text-stone-400">FIGURE 3.2 · ADAPTIVE β_t TRACKER</span>
        </div>

        <svg viewBox="0 0 900 280" className="w-full h-auto text-stone-300">
          <defs>
            <linearGradient id="spread-gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#c5a059" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#f43f5e" stopOpacity="0.2" />
            </linearGradient>
          </defs>

          {/* Coordinate Frame */}
          <rect x="50" y="30" width="800" height="200" rx="2" className="fill-[#0b0e14] stroke-white/[0.08]" />

          {/* Grid Lines */}
          <line x1="50" y1="70" x2="850" y2="70" stroke="#f43f5e" strokeWidth="1" strokeDasharray="4 4" opacity="0.6" />
          <text x="60" y="65" className="text-[10px] fill-rose-400 font-bold">+2.0σ UPPER SHORT ENTRY TRIGGER</text>

          <line x1="50" y1="130" x2="850" y2="130" stroke="#e5c378" strokeWidth="1.5" strokeDasharray="2 2" opacity="0.8" />
          <text x="60" y="125" className="text-[10px] fill-[#e5c378] font-bold">0.0σ MEAN EQUILIBRIUM (TAKE PROFIT)</text>

          <line x1="50" y1="190" x2="850" y2="190" stroke="#10b981" strokeWidth="1" strokeDasharray="4 4" opacity="0.6" />
          <text x="60" y="205" className="text-[10px] fill-emerald-400 font-bold">-2.0σ LOWER LONG ENTRY TRIGGER</text>

          {/* Spread Trajectory Curve */}
          <path
            d="M 80 135 Q 160 50, 240 65 T 380 130 T 520 205 T 660 130 T 780 75 L 820 120"
            fill="none"
            stroke="#38bdf8"
            strokeWidth="2.5"
          />

          {/* Marker 1: Short Signal */}
          <circle cx="240" cy="65" r="5" className="fill-rose-500 stroke-white" strokeWidth="1.5" />
          <text x="240" y="45" textAnchor="middle" className="text-[10px] fill-rose-300 font-bold">SHORT SPREAD</text>

          {/* Marker 2: Reversion Exit */}
          <circle cx="380" cy="130" r="5" className="fill-[#e5c378] stroke-white" strokeWidth="1.5" />
          <text x="380" y="150" textAnchor="middle" className="text-[10px] fill-[#e5c378] font-bold">EXIT (PROFIT)</text>

          {/* Marker 3: Long Signal */}
          <circle cx="520" cy="205" r="5" className="fill-emerald-500 stroke-white" strokeWidth="1.5" />
          <text x="520" y="225" textAnchor="middle" className="text-[10px] fill-emerald-300 font-bold">LONG SPREAD</text>

          {/* Right Placard Box */}
          <rect x="670" y="45" width="165" height="60" rx="3" className="fill-[#141924] stroke-white/[0.1]" />
          <text x="680" y="65" className="text-[9px] fill-stone-400">KALMAN STATE:</text>
          <text x="680" y="80" className="text-[11px] fill-[#38bdf8] font-bold">β_t = 1.418 (Hedge)</text>
          <text x="680" y="95" className="text-[9px] fill-emerald-400">Noise Q/R = 1e-4 / 1e-2</text>
        </svg>

        <div className="mt-4 flex flex-wrap items-center justify-between text-[11px] text-stone-400 pt-3 border-t border-white/[0.06]">
          <span>• 动态自适应：比传统 OLS 固定回归提早 12~18 个交易日识别协整破裂</span>
          <span>• 物理止损防线：Z-score 偏离度突破 ±3.5σ 时无条件强平切断敞口</span>
        </div>
      </div>
    );
  }

  if (plateId === "ppo-rl-execution-guard") {
    return (
      <div className="my-6 border border-white/[0.1] bg-[#07090e] p-6 sm:p-8 shadow-2xl font-mono text-xs text-stone-200">
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-3 mb-6">
          <div className="flex items-center space-x-2 text-[#e5c378] font-bold">
            <span className="w-2 h-2 rounded-full bg-[#e5c378]" />
            <span>PLATE III SCHEMATIC // PPO ACTOR-CRITIC REINFORCEMENT LEARNING WITH KILL-SWITCH</span>
          </div>
          <span className="text-stone-400">FIGURE 3.3 · PHYSICALLY SAFEGUARDS CAPITAL</span>
        </div>

        <svg viewBox="0 0 900 280" className="w-full h-auto text-stone-300">
          <defs>
            <marker id="arrow-rl" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#10b981" />
            </marker>
          </defs>

          {/* Left: Environment State Input */}
          <rect x="40" y="60" width="180" height="160" rx="3" className="fill-[#0d121c] stroke-stone-700" strokeWidth="1.5" />
          <text x="130" y="90" textAnchor="middle" className="font-bold text-xs fill-white">STATE VECTOR s_t</text>
          <rect x="55" y="105" width="150" height="30" rx="2" className="fill-[#151c2c]" />
          <text x="130" y="125" textAnchor="middle" className="text-[10px] fill-stone-300">L2 Depth + Spread</text>
          <rect x="55" y="145" width="150" height="30" rx="2" className="fill-[#151c2c]" />
          <text x="130" y="165" textAnchor="middle" className="text-[10px] fill-stone-300">Inventory Ratio Q_t / Q_max</text>
          <text x="130" y="200" textAnchor="middle" className="text-[9px] fill-stone-500">Remaining Time T - t</text>

          {/* Line to PPO Agent */}
          <line x1="220" y1="140" x2="280" y2="140" stroke="#10b981" strokeWidth="1.5" markerEnd="url(#arrow-rl)" />

          {/* Center: PPO Dual Network Box */}
          <rect x="290" y="40" width="280" height="200" rx="4" className="fill-[#0c141d] stroke-emerald-500" strokeWidth="1.5" />
          <text x="430" y="65" textAnchor="middle" className="font-bold text-xs fill-emerald-400">PPO POLICY NETWORK</text>

          {/* Actor */}
          <rect x="310" y="80" width="240" height="60" rx="3" className="fill-[#101b2b] stroke-emerald-400/40" />
          <text x="430" y="102" textAnchor="middle" className="font-bold text-[11px] fill-emerald-300">ACTOR: π_θ(a_t | s_t)</text>
          <text x="430" y="122" textAnchor="middle" className="text-[10px] fill-stone-300">Action: Limit Spread &amp; Slice Size (bps)</text>

          {/* Critic */}
          <rect x="310" y="150" width="240" height="60" rx="3" className="fill-[#101b2b] stroke-[#c5a059]/40" />
          <text x="430" y="172" textAnchor="middle" className="font-bold text-[11px] fill-[#e5c378]">CRITIC: V_ϕ(s_t)</text>
          <text x="430" y="192" textAnchor="middle" className="text-[10px] fill-stone-300">Reward: -Slippage - γ · InventoryVar</text>

          {/* Line to Kill Switch */}
          <line x1="570" y1="140" x2="630" y2="140" stroke="#10b981" strokeWidth="1.5" markerEnd="url(#arrow-rl)" />

          {/* Right: Hard Kill-Switch Circuit Breaker */}
          <rect x="640" y="50" width="220" height="180" rx="4" className="fill-[#1a0e12] stroke-rose-500" strokeWidth="2" />
          <text x="750" y="80" textAnchor="middle" className="font-bold text-xs fill-rose-400">PHYSICAL KILL-SWITCH</text>
          <rect x="655" y="95" width="190" height="40" rx="3" className="fill-rose-950/60 stroke-rose-500/30" />
          <text x="750" y="113" textAnchor="middle" className="text-[10px] fill-rose-200 font-bold">Max Drawdown &gt; 4.2%</text>
          <text x="750" y="126" textAnchor="middle" className="text-[9px] fill-stone-400">Physical Hardware Interlock</text>

          <rect x="655" y="145" width="190" height="65" rx="3" className="fill-[#0c0e14] stroke-white/[0.08]" />
          <text x="750" y="165" textAnchor="middle" className="text-[10px] fill-emerald-400 font-bold">Normal Execution: PASS</text>
          <text x="750" y="182" textAnchor="middle" className="text-[9px] fill-stone-300">FIX Protocol Execution Gateway</text>
          <text x="750" y="197" textAnchor="middle" className="text-[9px] fill-[#c5a059]">Fill Improvement: 2.8 bps</text>
        </svg>

        <div className="mt-4 flex flex-wrap items-center justify-between text-[11px] text-stone-400 pt-3 border-t border-white/[0.06]">
          <span>• 奖惩函数：以 VWAP 偏差与挂单暴露风险惩罚为核心，避免激进吃单导致逆向选择</span>
          <span>• 物理级隔离：强化学习网络置于只读推断沙箱，断电继电器（Relay）拥有绝对熔断最高优先级</span>
        </div>
      </div>
    );
  }

  return null;
}
