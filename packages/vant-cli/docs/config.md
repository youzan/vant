# 配置

## vant.config.js

`vant.config.js`中包含了`vant-cli`的打包配置和文档站点配置，请创建此文件并置于项目根目录下。下面是一份基本配置的示例：

```js
module.exports = {
  // 组件库名称
  name: 'demo-ui',
  // 构建配置
  build: {
    site: {
      publicPath: '/demo-ui/'
    }
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
            title: '介绍'
          }
        ]
      },
      {
        title: '基础组件',
        items: [
          {
            path: 'my-button',
            title: 'MyButton 按钮'
          }
        ]
      }
    ]
  }
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
      preprocessor: 'sass'
    }
  }
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
      publicPath: '/demo-ui/'
    }
  }
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
            title: '介绍'
          }
        ]
      }
    ]
  }
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
        link: 'https://youzan.github.io/vant/1.x/'
      }
    ]
  }
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
      seed: 'xxxxx'
    }
  }
};
```
