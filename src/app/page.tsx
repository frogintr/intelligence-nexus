import fs from "fs";
import path from "path";
import { DailyDossier } from "../types";
import { MagazineShell } from "../components/MagazineShell";

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
  return <MagazineShell dossier={dossier} />;
}
