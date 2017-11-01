<p>
    <a href="https://github.com/youzan/"><img alt="有赞logo" width="36px" src="https://img.yzcdn.cn/public_files/2017/02/09/e84aa8cbbf7852688c86218c1f3bbf17.png" alt="youzan">
    </a>
</p>
<p align="center">
    <img alt="项目logo" src="https://img.yzcdn.cn/upload_files/2017/04/20/FlkVrSlOr-SGK9qQqtilN6-IFZyT.png">
</p>
<p align="center">A Vue.js 2.0 Mobile UI at YouZan</p>

[![Build Status](https://travis-ci.org/youzan/vant.svg?branch=master)](https://travis-ci.org/youzan/vant) 
[![downloads](https://img.shields.io/npm/dt/vant.svg)](https://www.npmjs.com/package/vant) 
[![Coverage Status](https://img.shields.io/codecov/c/github/youzan/vant/dev.svg)](https://codecov.io/github/youzan/vant?branch=dev)
[![npm version](https://img.shields.io/npm/v/vant.svg?style=flat)](https://www.npmjs.com/package/vant) 
[![license](https://img.shields.io/npm/l/vant.svg)](https://www.npmjs.com/package/vant)
 
[访问中文版](./README.zh-CN.md)

## Features

- Components come from wechat mall business of [YouZan](https://youzan.com)
- Extensive documentation and demos.
- Support [babel-plugin-import](https://github.com/ant-design/babel-plugin-import)
- Unit test coverage over 90%
- Not only have the basic components, but also have a lot of business components

<p align="center">
  <img alt="feature demo" src="https://img.yzcdn.cn/public_files/2017/09/21/34974ceef63f380373bf3d68ec7907f8.gif">
</p >

## Install

```shell
npm i -S vant
```
 
## Quickstart

#### 1. Use [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) (Recommended)
```bash
# Install babel-plugin-import
npm i babel-plugin-import -D
```

```js
// set babel config in .babelrc or babel-loader
{
  "plugins": [
    ["import", { "libraryName": "vant", "style": true }]
  ]
}
```

Then you can import components from vant, equivalent to import manually below.

```js
import { Button } from 'vant';
```

#### 2. Manually import

```js
import { Button } from 'vant/lib/button';
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

### CDN

```html
<!-- import style -->
<link rel="stylesheet" href="https://unpkg.com/vant/lib/vant-css/index.css" />

<!-- import script --><script></script>
<script src="https://unpkg.com/vant/lib/vant.min.js"></script>
```

See more in [Quickstart](https://www.youzanyun.com/zanui/vant#/en-US/component/quickstart).
 
## Contribution
Please make sure to read the [Contributing Guide](./.github/CONTRIBUTING.md) before making a pull request.

## Browser Support
Modern browsers and Android 4.0+, iOS 6+.

## Links
- [Documentation](https://www.youzanyun.com/zanui/vant)
- [Change log](https://www.youzanyun.com/zanui/vant#/en-US/component/changelog)
- [React UI Zent](https://www.youzanyun.com/zanui/zent)
- [vue-cli-template-vant](https://github.com/youzan/vue-cli-template-vant) 
- [vant-demo](https://github.com/chenjiahan/vant-demo)
 
## Preview
You can scan the following QR code to access the demo：

![qrcode](https://img.yzcdn.cn/v2/image/youzanyun/zanui/pc/zanui_vue_mobile_preview_03.png)
 
## LICENSE

[MIT](https://zh.wikipedia.org/wiki/MIT%E8%A8%B1%E5%8F%AF%E8%AD%89)
