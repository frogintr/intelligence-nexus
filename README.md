# Intelligence Nexus (智库枢纽)

> **全栈 AI 洞察、量化交易创作者智库与每日研报决策系统**  
> 线上生产地址：[https://in-nexus.vercel.app](https://in-nexus.vercel.app) | [https://nexus-daily.vercel.app](https://nexus-daily.vercel.app)  
> 源码仓库：[https://github.com/frogintr/intelligence-nexus](https://github.com/frogintr/intelligence-nexus)

---

## 🗂️ 核心架构与凭据资产索引 (Project & Credential Index)

为了防止多轮长会话上下文压缩导致关键技术信息遗失，本项目所有核心云端配置、OAuth 架构与自动化规范已全量**外部化持久存储于 [`./docs/`](./docs/README.md)**：

| 关键知识模块 | 文档入口 | 核心内容摘要 |
| :--- | :--- | :--- |
| **智能体起手规范 (Project Bible)** | [🤖 `AGENTS.md`](./AGENTS.md) | 项目全局默认起手指南、账户隔离红线（`froginwell.tr`）、代码与设计准则、YouTube 流水线规范 |
| **网站设计哲学与内容体系** | [🎨 `docs/design-and-content-system.md`](./docs/design-and-content-system.md) | DailyArt Magazine 美学复刻、四大爆款选题模型、黄金 30s Hook、五阶留存与量化路线图 |
| **Google Cloud & OAuth 架构** | [📂 `docs/google-cloud-oauth.md`](./docs/google-cloud-oauth.md) | GCP 项目 (`modular-canto-509813-s8`)、OAuth Client ID、Workspace MCP (Gmail/Docs/Drive) 接入指南及 Token 维护 |
| **YouTube 自动化调研流水线** | [📂 `docs/youtube-research-pipeline.md`](./docs/youtube-research-pipeline.md) | 趋势探测 + 官方 RSS 零配额流 + Batch 详情增强 + TimedText 字幕提取 (SRT) 混合架构，10,000 配额预算表与 40 位博主智库结构 |
| **外部集成与云端发布** | [📂 `docs/integrations-and-services.md`](./docs/integrations-and-services.md) | 统一账号隔离规范（froginwell.tr）、Vercel 双域名、Refero MCP 设计集成、本地服务端口拓扑 |
| **环境变量配置模板** | [⚙️ `.env.example`](./.env.example) | 标准化本地环境配置样例，指导安全配置 `.env.local` |

---

## 🚀 快速启动 (Quick Start)

### 1. 环境准备
确保本机安装了 Node.js 18+ (推荐 Node 20+)：
```bash
# 复制环境变量配置
cp .env.example .env.local

# 安装依赖
npm install
```

### 2. 本地开发调试
```bash
# 启动 Next.js 极速热重载开发服务器 (默认端口 3000)
npm run dev

# 访问浏览器
# http://localhost:3000
```

### 3. 构建与部署
```bash
# 构建生产包
npm run build

# 本地运行生产模式
npm run start

# 推送代码至 GitHub（自动触发 Vercel 生产构建）
git push origin main
```

---

## 📁 目录组织架构 (Directory Structure)

```text
├── docs/                       # 核心基础设施、凭证架构与调研流水线持久化文档库
│   ├── README.md               # 文档索引导航
│   ├── google-cloud-oauth.md   # Google Cloud 项目与 OAuth 凭据配置
│   ├── youtube-research-pipeline.md # YouTube 混合流架构与配额预算
│   └── integrations-and-services.md # Vercel、Refero 设计 MCP 与服务拓扑
├── src/                        # 前端应用核心代码
│   ├── app/                    # Next.js App Router 页面与路由
│   ├── components/             # UI 组件库（导航、画廊、研报卡片等）
│   ├── data/                   # 40 位 AI/量化博主智库与结构化数据
│   └── types/                  # 全局 TypeScript 接口定义
├── scripts/                    # 自动化脚本工具集
│   ├── fetch_daily_data.py     # 每日情报定时采集调度脚本
│   └── mergeCreators.js        # 创作者智库全维画像转换合并工具
├── data/daily/                 # 每日研报存档 JSON 目录
├── .env.example                # 环境变量配置模板
└── README.md                   # 本文件（工程总入口）
```

---

## 🛡️ 安全合规规范 (Security & Privacy)
* **严禁凭据提交**：真实 API Keys、OAuth Client Secret、Refresh Token 严禁提交至 Git 仓库，系统根目录 `.gitignore` 已配置严格过滤规则。
* **隔离采集环境**：所有 YouTube 数据抓取严格走官方 API Key 和公共 RSS 通道，绝不在抓取中搭载用户个人 Google 登录态 Cookie。
