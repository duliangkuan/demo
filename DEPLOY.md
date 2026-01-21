# Vercel 部署指南

## 通过 Vercel CLI 部署

### 步骤 1: 登录 Vercel

在终端运行以下命令：

```bash
vercel login
```

这会打开浏览器，您需要：
1. 使用 GitHub、GitLab 或 Bitbucket 账号登录
2. 授权 Vercel 访问您的账号

### 步骤 2: 部署到生产环境

登录成功后，运行：

```bash
vercel --prod
```

或者首次部署（会创建项目）：

```bash
vercel
```

### 步骤 3: 确认部署

按照提示：
- 确认项目设置（直接回车使用默认值）
- 确认部署（输入 `y` 或直接回车）

### 部署完成后

部署成功后，Vercel 会提供：
- 生产环境 URL（如：`https://your-project.vercel.app`）
- 部署详情和日志

## 其他部署方式

### 方式 2: 通过 GitHub 自动部署（推荐）

1. 将代码推送到 GitHub 仓库
2. 访问 https://vercel.com
3. 点击 "Add New Project"
4. 导入您的 GitHub 仓库
5. Vercel 会自动检测 Vite 项目并配置
6. 点击 "Deploy" 完成部署

### 方式 3: 使用 Vercel Token

如果您有 Vercel Token，可以使用：

```bash
vercel --token YOUR_TOKEN --prod
```

## 项目配置

项目已包含 `vercel.json` 配置文件，确保：
- ✅ 构建命令：`npm run build`
- ✅ 输出目录：`dist`
- ✅ SPA 路由重写已配置

## 注意事项

- 首次部署可能需要几分钟
- 确保所有依赖都在 `package.json` 中
- 部署后检查路由是否正常工作
