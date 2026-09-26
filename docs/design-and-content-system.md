# 网站设计哲学与内容体系架构指南 (Design & Content System)

> **文档性质**：Intelligence Nexus 网站 UI/UX 美学设计原则与全维内容体系规范  
> **设计灵感源**：**DailyArt Magazine**、**Financial Times Editorial**、**Bloomberg Pursuits**  
> **核心目标**：构建兼具顶级学术杂志质感、高端金融报刊排版与极客深度的高信噪比决策门户  

---

## 一、 网站设计哲学与 UI/UX 规范 (Design Philosophy)

传统的开发看板与数据仪表盘往往陷入“全盘罗列、单页无限滚动、冷冰冰的技术指标堆砌”的误区。**Intelligence Nexus 确立了以“数字艺术杂志 (Digital Magazine & Editorial Experience)”为核心的美学体系**。

```mermaid
graph TD
    A["DailyArt 艺术杂志美学<br/>(经典排版/充足留白/优雅衬线)"] --> M["Intelligence Nexus 视觉体系"]
    B["高端金融报刊逻辑<br/>(多维大盘/分层抽屉/高信噪比)"] --> M
    C["极客开源交付法则<br/>(代码高亮/架构流转/可执行Takeaways)"] --> M
    
    M --> D["栏目分流导航 (Non-monolithic Tabs)"]
    M --> E["多级元数据徽章 (Metadata Chips)"]
    M --> F["沉浸式档案抽屉 (Dossier Slide-over)"]
    M --> G["响应式双端适配 (Desktop Grid + Mobile Flow)"]
```

### 1. 核心设计原则 (Core Editorial Principles)

1. **拒绝“巨石单页拼凑” (Anti-Monolithic Architecture)**：
   * **严禁**把所有模块（创作者名单、每日行情、选题模型、Hook拆解、路线图）机械粗暴地堆叠在单页上；
   * 采用**模块化栏目导航（Tabs / Sub-routes）**：用户在不同栏目之间无缝平滑切换，不需要在单页上来回滚动上百行。
2. **杂志级字体与排版层级 (Typography Hierarchy)**：
   * **主标题与刊头**：采用典雅大气的 **Editorial Serif**（如 Playfair Display, Merriweather, Georgia），营造权威沉稳的报刊第一印象；
   * **正文与元数据**：采用清晰高可读性的现代无衬线字体（Inter, System Sans），代码与指标使用等宽字体（JetBrains Mono, Fira Code）；
   * **字符间距与行高**：正文行高保持在 `1.7 ~ 1.8`，标题字距紧致微调（`tracking-tight`），保证长文与深度策略复盘阅读不疲劳。
3. **留白与空间韵律 (Whitespace & Spatial Rhythm)**：
   * 遵循“充足呼吸感”准则：卡片之间、栏目段落之间保持大尺度间距（`gap-6` 至 `gap-10`，`py-12` 至 `py-16`）；
   * 卡片避免生硬厚重的深阴影，采用超细精致边框（`border-stone-200 / border-zinc-800`）配合极轻柔的微阴影（`shadow-sm`）。
4. **多级元数据标签系统 (Metadata & Badges)**：
   * 设立双层过滤系统：
     * **主赛道（Tracks）**：`AI 深度解读` vs `AI 量化交易`；
     * **权威梯队（Tiers）**：`头部权威`、`新锐先锋`、`代码基建`、`实战派黑马`；
   * 每一位博主与研报卡片均配有醒目的专属状态色块，快速建立观众视觉心智。
5. **沉浸式档案抽屉与详情视图 (Dossier Slide-over View)**：
   * 点击任意创作者卡片时，不是生硬跳转新页面，而是展开沉浸式的**全维画像抽屉（Drawer / Modal）**；
   * 完整呈现博主简介、爆款代表作、黄金 30 秒 Hook 脚本实录、实盘完播率节奏与针对创作者/量化交易者的具体行动建议（Actionable Takeaways）。

---

## 二、 核心内容体系与三大业务支柱 (Content System)

Nexus 构建了面向顶级 AI 开发者与量化从业者的三大结构化内容支柱：

