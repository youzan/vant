# 定制主题

### 废弃提示

本文档已废弃，Vant 提供了更方便的 [ConfigProvider 全局配置](#/zh-CN/config-provider) 组件进行主题配置。基于 Less 变量进行定制的方式**将在下个大版本废弃**。

### 介绍

Vant 提供了一套默认主题，CSS 命名采用 BEM 的风格，方便使用者覆盖样式。如果你想完全替换主题色或者其他样式，可以按照本文档进行主题定制。

### 示例工程

我们提供了一个基于 Vue Cli 3 的示例工程，仓库地址为 [Vant Demo](https://github.com/youzan/vant-demo)，其中包含了定制主题的基本配置，可以作为参考。

### 样式变量

Vant 使用了 [Less](http://lesscss.org/) 对样式进行预处理，并内置了一些样式变量，通过替换样式变量即可定制你自己需要的主题。

下面是所有的[基础样式变量](https://github.com/youzan/vant/blob/dev/packages/vant/src/style/var.less)，组件的样式变量请参考各个组件的文档，或查看组件源码目录下的 `var.less` 文件。

```less
// Color Palette
@black: #000;
@white: #fff;
@gray-1: #f7f8fa;
@gray-2: #f2f3f5;
@gray-3: #ebedf0;
@gray-4: #dcdee0;
@gray-5: #c8c9cc;
@gray-6: #969799;
@gray-7: #646566;
@gray-8: #323233;
@red: #ee0a24;
@blue: #1989fa;
@orange: #ff976a;
@orange-dark: #ed6a0c;
@orange-light: #fffbe8;
@green: #07c160;

// Gradient Colors
@gradient-red: linear-gradient(to right, #ff6034, #ee0a24);
@gradient-orange: linear-gradient(to right, #ffd01e, #ff8917);

// Component Colors
@text-color: @gray-8;
@active-color: @gray-2;
@active-opacity: 0.7;
@disabled-opacity: 0.5;
@background-color: @gray-1;
@background-color-light: #fafafa;
@text-link-color: #576b95;

// Padding
@padding-base: 4px;
@padding-xs: @padding-base * 2;
@padding-sm: @padding-base * 3;
@padding-md: @padding-base * 4;
@padding-lg: @padding-base * 6;
@padding-xl: @padding-base * 8;

// Font
@font-size-xs: 10px;
@font-size-sm: 12px;
@font-size-md: 14px;
@font-size-lg: 16px;
@font-weight-bold: 500;
@line-height-xs: 14px;
@line-height-sm: 18px;
@line-height-md: 20px;
@line-height-lg: 22px;
@base-font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue',
  Helvetica, Segoe UI, Arial, Roboto, 'PingFang SC', 'miui', 'Hiragino Sans GB',
  'Microsoft Yahei', sans-serif;
@price-integer-font-family: Avenir-Heavy, PingFang SC, Helvetica Neue, Arial,
  sans-serif;

// Animation
@animation-duration-base: 0.3s;
@animation-duration-fast: 0.2s;
@animation-timing-function-enter: ease-out;
@animation-timing-function-leave: ease-in;

// Border
@border-color: @gray-3;
@border-width-base: 1px;
@border-radius-sm: 2px;
@border-radius-md: 4px;
@border-radius-lg: 8px;
@border-radius-max: 999px;
```

## 定制方法

### 步骤一 引入样式源文件

定制主题时，需要引入组件对应的 Less 样式文件，支持按需引入和手动引入两种方式。

#### 按需引入样式（推荐）

在 babel.config.js 中配置按需引入样式源文件，注意 babel 6 不支持按需引入样式，请手动引入样式。

```js
module.exports = {
  plugins: [
    [
      'import',
      {
        libraryName: 'vant',
        libraryDirectory: 'es',
        // 指定样式路径
        style: (name) => `${name}/style/less`,
      },
      'vant',
    ],
  ],
};
```

#### 手动引入样式

```js
// 引入全部样式
import 'vant/lib/index.less';

// 引入单个组件样式
import 'vant/lib/button/style/less';
```

### 步骤二 修改样式变量

使用 Less 提供的 [modifyVars](http://lesscss.org/usage/#using-less-in-the-browser-modify-variables) 即可对变量进行修改，下面是参考的 webpack 配置。

```js
// webpack.config.js
module.exports = {
  rules: [
    {
      test: /\.less$/,
      use: [
        // ...其他 loader 配置
        {
          loader: 'less-loader',
          options: {
            // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
            lessOptions: {
              modifyVars: {
                // 直接覆盖变量
                'text-color': '#111',
                'border-color': '#eee',
                // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
                hack: `true; @import "your-less-file-path.less";`,
              },
            },
          },
        },
      ],
    },
  ],
};
```

如果 vue-cli 搭建的项目，可以在 `vue.config.js` 中进行配置。

```js
// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      less: {
        // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
        lessOptions: {
          modifyVars: {
            // 直接覆盖变量
            'text-color': '#111',
            'border-color': '#eee',
            // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
            hack: `true; @import "your-less-file-path.less";`,
          },
        },
      },
    },
  },
};
```

### Vite 项目

如果是 vite 项目，可以跳过以上步骤，直接在 `vite.config.js` 中添加如下配置即可。

```js
// vite.config.js
import vue from '@vitejs/plugin-vue';
import styleImport from 'vite-plugin-style-import';

export default {
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        // 覆盖样式变量
        modifyVars: {
          'text-color': '#111',
          'border-color': '#eee',
        },
      },
    },
  },
  resolve: {
    alias: [{ find: /^~/, replacement: '' }],
  },
  plugins: [
    vue(),
    // 按需引入样式源文件
    styleImport({
      libs: [
        {
          libraryName: 'vant',
          esModule: true,
          resolveStyle: (name) => `vant/es/${name}/style/less`,
        },
      ],
    }),
  ],
};
```
