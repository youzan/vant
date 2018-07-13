<p>
    <a href="https://github.com/youzan/"><img alt="logo" width="36" height="36" src="https://img.yzcdn.cn/public_files/2017/02/09/e84aa8cbbf7852688c86218c1f3bbf17.png" alt="youzan">
    </a>
</p>
<p align="center">
    <img alt="logo" src="https://img.yzcdn.cn/public_files/2017/12/18/fd78cf6bb5d12e2a119d0576bedfd230.png" width="120" height="120" style="margin-bottom: 10px;">
</p>

<p align="center" style="margin: 30px 0 35px;">Lightweight Mobile UI Components built on Vue</p>

[![Build Status](https://travis-ci.org/youzan/vant.svg?branch=master)](https://travis-ci.org/youzan/vant)
[![downloads](https://img.shields.io/npm/dt/vant.svg)](https://www.npmjs.com/package/vant)
[![Coverage Status](https://img.shields.io/codecov/c/github/youzan/vant/dev.svg)](https://codecov.io/github/youzan/vant?branch=dev)
[![npm version](https://img.shields.io/npm/v/vant.svg?style=flat)](https://www.npmjs.com/package/vant)
[![license](https://img.shields.io/npm/l/vant.svg)](https://www.npmjs.com/package/vant)
[![JS Gzip Size](http://img.badgesize.io/https://unpkg.com/vant/lib/vant.min.js?compression=gzip&style=flat-square&label=JS%20gzip%20size)](https://unpkg.com/vant/lib/vant.min.js)
[![CSS Gzip Size](http://img.badgesize.io/https://unpkg.com/vant/lib/vant-css/index.css?compression=gzip&style=flat-square&label=CSS%20gzip%20size)](https://unpkg.com/vant/lib/vant-css/index.css)

[访问中文版](./README.zh-CN.md)

## Features

* 50+ Reusable components
* 90%+ Unit test coverage
* Extensive documentation and demos
* Support [babel-plugin-import](https://github.com/ant-design/babel-plugin-import)
* Support TypeScript
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
<link rel="stylesheet" href="https://unpkg.com/vant/lib/vant-css/index.css" />

<!-- import script -->
<script src="https://unpkg.com/vue/dist/vue.min.js"></script>
<script src="https://unpkg.com/vant/lib/vant.min.js"></script>
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
import 'vant/lib/vant-css/base.css';
import 'vant/lib/vant-css/button.css';
```

#### 3. Import all components

```js
import Vue from 'vue';
import Vant from 'vant';
import 'vant/lib/vant-css/index.css';

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
* [React UI](https://www.youzanyun.com/zanui/zent)
* [Weapp UI](https://github.com/youzan/zanui-weapp)
* [Vant Demo](https://github.com/youzan/vant-demo)
* [vue-cli-template-vant](https://github.com/youzan/vue-cli-template-vant)

## Preview

You can scan the following QR code to access the demo：

<img src="https://img.yzcdn.cn/vant/preview_qrcode_20180528.png" width="220" height="220" >

## Wechat Group

Scan the qrcode to join our wechat discussion group, please note that you want to join Vant discussion group.

<img src="https://img.yzcdn.cn/vant/wechat_20180606.png" width="220" height="292" >

## LICENSE

[MIT](https://zh.wikipedia.org/wiki/MIT%E8%A8%B1%E5%8F%AF%E8%AD%89)
