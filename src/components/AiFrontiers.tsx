import React from "react";
import { AiUpdate } from "../types";
import { Cpu, CheckCircle2, ExternalLink, Sparkles, BookOpen } from "lucide-react";

interface Props {
  updates: AiUpdate[];
}

export function AiFrontiers({ updates }: Props) {
  return (
    <section id="ai-frontiers" className="my-16">
      {/* DailyArt Section Header */}
      <div className="flex items-center justify-between mb-8 pb-3 border-b border-stone-200/90 dark:border-white/[0.08]">
        <div className="flex items-center space-x-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#9e2a2b] dark:bg-[#c5a059]" />
          <div>
            <h2 className="text-base sm:text-lg font-bold text-stone-900 dark:text-white uppercase tracking-wider font-serif">
              AI FRONTIERS // 前沿范式与工业级智能体实践
            </h2>
            <p className="text-xs text-stone-500 dark:text-stone-400 font-serif italic mt-0.5">
              多智能体协作闭环、端侧推理量化与长程决策沙箱实证
            </p>
          </div>
        </div>

        <span className="text-[11px] font-mono text-stone-400 hidden sm:inline-block">
          CURATED CASES · ISSUE 042
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {updates.map((item) => (
          <article
            key={item.id}
            className="group relative overflow-hidden rounded-2xl bg-white dark:bg-[#0c0f17] border border-stone-200/90 dark:border-white/[0.08] hover:border-[#9e2a2b]/50 dark:hover:border-[#c5a059]/50 transition-all flex flex-col justify-between p-6 sm:p-8 shadow-sm hover:shadow-md"
          >
            <div>
              {/* DailyArt Signature Category Pill & Metadata */}
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-[#9e2a2b] text-white shadow-xs">
                  {item.tag}
                </span>
                <span className="text-[11px] font-mono text-stone-400">
                  {item.category}
                </span>
              </div>

              {/* High-Contrast Editorial Serif Headline */}
              <h3 className="text-lg sm:text-2xl font-bold text-stone-900 dark:text-white font-serif leading-snug group-hover:text-[#9e2a2b] dark:group-hover:text-[#e5c378] transition-colors mb-3">
                {item.title}
              </h3>

              {/* Editorial Summary */}
              <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-serif leading-relaxed mb-6">
                {item.summary}
              </p>

              {/* YouTube Rich Embed if available, with DailyArt Museum Framing */}
              {item.youtubeId && (
                <div className="mb-6 rounded-xl overflow-hidden border border-stone-200 dark:border-white/[0.1] bg-black aspect-video relative shadow-sm">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube-nocookie.com/embed/${item.youtubeId}`}
                    title={item.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              )}

              {/* Key Takeaways with DailyArt Checkpoints */}
              <div className="space-y-2.5 pt-4 border-t border-stone-100 dark:border-white/[0.04]">
                <div className="text-[10px] font-mono uppercase tracking-wider text-stone-400 mb-2 flex items-center">
                  <BookOpen className="w-3 h-3 mr-1 text-[#9e2a2b] dark:text-[#c5a059]" />
                  核心实战工程结论
                </div>
                {item.takeaways.map((takeaway, idx) => (
                  <div key={idx} className="flex items-start space-x-2 text-xs font-serif text-stone-700 dark:text-stone-300 leading-relaxed">
                    <span className="text-[#9e2a2b] dark:text-[#c5a059] font-bold mt-0.5">•</span>
                    <span>{takeaway}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Read Time / Colophon */}
            <div className="mt-6 pt-4 border-t border-stone-100 dark:border-white/[0.04] flex items-center justify-between text-[11px] font-mono text-stone-400">
              <span>READING TIME: ~4 MINS</span>
              <span className="text-[#9e2a2b] dark:text-[#e5c378] font-bold flex items-center space-x-1">
                <span>CASE STUDY VERIFIED</span>
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