### 支柱 1：AI 与量化创作者智库 (Creators Intelligence Hub)
收录全球 40 位最具代表性的 AI/量化博主（数据源存储于 [`src/data/creatorsData.ts`](file:///C:/Users/winbox-lab/gemini/src/data/creatorsData.ts)）：

#### ① 爆款选题四象限模型 (Viral Content Quadrants)
* **极限实测型 (Curiosity / Proof)**：直接展示真实盈亏曲线（PnL）或运行实况，以悬念打破观众防线（例：“我让 Claude 跑了 7 天实盘，结果居然...”）；
* **降维重塑型 (Disruption / Efficiency)**：展示生产力暴增的 AI 工作流，把 3 周手工活压缩至 10 分钟（例：“还在手动写策略？用 Cursor+RBI 框架生成并回测”）；
* **防坑打假型 (Authority / Counter-Intuition)**：用学术与统计实据戳破市场神话，建立极高专业信任（例：“揭秘 99% 回测都在造假：过度拟合的 3 个致命陷阱”）；
* **开箱开源型 (High Perceived Value)**：代码级无保留交付，通过 GitHub 沉淀铁杆技术社群（例：“全网首发！开源我自用的多智能体加密货币高频监控 Bot”）。

#### ② 黄金前 30 秒 Hook 脚本拆解 (The 30-Second Hook Formulas)
* **模式 A（冲突 + 悬念 + 成果即刻展示）**：
  * `00:00 - 00:05`：视觉冲击，展示实时 PnL 盈亏图或代码终端；
  * `00:06 - 00:15`：直击低效繁琐的人工写策略痛点；
  * `00:16 - 00:30`：无课不割，直接打开 VS Code 开源带克隆。
* **模式 B（思维颠覆 + 认知重构）**：
  * `00:00 - 00:10`：颠覆常识，直指传统 Python Pandas 回测又慢又过拟合；
  * `00:11 - 00:25`：给出纯向量化 VectorBT 8 秒提速与蒙特卡洛防坑实操。

#### ③ 完播率留存五步节奏 (Retention Framework)
`问题暴露 (Problem)` ➔ `AI 协作实录 (AI in Action)` ➔ `回测与压力测试 (Stress Test)` ➔ `硬性风控熔断器 (Kill-Switch)` ➔ `开源号召与交付 (Call to Action)`。

#### ④ 顶级量化实战四阶段路线图 (Quant Roadmap)
* **阶段一：基础设施构建 (Infra)**：Python 3.11+, VS Code/Cursor, CCXT, Alpaca API；
* **阶段二：回测与数学归因 (Backtesting)**：VectorBT, Backtrader, Freqtrade, Sharpe > 1.5, Max Drawdown < 15%；
* **阶段三：AI / LLM 智能体赋能 (Agentic)**：Claude, Cursor, LangGraph, 多智能体分工审查闭环；
* **阶段四：模拟盘与实盘防御 (Live Defense)**：Paper Trading 4-8周, Hard Kill-Switch 物理熔断, 微小资金实盘。

---

### 支柱 2：每日多维情报专报 (Daily Dispatch & Market Sentiment)
* **多市场行情速览**：加密货币、美股科技龙头、宏观流动性指标；
* **学术前沿追踪**：每日自动化爬取 arXiv AI/量化高分新论文并提炼核心贡献；
* **双维度情绪指数**：传统金融情绪（CNN Fear & Greed）+ 加密流动性情绪（Crypto Fear & Greed Index）。

---

### 支柱 3：YouTube 自动化深度调研流水线 (YouTube Research Pipeline)
* 融合 **API 趋势发现**、**RSS XML 零配额最新 15 视频订阅**、**API 批量元数据增强** 与 **公开 TimedText 字幕 (SRT) 提取**；
* 形成“自动发现新趋势 ➔ 自动拉取博主动态 ➔ 自动提炼核心量化策略”的闭环。

---

## 三、 设计落地检查清单 (Implementation Checklist)
- [x] 顶部杂志刊头导航（Header & Edition Date）
- [x] 多栏目切换（每日专报 / 创作者智库 / 爆款方法论 / 量化路线图）
- [x] 40 位博主全量卡片流与双层 Filter（赛道 + 梯队）
- [x] 沉浸式博主画像抽屉（包含选题、Hook 脚本、实操建议）
- [x] 响应式设计支持（桌面端 3 列网格，平板 2 列，移动端单列流）

---

## 四、 设计师 Skills 赋能矩阵与工具流 (Designer Skills Ecosystem)

为了解决“参考设计稿却无法精准还原神韵”、“产出千篇一律 AI 工业模板”的痛点，环境已全面装配全球主流顶尖设计师 Skill 矩阵：

| Skill 标识 | 研发源 | 核心设计职能 | 触发与调用方式 |
| :--- | :--- | :--- | :--- |
| **`frontend-design`** | Anthropic 官方 | **破除 AI 模板套路**。强制意图优先、个性化衬线/无衬线搭配、克制留白与排版反套路设计。 | 编写/重构前端页面时自动遵循或显式调用 |
| **`ui-ux-pro-max`** | NextLevelBuilder | **全能设计系统与智能决策库**。本地内置 79 款主流设计风格（含 Editorial Grid / Magazine）、192 组色盘与 74 对字体层级。 | 终端随时检索：`python .agents/skills/ui-ux-pro-max/scripts/search.py "<query>" --domain <domain>` |
| **`web-design-guidelines`** | Vercel Labs | **工程级 Web 交互与可访问性审查**。100+ 条 UX、聚焦态、触摸热区与视差指标校验。 | UI 构建后审查审计 |
| **`design-system`** | Agent Skills | **Design Tokens 与原子组件规范**。Tailwind 语义化主题配置与跨端组件变体封装。 | 基础设计系统搭建 |

### 实操范例：复刻杂志风 (Editorial Grid Magazine)
智能体可直接利用 `ui-ux-pro-max` 内置的 `editorial-grid-magazine` 规则库指导 CSS 与排版：
```bash
python .agents/skills/ui-ux-pro-max/scripts/search.py "editorial magazine" --domain style
```
* **核心排版变量**：
  * 大标题字体：`Georgia / Merriweather / Playfair`
  * 首字下沉（Drop Caps）：`::first-letter { font-size: 4em; }`
  * 呼吸感留白：`column-gap: 2rem`，多栏杂志报刊网格
  * 对比度标准：严守 WCAG AA 4.5:1 基线，彻底杜绝“灰底浅灰字”的不可读问题。
