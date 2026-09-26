"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Clock, Sun, Moon, Sparkles, Compass } from "lucide-react";

export function Header({ date = "2026-09-26" }: { date?: string }) {
  const [timeStr, setTimeStr] = useState("");
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("editorial-vision");

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
        "editorial-vision",
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
    { id: "editorial-vision", label: "主线定调", en: "Vision" },
    { id: "macro-anchors", label: "流动性锚", en: "Anchors" },
    { id: "sentiment-gauges", label: "情绪标尺", en: "Sentiment" },
    { id: "ai-frontiers", label: "前沿范式", en: "AI Frontiers" },
    { id: "quant-alpha", label: "量化展厅", en: "Quant Alpha" },
    { id: "creators-radar", label: "创作者智库", en: "Creators (40)" },
    { id: "playbook-framework", label: "爆款与路线", en: "Playbook" },
    { id: "market-panoramic", label: "股期全景", en: "Markets" },
    { id: "newsletter-dispatch", label: "晨报速递", en: "Gazette" },
  ];

  return (
    <header className="border-b border-stone-200/90 dark:border-white/[0.08] bg-[#f9f8f5]/95 dark:bg-[#090b10]/95 backdrop-blur-md sticky top-0 z-50 transition-colors duration-200">
      {/* 1. DailyArt Magazine Gazette Top Meta Strip */}
      <div className="border-b border-stone-200/80 dark:border-white/[0.06] bg-stone-100/60 dark:bg-black/30 py-1.5 px-4 sm:px-8 text-[11px] font-mono tracking-wider text-stone-500 dark:text-stone-400">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="font-bold text-[#9e2a2b] dark:text-[#e5c378]">
              VOL. 2026 // NO. 042
            </span>
            <span className="hidden md:inline text-stone-300 dark:text-stone-700">|</span>
            <span className="hidden md:inline">
              AN INDEPENDENT JOURNAL OF MACRO LIQUIDITY &amp; AI ENGINEERING
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1.5 text-stone-600 dark:text-stone-300">
              <Clock className="w-3.5 h-3.5 text-[#9e2a2b] dark:text-[#c5a059]" />
              <span>{timeStr || "07:00:00 CST"}</span>
            </div>
            <span className="hidden sm:inline-block px-2 py-0.2 rounded-full text-[10px] bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 font-bold">
              VERCEL EDGE
            </span>
            <button
              onClick={toggleTheme}
              className="flex items-center space-x-1 px-2 py-0.5 rounded border border-stone-200 dark:border-white/[0.1] bg-white dark:bg-[#121620] text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white shadow-xs transition-all"
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

      {/* 2. Main DailyArt Editorial Masthead */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo & Magazine Heading */}
          <Link href="/" className="flex items-center space-x-4 group text-center md:text-left">
            <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-[#9e2a2b] via-[#852223] to-[#6e1c1d] dark:from-[#c5a059] dark:to-[#8c6d32] p-[1.5px] flex items-center justify-center shadow-md transition-transform group-hover:scale-105 shrink-0">
              <div className="w-full h-full bg-[#fdfcf9] dark:bg-[#0c0f17] rounded-[6.5px] flex items-center justify-center">
                <span className="font-serif font-black text-xl text-[#9e2a2b] dark:text-[#e5c378]">IN</span>
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-2.5">
                <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight text-stone-900 dark:text-white uppercase font-serif">
                  Intelligence Nexus
                </h1>
                <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded border border-[#9e2a2b]/30 dark:border-[#c5a059]/40 bg-[#9e2a2b]/10 dark:bg-[#c5a059]/10 text-[#9e2a2b] dark:text-[#e5c378] font-bold">
                  MAGAZINE
                </span>
              </div>
              <p className="text-xs text-stone-500 dark:text-stone-400 font-serif italic mt-0.5">
                A Unified Journal of Global Macro Liquidity, AI Frontier Paradigms &amp; Quant Engineering
              </p>
            </div>
          </Link>

          {/* Quick Editorial Stamp */}
          <div className="hidden lg:flex items-center space-x-6 text-xs font-mono text-stone-500 dark:text-stone-400 border-l border-stone-200 dark:border-white/[0.08] pl-6">
            <div>
              <span className="text-[10px] uppercase text-stone-400 block">DAILY EDITION</span>
              <span className="font-bold text-stone-800 dark:text-stone-200">{date}</span>
            </div>
            <div>
              <span className="text-[10px] uppercase text-stone-400 block">CURATED CREATORS</span>
              <span className="font-bold text-[#9e2a2b] dark:text-[#e5c378]">40 DOSSIERS</span>
            </div>
            <div>
              <span className="text-[10px] uppercase text-stone-400 block">STRATEGY CODE</span>
              <span className="font-bold text-emerald-600 dark:text-emerald-400">100% OPEN SOURCE</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. DailyArt Sticky Horizontal Department Navigator */}
      <div className="border-t border-stone-200/90 dark:border-white/[0.08] bg-white/70 dark:bg-[#0c0f17]/70 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-1 sm:space-x-2 py-2 overflow-x-auto no-scrollbar text-xs font-medium">
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
                  className={`whitespace-nowrap px-3 py-1.5 rounded-md transition-all flex items-center space-x-1.5 ${
                    isActive
                      ? "bg-[#9e2a2b] dark:bg-[#c5a059] text-white dark:text-stone-950 font-bold shadow-xs"
                      : "text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white hover:bg-stone-100/80 dark:hover:bg-white/[0.05]"
                  }`}
                >
                  <span className="font-sans">{link.label}</span>
                  <span className="text-[10px] opacity-75 font-mono hidden md:inline">
                    · {link.en}
                  </span>
                </a>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
