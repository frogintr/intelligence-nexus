import React from "react";
import { GitBranch, Shield, Zap, Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-stone-200/90 dark:border-white/[0.08] bg-[#f4f2ec] dark:bg-[#07080c] py-14 text-stone-600 dark:text-stone-400 font-mono text-xs transition-colors">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10 pb-10 border-b border-stone-200 dark:border-white/[0.06]">
          {/* Brand Philosophy */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-[#e50914] dark:bg-[#ff4d4f]" />
              <span className="text-stone-900 dark:text-white font-bold tracking-wider uppercase text-sm font-serif">
                INTELLIGENCE NEXUS // 出版规范与美学准则
              </span>
            </div>
            <p className="text-stone-500 dark:text-stone-400 font-serif text-xs leading-relaxed max-w-md">
              以 DailyArt 艺术期刊美学，重塑严肃宏观与 AI 量化投研跟踪体验。坚持数据微观锚定、代码展签装裱呈现、真金白银实盘验证与完全开源交付。
            </p>
            <div className="text-[11px] text-[#e50914] dark:text-[#ff4d4f] font-mono font-bold">
              ISSN 2026-NEXUS · ISSUE VOL. XLII
            </div>
          </div>

          {/* Publishing Protocol */}
          <div className="space-y-2">
            <span className="text-stone-900 dark:text-white font-bold tracking-wider uppercase text-xs block">
              PUBLICATION CADENCE
            </span>
            <ul className="space-y-1.5 text-stone-500 text-[11px] font-serif">
              <li>• 定时调度：每日北京时间 07:00 (美东夏令时 19:00)</li>
              <li>• 数据架构：单日 JSON 结构化增量沉淀</li>
              <li>• 渲染流水：Next.js SSG + Vercel Global Edge CDN</li>
              <li>• 离线保障：全量博主智库 100% 本地与云端双归档</li>
            </ul>
          </div>

          {/* System Pipeline */}
          <div className="space-y-2">
            <span className="text-stone-900 dark:text-white font-bold tracking-wider uppercase text-xs block">
              AUTOMATION PIPELINE
            </span>
            <div className="flex flex-col space-y-2 text-[11px] text-stone-500">
              <span className="flex items-center">
                <GitBranch className="w-3.5 h-3.5 mr-1.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                GitHub Actions 自动化调度爬虫
              </span>
              <span className="flex items-center">
                <Zap className="w-3.5 h-3.5 mr-1.5 text-[#e50914] dark:text-[#ff4d4f] shrink-0" />
                Vercel Deploy Hook 自动增量触发
              </span>
              <span className="flex items-center">
                <Shield className="w-3.5 h-3.5 mr-1.5 text-sky-600 dark:text-sky-400 shrink-0" />
                Google Workspace MCP 全套数据连通
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-500 dark:text-stone-500 gap-4">
          <p>© 2026 INTELLIGENCE NEXUS · ALL RIGHTS RESERVED · EDITORIAL PRESS</p>
          <p className="font-serif italic text-stone-500">
            Inspired by DailyArt Magazine · Crafted with Antigravity Agentic Engineering
          </p>
        </div>
      </div>
    </footer>
  );
}
