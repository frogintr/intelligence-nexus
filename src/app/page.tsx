import fs from "fs";
import path from "path";
import { DailyDossier } from "../types";
import { Header } from "../components/Header";
import { MacroAnchors } from "../components/MacroAnchors";
import { SentimentGauges } from "../components/SentimentGauges";
import { AiFrontiers } from "../components/AiFrontiers";
import { QuantAlpha } from "../components/QuantAlpha";
import { CreatorsView } from "../components/CreatorsView";
import { MarketPanoramic } from "../components/MarketPanoramic";
import { NewsletterSection } from "../components/NewsletterSection";
import { Footer } from "../components/Footer";

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
        {/* DailyArt Gazette Masthead */}
        <Header date={dossier.date} />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
          {/* Department 1: Executive Vision & 4 Macro Pricing Anchors */}
          <MacroAnchors
            oneLiner={dossier.oneLinerSummary}
            anchors={dossier.macroAnchors}
          />

          {/* Department 2: Dual Sentiment Gauges (中美分立情绪标尺) */}
          <SentimentGauges sentiment={dossier.sentiment} />

          {/* Department 3: AI Frontiers & Multi-Agent Industrial Case Studies */}
          <AiFrontiers updates={dossier.aiUpdates} />

          {/* Department 4: Quant Alpha Research & Gallery-Framed Code Artwork */}
          <QuantAlpha research={dossier.quantResearch} />

          {/* Department 5: Unified Creator Radar, 4-Quadrant Matrix, 30s Hook & 4-Stage Roadmap */}
          <CreatorsView />

          {/* Department 6: Market Panoramic (US/China Stocks & Commodities) */}
          <MarketPanoramic
            stocks={dossier.stocks}
            commodities={dossier.commodities}
          />

          {/* Department 7: DailyArt Split Newsletter Subscription Gazette */}
          <NewsletterSection />
        </main>
      </div>

      {/* DailyArt Publication Colophon Footer */}
      <Footer />
    </div>
  );
}
