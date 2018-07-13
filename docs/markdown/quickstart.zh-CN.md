## 快速上手

### 脚手架

我们提供了开箱即用的开发脚手架，通过 [vue-cli](https://github.com/vuejs/vue-cli) 即可快速创建一个基于 `Vant` 的项目。

```shell
vue init youzan/vue-cli-template-vant my-project
```

### 安装

#### NPM

```shell
npm i vant -S
```

#### YARN

```shell
yarn add vant
```

#### CDN

访问下面的文件 URL，会自动重定向至最新版本的 CDN 链接，建议使用固定版本的 CDN 链接，避免升级时受到非兼容性更新的影响。

```html
<!-- 引入样式 -->
<link rel="stylesheet" href="https://unpkg.com/vant/lib/vant-css/index.css">

<!-- 引入组件 -->
<script src="https://unpkg.com/vue/dist/vue.min.js"></script>
<script src="https://unpkg.com/vant/lib/vant.min.js"></script>
```

### 引入组件

#### 方式一. 使用 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) (推荐)

`babel-plugin-import` 是一款 babel 插件，它会在编译过程中将 import 的写法自动转换为按需引入的方式

```bash
# 安装 babel-plugin-import 插件
npm i babel-plugin-import -D
```

```js
// 在 .babelrc 或 babel-loader 中添加插件配置
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
```

接着你可以在代码中直接引入 Vant 组件，插件会自动将代码转化为方式二中的按需引入形式

```js
import { Button, Cell } from 'vant';
```

> 如果你在使用 TypeScript，可以使用 [ts-import-plugin](https://github.com/Brooooooklyn/ts-import-plugin) 实现按需引入

#### 方式二. 按需引入组件

在不使用插件的情况下，可以手动引入需要的组件

```js
import Button from 'vant/lib/button';
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

> 注意：配置 babel-plugin-import 插件后将不允许导入所有组件


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
    }
    'postcss-pxtorem': {
      rootValue: 37.5,
      propList: ['*']
    }
  }
}
```

> 注意：在配置 postcss-loader 时，应避免 ignore node_modules 目录，这会导致 Vant 的样式无法被编译
