# AGENTS.md - Intelligence Nexus 智能体起手规范与工程指南

> **文档性质**：项目全局默认起手指南（Agent Operational Guidelines & Project Bible）  
> **适用对象**：所有在此工作区执行任务的 AI 智能体（AGY Agent / Antigravity CLI / Cursor / Claude）与核心开发者  
> **项目仓库**：[`https://github.com/frogintr/intelligence-nexus`](https://github.com/frogintr/intelligence-nexus)  
> **生产线上地址**：[`https://in-nexus.vercel.app`](https://in-nexus.vercel.app) | [`https://nexus-daily.vercel.app`](https://nexus-daily.vercel.app)  

---

## 1. 项目介绍

### 1.1 面向用户与核心价值
**Intelligence Nexus（智库枢纽）** 是一个面向全球顶尖 **AI 开发者、量化策略研究员与高净值独立交易者** 的前沿情报洞察与决策门户。

### 1.2 解决的关键问题
- **实战门槛高**：前沿 AI 技术赋能实际金融交易的工程链路复杂，缺乏开箱即用的落地参考；
- **信息信噪比低**：市场资讯与 YouTube 视频泛滥成灾，博主内容造假严重（如回测过度拟合、造神带单）；
- **缺乏体系化交付**：缺乏结构化的选题方法论、黄金 Hook 脚本模型与代码级开源交付体系。

### 1.3 核心功能及功能间关系
1. **AI 与量化交易创作者智库 (Creators Intelligence Hub)**：
   * 结构化收录全球 40 位头部权威、新锐先锋与量化实战黑马（数据源存储于 `src/data/creatorsData.ts`）。
   * 提供博主全维画像：爆款选题模型（四象限）、黄金前 30 秒 Hook 脚本拆解、完播率节奏与代码级开源交付法则。
2. **每日市场多维情报专报 (Daily Dispatch & Market Sentiment)**：
   * 聚合多资产行情走势（加密资产、美股科技巨头）、学术前沿（arXiv 新论文跟踪）与双维度情绪指标（CNN / Crypto Fear & Greed Index）。
3. **YouTube 自动化深度调研流水线 (YouTube Research Pipeline)**：
   * 融合官方 API 趋势探针与公开 RSS 零配额视频流，配合公开字幕提取算法，全天候自动化追踪最新量化/AI 趋势，为智库与专报持续输送活水。

### 1.4 业务术语与职责边界
- **核心术语**：
  * `PnL`（真实盈亏曲线）、`Sharpe Ratio`（夏普比率）、`Max Drawdown`（最大回撤）；
  * `VectorBT`（纯向量化回测引擎）、`Kill-Switch`（硬性资金物理熔断机制）；
  * `Hook`（黄金前 30 秒留存脚本）、`TimedText`（免 OAuth 公开字幕流）、`Quota Units`（GCloud API 每日配额单位）。
- **职责边界**：
  * 只提供硬核学术洞察、开源策略分析与内容制作方法论；
  * **绝不包装带单老师，绝不提供虚假投资建议，绝不提供无验证回测**。

---

## 2. 总体原则

### 2.1 最高原则 (Supreme Invariants)

- **术语约束**：使用项目已有的术语（如 `ai-top`, `quant-rising`, `Hook`, `Dossier`, `Daily Dispatch`, `Kill-Switch` 等），严禁推测或造词。
- **编程思考（第一性原理）**：运用第一性原理思考，拒绝经验主义和方案盲从。不要假设用户完全清楚目标，从原始需求和真实问题出发：
  * 若目标模糊，请停下来和用户确认，切忌盲目扩大改动范围；
  * 若目标清晰但路径非最优，请直接建议更短、成本更低、可读性更好、更易维护的方案。
- **简洁优先**：用最少的代码解决问题。只回答用户实际问的问题，精准、简洁，必要扩展必须直接服务于原问题。
- **精准修改**：只碰必须碰的代码与文件，只清理自己造成的改动。不要重构没坏的东西，不要改进相邻的代码、注释或格式，除非得到用户明确许可。

### 2.2 常用约束 (Operational Constraints)

- **文档一致性**：代码改动若与项目既有设计文档、架构规范、接口定义相关，必须同步更新 `./docs/` 对应文档，保持代码与文档 100% 真实一致。
- **代码设计**：避免修改入参的副作用，方法/函数内严禁修改入参对象字段的值，推荐使用纯函数与不可变数据流。
- **统一账户规范（绝对红线）**：
  * 本项目所有 Git 提交、GitHub 协同与 Vercel 部署，必须严格使用账号 **`froginwell.tr@gmail.com`**（用户名：`frogintr`）；
  * **严禁与本机已存在的其他账号（如 `frogingit`）混淆**！
- **外部化凭据与机密存储**：
  * 严禁在源码或 Git 提交中硬编码真实 API Keys、OAuth Access Token、Client Secret 或账号私钥；
  * 本地凭证统一单独保管在安全专区 `~/.secrets/`，运行时配置通过 `.env.local` 加载。

---

## 3. 技术栈 (Tech Stack)

| 层次 / 领域 | 选型与工具 | 说明 |
| :--- | :--- | :--- |
| **前端框架** | Next.js 14+ (App Router) | React Server Components (RSC) + Client Components |
| **开发语言** | TypeScript 5+ | 严格类型检查，无 `any` 滥用 |
| **样式方案** | Tailwind CSS | 配合 DailyArt 杂志高阶调色板与排版规范 |
| **图标库** | `lucide-react` | 统一极简风格图标 |
| **运行时环境** | Node.js 20+，Windows PowerShell (`pwsh`) | 终端与批处理环境 |
| **外部集成** | Google Cloud OAuth, Workspace MCP, Refero MCP | 详见 `./docs/integrations-and-services.md` |

---

## 4. 架构 (Architecture)

### 4.1 模块结构

| 模块 / 目录 | 职责与说明 |
| :--- | :--- |
| **表现层 (`src/app/`)** | Next.js App Router 页面入口、路由分组与元数据配置 |
| **交互组件层 (`src/components/`)** | DailyArt 杂志级卡片流、沉浸式抽屉、大盘展示与导航交互组件 |
| **业务数据层 (`src/data/`)** | 40 位 AI/量化博主全维画像档案（TypeScript 格式定义与静态数据） |
| **自动化流水线 (`scripts/`)** | 每日专报爬虫调度脚本 (`fetch_daily_data.py`)、博主数据合并器 (`mergeCreators.js`) |
| **外部化文档库 (`docs/`)** | 项目工程指南、设计体系、GCloud OAuth 接入与 YouTube 调研流水线文档 |
| **机密存储专区 (`~/.secrets/`)** | 外部化保管的 OAuth 客户端凭据与 Refero 设计令牌 |

### 4.2 领域模块 (Domain Modules)

- **创作者智库领域 (`Creators Hub`)**：
  * 存储路径：`src/data/creatorsData.ts`
  * 职责：维护全球 40 位博主全维档案、四象限选题模型、黄金 30s Hook 脚本与实操建议。
- **每日情报专报领域 (`Daily Dispatch`)**：
  * 存储路径：`scripts/fetch_daily_data.py`, `data/daily/`
  * 职责：多市场行情走势、arXiv 论文摘要抓取与恐慌/贪婪情绪指数计算。
- **YouTube 调研流水线领域 (`YouTube Pipeline`)**：
  * 职责：运行“API 趋势搜索 ➔ 官方 RSS 零配额抓取 ➔ 批量详情增强 ➔ TimedText 字幕提取”四阶闭环。

### 4.3 架构约束

1. **调用链路**：Next.js Page (`page.tsx`) ➔ 领域交互组件 (`src/components/`) ➔ 领域数据 (`src/data/`)。
2. **单向依赖**：展示层依赖领域数据层，领域数据层严禁反向依赖 UI 组件。
3. **UI/UX 杂志美学规范**：
   * 严格复刻 **DailyArt Magazine** 经典艺术杂志美学（参见 [`docs/design-and-content-system.md`](./docs/design-and-content-system.md)）；
   * **拒绝巨石单页拼凑**：严禁把所有内容机械堆叠在单页长距离滚动；采用清晰的模块化栏目导航（Tabs）与沉浸式博主档案抽屉（Slide-over Drawer）。
4. **YouTube 调研零账户风控原则**：
   * 严禁在抓取脚本中携带用户个人 Google 登录态 Cookie；
   * 严格控制官方 API 消耗在 10,000 配额的 10% 以内，其余大流量走公开 RSS XML 与免 OAuth 字幕解析。

---

## 5. 外部化凭据与统一账号规范

### 5.1 统一账户防混淆隔离要求
* **统一主邮箱**：`froginwell.tr@gmail.com`
* **统一用户名**：`frogintr`
* **本地 Git 仓库隔离配置**：
  ```powershell
  git config --local user.name "frogintr"
  git config --local user.email "froginwell.tr@gmail.com"
  ```
* **GitHub CLI 活跃身份**：
  ```powershell
  gh auth switch --user frogintr
  ```

### 5.2 机密凭据归档清单
* Google Cloud OAuth Client：`~/.secrets/gcloud-oauth-client.json`
* Refero MCP 访问令牌：`~/.secrets/refero-mcp-token.txt`
* 本地环境变量文件：`C:\Users\winbox-lab\gemini\.env.local`

---

## 6. 日志与调试 (Logging & Debugging)

- **前端日志**：统一带有业务域前缀，如 `[Nexus::Creators]`, `[Nexus::Dispatch]`，避免散乱的裸 `console.log`。
- **敏感信息脱敏**：严禁在控制台或生产日志中输出真实 API Key、Token 或敏感个人凭据。
- **定时调度日志**：Python 脚本在终端运行中清晰打印 UTC 时间戳与当前处理进度。

---

## 7. 关键文件与全景映射 (Key Files Map)

| 文件或目录 | 用途说明 |
| :--- | :--- |
| [`AGENTS.md`](./AGENTS.md) | 本文件（项目全局起手指南与绝对红线） |
| [`README.md`](./README.md) | 项目工程总入口与知识资产总索引 |
| [`docs/design-and-content-system.md`](./docs/design-and-content-system.md) | DailyArt Magazine 设计哲学、四大爆款选题与内容体系 |
| [`docs/google-cloud-oauth.md`](./docs/google-cloud-oauth.md) | GCloud 项目 (`modular-canto-509813-s8`) 与 Workspace MCP 配置 |
| [`docs/youtube-research-pipeline.md`](./docs/youtube-research-pipeline.md) | YouTube 四阶混合流架构图与 10,000 配额预算表 |
| [`docs/integrations-and-services.md`](./docs/integrations-and-services.md) | 统一账号隔离规范（froginwell.tr）、Vercel 双域名与 Refero MCP |
| [`src/data/creatorsData.ts`](./src/data/creatorsData.ts) | 40 位博主全维画像与爆款方法论数据源 |
| [`.env.example`](./.env.example) | 标准化本地环境变量模板 |

---

## 8. 验证与质量红线 (Verification Standards)

- **构建验证（强制）**：任何代码或组件修改后，必须在终端执行并通过：
  ```powershell
  npm run build
  ```
  必须达到 100% 编译通过，0 TypeScript 类型错误，静态页面全量生成。
- **账号隔离校验**：提交前必须核验本地 Git 邮箱：
  ```powershell
  git config --local user.email # 必须输出 froginwell.tr@gmail.com
  ```
