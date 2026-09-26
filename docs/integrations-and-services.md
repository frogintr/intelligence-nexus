# 外部集成、设计资产与云端部署规范

> **文档状态**：已外部化持久存储  
> **更新时间**：2026-09-26  

---

## 1. Vercel 云端部署与域名配置

本项目通过 GitHub CI/CD 自动同步并部署至 Vercel 生产边缘网络。

### 1.1 核心账户与资产信息 (Account Mapping)

> [!IMPORTANT]
> **统一账户规范**：本项目绑定的 GitHub 与 Vercel 账号均严格使用 **`froginwell.tr@gmail.com`**（用户名：`frogintr`）。
> **严禁与本机已存在的其他账号（如 `frogingit`）混淆！**

| 服务平台 | 绑定主邮箱 | 用户标识 (Username) | 作用与关联资源 |
| :--- | :--- | :--- | :--- |
| **GitHub** | `froginwell.tr@gmail.com` | `frogintr` | 源码仓库：[`https://github.com/frogintr/intelligence-nexus`](https://github.com/frogintr/intelligence-nexus) |
| **Vercel** | `froginwell.tr@gmail.com` | `frogintr` | 线上部署、边缘加速、双生产域名解析 |

### 1.2 本机 Git 与 GitHub CLI 防混淆配置 (Multi-Account Isolation)

由于本机可能并存多个 GitHub 账号（如 `frogingit`），为了确保本仓库提交（Git Commit）与 CLI 自动化操作 100% 隔离，执行了以下硬性约束：

1. **仓库级本地 Git 配置 (Local Git Config)**：
   本仓库目录已锁定专属作者身份，绝不继承全局可能存在的 `frogingit`：
   ```bash
   git config --local user.name "frogintr"
   git config --local user.email "froginwell.tr@gmail.com"
   ```
2. **GitHub CLI (`gh`) 活跃账号切换**：
   若使用 `gh` 命令行管理 Issues / Pull Requests / Actions，请确保当前活跃账号为 `frogintr`：
   ```bash
   # 查看当前 gh 状态
   gh auth status
   # 确保切换至 frogintr
   gh auth switch --user frogintr
   ```

### 1.3 生产地址与发布设置
* **默认发布分支**：`main`
* **生产就绪线上地址**：
  * 主生产域名：`https://in-nexus.vercel.app`
  * 备用别名域名：`https://nexus-daily.vercel.app`
* **构建设置**：
  * Framework Preset: Next.js
  * Build Command: `next build`
  * Output Directory: `.next`

### 1.4 自动部署机制
当向 `main` 分支执行 `git push origin main` 时，Vercel 会自动触发生产流水线构建；本地通过 Vercel CLI 亦可执行手动预检发布：
```bash
# 预检部署测试
vercel
# 生产环境直接发布
vercel --prod
```

---

## 2. Refero Design MCP 设计集成

为了使系统具备顶尖的 UI/UX 美学（复刻 DailyArt Magazine 等经典杂志报刊排版体系），已集成 Refero 官方 MCP 设计服务。

### 2.1 配置定义
* **配置文件路径**：`C:\Users\winbox-lab\.gemini\config\mcp_config.json`
* **服务器端点**：`https://api.refero.design/mcp`
* **本地凭据备份**：`~/.secrets/refero-mcp-token.txt`（安全归档目录）

### 2.2 可用设计检索工具
* `refero_search_screens`: 按照页面类型（Landing、Article、Feed 等）搜索全球顶尖移动与网页端设计截图。
* `refero_get_style`: 提取经典页面的调色板（Palette）、字体层级（Typography）与空间留白系统。
* `refero_get_flow`: 获取复杂业务链路（如结算、图表交互、深度阅读模式）的完整设计流程。

---

## 3. 本地运行与微服务矩阵

| 服务名称 | 运行端口 | 启动命令 / 入口 | 作用说明 |
| :--- | :--- | :--- | :--- |
| **Nexus 核心系统 (Next.js)** | `http://localhost:3000` | `npm run dev` | 生产级前端与后端全栈，承载每日智库、博主全维画像与研报 |
| **原生轻量预览器** | `http://127.0.0.1:8080` | `node server.js` | 位于 `C:\Users\winbox-lab\antigravity\web_portal` 的原生零依赖展示站 |
| **Google Cloud CLI** | 本地可执行文件 | `C:\Users\winbox-lab\google-cloud-sdk\bin\gcloud.cmd` | Google Cloud 项目配置与服务身份核验 |
