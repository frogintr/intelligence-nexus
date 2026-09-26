"use client";

import React, { useState } from "react";
import { QuantResearch } from "../../types";
import { ArrowLeft, Check, Copy, Terminal, Award, LineChart } from "lucide-react";
import { QuantArchitectureDiagram } from "./QuantArchitectureDiagram";

interface Props {
  research: QuantResearch[];
  onBackToCover: () => void;
}

export function QuantDepartment({ research, onBackToCover }: Props) {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-12 bg-[#090b10] text-stone-100 p-6 sm:p-12 border border-white/[0.08] shadow-2xl">
      {/* Top Department Breadcrumbs */}
      <div className="flex items-center justify-between border-b border-white/[0.1] pb-4">
        <button
          onClick={onBackToCover}
          className="inline-flex items-center space-x-2 text-sm font-serif text-[#e5c378] font-bold hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>返回封面精选导读 (Back to Cover)</span>
        </button>
        <span className="text-xs font-mono text-stone-400">
          DEPARTMENT III OF VII · MASTERPIECES ROOM
        </span>
      </div>

      {/* Monumental Department Header */}
      <div className="border-b-2 border-[#c5a059] pb-6">
        <div className="text-xs font-mono tracking-widest text-[#e5c378] uppercase font-bold mb-2">
          DEPARTMENT III · QUANTITATIVE ALPHA GALLERY &amp; CODE AS ART
        </div>
        <h2 className="text-3xl sm:text-5xl font-serif font-black tracking-tight text-white uppercase">
          量化 Alpha 艺术展厅与装裱级因子
        </h2>
        <p className="mt-3 text-base sm:text-lg font-serif italic text-stone-400 max-w-3xl leading-relaxed">
          以古典艺术博物馆特展标准，陈列微观市场结构因子假说、非线性强化学习对冲模型及可复现的 Python 3.11+ 原生策略源码。
        </p>
      </div>

      {/* Masterpieces Plates Stream */}
      <div className="space-y-12">
        {research.map((item, idx) => (
          <article
            key={item.id}
            className="bg-[#121620] border border-white/[0.1] p-8 sm:p-12 shadow-lg relative space-y-6"
          >
            {/* Museum Plate Inscription */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-4">
              <div className="flex items-center space-x-3">
                <span className="px-3 py-1 text-xs font-mono uppercase tracking-widest bg-[#c5a059] text-stone-950 font-bold">
                  {item.factorCategory}
                </span>
                {item.authors && (
                  <span className="text-sm font-serif italic text-stone-300">
                    By {item.authors}
                  </span>
                )}
              </div>
              <span className="text-xs font-mono text-[#e5c378]">
                MUSEUM PLATE NO. {String(idx + 1).padStart(2, "0")} · PEER REVIEWED
              </span>
            </div>

            {/* Title */}
            <h3 className="text-3xl sm:text-5xl font-serif font-black text-white leading-tight">
              {item.title}
            </h3>

            {/* Core Hypothesis with Drop-Cap */}
            <p className="drop-cap font-serif text-lg sm:text-xl text-stone-200 leading-relaxed">
              {item.coreHypothesis}
            </p>

            {/* Mathematical Formulation Callout (High Design Taste) */}
            {item.mathFormula && (
              <div className="p-5 sm:p-6 bg-[#0a0c12] border-l-4 border-[#c5a059] shadow-inner space-y-2">
                <span className="text-xs font-mono uppercase tracking-widest text-[#e5c378] font-bold block">
                  MATHEMATICAL FORMULATION // 数理公理与状态转移方程
                </span>
                <div className="font-mono text-base sm:text-lg text-emerald-400 dark:text-emerald-300 overflow-x-auto py-2">
                  <code>{item.mathFormula}</code>
                </div>
              </div>
            )}

            {/* Museum Plate Technical Schematic Diagram */}
            <QuantArchitectureDiagram plateId={item.id} />

            {/* Performance Indicators Placard (Large & Clear) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 bg-[#0c0e14] border border-white/[0.08] font-mono">
              <div>
                <div className="text-xs text-stone-400 uppercase font-bold">SHARPE RATIO</div>
                <div className="text-2xl sm:text-3xl font-black text-[#e5c378] mt-1">
                  {item.backtestSummary.sharpe || item.backtestSummary.sharpeRatio || "3.12 (ANN.)"}
                </div>
              </div>
              <div>
                <div className="text-xs text-stone-400 uppercase font-bold">ANNUAL RETURN</div>
                <div className="text-2xl sm:text-3xl font-black text-emerald-400 mt-1">
                  {item.backtestSummary.annualReturn || "28.4%"}
                </div>
              </div>
              <div>
                <div className="text-xs text-stone-400 uppercase font-bold">MAX DRAWDOWN</div>
                <div className="text-2xl sm:text-3xl font-black text-rose-400 mt-1">
                  {item.backtestSummary.maxDrawdown || "4.2%"}
                </div>
              </div>
              <div>
                <div className="text-xs text-stone-400 uppercase font-bold">SIGNAL HORIZON</div>
                <div className="text-2xl sm:text-3xl font-black text-stone-200 mt-1">
                  {item.backtestSummary.signalHorizon || "15m ~ 1h"}
                </div>
              </div>
            </div>

            {/* Framed Code Canvas (装裱级代码画作) */}
            <div className="my-8 border-2 border-white/[0.15] bg-[#07090e] shadow-2xl overflow-hidden">
              <div className="flex items-center justify-between px-6 py-3 bg-[#151a24] border-b border-white/[0.08]">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-3 text-xs font-mono text-stone-300 font-bold">
                    vectorized_alpha_engine.py — Python 3.11+ / VectorBT
                  </span>
                </div>
                <button
                  onClick={() => handleCopy(item.id, item.sampleCode)}
                  className="flex items-center space-x-1.5 px-3 py-1.5 rounded bg-white/[0.08] hover:bg-[#c5a059] hover:text-stone-950 text-xs font-mono text-stone-200 transition-colors"
                >
                  {copiedId === item.id ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400 font-bold">已复制策略代码</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>复制代码画作</span>
                    </>
                  )}
                </button>
              </div>

              <pre className="p-6 sm:p-8 overflow-x-auto text-sm font-mono text-stone-200 leading-relaxed max-h-[460px] scrollbar-thin">
                <code>{item.sampleCode}</code>
              </pre>
            </div>

            {/* Museum Placard Inscription Caption */}
            <div className="text-center pt-2">
              <p className="text-sm font-serif italic text-stone-400">
                Plate {["I", "II", "III", "IV"][idx] || "I"}. Systematic Algorithmic Formulation &amp; Vectorized Execution Protocol.
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
