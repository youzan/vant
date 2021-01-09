# 快速上手

### 介绍

通过本章节你可以了解到 Vant 的安装方法和基本使用姿势。

## 安装

### 通过 npm 安装

在现有项目中使用 Vant 时，可以通过 `npm` 或 `yarn` 进行安装：

```bash
# Vue 2 项目，安装 Vant 2：
npm i vant -S

# Vue 3 项目，安装 Vant 3：
npm i vant@next -S
```

### 通过 CDN 安装

使用 Vant 最简单的方法是直接在 html 文件中引入 CDN 链接，之后你可以通过全局变量 `vant` 访问到所有组件。

```html
<!-- 引入样式文件 -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/vant@next/lib/index.css"
/>

<!-- 引入 Vue 和 Vant 的 JS 文件 -->
<script src="https://cdn.jsdelivr.net/npm/vue@next"></script>
<script src="https://cdn.jsdelivr.net/npm/vant@next/lib/vant.min.js"></script>

<script>
  // 在 #app 标签下渲染一个按钮组件
  const app = Vue.createApp({
    template: `<van-button>按钮</van-button>`,
  });
  app.use(vant);

  // 通过 CDN 引入时不会自动注册 Lazyload 组件
  // 可以通过下面的方式手动注册
  app.use(vant.Lazyload);

  // 调用函数组件，弹出一个 Toast
  vant.Toast('提示');

  app.mount('#app');
</script>
```

### 通过脚手架安装

在新项目中使用 Vant 时，推荐使用 Vue 官方提供的脚手架 [Vue Cli](https://cli.vuejs.org/zh/) 创建项目并安装 Vant。

```bash
# 安装 Vue Cli
npm install -g @vue/cli

# 创建一个项目
vue create hello-world

# 创建完成后，可以通过命令打开图形化界面，如下图所示
vue ui
```

![](https://img.yzcdn.cn/vant/vue-cli-demo-201809032000.png)

在图形化界面中，点击 `依赖` -> `安装依赖`，然后将 `vant` 添加到依赖中即可。

## 示例

### 示例工程

我们提供了丰富的[示例工程](https://github.com/youzan/vant-demo)，通过示例工程你可以了解如下内容：

- 基于 Vue Cli 和 Vant 搭建应用
- 基于 Nuxt 和 Vant 搭建应用
- 配置按需引入组件
- 配置基于 Rem 的适配方案
- 配置基于 Viewport 的适配方案
- 配置基于 TypeScript 的工程
- 配置自定义主题色方案

## 引入组件

### 方式一. 自动按需引入组件 (推荐)

[babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 是一款 babel 插件，它会在编译过程中将 import 的写法自动转换为按需引入的方式。

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

> Tips: 如果你在使用 TypeScript，可以使用 [ts-import-plugin](https://github.com/Brooooooklyn/ts-import-plugin) 实现按需引入。

### 方式二. 手动按需引入组件

在不使用插件的情况下，可以手动引入需要的组件。

```js
import Button from 'vant/lib/button';
import 'vant/lib/button/style';
```

### 方式三. 导入所有组件

Vant 支持一次性导入所有组件，引入所有组件会增加代码包体积，因此不推荐这种做法。

```js
import { createApp } from 'vue';
import Vant from 'vant';
import 'vant/lib/index.css';

const app = createApp();
app.use(Vant);
```

> Tips: 配置按需引入后，将不允许直接导入所有组件。

## 常见问题

### 在 Vite 中如何按需引入组件？

在 Vite 中无须考虑按需引入的问题。Vite 在构建代码时，会自动通过 Tree Shaking 移除未使用的 ESM 模块。而 Vant 3.0 内部所有模块都是基于 ESM 编写的，天然具备按需引入的能力。

现阶段遗留的问题是，未使用的组件样式无法被 Tree Shaking 识别并移除，后续我们会考虑通过 Vite 插件的方式进行支持。

### 在 HTML 中无法正确渲染组件？

在 HTML 中使用 Vant 组件时，你可能会碰到部分示例代码无法正确渲染的情况，比如下面的用法：

```html
<van-cell-group>
  <van-cell title="单元格" value="内容" />
  <van-cell title="单元格" value="内容" />
</van-cell-group>
```

这是因为 HTML 并不支持自闭合的自定义元素，也就是说 `<van-cell />` 这样的语法是不被识别的，使用完整的闭合标签可以避免这个问题：

```html
<van-cell-group>
  <van-cell title="单元格" value="内容"></van-cell>
  <van-cell title="单元格" value="内容"></van-cell>
</van-cell-group>
```

在单文件组件、字符串模板和 JSX 中可以使用自闭合的自定义元素，因此不会出现这个问题。
