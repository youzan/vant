<p align="center">
    <img alt="logo" src="https://fastly.jsdelivr.net/npm/@vant/assets/logo.png" width="120" height="120" style="margin-bottom: 10px;">
</p>

<h1 align="center">Vant</h1>

<p align="center">A lightweight, customizable Vue UI library for mobile web apps.</p>

<p align="center">
    <img src="https://img.shields.io/npm/v/vant?style=flat-square" alt="npm version" />
    <img src="https://img.shields.io/codecov/c/github/youzan/vant/main.svg?style=flat-square&color=#4fc08d" alt="Coverage Status" />
    <img src="https://img.shields.io/npm/dm/vant.svg?style=flat-square&color=#4fc08d" alt="downloads" />
</p>

<p align="center">
  <a href="https://vant-ui.github.io/vant">Documentation</a>
  &nbsp;
  ·
  &nbsp;
  <a href="https://vant.pro/vant/">Documentation (backup)</a>
  &nbsp;
  ·
  &nbsp;
  <a href="./README.zh-CN.md">中文介绍</a>
</p>

---

## Features

- 🚀 1KB Component average size (min+gzip)
- 🚀 80+ High quality components
- 🚀 Zero third-party dependencies
- 💪 90%+ Unit test coverage
- 💪 Written in TypeScript
- 📖 Extensive documentation and demos
- 📖 Provide Sketch and Axure design resources
- 🍭 Support Vue 2 & Vue 3
- 🍭 Support Nuxt 2 & Nuxt 3, provide [Vant Module](https://github.com/vant-ui/vant-nuxt) for Nuxt
- 🍭 Support Tree Shaking
- 🍭 Support Custom Theme
- 🍭 Support Accessibility (still improving)
- 🍭 Support Dark Mode
- 🍭 Support SSR
- 🌍 Support i18n, built-in 30+ languages

## Install

Using `npm` to install:

```bash
# install latest Vant for Vue 3 project
npm i vant

# install Vant 2 for Vue 2 project
npm i vant@latest-v2
```

Using `yarn`, `pnpm`, or `bun`:

```bash
# with yarn
yarn add vant

# with pnpm
pnpm add vant

# with Bun
bun add vant
```

## Scaffold

It is recommended to use [Rsbuild](https://github.com/web-infra-dev/rsbuild) to create a scaffold project.

Rsbuild is a build tool based on Rspack, developed by the author of Vant, with first-class build speed and development experience, providing first-priority support for Vant.

You can create a Rsbuild project with the following command:

```bash
npm create rsbuild@latest
```

Please visit the [Rsbuild repository](https://github.com/web-infra-dev/rsbuild) for more information.

## Quickstart

```js
import { createApp } from 'vue';
// 1. Import the components you need
import { Button } from 'vant';
// 2. Import the components style
import 'vant/lib/index.css';

const app = createApp();

// 3. Register the components you need
app.use(Button);
```

See more in [Quickstart](https://vant-ui.github.io/vant/#/en-US/quickstart).

## Browser Support

Vant 2 supports modern browsers and Android >= 4.0、iOS >= 8.0.

Vant 3/4 supports modern browsers and Chrome >= 51、iOS >= 10.0 (same as Vue 3).

## Official Ecosystem

| Project | Description |
| --- | --- |
| [vant-weapp](https://github.com/vant-ui/vant-weapp) | WeChat MiniProgram UI |
| [vant-demo](https://github.com/vant-ui/vant-demo) | Collection of Vant demos |
| [vant-cli](https://github.com/vant-ui/vant/tree/main/packages/vant-cli) | Scaffold for UI library |
| [vant-icons](https://github.com/vant-ui/vant/tree/main/packages/vant-icons) | Vant icons |
| [vant-touch-emulator](https://github.com/vant-ui/vant/tree/main/packages/vant-touch-emulator) | Using vant in desktop browsers |
| [vant-nuxt](https://github.com/vant-ui/vant-nuxt) | Vant module for Nuxt |

## Community Ecosystem

| Project | Description |
| --- | --- |
| [3lang3/react-vant](https://github.com/3lang3/react-vant) | React mobile UI Components based on Vant |
| [vant-aliapp](https://github.com/ant-move/Vant-Aliapp) | Alipay MiniProgram UI |
| [vant-theme](https://github.com/Aisen60/vant-theme) | Online theme preview built on Vant UI |
| [@antmjs/vantui](https://github.com/antmjs/vantui) | Mobile UI Components based on Vant, supporting Taro and React |
| [vant-playground](https://github.com/LadyChatterleyLover/vant-playground) | Vant Playground |
| [sfc-playground-vant](https://github.com/zhixiaoqiang/sfc-playground-vant) | Vant Playground |
| [vue3-h5-template](https://github.com/yulimchen/vue3-h5-template) | Mobile project template based on Vant |
| [vue3-vant-mobile](https://github.com/easy-temps/vue3-vant-mobile) | Mobile project template based on Vant |
| [vscode-common-intellisense](https://github.com/Simon-He95/vscode-common-intellisense) | A VS Code extension that provides better intellisense to Vant developers |

## Links

- [Documentation](https://vant-ui.github.io/vant/)
- [Documentation (backup)](https://vant.pro/vant/)
- [Changelog](https://vant-ui.github.io/vant/#/en-US/changelog)
- [Discussions](https://github.com/vant-ui/vant/discussions)

## Preview

You can scan the following QR code to access the demo：

<img src="https://fastly.jsdelivr.net/npm/@vant/assets/preview-qrcode.png" width="220" height="220" >

## Core Team

Core contributors of Vant and Vant Weapp:

| [![chenjiahan](https://avatars.githubusercontent.com/u/7237365?s=80&v=4)](https://github.com/chenjiahan/) | [![cookfront](https://avatars.githubusercontent.com/u/4829465?s=80&v=4)](https://github.com/cookfront/) | [![w91](https://avatars.githubusercontent.com/u/2599455?s=80&v=4)](https://github.com/w91/) | [![pangxie1991](https://avatars.githubusercontent.com/u/5961240?s=80&v=4)](https://github.com/pangxie1991/) | [![rex-zsd](https://avatars.githubusercontent.com/u/8767877?s=80&v=4)](https://github.com/rex-zsd/) | [![nemo-shen](https://avatars.githubusercontent.com/u/13480805?s=80&v=4)](https://github.com/nemo-shen/) |
| :-: | :-: | :-: | :-: | :-: | :-: |
| [chenjiahan](https://github.com/chenjiahan/) | [cookfront](https://github.com/cookfront/) | [wangnaiyi](https://github.com/w91/) | [pangxie](https://github.com/pangxie1991/) | [rex-zsd](https://github.com/rex-zsd/) | [nemo-shen](https://github.com/nemo-shen/) |

| [![Lindysen](https://avatars.githubusercontent.com/u/33708359?s=80&v=4)](https://github.com/Lindysen/) | [![JakeLaoyu](https://avatars.githubusercontent.com/u/16181940?s=80&v=4)](https://github.com/JakeLaoyu/) | [![landluck](https://avatars.githubusercontent.com/u/27060081?s=80&v=4)](https://github.com/landluck/) | [![wjw-gavin](https://avatars.githubusercontent.com/u/19986739?s=80&v=4)](https://github.com/wjw-gavin/) | [![inottn](https://avatars.githubusercontent.com/u/18509404?s=80&v=4)](https://github.com/inottn/) | [![zhousg](https://avatars.githubusercontent.com/u/15833290?s=80&v=4)](https://github.com/zhousg/) |
| :-: | :-: | :-: | :-: | :-: | :-: |
| [Lindysen](https://github.com/Lindysen/) | [JakeLaoyu](https://github.com/JakeLaoyu/) | [landluck](https://github.com/landluck/) | [wjw-gavin](https://github.com/wjw-gavin/) | [inottn](https://github.com/inottn/) | [zhousg](https://github.com/zhousg/) |

## All Contributors

Thanks to the following friends for their contributions to Vant:

<a href="https://github.com/vant-ui/vant/graphs/contributors">
  <img src="https://opencollective.com/vant/contributors.svg?width=890&button=false" alt="contributors">
</a>

## Contribution Guide

Please make sure to read the [Contributing Guide](./.github/CONTRIBUTING.md) before making a pull request.

## Start On Web IDE

[https://github.dev/youzan/vant](https://github.dev/youzan/vant)

## LICENSE

Vant is [MIT](https://github.com/youzan/vant/blob/main/LICENSE) licensed.
