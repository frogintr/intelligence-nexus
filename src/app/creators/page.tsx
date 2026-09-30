import type { Metadata } from "next";
import { Header } from "../../components/Header";
import { CreatorsDepartment } from "../../components/departments/CreatorsDepartment";
import { Footer } from "../../components/Footer";

export const metadata: Metadata = {
  title: "40位创作者学术馆藏 | Intelligence Nexus",
  description:
    "精选 40 位全球顶尖 AI 深度剖析与量化交易 YouTube 创作者图谱，解构 4 象限选题矩阵、前 30 秒留存黄金 Hook 与 4 阶量化工程跃迁蓝图。",
};

export default function CreatorsPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] flex flex-col justify-between selection:bg-[#e50914]/20 selection:text-stone-900 dark:selection:text-white transition-colors duration-200">
      <div>
        <Header activeDepartment="creators" />

        <main className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 py-10">
          <CreatorsDepartment />
        </main>
      </div>

      <Footer />
    </div>
  );
}
