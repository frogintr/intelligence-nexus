"use client";

import React, { useState, useEffect } from "react";
import { Terminal, ShieldCheck, Globe, Clock, Sparkles } from "lucide-react";

export function Header({ date }: { date: string }) {
  const [timeStr, setTimeStr] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTimeStr(
        now.toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          timeZone: "Asia/Shanghai",
        }) + " CST"
      );
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="border-b border-white/[0.08] bg-[#090b10]/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Masthead Branding */}
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#c5a059] to-[#8c6d32] p-[1px] flex items-center justify-center shadow-glow-gold">
              <div className="w-full h-full bg-[#0d1017] rounded-[7px] flex items-center justify-center">
                <span className="font-serif font-black text-lg text-[#e5c378]">IN</span>
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-lg sm:text-xl font-bold tracking-tight text-white uppercase font-sans">
                  Intelligence Nexus
                </h1>
                <span className="hidden sm:inline-block text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded border border-[#c5a059]/40 bg-[#c5a059]/10 text-[#e5c378]">
                  DOSSIER
                </span>
              </div>
              <p className="text-xs text-slate-400 font-serif italic hidden sm:block">
                Global Macro Liquidity &amp; AI Paradigm Intelligence
              </p>
            </div>
          </div>

          {/* Issue Metadata & Status */}
          <div className="flex items-center space-x-6 text-xs font-mono">
            <div className="hidden md:flex flex-col items-end text-slate-400">
              <span className="flex items-center text-slate-300">
                <Clock className="w-3.5 h-3.5 mr-1.5 text-[#c5a059]" />
                {timeStr || "07:00:00 CST"}
              </span>
              <span className="text-[11px] text-slate-500">
                DAILY DISPATCH: {date}
              </span>
            </div>

            <div className="flex items-center space-x-2 border-l border-white/[0.08] pl-6">
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse mr-1.5" />
                VERCEL SSG LIVE
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
