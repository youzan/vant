# 配置指南

- [配置指南](#)
  - [vant.config.js](#vantconfigjs)
    - [name](#name)
    - [build.css](#buildcss)
    - [build.site](#buildsite)
    - [site.title](#sitetitle)
    - [site.logo](#sitelogo)
    - [site.description](#sitedescription)
    - [site.nav](#sitenav)
    - [site.versions](#siteversions)
    - [site.baiduAnalytics](#sitebaiduanalytics)
    - [site.searchConfig](#sitesearchconfig)
  - [Webpack](#webpack)
  - [Babel](#babel)
    - [默认配置](#-1)
    - [依赖](#-2)
  - [Postcss](#postcss)
    - [默认配置](#-3)
  - [browserslist](#browserslist)

## vant.config.js

`vant.config.js`中包含了`vant-cli`的打包配置和文档站点配置，请创建此文件并置于项目根目录下。下面是一份基本配置的示例：

```js
module.exports = {
  // 组件库名称
  name: 'demo-ui',
  // 构建配置
  build: {
    site: {
      publicPath: '/demo-ui/',
    },
  },
  // 文档站点配置
  site: {
    // 标题
    title: 'Demo UI',
    // 图标
    logo: 'https://img.yzcdn.cn/vant/logo.png',
    // 描述
    description: '示例组件库',
    // 左侧导航
    nav: [
      {
        title: '开发指南',
        items: [
          {
            path: 'home',
            title: '介绍',
          },
        ],
      },
      {
        title: '基础组件',
        items: [
          {
            path: 'my-button',
            title: 'MyButton 按钮',
          },
        ],
      },
    ],
  },
};
```

### name

- Type: `string`
- Default: `''`

组件库名称，建议使用中划线分割，如`demo-ui`。

### build.css

- Type: `object`
- Default: `{ preprocessor: 'less' }`

CSS 预处理器配置，目前支持`less`和`sass`两种预处理器，默认使用`less`。

```js
module.exports = {
  build: {
    css: {
      preprocessor: 'sass',
    },
  },
};
```

### build.site

- Type: `object`
- Default: `{ publicPath: '/' }`

`site.publicPath`等价于 webpack 的`output.publicPath`配置。

一般来说，我们的文档网站会部署在一个域名的子路径上，如 `https://my.github.io/demo-ui/`，这时候`publicPath`需要跟子路径保持一致，即`/demo-ui/`。

```js
module.exports = {
  build: {
    site: {
      publicPath: '/demo-ui/',
    },
  },
};
```

### build.srcDir

- Type: `string`
- Default: `src`

```js
module.exports = {
  build: {
    srcDir: 'myDir',
  },
};
```

### site.title

- Type: `string`
- Default: `''`

文档站点的标题。

### site.logo

- Type: `string`
- Default: `''`

文档站点的 Logo。

### site.description

- Type: `string`
- Default: `''`

标题下方的描述文案。

### site.nav

- Type: `object[]`
- Default: `undefined`

文档站点的左侧导航，数组中的每个对象表示一个导航分组。

```js
module.exports = {
  site: {
    nav: [
      {
        // 分组标题
        title: '开发指南',
        // 导航项
        items: [
          {
            // 导航项路由
            path: 'home',
            // 导航项文案
            title: '介绍',
          },
        ],
      },
    ],
  },
};
```

### site.versions

- Type: `object[]`
- Default: `undefined`

文档站点多版本配置，当组件库存在多个版本的文档时，可以通过`site.versions`在顶部导航配置一个版本切换按钮。

```js
module.exports = {
  site: {
    versions: [
      {
        label: '1.x',
        link: 'https://youzan.github.io/vant/1.x/',
      },
    ],
  },
};
```

### site.baiduAnalytics

- Type: `object`
- Default: `undefied`

文档网站的百度统计配置，添加这项配置后，会自动在构建文档网站时加载百度统计的脚本。

```js
module.exports = {
  site: {
    baiduAnalytics: {
      // 打开百度统计 ->『管理』->『代码获取』
      // 找到下面这串 URL: "https://hm.baidu.com/hm.js?xxxxx"
      // 将 `xxxxx` 填写在 seed 中即可
      seed: 'xxxxx',
    },
  },
};
```

### site.searchConfig

- Type: `object`
- Default: `undefined`

文档网站的搜索配置，基于 algolia 提供的 docsearch 服务实现。

配置内容参见 [docsearch](https://docsearch.algolia.com/docs/behavior)。

## Webpack

通过根目录下的`webpack.config.js`文件可以修改 Webpack 配置，配置内容会通过 [webpack-merge](https://github.com/survivejs/webpack-merge) 合并到最终的配置中。

比如修改 devServer 端口：

```js
module.exports = {
  devServer: {
    port: 9000,
  },
};
```

## Babel

通过根目录下的`babel.config.js`文件可以对 Babel 进行配置。

### 默认配置

推荐使用`vant-cli`内置的 preset，配置如下：

```js
module.exports = {
  presets: ['@vant/cli/preset'],
};
```

`@vant/cli/preset`中默认包含了以下插件：

- @babel/preset-env（不含 core-js）
- @babel/preset-typescript
- @babel/plugin-transform-runtime
- @babel/plugin-transform-object-assign
- @babel/plugin-proposal-optional-chaining
- @babel/plugin-proposal-nullish-coalescing-operator
- @vue/babel-preset-jsx

### 依赖

由于使用了`@babel/plugin-transform-runtime`来优化 Babel 的 helper 函数，你需要将`@babel/runtime`添加到`package.json`的依赖项：

```json
{
  "dependencies": {
    "@babel/runtime": "7.x"
  }
}
```

如果使用了 JSX 的语法，还需要将`@vue/babel-helper-vue-jsx-merge-props`添加到依赖中：

```json
{
  "dependencies": {
    "@vue/babel-helper-vue-jsx-merge-props": "^1.0.0"
  }
}
```

## Postcss

通过根目录下的`postcss.config.js`文件可以对 Postcss 进行配置。

### 默认配置

`vant-cli`中默认的 Postcss 配置如下：

```js
module.exports = {
  plugins: {
    autoprefixer: {},
  },
};
```

## browserslist

推荐在`package.json`文件里添加 browserslist 字段，这个值会被`@babel/preset-env`和`autoprefixer`用来确定目标浏览器的版本，保证编译后代码的兼容性。

在移动端浏览器中使用，可以添加如下配置：

```json
{
  "browserslist": ["Android >= 4.0", "iOS >= 8"]
}
```
