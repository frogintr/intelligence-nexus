import fs from "fs";
import path from "path";
import { DailyDossier } from "../types";
import { Header } from "../components/Header";
import { HeroSpread } from "../components/HeroSpread";
import { AiFrontiers } from "../components/AiFrontiers";
import { QuantAlpha } from "../components/QuantAlpha";
import { CreatorsView } from "../components/CreatorsView";
import { MarketPanoramic } from "../components/MarketPanoramic";
import { NewsletterSection } from "../components/NewsletterSection";
import { Footer } from "../components/Footer";
import { Globe2, ExternalLink, Sparkles, BookOpen, TrendingUp, ShieldCheck, BookmarkCheck } from "lucide-react";

function getLatestDossier(): DailyDossier {
  const dataDir = path.join(process.cwd(), "data", "daily");

  if (!fs.existsSync(dataDir)) {
    throw new Error("Data directory not found");
  }

  const files = fs.readdirSync(dataDir).filter((f) => f.endsWith(".json"));
  files.sort().reverse();

  if (files.length === 0) {
    throw new Error("No daily dossier files found");
  }

  const latestFile = path.join(dataDir, files[0]);
  const content = fs.readFileSync(latestFile, "utf-8");
  return JSON.parse(content) as DailyDossier;
}

export default function Home() {
  const dossier = getLatestDossier();

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] flex flex-col justify-between selection:bg-[#9e2a2b]/20 selection:text-stone-900 dark:selection:text-white transition-colors duration-200">
      <div>
        {/* 1. DailyArt Gazette Monumental Masthead */}
        <Header date={dossier.date} />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
          {/* 2. DailyArt Front-Page Hero 3-Story Curated Spread */}
          {/* (Main Lead Cover Story + Dual Sentiment Barometer + 4 Liquidity Anchors Ledger) */}
          <HeroSpread
            oneLiner={dossier.oneLinerSummary}
            anchors={dossier.macroAnchors}
            sentiment={dossier.sentiment}
          />

          {/* 3. DailyArt 70 / 30 Two-Column Editorial Magazine Rhythm */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* =================================================================== */}
            {/* LEFT COLUMN: Main Editorial Story Stream (68% / 8 Cols)             */}
            {/* =================================================================== */}
            <div className="lg:col-span-8 space-y-14">
              {/* Department I: AI Frontiers & Industrial Case Studies */}
              <AiFrontiers updates={dossier.aiUpdates} />

              {/* Department II: Quant Alpha Gallery (Framed Code as Artwork) */}
              <QuantAlpha research={dossier.quantResearch} />

              {/* Department III: The 40 Creator Intelligence Archive & Playbook */}
              <CreatorsView />

              {/* Department IV: Market Panoramic (US/China Stocks & Commodities) */}
              <MarketPanoramic
                stocks={dossier.stocks}
                commodities={dossier.commodities}
              />

              {/* Department V: DailyArt Split Newsletter Subscription Gazette */}
              <NewsletterSection />
            </div>

            {/* =================================================================== */}
            {/* RIGHT COLUMN: Sticky Gazette Editorial Sidebar (32% / 4 Cols)       */}
            {/* =================================================================== */}
            <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
              {/* Widget 1: Vercel Subdomain & Project Manager Direct Card */}
              <div className="bg-white dark:bg-[#12151e] border border-stone-200/90 dark:border-white/[0.08] p-5 sm:p-6 shadow-xs">
                <div className="flex items-center justify-between border-b border-stone-200/80 dark:border-white/[0.06] pb-3 mb-4">
                  <div className="flex items-center space-x-2">
                    <Globe2 className="w-4 h-4 text-[#9e2a2b] dark:text-[#c5a059]" />
                    <h3 className="text-xs font-bold font-serif tracking-wider uppercase text-stone-900 dark:text-white">
                      VERCEL DOMAINS // 域名管理
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold">
                    LIVE PRODUCTION
                  </span>
                </div>

                <p className="text-xs font-serif text-stone-600 dark:text-stone-300 leading-relaxed mb-4">
                  站点已成功绑定高辨识度专属短域名。您可随时通过 Vercel 控制台更换二级域名或挂载个人专属独立顶级域名。
                </p>

                {/* Subdomains list */}
                <div className="space-y-2 mb-4">
                  <div className="p-2.5 bg-stone-50 dark:bg-[#0c0f16] border border-stone-200/70 dark:border-white/[0.05] flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-mono text-stone-400">极简短域名 (8字符)</div>
                      <a
                        href="https://in-nexus.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono font-bold text-[#9e2a2b] dark:text-[#e5c378] hover:underline"
                      >
                        in-nexus.vercel.app
                      </a>
                    </div>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 font-bold">
                      ACTIVE
                    </span>
                  </div>

                  <div className="p-2.5 bg-stone-50 dark:bg-[#0c0f16] border border-stone-200/70 dark:border-white/[0.05] flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-mono text-stone-400">刊物专名</div>
                      <a
                        href="https://nexus-daily.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono font-bold text-stone-800 dark:text-stone-200 hover:underline"
                      >
                        nexus-daily.vercel.app
                      </a>
                    </div>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 font-bold">
                      ACTIVE
                    </span>
                  </div>
                </div>

                {/* Direct link to Vercel Domains Console */}
                <a
                  href="https://vercel.com/frogpark/intelligence-nexus/settings/domains"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-1.5 py-2 px-3 bg-stone-100 hover:bg-stone-200 dark:bg-white/[0.06] dark:hover:bg-white/[0.1] text-stone-800 dark:text-stone-200 text-xs font-serif transition-colors border border-stone-200 dark:border-white/[0.08]"
                >
                  <span>打开 Vercel 域名管理控制台</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Widget 2: Notable Curators Hall of Fame (馆长重点推荐) */}
              <div className="bg-white dark:bg-[#12151e] border border-stone-200/90 dark:border-white/[0.08] p-5 sm:p-6 shadow-xs">
                <div className="flex items-center justify-between border-b border-stone-200/80 dark:border-white/[0.06] pb-3 mb-4">
                  <div className="flex items-center space-x-2">
                    <BookmarkCheck className="w-4 h-4 text-[#9e2a2b] dark:text-[#c5a059]" />
                    <h3 className="text-xs font-bold font-serif tracking-wider uppercase text-stone-900 dark:text-white">
                      CURATORS OF NOTE // 馆长特荐
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono text-stone-400">
                    6 FOCUS MINDS
                  </span>
                </div>

                <div className="divide-y divide-stone-100 dark:divide-white/[0.04]">
                  {[
                    { name: "Andrej Karpathy", role: "特斯拉 AI 前总监", tag: "神经网络极简重构", sub: "1.2M Subs" },
                    { name: "Two Sigma", role: "华尔街量化对冲基金", tag: "Alpha 因子数据科学", sub: "85K Subs" },
                    { name: "QuantConnect", role: "全球量化算法引擎", tag: "架构设计与实盘回测", sub: "110K Subs" },
                    { name: "Part Time Larry", role: "全栈量化实战派", tag: "Python 策略与自动化", sub: "185K Subs" },
                    { name: "3Blue1Brown", role: "数学直觉可视化权威", tag: "线性代数与深度学习", sub: "6.2M Subs" },
                    { name: "Yannic Kilcher", role: "顶会 AI 论文速递", tag: "前沿架构严苛拆解", sub: "250K Subs" },
                  ].map((c, idx) => (
                    <a
                      key={idx}
                      href="#creators-radar"
                      className="py-2.5 flex items-center justify-between group hover:pl-1 transition-all"
                    >
                      <div>
                        <div className="text-xs font-serif font-bold text-stone-900 dark:text-white group-hover:text-[#9e2a2b] dark:group-hover:text-[#e5c378] transition-colors">
                          {c.name}
                        </div>
                        <div className="text-[10px] text-stone-500 font-serif">
                          {c.role} · {c.tag}
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-stone-400 group-hover:text-stone-700 dark:group-hover:text-stone-300">
                        {c.sub}
                      </span>
                    </a>
                  ))}
                </div>

                <div className="mt-4 pt-3 border-t border-stone-200/80 dark:border-white/[0.06] text-center">
                  <a
                    href="#creators-radar"
                    className="text-xs font-serif text-[#9e2a2b] dark:text-[#e5c378] font-bold hover:underline"
                  >
                    查看全部 40 位创作者学术详析档案 →
                  </a>
                </div>
              </div>

              {/* Widget 3: Daily Tape Flash Indices */}
              <div className="bg-white dark:bg-[#12151e] border border-stone-200/90 dark:border-white/[0.08] p-5 sm:p-6 shadow-xs">
                <div className="flex items-center justify-between border-b border-stone-200/80 dark:border-white/[0.06] pb-3 mb-4">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-[#9e2a2b] dark:text-[#c5a059]" />
                    <h3 className="text-xs font-bold font-serif tracking-wider uppercase text-stone-900 dark:text-white">
                      GLOBAL TAPE FLASH // 核心股期
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono text-stone-400">
                    SETTLEMENT
                  </span>
                </div>

                <div className="space-y-2 text-xs font-mono">
                  <div className="flex justify-between items-center py-1 border-b border-stone-100 dark:border-white/[0.03]">
                    <span className="text-stone-600 dark:text-stone-300">S&amp;P 500</span>
                    <span className="text-emerald-700 dark:text-emerald-400 font-bold">5,738.17 (+0.42%)</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-stone-100 dark:border-white/[0.03]">
                    <span className="text-stone-600 dark:text-stone-300">NASDAQ 100</span>
                    <span className="text-emerald-700 dark:text-emerald-400 font-bold">20,008.62 (+0.68%)</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-stone-100 dark:border-white/[0.03]">
                    <span className="text-stone-600 dark:text-stone-300">沪深300 (CSI 300)</span>
                    <span className="text-rose-700 dark:text-rose-400 font-bold">3,703.09 (+1.85%)</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-stone-100 dark:border-white/[0.03]">
                    <span className="text-stone-600 dark:text-stone-300">恒生科技 (HSTECH)</span>
                    <span className="text-rose-700 dark:text-rose-400 font-bold">4,432.50 (+2.40%)</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-stone-100 dark:border-white/[0.03]">
                    <span className="text-stone-600 dark:text-stone-300">COMEX 黄金现货</span>
                    <span className="text-amber-700 dark:text-amber-400 font-bold">$2,680.50 (+0.35%)</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-stone-600 dark:text-stone-300">比特币 (BTC/USD)</span>
                    <span className="text-emerald-700 dark:text-emerald-400 font-bold">$64,250.00 (+1.20%)</span>
                  </div>
                </div>
              </div>

              {/* Widget 4: Editorial Colophon & Ethics */}
              <div className="p-4 bg-[#fbf9f5] dark:bg-[#0c0f16] border border-stone-200/80 dark:border-white/[0.06] text-[11px] font-serif text-stone-500 dark:text-stone-400 space-y-2">
                <div className="font-mono font-bold text-stone-800 dark:text-stone-200 uppercase text-[10px]">
                  EDITORIAL DISCIPLINE // 编委会学术守则
                </div>
                <p className="leading-relaxed">
                  本刊所载全部量化因子模型与宏观分析，均基于公开微观市场数据、学术预印本与生产级回测框架。代码 100% 本地开源，杜绝任何未经实证的过度拟合与黑盒推测。
                </p>
              </div>
            </aside>
          </div>
        </main>
      </div>

      {/* 4. DailyArt Publication Colophon Footer */}
      <Footer />
    </div>
  );
}
