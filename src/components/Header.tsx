"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Clock, Sun, Moon, Newspaper, Compass } from "lucide-react";

export function Header({ date = "2026-09-26" }: { date?: string }) {
  const pathname = usePathname();
  const [timeStr, setTimeStr] = useState("");
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

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

  const isDossier = pathname === "/";
  const isCreators = pathname === "/creators";

  return (
    <header className="border-b border-slate-200/90 dark:border-white/[0.08] bg-[#f9f8f5]/85 dark:bg-[#090b10]/85 backdrop-blur-md sticky top-0 z-50 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Masthead Branding & Navigation */}
          <div className="flex items-center space-x-6">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#997328] to-[#6d5118] dark:from-[#c5a059] dark:to-[#8c6d32] p-[1px] flex items-center justify-center shadow-md dark:shadow-glow-gold transition-transform group-hover:scale-105">
                <div className="w-full h-full bg-[#fdfcf9] dark:bg-[#0d1017] rounded-[7px] flex items-center justify-center">
                  <span className="font-serif font-black text-lg text-[#997328] dark:text-[#e5c378]">IN</span>
                </div>
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <h1 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 dark:text-white uppercase font-sans">
                    Intelligence Nexus
                  </h1>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-serif italic hidden md:block">
                  Macro Liquidity &amp; AI Paradigm Intelligence
                </p>
              </div>
            </Link>

            {/* Navigation Tabs */}
            <nav className="flex items-center space-x-1.5 p-1 rounded-lg bg-slate-200/60 dark:bg-white/[0.06] border border-slate-200/80 dark:border-white/[0.08]">
              <Link
                href="/"
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                  isDossier
                    ? "bg-white dark:bg-[#121620] text-[#997328] dark:text-[#e5c378] shadow-sm font-semibold"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                <Newspaper className="w-3.5 h-3.5" />
                <span>今日简报</span>
              </Link>
              <Link
                href="/creators"
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                  isCreators
                    ? "bg-white dark:bg-[#121620] text-[#997328] dark:text-[#e5c378] shadow-sm font-semibold"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                <Compass className="w-3.5 h-3.5" />
                <span>创作者雷达</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-[#997328]/15 dark:bg-[#c5a059]/20 text-[#997328] dark:text-[#e5c378] font-mono font-bold">
                  40
                </span>
              </Link>
            </nav>
          </div>

          {/* Issue Metadata & Controls */}
          <div className="flex items-center space-x-4 sm:space-x-6 text-xs font-mono">
            {/* Live CST Clock */}
            <div className="hidden md:flex flex-col items-end text-slate-500 dark:text-slate-400">
              <span className="flex items-center text-slate-700 dark:text-slate-300 font-medium">
                <Clock className="w-3.5 h-3.5 mr-1.5 text-[#997328] dark:text-[#c5a059]" />
                {timeStr || "07:00:00 CST"}
              </span>
              <span className="text-[11px] text-slate-400 dark:text-slate-500">
                DAILY DISPATCH: {date}
              </span>
            </div>

            {/* Vercel Status Badge */}
            <div className="hidden sm:flex items-center space-x-2 border-l border-slate-200 dark:border-white/[0.08] pl-5">
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse mr-1.5" />
                VERCEL SSG
              </span>
            </div>

            {/* Day / Night Theme Toggle */}
            <div className="border-l border-slate-200 dark:border-white/[0.08] pl-4 sm:pl-5">
              <button
                onClick={toggleTheme}
                className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/[0.1] bg-white dark:bg-[#121620] text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white shadow-sm transition-all"
                title={isDark ? "切换为日间明亮模式" : "切换为夜间深色模式"}
                aria-label="Toggle theme"
              >
                {mounted ? (
                  isDark ? (
                    <>
                      <Sun className="w-3.5 h-3.5 text-amber-400" />
                      <span className="text-[11px] font-bold">LIGHT</span>
                    </>
                  ) : (
                    <>
                      <Moon className="w-3.5 h-3.5 text-slate-600" />
                      <span className="text-[11px] font-bold">DARK</span>
                    </>
                  )
                ) : (
                  <Sun className="w-3.5 h-3.5 text-slate-400" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
