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

你可以通过以下免费 CDN 服务来使用 Vant:

- [jsdelivr](https://www.jsdelivr.com/package/npm/vant)
- [cdnjs](https://cdnjs.com/libraries/vant)
- [unpkg](https://unpkg.com/)

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

### 方式一. 通过 babel 插件按需引入组件

[babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 是一款 babel 插件，它会在编译过程中将 import 语句自动转换为按需引入的方式。

```bash
# 安装插件
npm i babel-plugin-import -D
```

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

接着你可以在代码中直接引入 Vant 组件，插件会自动将代码转化为按需引入的形式。

```js
// 原始代码
import { Button } from 'vant';

// 编译后代码
import Button from 'vant/es/button';
import 'vant/es/button/style';
```

> 如果你在使用 TypeScript，可以使用 [ts-import-plugin](https://github.com/Brooooooklyn/ts-import-plugin) 实现按需引入。

### 方式二. 在 Vite 项目中按需引入组件

对于 vite 项目，可以使用 [vite-plugin-style-import](https://github.com/anncwb/vite-plugin-style-import) 实现按需引入, 原理和 `babel-plugin-import` 类似。

```bash
# 安装插件
npm i vite-plugin-style-import -D
```

```js
// vite.config.js
import vue from '@vitejs/plugin-vue';
import styleImport from 'vite-plugin-style-import';

export default {
  plugins: [
    vue(),
    styleImport({
      libs: [
        {
          libraryName: 'vant',
          esModule: true,
          resolveStyle: (name) => `vant/es/${name}/style`,
        },
      ],
    }),
  ],
};
```

### 方式三. 手动按需引入组件

在不使用插件的情况下，可以手动引入需要使用的组件和样式。

```js
// 引入组件
import Button from 'vant/es/button';
// 引入组件对应的样式，若组件没有样式文件，则无须引入
import 'vant/es/button/style';
```

### 方式四. 导入所有组件

Vant 支持一次性导入所有组件，引入所有组件会增加代码包体积，因此不推荐这种做法。

```js
import { createApp } from 'vue';
import Vant from 'vant';
import 'vant/lib/index.css';

const app = createApp();
app.use(Vant);
```

> Tips: 配置按需引入后，将不允许直接导入所有组件。
