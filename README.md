# EquityQ's Shop

## 项目介绍
EquityQ's Shop 是一个基于 Vue.js 的在线商店应用。用户可以浏览商品列表，查看商品详情，并将商品添加到购物车中。

## 技术栈
- **前端框架**: Vue.js
- **UI 库**: Element UI
- **状态管理**: Vuex (可选)
- **路由管理**: Vue Router (可选)
- **构建工具**: Webpack / Vite (根据实际情况选择)

## 安装与运行
### 前提条件
- Node.js (建议版本 14.x 及以上)
- npm 或 yarn

## 功能介绍
### 主页
- 显示商品列表
- 每个商品卡片包含商品图片、名称、价格、库存和描述
- 用户可以点击“加入购物车”按钮将商品添加到购物车

### 购物车
- 显示已添加的商品列表
- 用户可以查看商品数量和总价
- 提供清空购物车的功能

## 环境变量
- **VUE_APP_API_URL**: API 请求的基础 URL
- **VUE_APP_ENV**: 当前环境（development, production）
