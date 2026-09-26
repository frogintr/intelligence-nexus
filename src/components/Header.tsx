"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Clock, Sun, Moon, ExternalLink, Globe2, Sparkles, BookOpen } from "lucide-react";

export function Header({ date = "2026-09-26" }: { date?: string }) {
  const [timeStr, setTimeStr] = useState("");
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("cover-story");

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

    const handleScroll = () => {
      const sections = [
        "cover-story",
        "macro-anchors",
        "sentiment-gauges",
        "ai-frontiers",
        "quant-alpha",
        "creators-radar",
        "playbook-framework",
        "market-panoramic",
        "newsletter-dispatch",
      ];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearInterval(interval);
      window.removeEventListener("scroll", handleScroll);
    };
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
    { id: "cover-story", label: "01. 封面特辑", en: "COVER STORY" },
    { id: "macro-anchors", label: "02. 情绪与四锚", en: "SENTIMENT & ANCHORS" },
    { id: "ai-frontiers", label: "03. 前沿范式", en: "AI FRONTIERS" },
    { id: "quant-alpha", label: "04. 量化展厅", en: "QUANT GALLERY" },
    { id: "creators-radar", label: "05. 创作者智库 (40)", en: "CREATORS ARCHIVE" },
    { id: "playbook-framework", label: "06. 爆款与路线", en: "VIRAL PLAYBOOK" },
    { id: "market-panoramic", label: "07. 股期全景", en: "MARKET TAPE" },
    { id: "newsletter-dispatch", label: "08. 晨报速递", en: "DAILY GAZETTE" },
  ];

  return (
    <header className="border-b border-stone-200/90 dark:border-white/[0.08] bg-[#fbf9f5] dark:bg-[#0d0f14] transition-colors duration-200">
      {/* 1. DailyArt Gazette Top Meta Rail */}
      <div className="border-b border-stone-200/80 dark:border-white/[0.06] bg-stone-100/50 dark:bg-black/30 py-1.5 px-4 sm:px-8 text-[11px] font-mono tracking-wider text-stone-500 dark:text-stone-400">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-3">
            <span className="font-bold text-[#9e2a2b] dark:text-[#e5c378]">
              VOL. XII // ISSUE 042
            </span>
            <span className="text-stone-300 dark:text-stone-700">|</span>
            <span className="hidden sm:inline">
              AN INDEPENDENT JOURNAL OF MACRO LIQUIDITY &amp; SYSTEMATIC INTELLIGENCE
            </span>
          </div>

          <div className="flex items-center space-x-3 sm:space-x-5">
            {/* Live Clock */}
            <div className="flex items-center space-x-1.5 text-stone-600 dark:text-stone-300">
              <Clock className="w-3.5 h-3.5 text-[#9e2a2b] dark:text-[#c5a059]" />
              <span>{timeStr || "07:00:00 CST"}</span>
            </div>

            {/* Vercel Live Short Subdomain Pill */}
            <a
              href="https://in-nexus.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1 px-2 py-0.5 rounded text-[10px] bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 font-mono font-bold hover:bg-emerald-500/20 transition-all"
              title="已绑定短域名：in-nexus.vercel.app"
            >
              <Globe2 className="w-3 h-3" />
              <span>in-nexus.vercel.app</span>
            </a>

            {/* Vercel Domains Direct Dashboard Link */}
            <a
              href="https://vercel.com/frogpark/intelligence-nexus/settings/domains"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center space-x-1 text-[10px] text-stone-500 hover:text-stone-900 dark:hover:text-stone-200 transition-colors"
              title="点击打开 Vercel 域名与二级域名管理控制台"
            >
              <span>域名控制台</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="flex items-center space-x-1 px-2 py-0.5 rounded border border-stone-200 dark:border-white/[0.1] bg-white dark:bg-[#151922] text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white shadow-xs transition-all"
              title={isDark ? "切换为明亮羊皮纸日间模式" : "切换为典雅墨黑夜间模式"}
            >
              {mounted ? (
                isDark ? (
                  <>
                    <Sun className="w-3 h-3 text-amber-400" />
                    <span className="text-[10px] font-bold">LIGHT</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-3 h-3 text-stone-600" />
                    <span className="text-[10px] font-bold">DARK</span>
                  </>
                )
              ) : (
                <Sun className="w-3 h-3 text-stone-400" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 2. Main DailyArt Monumental Editorial Masthead (报头) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 text-center">
        {/* Subtle Decorative Kicker */}
        <div className="flex items-center justify-center space-x-4 mb-2">
          <div className="h-[1px] w-12 bg-stone-300 dark:bg-stone-700" />
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#9e2a2b] dark:text-[#e5c378] font-bold">
            THE DAILYART EDITORIAL GAZETTE
          </span>
          <div className="h-[1px] w-12 bg-stone-300 dark:bg-stone-700" />
        </div>

        {/* Monumental Magazine Title */}
        <Link href="/" className="inline-block group">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-black tracking-tight text-stone-900 dark:text-stone-50 uppercase leading-none transition-transform group-hover:scale-[1.008]">
            Intelligence Nexus
          </h1>
        </Link>

        {/* Subtitle & Mission Statement */}
        <p className="mt-3 text-xs sm:text-sm font-serif italic text-stone-600 dark:text-stone-300 max-w-2xl mx-auto leading-relaxed">
          A Daily Gazette on Global Macro Liquidity Anchors, Multi-Agent Frontier Systems &amp; Systematic Alpha
        </p>

        {/* Print Metadata Row */}
        <div className="mt-4 pt-3 border-t border-stone-200/80 dark:border-white/[0.06] max-w-xl mx-auto flex items-center justify-between text-[11px] font-mono text-stone-500 dark:text-stone-400 uppercase tracking-widest">
          <span>{date}</span>
          <span className="text-stone-300 dark:text-stone-700">•</span>
          <span>SHANGHAI &amp; NEW YORK</span>
          <span className="text-stone-300 dark:text-stone-700">•</span>
          <span className="text-[#9e2a2b] dark:text-[#e5c378] font-bold">GRÁTIS EDITION</span>
        </div>
      </div>

      {/* 3. DailyArt Double-Hairline Department Navigation Bar (双线古典导航条) */}
      <div className="border-t-2 border-b-2 border-double border-stone-800/80 dark:border-stone-400/80 bg-[#f8f6f0] dark:bg-[#0f121a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between overflow-x-auto no-scrollbar py-2 text-xs font-serif tracking-wider">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById(link.id);
                    if (el) {
                      el.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className={`whitespace-nowrap px-3 py-1 transition-all flex items-center space-x-1.5 ${
                    isActive
                      ? "text-[#9e2a2b] dark:text-[#e5c378] font-bold underline decoration-2 underline-offset-4"
                      : "text-stone-700 dark:text-stone-300 hover:text-[#9e2a2b] dark:hover:text-[#e5c378]"
                  }`}
                >
                  <span>{link.label}</span>
                </a>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
