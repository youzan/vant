# Quickstart 快速开始

[![NPM Version](https://img.shields.io/badge/version-0.11.x-orange.svg?style=flat-square&longCache=true)](http://npmjs.org/package/cloud-ui.vusion)

Cloud UI 是网易云计算前端团队推出的一款基于 Vusion 的桌面端组件库，主要服务于网易云控制台及相关产品。

该组件库经过大量的项目实践和总结，数量丰富、功能完善。可以大大降低开发成本，为产品提供更好的用户体验。

### 特性

- 高质量、数量丰富、功能完善
- 开箱即用、扩展灵活
- 持续维护更新

### 支持环境

- 支持 Vue.js 2.x
- 支持现代浏览器和 IE9 及以上

### 如何贡献

- 使用中存在问题，可以给我们 [报告 Bug](https://github.com/vusion/cloud-ui/issues)
- 希望参与贡献，欢迎 [Pull Request](https://github.com/vusion/cloud-ui/pulls)

## 安装与引入

组件库的安装与引入有三种方式。推荐使用 npm 的安装方式，可以和 Webpack 以及其他 npm 生态很好地结合使用。

### npm 安装，全部引入

使用 npm 安装组件库`cloud-ui.vusion`

``` shell
npm i --save cloud-ui.vusion
```

引入`dist`目录下的 JS 和 CSS 文件

``` js
import Vue from 'vue';
import * as CloudUI from 'cloud-ui.vusion/dist';
import 'cloud-ui.vusion/dist/index.css';
// 如需引入其他主题，将上面的路径替换为如下不同的主题样式
// import 'cloud-ui.vusion/dist/theme-dark.css';

Vue.use(CloudUI); // 全局安装组件库中的组件、指令等
```

- 优点：
    - 方便快捷，可以很容易使用组件库的全部功能
    - 开发时速度较快
    - 项目可以不使用 Vusion CLI，并且 Webpack 配置不需要跟随 Vusion 体系配置
    - 不需要考虑组件之间的依赖关系
- 缺点：
    - 引入整体库体积较大
    - 组件样式无法根据项目中的`global.css`作变更
    - 组件库中的资源文件（字体、图片等）不会自动和项目中的资源文件打包在一起

### npm 安装，按需引入

使用 npm 安装组件库`cloud-ui.vusion`

``` shell
npm i --save cloud-ui.vusion
```

引入`install`函数进行安装

``` js
import Vue from 'vue';
import { install, directives, UButton, UText, UInput } from 'cloud-ui.vusion';

install(Vue, { directives, UButton, UText, UInput }); // 全局安装组件库中的组件、指令等等
```

- 优点：
    - 打包时可以利用 TreeShaking 效果，去除不必要的组件，减少打包体积
    - 组件样式可以根据项目中的`global.css`作变更
    - 组件库中的资源文件（字体、图片等）可以和项目中的资源文件打包在一起
- 缺点：
    - 项目需要使用 Vusion CLI 启动，或者 Webpack 配置需要完全跟随 Vusion 体系配置
    - 引入时需要考虑组件的隐性依赖关系。比如：`<u-cascade-select>`中使用了`<u-select>`，如果在引入 UCascadeSelect 时没有引入 USelect，就会出问题。（隐性依赖是为了支持组件的可替换性）
    - 开发时速度较慢，因为需要对组件库中的源文件进行编译

### CDN 引入

通过 [unpkg.com/cloud-ui.vusion](https://unpkg.com/cloud-ui.vusion) 可以看到 Cloud UI 的最新版本的资源，在页面上引入 JS 和 CSS 文件即可开始使用：

``` htm
<link rel="stylesheet" href="https://unpkg.com/cloud-ui.vusion/dist/index.css">
<!-- 如需引入其他主题，将上面的路径替换为如下不同的主题样式 -->
<!-- link rel="stylesheet" href="https://unpkg.com/cloud-ui.vusion/dist/theme-dark.css" -->
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/cloud-ui.vusion/dist/index.js"></script>
<script>
Vue.use(CloudUI);
</script>
```

``` htm
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Vusion Example</title>
    <link rel="stylesheet" href="https://unpkg.com/cloud-ui.vusion/dist/index.css">
    <script src="https://unpkg.com/vue/dist/vue.js"></script>
    <script src="https://unpkg.com/cloud-ui.vusion/dist/index.js"></script>
</head>
<body>
<div id="app">
    <u-button @click="show">Click me!</u-button>
</div>
<script>
    Vue.use(CloudUI);
    new Vue({
        el: '#app',
        methods: {
            show() {
                this.$alert('Hello World!');
            },
        },
    });
</script>
</body>
</html>
```
