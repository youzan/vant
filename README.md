<p align="center">
    <img alt="logo" src="https://img01.yzcdn.cn/vant/logo.png" width="120" height="120" style="margin-bottom: 10px;">
</p>

<h1 align="center">Vant</h1>

<p align="center">Mobile UI Components built on Vue</p>

<p align="center">
    <img src="https://img.shields.io/npm/v/vant.svg?style=flat-square" alt="npm version" />
    <img src="https://img.shields.io/github/workflow/status/youzan/vant/CI/dev?style=flat-square" alt="npm version" />
    <img src="https://img.shields.io/codecov/c/github/youzan/vant/dev.svg?style=flat-square&color=#4fc08d" alt="Coverage Status" />
    <img src="https://img.shields.io/npm/dm/vant.svg?style=flat-square&color=#4fc08d" alt="downloads" />
    <img src="https://img.shields.io/jsdelivr/npm/hm/vant?style=flat-square" alt="Jsdelivr Hits">
    <img src="https://img.badgesize.io/https://unpkg.com/vant/lib/vant.min.js?compression=gzip&style=flat-square&label=gzip%20size&color=#4fc08d" alt="Gzip Size" />
</p>

<p align="center">
  🔥 <a href="https://vant-contrib.gitee.io/vant">文档网站（国内）</a>
  &nbsp;
  🌈 <a href="https://youzan.github.io/vant">文档网站（GitHub）</a>
  &nbsp;
  🇨🇳 <a href="./README.zh-CN.md">中文版介绍</a>
</p>

---

## Features

- 65+ Reusable components
- 1kb Component average size (min+gzip)
- 90%+ Unit test coverage
- Extensive documentation and demos
- Support Vue 2 & Vue 3
- Support Tree Shaking
- Support Custom Theme
- Support i18n
- Support TS
- Support SSR

## Install

```bash
# Install Vant 2 for Vue 2 project
npm i vant -S

# Install Vant 3 for Vue 3 project
npm i vant@next -S
```

## Quickstart

```js
import { createApp } from 'vue';
import { Button } from 'vant';
import 'vant/lib/index.css';

const app = createApp();
app.use(Button);
```

See more in [Quickstart](https://youzan.github.io/vant#/en-US/quickstart).

## Contribution

Please make sure to read the [Contributing Guide](./.github/CONTRIBUTING.md) before making a pull request.

## Browser Support

Modern browsers and Android 4.0+, iOS 8.0+.

## Ecosystem

| Project | Description |
| --- | --- |
| [vant-weapp](https://github.com/youzan/vant-weapp) | WeChat MiniProgram UI |
| [vant-aliapp](https://github.com/ant-move/Vant-Aliapp) | Alipay MiniProgram UI (maintained by the community) |
| [vant-react](https://github.com/mxdi9i7/vant-react) | Vant React (maintained by the community) |
| [vant-use](https://youzan.github.io/vant/vant-use/) | Collection of Vant Composition APIs |
| [vant-demo](https://github.com/youzan/vant-demo) | Collection of Vant demos |
| [vant-cli](https://github.com/youzan/vant/tree/dev/packages/vant-cli) | Scaffold for UI library |
| [vant-icons](https://github.com/youzan/vant/tree/dev/packages/vant-icons) | Vant icons |
| [vant-touch-emulator](https://github.com/youzan/vant/tree/dev/packages/vant-touch-emulator) | Using vant in desktop browsers |

## Links

- [Documentation](https://youzan.github.io/vant)
- [Changelog](https://youzan.github.io/vant#/en-US/changelog)
- [Gitter](https://gitter.im/vant-contrib/discuss?utm_source=share-link&utm_medium=link&utm_campaign=share-link)

## Preview

You can scan the following QR code to access the demo：

<img src="https://img01.yzcdn.cn/vant/preview_qrcode_20180528.png" width="220" height="220" >

## LICENSE

[MIT](https://en.wikipedia.org/wiki/MIT_License)
