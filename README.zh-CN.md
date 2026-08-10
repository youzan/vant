<p align="center">
    <img alt="logo" src="https://fastly.jsdelivr.net/npm/@vant/assets/logo.png" width="120" style="margin-bottom: 10px;">
</p>

<h1 align="center">Vant</h1>

<p align="center">轻量、可定制的移动端 Vue 组件库</p>

<p align="center">
    <img src="https://img.shields.io/npm/v/vant?style=flat-square" alt="npm version" />
    <img src="https://img.shields.io/codecov/c/github/youzan/vant/main.svg?style=flat-square&color=#4fc08d" alt="Coverage Status" />
    <img src="https://img.shields.io/npm/dm/vant.svg?style=flat-square&color=#4fc08d" alt="downloads" />
</p>

<p align="center">
  🌈 <a href="https://vant.pro/vant/">文档网站（国内）</a>
  &nbsp;
  ·
  &nbsp;
  <a href="https://vant-ui.github.io/vant">文档网站（GitHub）</a>
</p>

---

### 介绍

Vant 是一个**轻量、可定制的移动端组件库**，于 2017 年开源。

目前 Vant 官方提供了 [Vue 2 版本](https://vant-ui.github.io/vant/v2/)、[Vue 3 版本](https://vant-ui.github.io/vant/)和[微信小程序版本](https://vant-ui.github.io/vant-weapp/)，并由社区团队维护 [React 版本](https://github.com/3lang3/react-vant)。

## 特性

- 🚀 性能极佳，组件平均体积小于 1KB（min+gzip）
- 🚀 80+ 个高质量组件，覆盖移动端主流场景
- 🚀 零外部依赖，不依赖三方 npm 包
- 💪 使用 TypeScript 编写，提供完整的类型定义
- 💪 单元测试覆盖率超过 90%，提供稳定性保障
- 📖 提供丰富的中英文文档和组件示例
- 📖 提供 Sketch 和 Axure 设计资源
- 🍭 支持 Vue 2、Vue 3 和微信小程序
- 🍭 支持 Nuxt 2、Nuxt 3，提供 Nuxt 的 [Vant Module](https://github.com/vant-ui/vant-nuxt)
- 🍭 支持主题定制，内置 700+ 个主题变量
- 🍭 支持按需引入和 Tree Shaking
- 🍭 支持无障碍访问（持续改进中）
- 🍭 支持深色模式
- 🍭 支持服务器端渲染
- 🌍 支持国际化，内置 30+ 种语言包

## 安装

在现有项目中使用 Vant 时，可以通过 `npm` 进行安装：

```bash
# Vue 3 项目，安装最新版 Vant
npm i vant

# Vue 2 项目，安装 Vant 2
npm i vant@latest-v2
```

当然，你也可以通过 `yarn` 或 `pnpm` 或 `bun` 进行安装：

```bash
# 通过 yarn 安装
yarn add vant

# 通过 pnpm 安装
pnpm add vant

# 通过 bun 安装
bun add vant
```

## 脚手架

推荐使用 [Rsbuild](https://github.com/web-infra-dev/rsbuild) 来创建一个脚手架项目。

Rsbuild 是基于 Rspack 的构建工具，由 Vant 作者开发，具备一流的构建速度和开发体验，对 Vant 提供第一优先级支持。

你可以通过以下命令创建一个 Rsbuild 项目：

```bash
npm create rsbuild@latest
```

请访问 [Rsbuild 仓库](https://github.com/web-infra-dev/rsbuild) 了解更多信息。

## 快速上手

```js
import { createApp } from 'vue';
// 1. 引入你需要的组件
import { Button } from 'vant';
// 2. 引入组件样式
import 'vant/lib/index.css';

const app = createApp();

// 3. 注册你需要的组件
app.use(Button);
```

vant 也支持按需引入、CDN 引入等方式，详细说明见 [快速上手](https://vant-ui.github.io/vant/#/zh-CN/quickstart).

## 浏览器支持

Vant 2 支持现代浏览器以及 Android >= 4.0、iOS >= 8.0。

Vant 3/4 支持现代浏览器以及 Chrome >= 51、iOS >= 10.0（与 Vue 3 一致）。

## 官方生态

由 Vant 官方团队维护的项目如下：

| 项目 | 描述 |
| --- | --- |
| [vant-weapp](https://github.com/vant-ui/vant-weapp) | Vant 微信小程序版 |
| [vant-demo](https://github.com/vant-ui/vant-demo) | Vant 官方示例合集 |
| [vant-cli](https://github.com/vant-ui/vant/tree/main/packages/vant-cli) | 开箱即用的组件库搭建工具 |
| [vant-icons](https://github.com/vant-ui/vant/tree/main/packages/vant-icons) | Vant 图标库 |
| [vant-touch-emulator](https://github.com/vant-ui/vant/tree/main/packages/vant-touch-emulator) | 在桌面端使用 Vant 的辅助库 |
| [vant-nuxt](https://github.com/vant-ui/vant-nuxt) | 为 Nuxt 准备的模块 |

## 社区生态

由社区维护的项目如下，欢迎补充：

| 项目 | 描述 |
| --- | --- |
| [3lang3/react-vant](https://github.com/3lang3/react-vant) | 参照 Vant 打造的 React 框架移动端组件库 |
| [vant-theme](https://github.com/Aisen60/vant-theme) | Vant 在线主题预览工具 |
| [@antmjs/vantui](https://github.com/antmjs/vantui) | 基于 Vant Weapp 开发的多端组件库，同时支持 Taro 和 React |
| [Taroify](https://github.com/mallfoundry/taroify) | Taroify 是 Vant 的 Taro 版本，两者基于相同的视觉规范，提供一致的 API 接口，助力开发者快速搭建小程序应用 |
| [vant-playground](https://github.com/LadyChatterleyLover/vant-playground) | Vant Playground |
| [sfc-playground-vant](https://github.com/zhixiaoqiang/sfc-playground-vant) | Vant Playground |
| [vue3-h5-template](https://github.com/yulimchen/vue3-h5-template) | 基于 Vant 的移动端项目模板 |
| [vue3-vant-mobile](https://github.com/vue-zone/vue3-vant-mobile) | 基于 Vant 的移动端项目模板，开箱即用 |
| [vscode-common-intellisense](https://github.com/Simon-He95/vscode-common-intellisense) | VS Code 扩展，为 Vant 开发者提供更好的智能感知 |
| [nuxt-vant-mobile](https://github.com/vue-zone/nuxt-vant-mobile) | 基于 Vant 的 Nuxt _⁴_ 项目模板，开箱即用 |
| [mobvue](https://github.com/un-pany/mobvue) | 一个精心制作的移动端 H5 模板 |

## 链接

- [详细文档](https://vant-ui.github.io/vant/)
- [更新日志](https://vant-ui.github.io/vant/#/zh-CN/changelog)
- [Discussions 讨论区](https://github.com/vant-ui/vant/discussions)

## 手机预览

可以手机扫码以下二维码访问手机端 demo：

<img src="https://fastly.jsdelivr.net/npm/@vant/assets/preview-qrcode.png" width="220" height="220" >

## 核心团队

以下是 Vant 和 Vant Weapp 的核心贡献者们：

| [![chenjiahan](https://avatars.githubusercontent.com/u/7237365?s=80&v=4)](https://github.com/chenjiahan/) | [![cookfront](https://avatars.githubusercontent.com/u/4829465?s=80&v=4)](https://github.com/cookfront/) | [![w91](https://avatars.githubusercontent.com/u/2599455?s=80&v=4)](https://github.com/w91/) | [![pangxie1991](https://avatars.githubusercontent.com/u/5961240?s=80&v=4)](https://github.com/pangxie1991/) | [![rex-zsd](https://avatars.githubusercontent.com/u/8767877?s=80&v=4)](https://github.com/rex-zsd/) | [![nemo-shen](https://avatars.githubusercontent.com/u/13480805?s=80&v=4)](https://github.com/nemo-shen/) |
| :-: | :-: | :-: | :-: | :-: | :-: |
| [chenjiahan](https://github.com/chenjiahan/) | [cookfront](https://github.com/cookfront/) | [wangnaiyi](https://github.com/w91/) | [pangxie](https://github.com/pangxie1991/) | [rex-zsd](https://github.com/rex-zsd/) | [nemo-shen](https://github.com/nemo-shen/) |

| [![Lindysen](https://avatars.githubusercontent.com/u/33708359?s=80&v=4)](https://github.com/Lindysen/) | [![JakeLaoyu](https://avatars.githubusercontent.com/u/16181940?s=80&v=4)](https://github.com/JakeLaoyu/) | [![landluck](https://avatars.githubusercontent.com/u/27060081?s=80&v=4)](https://github.com/landluck/) | [![wjw-gavin](https://avatars.githubusercontent.com/u/19986739?s=80&v=4)](https://github.com/wjw-gavin/) | [![inottn](https://avatars.githubusercontent.com/u/18509404?s=80&v=4)](https://github.com/inottn/) | [![zhousg](https://avatars.githubusercontent.com/u/15833290?s=80&v=4)](https://github.com/zhousg/) |
| :-: | :-: | :-: | :-: | :-: | :-: |
| [Lindysen](https://github.com/Lindysen/) | [JakeLaoyu](https://github.com/JakeLaoyu/) | [landluck](https://github.com/landluck/) | [wjw-gavin](https://github.com/wjw-gavin/) | [inottn](https://github.com/inottn/) | [zhousg](https://github.com/zhousg/) |

## 贡献指南

修改代码请阅读我们的 [贡献指南](https://vant-ui.github.io/vant/#/zh-CN/contribution)。

使用过程中发现任何问题都可以提 [Issue](https://github.com/vant-ui/vant/issues) 给我们，当然，我们也非常欢迎你给我们发 [PR](https://github.com/vant-ui/vant/pulls)。

## 在 Cloud IDE 中预览

[https://idegithub.com/youzan/vant](https://idegithub.com/youzan/vant)

## 开源协议

本项目基于 [MIT](https://github.com/youzan/vant/blob/main/LICENSE) 协议，请自由地享受和参与开源。
