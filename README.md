<p>
    <a href="https://github.com/youzan/"><img alt="有赞logo" width="36px" src="https://img.yzcdn.cn/public_files/2017/02/09/e84aa8cbbf7852688c86218c1f3bbf17.png" alt="youzan">
    </a>
</p>
<p align="center">
    <img alt="项目logo" src="https://img.yzcdn.cn/upload_files/2017/04/20/FlkVrSlOr-SGK9qQqtilN6-IFZyT.png">
</p>
<p align="center">A Vue.js 2.0 Mobile UI at YouZan</p>

[![Build Status](https://travis-ci.org/youzan/vant.svg?branch=master)](https://travis-ci.org/youzan/vant) [![Coverage Status](https://img.shields.io/codecov/c/github/youzan/vant/dev.svg)](https://codecov.io/github/youzan/vant?branch=dev) [![npm version](https://img.shields.io/npm/v/vant.svg?style=flat)](https://www.npmjs.com/package/vant) [![downloads](https://img.shields.io/npm/dt/vant.svg)](https://www.npmjs.com/package/vant) 
 
[访问中文版](./README.zh-CN.md)

## Install

```shell
npm i -S vant
```
 
## Usage
 
 
### Import all components
 
```javascript
import Vue from 'vue';
import vant from 'vant';
import 'vant/lib/vant-css/index.css';

Vue.use(vant);
```
 
### Import on demand

```javascript
import Vue from 'vue';
import { Button, Cell } from 'vant';
import 'vant/lib/vant-css/button.css';
import 'vant/lib/vant-css/cell.css';

Vue.component(Button.name, Button);
Vue.component(Cell.name, Cell);
```

## Development

### Add a new component

```shell
make init componentName
```

### Start coding

Start development mode:

```shell
npm run dev
```

Browser visit [http://localhost:8080](http://localhost:8080) to see an example of all components.

## Preview

You can sweep the phone to scan the following QR code to access the phone side demo：

![zanui_vue_mobile_qrcode](https://img.yzcdn.cn/v2/image/youzanyun/zanui/pc/zanui_vue_mobile_preview_03.png)
 
## LICENSE

This project is based on the [MIT](https://zh.wikipedia.org/wiki/MIT%E8%A8%B1%E5%8F%AF%E8%AD%89) agreement and is free to enjoy and participate in open source.
