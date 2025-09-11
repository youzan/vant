<div class="van-doc-card">
  <div class="van-doc-intro">
    <img class="van-doc-intro__logo" style="width: 120px; height: 120px;" src="https://fastly.jsdelivr.net/npm/@vant/assets/logo.png">
    <h2 style="margin: 0; font-size: 36px; line-height: 60px;">Vant</h2>
    <p>轻量、可定制的移动端 Vue 组件库</p>
  </div>
</div>

### 介绍

Vant 是一个**轻量、可定制的移动端组件库**，于 2017 年开源。

目前 Vant 官方提供了 [Vue 2 版本](/vant/v2/)、[Vue 3 版本](/vant/)和[微信小程序版本](/vant-weapp/)，并由社区团队维护 [React 版本](https://github.com/3lang3/react-vant)和[支付宝小程序版本](https://github.com/ant-move/Vant-Aliapp)。

### 特性

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

### 版本提示

你当前浏览的是 **Vant 4.x 版本** 的文档，适用于 Vue 3 开发。如果你在使用 Vue 2，请浏览 [Vant 2 文档](/vant/v2/)。

### 脚手架

推荐使用 [Rsbuild](https://github.com/web-infra-dev/rsbuild) 来创建一个脚手架项目。

Rsbuild 是基于 Rspack 的构建工具，由 Vant 作者开发，具备一流的构建速度和开发体验，对 Vant 提供第一优先级支持。

你可以通过以下命令创建一个 Rsbuild 项目：

```bash
npm create rsbuild@latest
```

请访问 [Rsbuild 仓库](https://github.com/web-infra-dev/rsbuild) 了解更多信息。

### 快速上手

请阅读[快速上手](#/zh-CN/quickstart)章节，通过该章节你可以了解到 Vant 的安装方法和基本使用姿势。

### 浏览器支持

Vant 2 支持现代浏览器以及 Android >= 4.0、iOS >= 8.0。

Vant 3/4 支持现代浏览器以及 Chrome >= 51、iOS >= 10.0（与 Vue 3 一致）。

### 维护状态

目前 Vant 各个版本的维护状态如下：

| 名称 | 框架 | 发布时间 | 最新版 | 维护状态 |
| --- | --- | --- | --- | --- |
| Vant 4 | Vue 3 | `2022.12` | ![](https://img.shields.io/npm/v/vant/latest?style=flat-square) | 长期支持 |
| Vant 3 | Vue 3 | `2020.12` | ![](https://img.shields.io/npm/v/vant/latest-v3?style=flat-square) | 终止支持，不再接受 PR |
| Vant 2 | Vue 2 | `2019.06` | ![](https://img.shields.io/npm/v/vant/latest-v2?style=flat-square) | 终止支持，不再接受 PR |
| Vant 1 | Vue 2 | `2018.03` | ![](https://img.shields.io/npm/v/vant/latest-v1?style=flat-square) | 终止支持，不再接受 PR |

## 链接

### 官方生态

由 Vant 官方团队维护的项目如下：

| 项目 | 描述 |
| --- | --- |
| [vant-weapp](https://github.com/vant-ui/vant-weapp) | Vant 微信小程序版 |
| [vant-demo](https://github.com/vant-ui/vant-demo) | Vant 官方示例合集 |
| [vant-cli](https://github.com/vant-ui/vant/tree/main/packages/vant-cli) | 开箱即用的组件库搭建工具 |
| [vant-icons](https://github.com/vant-ui/vant/tree/main/packages/vant-icons) | Vant 图标库 |
| [vant-touch-emulator](https://github.com/vant-ui/vant/tree/main/packages/vant-touch-emulator) | 在桌面端使用 Vant 的辅助库 |
| [vant-nuxt](https://github.com/vant-ui/vant-nuxt) | 为 Nuxt 准备的模块 |

### 社区生态

由社区维护的项目如下，欢迎补充：

| 项目 | 描述 |
| --- | --- |
| [3lang3/react-vant](https://github.com/3lang3/react-vant) | 参照 Vant 打造的 React 移动端组件库 |
| [vant-aliapp](https://github.com/ant-move/Vant-Aliapp) | Vant 支付宝小程序版 |
| [vant-theme](https://github.com/Aisen60/vant-theme) | Vant 在线主题预览工具 |
| [@antmjs/vantui](https://github.com/antmjs/vantui) | 基于 Vant Weapp 开发的多端组件库，同时支持 Taro 和 React |
| [vant-playground](https://github.com/LadyChatterleyLover/vant-playground) | Vant Playground |
| [sfc-playground-vant](https://github.com/zhixiaoqiang/sfc-playground-vant) | Vant Playground |
| [vue3-h5-template](https://github.com/yulimchen/vue3-h5-template) | 基于 Vant 的移动端项目模板 |
| [vue3-vant-mobile](https://github.com/vue-zone/vue3-vant-mobile) | 基于 Vant 的移动端项目模板，开箱即用 |
| [raycast-vant-documentation](https://github.com/Aisen60/raycast-vant-documentation) | 一个 Raycast 拓展，能在 Raycast 中搜索 Vant 组件库文档 |
| [nuxt-vant-mobile](https://github.com/vue-zone/nuxt-vant-mobile) | 基于 Vant 的 Nuxt _⁴_ 项目模板，开箱即用 |
| [mobvue](https://github.com/un-pany/mobvue) | 一个精心制作的移动端 H5 模板 |
| [novlan1/press-ui](https://github.com/novlan1/press-ui) | 参照 Vant 打造的 uni-app 框架移动端组件库 |

### 其他链接

- [意见反馈](https://github.com/vant-ui/vant/issues)
- [更新日志](#/zh-CN/changelog)
- [Discussions 讨论区](https://github.com/vant-ui/vant/discussions)

## 贡献

### 核心团队

以下是 Vant 和 Vant Weapp 的核心贡献者们：

| [![chenjiahan](https://avatars.githubusercontent.com/u/7237365?s=80&v=4)](https://github.com/chenjiahan/) | [![cookfront](https://avatars.githubusercontent.com/u/4829465?s=80&v=4)](https://github.com/cookfront/) | [![w91](https://avatars.githubusercontent.com/u/2599455?s=80&v=4)](https://github.com/w91/) | [![pangxie1991](https://avatars.githubusercontent.com/u/5961240?s=80&v=4)](https://github.com/pangxie1991/) | [![rex-zsd](https://avatars.githubusercontent.com/u/8767877?s=80&v=4)](https://github.com/rex-zsd/) | [![nemo-shen](https://avatars.githubusercontent.com/u/13480805?s=80&v=4)](https://github.com/nemo-shen/) |
| :-: | :-: | :-: | :-: | :-: | :-: |
| [chenjiahan](https://github.com/chenjiahan/) | [cookfront](https://github.com/cookfront/) | [wangnaiyi](https://github.com/w91/) | [pangxie](https://github.com/pangxie1991/) | [rex-zsd](https://github.com/rex-zsd/) | [nemo-shen](https://github.com/nemo-shen/) |

| [![Lindysen](https://avatars.githubusercontent.com/u/33708359?s=80&v=4)](https://github.com/Lindysen/) | [![JakeLaoyu](https://avatars.githubusercontent.com/u/16181940?s=80&v=4)](https://github.com/JakeLaoyu/) | [![landluck](https://avatars.githubusercontent.com/u/27060081?s=80&v=4)](https://github.com/landluck/) | [![wjw-gavin](https://avatars.githubusercontent.com/u/19986739?s=80&v=4)](https://github.com/wjw-gavin/) | [![inottn](https://avatars.githubusercontent.com/u/18509404?s=80&v=4)](https://github.com/inottn/) | [![zhousg](https://avatars.githubusercontent.com/u/15833290?s=80&v=4)](https://github.com/zhousg/) |
| :-: | :-: | :-: | :-: | :-: | :-: |
| [Lindysen](https://github.com/Lindysen/) | [JakeLaoyu](https://github.com/JakeLaoyu/) | [landluck](https://github.com/landluck/) | [wjw-gavin](https://github.com/wjw-gavin/) | [inottn](https://github.com/inottn/) | [zhousg](https://github.com/zhousg/) |

### 贡献者们

感谢以下小伙伴们为 Vant 发展做出的贡献：

<a href="https://github.com/vant-ui/vant/graphs/contributors" target="_black">
  <img src="https://opencollective.com/vant/contributors.svg?width=890&button=false" alt="contributors" style="width: 100%; margin: 16px 0">
</a>

### 贡献指南

贡献代码请阅读我们的[贡献指南](#/zh-CN/contribution)。

使用过程中发现任何问题都可以提 [Issue](https://github.com/vant-ui/vant/issues) 给我们，当然，我们也非常欢迎你给我们发 [PR](https://github.com/vant-ui/vant/pulls)。

### 开源协议

本项目基于 [MIT](https://zh.wikipedia.org/wiki/MIT%E8%A8%B1%E5%8F%AF%E8%AD%89) 协议，请自由地享受和参与开源。
