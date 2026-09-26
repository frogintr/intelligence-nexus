export interface VideoBreakdown {
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

export const CREATORS_DATA: Creator[] = [
  {
    "id": "andrej-karpathy",
    "name": "Andrej Karpathy",
    "handle": "@AndrejKarpathy",
    "youtubeUrl": "https://www.youtube.com/@AndrejKarpathy",
    "category": "ai-top",
    "categoryLabel": "AI 头部权威",
    "badgeColor": "border-purple-500/30 text-purple-400 bg-purple-500/10",
    "tagline": "全球白板级代码讲透 LLM 底层原理的第一人",
    "tier": "百万级学术顶流 · 宗师级",
    "tags": [
      "LLM底层",
      "纯手写GPT",
      "Transformer原理",
      "系统架构"
    ],
    "profile": "前 OpenAI 联合创始人，前特斯拉人工智能总监（Autopilot 主管），斯坦福著名深度学习公开课 CS231n 的主讲人。Karpathy 拥有将极度复杂的学术和系统级概念还原为基础 Python/C 纯手写代码的无与伦比的能力。他的教学视频动辄两小时以上，却在全网获得数百万极客的追捧，被公认为 AI 工程师必读的‘圣经级’博主。",
    "contentStyle": "极简白板 + VS Code 纯录屏 + 终端实时输出。几乎无多余花哨转场剪辑，全靠超高密度硬核干货和清晰明了的代码演进逻辑吸附观众，语气沉稳、亲和且充满宗师风范。",
    "videos": [
      {
        "title": "Let's build GPT: from scratch, in code, spelled out.",
        "theme": "用 2 小时从零纯手写最小可用 GPT",
        "keyInsights": "从字符级语言模型讲起，逐行手写 Bigram、自注意力机制（Self-Attention）、多头注意力（Multi-head）、残差连接（Residual Connections），并在终端跑出莎士比亚风格文本。观众看完即可彻底破除对大模型的黑盒恐惧。"
      },
      {
        "title": "Intro to Large Language Models",
        "theme": "给大众与全行业极客的 1 小时大模型全景全景课",
        "keyInsights": "全面梳理预训练（Pretraining）、后训练（SFT）、人类反馈强化学习（RLHF）、系统安全越狱与 LLM OS（大模型作为现代计算机操作系统核心）的底层逻辑。"
      },
      {
        "title": "Building makemore (Part 1 - 5)",
        "theme": "从浅层反向传播到现代神经网络的阶梯式教学",
        "keyInsights": "手把手带着观众手动推导反向传播（Backprop Ninja），彻底讲清 PyTorch Tensor 底层梯度流动原理，奠定硬核工程基础。"
      }
    ],
    "hookAnalysis": "【开门见山直奔核心】Karpathy 几乎不在前 30 秒讲客套话。开局直接展示终端运行结果，或一句话切入：'今天我们要从零写一个 GPT，不依赖任何现成深度学习框架黑盒。' 这种极高的技术自信瞬间建立绝对信任。",
    "scriptFramework": "【三幕推进】：① 提出最底层的微小问题（如猜下一个字符） -> ② 遭遇表达能力瓶颈，逐层引入数学结构（Q/K/V 矩阵变换） -> ③ 现场运行代码，看到终端奇迹般收敛，给出宏观反思。",
    "actionableTakeaways": {
      "forTrading": "理解 LLM 的本质是概率密度估计和上下文窗口检索。在设计量化策略时，不要迷信 LLM 的‘预知能力’，而要利用其模式识别和多维信息压缩能力。",
      "forCreator": "‘长视频+纯干货’不仅没死，反而拥有极高的留存率和复看率。做技术内容不需要花哨特效，逻辑链条无断裂是最高的壁垒。"
    },
    "channelUrl": "https://www.youtube.com/@AndrejKarpathy",
    "track": "AI 深度解读",
    "tierLabel": "头部权威",
    "positioning": "前 OpenAI 联合创始人，前特斯拉人工智能总监（Autopilot 主管），斯坦福著名深度学习公开课 CS231n 的主讲人。Karpathy 拥有将极度复杂的学术和系统级概念还原为基础 Python/C 纯手写代码的无与伦比的能力。他的教学视频动辄两小时以上，却在全网获得数百万极客的追捧，被公认为 AI 工程师必读的‘圣经级’博主。",
    "viralTopics": [
      "Let's build GPT: from scratch, in code, spelled out.",
      "Intro to Large Language Models",
      "Building makemore (Part 1 - 5)"
    ]
  },
  {
    "id": "3blue1brown",
    "name": "3Blue1Brown (Grant Sanderson)",
    "handle": "@3blue1brown",
    "youtubeUrl": "https://www.youtube.com/@3blue1brown",
    "category": "ai-top",
    "categoryLabel": "AI 头部权威",
    "badgeColor": "border-purple-500/30 text-purple-400 bg-purple-500/10",
    "tagline": "数学与深度学习可视化动画艺术大师",
    "tier": "600万+ 订阅 · 现象级",
    "tags": [
      "数学几何直觉",
      "Manim动画",
      "Transformer可视化",
      "反向传播"
    ],
    "profile": "斯坦福数学系毕业，开源数学动画引擎 Manim 创造者。Grant Sanderson 改变了全球理科教学的范式。他擅长用动态几何图像赋予抽象代数、微积分和机器学习直观的物理意义，让普通开发者也能在直觉层面掌握深奥的算法。",
    "contentStyle": "定制 Manim 动态几何流体动画，搭配舒缓温和的旁白配音与优雅的古典伴奏，视听质感极高，每个画面都经过精心构图与动效打磨。",
    "videos": [
      {
        "title": "How LLMs actually work: A visual guide",
        "theme": "大语言模型生成文字的全流程几何可视化",
        "keyInsights": "把嵌入空间（Embedding Space）具象化为高维几何几何点，生动演示 Softmax 概率分布如何从上万维词表坍缩为一个预测 Token。"
      },
      {
        "title": "Attention in transformers, visually explained",
        "theme": "Transformer 注意力机制的直观解释",
        "keyInsights": "用流动光斑和矩阵映射直观展示 Query 与 Key 之间的点积如何计算相似度，以及 Value 如何根据权重汇聚信息。"
      },
      {
        "title": "Backpropagation calculus | Neural networks chapter 4",
        "theme": "微积分链式法则在神经网络中的图解",
        "keyInsights": "把偏导数具象化为微小滑块的扰动涟漪，让每一个非数学专业的程序员彻底领悟损失函数的下降轨迹。"
      }
    ],
    "hookAnalysis": "【抛出直觉冲突与思想实验】前 30 秒抛出一个看似简单实则颠覆直觉的谜题或动态图像：'你是否想过，一个只有几百兆参数的矩阵，是如何在没有意识的情况下理解讽刺和语境的？'",
    "scriptFramework": "【直觉先导】：不先放公式，先给动态几何模型 -> 引导观众形成视觉直觉 -> 适时给出精准数学公式 -> 总结美学哲思。",
    "actionableTakeaways": {
      "forTrading": "高维空间中的资产价格并非随机游走，而是受潜在隐变量驱动。学会借助降维和几何可视化去理解你的多因子模型。",
      "forCreator": "‘一图胜千言’。做视频讲解复杂策略或量化指标时，用动图展示回测资金曲线与买卖信号切换，远胜对着干瘪的数字念稿。"
    },
    "channelUrl": "https://www.youtube.com/@3blue1brown",
    "track": "AI 深度解读",
    "tierLabel": "头部权威",
    "positioning": "斯坦福数学系毕业，开源数学动画引擎 Manim 创造者。Grant Sanderson 改变了全球理科教学的范式。他擅长用动态几何图像赋予抽象代数、微积分和机器学习直观的物理意义，让普通开发者也能在直觉层面掌握深奥的算法。",
    "viralTopics": [
      "How LLMs actually work: A visual guide",
      "Attention in transformers, visually explained",
      "Backpropagation calculus | Neural networks chapter 4"
    ]
  },
  {
    "id": "two-minute-papers",
    "name": "Two Minute Papers (Dr. Károly)",
    "handle": "@TwoMinutePapers",
    "youtubeUrl": "https://www.youtube.com/@TwoMinutePapers",
    "category": "ai-top",
    "categoryLabel": "AI 头部权威",
    "badgeColor": "border-purple-500/30 text-purple-400 bg-purple-500/10",
    "tagline": "全球 AI 前沿学术突破第一播报台",
    "tier": "170万+ 订阅 · 前沿风向标",
    "tags": [
      "论文速评",
      "前沿突破",
      "渲染与生成",
      "技术乐观主义"
    ],
    "profile": "Károly Zsolnai-Fehér 博士是计算机图形学与 AI 领域资深学者。他以标志性的热情口头禅（'What a time to be alive, fellow scholars!'）享誉全网，专注将前沿顶会论文浓缩成 5-8 分钟的高信息密度视觉大餐。",
    "contentStyle": "论文视频 Demo 剪辑 + 激昂高亢的解说 + 重点图表标注。节奏轻快紧凑，充满未来科技震撼感与技术乐观主义感染力。",
    "videos": [
      {
        "title": "OpenAI's New Model Changed Everything!",
        "theme": "深度推理大模型思考链能力的划时代演进",
        "keyInsights": "拆解测试时计算（Test-time compute）如何通过‘自言自语思考’突破传统预训练缩放定律（Scaling Law）。"
      },
      {
        "title": "DeepSeek Exploded AI Research!",
        "theme": "开源平替与低成本架构创新对全行业的冲击",
        "keyInsights": "深度剖析 MoE（混合专家架构）、MLA（多头潜在注意力）与极低成本算力训练背后的工程奇迹。"
      },
      {
        "title": "Google's New AI Robot Learns Like a Human",
        "theme": "具身智能与多模态物理世界理解",
        "keyInsights": "展示视觉-语言-动作（VLA）模型如何让机械臂学会空间常识并在零样本场景下泛化执行任务。"
      }
    ],
    "hookAnalysis": "【热情口号 + 惊人画面】第一句话直接引爆：'Dear fellow scholars, what a time to be alive! Look at what this new paper achieved...' 并在头 5 秒切入最具视觉冲击力的对比画面。",
    "scriptFramework": "【奇迹展示 -> 过去困境 -> 本论文创新解法 -> 未来震撼遐想】的四阶快节奏推进法，让人看完热血沸腾。",
    "actionableTakeaways": {
      "forTrading": "金融市场对 AI 论文的反应往往存在时间差。及时追踪最前沿的表征学习和强化学习论文，能比多数交易者早数周捕获新的 Alpha 灵感。",
      "forCreator": "打造标志性个人金句与开头人设（Catchphrase）具有极强的粉丝心智黏合力。做视频要学会挑选最具视觉反差的对比图做封面与开场。"
    },
    "channelUrl": "https://www.youtube.com/@TwoMinutePapers",
    "track": "AI 深度解读",
    "tierLabel": "头部权威",
    "positioning": "Károly Zsolnai-Fehér 博士是计算机图形学与 AI 领域资深学者。他以标志性的热情口头禅（'What a time to be alive, fellow scholars!'）享誉全网，专注将前沿顶会论文浓缩成 5-8 分钟的高信息密度视觉大餐。",
    "viralTopics": [
      "OpenAI's New Model Changed Everything!",
      "DeepSeek Exploded AI Research!",
      "Google's New AI Robot Learns Like a Human"
    ]
  },
  {
    "id": "fireship",
    "name": "Fireship (Jeff Delaney)",
    "handle": "@Fireship",
    "youtubeUrl": "https://www.youtube.com/@Fireship",
    "category": "ai-top",
    "categoryLabel": "AI 头部权威",
    "badgeColor": "border-purple-500/30 text-purple-400 bg-purple-500/10",
    "tagline": "极客快节奏之王，100 秒解构一切技术热点",
    "tier": "330万+ 订阅 · 顶流梗王",
    "tags": [
      "100秒系列",
      "极客讽刺",
      "快节奏剪辑",
      "热点解读"
    ],
    "profile": "全栈工程师兼内容创作奇才 Jeff Delaney。他开创了极高密度的‘in 100 seconds’视频形式，将黑色幽默、极客热梗、尖锐的行业反讽与硬核代码总结融为一体，是全球程序员群体的‘快乐源泉与资讯雷达’。",
    "contentStyle": "每秒 2-3 个镜头切换、动效梗图（Memes）、打字机打码动画与机枪式犀利解说。信息密度极高，毫无废话，完播率极高。",
    "videos": [
      {
        "title": "Cursor AI in 100 Seconds",
        "theme": "现代 AI 辅助编程神器的极速安利",
        "keyInsights": "100 秒内讲清 Tab 自动补全、Ctrl+K 局部重构、Composer 全局跨文件生成的本质与颠覆性生产力体验。"
      },
      {
        "title": "The Next Big AI Is Here (And It's Scary)",
        "theme": "自主多智能体接管现实世界任务的冷峻思考",
        "keyInsights": "以黑色幽默风格剖析 Agent 从协助写代码到自主接单、自我部署带来的行业伦理与就业冲击。"
      },
      {
        "title": "Why Everyone is Moving to Claude Code",
        "theme": "终端 CLI 智能体对传统 IDE 的降维打击",
        "keyInsights": "拆解命令行工具如何借助深度工具调用（Tools Calling）和上下文感知，实现无 UI 干扰的极速自主重构。"
      }
    ],
    "hookAnalysis": "【荒诞梗图 + 爆炸性陈述】'AI is moving so fast that by the time this video renders, we'll probably all be replaced by a toaster.' 配合滑稽音效，瞬间抓死眼球。",
    "scriptFramework": "【高密包袱】：平均每 15 秒埋一个技术梗，在嬉笑怒骂中把工具的核心架构、优点、致命缺陷与替代品交代得一清二楚。",
    "actionableTakeaways": {
      "forTrading": "程序化交易中，极简高效胜过花哨。用最轻量的工具（如纯 Python 终端脚本）解决问题，往往比搞一套笨重的交易软件更抗风险。",
      "forCreator": "学习 Fireship 的文案精炼度——删掉所有客套话、呼吸停顿和无意义的过渡句，提升每秒钟交付的信息价值与趣味性。"
    },
    "channelUrl": "https://www.youtube.com/@Fireship",
    "track": "AI 深度解读",
    "tierLabel": "头部权威",
    "positioning": "全栈工程师兼内容创作奇才 Jeff Delaney。他开创了极高密度的‘in 100 seconds’视频形式，将黑色幽默、极客热梗、尖锐的行业反讽与硬核代码总结融为一体，是全球程序员群体的‘快乐源泉与资讯雷达’。",
    "viralTopics": [
      "Cursor AI in 100 Seconds",
      "The Next Big AI Is Here (And It's Scary)",
      "Why Everyone is Moving to Claude Code"
    ]
  },
  {
    "id": "ai-explained",
    "name": "AI Explained",
    "handle": "@aiexplained-official",
    "youtubeUrl": "https://www.youtube.com/@aiexplained-official",
    "category": "ai-top",
    "categoryLabel": "AI 头部权威",
    "badgeColor": "border-purple-500/30 text-purple-400 bg-purple-500/10",
    "tagline": "全网信噪比最高的客观深度 AI 评测与洞察",
    "tier": "90万+ 订阅 · 深度硬核标杆",
    "tags": [
      "Benchmark评测",
      "推理模型",
      "底层架构",
      "严谨客观"
    ],
    "profile": "匿名但极受尊重的深度独立 AI 调查型创作者。不同于盲目吹捧新模型的流量博主，AI Explained 坚持用极严密的基准测试（如 AIME、GPQA、ARC-AGI）、自制冷门测试用例去检验厂商的技术宣传水分，被业界视为真正懂技术的‘理性守门人’。",
    "contentStyle": "高清数据图表、官方白皮书逐句标注、对比柱状图与沉着克制的英式旁白。没有夸张的面部特写，完全靠过硬的分析质量取胜。",
    "videos": [
      {
        "title": "OpenAI o3: Did they just solve Reasoning?",
        "theme": "深度推理模型在极限难题上的泛化边界评测",
        "keyInsights": "详细解构 o3 在竞技级数学与编程赛道上的真实得分，指出强化学习思考流是真理解还是模式拟合。"
      },
      {
        "title": "Claude 3.7 Sonnet & Hybrid Thinking Tested",
        "theme": "混合思考机制（Hybrid Thinking）的实际生产力对比",
        "keyInsights": "通过自制逻辑陷阱题，测试在固定思考预算（Thinking Budget）下模型如何动态平衡推理成本与输出质量。"
      },
      {
        "title": "Are Reasoning Models Genuinely Thinking?",
        "theme": "大模型思考过程的认知科学哲学审视",
        "keyInsights": "测试模型在面对自我否定提示（Adversarial Prompts）时的脆弱性，揭示当下测试时计算的盲区。"
      }
    ],
    "hookAnalysis": "【官方宣传 vs 真实数据残酷反差】'厂商说他们打破了人类智力天花板，但我用 3 个经典逻辑陷阱题测试后，发现了完全不同的真相。' 极具权威悬念感。",
    "scriptFramework": "【学术严谨】：提出假设 -> 公布测试集标准 -> 逐题播放输入输出实况 -> 统计显著性分析 -> 得出客观边界与商用建议。",
    "actionableTakeaways": {
      "forTrading": "永远不要相信任何‘回测胜率 90%’的虚假宣传。像 AI Explained 一样，为你的量化策略建立严格的抗压力测试和最坏情况假设。",
      "forCreator": "客观严谨与‘敢说真话’是最稀缺的个人资产。在全网浮夸吹嘘时，出一期扎实指出缺陷并提供解决方案的评测往往能一战封神。"
    },
    "channelUrl": "https://www.youtube.com/@aiexplained-official",
    "track": "AI 深度解读",
    "tierLabel": "头部权威",
    "positioning": "匿名但极受尊重的深度独立 AI 调查型创作者。不同于盲目吹捧新模型的流量博主，AI Explained 坚持用极严密的基准测试（如 AIME、GPQA、ARC-AGI）、自制冷门测试用例去检验厂商的技术宣传水分，被业界视为真正懂技术的‘理性守门人’。",
    "viralTopics": [
      "OpenAI o3: Did they just solve Reasoning?",
      "Claude 3.7 Sonnet & Hybrid Thinking Tested",
      "Are Reasoning Models Genuinely Thinking?"
    ]
  },
  {
    "id": "matthew-berman",
    "name": "Matthew Berman",
    "handle": "@matthew_berman",
    "youtubeUrl": "https://www.youtube.com/@matthew_berman",
    "category": "ai-top",
    "categoryLabel": "AI 头部权威",
    "badgeColor": "border-purple-500/30 text-purple-400 bg-purple-500/10",
    "tagline": "开源大模型与本地部署实战第一大博主",
    "tier": "65万+ 订阅 · 本地开源教父",
    "tags": [
      "Ollama本地运行",
      "开源模型",
      "自主Agent",
      "实操安装教程"
    ],
    "profile": "硅谷连续创业者，专注于让每一个人都能在本地电脑上跑起属于自己的大模型与自主智能体。他紧跟每一款开源模型（Llama、DeepSeek、Mistral、Qwen）的发布，手把手教普通用户配置环境、优化显存、搭建本地知识库与私有化 Agent。",
    "contentStyle": "真人出镜 + 清晰全屏录屏。步骤极为详尽，提供完整的命令文本和安装清单，讲究‘无痛复现’，对初学者极其友好。",
    "videos": [
      {
        "title": "Run DeepSeek R1 100% Locally on Your PC",
        "theme": "本地量化版大模型的安装与显卡资源调优",
        "keyInsights": "评测 LM Studio、Ollama 与 vLLM 在消费级显卡上的推理速度，手把手演示如何设置量化层级以保全推理精度。"
      },
      {
        "title": "Build a Fully Autonomous AI Agent in 2026",
        "theme": "自主智能体架构从理论到真实工具调用的落地",
        "keyInsights": "结合 LangGraph 与本地模型，演示 Agent 如何自主搜索网络、读写文件并自动执行 Python 脚本。"
      },
      {
        "title": "Top 5 Open-Source AI Projects You Must Try",
        "theme": "每周 GitHub 爆款开源项目的筛选与精辟点评",
        "keyInsights": "筛选出真正具备工程价值而非单纯噱头的开源代码库，避免开发者盲目踩坑。"
      }
    ],
    "hookAnalysis": "【直击核心利益点】'今天，我教你如何在自己的普通游戏笔记本上，完全免费、断网、无隐私泄露地运行一个媲美 GPT-4o 的私人 AI。我们一步一步来。'",
    "scriptFramework": "【保姆级实操】：项目背景（为什么重要） -> 硬件要求清单 -> 逐行指令复制与敲打 -> 现场测试提问 -> 常见报错避坑。",
    "actionableTakeaways": {
      "forTrading": "金融交易策略数据是核心机密，使用本地运行的大模型（通过 Ollama 配合 LangChain）进行私密策略优化，能规避 API 泄露风险。",
      "forCreator": "提供‘可一键复制的代码/命令清单’是提高观众点赞、收藏、转发的终极密码。观众最喜欢跟着视频一步步跑通的感觉。"
    },
    "channelUrl": "https://www.youtube.com/@matthew_berman",
    "track": "AI 深度解读",
    "tierLabel": "头部权威",
    "positioning": "硅谷连续创业者，专注于让每一个人都能在本地电脑上跑起属于自己的大模型与自主智能体。他紧跟每一款开源模型（Llama、DeepSeek、Mistral、Qwen）的发布，手把手教普通用户配置环境、优化显存、搭建本地知识库与私有化 Agent。",
    "viralTopics": [
      "Run DeepSeek R1 100% Locally on Your PC",
      "Build a Fully Autonomous AI Agent in 2026",
      "Top 5 Open-Source AI Projects You Must Try"
    ]
  },
  {
    "id": "statquest",
    "name": "StatQuest with Josh Starmer",
    "handle": "@statquest",
    "youtubeUrl": "https://www.youtube.com/@statquest",
    "category": "ai-top",
    "categoryLabel": "AI 头部权威",
    "badgeColor": "border-purple-500/30 text-purple-400 bg-purple-500/10",
    "tagline": "弹着吉他把复杂的统计与机器学习拆解到极致",
    "tier": "120万+ 订阅 · 教学常青树",
    "tags": [
      "统计基础",
      "逐步白板推导",
      "Transformer原理",
      "基础算法"
    ],
    "profile": "Josh Starmer 博士，前北卡罗来纳大学教堂山分校计算生物学科学家。以独特的弹唱开场（'Silly Songs'）和标志性的'BAM!'而风靡全球。他主张‘没有复杂的概念，只有讲得不够清晰的概念’，任何高深算法在他笔下都能拆成小学算术般的步骤。",
    "contentStyle": "清新配色手绘矢量图白板，纯色块与极简箭头，无复杂数学符号堆叠，一步一步逐字弹出，配合富有节奏感的停顿与音效。",
    "videos": [
      {
        "title": "Transformer Neural Networks, Clearly Explained!!!",
        "theme": "大模型核心基石的纯图解剖析",
        "keyInsights": "把 Positional Encoding（位置编码）、Self-Attention、Encoder-Decoder 堆叠流程拆成一个个积木拼装，彻底去除黑盒。"
      },
      {
        "title": "Attention: From dot-products to multi-head",
        "theme": "注意力机制的每一步矩阵运算推导",
        "keyInsights": "逐个格子计算相似度得分，生动展示掩码（Masked Attention）如何阻挡模型偷看未来单词。"
      },
      {
        "title": "Principal Component Analysis (PCA) step-by-step",
        "theme": "降维与特征提取核心数学思想",
        "keyInsights": "通过旋转坐标轴找到方差最大方向，让金融特征降维的概念变得极其直观生动。"
      }
    ],
    "hookAnalysis": "【一把小吉他 + 轻松提问】弹奏两句风趣短曲：'统计学很难？并不！今天我们不用复杂公式，就用几个方块搞懂多头自注意力，BAM！'",
    "scriptFramework": "【极简积木化】：提出大痛点 -> 举一个极度简化的数字案例（比如 3 个词的小句子） -> 手工算一遍每一步 -> 汇总升华 -> BAM 喝彩！",
    "actionableTakeaways": {
      "forTrading": "在做量化因子研究时，PCA 和特征降维是剔除共线性的利器。理解其数学本质有助于构建真正正交的 Alpha 因子组合。",
      "forCreator": "把复杂事物讲得‘简单到小学生都能懂’是顶级的稀缺能力。如果你的量化解释让非程序员都听懂，你的播放量将没有上限。"
    },
    "channelUrl": "https://www.youtube.com/@statquest",
    "track": "AI 深度解读",
    "tierLabel": "头部权威",
    "positioning": "Josh Starmer 博士，前北卡罗来纳大学教堂山分校计算生物学科学家。以独特的弹唱开场（'Silly Songs'）和标志性的'BAM!'而风靡全球。他主张‘没有复杂的概念，只有讲得不够清晰的概念’，任何高深算法在他笔下都能拆成小学算术般的步骤。",
    "viralTopics": [
      "Transformer Neural Networks, Clearly Explained!!!",
      "Attention: From dot-products to multi-head",
      "Principal Component Analysis (PCA) step-by-step"
    ]
  },
  {
    "id": "yannic-kilcher",
    "name": "Yannic Kilcher",
    "handle": "@YannicKilcher",
    "youtubeUrl": "https://www.youtube.com/@YannicKilcher",
    "category": "ai-top",
    "categoryLabel": "AI 头部权威",
    "badgeColor": "border-purple-500/30 text-purple-400 bg-purple-500/10",
    "tagline": "学术硬核批判，逐行带读世界顶级 AI 论文",
    "tier": "28万+ 订阅 · 学术研究者灯塔",
    "tags": [
      "逐行读论文",
      "学术批判",
      "架构剖析",
      "深度反思"
    ],
    "profile": "瑞士苏黎世联邦理工大学（ETH Zurich）博士，知名 AI 创业者。他是极少数坚持在视频里打开原始 PDF 论文，从 Abstract、Introduction 一路画线标注读到 References 的博主。他的评论以犀利、直击数学软肋和指出论文隐藏陷阱著称。",
    "contentStyle": "PDF 屏幕共享 + 荧光笔涂鸦标注 + 右下角真人出镜。节奏不慌不忙，深度推导公式推导和实验细节，极具学术研讨会氛围。",
    "videos": [
      {
        "title": "Attention Is All You Need (Paper Explained)",
        "theme": "AI 史上最重要的里程碑论文逐字逐句深读",
        "keyInsights": "详述为何自注意力能取代循环神经网络（RNN）和卷积（CNN），为什么并行计算能力是现代 AI 繁荣的终极动力。"
      },
      {
        "title": "DeepSeek-V3 Technical Report Deep Dive",
        "theme": "多头潜在注意力与混合专家无辅助损失负载均衡",
        "keyInsights": "从底层分析 FP8 混合精度训练、通信隐藏与内存节约的技术细节，讲透其算力成本压缩 90% 的工程真相。"
      },
      {
        "title": "Why Benchmarks are Failing Us",
        "theme": "数据污染（Data Contamination）与基准评测失效警钟",
        "keyInsights": "揭示许多模型为了刷榜在预训练阶段偷吃测试集题目，导致实际推理泛化能力大打折扣的行业顽疾。"
      }
    ],
    "hookAnalysis": "【直接拉出论文首页划重点】'今天这篇论文声称彻底颠覆了注意力复杂度。但如果你仔细看第 4 页的这个公式和第 7 页的消融实验，事情完全不是他们说的那样。'",
    "scriptFramework": "【研读结构】：论文背景与作者来头 -> 核心图表与算法结构拆解 -> 关键公式现场推导推敲 -> 实验数据挑刺批判 -> 行业真实启发。",
    "actionableTakeaways": {
      "forTrading": "金融界充满了‘过度拟合过去数据’的虚假回测（如同大模型偷吃测试集）。在编写策略时，必须采用严苛的样本外（Out-of-sample）校验。",
      "forCreator": "做垂直深度垂类内容，不需要迎合大众泛娱乐。只要你的专业度能帮专业工程师和量化从业者省下啃论文的时间，你的商业价值极高。"
    },
    "channelUrl": "https://www.youtube.com/@YannicKilcher",
    "track": "AI 深度解读",
    "tierLabel": "头部权威",
    "positioning": "瑞士苏黎世联邦理工大学（ETH Zurich）博士，知名 AI 创业者。他是极少数坚持在视频里打开原始 PDF 论文，从 Abstract、Introduction 一路画线标注读到 References 的博主。他的评论以犀利、直击数学软肋和指出论文隐藏陷阱著称。",
    "viralTopics": [
      "Attention Is All You Need (Paper Explained)",
      "DeepSeek-V3 Technical Report Deep Dive",
      "Why Benchmarks are Failing Us"
    ]
  },
  {
    "id": "wes-roth",
    "name": "Wes Roth",
    "handle": "@WesRoth",
    "youtubeUrl": "https://www.youtube.com/@WesRoth",
    "category": "ai-top",
    "categoryLabel": "AI 头部权威",
    "badgeColor": "border-purple-500/30 text-purple-400 bg-purple-500/10",
    "tagline": "宏观洞察、科技巨头博弈与 AGI 进程全景追踪",
    "tier": "30万+ 订阅 · 科技智库型",
    "tags": [
      "行业大局观",
      "巨头博弈",
      "AGI预测",
      "深度新闻分析"
    ],
    "profile": "资深科技评论员与创业导师。Wes Roth 擅长将分散在技术圈、硅谷风投、学术前沿和白宫政策中的碎片信息串联成宏大的历史演进叙事。他深入浅出地探讨算力中心扩展、能源消耗瓶颈、芯片地缘博弈和大模型对社会阶层的重塑。",
    "contentStyle": "沉着冷静的演播室真人出镜 + 权威资讯截图与引述。语调平缓自信，富有思辨深度与战略前瞻性，适合高管与深度思考者。",
    "videos": [
      {
        "title": "Sam Altman's 2026 Roadmap Leaked: What's Next?",
        "theme": "OpenAI 与 Anthropic 的下一个算力断层推断",
        "keyInsights": "推演合成数据（Synthetic Data）、自我博弈（Self-Play）与芯片供应对超级智能演进的具体制约。"
      },
      {
        "title": "Anthropic's Breakthrough in Computer-Use Agents",
        "theme": "从问答聊天到接管键鼠操作电脑的历史性跨越",
        "keyInsights": "解析多模态大模型如何借助截图分析与 OS 坐标定位，替代白领日常重复性点击工作。"
      },
      {
        "title": "The Silent AI Energy War",
        "theme": "算力背后核电与绿色能源的竞逐真相",
        "keyInsights": "剖析科技巨头锁定核电站背后的原因：大模型训练的终点不再是算法，而是物理电力基础设施。"
      }
    ],
    "hookAnalysis": "【宏观格局与悬疑定性】'过去的 48 小时里，科技界发生了一件几乎没人注意、但却会彻底改写未来三年科技格局的大事...'",
    "scriptFramework": "【新闻事件点题 -> 背后隐秘商业利益/算力博弈 -> 关联历史相似事件（如电气化革命） -> 对未来从业者的长远建议】。",
    "actionableTakeaways": {
      "forTrading": "关注 AI 基础设施对二级市场大宗商品与半导体产业链的传导效应（如英伟达、电力公用事业股、液冷供应链），是极佳的宏观量化趋势选题。",
      "forCreator": "跳出单一的技术工具测评，站在‘时代浪潮与商业竞争’的高维度讲故事，能吸引更高净值、高决策力的粉丝群体。"
    },
    "channelUrl": "https://www.youtube.com/@WesRoth",
    "track": "AI 深度解读",
    "tierLabel": "头部权威",
    "positioning": "资深科技评论员与创业导师。Wes Roth 擅长将分散在技术圈、硅谷风投、学术前沿和白宫政策中的碎片信息串联成宏大的历史演进叙事。他深入浅出地探讨算力中心扩展、能源消耗瓶颈、芯片地缘博弈和大模型对社会阶层的重塑。",
    "viralTopics": [
      "Sam Altman's 2026 Roadmap Leaked: What's Next?",
      "Anthropic's Breakthrough in Computer-Use Agents",
      "The Silent AI Energy War"
    ]
  },
  {
    "id": "deeplearningai",
    "name": "DeepLearning.AI (Andrew Ng)",
    "handle": "@deeplearningai_",
    "youtubeUrl": "https://www.youtube.com/@deeplearningai_",
    "category": "ai-top",
    "categoryLabel": "AI 头部权威",
    "badgeColor": "border-purple-500/30 text-purple-400 bg-purple-500/10",
    "tagline": "吴恩达领衔的全球权威 AI 工程师规范化学院",
    "tier": "110万+ 订阅 · 工业界黄埔军校",
    "tags": [
      "吴恩达",
      "LLMOps",
      "短课程",
      "工程标准"
    ],
    "profile": "由全球 AI 先驱吴恩达（Andrew Ng）创立的官方教育矩阵。他们与全球头部 AI 机构（OpenAI、Anthropic、LangChain、LlamaIndex 等）联合制作权威短课程。内容紧扣工业界最新工程实践，倡导‘数据中心型 AI（Data-Centric AI）’理念。",
    "contentStyle": "吴恩达导师亲切问候（'Hello and welcome!'）+ 合作技术架构师手把手演示 Jupyter Notebook。规范严整，毫无废话，堪称教科书级别的代码规范。",
    "videos": [
      {
        "title": "Multi AI Agent Systems with crewAI",
        "theme": "构建协同作业的多智能体工程化管线",
        "keyInsights": "教导如何为不同的 Agent 分配 Role、Goal 与 Backstory，并通过任务委托（Task Delegation）完成复杂市场研究。"
      },
      {
        "title": "Building Systems with the ChatGPT API",
        "theme": "工业级防越狱、输入评估与链式推理流程",
        "keyInsights": "确立了 System Message、Moderation API、思维链提炼与输出格式校验的生产级全套安全防线。"
      },
      {
        "title": "Agentic Design Patterns with Andrew Ng",
        "theme": "吴恩达总结的 4 大核心智能体设计模式",
        "keyInsights": "梳理 Reflection（自我反思）、Tool Use（工具调用）、Planning（多步规划）与 Multi-agent Collaboration（多智能体协作）。"
      }
    ],
    "hookAnalysis": "【大师温和提问 + 权威背书】'今天我非常高兴邀请到某核心库作者，在接下来的 40 分钟里，我们将带你从零实现一套真正能在生产环境运行的系统。'",
    "scriptFramework": "【学术与工程并重】：概念定义 -> 架构框图说明 -> 交互式 Notebook 代码逐步运行 -> 课后练习思考题。",
    "actionableTakeaways": {
      "forTrading": "将吴恩达的 4 大 Agent 设计模式（反思、工具、规划、多代理）直接套用在量化交易系统上：一个 Agent 搜集数据，一个编写回测，一个专职找 Bug 和风控反思。",
      "forCreator": "系统化‘合集/课程体系’是打造长期影响力和权威度的压舱石。把碎片化知识整合为连贯的进阶体系，能带来极高的用户粘性。"
    },
    "channelUrl": "https://www.youtube.com/@deeplearningai_",
    "track": "AI 深度解读",
    "tierLabel": "头部权威",
    "positioning": "由全球 AI 先驱吴恩达（Andrew Ng）创立的官方教育矩阵。他们与全球头部 AI 机构（OpenAI、Anthropic、LangChain、LlamaIndex 等）联合制作权威短课程。内容紧扣工业界最新工程实践，倡导‘数据中心型 AI（Data-Centric AI）’理念。",
    "viralTopics": [
      "Multi AI Agent Systems with crewAI",
      "Building Systems with the ChatGPT API",
      "Agentic Design Patterns with Andrew Ng"
    ]
  },
  {
    "id": "cole-medin",
    "name": "Cole Medin",
    "handle": "@ColeMedin",
    "youtubeUrl": "https://www.youtube.com/@ColeMedin",
    "category": "ai-trend",
    "categoryLabel": "AI 新锐先锋",
    "badgeColor": "border-cyan-500/30 text-cyan-400 bg-cyan-500/10",
    "tagline": "生产级 AI Agents 与 LangGraph 复杂状态机实战先锋",
    "tier": "高粘性开发者社区 · 架构师宠儿",
    "tags": [
      "LangGraph",
      "状态机",
      "持久化记忆",
      "生产落地"
    ],
    "profile": "资深软件架构师，YouTube 上讲解 LangGraph 和复杂有向无环图（DAG）工作流最清晰硬核的先锋博主。他专门攻克‘智能体在生产环境中死机、死循环、记忆丢失’等致命缺陷，教开发者编写抗崩溃、带中断人机协同（Human-in-the-loop）的商业级系统。",
    "contentStyle": "Excalidraw 精细手绘架构流程图 + VS Code 生产级代码架构实操。重点拆解 State 状态传递、Node 节点与 Edge 转移逻辑。",
    "videos": [
      {
        "title": "Build Autonomous AI Agents That Actually Work",
        "theme": "告别玩具 Demo：构建真正具备弹性的企业级智能体",
        "keyInsights": "剖析为什么简单的 Prompt 链无法应付复杂的现实异常，展示基于图结构的循环纠错机制。"
      },
      {
        "title": "LangGraph Complete Crash Course",
        "theme": "从零掌握 LangGraph 核心状态管理",
        "keyInsights": "手把手构建带有条件分支（Conditional Edges）、Checkpoint 持久化存储与时间旅行（Time-travel debugging）的智能体。"
      },
      {
        "title": "Multi-Agent Architecture: Supervisor vs Network",
        "theme": "主从监控模式与对等网络模式架构对比",
        "keyInsights": "通过代码实测证明何种场景适合 Supervisor Agent 集中调度，何种场景适合松耦合协作。"
      }
    ],
    "hookAnalysis": "【打破‘玩具 AI’幻想】'市面上 95% 的智能体教程都是不能在真实业务中上线的玩具。一旦模型回复超时或格式出错，系统直接崩盘。今天我们来写一个永远不会崩的架构。'",
    "scriptFramework": "【架构痛点暴露 -> 绘制精细状态转移图 -> 编写代码实现 Node/Edge -> 模拟断电/报错恢复测试 -> 总结设计哲学】。",
    "actionableTakeaways": {
      "forTrading": "量化交易程序化执行中，最忌讳状态丢失。LangGraph 的 Checkpointing（检查点状态恢复）是构建 24/7 永不断连交易机器人的最佳软件范式。",
      "forCreator": "做‘抗脆弱/避坑’主题是技术创作者的必杀技。教别人‘如何让系统不出 Bug’比教别人‘怎么开始写’更能打动中高阶受众。"
    },
    "channelUrl": "https://www.youtube.com/@ColeMedin",
    "track": "AI 深度解读",
    "tierLabel": "新锐先锋",
    "positioning": "资深软件架构师，YouTube 上讲解 LangGraph 和复杂有向无环图（DAG）工作流最清晰硬核的先锋博主。他专门攻克‘智能体在生产环境中死机、死循环、记忆丢失’等致命缺陷，教开发者编写抗崩溃、带中断人机协同（Human-in-the-loop）的商业级系统。",
    "viralTopics": [
      "Build Autonomous AI Agents That Actually Work",
      "LangGraph Complete Crash Course",
      "Multi-Agent Architecture: Supervisor vs Network"
    ]
  },
  {
    "id": "ai-jason",
    "name": "AI Jason",
    "handle": "@AIJason",
    "youtubeUrl": "https://www.youtube.com/@AIJason",
    "category": "ai-trend",
    "categoryLabel": "AI 新锐先锋",
    "badgeColor": "border-cyan-500/30 text-cyan-400 bg-cyan-500/10",
    "tagline": "Context Engineering 与多智能体架构可视化美学代表",
    "tier": "新锐增长顶流 · 视觉化先驱",
    "tags": [
      "Context工程",
      "多Agent系统",
      "UI工作流",
      "思维导图拆解"
    ],
    "profile": "拥有资深产品经理与全栈开发双重背景的先锋创作者。Jason 敏锐地抓住了 AI Agent 与 Context Engineering（上下文工程）的核心脉搏。他擅长用精致无比的色彩流程图和图解，把原本枯燥抽象的多 Agent 通信、Prompt 注入与动态剪枝讲得赏心悦目。",
    "contentStyle": "极高审美的动效图解 + 极简代码提炼。语速适中，镜头语言极具现代科技感，每一帧画面都可以直接截图当 PPT 汇报材料。",
    "videos": [
      {
        "title": "Context Engineering: The Secret to Reliable LLMs",
        "theme": "如何管理百万 Token 窗口下的注意力聚焦与信息保真",
        "keyInsights": "阐述为什么单纯扩充上下文窗口会导致‘大海捞针性能衰减’，演示如何用动态上下文路由和结构化记忆保持模型专注。"
      },
      {
        "title": "Build a Team of AI Agents (No-Code to Code)",
        "theme": "从自然语言规划到多智能体团队协作落地",
        "keyInsights": "演示如何将真实团队（研究员、文案、审阅者）抽象为 3 个 Agent，利用共享上下文完成全自动报告撰写。"
      },
      {
        "title": "RAG is Dead? What Replaces It in 2026",
        "theme": "长上下文大模型时代 RAG 技术栈的生死与进化",
        "keyInsights": "辩证分析向量检索与长上下文窗口各自的优缺点，提出结合知识图谱（GraphRAG）与分层摘要的混合检索新解法。"
      }
    ],
    "hookAnalysis": "【概念认知重塑】'Prompt Engineering 已经过时了，现在硅谷顶级团队都在抢着招 Context Engineers。如果你还不懂上下文工程，你的 AI 永远只能回答蠢问题。'",
    "scriptFramework": "【认知升级】：颠覆旧概念 -> 拿出令人惊叹的动态流程演示 -> 分步剖析 3 个核心技巧 -> 给出可复用的开源模版。",
    "actionableTakeaways": {
      "forTrading": "在做金融新闻情感分析时，直接喂几百篇新闻会造成上下文迷失。学会做‘分层特征提取与结构化摘要压缩’，才能提取高纯度交易信号。",
      "forCreator": "出色的视觉审美（美观的流程图、统一的幻灯片色调）是打破技术视频枯燥感、实现跨圈层病毒式传播的核心生产力。"
    },
    "channelUrl": "https://www.youtube.com/@AIJason",
    "track": "AI 深度解读",
    "tierLabel": "新锐先锋",
    "positioning": "拥有资深产品经理与全栈开发双重背景的先锋创作者。Jason 敏锐地抓住了 AI Agent 与 Context Engineering（上下文工程）的核心脉搏。他擅长用精致无比的色彩流程图和图解，把原本枯燥抽象的多 Agent 通信、Prompt 注入与动态剪枝讲得赏心悦目。",
    "viralTopics": [
      "Context Engineering: The Secret to Reliable LLMs",
      "Build a Team of AI Agents (No-Code to Code)",
      "RAG is Dead? What Replaces It in 2026"
    ]
  },
  {
    "id": "david-ondrej",
    "name": "David Ondrej",
    "handle": "@DavidOndrej",
    "youtubeUrl": "https://www.youtube.com/@DavidOndrej",
    "category": "ai-trend",
    "categoryLabel": "AI 新锐先锋",
    "badgeColor": "border-cyan-500/30 text-cyan-400 bg-cyan-500/10",
    "tagline": "商业场景自主智能体搭建与自动化极客",
    "tier": "快速崛起 · 实战创业派",
    "tags": [
      "商业Agent",
      "流程自动化",
      "降本提效",
      "自主工具集成"
    ],
    "profile": "技术创业者，专注探索如何用 AI Agents 取代企业中琐碎、重复的人力劳动。他的内容极度务实，围绕真实业务痛点（如自动化客户支持、批量市场竞品调研、自动化社交媒体运维），展示从架构设计到商业收益的完整闭环。",
    "contentStyle": "快节奏现场搭建 + 实际工作流屏幕演示。强调投产比（ROI）与真实交付效率，毫无学院派的繁文缛节。",
    "videos": [
      {
        "title": "I Replaced My Entire Workflow With AI Agents",
        "theme": "个人超级个体的端到端自动化实验",
        "keyInsights": "展示如何利用 n8n + LangChain + Claude 搭建全天候监听行业资讯、自动汇总分析并生成晨报的私人参谋团队。"
      },
      {
        "title": "CrewAI vs AutoGen vs LangGraph: The Honest Truth",
        "theme": "三大主流多智能体框架的极限横评",
        "keyInsights": "从学习曲线、稳定性、定制灵活性和排错成本四个维度，给出不同体量项目的选型指南。"
      },
      {
        "title": "Automate 80% of Coding with Agent IDEs",
        "theme": "新一代智能编程工具链深度重构开发习惯",
        "keyInsights": "演示如何将任务拆解为小 Spec，让 AI 代理自动跑测试、找 Bug、提 Commit 的无感开发流。"
      }
    ],
    "hookAnalysis": "【真实生活/商业成果对比】'过去这件事情需要我雇 3 个人做整整一周，现在我只花了 2 个小时搭了这个 Agent，成本只有 4 美分。看它是怎么跑的。'",
    "scriptFramework": "【展示结果 -> 传统做法有多痛苦 -> 本系统架构解密 -> 现场 Live Demo 跑一遍 -> 开源模板下载】。",
    "actionableTakeaways": {
      "forTrading": "单兵量化交易者（Solopreneur Quant）最大的优势就是敏捷。用自动化 Agent 帮你监控上百个交易对，等于拥有一支 24 小时不知疲倦的初级交易员团队。",
      "forCreator": "‘我如何用 AI 帮我省下 XX 时间/赚到 XX 钱’的真实个人叙事实测，是吸引观众点击的最强利器。"
    },
    "channelUrl": "https://www.youtube.com/@DavidOndrej",
    "track": "AI 深度解读",
    "tierLabel": "新锐先锋",
    "positioning": "技术创业者，专注探索如何用 AI Agents 取代企业中琐碎、重复的人力劳动。他的内容极度务实，围绕真实业务痛点（如自动化客户支持、批量市场竞品调研、自动化社交媒体运维），展示从架构设计到商业收益的完整闭环。",
    "viralTopics": [
      "I Replaced My Entire Workflow With AI Agents",
      "CrewAI vs AutoGen vs LangGraph: The Honest Truth",
      "Automate 80% of Coding with Agent IDEs"
    ]
  },
  {
    "id": "indydevdan",
    "name": "IndyDevDan",
    "handle": "@indydevdan",
    "youtubeUrl": "https://www.youtube.com/@indydevdan",
    "category": "ai-trend",
    "categoryLabel": "AI 新锐先锋",
    "badgeColor": "border-cyan-500/30 text-cyan-400 bg-cyan-500/10",
    "tagline": "Agentic Coding、Claude Code 与 MCP 协议深度拓荒者",
    "tier": "极客硬核口碑 · 开发者顶礼膜拜",
    "tags": [
      "Agentic Coding",
      "Claude Code",
      "MCP协议",
      "终端工作流"
    ],
    "profile": "独立开发者与系统级极客。在 Anthropic 发布 Model Context Protocol (MCP) 和 Claude Code 之后，IndyDevDan 是全网最快且最深透彻解构其底层价值的创作者。他倡导在终端纯命令行中与 AI 共同结对编程，构建具备自我修复能力（Self-healing）的代码流水线。",
    "contentStyle": "沉浸式纯黑色终端（Terminal）录屏 + 极富感染力的极客独白。完全键盘流操作（NeoVim/Tmux 风格），行云流水，观赏性极强。",
    "videos": [
      {
        "title": "How I Code 10x Faster with Claude Code & MCP",
        "theme": "终端 CLI 模式与模型上下文协议的工业化实践",
        "keyInsights": "演示如何通过配置本地 MCP 服务器，让 Claude 直接读取数据库 Schema、执行测试用例并自动修复 Lint 报错。"
      },
      {
        "title": "Model Context Protocol (MCP) Explained in 15 Mins",
        "theme": "为什么 MCP 是 AI 时代的‘USB 接口’",
        "keyInsights": "深入源码剖析 Client-Server 架构，教你如何手写一个自定义 MCP 工具让任何大模型调用。"
      },
      {
        "title": "Building Self-Healing Code Pipelines with AI",
        "theme": "自动化测试失败时触发 AI 自主打补丁并重试",
        "keyInsights": "将错误堆栈捕获、差异比对（Diff Generation）与自动 Git 提交封装为闭环事件驱动系统。"
      }
    ],
    "hookAnalysis": "【抛开臃肿的现代化 UI，回归纯粹终端】'丢掉那些花里胡哨的图形界面吧，终端才是大模型真正释放力量的游乐场。今天我演示如何在 5 分钟内让 Claude 帮我重构整个微服务架构。'",
    "scriptFramework": "【极客沉浸流】：抛出哲学观点 -> 纯命令行展示优雅配置 -> 现场触发极端报错 -> 见证 AI 自我排错与修复 -> 总结现代化开发者生存法则。",
    "actionableTakeaways": {
      "forTrading": "通过编写定制 MCP 工具，让你的本地大模型拥有直接查询当前持仓、计算夏普比率、一键触发止损的物理接口，实现真正的人机共生交易。",
      "forCreator": "树立鲜明的‘极客极简美学’（如炫酷的 CLI 配色、熟练的键盘快捷键流），能在千篇一律的录屏视频中瞬间脱颖而出。"
    },
    "channelUrl": "https://www.youtube.com/@indydevdan",
    "track": "AI 深度解读",
    "tierLabel": "新锐先锋",
    "positioning": "独立开发者与系统级极客。在 Anthropic 发布 Model Context Protocol (MCP) 和 Claude Code 之后，IndyDevDan 是全网最快且最深透彻解构其底层价值的创作者。他倡导在终端纯命令行中与 AI 共同结对编程，构建具备自我修复能力（Self-healing）的代码流水线。",
    "viralTopics": [
      "How I Code 10x Faster with Claude Code & MCP",
      "Model Context Protocol (MCP) Explained in 15 Mins",
      "Building Self-Healing Code Pipelines with AI"
    ]
  },
  {
    "id": "dave-ebbelaar",
    "name": "Dave Ebbelaar",
    "handle": "@daveebbelaar",
    "youtubeUrl": "https://www.youtube.com/@daveebbelaar",
    "category": "ai-trend",
    "categoryLabel": "AI 新锐先锋",
    "badgeColor": "border-cyan-500/30 text-cyan-400 bg-cyan-500/10",
    "tagline": "全栈 AI 工程师知识图谱与生产级云部署专家",
    "tier": "扎实求职与工程师首选 · 严谨规范",
    "tags": [
      "全栈AI",
      "FastAPI微服务",
      "Docker容器",
      "企业级RAG"
    ],
    "profile": "数据科学家兼云架构师。Dave Ebbelaar 专注于将大模型应用转化为可扩展的商业软件（SaaS）。他不仅讲解 LLM 本身，更涵盖 Docker 容器化、FastAPI 异步接口、PostgreSQL/pgvector 数据持久化与 AWS/GCP 部署监控，是全栈工程师的必看频道。",
    "contentStyle": "标准的企业级工程规范讲解。结构分层清晰，模块解耦规范，带有完整的测试用例和部署脚手架代码。",
    "videos": [
      {
        "title": "The 2026 Full Stack AI Engineer Roadmap",
        "theme": "大模型时代软件工程师的完整技能演进树",
        "keyInsights": "清晰拆解数据管道、模型选型、混合检索（Hybrid RAG）、评价框架（Ragas）与微服务部署的每一个关口。"
      },
      {
        "title": "Deploying Production-Grade LLM Apps with Docker",
        "theme": "如何将 AI 原型打包为高并发安全微服务",
        "keyInsights": "解决模型推理冷启动、流式传输（Streaming SSE）、速率限制（Rate Limiting）与秘钥安全隔离。"
      },
      {
        "title": "Advanced Hybrid Search: Combining Dense and Sparse RAG",
        "theme": "向量语义检索与 BM25 关键词检索的最佳实践融合",
        "keyInsights": "利用互惠排名融合（RRF）算法，彻底解决专业金融术语在纯向量相似度下匹配不准的工业痛点。"
      }
    ],
    "hookAnalysis": "【清晰的知识地图导航】'如果你想在今年转行成为一名年薪 20 万美金的 AI 工程师，停止漫无目的地学语法。跟着我这张完整的技能全景图，今天我们搞定最关键的一块。'",
    "scriptFramework": "【结构化工程教学】：宏观架构定位 -> 模块接口设计 -> 编写可测试代码 -> 容器化打包运行 -> CI/CD 自动化集成。",
    "actionableTakeaways": {
      "forTrading": "量化交易 Bot 最终必须跑在云服务器 Docker 容器中。严格的微服务拆分（数据拉取服务与执行服务解耦）能确保网络波动时不影响核心风控。",
      "forCreator": "制作高清‘技能路线图（Roadmap）’或‘全景架构图’能引发极高的下载、点赞与自发传播，是建立专家权威的最佳载体。"
    },
    "channelUrl": "https://www.youtube.com/@daveebbelaar",
    "track": "AI 深度解读",
    "tierLabel": "新锐先锋",
    "positioning": "数据科学家兼云架构师。Dave Ebbelaar 专注于将大模型应用转化为可扩展的商业软件（SaaS）。他不仅讲解 LLM 本身，更涵盖 Docker 容器化、FastAPI 异步接口、PostgreSQL/pgvector 数据持久化与 AWS/GCP 部署监控，是全栈工程师的必看频道。",
    "viralTopics": [
      "The 2026 Full Stack AI Engineer Roadmap",
      "Deploying Production-Grade LLM Apps with Docker",
      "Advanced Hybrid Search: Combining Dense and Sparse RAG"
    ]
  },
  {
    "id": "prompt-engineering",
    "name": "Prompt Engineering",
    "handle": "@promptengineering",
    "youtubeUrl": "https://www.youtube.com/@promptengineering",
    "category": "ai-trend",
    "categoryLabel": "AI 新锐先锋",
    "badgeColor": "border-cyan-500/30 text-cyan-400 bg-cyan-500/10",
    "tagline": "最接地气、高频更新的开源模型实战评测频道",
    "tier": "高频评测 · 极高更新频率",
    "tags": [
      "开源更新",
      "微调Fine-Tuning",
      "本地运行",
      "工具评测"
    ],
    "profile": "全网对开源 AI 社区响应最快、更新最勤奋的频道之一。无论任何开源新权重或优化工具发布，该频道几乎总能在 24 小时内拿出上手实操视频，教观众使用 Unsloth 做模型微调、用 Ollama 在本地跑推理，是追赶开源技术的第一线兵团。",
    "contentStyle": "实用主义录屏，直奔主题，快速演示从克隆仓库、安装依赖到最终跑出效果的全流程，语调朴实诚恳。",
    "videos": [
      {
        "title": "Run DeepSeek Locally Without Losing Quality",
        "theme": "低算力设备量化运行高阶推理模型的技术解密",
        "keyInsights": "对比 GGUF、EXL2 与 AWQ 量化格式在推理速度与困惑度（Perplexity）上的微小差异，给出最佳选型配置。"
      },
      {
        "title": "Fine-Tune Any Small LLM in 15 Minutes with Unsloth",
        "theme": "极速 LoRA 微调将开源模型驯化为专属领域专家",
        "keyInsights": "展示如何只用 500 条高质量金融标注数据，让小型开源模型在特定金融实体提取任务上战胜通用大模型。"
      },
      {
        "title": "Best Open-Source AI Coding Assistants Compared",
        "theme": "Continue.dev、Aider 与本地 Ollama 的协作对比",
        "keyInsights": "横向评测在无需付费情况下，纯本地开源代码助手能否满足日常重构与调试需求。"
      }
    ],
    "hookAnalysis": "【紧跟当天头条】'DeepSeek 刚更新了最新权重，很多博主只在聊概念，但今天我们直接拉下代码，在本地显卡上做严苛的速度与逻辑实测。'",
    "scriptFramework": "【快打节奏】：新闻速览 -> 官方指标 -> 本地环境实测跑分 -> 踩坑记录与解决方案 -> 代码仓库链接奉上。",
    "actionableTakeaways": {
      "forTrading": "利用 Unsloth 用你过去的交易日志和回测记录微调一个小模型，训练出一个只属于你个人投资哲学的‘交易反思顾问’。",
      "forCreator": "速度是新锐频道的最大杀手锏。在新技术发布 24 小时内抢发带有可复现实操的代码视频，能获得巨大的算法流量倾斜。"
    },
    "channelUrl": "https://www.youtube.com/@promptengineering",
    "track": "AI 深度解读",
    "tierLabel": "新锐先锋",
    "positioning": "全网对开源 AI 社区响应最快、更新最勤奋的频道之一。无论任何开源新权重或优化工具发布，该频道几乎总能在 24 小时内拿出上手实操视频，教观众使用 Unsloth 做模型微调、用 Ollama 在本地跑推理，是追赶开源技术的第一线兵团。",
    "viralTopics": [
      "Run DeepSeek Locally Without Losing Quality",
      "Fine-Tune Any Small LLM in 15 Minutes with Unsloth",
      "Best Open-Source AI Coding Assistants Compared"
    ]
  },
  {
    "id": "ai-engineer",
    "name": "AI Engineer",
    "handle": "@aiDotEngineer",
    "youtubeUrl": "https://www.youtube.com/@aiDotEngineer",
    "category": "ai-trend",
    "categoryLabel": "AI 新锐先锋",
    "badgeColor": "border-cyan-500/30 text-cyan-400 bg-cyan-500/10",
    "tagline": "全球 AI Engineer 峰会顶级硬核演讲与最佳工程实践",
    "tier": "硅谷顶级架构师大本营 · 殿堂级",
    "tags": [
      "行业峰会",
      "Harness工程",
      "Agent记忆",
      "高阶架构"
    ],
    "profile": "由 Swyx（Shawn Wang）等人发起的全球 AI Engineer 峰会官方频道。这里收录了硅谷最顶尖的实践者（来自 LangChain、OpenAI、Cognition、Modal 等团队）的现场演讲。内容不讲入门常识，直击一线工程踩坑经验、测试基准设计和未来基础设施构想。",
    "contentStyle": "高质量现场演讲录制 + 幻灯片画中画。演讲者均为主流开源项目作者或顶尖科技公司核心架构师，信息密度爆表。",
    "videos": [
      {
        "title": "Harness Engineering for Reliable AI Agents",
        "theme": "测试套件（Harness）如何解决智能体评测不可复现问题",
        "keyInsights": "深入探讨如何构建确定性的评估沙盒，衡量 Agent 在长链路多步操作中的累计漂移率与成功率。"
      },
      {
        "title": "The Anatomy of Modern Agent Memory",
        "theme": "短期缓冲、分层图谱与情景记忆（Episodic Memory）设计",
        "keyInsights": "展示复杂 Agent 如何在不撑爆上下文的前提下，跨会话保留用户偏好和历史反思结论。"
      },
      {
        "title": "Synthetic Data & Self-Play in Future Models",
        "theme": "人类标注数据耗尽后的合成数据自我进化之路",
        "keyInsights": "系统分析通过自动生成代码单元测试（Unit Tests）作为验证信号（Verifier），实现模型自我纠错演进的闭环。"
      }
    ],
    "hookAnalysis": "【顶级技术大牛登台引述】由全球知名的开源项目作者登台，直接亮出大厂生产环境中的真实调用量与崩溃日志，直击行业最大痛点。",
    "scriptFramework": "【学术会议标准】：行业现状与痛点 -> 提出突破性设计架构 -> 生产环境真实压测数据 -> 未来开源展望。",
    "actionableTakeaways": {
      "forTrading": "‘Harness（测试夹具）’思维正是量化交易的核心。必须把交易策略放在各种历史黑天鹅极端行情的沙盒中反复模拟，才能测出真实韧性。",
      "forCreator": "定期提炼顶级技术峰会的精华要点并翻译/解构给国内观众，能让你在极短时间内树立‘站在全球技术最前沿’的高端专业人设。"
    },
    "channelUrl": "https://www.youtube.com/@aiDotEngineer",
    "track": "AI 深度解读",
    "tierLabel": "新锐先锋",
    "positioning": "由 Swyx（Shawn Wang）等人发起的全球 AI Engineer 峰会官方频道。这里收录了硅谷最顶尖的实践者（来自 LangChain、OpenAI、Cognition、Modal 等团队）的现场演讲。内容不讲入门常识，直击一线工程踩坑经验、测试基准设计和未来基础设施构想。",
    "viralTopics": [
      "Harness Engineering for Reliable AI Agents",
      "The Anatomy of Modern Agent Memory",
      "Synthetic Data & Self-Play in Future Models"
    ]
  },
  {
    "id": "data-independent",
    "name": "Greg Kamradt (Data Independent)",
    "handle": "@DataIndependent",
    "youtubeUrl": "https://www.youtube.com/@DataIndependent",
    "category": "ai-trend",
    "categoryLabel": "AI 新锐先锋",
    "badgeColor": "border-cyan-500/30 text-cyan-400 bg-cyan-500/10",
    "tagline": "长文本大海捞针测试发明者，高级 Prompt 与 RAG 分块大师",
    "tier": "业界公认实干家 · 深度思维",
    "tags": [
      "大海捞针评测",
      "文本分块策略",
      "LangChain深度拆解",
      "Prompt进阶"
    ],
    "profile": "硅谷资深数据科学家。他因发明了全球通用的‘大海捞针测试（Needle in a Haystack）’来客观衡量大模型长上下文召回能力而一举成名。他在 LangChain 和 RAG 领域沉淀极深，把文本分块（Chunking）、元数据过滤和重排序（Reranking）讲到了微观级别。",
    "contentStyle": "清新直观的可视化图表、Jupyter Notebook 逐步交互式展示，教学态度谦逊、严谨、详尽，深受资深数据科学家喜爱。",
    "videos": [
      {
        "title": "Visualizing 20+ Chunking Strategies for RAG",
        "theme": "彻底讲透文本切分对后续问答召回质量的决定性影响",
        "keyInsights": "从定长切分、句子切分到语义聚类切分（Semantic Chunking）和递归切分，用彩图展示每一块边界的处理智慧。"
      },
      {
        "title": "Needle In A Haystack: Pressure Testing LLMs",
        "theme": "如何用自制测试集戳穿大模型假长上下文的谎言",
        "keyInsights": "在几十万 Token 文本的各个位置插入隐秘事实，生成彩色热力图，揭示模型在文档中段普遍存在的注意力塌陷现象。"
      },
      {
        "title": "5 Levels of LLM Summarization",
        "theme": "从最简单的一句话总结到精巧的 Map-Reduce 递归摘要",
        "keyInsights": "展示如何处理长达数百页的财报与法律合同，分层提取结构化信息而不遗漏关键数据。"
      }
    ],
    "hookAnalysis": "【实验热力图直观冲击】开局直接扔出一张全网都在传的彩色热力图：'你以为你的模型读懂了 20 万字？看这张图，凡是绿色的地方它记得住，红色的地方它全盲了。今天教你怎么自测。'",
    "scriptFramework": "【数据实验流】：设计严密科学实验 -> 运行大规模对照组 -> 渲染可视化热力图 -> 得出数学规律 -> 给出优化工程方案。",
    "actionableTakeaways": {
      "forTrading": "在让 AI 解析上市公司数百页的财报时，简单的切片会导致财务指标前后文脱节。采用语义分块和表格保留策略，才能准确提炼基本面数据。",
      "forCreator": "创造一个被行业广泛使用的‘测试工具/小玩具/图表’（如大海捞针图），是个人博主一跃成为全球知名技术 IP 的最高杠杆路径。"
    },
    "channelUrl": "https://www.youtube.com/@DataIndependent",
    "track": "AI 深度解读",
    "tierLabel": "新锐先锋",
    "positioning": "硅谷资深数据科学家。他因发明了全球通用的‘大海捞针测试（Needle in a Haystack）’来客观衡量大模型长上下文召回能力而一举成名。他在 LangChain 和 RAG 领域沉淀极深，把文本分块（Chunking）、元数据过滤和重排序（Reranking）讲到了微观级别。",
    "viralTopics": [
      "Visualizing 20+ Chunking Strategies for RAG",
      "Needle In A Haystack: Pressure Testing LLMs",
      "5 Levels of LLM Summarization"
    ]
  },
  {
    "id": "world-of-ai",
    "name": "WorldofAI",
    "handle": "@WorldofAI",
    "youtubeUrl": "https://www.youtube.com/@WorldofAI",
    "category": "ai-trend",
    "categoryLabel": "AI 新锐先锋",
    "badgeColor": "border-cyan-500/30 text-cyan-400 bg-cyan-500/10",
    "tagline": "每日紧追 GitHub 最火开源 Agent 工具与落地脚本",
    "tier": "高频资讯先锋 · 开源雷达",
    "tags": [
      "开源雷达",
      "GitHub热榜",
      "工具测评",
      "极速尝鲜"
    ],
    "profile": "全天候雷达型博主，专门监控 GitHub Trending 榜单与各大技术社区的新生开源 Agent 项目。不论是多模态屏幕操作、语音助手还是自动化爬虫，他都能第一时间带来安装试玩实况，是获取 AI 工具灵感极佳的‘情报站’。",
    "contentStyle": "快速开箱试玩、直击关键功能。视频时长通常在 8-12 分钟，信息节奏极快，提供详尽的 GitHub 链接与依赖配置说明。",
    "videos": [
      {
        "title": "This New Open Source Agent Blew My Mind!",
        "theme": "挖掘极具颠覆性但尚未被大众发现的黑马开源库",
        "keyInsights": "实测新工具如何将原本繁琐的数十步操作浓缩为一段一键运行的 Python 自动化脚本。"
      },
      {
        "title": "Self-Operating Computer: Controlling PC with AI",
        "theme": "多模态视觉大模型自主控制鼠标键盘实战",
        "keyInsights": "测试基于截图的像素定位模型在打开浏览器、填表、发邮件等复杂跨软件操作中的准确率。"
      },
      {
        "title": "Top 5 Game-Changing AI Tools for Developers This Week",
        "theme": "每周开发者生产力工具横评精选",
        "keyInsights": "过滤噱头，挑出真正能融入日常开发流（提升 20% 以上效率）的精选实用库。"
      }
    ],
    "hookAnalysis": "【惊叹好奇心钩子】'这绝对是我今年见过的最离谱的开源项目，它居然能让大模型自己打开电脑里的 Excel，算完数据再画好图发到我的邮箱...看，它正在自己动鼠标。'",
    "scriptFramework": "【开箱惊叹 -> 简述原理 -> 手把手环境配置 -> 现场下发复杂指令运行 -> 优缺点评测与适用人群】。",
    "actionableTakeaways": {
      "forTrading": "程序化交易不仅是发 API 请求，许多老旧交易软件只有图形界面。了解多模态屏幕操作 Agent（如 Computer Use）能为接入传统交易终端提供全新可能。",
      "forCreator": "‘每周精选 Top 5’这类聚合型选题具有极高的受众广泛性与收藏率，非常适合作为固定周期栏目来稳定吸粉。"
    },
    "channelUrl": "https://www.youtube.com/@WorldofAI",
    "track": "AI 深度解读",
    "tierLabel": "新锐先锋",
    "positioning": "全天候雷达型博主，专门监控 GitHub Trending 榜单与各大技术社区的新生开源 Agent 项目。不论是多模态屏幕操作、语音助手还是自动化爬虫，他都能第一时间带来安装试玩实况，是获取 AI 工具灵感极佳的‘情报站’。",
    "viralTopics": [
      "This New Open Source Agent Blew My Mind!",
      "Self-Operating Computer: Controlling PC with AI",
      "Top 5 Game-Changing AI Tools for Developers This Week"
    ]
  },
  {
    "id": "mckay-wrigley",
    "name": "Mckay Wrigley",
    "handle": "@mckaywrigley",
    "youtubeUrl": "https://www.youtube.com/@mckaywrigley",
    "category": "ai-trend",
    "categoryLabel": "AI 新锐先锋",
    "badgeColor": "border-cyan-500/30 text-cyan-400 bg-cyan-500/10",
    "tagline": "Chatbot UI 创造者，颠覆性多模态原型与 Prompt 极客",
    "tier": "开源作者兼创作者 · 审美先锋",
    "tags": [
      "ChatbotUI",
      "多模态交互",
      "原型开发",
      "前沿Prompt"
    ],
    "profile": "著名开源项目 Chatbot UI 的独立创造者。作为一位极具敏锐直觉的前端与 AI 结合先锋，他总是能在最新多模态模型（如 Gemini 实时音视频、Claude Artifacts）发布后几小时内，构思出让人拍案叫绝的交互原型，是未来人机交互设计的风向标。",
    "contentStyle": "真诚、富有激情的个人第一视角分享。代码干净精美，善于在屏幕上即时搭建优雅简洁的交互界面。",
    "videos": [
      {
        "title": "Building With Gemini 2.0 Flash Multimodal Real-Time",
        "theme": "毫秒级实时语音和视觉流交互的原型搭建",
        "keyInsights": "展示如何利用 WebSocket 建立双向低延迟音频流，打造一个能‘看着你写代码并用语音实时指出语法错误’的结对助手。"
      },
      {
        "title": "Prompting Techniques That Feel Like Sci-Fi",
        "theme": "挖掘隐藏在大模型背后的非常规指令控制技巧",
        "keyInsights": "通过角色塑造、反向提示与潜意识思维引导，大幅提升复杂逻辑生成的稳定度。"
      },
      {
        "title": "The Architecture of a Modern AI Chat Interface",
        "theme": "如何构建丝滑的流式输出、分支会话与代码预览",
        "keyInsights": "详解在 Next.js 中管理复杂流式传输（Streaming）状态与本地 IndexedDB 存储的技术细节。"
      }
    ],
    "hookAnalysis": "【现场演示超现实功能】'戴上耳机，看我对着摄像头举起草稿纸，AI 在 0.5 秒内用逼真的声音告诉我这里算错了。这不是概念演示，这是我刚才写的真实代码。'",
    "scriptFramework": "【惊艳演示 -> 核心灵感来源 -> 架构核心技术点揭秘 -> GitHub 开源代码发布 -> 对未来交互的思考】。",
    "actionableTakeaways": {
      "forTrading": "未来的量化交易控制台不应该是一堆冷冰冰的折线图。为你的交易机器人构建一个支持语音实时对讲和多模态图表问答的 UI，会极大提升盘中决策体验。",
      "forCreator": "‘不仅分享代码，更分享审美与愿景’。让观众看到技术的酷炫与美感，能激发强烈的认同感与自发分享欲望。"
    },
    "channelUrl": "https://www.youtube.com/@mckaywrigley",
    "track": "AI 深度解读",
    "tierLabel": "新锐先锋",
    "positioning": "著名开源项目 Chatbot UI 的独立创造者。作为一位极具敏锐直觉的前端与 AI 结合先锋，他总是能在最新多模态模型（如 Gemini 实时音视频、Claude Artifacts）发布后几小时内，构思出让人拍案叫绝的交互原型，是未来人机交互设计的风向标。",
    "viralTopics": [
      "Building With Gemini 2.0 Flash Multimodal Real-Time",
      "Prompting Techniques That Feel Like Sci-Fi",
      "The Architecture of a Modern AI Chat Interface"
    ]
  },
  {
    "id": "part-time-larry",
    "name": "Part Time Larry",
    "handle": "@parttimelarry",
    "youtubeUrl": "https://www.youtube.com/@parttimelarry",
    "category": "quant-top",
    "categoryLabel": "量化交易经典",
    "badgeColor": "border-amber-500/30 text-amber-400 bg-amber-500/10",
    "tagline": "程序员转型量化交易的天花板，全网最扎实的 Python 接口教程",
    "tier": "程序员转量化第一导师 · 口碑极佳",
    "tags": [
      "Alpaca接口",
      "Backtrader回测",
      "API对接",
      "全栈交易系统"
    ],
    "profile": "全网最受程序员尊敬的量化交易启蒙博主。他本身是资深软件工程师，在《Hacking The Markets》系列中手把手教普通程序员如何利用 Python 链接 Interactive Brokers、Alpaca、Tradier 等券商 API，将交易想法转化为自动化下单机器人。代码完全开源，注释极为详尽，是真正带领无数人写出人生第一个实盘交易 Bot 的领路人。",
    "contentStyle": "双屏纯录屏教学：左边是交易所 API 官方文档，右边是 VS Code 代码。从 `pip install` 开始逐行敲代码，遇到 Bug 现场断点调试，讲究绝对的真实与可重现性。",
    "videos": [
      {
        "title": "Algorithmic Trading with Python and Alpaca API",
        "theme": "从零搭建完整的全自动免佣美股交易机器人",
        "keyInsights": "如何获取账户信息、拉取历史 K 线、计算技术指标并在触发信号时下达限价单/市价单的全套标准架构。"
      },
      {
        "title": "Backtesting Strategies with Backtrader in Python",
        "theme": "经典事件驱动型回测框架 Backtrader 深度精讲",
        "keyInsights": "讲解 Strategy 类、Cerebro 引擎、Data Feeds 与 Analyzer 模块的协同，展示如何正确扣除交易手续费和滑点。"
      },
      {
        "title": "Building a Full Stack Trading App with FastAPI and Vue",
        "theme": "为自己的量化策略打造定制化 Web 控制台",
        "keyInsights": "演示如何把 Python 回测和实时策略挂载为后端 API，并在前端网页实时查看仓位、盈亏与警报通知。"
      }
    ],
    "hookAnalysis": "【不讲废话，直接亮出今天要做出的代码产物】'今天我们来写一个自动交易程序，只要满足这两个条件就买入，跌破这个均线就自动止损。打开终端，我们先建一个新文件。' 程序员最喜欢的极简开场。",
    "scriptFramework": "【经典工程师叙事】：需求梳理 -> 查阅 API 文档端点 -> 逐步编写接口调用函数 -> 测试模拟盘执行 -> 封装异常重试逻辑。",
    "actionableTakeaways": {
      "forTrading": "Larry 的代码架构是量化交易的标准模版：严格分离‘数据模块’、‘策略判断模块’与‘订单执行模块’，绝不把所有逻辑写在一个臃肿的脚本里。",
      "forCreator": "把 API 文档和官方代码逐行读通并带观众写一遍，是技术教学最结实的基本功。程序员群体极度尊重这种不掺水、无套路的实操。"
    },
    "channelUrl": "https://www.youtube.com/@parttimelarry",
    "track": "AI 量化交易",
    "tierLabel": "实战派黑马",
    "positioning": "全网最受程序员尊敬的量化交易启蒙博主。他本身是资深软件工程师，在《Hacking The Markets》系列中手把手教普通程序员如何利用 Python 链接 Interactive Brokers、Alpaca、Tradier 等券商 API，将交易想法转化为自动化下单机器人。代码完全开源，注释极为详尽，是真正带领无数人写出人生第一个实盘交易 Bot 的领路人。",
    "viralTopics": [
      "Algorithmic Trading with Python and Alpaca API",
      "Backtesting Strategies with Backtrader in Python",
      "Building a Full Stack Trading App with FastAPI and Vue"
    ]
  },
  {
    "id": "sentdex",
    "name": "sentdex (Harrison Kinsley)",
    "handle": "@sentdex",
    "youtubeUrl": "https://www.youtube.com/@sentdex",
    "category": "quant-top",
    "categoryLabel": "量化交易经典",
    "badgeColor": "border-amber-500/30 text-amber-400 bg-amber-500/10",
    "tagline": "Python 量化金融、机器学习选股与强化学习开山始祖",
    "tier": "135万+ 订阅 · Python界传奇",
    "tags": [
      "Python金融",
      "机器学习选股",
      "强化学习交易",
      "自然语言情绪分析"
    ],
    "profile": "Harrison Kinsley 是 YouTube 乃至全球 Python 开发者中教父级别的人物。他是最早将机器学习（SVM、随机森林、神经网络）系统化引入股票数据分析、情绪分析和强化学习自动博弈的博主。他的《Python for Finance》系列启蒙了整整一代量化交易工程师。",
    "contentStyle": "极速打码 + 充满幽默感的老道解说。深入数学底层，敢于挑战难题（如自己手写一个小型神经网络库），风格狂野而硬核。",
    "videos": [
      {
        "title": "Python for Finance: Data Analysis & Algo Trading",
        "theme": "系统化利用 Pandas 处理海量股票时序数据",
        "keyInsights": "从 Yahoo Finance 抓取 S&P500 全部股票日 K 线，计算移动平均线、相关性热力图并进行多股票投资组合再平衡。"
      },
      {
        "title": "Machine Learning in Stock Price Prediction",
        "theme": "机器学习分类算法在金融择时中的真实威力与局限",
        "keyInsights": "用过去 10 天的波动率、成交量和动量指标作为特征，预测未来 3 天是否上涨，揭示特征工程对过拟合的抵御机制。"
      },
      {
        "title": "Reinforcement Learning for Autonomous Trading (DQN)",
        "theme": "深度 Q 网络在金融盘口中的买卖动作自适应决策",
        "keyInsights": "手把手构建 OpenAI Gym 兼容的金融交易环境，定义 Reward 函数，展示 Agent 如何从乱买乱卖自我进化到学会顺势而为。"
      }
    ],
    "hookAnalysis": "【抛出程序员共同的终极梦想】'几乎每个学会 Python 的程序员，第一反应都是写个脚本去金融市场上把股市当 ATM 机刷钱。今天我们来看看这件事在数学上到底可不可能。'",
    "scriptFramework": "【硬核推演】：直面残酷数学现实 -> 从最粗糙的脚本逐步重构成健壮工程 -> 大规模历史数据回测 -> 剖析为什么实盘会赔钱以及如何改进。",
    "actionableTakeaways": {
      "forTrading": "金融数据具有极高的时间序列自相关性与极低的信噪比。简单的 LSTM 预测价格基本注定失败，真正的量化必须做波动率建模和风险中性对冲。",
      "forCreator": "用宏大且引发共鸣的话题（如‘用 AI 炒股能不能发财’）作为切入点，但用极其严谨的科学和代码去证伪和科普，能带来极高的口碑与长尾效应。"
    },
    "channelUrl": "https://www.youtube.com/@sentdex",
    "track": "AI 量化交易",
    "tierLabel": "实战派黑马",
    "positioning": "Harrison Kinsley 是 YouTube 乃至全球 Python 开发者中教父级别的人物。他是最早将机器学习（SVM、随机森林、神经网络）系统化引入股票数据分析、情绪分析和强化学习自动博弈的博主。他的《Python for Finance》系列启蒙了整整一代量化交易工程师。",
    "viralTopics": [
      "Python for Finance: Data Analysis & Algo Trading",
      "Machine Learning in Stock Price Prediction",
      "Reinforcement Learning for Autonomous Trading (DQN)"
    ]
  },
  {
    "id": "quantconnect",
    "name": "QuantConnect",
    "handle": "@QuantConnect",
    "youtubeUrl": "https://www.youtube.com/@QuantConnect",
    "category": "quant-top",
    "categoryLabel": "量化交易经典",
    "badgeColor": "border-amber-500/30 text-amber-400 bg-amber-500/10",
    "tagline": "全球顶级量化云平台官方频道，对冲基金级回测引擎 LEAN 殿堂",
    "tier": "量化机构与专业个人权威 · 工业标准",
    "tags": [
      "LEAN引擎",
      "对冲基金标准",
      "Alpha因子",
      "避免过拟合"
    ],
    "profile": "全球领先的开源量化交易回测与托管平台 QuantConnect 的官方教育频道。其开源的 C#/Python 回测引擎 LEAN 是全球数十万量化极客与小型对冲基金的标准底座。其内容深度涵盖多资产投资组合构建、无偏差高精度回测、Alpha 因子挖掘与实盘订单路由。",
    "contentStyle": "对冲基金专业讲师出镜 + 云端 IDE 规范化演示。术语严密，公式规范，带有极强的华尔街对冲基金机构级质感。",
    "videos": [
      {
        "title": "Algorithmic Trading 101: Bootstrapping an Alpha",
        "theme": "如何规范化构建属于你的第一个 Alpha 预测模型",
        "keyInsights": "遵循机构标准架构：Universe Selection（股票池筛选） -> Alpha Creation（因子打分） -> Portfolio Construction（仓位加权） -> Execution（执行）。"
      },
      {
        "title": "Preventing Overfitting in Backtesting",
        "theme": "量化交易中防止过度拟合的数学武器库",
        "keyInsights": "详解信息系数（IC）、夏普比率衰减检验、前向分析（Walk-Forward Analysis）与降采样测试，识别策略是否是在‘记忆历史’。"
      },
      {
        "title": "Multi-Asset Strategy Portfolio Optimization",
        "theme": "跨股票、债券、黄金与外汇的多资产风险平价模型",
        "keyInsights": "利用协方差矩阵和最大夏普比率优化算法，构建穿越牛熊周期的自适应资产配置引擎。"
      }
    ],
    "hookAnalysis": "【严肃的机构视角发问】'零售交易者和专业对冲基金最大的区别，在于对生存（Survival）的理解。今天我们演示如何在你的回测中加入机构级生存偏差（Survivorship Bias）消除。'",
    "scriptFramework": "【专业机构范式】：数学理论假设 -> 规范四层架构拆解 -> 平台高精度历史 Tick 级数据回测 -> 导出机构级夏普与最大回撤报告。",
    "actionableTakeaways": {
      "forTrading": "严格学习 QuantConnect 的四层解耦架构（选股池、Alpha 因子、组合加权、订单执行）。这是避免代码混乱并支撑多策略并行运行的最佳结构。",
      "forCreator": "‘机构级专业度’是一块极具吸引力的金字招牌。引入专业术语（如 IC、IR、最大回撤持续期）并讲清其含义，能吸引最有付费意愿的高端量化受众。"
    },
    "channelUrl": "https://www.youtube.com/@QuantConnect",
    "track": "AI 量化交易",
    "tierLabel": "实战派黑马",
    "positioning": "全球领先的开源量化交易回测与托管平台 QuantConnect 的官方教育频道。其开源的 C#/Python 回测引擎 LEAN 是全球数十万量化极客与小型对冲基金的标准底座。其内容深度涵盖多资产投资组合构建、无偏差高精度回测、Alpha 因子挖掘与实盘订单路由。",
    "viralTopics": [
      "Algorithmic Trading 101: Bootstrapping an Alpha",
      "Preventing Overfitting in Backtesting",
      "Multi-Asset Strategy Portfolio Optimization"
    ]
  },
  {
    "id": "quantinsti",
    "name": "QuantInsti",
    "handle": "@QuantInsti",
    "youtubeUrl": "https://www.youtube.com/@QuantInsti",
    "category": "quant-top",
    "categoryLabel": "量化交易经典",
    "badgeColor": "border-amber-500/30 text-amber-400 bg-amber-500/10",
    "tagline": "国际量化金融工程师学院（EPAT），高阶统计套利与风控课程",
    "tier": "国际权威量化认证机构 · 学院派",
    "tags": [
      "统计套利",
      "配对交易",
      "VaR风险价值",
      "机构经理分享"
    ],
    "profile": "全球最顶尖的量化金融职业培训机构之一（主导知名国际认证 EPAT）。其频道汇聚了来自世界各大对冲基金（如 Citadel、Two Sigma 背景的前从业者）的资深经理，深度讲授统计套利（StatArb）、协整配对交易、高频做市商算法以及风险价值（VaR）计算。",
    "contentStyle": "高清线上研讨会（Webinar）录播 + 详尽 PPT 推导。理论非常扎实，涵盖大量时间序列计量经济学与实盘风控哲学。",
    "videos": [
      {
        "title": "Statistical Arbitrage & Pairs Trading in Python",
        "theme": "配对交易与协整性检验（Cointegration）深度实战",
        "keyInsights": "用 ADF 检验与奥恩斯坦-乌伦贝克过程（OU 过程）寻找均值回归的资产对，计算 Z-Score 触发无风险统计套利。"
      },
      {
        "title": "Machine Learning & AI in Quantitative Trading",
        "theme": "对冲基金如何真实应用现代机器学习算法",
        "keyInsights": "指出非线性模型在金融噪音中的脆弱性，讲解特征重要性分析与抗过拟合集成学习（Ensemble Learning）技术。"
      },
      {
        "title": "Managing Drawdowns and VaR in Automated Systems",
        "theme": "自动化交易系统风控熔断指标与资金管理",
        "keyInsights": "详解蒙特卡洛模拟压力测试、历史 VaR 计算与动态凯利公式（Kelly Criterion）在单边极端行情中的仓位缩放。"
      }
    ],
    "hookAnalysis": "【对冲基金真实运作内幕】'在华尔街量化基金里，一个策略如果夏普比率低于 2，或者无法经受 5 年历史极端波动的检验，连模拟盘测试的资格都没有。今天带你看看他们是怎么做筛选的。'",
    "scriptFramework": "【学术与实务交融】：金融学与统计学原理阐释 -> 真实市场历史数据实证 -> Python 代码落地验证 -> 总结风险边界。",
    "actionableTakeaways": {
      "forTrading": "配对交易（Pairs Trading）和均值回归是量化初学者的绝佳起点。比起预测未来涨跌，寻找两个强相关资产的价差回归确定性要高得多。",
      "forCreator": "邀请行业内的一线大咖做访谈或客座分享，是自身内容库迅速积累极高权威度、借力打力的绝佳策略。"
    },
    "channelUrl": "https://www.youtube.com/@QuantInsti",
    "track": "AI 量化交易",
    "tierLabel": "实战派黑马",
    "positioning": "全球最顶尖的量化金融职业培训机构之一（主导知名国际认证 EPAT）。其频道汇聚了来自世界各大对冲基金（如 Citadel、Two Sigma 背景的前从业者）的资深经理，深度讲授统计套利（StatArb）、协整配对交易、高频做市商算法以及风险价值（VaR）计算。",
    "viralTopics": [
      "Statistical Arbitrage & Pairs Trading in Python",
      "Machine Learning & AI in Quantitative Trading",
      "Managing Drawdowns and VaR in Automated Systems"
    ]
  },
  {
    "id": "freecodecamp-quant",
    "name": "freeCodeCamp.org (Quant Series)",
    "handle": "@freecodecamp",
    "youtubeUrl": "https://www.youtube.com/@freecodecamp",
    "category": "quant-top",
    "categoryLabel": "量化交易经典",
    "badgeColor": "border-amber-500/30 text-amber-400 bg-amber-500/10",
    "tagline": "全网播放量数百万的 6-10 小时零广告免费量化巨制",
    "tier": "千万级平台 · 公益教育顶流",
    "tags": [
      "系统长课",
      "机器学习",
      "无广告",
      "从零到一完整项目"
    ],
    "profile": "全球最著名开源编程公益组织 freeCodeCamp。他们联合顶尖对冲基金讲师（如 Lachezar 教授等）推出的《Algorithmic Trading & Machine Learning with Python》、《Financial Engineering》等长视频，时长达 6 到 10 个小时，累计播放量数百万，是全网最完整无保留的量化自学通关宝典。",
    "contentStyle": "数十章节长视频聚合、无废话纯录屏、附带全套 GitHub 代码仓库与课程时间戳索引。风格踏实稳健，适合整块时间深度闭关研读。",
    "videos": [
      {
        "title": "Algorithmic Trading – Machine Learning & Quant Strategies Course",
        "theme": "长达 6 小时的从数据获取到机器学习策略完整课程",
        "keyInsights": "从时间序列基础（ARIMA、GARCH 波动率模型）到无监督聚类选股、利用技术指标与随机森林进行自动化择时。"
      },
      {
        "title": "Python for Finance Full Course",
        "theme": "金融工程核心数据分析与蒙特卡洛模拟",
        "keyInsights": "期权 Black-Scholes 定价公式数值解法、有效边界（Efficient Frontier）投资组合最优化求解。"
      },
      {
        "title": "Financial Engineering & Risk Management",
        "theme": "金融衍生品与现代市场微观结构教学",
        "keyInsights": "深入订单薄（LOB）、市场冲击成本（Market Impact）与订单流不平衡（OFI）的微观机制。"
      }
    ],
    "hookAnalysis": "【一揽子解决终身学习需求】'在这个 6 小时的完整课程中，你不需要购买任何教材或付费软件，我们将从零写出对冲基金级别的机器学习交易系统，所有代码均在 GitHub 免费提供。'",
    "scriptFramework": "【模块化大百科】：环境搭建 -> 数学基础 -> 单因子分析 -> 机器学习模型训练 -> 回测与评估 -> 部署实操。",
    "actionableTakeaways": {
      "forTrading": "系统性地学完这套课程中的波动率模型（GARCH）与动量因子，能让你摆脱散户思维，从数学统计学的高度审视市场波动。",
      "forCreator": "‘终极合集长视频’（Mega-course）虽然制作周期长，但由于其极高的收藏率、完播时长和长尾搜索量，是打造长青爆款的核心资产。"
    },
    "channelUrl": "https://www.youtube.com/@freecodecamp",
    "track": "AI 量化交易",
    "tierLabel": "实战派黑马",
    "positioning": "全球最著名开源编程公益组织 freeCodeCamp。他们联合顶尖对冲基金讲师（如 Lachezar 教授等）推出的《Algorithmic Trading & Machine Learning with Python》、《Financial Engineering》等长视频，时长达 6 到 10 个小时，累计播放量数百万，是全网最完整无保留的量化自学通关宝典。",
    "viralTopics": [
      "Algorithmic Trading – Machine Learning & Quant Strategies Course",
      "Python for Finance Full Course",
      "Financial Engineering & Risk Management"
    ]
  },
  {
    "id": "neuralnine",
    "name": "NeuralNine",
    "handle": "@NeuralNine",
    "youtubeUrl": "https://www.youtube.com/@NeuralNine",
    "category": "quant-top",
    "categoryLabel": "量化交易经典",
    "badgeColor": "border-amber-500/30 text-amber-400 bg-amber-500/10",
    "tagline": "机器学习预测股价与精炼 Python 金融小项目首选",
    "tier": "50万+ 订阅 · 新手友好度第一",
    "tags": [
      "LSTM预测",
      "精简代码",
      "币安API",
      "新手上手"
    ],
    "profile": "年轻且极具亲和力的德国开发者 Florian。他的频道擅长用 15-20 分钟的极度精炼视频，把复杂的深度学习（LSTM、GRU、全连接网络）和加密货币交易所 API（Binance、Kraken）串联成一个个可以直接跑起来的迷你有用项目，是许多新手写下第一行金融代码的摇篮。",
    "contentStyle": "深色极简 IDE + 标志性黄色高亮代码行。语速清晰标准，讲解不拖泥带水，代码行数精简克制，通常控制在 100 行以内。",
    "videos": [
      {
        "title": "Stock Price Prediction Using Machine Learning (LSTM) in Python",
        "theme": "长短期记忆神经网络在股价时序中的应用",
        "keyInsights": "用 TensorFlow/Keras 构建双层 LSTM 循环网络，演示滑动窗口数据归一化以及绘制预测曲线与真实走势对比。"
      },
      {
        "title": "Automate Trading with Binance Python API",
        "theme": "加密货币交易所 API 极速自动化挂单",
        "keyInsights": "如何配置 API Key 权限、签名认证、监听实时价格并在突破阈值时自动下达多头委托。"
      },
      {
        "title": "Cryptocurrency Portfolio Rebalancer in Python",
        "theme": "自动化定期再平衡脚本编写",
        "keyInsights": "当比特币或以太坊由于涨跌导致仓位偏离目标比例时，自动计算超额并挂单平衡的实用工具。"
      }
    ],
    "hookAnalysis": "【清晰的目标结果先行】'今天我们只用 80 行纯 Python 代码，搭建一个通过 LSTM 深度学习预测股票未来走向的程序，这是最终的运行效果图。打开 VS Code，我们开始。'",
    "scriptFramework": "【小步快跑】：目标功能展示 -> 安装必要第三方库 -> 核心函数逐步手写 -> 终端现场跑出图表 -> 总结实操注意事项。",
    "actionableTakeaways": {
      "forTrading": "虽然单靠 LSTM 预测价格会面临滞后性，但将其用于预测‘未来 24 小时的波动率范围’或‘成交量爆发概率’具有很高的实战价值。",
      "forCreator": "把庞大复杂的工程拆成‘100 行代码能跑通的小项目’，是俘获初学者芳心的最佳利器，非常容易形成高点赞和高转评。"
    },
    "channelUrl": "https://www.youtube.com/@NeuralNine",
    "track": "AI 量化交易",
    "tierLabel": "实战派黑马",
    "positioning": "年轻且极具亲和力的德国开发者 Florian。他的频道擅长用 15-20 分钟的极度精炼视频，把复杂的深度学习（LSTM、GRU、全连接网络）和加密货币交易所 API（Binance、Kraken）串联成一个个可以直接跑起来的迷你有用项目，是许多新手写下第一行金融代码的摇篮。",
    "viralTopics": [
      "Stock Price Prediction Using Machine Learning (LSTM) in Python",
      "Automate Trading with Binance Python API",
      "Cryptocurrency Portfolio Rebalancer in Python"
    ]
  },
  {
    "id": "financial-wisdom",
    "name": "Financial Wisdom",
    "handle": "@FinancialWisdom",
    "youtubeUrl": "https://www.youtube.com/@FinancialWisdom",
    "category": "quant-top",
    "categoryLabel": "量化交易经典",
    "badgeColor": "border-amber-500/30 text-amber-400 bg-amber-500/10",
    "tagline": "专注于系统化交易思维、量化交易心理与回撤控制哲学",
    "tier": "40万+ 订阅 · 交易心理与哲学先驱",
    "tags": [
      "系统化交易",
      "海龟交易法则",
      "回撤哲学",
      "交易心理学"
    ],
    "profile": "全网对‘交易系统构建哲学’讲解最深入透彻的频道之一。他从不兜售短线发财神话，而是专注于将海龟交易法则（Turtle Trading）、约翰·墨菲的技术分析、范·萨普的资金管理以及现代系统化交易对冲基金的回测统计结果提炼成图解动画，是帮助交易者克服人性的‘心法频道’。",
    "contentStyle": "黑金高质感扁平动画 + 磁性成熟的解说旁白。大量引用经典著作、学术统计数据与历史实盘大师的真实净值曲线。",
    "videos": [
      {
        "title": "The 5 Rules of High-Sharpe Systematic Trading",
        "theme": "打造永续生存的规则化系统交易五大铁律",
        "keyInsights": "绝对止损、正向盈亏比、不预测只跟随、限制单笔最大风险为总资金 1%、用分散化降低夏普回撤。"
      },
      {
        "title": "Why 95% of Day Traders Fail (Statistical Proof)",
        "theme": "从统计学角度证明日内主观交易为何是负期望游戏",
        "keyInsights": "揭示交易手续费、买卖滑点、情绪化反向操作如何在数学上将散户本金迅速研磨殆尽。"
      },
      {
        "title": "Trend Following: The Turtle Traders Blueprint",
        "theme": "海龟交易法则的现代量化回测与复现",
        "keyInsights": "深入唐奇安通道（Donchian Channels）突破策略，结合 ATR（真实波动幅度均值）进行动态头寸规模确定（Position Sizing）。"
      }
    ],
    "hookAnalysis": "【直击人性痛点与残酷数据】'为什么你在模拟盘里总能赚钱，一到实盘就巨亏？这根本不是技术问题，这是你的人性基因在与数学期望作对。今天我们用一组残酷的真实统计数据说话。'",
    "scriptFramework": "【洞察人性】：揭露散户致命盲区 -> 给出严谨数学与统计模型证明 -> 拆解大师经典系统法则 -> 提供具体风控执行清单。",
    "actionableTakeaways": {
      "forTrading": "程序化交易最大的敌人不是编写代码，而是你总忍不住去‘手动干预系统’。学会用代码把仓位管理和止损硬性锁定，消除主观情绪。",
      "forCreator": "当所有人都专注于‘术’（怎么调参、写代码）的时候，专注讲‘道’（风控思维、资金管理、生存哲学）能够建立更深沉的情感连接与思想影响力。"
    },
    "channelUrl": "https://www.youtube.com/@FinancialWisdom",
    "track": "AI 量化交易",
    "tierLabel": "实战派黑马",
    "positioning": "全网对‘交易系统构建哲学’讲解最深入透彻的频道之一。他从不兜售短线发财神话，而是专注于将海龟交易法则（Turtle Trading）、约翰·墨菲的技术分析、范·萨普的资金管理以及现代系统化交易对冲基金的回测统计结果提炼成图解动画，是帮助交易者克服人性的‘心法频道’。",
    "viralTopics": [
      "The 5 Rules of High-Sharpe Systematic Trading",
      "Why 95% of Day Traders Fail (Statistical Proof)",
      "Trend Following: The Turtle Traders Blueprint"
    ]
  },
  {
    "id": "codetrading",
    "name": "CodeTrading",
    "handle": "@CodeTrading",
    "youtubeUrl": "https://www.youtube.com/@CodeTrading",
    "category": "quant-top",
    "categoryLabel": "量化交易经典",
    "badgeColor": "border-amber-500/30 text-amber-400 bg-amber-500/10",
    "tagline": "外汇与加密资产算法交易、强化学习 Agent 训练先锋",
    "tier": "垂直硬核极客群 · 深度代码",
    "tags": [
      "强化学习RL",
      "MetaTrader对接",
      "VectorBT回测",
      "外汇Bot"
    ],
    "profile": "深耕外汇市场与加密货币高频自动化的极客博主。他是最早在 YouTube 上将深度的强化学习（DQN、PPO）与 MetaTrader 5 (MT5) 接口打通、并将 VectorBT 向量化回测讲解得极其通透的博主之一，吸引了大量专业程序员和外汇算法交易员。",
    "contentStyle": "双屏纯录屏 + 细致的代码逻辑讲解。注重执行性能与速度优化，经常现场做循环回测 vs 向量化回测的耗时对比。",
    "videos": [
      {
        "title": "Train an AI Agent to Trade Forex with Deep RL",
        "theme": "深度强化学习智能体在外汇时序中的训练全流程",
        "keyInsights": "演示如何定制 Observation Space 与 Action Space，通过惩罚过度交易（Transaction Cost Penalty）训练自律型 AI 交易员。"
      },
      {
        "title": "Backtesting with VectorBT: 100x Faster Than Loops",
        "theme": "用 VectorBT 进行极速矩阵回测的核心技巧",
        "keyInsights": "把循环遍历 10,000 根 K 线的耗时从数分钟缩减到 0.05 秒，演示超大参数网格搜索（Grid Search）的优雅姿势。"
      },
      {
        "title": "Connecting Python to MetaTrader 5 (MT5)",
        "theme": "Python 策略向老牌外汇终端的订单推送",
        "keyInsights": "解决跨平台 socket 通信、毫秒级逐笔 Tick 报价拉取与订单修改（Modify Order）的细节机制。"
      }
    ],
    "hookAnalysis": "【极端效率对比打动眼球】'如果你的回测程序每次改个参数还要泡杯咖啡等半个小时，你正在浪费人生。看我如何用 VectorBT 在 2 秒钟内完成 5000 组参数的回测并自动画出最佳热力图。'",
    "scriptFramework": "【性能突破型】：展示传统代码的缓慢死穴 -> 引入全新高性能架构库 -> 重写关键矢量化代码 -> 毫秒级对比实测 -> 开源完整工程。",
    "actionableTakeaways": {
      "forTrading": "放弃任何用 `for` 循环遍历 Pandas 行为基础的简陋回测！拥抱 VectorBT 等纯向量化工具，能让你在策略研发周期上比对手快 100 倍。",
      "forCreator": "‘提速 100 倍’、‘秒级运行’这类具有强烈反差和生产力提升属性的标题与实测，是吸引程序员群体点击的顶级诱饵。"
    },
    "channelUrl": "https://www.youtube.com/@CodeTrading",
    "track": "AI 量化交易",
    "tierLabel": "实战派黑马",
    "positioning": "深耕外汇市场与加密货币高频自动化的极客博主。他是最早在 YouTube 上将深度的强化学习（DQN、PPO）与 MetaTrader 5 (MT5) 接口打通、并将 VectorBT 向量化回测讲解得极其通透的博主之一，吸引了大量专业程序员和外汇算法交易员。",
    "viralTopics": [
      "Train an AI Agent to Trade Forex with Deep RL",
      "Backtesting with VectorBT: 100x Faster Than Loops",
      "Connecting Python to MetaTrader 5 (MT5)"
    ]
  },
  {
    "id": "trade-options-with-harry",
    "name": "Trade Options With Harry",
    "handle": "@TradeOptionsWithHarry",
    "youtubeUrl": "https://www.youtube.com/@TradeOptionsWithHarry",
    "category": "quant-top",
    "categoryLabel": "量化交易经典",
    "badgeColor": "border-amber-500/30 text-amber-400 bg-amber-500/10",
    "tagline": "期权希腊字母量化、波动率曲面与系统化卖方对冲策略",
    "tier": "期权量化垂直顶级 · 机构策略散户化",
    "tags": [
      "期权量化",
      "希腊字母Greeks",
      "波动率套利",
      "铁鹰对冲"
    ],
    "profile": "专注于期权衍生品系统化量化交易的资深实操家。他打破了散户赌博式买期权的恶习，系统化讲解如何利用 Python 监控隐含波动率曲面（IV Surface）、计算 Delta/Gamma/Vega/Theta 风险暴露，并自动化部署铁鹰策略（Iron Condor）和跨式对冲，追求长期稳健的时间价值（Theta）衰减收益。",
    "contentStyle": "ThinkorSwim / Interactive Brokers 实盘终端界面 + Python 波动率模拟脚本。语气从容淡定，风控意识极其严密。",
    "videos": [
      {
        "title": "Automated Options Selling with Python",
        "theme": "如何用程序自动卖出高胜率虚值期权赚取时间价值",
        "keyInsights": "设定 Delta < 0.15 的安全阈值，通过 API 批量筛选高 IV Rank 标的，自动化计算保证金与自动下单。"
      },
      {
        "title": "Delta Neutral Hedging Explained in Code",
        "theme": "德尔塔中性对冲的自动化调仓策略",
        "keyInsights": "演示当标的资产大涨大跌时，程序如何动态买卖正股抵消 Delta 偏移，将方向性风险完全转变为纯波动率交易。"
      },
      {
        "title": "Iron Condor Systematic Backtest Results",
        "theme": "铁鹰策略在过去 15 年美股标普 500 上的真实历史回测",
        "keyInsights": "公开展示考虑了滑点和佣金后的最大回撤曲线，揭示为何在极端暴跌月份必须设置机械化平仓底线。"
      }
    ],
    "hookAnalysis": "【打破‘暴利幻觉’，展示数学确定性】'如果你还在买看涨期权赌财报翻倍，你其实是在赌场当送钱童子。今天教你做赌场老板：用数学和概率论编写一个只赚时间价值的程序。'",
    "scriptFramework": "【衍生品精讲】：期权定价数学直觉 -> 隐含波动率异动发现 -> 构建对冲结构公式 -> Python 脚本自动化扫描 -> 极端行情对冲方案。",
    "actionableTakeaways": {
      "forTrading": "股票和加密资产不仅有多空两个方向。学会用期权做波动率中性策略（如 Delta Neutral），能在震荡市中开辟全新的稳定获利渠道。",
      "forCreator": "将高门槛的复杂金融衍生品（期权、掉期）用简单直白的现实生活隐喻讲透，能牢牢吸引追求资金稳健增长的高净值受众。"
    },
    "channelUrl": "https://www.youtube.com/@TradeOptionsWithHarry",
    "track": "AI 量化交易",
    "tierLabel": "实战派黑马",
    "positioning": "专注于期权衍生品系统化量化交易的资深实操家。他打破了散户赌博式买期权的恶习，系统化讲解如何利用 Python 监控隐含波动率曲面（IV Surface）、计算 Delta/Gamma/Vega/Theta 风险暴露，并自动化部署铁鹰策略（Iron Condor）和跨式对冲，追求长期稳健的时间价值（Theta）衰减收益。",
    "viralTopics": [
      "Automated Options Selling with Python",
      "Delta Neutral Hedging Explained in Code",
      "Iron Condor Systematic Backtest Results"
    ]
  },
  {
    "id": "trade-with-python",
    "name": "Trade With Python",
    "handle": "@TradeWithPython",
    "youtubeUrl": "https://www.youtube.com/@TradeWithPython",
    "category": "quant-top",
    "categoryLabel": "量化交易经典",
    "badgeColor": "border-amber-500/30 text-amber-400 bg-amber-500/10",
    "tagline": "纯代码落地：CCXT 统一接口、加密货币三角套利与实盘接口",
    "tier": "实用工具集 · 代码开箱即用",
    "tags": [
      "CCXT库",
      "三角套利",
      "加密货币Bot",
      "安全风控KillSwitch"
    ],
    "profile": "专注于实用量化代码落地的资深程序员。他的核心特色是深入挖掘开源世界最著名的跨交易所接口库 CCXT，教普通开发者如何用一套 Python 代码连接 100 多家全球加密货币与外汇交易所，实现多交易所盘口差价监控、跨币种三角套利与低延迟报警。",
    "contentStyle": "纯白终端与 VS Code 录屏，结构极其紧凑。每一期视频都配套一个独立的 GitHub 脚本，开箱即用，代码质量极高。",
    "videos": [
      {
        "title": "Build a Triangular Arbitrage Bot with Python and CCXT",
        "theme": "无需预测行情的零风险数学三角套利机器人",
        "keyInsights": "计算 A->B->C->A 闭环币种汇率乘积，当扣除三道手续费后仍大于 1 时，毫秒级连发三笔市价单收割确定性差价。"
      },
      {
        "title": "CCXT Library Masterclass for Crypto Algo Trading",
        "theme": "掌握统一加密货币接口的深度精髓",
        "keyInsights": "处理不同交易所 WebSocket 深度图（Order Book）格式差异、避免被交易所封禁 IP 的请求速率限制（Rate Limit）封装。"
      },
      {
        "title": "Building a Custom Risk Management Kill-Switch in Code",
        "theme": "不可绕过的程序物理熔断器设计",
        "keyInsights": "独立线程监听异常亏损与未决订单死锁，一旦异常直接调用全部撤单并杀掉主交易进程，防止代码死循环倾家荡产。"
      }
    ],
    "hookAnalysis": "【展示无风险套利的数学诱惑】'这套策略完全不在乎比特币明天是涨到 10 万还是跌到 1 万。它只在盘口出现微小失衡的 0.1 秒内赚取这 0.05% 的数学差价。今天把完整开源脚本送给你。'",
    "scriptFramework": "【实干落地】：数学套利原理 -> CCXT 接口调用封装 -> 真实盘口高频差价捕捉 -> 严格手续费滑点核算 -> 完整脚本开源。",
    "actionableTakeaways": {
      "forTrading": "永远在你的交易程序中内置一个物理级的‘Kill-Switch（自毁熔断器）’。当网络丢包或交易所返回未知错误时，立即撤销全部委托并断开连接是活下去的底线。",
      "forCreator": "‘送现成可用开源代码’是构建开发者社区与社群私域流量最有效、最真诚的法宝。"
    },
    "channelUrl": "https://www.youtube.com/@TradeWithPython",
    "track": "AI 量化交易",
    "tierLabel": "实战派黑马",
    "positioning": "专注于实用量化代码落地的资深程序员。他的核心特色是深入挖掘开源世界最著名的跨交易所接口库 CCXT，教普通开发者如何用一套 Python 代码连接 100 多家全球加密货币与外汇交易所，实现多交易所盘口差价监控、跨币种三角套利与低延迟报警。",
    "viralTopics": [
      "Build a Triangular Arbitrage Bot with Python and CCXT",
      "CCXT Library Masterclass for Crypto Algo Trading",
      "Building a Custom Risk Management Kill-Switch in Code"
    ]
  },
  {
    "id": "moon-dev",
    "name": "Moon Dev",
    "handle": "@moondevonyt",
    "youtubeUrl": "https://www.youtube.com/@moondevonyt",
    "category": "quant-trend",
    "categoryLabel": "AI 量化黑马",
    "badgeColor": "border-emerald-500/30 text-emerald-400 bg-emerald-500/10",
    "tagline": "AI 辅助交易第一人！用 Cursor/Claude 打造自动化交易智能体顶流",
    "tier": "AI+量化赛道超级现象级 · 社区领袖",
    "tags": [
      "Cursor编程",
      "RBI框架",
      "7天实盘挑战",
      "多Agent交易室"
    ],
    "profile": "当前全球把 AI（Cursor、Claude、ChatGPT）与自动化量化交易结合得最成功、最具号召力的超级博主。他倡导著名的 **RBI（Research, Backtest, Implement）系统**，主张‘程序员不需要再手写每一行样板代码，而是要把精力放在指挥 AI 完成海量策略的高并发试错’。他坚持代码开源、真实录制盘中亏损与盈利，在 GitHub 拥有庞大的交易者社区。",
    "contentStyle": "海岛冲浪生活与极客开发无缝切换的独特人设（Beach-Quant Lifestyle）。实时屏幕录制 Cursor 结对编写过程，语调充满激情与极客自由主义精神，极具感染力。",
    "videos": [
      {
        "title": "I Built an AI Trading Bot with Cursor in 30 Mins",
        "theme": "如何利用 Cursor Composer 在半小时内搭好完整交易闭环",
        "keyInsights": "利用结构化 Prompt 要求 AI 按照 RBI 框架生成包含入场、出场、止损和日志打印的完整 Python 策略，并现场对接实盘。"
      },
      {
        "title": "Letting Claude 3.7 Run My Trading for 7 Days",
        "theme": "连续 7 天不干预、完全由大模型驱动的实盘实验",
        "keyInsights": "真实展示实盘中遇到的 API 限流、错误信号、最大回撤与最终收益，复盘 AI 在突发剧烈行情下的决策表现。"
      },
      {
        "title": "The RBI System: From Idea to Live Executable Bot",
        "theme": "研究（R）、回测（B）、实盘（I）的工业化敏捷流水线",
        "keyInsights": "建立标准策略模板库，把过去需要两周的研发流程压缩到 2 小时，倡导‘像工厂流水线一样批量测试上百个策略’。"
      }
    ],
    "hookAnalysis": "【成果即刻展示 + 颠覆常理】'在过去 7 天里，我没有手动盯过一次盘，全由这个我在海边用 Cursor 写的 AI 机器人自动执行。看，这是它实盘跑出的真实 PnL。今天我把这套系统完整开源。'",
    "scriptFramework": "【实录流】：展示实际盈亏 -> 提出今天想测试的疯狂想法 -> 打开 Cursor 对话现场生成策略代码 -> 丢进回测引擎快速压测 -> 上实盘小资金试跑 -> GitHub 开源引导。",
    "actionableTakeaways": {
      "forTrading": "不要试图寻找一个永远赚钱的‘圣杯策略’。学会像 Moon Dev 那样建立高并发的‘策略生产线’，同时运行 10-20 个低相关性弱策略，通过组合消除回撤。",
      "forCreator": "生活方式包装（Lifestyle Branding）+ 真实公开透明（Transparency）+ 极速生产力工具（Cursor）是当今做技术内容最容易产生病毒式爆发的终极公式。"
    },
    "channelUrl": "https://www.youtube.com/@moondevonyt",
    "track": "AI 量化交易",
    "tierLabel": "实战派黑马",
    "positioning": "当前全球把 AI（Cursor、Claude、ChatGPT）与自动化量化交易结合得最成功、最具号召力的超级博主。他倡导著名的 **RBI（Research, Backtest, Implement）系统**，主张‘程序员不需要再手写每一行样板代码，而是要把精力放在指挥 AI 完成海量策略的高并发试错’。他坚持代码开源、真实录制盘中亏损与盈利，在 GitHub 拥有庞大的交易者社区。",
    "viralTopics": [
      "I Built an AI Trading Bot with Cursor in 30 Mins",
      "Letting Claude 3.7 Run My Trading for 7 Days",
      "The RBI System: From Idea to Live Executable Bot"
    ]
  },
  {
    "id": "daviddtech",
    "name": "DaviddTech",
    "handle": "@DaviddTech",
    "youtubeUrl": "https://www.youtube.com/@DaviddTech",
    "category": "quant-trend",
    "categoryLabel": "AI 量化黑马",
    "badgeColor": "border-emerald-500/30 text-emerald-400 bg-emerald-500/10",
    "tagline": "多模型大比武（Claude vs ChatGPT vs Grok）自动编写策略与回测",
    "tier": "快速增长 · 硬核数据对比派",
    "tags": [
      "多模型竞技",
      "策略自动化",
      "胜率实测",
      "加密Bot"
    ],
    "profile": "专注于探索‘让大语言模型自主编写量化策略并进行多回合竞技评测’的实干先锋。他开发了自动化测试脚本，把相同的回测环境分别交给 ChatGPT、Claude、DeepSeek 和 Grok，对比不同模型编写的 Pine Script 或 Python 策略在过去 5 年的夏普比率与胜率，用实测数据说话。",
    "contentStyle": "快节奏屏幕录制、横向对比表格与大量动态回测报表。逻辑严丝合缝，专注于数字结果，没有任何故弄玄虚。",
    "videos": [
      {
        "title": "Can Claude 3.7 Beat Wall Street? AI Trading Test",
        "theme": "深度推理大模型生成复杂多因子策略的实盘回测",
        "keyInsights": "测试模型是否能理解波动率突破与假突破过滤，对比传统程序员手写策略在样本外的超额收益表现。"
      },
      {
        "title": "Automating 100 Backtests with Python & LLMs",
        "theme": "让 AI 自己写代码、跑回测并根据回测结果自我微调 Prompt",
        "keyInsights": "构建一个闭环自动迭代回路：回测夏普 < 1.5 时，系统自动将失败原因传回模型让其修正逻辑，直到达标。"
      },
      {
        "title": "ChatGPT vs Claude vs DeepSeek: Who Writes the Best Trading Bot?",
        "theme": "全网四大前沿推理大模型交易代码质量横评",
        "keyInsights": "从语法正确率、逻辑严密性、风控意识（是否自动加上防爆仓代码）三个维度打分并给出残酷排名。"
      }
    ],
    "hookAnalysis": "【大模型竞技场悬念】'我给 ChatGPT、Claude 和 DeepSeek 完全相同的提示词：为我写一个胜率最高的加密货币网格策略。结果只有一个模型跑出了正收益，而另一个直接让账户爆仓了...看结果。'",
    "scriptFramework": "【竞技场模式】：规则宣布 -> 统一 Prompt 录入 -> 审查各模型输出的代码质量 -> 丢入统一回测沙盒并发测试 -> 揭晓冠军榜单与代码分享。",
    "actionableTakeaways": {
      "forTrading": "大模型在编写策略时极易犯‘未来函数（Look-ahead bias）’的隐蔽错误（如引用了尚未收盘的 K 线数据）。必须让模型养成必须显式声明无未来数据的提示词规范。",
      "forCreator": "‘XX vs XX 大对决’永远是流量密码。将大家都在讨论的顶尖 AI 模型拉到同一个擂台上比拼谁能实盘赚钱，天生自带争议与高讨论度。"
    },
    "channelUrl": "https://www.youtube.com/@DaviddTech",
    "track": "AI 量化交易",
    "tierLabel": "实战派黑马",
    "positioning": "专注于探索‘让大语言模型自主编写量化策略并进行多回合竞技评测’的实干先锋。他开发了自动化测试脚本，把相同的回测环境分别交给 ChatGPT、Claude、DeepSeek 和 Grok，对比不同模型编写的 Pine Script 或 Python 策略在过去 5 年的夏普比率与胜率，用实测数据说话。",
    "viralTopics": [
      "Can Claude 3.7 Beat Wall Street? AI Trading Test",
      "Automating 100 Backtests with Python & LLMs",
      "ChatGPT vs Claude vs DeepSeek: Who Writes the Best Trading Bot?"
    ]
  },
  {
    "id": "pyquant-news",
    "name": "Jason Strimpel (PyQuant News)",
    "handle": "@pyquantnews",
    "youtubeUrl": "https://www.youtube.com/@pyquantnews",
    "category": "quant-trend",
    "categoryLabel": "AI 量化黑马",
    "badgeColor": "border-emerald-500/30 text-emerald-400 bg-emerald-500/10",
    "tagline": "专业量化分析师，现代 VectorBT 高速回测与风险模型领航者",
    "tier": "专业量化工程师必读 · 高含金量",
    "tags": [
      "VectorBT",
      "对冲基金因子",
      "极速回测",
      "专业Python量化"
    ],
    "profile": "资深量化软件工程师，PyQuant News 与热门图书作者。他致力于将传统华尔街只在专有 C++ 架构中运行的高性能向量化技术普及给大众。他也是推广 VectorBT 库最有影响力的领军人物，教交易者如何在数秒内对上万个策略进行大规模蒙特卡洛压力测试。",
    "contentStyle": "高规格的专业量化排版 + Jupyter Notebook 极简代码。严谨、纯粹、专业，充满资深金融工程架构师的沉淀与格调。",
    "videos": [
      {
        "title": "VectorBT: Backtest 10,000 Strategies in Seconds",
        "theme": "现代向量化回测与传统事件驱动引擎的性能鸿沟跨越",
        "keyInsights": "深入利用 NumPy 和 Numba 进行 JIT 即时编译，把一整年的高频 Tick 数据回测在内存中以矩阵运算瞬间完成。"
      },
      {
        "title": "How Quant Funds Actually Build Alphas",
        "theme": "真实对冲基金如何从海量市场特征中筛选独立 Alpha",
        "keyInsights": "讲解主成分分析（PCA）、因子正交化（Orthogonalization）与信息比率（IR）在去除无效因子中的核心实操。"
      },
      {
        "title": "Stop Using Loops for Backtesting in Python",
        "theme": "彻底革除程序员在金融数据处理中的循环坏习惯",
        "keyInsights": "展示如何利用广播机制（Broadcasting）一次性并行计算上百种不同周期的移动均线交叉信号。"
      }
    ],
    "hookAnalysis": "【直斥低效陋习，立下速度奇迹】'如果你还在用循环逐行遍历数据做量化研究，你等于在骑自行车跟高铁赛跑。今天我带你在 5 行代码内，用矩阵完成一万次策略回测。'",
    "scriptFramework": "【专业重构】：指出业界普遍痛点 -> 揭示底层矩阵运算数学机理 -> 用 VectorBT 高雅重构 -> 产出专业对冲基金级多维报表。",
    "actionableTakeaways": {
      "forTrading": "想要在大规模参数调优中不浪费生命，必须把 VectorBT 纳入你的核心技术栈。它是个人交易者具备‘算力平权’的核心武器。",
      "forCreator": "在细分领域成为‘某一项顶级前沿工具的头号布道者’（如 VectorBT 传教士），能让你在这个垂直生态内占据不可撼动的专业垄断地位。"
    },
    "channelUrl": "https://www.youtube.com/@pyquantnews",
    "track": "AI 量化交易",
    "tierLabel": "实战派黑马",
    "positioning": "资深量化软件工程师，PyQuant News 与热门图书作者。他致力于将传统华尔街只在专有 C++ 架构中运行的高性能向量化技术普及给大众。他也是推广 VectorBT 库最有影响力的领军人物，教交易者如何在数秒内对上万个策略进行大规模蒙特卡洛压力测试。",
    "viralTopics": [
      "VectorBT: Backtest 10,000 Strategies in Seconds",
      "How Quant Funds Actually Build Alphas",
      "Stop Using Loops for Backtesting in Python"
    ]
  },
  {
    "id": "atj-traders",
    "name": "ATJ Traders",
    "handle": "@ATJTraders",
    "youtubeUrl": "https://www.youtube.com/@ATJTraders",
    "category": "quant-trend",
    "categoryLabel": "AI 量化黑马",
    "badgeColor": "border-emerald-500/30 text-emerald-400 bg-emerald-500/10",
    "tagline": "直播现场写高频套利 Bot，跨 DEX 与 CEX 真实资金无情实测",
    "tier": "纯硬核无剪辑实战 · 极客死忠",
    "tags": [
      "实盘高频",
      "DEX套利",
      "跨市场WebSocket",
      "现场Live编码"
    ],
    "profile": "全网极其罕见的‘敢于通宵直播现场写真实高频套利与做市商代码’的野生极客团队。他们深入加密货币去中心化交易所（Uniswap、Raydium）和中心化交易所（Binance、Bybit）之间的微小价差，实战演示低延迟 WebSocket 订阅、MEV 夹子防御与闪电贷套利。",
    "contentStyle": "未经过度包装的真实双屏开发录屏。敲键盘声、终端滚动报错、即时排错改代码一览无余，纯正野性极客范。",
    "videos": [
      {
        "title": "Live Coding a High Frequency Arbitrage Bot",
        "theme": "现场两小时从空白文件到抓取跨交易所真实差价",
        "keyInsights": "构建高性能异步 asyncio 引擎，监听两个交易所的最新 BBO（最佳买卖报价），在价差覆盖手续费时并发触发订单。"
      },
      {
        "title": "Connecting Python to DEX & CEX for Cross-Trading",
        "theme": "Web3 智能合约与 Web2 交易所 API 的无缝桥接",
        "keyInsights": "解决私钥离线签名、Gas 费估算滑点控制以及与中心化交易所 API 之间的资金转移与套期保值。"
      },
      {
        "title": "Real-Time WebSocket Order Book Analysis",
        "theme": "深度盘口订单薄（Level 2 Data）的实时重构与分析",
        "keyInsights": "处理千兆级 WebSocket 数据流更新，计算大单挂单墙（Bid/Ask Walls）与微观结构订单失衡。"
      }
    ],
    "hookAnalysis": "【无任何滤镜的真实挑战】'今晚我不做任何剪辑，就打开这台全新的云服务器，在两个小时内用 Python 写一个跨市场套利程序，并充入 500 刀真实资金跑给你看。'",
    "scriptFramework": "【Live 编程现场流】：提出架构目标 -> 编写底层异步网络库 -> 遇到网络延迟报错现场 Google/排错 -> 成功跑通盘口套利 -> 展示真实成交记录。",
    "actionableTakeaways": {
      "forTrading": "高频和套利交易的关键在于异步（Asyncio）与事件循环处理。理解 WebSocket 实时推送比定时轮询（REST polling）快数百毫秒，这是套利成败的关键。",
      "forCreator": "‘真枪实弹、不加滤镜的现场 Live’拥有无可比拟的真实感和信任壁垒。敢于在视频里暴露报错并现场解决，会极大增强观众对你专业能力的膜拜。"
    },
    "channelUrl": "https://www.youtube.com/@ATJTraders",
    "track": "AI 量化交易",
    "tierLabel": "实战派黑马",
    "positioning": "全网极其罕见的‘敢于通宵直播现场写真实高频套利与做市商代码’的野生极客团队。他们深入加密货币去中心化交易所（Uniswap、Raydium）和中心化交易所（Binance、Bybit）之间的微小价差，实战演示低延迟 WebSocket 订阅、MEV 夹子防御与闪电贷套利。",
    "viralTopics": [
      "Live Coding a High Frequency Arbitrage Bot",
      "Connecting Python to DEX & CEX for Cross-Trading",
      "Real-Time WebSocket Order Book Analysis"
    ]
  },
  {
    "id": "nexustrade",
    "name": "NexusTrade (Austin Starks)",
    "handle": "@NexusTrade",
    "youtubeUrl": "https://www.youtube.com/@NexusTrade",
    "category": "quant-trend",
    "categoryLabel": "AI 量化黑马",
    "badgeColor": "border-emerald-500/30 text-emerald-400 bg-emerald-500/10",
    "tagline": "AI 自然语言生成复杂交易策略，多智能体金融估值与实盘平台创始人",
    "tier": "前沿创始人创业派 · 极具创新",
    "tags": [
      "自然语言交易",
      "遗传算法调优",
      "多Agent估值",
      "AI原生平台"
    ],
    "profile": "卡内基梅隆大学（CMU）毕业的软件工程师，AI 量化交易平台 NexusTrade 创始人。他专注于‘人机自然语言交互式量化交易’，探索如何让非程序员通过与 AI 简单对话，便能自动生成多指标组合策略、进行遗传算法参数最优化（Genetic Algorithms）并一键对接实盘。",
    "contentStyle": "以产品创始人视角的屏幕演练与功能实测。言简意赅，对自然语言转化为可执行金融逻辑的技术底层有极深的独到见解。",
    "videos": [
      {
        "title": "Chatting with an AI to Build an Algorithmic Strategy",
        "theme": "自然语言到可编译量化策略的语义解析工程",
        "keyInsights": "演示如何对 AI 说‘当 RSI 超卖且 MACD 金叉时买入，止损设为 2%’，系统自动将其编译为标准规则引擎并瞬间呈现 10 年回测图。"
      },
      {
        "title": "Multi-Agent Systems for Stock Fundamental Valuation",
        "theme": "多个专业 Agent 协同对标普 500 公司进行财报与基本面拆解",
        "keyInsights": "财报分析 Agent、同业对比 Agent 与行业趋势 Agent 共同出具估值报告并给出买卖区间建议。"
      },
      {
        "title": "Genetic Algorithms for Strategy Optimization",
        "theme": "模仿生物自然选择机制自动进化出高夏普策略",
        "keyInsights": "通过染色体交叉（Crossover）与变异（Mutation），在海量参数组合中自动淘汰亏损基因，进化出最稳健的止盈止损参数。"
      }
    ],
    "hookAnalysis": "【自然语言终结代码门槛】'在过去，构建这样一套包含止损、移动跟踪和波动率过滤的策略需要写 400 行代码；现在，我只要在输入框里打下一句话，回测报表就已经出来了。看。'",
    "scriptFramework": "【创新展示】：提出传统方式的繁琐 -> 演示自然语言交互的奇迹 -> 打开后台展示背后的语义解析与编译原理 -> 展望未来金融平权。",
    "actionableTakeaways": {
      "forTrading": "利用遗传算法（Genetic Algorithms）对策略参数进行自适应进化，是跳出人工盲目调参、寻找鲁棒性参数空间的绝佳数学工具。",
      "forCreator": "将自己的产品开发历程（Building in public）作为内容源泉，既能免费获取海量高意向用户反馈，又能打造极具商业转化价值的技术 IP。"
    },
    "channelUrl": "https://www.youtube.com/@NexusTrade",
    "track": "AI 量化交易",
    "tierLabel": "实战派黑马",
    "positioning": "卡内基梅隆大学（CMU）毕业的软件工程师，AI 量化交易平台 NexusTrade 创始人。他专注于‘人机自然语言交互式量化交易’，探索如何让非程序员通过与 AI 简单对话，便能自动生成多指标组合策略、进行遗传算法参数最优化（Genetic Algorithms）并一键对接实盘。",
    "viralTopics": [
      "Chatting with an AI to Build an Algorithmic Strategy",
      "Multi-Agent Systems for Stock Fundamental Valuation",
      "Genetic Algorithms for Strategy Optimization"
    ]
  },
  {
    "id": "tomas-nesnidal",
    "name": "Tomas Nesnidal",
    "handle": "@TomasNesnidal",
    "youtubeUrl": "https://www.youtube.com/@TomasNesnidal",
    "category": "quant-trend",
    "categoryLabel": "AI 量化黑马",
    "badgeColor": "border-emerald-500/30 text-emerald-400 bg-emerald-500/10",
    "tagline": "资深对冲基金量化操盘手，打破过拟合，突破系统（Breakout）大师",
    "tier": "华尔街资深老兵 · 稳健实战派",
    "tags": [
      "突破系统",
      "过度拟合破解",
      "量化流水线",
      "对冲基金标准"
    ],
    "profile": "拥有超过 20 年全职量化交易与对冲基金管理经验的欧洲老兵。他在系统化突破策略（Breakout Trading）领域造诣极深。他的核心理念是教个人交易者像正规工厂流水线一样构建策略，彻底拆穿互联网上充斥的‘曲线拟合（Curve-fitting）骗局’，受到严肃系统交易者的高度推崇。",
    "contentStyle": "专业工作室录像 + 极度严谨的数据统计图表。语气沉稳、老练、毫不迎合浮躁心态，处处透露出对市场风险的深深敬畏。",
    "videos": [
      {
        "title": "The 5-Step Formula for Robust Algo Systems",
        "theme": "如何打造经历牛熊转换依然不失效的稳健突破系统",
        "keyInsights": "严格限制策略规则不超过 3 条、在多个不同品种（股指、原油、国债）上验证通用性，拒绝为单一曲线定制参数。"
      },
      {
        "title": "Why Most Backtests Are Pure Lies",
        "theme": "深挖导致 99% 回测在实盘中迅速失效的致命误区",
        "keyInsights": "解析过度拟合（Over-optimization）与自由度丧失，提出‘鲁棒性测试（Robustness Testing）’的完整流程方法论。"
      },
      {
        "title": "Building a Resilient Multi-Market Portfolio",
        "theme": "非相关性资产组合平滑资金回撤曲线的数学奥秘",
        "keyInsights": "通过组合 10 个看似平平无奇但相互负相关的弱策略，最终合成一条平稳向上、夏普比率翻倍的无敌净值曲线。"
      }
    ],
    "hookAnalysis": "【冷峻的老兵当头棒喝】'如果你在一个策略里加了 5 个指标、调了 10 个参数，最后看到一条近乎直线上升的完美回测曲线，恭喜你，你刚刚亲手创造了一个在实盘第一天就会让你倾家荡产的定时炸弹。'",
    "scriptFramework": "【祛魅反思】：指出全网盛行的虚假幻觉 -> 拿出 20 年对冲基金真实生存数据 -> 传授抗过拟合 5 步法则 -> 给出稳健交易者行动指南。",
    "actionableTakeaways": {
      "forTrading": "记住 Tomas 的金句：**‘简单的系统生命力最顽强’**。一个只有 2 个条件、在所有品种上都能跑出正期望的粗糙策略，远比针对某一标的精雕细刻出来的‘完美回测’要可靠一万倍。",
      "forCreator": "‘反直觉、打破行内潜规则、揭露残酷真相’的内容定位，能让你瞬间在充斥着虚假暴富宣传的泛滥金融自媒体中，树立起不可替代的良心权威形象。"
    },
    "channelUrl": "https://www.youtube.com/@TomasNesnidal",
    "track": "AI 量化交易",
    "tierLabel": "实战派黑马",
    "positioning": "拥有超过 20 年全职量化交易与对冲基金管理经验的欧洲老兵。他在系统化突破策略（Breakout Trading）领域造诣极深。他的核心理念是教个人交易者像正规工厂流水线一样构建策略，彻底拆穿互联网上充斥的‘曲线拟合（Curve-fitting）骗局’，受到严肃系统交易者的高度推崇。",
    "viralTopics": [
      "The 5-Step Formula for Robust Algo Systems",
      "Why Most Backtests Are Pure Lies",
      "Building a Resilient Multi-Market Portfolio"
    ]
  },
  {
    "id": "stephen-blum",
    "name": "Stephen Blum",
    "handle": "@StephenBlumAlgo",
    "youtubeUrl": "https://www.youtube.com/@StephenBlumAlgo",
    "category": "quant-trend",
    "categoryLabel": "AI 量化黑马",
    "badgeColor": "border-emerald-500/30 text-emerald-400 bg-emerald-500/10",
    "tagline": "无监督聚类（K-Means）、强化学习与市场状态识别实战极客",
    "tier": "新兴硬核代码先锋 · 技术极客",
    "tags": [
      "市场状态识别",
      "无监督学习",
      "统计套利",
      "代码深度"
    ],
    "profile": "全职量化工程师与算法交易研究员。Stephen Blum 的核心专长在于将现代机器学习中的‘无监督市场状态检测（Regime Detection）’和‘自适应强化学习’落地到真实量化代码中。他教观众用 K-Means 聚类和隐马尔可夫模型（HMM）识别市场当前是处于高波动震荡还是单边趋势，并动态切换底层策略。",
    "contentStyle": "双屏纯 Python 教学，注重数学逻辑与代码实现的严丝合缝，不讲任何空洞理论，直奔实盘工程架构。",
    "videos": [
      {
        "title": "Unsupervised Machine Learning for Market Regime Detection",
        "theme": "如何让算法自主识别当前市场是震荡还是单边趋势",
        "keyInsights": "提取波动率与成交量分布特征，使用 K-Means 聚类划分市场状态，以此作为策略总开关（趋势行情开动量，震荡行情开网格）。"
      },
      {
        "title": "Building a Market Neutral Statistical Arbitrage Bot",
        "theme": "市场中性统计套利系统的端到端编写",
        "keyInsights": "同时持有等额多头与空头组合，完全对冲掉大盘 Beta 风险，专注收割股票之间的特质 Alpha 收益。"
      },
      {
        "title": "Python Risk Management Layer Before Execution",
        "theme": "在订单推送前强制执行的风控代理层设计",
        "keyInsights": "计算全账户风险暴露、动态仓位限制与实时滑点校验，确保任何 Bug 策略都无法发出非法的巨额委托。"
      }
    ],
    "hookAnalysis": "【解决策略总是‘周期性失效’的世纪难题】'为什么你的策略上个月大赚，这个月把利润全吐回去还倒亏？因为市场环境早就变了，而你的代码还在死板地执行旧逻辑。今天教你给 Bot 装上一双看清市场状态的眼睛。'",
    "scriptFramework": "【状态重构】：暴露传统固定策略的死穴 -> 引入机器学习状态聚类数学原理 -> 编写 Python 聚类与过滤器 -> 实盘回测验证收益曲线平滑效果。",
    "actionableTakeaways": {
      "forTrading": "任何单一天赋策略都不可能适应所有行情。先用算法做‘市场环境识别（Market Regime）’，再根据环境动态分发不同子策略，是高阶量化的必经之路。",
      "forCreator": "精准击中交易者‘策略总是时灵时不灵’的普遍焦虑，并给出极具科技含量的机器学习解法，这类视频的观众留存率极高。"
    },
    "channelUrl": "https://www.youtube.com/@StephenBlumAlgo",
    "track": "AI 量化交易",
    "tierLabel": "实战派黑马",
    "positioning": "全职量化工程师与算法交易研究员。Stephen Blum 的核心专长在于将现代机器学习中的‘无监督市场状态检测（Regime Detection）’和‘自适应强化学习’落地到真实量化代码中。他教观众用 K-Means 聚类和隐马尔可夫模型（HMM）识别市场当前是处于高波动震荡还是单边趋势，并动态切换底层策略。",
    "viralTopics": [
      "Unsupervised Machine Learning for Market Regime Detection",
      "Building a Market Neutral Statistical Arbitrage Bot",
      "Python Risk Management Layer Before Execution"
    ]
  },
  {
    "id": "lucas-quant",
    "name": "Lucas Quant (Quant Science)",
    "handle": "@lucasquant",
    "youtubeUrl": "https://www.youtube.com/@lucasquant",
    "category": "quant-trend",
    "categoryLabel": "AI 量化黑马",
    "badgeColor": "border-emerald-500/30 text-emerald-400 bg-emerald-500/10",
    "tagline": "现代数据科学框架，用 Python 还原华尔街顶尖量化机构经典论文",
    "tier": "学术复现派顶级 · 极高美誉度",
    "tags": [
      "论文复现",
      "因子动量",
      "特征工程",
      "AQR策略"
    ],
    "profile": "数据科学家与量化策略研究员。Lucas 专注于做一件极具价值的事情：**阅读华尔街顶级对冲基金（如 AQR、Man Group、Two Sigma）公开的顶级经典学术论文，并在视频中一步步用现代 Python（Polars、VectorBT、Scikit-learn）完整复现其回测与因子构建**，为广大个人量化研究员架设了一座通往机构殿堂的高速桥梁。",
    "contentStyle": "极其优雅整洁的 Jupyter Lab 界面、深色现代主题，注重代码矢量化性能与图表美学呈现，带有浓厚的数据科学家研究品味。",
    "videos": [
      {
        "title": "Replicating AQR Momentum Strategies in Python",
        "theme": "从零复现全球顶尖量化对冲基金 AQR 的经典动量因子",
        "keyInsights": "计算 12-1 动量、特质动量与横截面动量（Cross-Sectional Momentum），进行多空五档分组回测，完整还原论文图表。"
      },
      {
        "title": "Factor Investing & Risk Attribution from Scratch",
        "theme": "手写 Fama-French 多因子风险归因模型",
        "keyInsights": "分解投资组合收益率，精确计算到底多少收益来自市场 Beta、市值因子（SMB）、价值因子（HML），多少是真正的超额 Alpha。"
      },
      {
        "title": "Machine Learning Feature Engineering for Stocks",
        "theme": "将 50+ 个原始技术与宏观指标提炼为高预测力因子的特征工程",
        "keyInsights": "使用互信息（Mutual Information）与特征去冗余，过滤掉 90% 的无效噪音，保留真正对未来收益有预测力的特征。"
      }
    ],
    "hookAnalysis": "【对冲基金顶级商业机密复现】'AQR 靠这篇动量论文管理了数百亿美元资产。大部分人以为这很深奥，今天我们打开 Python，用公开历史数据从头复现这套策略，看看它在过去 20 年的真实表现。'",
    "scriptFramework": "【学术复现流】：解读顶尖论文核心假说 -> 准备大规模标普成分股数据集 -> 编写优雅的向量化因子计算代码 -> 绘制分组净值曲线 -> 探讨个人交易者实盘借鉴点。",
    "actionableTakeaways": {
      "forTrading": "不要自己在家里凭空发明交易指标！华尔街公开的大量顶级论文已经为你铺平了道路，学习如何阅读并复现这些经典学术因子是最稳健的进阶捷径。",
      "forCreator": "‘复现名校/名企/名基金的顶级成果’是学术和工程师圈子里公认的最硬核、最具说服力的内容形式，天生具备顶级的行业背书。"
    },
    "channelUrl": "https://www.youtube.com/@lucasquant",
    "track": "AI 量化交易",
    "tierLabel": "实战派黑马",
    "positioning": "数据科学家与量化策略研究员。Lucas 专注于做一件极具价值的事情：**阅读华尔街顶级对冲基金（如 AQR、Man Group、Two Sigma）公开的顶级经典学术论文，并在视频中一步步用现代 Python（Polars、VectorBT、Scikit-learn）完整复现其回测与因子构建**，为广大个人量化研究员架设了一座通往机构殿堂的高速桥梁。",
    "viralTopics": [
      "Replicating AQR Momentum Strategies in Python",
      "Factor Investing & Risk Attribution from Scratch",
      "Machine Learning Feature Engineering for Stocks"
    ]
  },
  {
    "id": "freqtrade-community",
    "name": "Freqtrade & FreqAI 社区",
    "handle": "@FreqtradeCommunity",
    "youtubeUrl": "https://www.youtube.com/results?search_query=freqtrade+freqai",
    "category": "quant-trend",
    "categoryLabel": "AI 量化黑马",
    "badgeColor": "border-emerald-500/30 text-emerald-400 bg-emerald-500/10",
    "tagline": "开源加密量化神器 Freqtrade 与自适应在线机器学习 FreqAI 生态",
    "tier": "GitHub 30k+ Stars · 开源量化神作",
    "tags": [
      "Freqtrade",
      "FreqAI自适应学习",
      "开源生态",
      "全自动化实盘"
    ],
    "profile": "围绕全球最火爆的开源加密货币算法交易框架 Freqtrade 以及其官方 AI 扩展模块 **FreqAI** 的技术创作者生态（以 CyberBoyV、Rob C 等先锋代表）。该框架自带高精度回测、仿真模拟盘、Telegram 交互式远程控制、自动止盈止损及模型自适应滚动重新训练，是目前最成熟的开源 AI 交易系统。",
    "contentStyle": "以 Docker 部署、终端配置、Jupyter Notebook 策略编写及 Telegram 实时接管操作为核心。极富社区协同文化与实操落地性。",
    "videos": [
      {
        "title": "Freqtrade & FreqAI Complete Beginner Setup in 2026",
        "theme": "从零搭建一套工业级加密货币全自动交易机器人",
        "keyInsights": "Docker 极速容器化安装、API 密钥安全配置、下载海量历史蜡烛数据并配置第一个自动化策略。"
      },
      {
        "title": "Training Adaptive Machine Learning Models on Live Tick Data with FreqAI",
        "theme": "实盘中模型自适应在线更新与滚动回归预测",
        "keyInsights": "FreqAI 如何在运行中自动利用过去数据定期重新训练 LightGBM/CatBoost 模型，防止模型因市场风格漂移而老化失效。"
      },
      {
        "title": "Hyperparameter Optimization with Genetic Search in Freqtrade",
        "theme": "超参数自动化搜索（Hyperopt）与防过拟合保护",
        "keyInsights": "利用贝叶斯优化在几千个参数维度中快速找到全局最优解，并结合样本外校验锁定稳健区间。"
      }
    ],
    "hookAnalysis": "【免费拥有价值数十万的专业交易系统】'你不需要花几千美金去买任何收费交易软件。全球几百位极客共同维护的这个开源神器，不仅支持全自动高频交易，还内置了每隔 4 小时自动重新训练的 AI 脑髓。今天教你免费搭建。'",
    "scriptFramework": "【开源搭建】：项目价值介绍 -> Docker 一键拉起 -> 配置策略与风控规则 -> 启动自适应 FreqAI 训练 -> 用 Telegram 手机远程控制收成。",
    "actionableTakeaways": {
      "forTrading": "如果你主要交易加密资产，不要从零去写交易所 WebSocket 重连、撤单排队等琐碎基建，直接站在 Freqtrade 这个成熟的巨人肩膀上研发你的 AI 策略。",
      "forCreator": "深耕一个世界级的开源大项目并成为其中文区或某个垂直方向的‘第一讲解者’，能直接继承该开源项目本身的庞大流量和口碑。"
    },
    "channelUrl": "https://www.youtube.com/results?search_query=freqtrade+freqai",
    "track": "AI 量化交易",
    "tierLabel": "实战派黑马",
    "positioning": "围绕全球最火爆的开源加密货币算法交易框架 Freqtrade 以及其官方 AI 扩展模块 **FreqAI** 的技术创作者生态（以 CyberBoyV、Rob C 等先锋代表）。该框架自带高精度回测、仿真模拟盘、Telegram 交互式远程控制、自动止盈止损及模型自适应滚动重新训练，是目前最成熟的开源 AI 交易系统。",
    "viralTopics": [
      "Freqtrade & FreqAI Complete Beginner Setup in 2026",
      "Training Adaptive Machine Learning Models on Live Tick Data with FreqAI",
      "Hyperparameter Optimization with Genetic Search in Freqtrade"
    ]
  },
  {
    "id": "finrl-community",
    "name": "FinRL 深度强化学习量化社区",
    "handle": "@FinRLCommunity",
    "youtubeUrl": "https://www.youtube.com/results?search_query=FinRL+trading",
    "category": "quant-trend",
    "categoryLabel": "AI 量化黑马",
    "badgeColor": "border-emerald-500/30 text-emerald-400 bg-emerald-500/10",
    "tagline": "基于开源项目 FinRL，探索深度强化学习（PPO/SAC）在投资组合与动态仓位的终极可能",
    "tier": "前沿极客前沿研究 · 终极形态探索",
    "tags": [
      "FinRL",
      "PPO算法",
      "SAC连续动作",
      "多智能体投资组合"
    ],
    "profile": "由开源金融强化学习组织 AI4Finance 发起并由众多先锋量化学者共同维护的实践生态。FinRL 是全球第一个将 DRL（深度强化学习，涵盖 DQN、DDPG、PPO、SAC、A2C）全链路应用于股票交易、高频做市和加密资产组合优化的开源框架，代表着 AI 在量化决策中的未来前沿。",
    "contentStyle": "结合金融论文讲解与开源代码实验。展示强化学习 Agent 在复杂非线性环境中的自主博弈过程，带有深厚的学术与未来科技感。",
    "videos": [
      {
        "title": "FinRL: Deep Reinforcement Learning for Stock Trading from Scratch",
        "theme": "手把手构建强化学习股票交易环境与智能体训练",
        "keyInsights": "定义状态空间（价格、指标、持仓）、动作空间（离散买卖与连续仓位百分比），用 PPO 算法训练自适应交易员。"
      },
      {
        "title": "PPO Agent vs Traditional Buy & Hold Benchmark",
        "theme": "强化学习算法在标普 500 上对抗被动买入持有的严苛实测",
        "keyInsights": "展示经过奖励函数调优的 Agent 如何在 2020 疫情暴跌与 2022 加息熊市中自主减仓避险，跑出卓越的卡玛比率。"
      },
      {
        "title": "Training a Neural Network to Manage Portfolio Cash Drag",
        "theme": "多资产投资组合动态现金流与仓位配置",
        "keyInsights": "利用连续动作空间（SAC 算法）实时输出 30 只股票的加权持仓比例，实现动态风险对冲平滑收益。"
      }
    ],
    "hookAnalysis": "【人类直觉的终结者】'Alphago 击败了人类围棋冠军，那么如果把同样的强化学习算法放到全球金融市场上，它会学到什么样的交易秘诀？今天我们用 FinRL 训练一个自主进化交易智能体。'",
    "scriptFramework": "【前沿探索】：提出强化学习在金融中的无限想象力 -> 构建标准的交易 Gym 环境 -> 设计抗噪音奖励函数 -> 启动深度强化训练 -> 检验跨周期泛化胜率。",
    "actionableTakeaways": {
      "forTrading": "强化学习最强大的地方不在于‘预测下一根 K 线是涨是跌’，而在于‘在不确定环境中寻找最优仓位管理策略’。用 RL 做动态仓位调整（Position Sizing）比做择时更有胜算。",
      "forCreator": "‘AI 自我博弈/强化学习进化’是整个科技界最吸睛的科幻现实题材，这类视频不仅吸引交易者，更能破圈吸引所有对通用人工智能（AGI）感兴趣的泛科技用户。"
    },
    "channelUrl": "https://www.youtube.com/results?search_query=FinRL+trading",
    "track": "AI 量化交易",
    "tierLabel": "实战派黑马",
    "positioning": "由开源金融强化学习组织 AI4Finance 发起并由众多先锋量化学者共同维护的实践生态。FinRL 是全球第一个将 DRL（深度强化学习，涵盖 DQN、DDPG、PPO、SAC、A2C）全链路应用于股票交易、高频做市和加密资产组合优化的开源框架，代表着 AI 在量化决策中的未来前沿。",
    "viralTopics": [
      "FinRL: Deep Reinforcement Learning for Stock Trading from Scratch",
      "PPO Agent vs Traditional Buy & Hold Benchmark",
      "Training a Neural Network to Manage Portfolio Cash Drag"
    ]
  }
];

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
