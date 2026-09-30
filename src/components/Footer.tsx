"use client";

import React, { useState } from "react";
import { GitBranch, Shield, Zap, Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t-2 border-stone-800 dark:border-stone-400 bg-[#f4f2ec] dark:bg-[#07080c] py-14 text-stone-600 dark:text-stone-400 font-mono text-xs transition-colors">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10 pb-10 border-b border-stone-200 dark:border-white/[0.06]">
          {/* Brand Philosophy (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#e50914] dark:bg-[#ff4d4f]" />
              <span className="text-stone-900 dark:text-white font-bold tracking-wider uppercase text-sm font-serif">
                INTELLIGENCE NEXUS // 出版规范与美学准则
              </span>
            </div>
            <p className="text-stone-600 dark:text-stone-300 font-serif text-sm leading-relaxed max-w-lg">
              严格复刻 DailyArt 经典艺术杂志美学，重塑严肃宏观流动性与 AI 量化投研跟踪体验。坚持数据微观锚定、代码展签装裱呈现、真金白银实盘验证与完全开源交付。
            </p>
            <div className="text-xs text-[#e50914] dark:text-[#ff4d4f] font-mono font-bold tracking-wider">
              ISSN 2026-NEXUS · ISSUE NO. 042 · SOVEREIGN EDITION
            </div>
          </div>

          {/* Quick Department Index (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-stone-900 dark:text-white font-bold tracking-wider uppercase text-xs block font-mono">
              CURATED DEPARTMENTS // 栏目导览
            </span>
            <ul className="space-y-1.5 text-stone-600 dark:text-stone-400 text-xs font-serif">
              <li><a href="/#cover" className="hover:text-[#e50914] dark:hover:text-[#ff4d4f] transition-colors">01. 封面特辑 (Cover Dispatch)</a></li>
              <li><a href="/#ai" className="hover:text-[#e50914] dark:hover:text-[#ff4d4f] transition-colors">02. 前沿范式 (AI Frontiers)</a></li>
              <li><a href="/#quant" className="hover:text-[#e50914] dark:hover:text-[#ff4d4f] transition-colors">03. 量化展厅 (Quant Alpha Gallery)</a></li>
              <li><a href="/#creators" className="hover:text-[#e50914] dark:hover:text-[#ff4d4f] transition-colors">04. 创作者智库 (40 Creators Hub)</a></li>
              <li><a href="/#playbook" className="hover:text-[#e50914] dark:hover:text-[#ff4d4f] transition-colors">05. 爆款与路线 (Viral Playbook)</a></li>
              <li><a href="/#markets" className="hover:text-[#e50914] dark:hover:text-[#ff4d4f] transition-colors">06. 股期全景 (Global Asset Tape)</a></li>
              <li><a href="/#gazette" className="hover:text-[#e50914] dark:hover:text-[#ff4d4f] transition-colors">07. 晨报速递 (Daily Gazette)</a></li>
            </ul>
          </div>

          {/* DailyArt Gazette Newsletter Box (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-stone-900 dark:text-white font-bold tracking-wider uppercase text-xs block font-mono">
              THE DAILY DISPATCH // 晨报订阅
            </span>
            <p className="text-xs font-serif text-stone-500 dark:text-stone-400 leading-relaxed">
              每日北京时间 07:00 准时推送全球跨国流动性、AI 工业级进展与量化策略源码。
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("已成功登记您的投研晨报订阅请求！");
              }}
              className="space-y-2 pt-1"
            >
              <div className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="输入工作邮箱 (e.g. name@quant.fund)"
                  className="flex-1 px-3 py-2 text-xs bg-white dark:bg-[#12151e] border border-stone-300 dark:border-white/20 text-stone-900 dark:text-white placeholder:text-stone-400 focus:outline-none focus:border-[#e50914] dark:focus:border-[#ff4d4f]"
                />
                <button
                  type="submit"
                  className="px-4 py-2 border-2 border-[#e50914] text-[#e50914] dark:border-[#ff4d4f] dark:text-[#ff4d4f] hover:bg-[#e50914] hover:text-white dark:hover:bg-[#ff4d4f] dark:hover:text-black font-serif font-bold text-xs uppercase tracking-wider transition-all duration-200"
                >
                  订阅
                </button>
              </div>
              <label className="flex items-center space-x-2 text-[10px] text-stone-500 cursor-pointer pt-1">
                <input type="checkbox" defaultChecked required className="accent-[#e50914]" />
                <span>同意接收 Intelligence Nexus 学术投研晨报</span>
              </label>
            </form>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-500 dark:text-stone-500 gap-4">
          <p>© 2026 INTELLIGENCE NEXUS · ALL RIGHTS RESERVED · SOVEREIGN EDITORIAL PRESS</p>
          <p className="font-serif italic text-stone-500">
            Inspired by DailyArt Magazine · Crafted with Antigravity Agentic Engineering
          </p>
        </div>
      </div>
    </footer>
  );
}
