# 晴天接码

晴天接码前端工作台，基于 Vite 构建，使用仓库根目录的 `logo.png` 作为品牌标识。

## 当前前端页面
- 响应式首页和导航
- 国家/地区目录及搜索
- 关于我们、API 文档
- 登录交互原型

## 开发与构建
```bash
npm install
npm run dev
npm run build
```

## 后端接入状态
当前仓库包含前端工程与品牌资源。真实登录、账户余额、实时库存、取号、短信轮询、释放号码、租号、订单记录和充值支付，必须通过已部署的晴天接码 HTTP 后端 API 接入。禁止把上游 NZSMS API Key、Telegram Bot Token、TRON API Key 或其他密钥写入前端或提交到 Git。

`shuji-chu/jiema` 目前可见的是 Telegram Bot 实现及其 NZSMS/TRC20 业务封装，并非可直接供浏览器使用的 HTTP 网站 API。接入网站前需要确认后端服务的 HTTPS Base URL、Web 登录鉴权方式及接口路由。
