# Google Cloud & OAuth 2.0 基础设施与凭据配置指南

> **文档状态**：已外部化持久存储  
> **关联项目**：Intelligence Nexus (`https://github.com/frogintr/intelligence-nexus`)  
> **更新时间**：2026-09-26  

---

## 1. 核心 Google Cloud 项目概览

本项目与自动化工具套件共用统一的 Google Cloud 项目基础设施：

| 配置项 | 详细信息 | 存放路径 / 引用位置 |
| :--- | :--- | :--- |
| **GCP Project ID** | `modular-canto-509813-s8` | `gcloud config get-value project` |
| **OAuth 2.0 Client ID** | `766068903420-tq1eq91783u19a2skanneclnu2p7877l.apps.googleusercontent.com` | Google Cloud Console -> APIs & Services -> Credentials |
| **OAuth 原始凭据文件** | `gcloud-oauth-client.json` | 本地单独保管于 `~/.secrets/gcloud-oauth-client.json` |
| **Google Cloud SDK** | 版本 586.0.0+ | `C:\Users\winbox-lab\google-cloud-sdk\bin\gcloud.cmd` |
| **MCP 统一配置文件** | `mcp_config.json` | `C:\Users\winbox-lab\.gemini\config\mcp_config.json` |

---

## 2. Google Workspace MCP 服务配置

系统已成功接入基于 OAuth 2.0 的 **Google Workspace MCP Server**，实现与个人 Google 云端资产的安全直连。

### 2.1 运行时架构与配置定义
MCP 服务在 `C:\Users\winbox-lab\.gemini\config\mcp_config.json` 中定义如下：
```json
{
  "mcpServers": {
    "google-workspace": {
      "command": "uvx",
      "args": [
        "--from",
        "google-workspace-mcp",
        "google-workspace-worker.exe"
      ],
      "env": {
        "GOOGLE_WORKSPACE_CLIENT_ID": "766068903420-tq1eq91783u19a2skanneclnu2p7877l.apps.googleusercontent.com",
        "GOOGLE_WORKSPACE_CLIENT_SECRET": "${LOCAL_ENV_OR_SECRET}",
        "GOOGLE_WORKSPACE_REFRESH_TOKEN": "${LOCAL_REFRESH_TOKEN}"
      }
    }
  }
}
```

### 2.2 支持的 Google Workspace 能力矩阵
通过该 MCP 服务，AI Agent 与自动化脚本具备以下官方接口能力：
- **Google Drive**：文件检索 (`drive_search_files`)、内容读取 (`drive_read_file_content`)、目录管理、分享上传。
- **Google Docs**：创建文档 (`docs_create_document`)、读取为 Markdown (`docs_get_content_as_markdown`)、文本与排版批处理。
- **Google Sheets**：读写范围数据 (`sheets_read_range`, `sheets_write_range`)、添加表格、单元格样式格式化。
- **Gmail**：邮件查询 (`query_gmail_emails`)、读取邮件详情与附件、创建草稿 (`create_gmail_draft`)。
- **Google Calendar & Slides**：事件日历同步、幻灯片生成与备注。

---

## 3. YouTube Data API v3 接入与配额设置

在项目 `modular-canto-509813-s8` 下启用 YouTube Data API v3，可以为 Nexus 站点提供合规、免封禁的趋势检索与元数据抓取。

### 3.1 启用步骤（在已绑定的 GCP 项目中）
1. 打开浏览器访问：[Google Cloud Console - YouTube Data API v3](https://console.cloud.google.com/apis/library/youtube.googleapis.com?project=modular-canto-509813-s8)
2. 确认右上角项目为 `modular-canto-509813-s8`，点击 **启用 (Enable)**。
3. 进入 **凭据 (Credentials)** 页面，点击 **创建凭据 (Create Credentials) -> API 密钥 (API Key)**。
4. （安全建议）在 API 密钥详情中，设置 **API 限制 (API restrictions)** 为仅限 `YouTube Data API v3`，避免密钥被误用。
5. 将生成的 API Key 写入本项目的本地 `.env.local` 文件：
   ```bash
   YOUTUBE_API_KEY="AIzaSy..."
   ```

### 3.2 免费配额规则
- **每日免费配额**：`10,000` Quota Units（太平洋时间每日午夜重置）。
- **零风险保障**：走官方 API Key 查询，完全受 Google Cloud 配额控制，不依赖个人登录态 Cookie，**永远不会导致个人 Google 账号被风控或封禁**。

---

## 4. 凭据维护与重新授权步骤（Disaster Recovery）

如果未来遇到 OAuth Token 过期、被撤销或需要切换账号授权，按以下步骤重置：

1. **核对 Client ID 与 Secret**：确认 `~/.secrets/gcloud-oauth-client.json` 文件存在。
2. **重新运行 OAuth 本地回调流程**：
   使用 Python `google-auth-oauthlib` 启动本地简易授权服务器：
   ```bash
   uv run --with google-auth-oauthlib python -c "
   import os
   from pathlib import Path
   from google_auth_oauthlib.flow import InstalledAppFlow
   scopes = ['https://mail.google.com/', 'https://www.googleapis.com/auth/documents', 'https://www.googleapis.com/auth/drive']
   secret_path = Path.home() / '.secrets' / 'gcloud-oauth-client.json'
   flow = InstalledAppFlow.from_client_secrets_file(str(secret_path), scopes=scopes)
   creds = flow.run_local_server(port=8080)
   print('New Refresh Token:', creds.refresh_token)
   "
   ```
3. **更新配置**：将新获取的 `refresh_token` 更新至 `C:\Users\winbox-lab\.gemini\config\mcp_config.json` 的 `GOOGLE_WORKSPACE_REFRESH_TOKEN` 字段，重启 Antigravity CLI 或 IDE 即可恢复。

---

## 5. 安全合规准则
* **切勿将包含真实密钥的文件提交至 Git 仓库**（`.gitignore` 已配置过滤 `.env`, `.env*.local`, `spark_*.txt`, `*.json` 凭据）。
* 如需在团队协作或 CI/CD 中使用，请通过 Vercel Environment Variables 或 GitHub Secrets 进行注入。
