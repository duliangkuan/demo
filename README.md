# 专升本教育平台 - 前端演示 Demo

这是一个完整的专升本教育平台前端演示项目，包含学生端、老师端和管理端三个模块。

## 功能特性

### 学生端
- **AI通关测**: 选择科目和章节，生成测评报告和学习建议
- **AI精准练**: 根据学科、章节、知识点、题型和难易度生成题目，显示答题统计
- **AI错题本**: 上传错题照片，AI诊断并生成举一反三题目，支持打印格式
- **学习任务**: 展示待完成的学习任务列表

### 老师端
- **班级管理**: 仪表盘、创建班级、班级列表、添加学员、学员列表
- **学员管理**: 
  - 查看通关情况：查看学生知识点通关情况和学情报告，支持手动通关或重测
  - 布置学习任务：文字任务和上传试卷（单元复习、期中考、期末考、模拟卷、真题卷、押题卷）

### 管理端
- **老师管理**: 创建老师账号、导出
- **学员管理**: 导出学员信息、添加收费信息
- **班级管理**: 查看、导出
- **测评管理**: 上传学生端AI通关测的题目
- **试卷管理**: 上传老师端的试卷

## 技术栈

- **React 18** - UI框架
- **TypeScript** - 类型安全
- **Vite** - 构建工具
- **Tailwind CSS** - 样式框架
- **React Router** - 路由管理
- **Lucide React** - 图标库

## 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

项目将在 `http://localhost:3000` 启动

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 项目结构

```
src/
├── layouts/          # 布局组件
│   ├── StudentLayout.tsx    # 学生端布局
│   ├── TeacherLayout.tsx    # 老师端布局
│   └── AdminLayout.tsx      # 管理端布局
├── pages/            # 页面组件
│   ├── HomePage.tsx         # 首页
│   ├── student/             # 学生端页面
│   │   ├── AITestPage.tsx          # AI通关测
│   │   ├── AIPracticePage.tsx      # AI精准练
│   │   ├── AIErrorBookPage.tsx     # AI错题本
│   │   └── TaskPage.tsx            # 学习任务
│   ├── teacher/             # 老师端页面
│   │   ├── ClassManagementPage.tsx # 班级管理
│   │   └── StudentManagementPage.tsx # 学员管理
│   └── admin/               # 管理端页面
│       ├── TeacherManagementPage.tsx # 老师管理
│       ├── StudentManagementPage.tsx  # 学员管理
│       ├── ClassManagementPage.tsx    # 班级管理
│       ├── TestManagementPage.tsx     # 测评管理
│       └── PaperManagementPage.tsx    # 试卷管理
├── App.tsx           # 主应用组件
├── main.tsx          # 入口文件
└── index.css         # 全局样式
```

## 核心功能说明

### AI自动出题
- 所有题目均为选择题
- 支持按科目、章节、知识点、题型、难易度筛选
- 自动生成题目和答案解析

### 评测报告
- 显示总分、正确题数、正确率、用时
- 知识点掌握情况可视化
- 提供个性化学习建议

### 错题本
- 支持拍照上传错题
- AI诊断错题原因
- 生成举一反三题目
- 支持一键打印格式

## 注意事项

- 这是一个前端演示项目，所有数据都是模拟数据
- 实际项目中需要连接后端API
- 图片上传功能需要配置后端服务
- 打印功能需要在浏览器中测试

## 浏览器支持

- Chrome (推荐)
- Firefox
- Safari
- Edge

## 许可证

MIT
