# 🚀 Bolt.new - AI驱动的全栈Web开发平台

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.18.0-brightgreen)](https://nodejs.org/)
[![PNPM](https://img.shields.io/badge/pnpm-9.4.0-orange)](https://pnpm.io/)

<div align="center">
  <img src="./public/social_preview_index.jpg" alt="Bolt.new Preview" style="border-radius: 8px; max-width: 100%;" />
</div>

## 📋 项目概述

**Bolt.new** 是一个革命性的AI驱动的全栈Web开发平台，允许开发者通过自然语言提示在浏览器中直接创建、编辑、运行和部署完整的Web应用程序。无需本地开发环境设置，所有功能都在浏览器中完成。

### 🌟 核心特色

- **🤖 AI驱动开发**: 集成 Claude Sonnet 3.5，通过自然语言生成和修改代码
- **🌐 浏览器内开发环境**: 基于 StackBlitz WebContainer API 的完整开发环境
- **⚡ 实时协作**: AI与开发者实时协作，智能代码生成与人工编辑完美结合
- **📦 包管理支持**: 完整的npm包安装和Node.js服务器运行能力
- **🎨 现代化UI**: 基于React+Remix的响应式界面设计
- **🔄 实时预览**: 代码变更实时预览，所见即所得
- **☁️ 一键部署**: 直接从聊天界面部署到生产环境

## 🏗️ 技术架构

### 前端技术栈
- **框架**: [Remix](https://remix.run/) + [React 18](https://reactjs.org/)
- **样式**: [UnoCSS](https://unocss.dev/) + SCSS模块化
- **状态管理**: [Nanostores](https://github.com/nanostores/nanostores)
- **代码编辑器**: [CodeMirror 6](https://codemirror.net/)
- **终端**: [xterm.js](https://xtermjs.org/)
- **动画**: [Framer Motion](https://www.framer.com/motion/)

### 后端与AI
- **AI模型**: [Anthropic Claude](https://www.anthropic.com/) via [AI SDK](https://github.com/vercel/ai)
- **开发环境**: [WebContainer API](https://webcontainers.io/api)
- **部署平台**: [Cloudflare Pages](https://pages.cloudflare.com/) + [Workers](https://workers.cloudflare.com/)
- **构建工具**: [Vite](https://vitejs.dev/)

### 开发工具
- **包管理**: pnpm 9.4.0
- **类型检查**: TypeScript 5.5+
- **代码质量**: ESLint + Prettier
- **测试框架**: Vitest

## 🚀 快速开始

### 环境要求

- **Node.js**: >=18.18.0
- **pnpm**: 9.4.0
- **现代浏览器**: Chrome 130+, Firefox 最新版, Safari 最新版

### 安装步骤

1. **克隆项目**
   ```bash
   git clone https://github.com/stackblitz/bolt.new.git
   cd bolt.new
   ```

2. **安装依赖**
   ```bash
   pnpm install
   ```

3. **环境配置**
   
   创建 `.env.local` 文件并配置API密钥：
   ```env
   # 必需: Anthropic API密钥
   ANTHROPIC_API_KEY=your_anthropic_api_key_here
   
   # 可选: 调试级别
   VITE_LOG_LEVEL=debug
   ```

4. **启动开发服务器**
   ```bash
   pnpm run dev
   ```

5. **访问应用**
   
   打开浏览器访问 `http://localhost:5173`

## 📱 主要功能模块

### 💬 AI聊天界面
- 智能代码生成和修改
- 自然语言项目需求理解
- 实时代码解释和文档生成
- 多轮对话上下文保持

### 📝 代码编辑器
- 语法高亮支持多种语言
- 智能代码补全
- 实时错误检测
- 代码格式化和重构

### 🖥️ 工作台环境
- **文件管理器**: 完整的项目文件树操作
- **实时预览**: 应用运行效果实时展示
- **集成终端**: 完整的命令行访问
- **端口管理**: 多服务端口智能管理

### 📚 项目模板
- React + Vite
- Next.js 应用
- Vue.js 项目
- Node.js 后端
- 全栈应用模板

## 🛠️ 开发命令

```bash
# 开发环境
pnpm run dev          # 启动开发服务器
pnpm run dev:debug    # 启动调试模式

# 构建与部署
pnpm run build        # 构建生产版本
pnpm run preview      # 本地预览生产构建
pnpm run deploy       # 部署到Cloudflare Pages

# 代码质量
pnpm run lint         # 代码检查
pnpm run lint:fix     # 自动修复代码问题
pnpm run typecheck    # TypeScript类型检查

# 测试
pnpm test             # 运行测试套件
pnpm test:watch       # 监视模式运行测试
```

## 📂 项目结构

```
bolt.new/
├── app/                          # 主应用代码
│   ├── components/               # React组件
│   │   ├── chat/                # AI聊天相关组件
│   │   ├── editor/              # 代码编辑器组件  
│   │   ├── workbench/           # 工作台组件
│   │   └── ui/                  # 通用UI组件
│   ├── lib/                     # 核心库
│   │   ├── stores/              # 状态管理
│   │   ├── webcontainer/        # WebContainer集成
│   │   └── runtime/             # 运行时逻辑
│   ├── routes/                  # 路由定义
│   └── styles/                  # 样式文件
├── functions/                   # Cloudflare Functions
├── public/                      # 静态资源
└── types/                       # TypeScript类型定义
```

## 🔧 配置选项

### 环境变量

| 变量名 | 必需 | 描述 | 默认值 |
|--------|------|------|--------|
| `ANTHROPIC_API_KEY` | ✅ | Anthropic API密钥 | - |
| `VITE_LOG_LEVEL` | ❌ | 日志级别 | `info` |
| `NODE_ENV` | ❌ | 环境模式 | `development` |

### AI模型配置

项目默认使用 Claude Sonnet 3.5，可在 `app/lib/.server/llm/` 中自定义：

- 模型参数调整
- 提示词模板定制  
- 响应流处理配置

## 🚀 部署指南

### Cloudflare Pages 部署

1. **准备部署**
   ```bash
   pnpm run build
   ```

2. **配置Wrangler**
   ```bash
   npx wrangler login
   ```

3. **执行部署**
   ```bash
   pnpm run deploy
   ```

### 环境变量配置

在Cloudflare Dashboard中配置生产环境变量：
- `ANTHROPIC_API_KEY`
- 其他自定义配置

## 🔍 故障排除

### 常见问题

**Chrome 129 兼容性问题**
- 使用Chrome Canary或更新版本
- 或使用其他现代浏览器

**WebContainer启动失败**
- 检查浏览器是否支持WebContainer
- 确保网络连接稳定

**AI API调用失败**  
- 验证API密钥有效性
- 检查API配额限制

### 获取帮助

- 📖 [查看文档](./CONTRIBUTING.md)
- 🐛 [报告问题](https://github.com/stackblitz/bolt.new/issues)
- 💬 [社区讨论](https://github.com/stackblitz/bolt.new/discussions)

## 🤝 贡献指南

我们欢迎社区贡献！请查看 [CONTRIBUTING.md](./CONTRIBUTING.md) 了解：

- 代码贡献流程
- 开发环境设置
- 代码规范要求
- 问题报告模板

### 贡献类型

- 🐛 Bug修复
- ✨ 新功能开发
- 📝 文档改进
- 🎨 UI/UX优化
- ⚡ 性能提升

## 📄 许可证

本项目采用 [MIT License](./LICENSE) 开源协议。

## 🙏 致谢

- [StackBlitz](https://stackblitz.com/) - WebContainer技术提供
- [Anthropic](https://www.anthropic.com/) - Claude AI模型
- [Vercel](https://vercel.com/) - AI SDK开发
- [Remix](https://remix.run/) - Web框架支持

---

<div align="center">
  <p>⭐ 如果这个项目对你有帮助，请给我们一个star！</p>
  <p>Made with ❤️ by the StackBlitz Team</p>
</div>
