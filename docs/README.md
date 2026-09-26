# Intelligence Nexus - 文档中心与知识索引库 (Docs Index)

> 本目录为项目关键基础设施、云端凭据架构、外部服务集成与自动化流水线的**外部化持久知识库**。  
> 即使会话历史发生上下文压缩（Auto-compact），所有工程决策与凭证配置均在此处可查可追溯。

---

## 📚 文档导航目录 (Documentation Catalog)

### 1. [网站设计哲学与内容体系架构指南](./design-and-content-system.md)
* **包含内容**：
  * **DailyArt Magazine** 杂志级视觉美学（衬线刊头、呼吸感留白、双层 Filter）
  * 拒绝巨石单页堆砌，采用模块化栏目导航与沉浸式博主档案抽屉
  * 三大业务支柱：40 位创作者全维画像（四象限选题、30s Hook、留存节奏、量化路线图）+ 每日情报专报 + YouTube 调研闭环

### 2. [Google Cloud & OAuth 2.0 基础设施与凭据配置指南](./google-cloud-oauth.md)
* **包含内容**：
  * GCP 核心项目信息 (`modular-canto-509813-s8`)
  * OAuth 2.0 客户端凭据（`~/.secrets/gcloud-oauth-client.json`）
  * Google Workspace MCP 服务接入规范（Gmail、Docs、Drive、Sheets 等）
  * YouTube Data API v3 接入与免费配额设置
  * 灾难恢复与 Token 重新获取指南

### 3. [YouTube AI & 量化交易调研自动化流水线架构指南](./youtube-research-pipeline.md)
* **包含内容**：
  * 四阶混合流架构图（API 搜索探测 + RSS 零配额流 + Batch 详情增强 + TimedText 字幕提取）
  * 每日 10,000 配额预算表与防风控白皮书
  * 40 位 AI/量化顶级博主智库资产结构（`src/data/creatorsData.ts`）
  * 核心代码模块实现与公开字幕解析方案

### 4. [外部集成、设计资产与云端部署规范](./integrations-and-services.md)
* **包含内容**：
  * GitHub 与 Vercel 统一账户隔离规范（严格使用 `froginwell.tr@gmail.com` / `frogintr`）
  * 本地 Git 与 `gh` CLI 防混淆操作指引
  * Vercel 生产部署与域名映射（`in-nexus.vercel.app` & `nexus-daily.vercel.app`）
  * Refero Design MCP 设计集成（`~/.secrets/refero-mcp-token.txt`）
  * 本地服务端口拓扑（Next.js `:3000` & Web Portal `:8080`）

### 5. [阶段性里程碑与内容深耕做厚执行蓝图](./milestones-and-content-enrichment-plan.md)
* **包含内容**：
  * UI/UX 艺术杂志 3 阶 Taste 蜕变清单（1720px 宽幅、7 大展厅独立背景、右侧全高大抽屉、DailyArt 红标）
  * 四大内容深耕行动矩阵（AI 前沿 4 篇专论、量化展厅三大装裱级因子、创作者 120 代表作台词级细化、宏观资产深化）
  * YouTube 访问受限下的降级容灾与本地内容做厚策略

### 6. [环境变量模板文件 (../.env.example)](../.env.example)
* 标准化环境变量样例，用于本地开发环境快速初始化（`.env.local`），杜绝敏感凭据泄露。
