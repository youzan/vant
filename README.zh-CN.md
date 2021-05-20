<p align="center">
    <img alt="logo" src="https://img01.yzcdn.cn/vant/logo.png" width="120" style="margin-bottom: 10px;">
</p>

<h1 align="center">Vant</h1>

<p align="center">轻量、可靠的移动端 Vue 组件库</p>

<p align="center">
    <img src="https://img.shields.io/npm/v/vant.svg?style=flat-square" alt="npm version" />
    <img src="https://img.shields.io/github/workflow/status/youzan/vant/CI/dev?style=flat-square" alt="npm version" />
    <img src="https://img.shields.io/codecov/c/github/youzan/vant/dev.svg?style=flat-square&color=#4fc08d" alt="Coverage Status" />
    <img src="https://img.shields.io/npm/dm/vant.svg?style=flat-square&color=#4fc08d" alt="downloads" />
    <img src="https://img.shields.io/jsdelivr/npm/hm/vant?style=flat-square" alt="Jsdelivr Hits">
    <img src="https://img.badgesize.io/https://unpkg.com/vant/lib/vant.min.js?compression=gzip&style=flat-square&label=gzip%20size&color=#4fc08d" alt="Gzip Size" />
</p>

<p align="center">
  🔥 <a href="https://vant-contrib.gitee.io/vant">文档网站</a>
  &nbsp;
  &nbsp;
  🚀 <a href="https://github.com/youzan/vant-weapp" target="_blank">小程序版</a>
</p>

---

### 介绍

Vant 是**有赞前端团队**开源的移动端组件库，于 2017 年开源，已持续维护 4 年时间。Vant 对内承载了有赞所有核心业务，对外服务十多万开发者，是业界主流的移动端组件库之一。

目前 Vant 官方提供了 [Vue 2 版本](https://vant-contrib.gitee.io/vant)、[Vue 3 版本](https://vant-contrib.gitee.io/vant/next)和[微信小程序版本](http://vant-contrib.gitee.io/vant-weapp)，并由社区团队维护 [React 版本](https://github.com/mxdi9i7/vant-react)。

## 特性

- 提供 60 多个高质量组件，覆盖移动端各类场景
- 性能极佳，组件平均体积不到 1kb（min+gzip）
- 单元测试覆盖率 90%+，提供稳定性保障
- 完善的中英文文档和示例
- 支持 Vue 2 & Vue 3
- 支持按需引入
- 支持主题定制
- 支持国际化
- 支持 TypeScript
- 支持 SSR

## 安装

```bash
# Vue 2 项目，安装 Vant 2：
npm i vant -S

# Vue 3 项目，安装 Vant 3：
npm i vant@next -S
```

## 快速上手

```js
import Vue from 'vue';
import { Button } from 'vant';
import 'vant/lib/index.css';

Vue.use(Button);
```

vant 也支持按需引入、CDN 引入等方式，详细说明见 [快速上手](https://vant-contrib.gitee.io/vant#/zh-CN/quickstart).

## 贡献代码

修改代码请阅读我们的 [开发指南](https://vant-contrib.gitee.io/vant/#/zh-CN/contribution)。

使用过程中发现任何问题都可以提 [Issue](https://github.com/youzan/vant/issues) 给我们，当然，我们也非常欢迎你给我们发 [PR](https://github.com/youzan/vant/pulls)。

## 浏览器支持

Vant 2 支持现代浏览器以及 Android >= 4.0、iOS >= 8.0。

Vant 3 支持现代浏览器以及 Chrome >= 51、iOS >= 10.0（与 Vue 3 一致）。

## 生态

| 项目 | 描述 |
| --- | --- |
| [vant-demo](https://github.com/youzan/vant-demo) | Vant 官方示例合集 |
| [vant-weapp](https://github.com/youzan/vant-weapp) | 微信小程序组件库 |
| [vant-react](https://github.com/mxdi9i7/vant-react) | Vant React 版（由社区维护） |
| [vant-cli](https://github.com/youzan/vant/tree/dev/packages/vant-cli) | 开箱即用的组件库搭建工具 |
| [vant-icons](https://github.com/youzan/vant/tree/dev/packages/vant-icons) | Vant 图标库 |
| [vant-touch-emulator](https://github.com/youzan/vant/tree/dev/packages/vant-touch-emulator) | 在桌面端使用 Vant 的辅助库 |

## 链接

- [详细文档](https://vant-contrib.gitee.io/vant)
- [更新日志](https://vant-contrib.gitee.io/vant#/zh-CN/changelog)
- [Gitter 讨论组](https://gitter.im/vant-contrib/discuss?utm_source=share-link&utm_medium=link&utm_campaign=share-link)

## 手机预览

可以手机扫码以下二维码访问手机端 demo：

<img src="https://img01.yzcdn.cn/vant/preview_qrcode_20180528.png" width="220" height="220" >

## 微信讨论群

欢迎大家加入 Vant 交流群一起讨论，添加下方微信并注明『加入 Vant 交流群』即可

<img src="https://img01.yzcdn.cn/vant/wechat_20180606.png" width="220" height="292" >

## 开源协议

本项目基于 [MIT](https://zh.wikipedia.org/wiki/MIT%E8%A8%B1%E5%8F%AF%E8%AD%89) 协议，请自由地享受和参与开源。
