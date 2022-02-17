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

当然，你也可以通过 `yarn` 或 `pnpm` 进行安装：

```bash
# 通过 yarn 安装
yarn add vant

# 通过 pnpm 安装
pnpm add vant
```

### 通过 CDN 安装

使用 Vant 最简单的方法是直接在 html 文件中引入 CDN 链接，之后你可以通过全局变量 `vant` 访问到所有组件。

```html
<!-- 引入样式文件 -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/vant@3/lib/index.css"
/>

<!-- 引入 Vue 和 Vant 的 JS 文件 -->
<script src="https://cdn.jsdelivr.net/npm/vue@3"></script>
<script src="https://cdn.jsdelivr.net/npm/vant@3/lib/vant.min.js"></script>

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

我们提供了丰富的[示例工程](https://github.com/youzan/vant-demo)，通过示例工程你可以了解如下内容：

- 基于 Vite 和 Vant 搭建应用
- 基于 Nuxt 和 Vant 搭建应用
- 基于 Vue Cli 和 Vant 搭建应用
- 配置按需引入组件
- 配置基于 Rem 的适配方案
- 配置基于 Viewport 的适配方案
- 配置基于 TypeScript 的工程
- 配置自定义主题色方案

## 引入组件

### 在 vite 项目中按需引入组件（推荐）

在 vite 项目中使用 Vant 时，推荐安装 [vite-plugin-style-import](https://github.com/anncwb/vite-plugin-style-import) 插件，它可以自动按需引入组件的样式。

#### 1. 安装插件

```bash
# 通过 npm 安装
npm i vite-plugin-style-import@1.4.1 -D

# 通过 yarn 安装
yarn add vite-plugin-style-import@1.4.1 -D

# 通过 pnpm 安装
pnpm add vite-plugin-style-import@1.4.1 -D
```

#### 2. 配置插件

安装完成后，在 `vite.config.js` 文件中配置插件：

```js
import vue from '@vitejs/plugin-vue';
import styleImport, { VantResolve } from 'vite-plugin-style-import';

export default {
  plugins: [
    vue(),
    styleImport({
      resolves: [VantResolve()],
    }),
  ],
};
```

#### 3. 引入组件

完成以上两步，就可以直接使用 Vant 组件了：

```js
import { createApp } from 'vue';
import { Button } from 'vant';

const app = createApp();
app.use(Button);
```

> Vant 默认支持通过 Tree Shaking 实现 script 的按需引入。

### 在非 vite 项目中按需引入组件（推荐）

在非 vite 的项目中，可以通过 babel 插件来实现按需引入组件。我们需要安装 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 插件，它会在编译过程中将 import 语句自动转换为按需引入的方式。

#### 1. 安装插件

```bash
npm i babel-plugin-import -D
```

#### 2. 配置插件

在.babelrc 或 babel.config.js 中添加配置：

```json
{
  "plugins": [
    [
      "import",
      {
        "libraryName": "vant",
        "libraryDirectory": "es",
        "style": true
      }
    ]
  ]
}
```

#### 3. 引入组件

接着你可以在代码中直接引入 Vant 组件，插件会自动将代码转化为按需引入的形式。

```js
// 原始代码
import { Button } from 'vant';

// 编译后代码
import Button from 'vant/es/button';
import 'vant/es/button/style';
```

> 如果你在使用 TypeScript，可以使用 [ts-import-plugin](https://github.com/Brooooooklyn/ts-import-plugin) 实现按需引入。

### 导入所有组件（不推荐）

Vant 支持一次性导入所有组件，引入所有组件会**增加代码包体积**，因此不推荐这种做法。

```js
import { createApp } from 'vue';
import Vant from 'vant';
import 'vant/lib/index.css';

const app = createApp();
app.use(Vant);
```

> Tips: 配置按需引入插件后，将不允许直接导入所有组件。

### 手动按需引入组件（不推荐）

在不使用任何构建插件的情况下，可以手动引入需要使用的组件和样式。

```js
// 引入组件脚本
import Button from 'vant/es/button/index';
// 引入组件样式
// 若组件没有样式文件，则无须引入
import 'vant/es/button/style/index';
```
