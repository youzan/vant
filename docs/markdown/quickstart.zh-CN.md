# 快速上手

### 脚手架

推荐使用 Vue 官方提供的脚手架 [Vue Cli 3](https://cli.vuejs.org/zh/) 创建项目

```bash
# 安装 Vue Cli
npm install -g @vue/cli

# 创建一个项目
vue create hello-world

# 创建完成后，可以通过命令打开图形化界面，如下图所示
vue ui
```

![](https://img.yzcdn.cn/vant/vue-cli-demo-201809032000.png)

在图形化界面中，点击`依赖` -> `安装依赖`，然后将 `vant` 添加到依赖中即可。

### 示例工程

我们提供了一个基于 Vue Cli 3 的示例工程，仓库地址为 [Vant Demo](https://github.com/youzan/vant-demo)，示例工程会帮助你了解如下内容：

- 基于 vant 搭建单页面应用，配置按需引入
- 配置 rem 适配方案
- 配置 viewport 适配方案
- 配置 TypeScript 工程
- 配置自定义主题色方案

### 安装

```bash
# 通过 npm 安装
npm i vant -S

# 通过 yarn 安装
yarn add vant
```

## 引入组件

### 方式一. 自动按需引入组件 (推荐)

[babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 是一款 babel 插件，它会在编译过程中将 import 的写法自动转换为按需引入的方式

```bash
# 安装插件
npm i babel-plugin-import -D
```

```js
// 在.babelrc 中添加配置
// 注意：webpack 1 无需设置 libraryDirectory
{
  "plugins": [
    ["import", {
      "libraryName": "vant",
      "libraryDirectory": "es",
      "style": true
    }]
  ]
}

// 对于使用 babel7 的用户，可以在 babel.config.js 中配置
module.exports = {
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]
};
```

```js
// 接着你可以在代码中直接引入 Vant 组件
// 插件会自动将代码转化为方式二中的按需引入形式
import { Button } from 'vant';
```

> 如果你在使用 TypeScript，可以使用 [ts-import-plugin](https://github.com/Brooooooklyn/ts-import-plugin) 实现按需引入

### 方式二. 手动按需引入组件

在不使用插件的情况下，可以手动引入需要的组件

```js
import Button from 'vant/lib/button';
import 'vant/lib/button/style';
```

### 方式三. 导入所有组件

Vant 支持一次性导入所有组件，引入所有组件会增加代码包体积，因此不推荐这种做法

```js
import Vue from 'vue';
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
```

> 注意：配置 babel-plugin-import 插件后将不允许导入所有组件

### 方式四. 通过 CDN 引入

```html
<!-- 引入样式 -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/vant@2.0/lib/index.css">

<!-- 引入组件 -->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vant@2.0/lib/vant.min.js"></script>

<script>
var Vue = window.Vue;
var vant = window.vant;

// 注册组件
Vue.use(vant);

// 调用函数式组件
vant.Toast('提示');
</script>
```

## 其他

### Rem 适配

Vant 中的样式默认使用`px`作为单位，如果需要使用`rem`单位，推荐使用以下两个工具

- [postcss-pxtorem](https://github.com/cuth/postcss-pxtorem) 是一款 postcss 插件，用于将单位转化为 rem
- [lib-flexible](https://github.com/amfe/lib-flexible) 用于设置 rem 基准值

下面提供了一份基本的 postcss 配置，可以在此配置的基础上根据项目需求进行修改

```js
module.exports = {
  plugins: {
    'autoprefixer': {
      browsers: ['Android >= 4.0', 'iOS >= 7']
    },
    'postcss-pxtorem': {
      rootValue: 37.5,
      propList: ['*']
    }
  }
}
```

> 注意：在配置 postcss-loader 时，应避免 ignore node_modules 目录，这会导致 Vant 的样式无法被编译

### 在桌面端使用

Vant 组件默认只适配了移动端设备，如果你需要在桌面端使用 vant，可以引入我们提供的 [@vant/touch-emulator](https://github.com/chenjiahan/vant-touch-emulator).

```bash
# 安装模块
npm i @vant/touch-emulator -S
```

```js
// 引入模块后自动生效
import '@vant/touch-emulator';
```
