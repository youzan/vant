<p align="center">
    <img alt="logo" src="https://img.yzcdn.cn/public_files/2017/12/18/fd78cf6bb5d12e2a119d0576bedfd230.png" width="120" style="margin-bottom: 10px;">
</p>
<h3 align="center" style="margin: 30px 0 35px;">轻量、可靠的移动端 Vue 组件库</h3>

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
  🇬🇧 <a href="./README.md">访问英文版</a>
  &nbsp;
  🚀 <a href="https://github.com/youzan/vant-weapp" target="_blank">Vant Weapp - 小程序版</a>
</p>

---

## 特性

* 50+ 个组件
* 90% 单元测试覆盖率
* 完善的中英文文档和示例
* 支持按需引入
* 支持主题定制
* 支持国际化
* 支持 TS
* 支持 SSR

## 安装

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
<!-- 引入样式 -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/vant@1.6/lib/index.css">

<!-- 引入组件 -->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vant@1.6/lib/vant.min.js"></script>
```

## 快速上手

#### 方式一. 使用  [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) (推荐)

`babel-plugin-import` 是一款 babel 插件，它会在编译过程中将 import 的写法自动转换为按需引入的方式

```bash
# 安装 babel-plugin-import 插件
npm i babel-plugin-import -D
```

```js
// 在 .babelrc 或 babel-loader 中添加插件配置
// 注意：webpack 1 无需设置 libraryDirectory。
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

接着你可以在代码中直接引入 Vant 组件，插件会自动将代码转化为方式二中的按需引入形式。

```js
import { Button } from 'vant';
```

> 如果你在使用 TypeScript，可以使用 [ts-import-plugin](https://github.com/Brooooooklyn/ts-import-plugin) 实现按需引入

#### 方式二. 按需引入组件

在不使用插件的情况下，可以手动引入需要的组件

```js
import Button from 'vant/lib/button';
import 'vant/lib/button/style';
```

#### 方式三. 导入所有组件

```js
import Vue from 'vue';
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
```

> 注意：配置 babel-plugin-import 插件后将不允许导入所有组件

更多内容请参考 [快速上手](https://youzan.github.io/vant#/zh-CN/quickstart).

## 贡献代码

修改代码请阅读我们的 [开发指南](https://www.youzanyun.com/zanui/vant#/zh-CN/contribution)。

使用过程中发现任何问题都可以提 [Issue](https://github.com/youzan/vant/issues) 给我们，当然，我们也非常欢迎你给我们发 [PR](https://github.com/youzan/vant/pulls)。

## 浏览器支持

现代浏览器以及 Android 4.0+, iOS 6+.

## 链接

* [详细文档](https://youzan.github.io/vant)
* [更新日志](https://youzan.github.io/vant#/zh-CN/changelog)
* [Vant Demo: 示例工程](https://github.com/youzan/vant-demo)
* [Vant Weapp: 小程序 UI](https://github.com/youzan/vant-weapp)
* [Zent: PC 端 React UI](https://www.youzanyun.com/zanui/zent)

## 手机预览

可以手机扫码以下二维码访问手机端 demo：

<img src="https://img.yzcdn.cn/vant/preview_qrcode_20180528.png" width="220" height="220" >

## 微信讨论群

欢迎大家加入 Vant 交流群一起讨论，添加下方微信并注明『加入 Vant 交流群』即可

<img src="https://img.yzcdn.cn/vant/wechat_20180606.png" width="220" height="292" >

## 开源协议

本项目基于 [MIT](https://zh.wikipedia.org/wiki/MIT%E8%A8%B1%E5%8F%AF%E8%AD%89) 协议，请自由地享受和参与开源。
