"use client";

import React, { useState } from "react";
import { ArrowLeft, Mail, Check, ArrowRight, ShieldCheck, Sparkles, Send } from "lucide-react";

interface Props {
  onBackToCover: () => void;
}

export function GazetteDepartment({ onBackToCover }: Props) {
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
    <div className="space-y-16">
      {/* Top Department Breadcrumbs */}
      <div className="flex items-center justify-between border-b border-stone-200 dark:border-white/[0.08] pb-4">
        <button
          onClick={onBackToCover}
          className="inline-flex items-center space-x-2 text-sm font-serif text-[#9e2a2b] dark:text-[#e5c378] font-bold hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>返回封面精选导读 (Back to Cover)</span>
        </button>
        <span className="text-xs font-mono text-stone-400">
          DEPARTMENT VII OF VII · SUBSCRIPTION DISPATCH
        </span>
      </div>

      {/* Monumental Department Header */}
      <div className="border-b-2 border-stone-800 dark:border-stone-400 pb-6">
        <div className="text-xs font-mono tracking-widest text-[#78350f] dark:text-[#d97706] uppercase font-bold mb-2">
          DEPARTMENT VII · DAILY DISPATCH GAZETTE &amp; RESEARCH PRIVILEGES
        </div>
        <h2 className="text-4xl sm:text-6xl font-serif font-black tracking-tight text-stone-900 dark:text-white uppercase leading-tight">
          晨报速递与投研内参订约
        </h2>
        <p className="mt-3 text-base sm:text-lg font-serif italic text-stone-700 dark:text-stone-300 max-w-4xl leading-relaxed">
          每日北京时间 07:00（美东 19:00），将全球宏观流动性突变、前沿 AI 范式演进与装裱级量化策略代码准时呈递。剔除浮夸噪音，坚持学术级真实信噪比与完全开源交付。
        </p>
      </div>

      {/* DailyArt Magazine Split Editorial Box */}
      <div className="bg-white dark:bg-[#18181d] border-2 border-stone-200/90 dark:border-white/[0.08] p-8 sm:p-14 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Editorial Proposition */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 border border-[#78350f]/30 dark:border-[#d97706]/30 bg-[#78350f]/10 dark:bg-[#d97706]/10 text-[#78350f] dark:text-[#d97706] text-xs font-mono font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE DAILY DISPATCH // 每日清晨推送</span>
            </div>

            <h3 className="text-3xl sm:text-5xl font-serif font-black text-stone-900 dark:text-white leading-tight">
              订阅 Intelligence Nexus 每日投研内参
            </h3>

            <p className="text-base font-serif text-stone-600 dark:text-stone-300 leading-relaxed">
              以 DailyArt 艺术期刊标准装裱的代码与宏观复盘，不含任何商业推广软文。专为独立对冲基金交易员、AI 算法工程师及宏观研究员定制。
            </p>

            {/* DailyArt Editorial Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {[
                "10Y 美债贴现率",
                "离岸人民币汇率",
                "中美情绪分立标尺",
                "MoE 混合专家实测",
                "多智能体实盘交易",
                "40位博主核心代码",
              ].map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs font-mono px-3 py-1 bg-stone-100 dark:bg-white/[0.04] border border-stone-200/80 dark:border-white/[0.06] text-stone-700 dark:text-stone-300"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Clean Signup Form */}
          <div className="lg:col-span-5">
            <div className="p-8 bg-[#fbf9f5] dark:bg-[#0c0f16] border border-stone-200/90 dark:border-white/[0.08] space-y-5">
              {submitted ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-stone-900 dark:text-white font-serif">
                    已成功列入每日速递名单
                  </h4>
                  <p className="text-sm text-stone-500 dark:text-stone-400 font-serif">
                    明日晨间 07:00，我们将为您发送最新一期投研简报。
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <label className="block text-xs font-mono font-bold text-stone-700 dark:text-stone-300 uppercase tracking-widest">
                      电子邮箱地址 / EMAIL ADDRESS
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="researcher@hedgefund.com"
                        className="w-full pl-10 pr-4 py-3 text-sm bg-white dark:bg-[#12151e] border border-stone-300 dark:border-white/[0.1] text-stone-900 dark:text-white placeholder:text-stone-400 focus:outline-none focus:border-[#9e2a2b] dark:focus:border-[#c5a059] transition-all font-mono"
                      />
                    </div>
                  </div>

                  {/* DailyArt Terms & Policy Agreement */}
                  <div className="flex items-start space-x-2.5 pt-1">
                    <input
                      type="checkbox"
                      id="gazette-agreed"
                      checked={agreed}
                      onChange={(e) => setAgreed(e.target.checked)}
                      className="mt-1 text-[#9e2a2b] focus:ring-[#9e2a2b] cursor-pointer"
                    />
                    <label
                      htmlFor="gazette-agreed"
                      className="text-xs text-stone-600 dark:text-stone-400 font-serif leading-relaxed cursor-pointer"
                    >
                      同意接收 Intelligence Nexus 每日清晨推送（随时可退订），严格遵守开源与学术规范。
                    </label>
                  </div>

                  {/* DailyArt Signature Burgundy CTA Button */}
                  <button
                    type="submit"
                    disabled={!agreed}
                    className="w-full flex items-center justify-center space-x-2 py-3 px-6 bg-[#9e2a2b] hover:bg-[#852223] text-white font-serif font-bold text-sm tracking-wider uppercase transition-all disabled:opacity-50 disabled:cursor-not-allowed group shadow-sm"
                  >
                    <span>即刻加入每日晨报</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>

                  <div className="flex items-center justify-center space-x-2 text-xs font-mono text-stone-400 pt-1">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span>无垃圾邮件 · 零商业推广 · 100% 硬核交付</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
