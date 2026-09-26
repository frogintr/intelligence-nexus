import fs from "fs";
import path from "path";
import { DailyDossier } from "../types";
import { Header } from "../components/Header";
import { MacroAnchors } from "../components/MacroAnchors";
import { SentimentGauges } from "../components/SentimentGauges";
import { AiFrontiers } from "../components/AiFrontiers";
import { QuantAlpha } from "../components/QuantAlpha";
import { MarketPanoramic } from "../components/MarketPanoramic";
import { Footer } from "../components/Footer";

function getLatestDossier(): DailyDossier {
  const dataDir = path.join(process.cwd(), "data", "daily");
  
  // Default fallback if directory not yet created
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
    <div className="min-h-screen bg-[#090b10] flex flex-col justify-between selection:bg-[#c5a059]/30 selection:text-white">
      <div>
        <Header date={dossier.date} />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Executive Vision & 4 Macro Pricing Anchors */}
          <MacroAnchors
            oneLiner={dossier.oneLinerSummary}
            anchors={dossier.macroAnchors}
          />

          {/* Dual Sentiment Gauges (中美分立情绪) */}
          <SentimentGauges sentiment={dossier.sentiment} />

          {/* AI Frontiers & Multi-Agent Industrial Case Studies */}
          <AiFrontiers updates={dossier.aiUpdates} />

          {/* Quant Alpha Research & Gallery-Framed Code Artwork */}
          <QuantAlpha research={dossier.quantResearch} />

          {/* Market Panoramic (US/China Stocks & Commodities) */}
          <MarketPanoramic
            stocks={dossier.stocks}
            commodities={dossier.commodities}
          />
        </main>
      </div>

      <Footer />
    </div>
  );
}
