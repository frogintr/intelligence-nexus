"use client";

import React, { useState } from "react";
import { Mail, Check, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !agreed) return;
    setSubmitted(true);
    setTimeout(() => {
      setEmail("");
    }, 3000);
  };

  return (
    <section id="newsletter-dispatch" className="my-16">
      {/* DailyArt Magazine Split Editorial Box */}
      <div className="relative overflow-hidden rounded-2xl border border-stone-200/90 dark:border-white/[0.08] bg-gradient-to-br from-[#f6f4ee] via-[#fbfaf7] to-[#f4f1ea] dark:from-[#0f121a] dark:via-[#0b0e14] dark:to-[#131722] p-8 sm:p-12 shadow-sm">
        {/* Subtle decorative background watermark */}
        <div className="absolute -right-10 -bottom-10 w-80 h-80 rounded-full bg-[#9e2a2b]/5 dark:bg-[#c5a059]/5 blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          {/* Left Column: Editorial Proposition */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-[#9e2a2b]/30 dark:border-[#c5a059]/30 bg-[#9e2a2b]/10 dark:bg-[#c5a059]/10 text-[#9e2a2b] dark:text-[#e5c378] text-[11px] font-mono font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>DAILY INTELLIGENCE GAZETTE · 每日清晨推送</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-900 dark:text-white font-serif tracking-tight leading-tight">
              订阅 Intelligence Nexus 每日投研内参
            </h3>

            <p className="text-sm text-stone-600 dark:text-stone-300 font-serif leading-relaxed max-w-xl">
              每日北京时间 07:00（美东 19:00），将全球宏观流动性突变、前沿 AI 范式演进与装裱级量化策略代码准时呈递。剔除市场浮夸噪音，坚持学术级真实信噪比与完全开源交付。
            </p>

            {/* DailyArt Editorial Tags */}
            <div className="flex flex-wrap gap-2 pt-1">
              {["宏观流动性锚", "中美情绪标尺", "多智能体交易", "40位顶尖创作者", "可复现代码"].map((tag, idx) => (
                <span
                  key={idx}
                  className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-stone-100 dark:bg-white/[0.04] border border-stone-200/80 dark:border-white/[0.06] text-stone-700 dark:text-stone-300"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: DailyArt Clean Signup Form */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-7 rounded-xl bg-white dark:bg-[#121622] border border-stone-200/90 dark:border-white/[0.08] shadow-sm space-y-4">
              {submitted ? (
                <div className="py-6 text-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-stone-900 dark:text-white font-serif">
                    已成功列入每日速递名单
                  </h4>
                  <p className="text-xs text-stone-500 dark:text-stone-400 font-serif">
                    明日晨间 07:00，我们将为您发送最新一期 Intelligence Nexus 投研简报。
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono font-bold text-stone-700 dark:text-stone-300 uppercase tracking-wider">
                      电子邮箱地址 / Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="yourname@domain.com"
                        className="w-full pl-10 pr-4 py-2.5 rounded-lg text-xs sm:text-sm bg-stone-50 dark:bg-white/[0.03] border border-stone-200 dark:border-white/[0.08] text-stone-900 dark:text-white placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#9e2a2b] dark:focus:ring-[#c5a059] transition-all"
                      />
                    </div>
                  </div>

                  {/* DailyArt Terms & Policy Agreement */}
                  <div className="flex items-start space-x-2 pt-1">
                    <input
                      type="checkbox"
                      id="newsletter-agreed"
                      checked={agreed}
                      onChange={(e) => setAgreed(e.target.checked)}
                      className="mt-0.5 rounded border-stone-300 text-[#9e2a2b] focus:ring-[#9e2a2b] dark:bg-stone-900 dark:border-stone-700 cursor-pointer"
                    />
                    <label
                      htmlFor="newsletter-agreed"
                      className="text-[11px] text-stone-500 dark:text-stone-400 font-serif leading-tight cursor-pointer"
                    >
                      同意接收 Intelligence Nexus 每日晨间智库推送（随时可一键退订），遵守内容开源学术规范。
                    </label>
                  </div>

                  {/* DailyArt Signature Burgundy CTA Button */}
                  <button
                    type="submit"
                    disabled={!agreed}
                    className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-lg bg-[#9e2a2b] hover:bg-[#852223] active:bg-[#6e1c1d] text-white font-sans font-bold text-xs shadow-md transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
                  >
                    <span>即刻加入每日晨报</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>

                  <div className="flex items-center justify-center space-x-2 text-[10px] font-mono text-stone-400 pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span>无垃圾邮件 · 零商业推广 · 100% 硬核投研交付</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
