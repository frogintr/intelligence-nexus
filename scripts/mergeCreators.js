const fs = require('fs');
const path = require('path');

const { CREATORS_DATA } = require('C:/Users/winbox-lab/antigravity/web_portal/creators_data.js');

// Map category to track and tier
const enriched = CREATORS_DATA.map((c) => {
  const isAi = c.category.startsWith('ai');
  const track = isAi ? "AI 深度解读" : "AI 量化交易";
  
  let tierLabel = "实战派黑马";
  if (c.category === "ai-top") tierLabel = "头部权威";
  else if (c.category === "ai-rising" || c.category === "ai-trend") tierLabel = "新锐先锋";
  else if (c.category === "quant-classic") tierLabel = "代码基建";
  else if (c.category === "quant-rising") tierLabel = "实战派黑马";

  return {
    ...c,
    channelUrl: c.youtubeUrl,
    track,
    tierLabel,
    positioning: c.profile,
    viralTopics: c.videos.map(v => v.title)
  };
});

const tsCode = `export interface VideoBreakdown {
  title: string;
  theme: string;
  keyInsights: string;
}

export interface ActionableTakeaways {
  forTrading: string;
  forCreator: string;
}

export interface Creator {
  id: string;
  name: string;
  handle: string;
  youtubeUrl: string;
  channelUrl: string;
  category: "ai-top" | "ai-rising" | "ai-trend" | "quant-classic" | "quant-rising" | string;
  categoryLabel: string;
  badgeColor?: string;
  tagline: string;
  tier: string;
  tierLabel: "头部权威" | "新锐先锋" | "代码基建" | "实战派黑马";
  track: "AI 深度解读" | "AI 量化交易";
  tags: string[];
  profile: string;
  positioning: string;
  contentStyle: string;
  videos: VideoBreakdown[];
  viralTopics: string[];
  hookAnalysis: string;
  scriptFramework: string;
  actionableTakeaways: ActionableTakeaways;
}

export const CREATORS_DATA: Creator[] = ${JSON.stringify(enriched, null, 2)};

export const CONTENT_MODELS = {
  quadrants: [
    {
      title: "极限实测型 (Curiosity / Proof)",
      example: "我让 Claude 3.7 帮我实盘跑了 7 天，结果居然...",
      badge: "高点击率",
      desc: "直接展示真实盈亏曲线（PnL）或运行实况，用悬念打破观众防线。"
    },
    {
      title: "降维重塑型 (Disruption / Efficiency)",
      example: "还在手动写交易策略？用 Cursor+RBI 框架 10 分钟生成并回测",
      badge: "高收藏量",
      desc: "展示生产力暴增的 AI 工作流，把 3 周的手工活压缩至 10 分钟。"
    },
    {
      title: "防坑打假型 (Authority / Counter-Intuition)",
      example: "揭秘 99% 回测都在造假：过度拟合（Overfitting）的 3 个致命陷阱",
      badge: "高权威度",
      desc: "用学术与统计实据戳破市场神话，建立极高专业信任。"
    },
    {
      title: "开箱开源型 (High Perceived Value)",
      example: "全网首发！开源我自用的多智能体加密货币高频监控 Bot（附 GitHub）",
      badge: "高裂变率",
      desc: "代码级无保留交付，通过 GitHub 沉淀铁杆技术粉丝与社群。"
    }
  ],
  hooks: [
    {
      mode: "模式 A：冲突 + 悬念 + 成果即刻展示",
      creators: "代表博主：Moon Dev / DaviddTech",
      timeline: [
        {
          time: "00:00 - 00:05 (视觉冲击)",
          label: "实时实盘证明",
          script: "屏幕直接展示实时 PnL 盈亏图表或正在全速滚动的代码终端，画外音：'在过去 7 天里，我没有手动下过一次单，全部交给这个由 Claude 编写的自主交易智能体。'"
        },
        {
          time: "00:06 - 00:15 (核心痛点)",
          label: "直击低效繁琐",
          script: "'传统写策略，你要调试三个星期的接口和回测；但如果我告诉你，只要输入一段伪代码，AI 就能自动完成回测、风险对冲，甚至写好熔断脚本呢？'"
        },
        {
          time: "00:16 - 00:30 (价值契约)",
          label: "开源免费交付",
          script: "'今天这期视频，我不卖任何课，直接打开 VS Code，从 0 到 1 带你克隆我的完整系统，所有代码在视频下方 GitHub 免费自取。准备好，我们开始。'"
        }
      ]
    },
    {
      mode: "模式 B：思维颠覆 + 认知重构",
      creators: "代表博主：AI Explained / Part Time Larry",
      timeline: [
        {
          time: "00:00 - 00:10 (颠覆常识)",
          label: "戳破行业伪装",
          script: "'大部分人在用 Python 跑回测时，第一步就彻底做错了。他们用循环遍历 Pandas 行，耗时 2 个小时，却得出了一个完美过拟合的假曲线。'"
        },
        {
          time: "00:11 - 00:25 (硬核方案)",
          label: "降维算法提速",
          script: "'对冲基金从不这么干。今天我会用 VectorBT 和纯向量化运算，把 10,000 次参数优化的时间压缩到 8 秒以内，并教你如何用蒙特卡洛模拟戳破虚假繁荣。'"
        }
      ]
    }
  ],
  retentionSteps: [
    {
      step: "01",
      title: "问题暴露 (Problem)",
      desc: "直指人工盯盘情绪化、API 频繁断连、或者循环跑回测慢如蜗牛的核心痛点。"
    },
    {
      step: "02",
      title: "AI 协作实录 (AI in Action)",
      desc: "录制与 Cursor / Claude 真实交互纠错的过程，展示 AI 报错后的自愈（Self-healing）能力。"
    },
    {
      step: "03",
      title: "回测与压力测试 (Stress Test)",
      desc: "展示夏普比率、最大回撤，务必扣除滑点与真实手续费，专业度倍增。"
    },
    {
      step: "04",
      title: "硬性风控与熔断器 (Kill-Switch)",
      desc: "代码级安全底线（如单日亏损超 2% 自动注销 API 并强制平仓）。"
    },
    {
      step: "05",
      title: "开源号召与交付 (Call to Action)",
      desc: "引导 Star 你的 GitHub 仓库，提供完整 requirements.txt 与文档。"
    }
  ],
  ipPlaybook: [
    {
      title: "坚持「真实与开源」人设 (Radical Transparency)",
      summary: "绝不包装成带单老师，以探索 AI 赋能交易的硬核极客身份立足。",
      points: [
        "拒绝虚假造神，直面策略瑕疵与爆仓复盘，真实复盘的信任度远超宣扬暴富。",
        "将代码完整开源，提供清晰的 requirements.txt、.env 模板与安装说明。"
      ]
    },
    {
      title: "代码级高信噪比交付 (High Signal-to-Noise)",
      summary: "拒绝空洞理论，每一个视频均配套整理干净的 GitHub 仓库与架构图。",
      points: [
        "在 README 嵌入核心推导逻辑与视频时间戳，GitHub 与 YouTube 双向引流沉淀技术壁垒。",
        "让观众不仅'听懂'，而且'立刻可以 git clone 跑起来'。"
      ]
    },
    {
      title: "视觉符号与极客仪式感 (Aesthetic & Ceremony)",
      summary: "统一科技美学、终端 CLI 流水与架构图，构建不可替代的品牌心智。",
      points: [
        "统一 IDE 深浅色高质感主题，像专业量化机构一样展示系统日志与数据流。",
        "使用 Mermaid / Excalidraw 绘制清晰的多智能体数据流转图，兼顾专业与传播力。"
      ]
    }
  ]
};

export const QUANT_ROADMAP = [
  {
    phase: "阶段一：基础设施构建 (Infra)",
    tech: ["Python 3.11+", "VS Code / Cursor", "yfinance", "CCXT", "Alpaca API"],
    desc: "搭建无 Bug 的数据摄取与本地执行环境，掌握矢量化数据处理。"
  },
  {
    phase: "阶段二：回测与数学归因 (Backtesting)",
    tech: ["VectorBT", "Backtrader", "Freqtrade", "Sharpe > 1.5", "Max Drawdown < 15%"],
    desc: "用毫秒级向量化工具跑海量参数，结合事件驱动引擎模拟真实滑点。"
  },
  {
    phase: "阶段三：AI / LLM 智能体赋能 (Agentic)",
    tech: ["Claude 3.7", "Cursor", "LangGraph", "Researcher / Coder / Risk Agents"],
    desc: "引入多智能体协同分工：灵感挖掘 -> 代码编写 -> 风险合规审查闭环。"
  },
  {
    phase: "阶段四：模拟盘与实盘防御 (Live Defense)",
    tech: ["Paper Trading 4-8周", "Hard Kill-Switch 物理熔断", "微小资金实盘迭代"],
    desc: "检验实盘网络延迟与极端流动性冲击，守护本金安全第一准则。"
  }
];
`;

const outputPath = path.join(__dirname, '../src/data/creatorsData.ts');
fs.writeFileSync(outputPath, tsCode, 'utf-8');
console.log('Successfully updated creatorsData.ts with all 40 full dossier profiles!');
