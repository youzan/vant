# Vuepress 主题

[Vuepress](https://vuepress.vuejs.org/) vant 文档网站主题。

### Install

#### NPM

```shell
npm i @vant/vuepress-theme-doc -S
```

#### YARN

```shell
yarn add @vant/vuepress-theme-doc
```

### 使用指南

#### 配置
在 `.vuepress/config.js` 中作如下配置：
```js
module.exports = {
  theme: '@vant/vuepress-theme-doc',
  themeConfig: {
    ... // 这里的配置内容参考 https://github.com/youzan/vant/blob/dev/vant.config.js
  }
}
```

如果单个语言版本可以直接使用 `site.locales` 下的结构作为 `site` 属性的结构。

#### 卡片
所有 `h3` 下面的内容会用 `Card` 组件包裹。如果要覆盖主题中该组件的实现，可以在 `.vuepress/enhanceApp.js` 中注册自己的全局 `Card` 组件。

```js
import Card from './components/Card';

export default ({ Vue }) => {
  Vue.component(Card.name, Card)
}
```