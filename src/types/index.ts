export interface MacroAnchors {
  us10yYield: string;
  dxyIndex: string;
  usdcnh: string;
  brentOil: string;
}

export interface SentimentData {
  score: number;
  level: string;
  details: string;
  metrics: Record<string, string>;
}

export interface AiUpdate {
  id: string;
  title: string;
  tag: string;
  category: "CASE" | "BREAKTHROUGH" | "TREND";
  summary: string;
  detailedAnalysis?: string;
  benchmarkMetrics?: Record<string, string>;
  sourceUrl?: string;
  youtubeId?: string;
  imageUrl?: string;
  takeaways: string[];
}

export interface QuantResearch {
  id: string;
  title: string;
  authors?: string;
  factorCategory: string;
  coreHypothesis: string;
  mathFormula?: string;
  backtestSummary: {
    sharpe?: string;
    sharpeRatio?: string;
    annualReturn: string;
    maxDrawdown: string;
    informationRatio?: string;
    signalHorizon?: string;
    turnover?: string;
  };
  sampleCode: string;
  paperUrl?: string;
}

export interface StockMarket {
  name: string;
  change: string;
  isPositive: boolean;
  catalyst: string;
  volumeOrTrend: string;
}

export interface CommodityItem {
  sector: string;
  name: string;
  price: string;
  change: string;
  isPositive: boolean;
  supplyDemandSummary: string;
}

export interface DailyDossier {
  date: string;
  oneLinerSummary: string;
  macroAnchors: MacroAnchors;
  sentiment: {
    us: SentimentData;
    china: SentimentData;
  };
  aiUpdates: AiUpdate[];
  quantResearch: QuantResearch[];
  stocks: {
    us: StockMarket[];
    china: StockMarket[];
  };
  commodities: CommodityItem[];
}
