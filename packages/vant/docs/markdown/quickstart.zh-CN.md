# 快速上手

### 介绍

通过本章节你可以了解到 Vant 的安装方法和基本使用姿势。

## 安装

### 通过 npm 安装

在现有项目中使用 Vant 时，可以通过 `npm` 进行安装：

```bash
# Vue 3 项目，安装最新版 Vant
npm i vant

# Vue 2 项目，安装 Vant 2
npm i vant@latest-v2
```

当然，你也可以通过 `yarn`、`pnpm` 或 `bun` 进行安装：

```bash
# 通过 yarn 安装
yarn add vant

# 通过 pnpm 安装
pnpm add vant

# 通过 Bun 安装
bun add vant
```

### 在新项目中使用

如果你需要新建一个项目，我们推荐使用 [Rsbuild](https://github.com/web-infra-dev/rsbuild)，[Vite](https://cn.vitejs.dev/) 或 [Nuxt 框架](https://nuxt.com)。

#### Rsbuild

Rsbuild 是基于 Rspack 的构建工具，由 Vant 作者开发，具备一流的构建速度和开发体验，对 Vant 提供第一优先级支持。

你可以通过以下命令创建一个 Rsbuild 项目：

```bash
npm create rsbuild@latest
```

请访问 [Rsbuild 仓库](https://github.com/web-infra-dev/rsbuild) 了解更多信息。

#### 示例项目

以下是 Vant 官方提供的一些示例项目，你可以克隆该项目，并直接拷贝代码来使用。

- [vant-demo - rsbuild](https://github.com/vant-ui/vant-demo/tree/master/vant/rsbuild)：使用 Vue 3、Vant 4、Rsbuild 搭建应用
- [vant-demo - vite](https://github.com/vant-ui/vant-demo/tree/master/vant/vite)：使用 Vue 3、Vant 4、Vite 搭建应用
- [vant-demo - nuxt3](https://github.com/vant-ui/vant-demo/tree/master/vant/nuxt3)：使用 Vue 3、Nuxt 3、Vant 4 搭建应用。

### 通过 CDN 安装

如果你只需要开发一个简单的 HTML 页面，那么可以直接在 HTML 文件中引入 CDN 链接，之后你可以通过全局变量 `vant` 访问到所有组件。

```html
<!-- 引入样式文件 -->
<link
  rel="stylesheet"
  href="https://fastly.jsdelivr.net/npm/vant@4/lib/index.css"
/>

<!-- 引入 Vue 和 Vant 的 JS 文件 -->
<script src="https://fastly.jsdelivr.net/npm/vue@3"></script>
<script src="https://fastly.jsdelivr.net/npm/vant@4/lib/vant.min.js"></script>

<script>
  // 在 #app 标签下渲染一个按钮组件
  const app = Vue.createApp({
    template: `<van-button>按钮</van-button>`,
  });
  app.use(vant);

  // 通过 CDN 引入时不会自动注册 Lazyload 组件
  // 可以通过下面的方式手动注册
  app.use(vant.Lazyload);

  // 调用工具函数，弹出一个 Toast
  vant.showToast('提示');

  app.mount('#app');
</script>
```

#### 免费 CDN

你可以通过以下免费 CDN 服务来使用 Vant:

- [jsdelivr](https://www.jsdelivr.com/package/npm/vant)
- [cdnjs](https://cdnjs.com/libraries/vant)
- [unpkg](https://unpkg.com/)

注意：免费 CDN 一般用于制作原型或个人小型项目，不推荐在企业生产环境中使用免费 CDN。

对于企业开发者，建议使用以下方式：

- 通过 npm 引入，并通过构建工具进行打包
- 下载对应文件，并托管在你自己的服务器或 CDN 上

## 示例

### 示例工程

我们提供了丰富的[示例工程](https://github.com/vant-ui/vant-demo)，通过示例工程你可以了解如下内容：

- 基于 Rsbuild 和 Vant 搭建应用
- 基于 Vite 和 Vant 搭建应用
- 基于 Nuxt 和 Vant 搭建应用
- 基于 Vue CLI 和 Vant 搭建应用
- 配置按需引入组件
- 配置基于 Rem 的适配方案
- 配置基于 Viewport 的适配方案
- 配置基于 TypeScript 的工程

## 引入组件

### 方法一. 常规用法

下面是使用 Vant 组件的用法示例：

```js
import { createApp } from 'vue';
// 1. 引入你需要的组件
import { Button } from 'vant';
// 2. 引入组件样式
import 'vant/lib/index.css';

const app = createApp();

// 3. 注册你需要的组件
app.use(Button);
```

Vant 支持多种组件注册方式，除了在 app 上全局注册组件，你也可以选择其他的方式，比如局部注册，详见 [组件注册](#/zh-CN/advanced-usage#zu-jian-zhu-ce) 章节。

> 提示：Vant 默认支持 Tree Shaking，因此你不需要配置任何插件，通过 Tree Shaking 即可移除不需要的 JS 代码，但 CSS 样式无法通过这种方式优化，如果需要按需引入 CSS 样式，请参考下面的方法二。

### 方法二. 按需引入组件样式

在基于 Rsbuild、Vite、webpack 或 vue-cli 的项目中使用 Vant 时，可以使用 [unplugin-vue-components](https://github.com/unplugin/unplugin-vue-components) 插件，它可以自动引入组件。

Vant 官方基于 `unplugin-vue-components` 提供了自动导入样式的解析器 [@vant/auto-import-resolver](https://github.com/youzan/vant/tree/main/packages/vant-auto-import-resolver)，两者可以配合使用。

相比于常规用法，这种方式可以按需引入组件的 CSS 样式，从而减少一部分代码体积，但使用起来会变得繁琐一些。如果业务对 CSS 的体积要求不是特别极致，我们推荐使用更简便的常规用法。

#### 1. 安装插件

```bash
# 通过 npm 安装
npm i @vant/auto-import-resolver unplugin-vue-components -D

# 通过 yarn 安装
yarn add @vant/auto-import-resolver unplugin-vue-components -D

# 通过 pnpm 安装
pnpm add @vant/auto-import-resolver unplugin-vue-components -D

# 通过 bun 安装
bun add @vant/auto-import-resolver unplugin-vue-components -D
```

#### 2. 配置插件

如果是基于 [Rsbuild](https://github.com/web-infra-dev/rsbuild) 的项目，在 `rsbuild.config.js` 文件中配置插件：

```js
import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';
import Components from 'unplugin-vue-components/rspack';
import { VantResolver } from '@vant/auto-import-resolver';

export default defineConfig({
  plugins: [pluginVue()],
  tools: {
    rspack: {
      plugins: [
        Components({
          resolvers: [VantResolver()],
        }),
      ],
    },
  },
});
```

如果是基于 Vite 的项目，在 `vite.config.js` 文件中配置插件：

```js
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from '@vant/auto-import-resolver';

export default {
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
};
```

如果是基于 vue-cli 的项目，在 `vue.config.js` 文件中配置插件：

```js
const { VantResolver } = require('@vant/auto-import-resolver');
const ComponentsPlugin = require('unplugin-vue-components/webpack');

module.exports = {
  configureWebpack: {
    plugins: [
      // 当 unplugin-vue-components 版本小于 0.26.0 时，使用以下写法
      ComponentsPlugin({ resolvers: [VantResolver()] }),
      //当 unplugin-vue-components 版本大于等于 0.26.0 时，使用以下写法
      ComponentsPlugin.default({ resolvers: [VantResolver()] }),
    ],
  },
};
```

如果是基于 webpack 的项目，在 `webpack.config.js` 文件中配置插件：

```js
const { VantResolver } = require('@vant/auto-import-resolver');
const ComponentsPlugin = require('unplugin-vue-components/webpack');

module.exports = {
  plugins: [
    // 当 unplugin-vue-components 版本小于 0.26.0 时，使用以下写法
    ComponentsPlugin({ resolvers: [VantResolver()] }),
    //当 unplugin-vue-components 版本大于等于 0.26.0 时，使用以下写法
    ComponentsPlugin.default({ resolvers: [VantResolver()] }),
  ],
};
```

#### 3. 使用组件

完成以上两步，就可以直接在模板中使用 Vant 组件了，`unplugin-vue-components` 会解析模板并自动注册对应的组件, `@vant/auto-import-resolver` 会自动引入对应的组件样式。

```html
<template>
  <van-button type="primary" />
</template>
```

#### 4. 引入函数组件的样式

Vant 中有个别组件是以函数的形式提供的，包括 `Toast`，`Dialog`，`Notify` 和 `ImagePreview` 组件。在使用函数组件时，`unplugin-vue-components` 无法解析自动注册组件，导致 `@vant/auto-import-resolver` 无法解析样式，因此需要手动引入样式。

```js
// Toast
import { showToast } from 'vant';
import 'vant/es/toast/style';

// Dialog
import { showDialog } from 'vant';
import 'vant/es/dialog/style';

// Notify
import { showNotify } from 'vant';
import 'vant/es/notify/style';

// ImagePreview
import { showImagePreview } from 'vant';
import 'vant/es/image-preview/style';
```

你可以在项目的入口文件或公共模块中引入以上组件的样式，这样在业务代码中使用组件时，便不再需要重复引入样式了。

#### 使用提示

- 请避免同时使用「全量引入」和「按需引入」这两种引入方式，否则会导致代码重复、样式错乱等问题。
- 在使用过程中，如果你遇到组件不能导入的问题，因为 unplugin-vue-components 并不是 Vant 官方维护的插件，所以建议到 [unplugin/unplugin-vue-components](https://github.com/unplugin/unplugin-vue-components) 仓库下反馈。
- 当 `unplugin-vue-components` 的版本号 >= 0.26.0 时，对于 `webpack`、`vue-cli` 和 `rspack`，你需要使用 `ComponentsPlugin.default` 进行注册。
- `@vant/auto-import-resolver` 提供了一些配置项，请参考 [README 文档](https://github.com/youzan/vant/tree/main/packages/vant-auto-import-resolver) 来了解更多。
- 如果是样式不生效的相关问题，你可以在 Vant 仓库下反馈。

## 在框架中使用

### 在 Nuxt 3 中使用

在 Nuxt 3 中使用 Vant 时，可以使用 [vant-nuxt](https://github.com/vant-ui/vant-nuxt) 模块，它可以自动引入组件，并按需引入的样式（包括函数组件）。

#### 1. 安装模块

```bash
# 通过 npm 安装
npm i @vant/nuxt -D

# 通过 yarn 安装
yarn add @vant/nuxt -D

# 通过 pnpm 安装
pnpm add @vant/nuxt -D

# 通过 Bun 安装
bun add @vant/nuxt -D
```

#### 2. 增加模块

在 `nuxt.config.js` 文件中增加模块：

```js
export default defineNuxtConfig({
  modules: ['@vant/nuxt'],
});
```

#### 3. 使用组件

完成以上两步，就可以直接在模板中使用 Vant 组件了。前往 [Nuxt 文档](https://nuxt.com/docs/guide/directory-structure/components) 了解更多。

```html
<template>
  <van-button type="primary" @click="showToast('toast')">button</van-button>
  <VanButton type="success" @click="showNotify('notify')">button</VanButton>
  <LazyVanButton type="default">lazy button</LazyVanButton>
</template>
```

## 迁移提示

### 移除 babel-plugin-import

从 Vant 4.0 版本开始，将不再支持 `babel-plugin-import`，请移除项目中依赖的 `babel-plugin-import` 插件。

只需要删除 `babel.config.js` 中的以下代码即可：

```diff
module.exports = {
  plugins: [
-    ['import', {
-      libraryName: 'vant',
-      libraryDirectory: 'es',
-      style: true
-    }, 'vant']
  ]
};
```

#### 收益

移除 `babel-plugin-import` 有以下收益：

- 不再强依赖 babel，项目可以使用 esbuild、swc 等更高效的编译工具，大幅度提升编译效率。
- 不再受到 `babel-plugin-import` 的 import 写法限制，可以从 vant 中导入除了组件以外的其他内容，比如 Vant 4 中新增的 `showToast` 等方法。

```ts
import { showToast, showDialog } from 'vant';
```
