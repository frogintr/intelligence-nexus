"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Clock, Sun, Moon, ExternalLink, Globe2, Sparkles, BookOpen } from "lucide-react";

export interface HeaderProps {
  date?: string;
  activeDepartment?: string;
  onSelectDepartment?: (dept: string) => void;
}

export function Header({
  date = "2026-09-26",
  activeDepartment = "cover",
  onSelectDepartment,
}: HeaderProps) {
  const [timeStr, setTimeStr] = useState("");
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  const handleDeptSelect = (dept: string) => {
    if (onSelectDepartment) {
      onSelectDepartment(dept);
    } else {
      window.location.href = `/#${dept}`;
    }
  };

  useEffect(() => {
    setMounted(true);
    const isCurrentlyDark = document.documentElement.classList.contains("dark");
    setIsDark(isCurrentlyDark);

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

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  const navLinks = [
    { id: "cover", label: "01. 封面导读", en: "COVER DISPATCH", badge: "DAILY" },
    { id: "ai", label: "02. 前沿范式", en: "AI FRONTIERS", badge: "DEEP" },
    { id: "quant", label: "03. 量化展厅", en: "QUANT GALLERY", badge: "CODE" },
    { id: "creators", label: "04. 创作者智库", en: "CREATORS (40)", badge: "40位" },
    { id: "playbook", label: "05. 爆款与路线", en: "VIRAL PLAYBOOK", badge: "MATRIX" },
    { id: "markets", label: "06. 股期全景", en: "GLOBAL TAPE", badge: "MARKETS" },
    { id: "gazette", label: "07. 晨报速递", en: "DAILY GAZETTE", badge: "SUB" },
  ];

  return (
    <header className="border-b border-stone-200/90 dark:border-white/[0.08] bg-[#fbf9f5] dark:bg-[#0d0f14] transition-colors duration-200 sticky top-0 z-50 shadow-xs">
      {/* 1. DailyArt Gazette Top Meta Rail */}
      <div className="border-b border-stone-200/80 dark:border-white/[0.06] bg-stone-100/60 dark:bg-black/40 py-2 px-4 sm:px-8 text-xs font-mono tracking-wider text-stone-600 dark:text-stone-300">
        <div className="max-w-[1520px] mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center space-x-3">
            <span className="font-bold text-[#9e2a2b] dark:text-[#e5c378]">
              VOL. XII // ISSUE NO. 042
            </span>
            <span className="text-stone-300 dark:text-stone-700">|</span>
            <span className="hidden sm:inline font-serif italic text-stone-700 dark:text-stone-300">
              An Independent Journal of Macro Liquidity &amp; Systematic Quantitative Intelligence
            </span>
          </div>

          <div className="flex items-center space-x-4 sm:space-x-6">
            {/* Live Clock */}
            <div className="flex items-center space-x-1.5 text-stone-700 dark:text-stone-200 font-bold">
              <Clock className="w-3.5 h-3.5 text-[#9e2a2b] dark:text-[#c5a059]" />
              <span>{timeStr || "07:00:00 CST"}</span>
            </div>

            {/* Vercel Live Short Subdomain Badge */}
            <a
              href="https://in-nexus.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded text-xs bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 border border-emerald-500/30 font-mono font-bold hover:bg-emerald-500/25 transition-all"
              title="已绑定短域名：in-nexus.vercel.app"
            >
              <Globe2 className="w-3.5 h-3.5" />
              <span>in-nexus.vercel.app</span>
            </a>

            {/* Vercel Domains Console Shortcut */}
            <a
              href="https://vercel.com/frogpark/intelligence-nexus/settings/domains"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center space-x-1 text-xs text-stone-600 hover:text-stone-950 dark:text-stone-400 dark:hover:text-stone-100 transition-colors font-sans"
              title="打开 Vercel 二级域名与自定义域名管理后台"
            >
              <span>域名控制台</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="flex items-center space-x-1.5 px-2.5 py-1 rounded border border-stone-300 dark:border-white/[0.12] bg-white dark:bg-[#151922] text-stone-800 dark:text-stone-200 hover:text-stone-950 dark:hover:text-white shadow-xs transition-all font-mono text-xs font-bold"
              title={isDark ? "切换为明亮羊皮纸日间模式" : "切换为典雅墨黑夜间模式"}
            >
              {mounted ? (
                isDark ? (
                  <>
                    <Sun className="w-3.5 h-3.5 text-amber-400" />
                    <span>LIGHT</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-3.5 h-3.5 text-stone-700" />
                    <span>DARK</span>
                  </>
                )
              ) : (
                <Sun className="w-3.5 h-3.5 text-stone-400" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 2. Main DailyArt Monumental Editorial Masthead (大幅古典刊头) */}
      <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 py-6 sm:py-8 text-center">
        {/* Decorative Top Accent Kicker */}
        <div className="flex items-center justify-center space-x-4 mb-2">
          <div className="h-[1px] w-16 bg-stone-300 dark:bg-stone-700" />
          <span className="text-xs font-mono tracking-[0.35em] uppercase text-[#9e2a2b] dark:text-[#e5c378] font-bold">
            THE DAILYART EDITORIAL GAZETTE
          </span>
          <div className="h-[1px] w-16 bg-stone-300 dark:bg-stone-700" />
        </div>

        {/* Monumental Serif Magazine Title */}
        <button
          onClick={() => handleDeptSelect("cover")}
          className="inline-block group text-center focus:outline-none"
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-black tracking-tight text-stone-900 dark:text-stone-50 uppercase leading-none transition-transform group-hover:scale-[1.008]">
            Intelligence Nexus
          </h1>
        </button>

        {/* Subtitle & Mission Statement */}
        <p className="mt-3 text-sm sm:text-base font-serif italic text-stone-600 dark:text-stone-300 max-w-3xl mx-auto leading-relaxed">
          A Daily Gazette on Global Macro Liquidity Anchors, Multi-Agent Frontier Systems &amp; Systematic Alpha
        </p>

        {/* Print Metadata Row */}
        <div className="mt-3 pt-3 border-t border-stone-200/80 dark:border-white/[0.06] max-w-2xl mx-auto flex items-center justify-between text-xs font-mono text-stone-500 dark:text-stone-400 uppercase tracking-widest">
          <span>{date}</span>
          <span className="text-stone-300 dark:text-stone-700">•</span>
          <span>SHANGHAI &amp; NEW YORK</span>
          <span className="text-stone-300 dark:text-stone-700">•</span>
          <span className="text-[#9e2a2b] dark:text-[#e5c378] font-bold">SOVEREIGN GRÁTIS EDITION</span>
        </div>
      </div>

      {/* 3. DailyArt Double-Hairline Department Navigation Bar (双线古典栏目切换器) */}
      <div className="border-t-2 border-b-2 border-double border-stone-800/90 dark:border-stone-400/90 bg-[#f7f5ed] dark:bg-[#0f121a]">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8">
          <nav className="flex items-center justify-between overflow-x-auto no-scrollbar py-2.5 text-sm font-serif">
            {navLinks.map((link) => {
              const isActive = activeDepartment === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleDeptSelect(link.id)}
                  className={`whitespace-nowrap px-4 py-1.5 transition-all flex items-center space-x-2 text-sm sm:text-base ${
                    isActive
                      ? "text-[#9e2a2b] dark:text-[#e5c378] font-black underline decoration-2 underline-offset-8"
                      : "text-stone-700 dark:text-stone-300 hover:text-[#9e2a2b] dark:hover:text-[#e5c378] font-medium"
                  }`}
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span
                      className={`text-[10px] font-mono px-1.5 py-0.2 rounded font-bold uppercase ${
                        isActive
                          ? "bg-[#9e2a2b] text-white dark:bg-[#e5c378] dark:text-stone-950"
                          : "bg-stone-200/80 dark:bg-white/[0.06] text-stone-600 dark:text-stone-400"
                      }`}
                    >
                      {link.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
