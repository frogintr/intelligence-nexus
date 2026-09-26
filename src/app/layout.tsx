import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Intelligence Nexus | 全球宏观流动性与前沿 AI 投研枢纽",
  description: "高密度、高审美个人专属智能情报与投研跟踪站。聚焦全球宏观流动性、前沿 AI 范式演进、量化 Alpha 因子挖掘、中美股期市场复盘。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen bg-[#08090d] text-slate-100 antialiased selection:bg-[#c5a059]/30 selection:text-[#f8fafc]">
        {children}
      </body>
    </html>
  );
}
