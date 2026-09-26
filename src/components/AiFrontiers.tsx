import React from "react";
import { AiUpdate } from "../types";
import { Cpu, CheckCircle2, ExternalLink } from "lucide-react";

interface Props {
  updates: AiUpdate[];
}

export function AiFrontiers({ updates }: Props) {
  return (
    <section className="my-12">
      <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-200/80 dark:border-white/[0.08]">
        <div className="flex items-center space-x-3">
          <div className="p-1.5 rounded-lg bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20">
            <Cpu className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white uppercase tracking-wider font-sans">
              AI FRONTIERS &amp; CASE STUDIES // 前沿范式与工业级智能体实践
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-serif italic">
              多智能体闭环、端侧推理量化与长程决策沙箱实证
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {updates.map((item) => (
          <article
            key={item.id}
            className="group relative overflow-hidden rounded-2xl bg-white dark:bg-[#11141e] border border-slate-200/80 dark:border-white/[0.08] hover:border-slate-300 dark:hover:border-white/[0.2] transition-all flex flex-col justify-between p-6 sm:p-7 shadow-card-light dark:shadow-xl"
          >
            <div>
              {/* Category Badges & Header */}
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-[#997328]/10 dark:bg-[#c5a059]/10 text-[#997328] dark:text-[#e5c378] border border-[#997328]/25 dark:border-[#c5a059]/30">
                  {item.tag}
                </span>
                <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500">
                  {item.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 font-sans leading-snug group-hover:text-[#997328] dark:group-hover:text-white transition-colors mb-3">
                {item.title}
              </h3>

              {/* Summary */}
              <p className="text-sm text-slate-600 dark:text-slate-300 font-serif leading-relaxed mb-5">
                {item.summary}
              </p>

              {/* YouTube Rich Embed if available */}
              {item.youtubeId && (
                <div className="mb-6 rounded-xl overflow-hidden border border-slate-200 dark:border-white/[0.1] bg-black aspect-video relative group/video shadow-sm">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube-nocookie.com/embed/${item.youtubeId}`}
                    title={item.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}

              {/* Structured Key Takeaways */}
              <div className="space-y-2.5 bg-slate-50/80 dark:bg-black/30 p-4 rounded-xl border border-slate-200/60 dark:border-white/[0.04]">
                <span className="block text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold mb-2">
                  // KEY TAKEAWAYS &amp; 落地启示
                </span>
                {item.takeaways.map((takeaway, idx) => (
                  <div key={idx} className="flex items-start space-x-2 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                    <span>{takeaway}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer Source Link */}
            {item.sourceUrl && (
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400">
                <span>VERIFIED SOURCE</span>
                <a
                  href={item.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#997328] dark:text-[#e5c378] font-bold hover:underline space-x-1"
                >
                  <span>查看技术来源</span>
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
