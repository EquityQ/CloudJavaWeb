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


# API Documentation

## Overview

This document provides an overview of the available API endpoints for the application, including their request methods, parameters, and expected responses.

## Endpoints

### User Authentication

#### `POST /api/user/login`

- **Description**: Authenticates a user and returns a token.
- **Request Body**:
  - `username` (string): The user's username.
  - `password` (string): The user's password.
  - `captcha` (string): Captcha code for verification.
- **Response**:
  - `Code` (int): Status code (200 for success).
  - `Reason` (string): Message indicating success or failure.
  - `token` (string, optional): Authentication token if successful.
  - `permission` (string, optional): User's permission level.

#### `POST /api/user/token-auth`

- **Description**: Validates a user's token.
- **Headers**:
  - `token` (string): The user's authentication token.
- **Response**:
  - `Code` (int): Status code (200 for success).
  - `Response` (string): Message indicating success or failure.
  - `permission` (string, optional): User's permission level.

#### `POST /api/user/logout`

- **Description**: Logs out a user and invalidates the session.
- **Headers**:
  - `token` (string): The user's authentication token.
- **Response**:
  - `Code` (int): Status code (200 for success).
  - `Response` (string): Message indicating success or failure.

### User Management

#### `POST /api/user/register`

- **Description**: Registers a new user.
- **Request Body**:
  - `username` (string): The desired username.
  - `password` (string): The desired password.
  - `captcha` (string): Captcha code for verification.
- **Response**:
  - `Code` (int): Status code (200 for success).
  - `Reason` (string): Message indicating success or failure.
  - `token` (string, optional): Authentication token if successful.
  - `permission` (string, optional): User's permission level.

#### `POST /api/user/select-info`

- **Description**: Retrieves user information.
- **Headers**:
  - `token` (string): The user's authentication token.
- **Response**:
  - `Code` (int): Status code (200 for success).
  - `users` (array): List of user information.

### Payment

#### `POST /api/pay/pay-order`

- **Description**: Processes payment for an order.
- **Headers**:
  - `token` (string): The user's authentication token.
- **Request Body**:
  - `items` (array): List of `CartItem` objects representing the order.
- **Response**:
  - `Code` (int): Status code (200 for success).
  - `Response` (string): Message indicating success or failure.

#### `POST /api/pay/top-up`

- **Description**: Tops up a user's account balance.
- **Headers**:
  - `token` (string): The user's authentication token.
- **Request Parameters**:
  - `value` (double): The amount to top up.
- **Response**:
  - `Code` (int): Status code (200 for success).
  - `Response` (string): Message indicating success or failure.

#### `POST /api/pay/get`

- **Description**: Retrieves the user's account balance.
- **Headers**:
  - `token` (string): The user's authentication token.
- **Response**:
  - `Code` (int): Status code (200 for success).
  - `Response` (string): Message indicating success or failure.
  - `Value` (double): The user's current balance.

### Miscellaneous

#### `GET /api/ip`

- **Description**: Retrieves the client's IP address.
- **Response**:
  - `Code` (int): Status code (200 for success).
  - `ip` (string): The client's IP address.

#### `POST /api/element/info`

- **Description**: Retrieves information about all elements.
- **Response**:
  - `Code` (int): Status code (200 for success).
  - `elements` (array): List of elements.

## Error Codes

- `200`: Success
- `400`: Bad Request
- `401`: Unauthorized
- `402`: Payment Required
- `404`: Not Found
- `500`: Internal Server Error

## Notes

- All requests and responses are in JSON format.
- Ensure that the `token` is included in the headers for endpoints that require authentication.