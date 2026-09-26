"use client";

import React from "react";

interface Props {
  diagramId: string;
}

export function AiArchitectureDiagram({ diagramId }: Props) {
  if (diagramId === "deepseek-r1-moe") {
    return (
      <div className="my-6 border border-stone-300/80 dark:border-white/[0.1] bg-[#fdfcf9] dark:bg-[#070b14] p-6 sm:p-8 shadow-inner font-mono text-xs">
        <div className="flex items-center justify-between border-b border-stone-200 dark:border-white/[0.06] pb-3 mb-6">
          <div className="flex items-center space-x-2 text-[#1e3a8a] dark:text-[#60a5fa] font-bold">
            <span className="w-2 h-2 rounded-full bg-[#1e3a8a] dark:bg-[#60a5fa]" />
            <span>ARCHITECTURAL BLUEPRINT // DEEPSEEK-R1 FINE-GRAINED DUAL-ROUTED MoE</span>
          </div>
          <span className="text-stone-400">FIGURE 2.1 · 64 EXPERTS / 8 ACTIVE</span>
        </div>

        <svg viewBox="0 0 900 320" className="w-full h-auto text-stone-700 dark:text-stone-200">
          <defs>
            <marker id="arrow-blue" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#3b82f6" />
            </marker>
            <pattern id="grid-dots" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="currentColor" opacity="0.08" />
            </pattern>
          </defs>

          {/* Background Grid Pattern */}
          <rect width="900" height="320" fill="url(#grid-dots)" />

          {/* Box 1: Input Embedding */}
          <rect x="30" y="110" width="130" height="100" rx="4" className="fill-white dark:fill-[#0f172a] stroke-stone-300 dark:stroke-stone-700" strokeWidth="1.5" />
          <text x="95" y="140" textAnchor="middle" className="font-bold text-xs fill-stone-900 dark:fill-stone-100">INPUT SEQUENCE</text>
          <text x="95" y="160" textAnchor="middle" className="text-[10px] fill-stone-500">x ∈ ℝ^{"{d_model}"}</text>
          <text x="95" y="185" textAnchor="middle" className="text-[9px] fill-[#2563eb] dark:fill-[#60a5fa] font-bold">d = 7168</text>

          {/* Arrow 1 to Router */}
          <line x1="160" y1="160" x2="220" y2="160" stroke="#3b82f6" strokeWidth="1.5" markerEnd="url(#arrow-blue)" />

          {/* Box 2: Dual Gating Network */}
          <rect x="230" y="80" width="170" height="160" rx="4" className="fill-white dark:fill-[#0f172a] stroke-[#1e3a8a] dark:stroke-[#3b82f6]" strokeWidth="1.5" strokeDasharray="3 3" />
          <text x="315" y="105" textAnchor="middle" className="font-bold text-xs fill-[#1e3a8a] dark:fill-[#60a5fa]">DUAL-ROUTER GATING</text>
          <text x="315" y="125" textAnchor="middle" className="text-[10px] fill-stone-500">p_i = Softmax(W_g x)_i</text>
          <rect x="250" y="145" width="130" height="35" rx="3" className="fill-emerald-50 dark:fill-emerald-950/40 stroke-emerald-500/50" strokeWidth="1" />
          <text x="315" y="165" textAnchor="middle" className="text-[10px] fill-emerald-700 dark:fill-emerald-400 font-bold">Top-8 Sparsity Mask</text>
          <text x="315" y="215" textAnchor="middle" className="text-[9px] fill-stone-400">Auxiliary-loss Free</text>

          {/* Arrow 2 to Experts */}
          <line x1="400" y1="140" x2="470" y2="90" stroke="#3b82f6" strokeWidth="1.5" markerEnd="url(#arrow-blue)" />
          <line x1="400" y1="160" x2="470" y2="160" stroke="#3b82f6" strokeWidth="1.5" markerEnd="url(#arrow-blue)" />
          <line x1="400" y1="180" x2="470" y2="230" stroke="#3b82f6" strokeWidth="1.5" markerEnd="url(#arrow-blue)" />

          {/* Box 3: 64 Experts Grid Visualization */}
          <rect x="480" y="50" width="220" height="220" rx="4" className="fill-white dark:fill-[#0f172a] stroke-stone-300 dark:stroke-stone-700" strokeWidth="1.5" />
          <text x="590" y="75" textAnchor="middle" className="font-bold text-xs fill-stone-900 dark:fill-stone-100">64 FINE-GRAINED EXPERTS</text>
          <text x="590" y="93" textAnchor="middle" className="text-[10px] fill-emerald-600 dark:fill-emerald-400 font-bold">8 Activated (Green) · 56 Swapped (Gray)</text>

          {/* 8x4 Grid of Mini Expert Nodes */}
          {[...Array(32)].map((_, i) => {
            const row = Math.floor(i / 8);
            const col = i % 8;
            const isActivated = [2, 7, 11, 15, 18, 22, 27, 30].includes(i);
            return (
              <rect
                key={i}
                x={500 + col * 22}
                y={110 + row * 26}
                width="18"
                height="18"
                rx="2"
                className={
                  isActivated
                    ? "fill-emerald-500 stroke-emerald-300"
                    : "fill-stone-200 dark:fill-stone-800 stroke-stone-300 dark:stroke-stone-700"
                }
                strokeWidth="1"
              />
            );
          })}

          <text x="590" y="245" textAnchor="middle" className="text-[10px] fill-stone-500">+ 1 Shared Isolated Expert Node</text>

          {/* Arrow 3 to Weighted Sum */}
          <line x1="700" y1="160" x2="745" y2="160" stroke="#3b82f6" strokeWidth="1.5" markerEnd="url(#arrow-blue)" />

          {/* Box 4: Multi-Token Prediction & Output */}
          <rect x="755" y="110" width="120" height="100" rx="4" className="fill-white dark:fill-[#0f172a] stroke-emerald-600 dark:stroke-emerald-400" strokeWidth="1.5" />
          <text x="815" y="140" textAnchor="middle" className="font-bold text-xs fill-emerald-700 dark:fill-emerald-400">MTP DECODER</text>
          <text x="815" y="165" textAnchor="middle" className="text-[10px] fill-stone-500">y_t+1, y_t+2</text>
          <text x="815" y="190" textAnchor="middle" className="text-[9px] fill-stone-400 font-bold">184 Tok/Sec</text>
        </svg>

        <div className="mt-4 flex flex-wrap items-center justify-between text-[11px] text-stone-500 dark:text-stone-400 pt-3 border-t border-stone-200 dark:border-white/[0.04]">
          <span>• 架构精粹：细粒度专家切分（Fine-Grained Segmentation）大幅降低单专家显存占用</span>
          <span>• 零辅损均衡：通过无辅助损失负载调度避免训练表达能力退化</span>
        </div>
      </div>
    );
  }

  if (diagramId === "anthropic-computer-use") {
    return (
      <div className="my-6 border border-stone-300/80 dark:border-white/[0.1] bg-[#fdfcf9] dark:bg-[#070b14] p-6 sm:p-8 shadow-inner font-mono text-xs">
        <div className="flex items-center justify-between border-b border-stone-200 dark:border-white/[0.06] pb-3 mb-6">
          <div className="flex items-center space-x-2 text-[#9e2a2b] dark:text-[#e5c378] font-bold">
            <span className="w-2 h-2 rounded-full bg-[#9e2a2b] dark:text-[#e5c378]" />
            <span>CLOSED-LOOP PERCEPTION-ACTION CYCLE // ANTHROPIC COMPUTER USE PIPELINE</span>
          </div>
          <span className="text-stone-400">FIGURE 2.2 · SUB-100MS OS LATENCY</span>
        </div>

        <svg viewBox="0 0 900 280" className="w-full h-auto text-stone-700 dark:text-stone-200">
          <defs>
            <marker id="arrow-amber" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#d97706" />
            </marker>
          </defs>

          {/* Step 1: Raw Screen Capture */}
          <rect x="30" y="80" width="160" height="120" rx="4" className="fill-white dark:fill-[#0f172a] stroke-stone-300 dark:stroke-stone-700" strokeWidth="1.5" />
          <text x="110" y="110" textAnchor="middle" className="font-bold text-xs fill-stone-900 dark:fill-stone-100">01. SCREEN CAPTURE</text>
          <text x="110" y="135" textAnchor="middle" className="text-[10px] fill-stone-500">1920 × 1080 PNG</text>
          <rect x="50" y="150" width="120" height="30" rx="3" className="fill-stone-100 dark:fill-stone-800 stroke-stone-300 dark:stroke-stone-700" />
          <text x="110" y="170" textAnchor="middle" className="text-[9px] fill-stone-400">Frame-Diff Threshold</text>

          {/* Arrow 1 */}
          <line x1="190" y1="140" x2="250" y2="140" stroke="#d97706" strokeWidth="1.5" markerEnd="url(#arrow-amber)" />

          {/* Step 2: Coordinate Grounding */}
          <rect x="260" y="60" width="190" height="160" rx="4" className="fill-white dark:fill-[#0f172a] stroke-[#d97706]" strokeWidth="1.5" />
          <text x="355" y="90" textAnchor="middle" className="font-bold text-xs fill-[#d97706]">02. MULTIMODAL GROUNDING</text>
          <text x="355" y="115" textAnchor="middle" className="text-[10px] fill-stone-500">Claude 3.5 Sonnet Vision</text>
          <rect x="280" y="130" width="150" height="40" rx="3" className="fill-amber-50 dark:fill-amber-950/40 stroke-amber-500/30" />
          <text x="355" y="150" textAnchor="middle" className="text-[10px] fill-amber-700 dark:fill-amber-400 font-bold">Bounding Box Prediction</text>
          <text x="355" y="163" textAnchor="middle" className="text-[9px] fill-stone-500">[x_min, y_min, x_max, y_max]</text>
          <text x="355" y="195" textAnchor="middle" className="text-[9px] fill-stone-400">Pixel Resolution: 0.1% Tol.</text>

          {/* Arrow 2 */}
          <line x1="450" y1="140" x2="510" y2="140" stroke="#d97706" strokeWidth="1.5" markerEnd="url(#arrow-amber)" />

          {/* Step 3: Action Execution */}
          <rect x="520" y="80" width="160" height="120" rx="4" className="fill-white dark:fill-[#0f172a] stroke-stone-300 dark:stroke-stone-700" strokeWidth="1.5" />
          <text x="600" y="110" textAnchor="middle" className="font-bold text-xs fill-stone-900 dark:fill-stone-100">03. OS DISPATCH</text>
          <text x="600" y="135" textAnchor="middle" className="text-[10px] fill-emerald-600 dark:fill-emerald-400 font-bold">mouse_move(x, y)</text>
          <text x="600" y="155" textAnchor="middle" className="text-[10px] fill-emerald-600 dark:fill-emerald-400 font-bold">left_click() / type()</text>
          <text x="600" y="180" textAnchor="middle" className="text-[9px] fill-stone-400">PyAutoGUI / X11 Hook</text>

          {/* Arrow 3 */}
          <line x1="680" y1="140" x2="740" y2="140" stroke="#d97706" strokeWidth="1.5" markerEnd="url(#arrow-amber)" />

          {/* Step 4: Verification & Safe Guardrail */}
          <rect x="750" y="80" width="130" height="120" rx="4" className="fill-white dark:fill-[#0f172a] stroke-rose-500" strokeWidth="1.5" />
          <text x="815" y="110" textAnchor="middle" className="font-bold text-xs fill-rose-600 dark:fill-rose-400">04. SAFEGUARD</text>
          <text x="815" y="135" textAnchor="middle" className="text-[10px] fill-stone-500">Visual Delta</text>
          <text x="815" y="155" textAnchor="middle" className="text-[10px] fill-stone-500">Confirmation Gate</text>
          <text x="815" y="180" textAnchor="middle" className="text-[9px] fill-emerald-600 dark:fill-emerald-400 font-bold">Loop Iteration</text>
        </svg>

        <div className="mt-4 flex flex-wrap items-center justify-between text-[11px] text-stone-500 dark:text-stone-400 pt-3 border-t border-stone-200 dark:border-white/[0.04]">
          <span>• 坐标标准化：将屏幕缩放到 1000×1000 相对网格，确保跨 DPI / 分辨率迁移鲁棒性</span>
          <span>• 防越权物理沙箱：交易下单与不可逆系统操作强制注入 Human-in-the-Loop 物理中断</span>
        </div>
      </div>
    );
  }

  if (diagramId === "langgraph-multi-agent") {
    return (
      <div className="my-6 border border-stone-300/80 dark:border-white/[0.1] bg-[#fdfcf9] dark:bg-[#070b14] p-6 sm:p-8 shadow-inner font-mono text-xs">
        <div className="flex items-center justify-between border-b border-stone-200 dark:border-white/[0.06] pb-3 mb-6">
          <div className="flex items-center space-x-2 text-indigo-700 dark:text-indigo-400 font-bold">
            <span className="w-2 h-2 rounded-full bg-indigo-700 dark:bg-indigo-400" />
            <span>STATEGRAPH CYCLIC BUS // LANGGRAPH MULTI-AGENT TOPOLOGY</span>
          </div>
          <span className="text-stone-400">FIGURE 2.3 · 0 CYCLIC DEADLOCKS</span>
        </div>

        <svg viewBox="0 0 900 280" className="w-full h-auto text-stone-700 dark:text-stone-200">
          <defs>
            <marker id="arrow-indigo" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#6366f1" />
            </marker>
          </defs>

          {/* Central Supervisor */}
          <rect x="360" y="30" width="180" height="90" rx="4" className="fill-white dark:fill-[#0f172a] stroke-indigo-600 dark:stroke-indigo-400" strokeWidth="2" />
          <text x="450" y="60" textAnchor="middle" className="font-bold text-xs fill-indigo-700 dark:fill-indigo-300">SUPERVISOR ROUTER</text>
          <text x="450" y="80" textAnchor="middle" className="text-[10px] fill-stone-500">Shared State: TypedDict</text>
          <text x="450" y="100" textAnchor="middle" className="text-[9px] fill-emerald-600 dark:fill-emerald-400 font-bold">Condition Edge Evaluator</text>

          {/* Worker 1: arXiv & News Researcher */}
          <rect x="50" y="160" width="190" height="90" rx="4" className="fill-white dark:fill-[#0f172a] stroke-stone-300 dark:stroke-stone-700" strokeWidth="1.5" />
          <text x="145" y="190" textAnchor="middle" className="font-bold text-xs fill-stone-900 dark:fill-stone-100">RESEARCH WORKER</text>
          <text x="145" y="210" textAnchor="middle" className="text-[10px] fill-stone-500">arXiv API &amp; RSS Collector</text>
          <text x="145" y="230" textAnchor="middle" className="text-[9px] fill-stone-400">Vector Embeddings (Pinecone)</text>

          {/* Worker 2: Quant Backtest Sandbox */}
          <rect x="355" y="160" width="190" height="90" rx="4" className="fill-white dark:fill-[#0f172a] stroke-stone-300 dark:stroke-stone-700" strokeWidth="1.5" />
          <text x="450" y="190" textAnchor="middle" className="font-bold text-xs fill-stone-900 dark:fill-stone-100">QUANT ENGINE</text>
          <text x="450" y="210" textAnchor="middle" className="text-[10px] fill-stone-500">VectorBT Sandbox Runner</text>
          <text x="450" y="230" textAnchor="middle" className="text-[9px] fill-emerald-600 dark:fill-emerald-400 font-bold">PnL &amp; Sharpe Calculator</text>

          {/* Worker 3: Risk Auditor */}
          <rect x="660" y="160" width="190" height="90" rx="4" className="fill-white dark:fill-[#0f172a] stroke-rose-400" strokeWidth="1.5" />
          <text x="755" y="190" textAnchor="middle" className="font-bold text-xs fill-rose-700 dark:fill-rose-400">RISK AUDITOR</text>
          <text x="755" y="210" textAnchor="middle" className="text-[10px] fill-stone-500">Max DD &lt; 5% Hard Check</text>
          <text x="755" y="230" textAnchor="middle" className="text-[9px] fill-stone-400">Physical Kill-Switch Guard</text>

          {/* Downward Routing Lines */}
          <line x1="400" y1="120" x2="160" y2="160" stroke="#6366f1" strokeWidth="1.5" markerEnd="url(#arrow-indigo)" />
          <line x1="450" y1="120" x2="450" y2="160" stroke="#6366f1" strokeWidth="1.5" markerEnd="url(#arrow-indigo)" />
          <line x1="500" y1="120" x2="740" y2="160" stroke="#6366f1" strokeWidth="1.5" markerEnd="url(#arrow-indigo)" />

          {/* Upward Cyclic Feedback Lines */}
          <path d="M 145 160 Q 250 135 360 80" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3" />
          <path d="M 450 160 L 450 120" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3" />
          <path d="M 755 160 Q 650 135 540 80" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3" />
        </svg>

        <div className="mt-4 flex flex-wrap items-center justify-between text-[11px] text-stone-500 dark:text-stone-400 pt-3 border-t border-stone-200 dark:border-white/[0.04]">
          <span>• 状态不可变性：每次迭代生成新快照（Snapshot），支持全周期 Time-Travel 审计回溯</span>
          <span>• 故障物理隔离：单一子智能体网络超时不阻塞主图执行</span>
        </div>
      </div>
    );
  }

  if (diagramId === "int4-speculative-decoding") {
    return (
      <div className="my-6 border border-stone-300/80 dark:border-white/[0.1] bg-[#fdfcf9] dark:bg-[#070b14] p-6 sm:p-8 shadow-inner font-mono text-xs">
        <div className="flex items-center justify-between border-b border-stone-200 dark:border-white/[0.06] pb-3 mb-6">
          <div className="flex items-center space-x-2 text-teal-700 dark:text-teal-400 font-bold">
            <span className="w-2 h-2 rounded-full bg-teal-700 dark:bg-teal-400" />
            <span>DUAL-MODEL SPECULATIVE EXECUTION // INT4 DRAFT &amp; VERIFICATION ENGINE</span>
          </div>
          <span className="text-stone-400">FIGURE 2.4 · 2.94X SPEEDUP FACTOR</span>
        </div>

        <svg viewBox="0 0 900 260" className="w-full h-auto text-stone-700 dark:text-stone-200">
          <defs>
            <marker id="arrow-teal" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#0d9488" />
            </marker>
          </defs>

          {/* Draft Model Track */}
          <rect x="30" y="50" width="180" height="70" rx="4" className="fill-white dark:fill-[#0f172a] stroke-teal-600 dark:stroke-teal-400" strokeWidth="1.5" />
          <text x="120" y="75" textAnchor="middle" className="font-bold text-xs fill-teal-800 dark:fill-teal-300">SMALL DRAFT (1B INT4)</text>
          <text x="120" y="95" textAnchor="middle" className="text-[10px] fill-stone-500">Latency: 4.2ms / Candidate</text>

          {/* Proposed 4 Tokens */}
          <line x1="210" y1="85" x2="260" y2="85" stroke="#0d9488" strokeWidth="1.5" markerEnd="url(#arrow-teal)" />

          <g transform="translate(270, 60)">
            <rect x="0" y="0" width="45" height="50" rx="3" className="fill-teal-100 dark:fill-teal-950/60 stroke-teal-500" />
            <text x="22" y="30" textAnchor="middle" className="text-xs font-bold fill-teal-900 dark:fill-teal-200">t_1</text>

            <rect x="55" y="0" width="45" height="50" rx="3" className="fill-teal-100 dark:fill-teal-950/60 stroke-teal-500" />
            <text x="77" y="30" textAnchor="middle" className="text-xs font-bold fill-teal-900 dark:fill-teal-200">t_2</text>

            <rect x="110" y="0" width="45" height="50" rx="3" className="fill-teal-100 dark:fill-teal-950/60 stroke-teal-500" />
            <text x="132" y="30" textAnchor="middle" className="text-xs font-bold fill-teal-900 dark:fill-teal-200">t_3</text>

            <rect x="165" y="0" width="45" height="50" rx="3" className="fill-stone-100 dark:fill-stone-800 stroke-stone-300 dark:stroke-stone-700" />
            <text x="187" y="30" textAnchor="middle" className="text-xs font-bold fill-stone-400">t_4</text>
          </g>

          {/* Verification Target Model Track */}
          <rect x="30" y="160" width="180" height="70" rx="4" className="fill-white dark:fill-[#0f172a] stroke-stone-400 dark:stroke-stone-600" strokeWidth="1.5" />
          <text x="120" y="185" textAnchor="middle" className="font-bold text-xs fill-stone-900 dark:fill-stone-100">TARGET MODEL (70B FP8)</text>
          <text x="120" y="205" textAnchor="middle" className="text-[10px] fill-stone-500">Single Forward Verification</text>

          {/* Parallel Verification Arrow */}
          <path d="M 370 115 L 370 160" stroke="#0d9488" strokeWidth="1.5" strokeDasharray="3 3" markerEnd="url(#arrow-teal)" />

          {/* Acceptance Box */}
          <rect x="530" y="90" width="330" height="100" rx="4" className="fill-white dark:fill-[#0f172a] stroke-emerald-600 dark:stroke-emerald-400" strokeWidth="1.5" />
          <text x="695" y="120" textAnchor="middle" className="font-bold text-xs fill-emerald-700 dark:fill-emerald-400">PARALLEL ACCEPTANCE: 3 OF 4 ACCEPTED</text>
          <text x="695" y="145" textAnchor="middle" className="text-[11px] fill-stone-600 dark:fill-stone-300">Effective Throughput: 21ms for 3 tokens (7.0ms/tok)</text>
          <text x="695" y="170" textAnchor="middle" className="text-[10px] fill-stone-400">vs Autoregressive Baseline: 68ms (3.24x Net Gain)</text>
        </svg>

        <div className="mt-4 flex flex-wrap items-center justify-between text-[11px] text-stone-500 dark:text-stone-400 pt-3 border-t border-stone-200 dark:border-white/[0.04]">
          <span>• 显存带宽节约：将显存读取从每 Token 一次压缩为每 4 Tokens 一次，直接突破 Memory-Bound 物理墙</span>
          <span>• 无损精度保证：严格遵循标准概率接受准则，输出分布与原 70B 模型在统计学上完全一致</span>
        </div>
      </div>
    );
  }

  return null;
}
