<p align="center">
    <img alt="logo" src="https://img.yzcdn.cn/public_files/2017/12/18/fd78cf6bb5d12e2a119d0576bedfd230.png" width="120" height="120" style="margin-bottom: 10px;">
</p>

<h3 align="center" style="margin: 30px 0 35px;">Mobile UI Components built on Vue</h3>

<p align="center">
    <img src="https://img.shields.io/npm/v/vant.svg?style=flat-square" alt="npm version" />
    <img src="https://img.shields.io/codecov/c/github/youzan/vant/dev.svg?style=flat-square" alt="Coverage Status" />
    <img src="https://travis-ci.org/youzan/vant.svg?branch=master" alt="Build Status" />
    <img src="https://img.shields.io/npm/dt/vant.svg?style=flat-square" alt="downloads" />
    <img src="https://img.shields.io/npm/dm/vant.svg?style=flat-square" alt="downloads" />
    <img src="https://img.badgesize.io/https://unpkg.com/vant/lib/vant.min.js?compression=gzip&style=flat-square&label=JS%20gzip%20size" alt="JS Gzip Size" />
    <img src="https://img.badgesize.io/https://unpkg.com/vant/lib/index.css?compression=gzip&style=flat-square&label=CSS%20gzip%20size" alt="CSS Gzip Size" />
</p>

<p align="center">
  🇨🇳 <a href="./README.zh-CN.md">访问中文版</a>
  &nbsp;
  🚀 <a href="https://github.com/youzan/vant-weapp" target="_blank">Vant Weapp - 小程序版</a>
</p>

---

## Features

* 50+ Reusable components
* 90% Unit test coverage
* Extensive documentation and demos
* Support [babel-plugin-import](https://github.com/ant-design/babel-plugin-import)
* Support Custom Theme
* Support i18n
* Support TS
* Support SSR

## Install

#### NPM

```shell
npm i vant -S
```

#### YARN

```shell
yarn add vant
```

#### CDN

```html
<!-- import style -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/vant@1.6/lib/index.css" />

<!-- import script -->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vant@1.6/lib/vant.min.js"></script>
```

## Quickstart

#### 1. Use [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) (Recommended)

```bash
# Install babel-plugin-import
npm i babel-plugin-import -D
```

```js
// set babel config in .babelrc or babel-loader
// Note: Don't set libraryDirectory if you are using webpack 1.
{
  "plugins": [
    ["import", {
      "libraryName": "vant",
      "libraryDirectory": "es",
      "style": true
    }]
  ]
}
```

Then you can import components from vant, equivalent to import manually below.

```js
import { Button } from 'vant';
```

> If you are using TypeScript，please use [ts-import-plugin](https://github.com/Brooooooklyn/ts-import-plugin) instead

#### 2. Manually import

```js
import Button from 'vant/lib/button';
import 'vant/lib/button/style';
```

#### 3. Import all components

```js
import Vue from 'vue';
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
```

> If you configured babel-plugin-import, you won't be allowed to import all components.

See more in [Quickstart](https://youzan.github.io/vant#/en-US/quickstart).

## Contribution

Please make sure to read the [Contributing Guide](./.github/CONTRIBUTING.md) before making a pull request.

## Browser Support

Modern browsers and Android 4.0+, iOS 6+.

## Links

* [Documentation](https://youzan.github.io/vant)
* [Changelog](https://youzan.github.io/vant#/en-US/changelog)
* [Vant Demo](https://github.com/youzan/vant-demo)
* [Vant Weapp: Weapp UI](https://github.com/youzan/vant-weapp)
* [Zent: PC UI base on React](https://www.youzanyun.com/zanui/zent)


## Preview

You can scan the following QR code to access the demo：

<img src="https://img.yzcdn.cn/vant/preview_qrcode_20180528.png" width="220" height="220" >

## Wechat Group

Scan the qrcode to join our wechat discussion group, please note that you want to join Vant discussion group.

<img src="https://img.yzcdn.cn/vant/wechat_20180606.png" width="220" height="292" >

## LICENSE

[MIT](https://zh.wikipedia.org/wiki/MIT%E8%A8%B1%E5%8F%AF%E8%AD%89)
