"use client";

import React, { useState, useEffect } from "react";
import { DailyDossier } from "../types";
import { Header } from "./Header";
import { CoverDepartment } from "./departments/CoverDepartment";
import { AiDepartment } from "./departments/AiDepartment";
import { QuantDepartment } from "./departments/QuantDepartment";
import { CreatorsDepartment } from "./departments/CreatorsDepartment";
import { PlaybookDepartment } from "./departments/PlaybookDepartment";
import { MarketsDepartment } from "./departments/MarketsDepartment";
import { GazetteDepartment } from "./departments/GazetteDepartment";
import { Footer } from "./Footer";

interface Props {
  dossier: DailyDossier;
}

export function MagazineShell({ dossier }: Props) {
  const [activeDepartment, setActiveDepartment] = useState<string>("cover");

  // Sync with URL Hash on Mount & Change
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (
        [
          "cover",
          "ai",
          "quant",
          "creators",
          "playbook",
          "markets",
          "gazette",
        ].includes(hash)
      ) {
        setActiveDepartment(hash);
      }
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const handleSelectDepartment = (dept: string) => {
    setActiveDepartment(dept);
    window.history.pushState(null, "", `#${dept}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const departmentClass =
    {
      cover: "dept-cover",
      ai: "dept-ai",
      quant: "dept-quant",
      creators: "dept-creators",
      playbook: "dept-playbook",
      markets: "dept-markets",
      gazette: "dept-gazette",
    }[activeDepartment] || "dept-cover";

  return (
    <div
      className={`min-h-screen ${departmentClass} text-[var(--foreground)] flex flex-col justify-between selection:bg-[#9e2a2b]/20 selection:text-stone-900 dark:selection:text-white transition-colors duration-300`}
    >
      <div>
        {/* DailyArt Gazette Masthead with Interactive Department Switcher */}
        <Header
          date={dossier.date}
          activeDepartment={activeDepartment}
          onSelectDepartment={handleSelectDepartment}
        />

        {/* Expansive, Breathable DailyArt Department Canvas (max-w-[1720px]) */}
        <main className="max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-8 sm:py-12">
          {activeDepartment === "cover" && (
            <CoverDepartment
              dossier={dossier}
              onSelectDepartment={handleSelectDepartment}
            />
          )}

          {activeDepartment === "ai" && (
            <AiDepartment
              updates={dossier.aiUpdates}
              onBackToCover={() => handleSelectDepartment("cover")}
            />
          )}

          {activeDepartment === "quant" && (
            <QuantDepartment
              research={dossier.quantResearch}
              onBackToCover={() => handleSelectDepartment("cover")}
            />
          )}

          {activeDepartment === "creators" && (
            <CreatorsDepartment
              onBackToCover={() => handleSelectDepartment("cover")}
            />
          )}

          {activeDepartment === "playbook" && (
            <PlaybookDepartment
              onBackToCover={() => handleSelectDepartment("cover")}
            />
          )}

          {activeDepartment === "markets" && (
            <MarketsDepartment
              stocks={dossier.stocks}
              commodities={dossier.commodities}
              onBackToCover={() => handleSelectDepartment("cover")}
            />
          )}

          {activeDepartment === "gazette" && (
            <GazetteDepartment
              onBackToCover={() => handleSelectDepartment("cover")}
            />
          )}
        </main>
      </div>

      {/* DailyArt Publication Colophon Footer */}
      <Footer />
    </div>
  );
}
