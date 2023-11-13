# Highlight 高亮文本

### 介绍

高亮指定文本内容。请升级 `vant` 到 >= 4.8.0 版本来使用该组件。

### 引入

通过以下方式来全局注册组件，更多注册方式请参考[组件注册](#/zh-CN/advanced-usage#zu-jian-zhu-ce)。

```js
import { createApp } from 'vue';
import { Highlight } from 'vant';

const app = createApp();
app.use(Highlight);
```

## 代码演示

### 基础用法

你可以通过 `keywords` 指定需要高亮的关键字，通过 `source-string` 指定源文本。

```html
<van-highlight :keywords="keywords" :source-string="text" />
```

```ts
export default {
  setup() {
    const text = '慢慢来，不要急，生活给你出了难题，可也终有一天会给出答案。';
    const keywords = '难题';

    return {
      text,
      keywords,
    };
  },
};
```

### 多字符匹配

如果需要指定多个关键字，可以以数组的形式传入 `keywords`。

```html
<van-highlight :keywords="keywords" :source-string="text" />
```

```ts
export default {
  setup() {
    const text = '慢慢来，不要急，生活给你出了难题，可也终有一天会给出答案。';
    const keywords = ['难题', '终有一天', '答案'];

    return {
      text,
      keywords,
    };
  },
};
```

### 设置高亮标签类名

通过 `highlight-class` 可以设置高亮标签的类名，以便自定义样式。

```html
<van-highlight
  :keywords="keywords"
  :source-string="text"
  highlight-class="custom-class"
/>
```

```ts
export default {
  setup() {
    const text = '慢慢来，不要急，生活给你出了难题，可也终有一天会给出答案。';
    const keywords = '生活';

    return {
      text,
      keywords,
    };
  },
};
```

```css
.custom-class {
  color: red;
}
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| auto-escape | 是否自动转义 | _boolean_ | `true` |
| case-sensitive | 是否区分大小写 | _boolean_ | `false` |
| highlight-class | 高亮元素的类名 | _string_ | - |
| highlight-tag | 高亮元素对应的 HTML 标签名 | _string_ | `span` |
| keywords | 期望高亮的文本 | _string \| string[]_ | - |
| source-string | 源文本 | _string_ | - |
| tag | 根节点对应的 HTML 标签名 | _string_ | `div` |
| unhighlight-class | 非高亮元素的类名 | _string_ | - |
| unhighlight-tag | 非高亮元素对应的 HTML 标签名 | _string_ | `span` |

### 类型定义

组件导出以下类型定义：

```ts
import type { HighlightProps, HighlightThemeVars } from 'vant';
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称                      | 默认值                     | 描述         |
| ------------------------- | -------------------------- | ------------ |
| --van-highlight-tag-color | _var(--van-primary-color)_ | 高亮文本颜色 |
