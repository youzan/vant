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
 
## 特性

- 组件都是来源于有赞的微商城业务，并且经过有赞业务的检验，更靠谱
- 丰富的文档和Demo
- 支持 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import)
- 单元测试覆盖率超过90%
- 不仅仅有丰富的基础组件，还有许多的业务组件

<p align="center">
  <img alt="feature demo" src="https://img.yzcdn.cn/public_files/2017/12/05/a3c59ca87ff49f160158a5a202c88804.png">
</p >
 
## 安装

```shell
npm i -S vant
```
 
## 快速上手

#### 方式一. 使用 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) (推荐)
```bash
# 安装 babel-plugin-import 插件
npm i babel-plugin-import -D
```

```js
// 在 .babelrc 或 babel-loader 中添加插件配置
{
  "plugins": [
    ["import", { "libraryName": "vant", "style": true }]
  ]
}
```

接着你可以在代码中直接引入 Vant 组件，插件会自动将代码转化为方式二中的按需引入形式。

```js
import { Button } from 'vant';
```

#### 方式二. 按需引入组件

```js
import { Button } from 'vant/lib/button';
import 'vant/lib/vant-css/base.css';
import 'vant/lib/vant-css/button.css';
```
 
#### 方式三. 导入所有组件

```js
import Vue from 'vue';
import Vant from 'vant';
import 'vant/lib/vant-css/index.css';

Vue.use(Vant);
```

### CDN

```html
<!-- 引入样式 -->
<link rel="stylesheet" href="https://unpkg.com/vant/lib/vant-css/index.css">

<!-- 引入组件 --><script></script>
<script src="https://unpkg.com/vant/lib/vant.min.js"></script>
```

更多内容请参考 [快速上手](https://www.youzanyun.com/zanui/vant#/zh-CN/component/quickstart).

## 贡献代码

修改代码请阅读我们的 [开发指南](./.github/CONTRIBUTING.zh-CN.md)。

使用过程中发现任何问题都可以提 [Issue](https://github.com/youzan/vant/issues) 给我们，当然，我们也非常欢迎你给我们发 [PR](https://github.com/youzan/vant/pulls)。

## 浏览器支持
现代浏览器以及 Android 4.0+, iOS 6+.

## 手机预览

可以手机扫码以下二维码访问手机端demo：

![qrcode](https://img.yzcdn.cn/v2/image/youzanyun/zanui/pc/zanui_vue_mobile_preview_03.png)

## 链接
- [详细文档](https://www.youzanyun.com/zanui/vant)
- [更新日志](https://www.youzanyun.com/zanui/vant#/en-US/component/changelog)
- [React 组件库 Zent](https://www.youzanyun.com/zanui/zent)
- [vue-cli-template-vant](https://github.com/youzan/vue-cli-template-vant) 
- [vant-demo](https://github.com/youzan/vant-demo)
 
## 开源协议

本项目基于 [MIT](https://zh.wikipedia.org/wiki/MIT%E8%A8%B1%E5%8F%AF%E8%AD%89) 协议，请自由地享受和参与开源。
