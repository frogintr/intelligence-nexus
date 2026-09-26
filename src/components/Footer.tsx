import React from "react";
import { GitBranch, Shield, Zap, Terminal } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-white/[0.08] bg-[#07080c] py-12 text-slate-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 pb-8 border-b border-white/[0.06]">
          {/* Brand Philosophy */}
          <div>
            <span className="text-white font-bold tracking-wider uppercase text-sm block mb-2 font-sans">
              INTELLIGENCE NEXUS
            </span>
            <p className="text-slate-500 font-serif text-xs leading-relaxed">
              个人专属高审美智能投研与宏观范式跟踪系统。坚持数据指标锚定、结构装裱呈现与学术版权合规。
            </p>
          </div>

          {/* Publishing Protocol */}
          <div>
            <span className="text-white font-bold tracking-wider uppercase text-xs block mb-2">
              DISPATCH SPECIFICATION
            </span>
            <ul className="space-y-1 text-slate-500 text-[11px]">
              <li>• 定时调度：每日北京时间 07:00 (美东夏令时 19:00)</li>
              <li>• 数据架构：单日 JSON 结构化增量沉淀</li>
              <li>• 静态渲染：Next.js SSG + Vercel Global Edge CDN</li>
            </ul>
          </div>

          {/* System Pipeline */}
          <div>
            <span className="text-white font-bold tracking-wider uppercase text-xs block mb-2">
              AUTOMATION PIPELINE
            </span>
            <div className="flex flex-col space-y-2 text-[11px] text-slate-500">
              <span className="flex items-center">
                <GitBranch className="w-3.5 h-3.5 mr-1.5 text-emerald-400" />
                GitHub Actions 自动化调度爬虫
              </span>
              <span className="flex items-center">
                <Zap className="w-3.5 h-3.5 mr-1.5 text-[#e5c378]" />
                Vercel Deploy Hook 自动增量触发
              </span>
              <span className="flex items-center">
                <Shield className="w-3.5 h-3.5 mr-1.5 text-sky-400" />
                Google Workspace MCP 全套数据连通
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-600 gap-4">
          <p>© 2026 INTELLIGENCE NEXUS · ALL RIGHTS RESERVED.</p>
          <p className="font-serif italic text-slate-500">
            Crafted with Antigravity Agentic Engineering · Powered by Gemini
          </p>
        </div>
      </div>
    </footer>
  );
}
