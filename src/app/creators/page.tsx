import type { Metadata } from "next";
import { Header } from "../../components/Header";
import { CreatorsView } from "../../components/CreatorsView";
import { Footer } from "../../components/Footer";

export const metadata: Metadata = {
  title: "全球 YouTube AI 与量化交易创作者雷达 | Intelligence Nexus",
  description:
    "精选 40 位全球顶尖 AI 深度剖析与量化交易 YouTube 创作者图谱，解构 4 象限选题矩阵、前 30 秒留存黄金 Hook 与 4 阶量化工程跃迁蓝图。",
};

export default function CreatorsPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] flex flex-col justify-between selection:bg-[#c5a059]/30 selection:text-slate-900 dark:selection:text-white transition-colors duration-200">
      <div>
        <Header />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <CreatorsView />
        </main>
      </div>

      <Footer />
    </div>
  );
}
