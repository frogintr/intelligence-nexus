"use client";

import React, { useState } from "react";
import { Mail, Check, ArrowRight, ShieldCheck, Sparkles, Send } from "lucide-react";

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
    <section id="newsletter-dispatch" className="space-y-6">
      {/* DailyArt Section Masthead */}
      <div className="flex items-center justify-between border-b-2 border-stone-800 dark:border-stone-400 pb-2">
        <div>
          <div className="text-[10px] font-mono tracking-widest text-[#9e2a2b] dark:text-[#e5c378] uppercase font-bold">
            DEPARTMENT V · DAILY GAZETTE SUBSCRIPTION
          </div>
          <h2 className="text-xl sm:text-2xl font-serif font-black uppercase tracking-tight text-stone-900 dark:text-stone-50">
            晨报速递与投研内参订约
          </h2>
        </div>
        <span className="text-[11px] font-mono text-stone-400 hidden sm:inline-block">
          CST 07:00 DISPATCH
        </span>
      </div>

      {/* DailyArt Magazine Split Editorial Box */}
      <div className="bg-white dark:bg-[#12151e] border border-stone-200/90 dark:border-white/[0.08] p-6 sm:p-10 shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Editorial Proposition */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center space-x-2 px-2.5 py-0.5 border border-[#9e2a2b]/30 dark:border-[#c5a059]/30 bg-[#9e2a2b]/10 dark:bg-[#c5a059]/10 text-[#9e2a2b] dark:text-[#e5c378] text-[10px] font-mono font-bold uppercase tracking-widest">
              <Sparkles className="w-3 h-3" />
              <span>THE DAILY DISPATCH // 每日清晨推送</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif font-black text-stone-900 dark:text-white leading-tight">
              订阅 Intelligence Nexus 每日投研内参
            </h3>

            <p className="text-sm font-serif text-stone-600 dark:text-stone-300 leading-relaxed max-w-xl">
              每日北京时间 07:00（美东 19:00），将全球宏观流动性突变、前沿 AI 范式演进与装裱级量化策略代码准时呈递。剔除市场浮夸噪音，坚持学术级真实信噪比与完全开源交付。
            </p>

            {/* DailyArt Editorial Tags */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {["宏观流动性锚", "中美情绪标尺", "多智能体交易", "40位顶尖创作者", "可复现代码"].map((tag, idx) => (
                <span
                  key={idx}
                  className="text-[10px] font-mono px-2 py-0.5 bg-stone-100 dark:bg-white/[0.04] border border-stone-200/80 dark:border-white/[0.06] text-stone-700 dark:text-stone-300"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Clean Signup Form */}
          <div className="lg:col-span-5">
            <div className="p-6 bg-[#fbf9f5] dark:bg-[#0c0f16] border border-stone-200/90 dark:border-white/[0.08] space-y-4">
              {submitted ? (
                <div className="py-6 text-center space-y-2">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 flex items-center justify-center mx-auto">
                    <Check className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-stone-900 dark:text-white font-serif">
                    已成功列入每日速递名单
                  </h4>
                  <p className="text-xs text-stone-500 dark:text-stone-400 font-serif">
                    明日晨间 07:00，我们将为您发送最新一期投研简报。
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="block text-[10px] font-mono font-bold text-stone-700 dark:text-stone-300 uppercase tracking-widest">
                      电子邮箱地址 / EMAIL ADDRESS
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="researcher@fund.com"
                        className="w-full pl-9 pr-4 py-2 text-xs bg-white dark:bg-[#12151e] border border-stone-300 dark:border-white/[0.1] text-stone-900 dark:text-white placeholder:text-stone-400 focus:outline-none focus:border-[#9e2a2b] dark:focus:border-[#c5a059] transition-all font-mono"
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
                      className="mt-0.5 text-[#9e2a2b] focus:ring-[#9e2a2b] cursor-pointer"
                    />
                    <label
                      htmlFor="newsletter-agreed"
                      className="text-[10px] text-stone-500 dark:text-stone-400 font-serif leading-tight cursor-pointer"
                    >
                      同意接收 Intelligence Nexus 每日清晨推送（随时可退订），严格遵守学术规范。
                    </label>
                  </div>

                  {/* DailyArt Signature Burgundy CTA Button */}
                  <button
                    type="submit"
                    disabled={!agreed}
                    className="w-full flex items-center justify-center space-x-2 py-2.5 px-4 bg-[#9e2a2b] hover:bg-[#852223] text-white font-serif font-bold text-xs tracking-wider uppercase transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
                  >
                    <span>即刻加入每日晨报</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>

                  <div className="flex items-center justify-center space-x-2 text-[10px] font-mono text-stone-400 pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span>无垃圾邮件 · 零商业推广 · 100% 硬核交付</span>
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
