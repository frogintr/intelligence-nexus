import React from "react";
import { AiUpdate } from "../types";
import { BookOpen, ExternalLink, Sparkles, Terminal } from "lucide-react";

interface Props {
  updates: AiUpdate[];
}

export function AiFrontiers({ updates }: Props) {
  return (
    <section id="ai-frontiers" className="space-y-6">
      {/* DailyArt Section Masthead */}
      <div className="flex items-center justify-between border-b-2 border-stone-800 dark:border-stone-400 pb-2">
        <div>
          <div className="text-[10px] font-mono tracking-widest text-[#9e2a2b] dark:text-[#e5c378] uppercase font-bold">
            DEPARTMENT I · FRONTIER AI REVOLUTION
          </div>
          <h2 className="text-xl sm:text-2xl font-serif font-black uppercase tracking-tight text-stone-900 dark:text-stone-50">
            前沿范式与工业级智能体实践
          </h2>
        </div>
        <span className="text-[11px] font-mono text-stone-400 hidden sm:inline-block">
          CURATED CASE STUDIES
        </span>
      </div>

      {/* Editorial Stories Stream */}
      <div className="space-y-8">
        {updates.map((item, idx) => (
          <article
            key={item.id}
            className="bg-white dark:bg-[#12151e] border border-stone-200/90 dark:border-white/[0.08] p-6 sm:p-8 transition-colors"
          >
            {/* Metadata Header */}
            <div className="flex items-center justify-between border-b border-stone-100 dark:border-white/[0.04] pb-3 mb-4">
              <div className="flex items-center space-x-2">
                <span className="px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-widest bg-[#9e2a2b] text-white font-bold">
                  {item.tag}
                </span>
                <span className="text-xs font-serif text-stone-500 dark:text-stone-400">
                  {item.category}
                </span>
              </div>
              <span className="text-[11px] font-mono text-stone-400">
                CASE #{String(idx + 1).padStart(2, "0")}
              </span>
            </div>

            {/* Editorial Headline */}
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 dark:text-white leading-snug mb-3">
              {item.title}
            </h3>

            {/* Narrative Paragraph */}
            <p className="font-serif text-sm text-stone-700 dark:text-stone-300 leading-relaxed mb-6">
              {item.summary}
            </p>

            {/* YouTube Embed Framed in Gallery Inset */}
            {item.youtubeId && (
              <div className="my-6 border border-stone-300/80 dark:border-white/[0.1] bg-black aspect-video relative shadow-inner">
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

            {/* Key Engineering Takeaways in Museum Placard Box */}
            <div className="p-4 sm:p-5 bg-[#fbf9f5] dark:bg-[#0c0f16] border border-stone-200/80 dark:border-white/[0.06] space-y-2.5">
              <div className="text-[10px] font-mono uppercase tracking-widest text-[#9e2a2b] dark:text-[#e5c378] font-bold flex items-center space-x-1.5 mb-2">
                <BookOpen className="w-3.5 h-3.5" />
                <span>CORE ENGINEERING VERIFICATION // 核心实战工程结论</span>
              </div>
              {item.takeaways.map((takeaway, tIdx) => (
                <div key={tIdx} className="flex items-start space-x-2 text-xs font-serif text-stone-700 dark:text-stone-300 leading-relaxed">
                  <span className="text-[#9e2a2b] dark:text-[#e5c378] font-bold mt-0.5">•</span>
                  <span>{takeaway}</span>
                </div>
              ))}
            </div>

            {/* Article Footer Bar */}
            <div className="mt-5 pt-3 border-t border-stone-100 dark:border-white/[0.04] flex items-center justify-between text-[11px] font-mono text-stone-400">
              <span>EST. READING: ~4 MINS</span>
              <span className="text-[#9e2a2b] dark:text-[#e5c378] font-semibold">
                ACADEMIC PROOF VERIFIED
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
