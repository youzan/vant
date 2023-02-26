# TextEllipsis 文本省略

### 介绍

对长文本进行省略，支持展开/收起。

### 引入

通过以下方式来全局注册组件，更多注册方式请参考[组件注册](#/zh-CN/advanced-usage#zu-jian-zhu-ce)。

```js
import { createApp } from 'vue';
import { TextEllipsis } from 'vant';

const app = createApp();
app.use(TextEllipsis);
```

## 代码演示

### 基础用法

默认展示 `1` 行，超过 `1` 行显示省略号。

```html
<van-text-ellipsis :content="text" />
```

```js
export default {
  setup() {
    const text =
      'Vant 是一个轻量、可定制的移动端组件库，于 2017 年开源。目前 Vant 官方提供了 Vue 2 版本、Vue 3 版本和微信小程序版本，并由社区团队维护 React 版本和支付宝小程序版本。';
    return { text };
  },
};
```

### 展开/收起

超过行数支持展开/收起。

```html
<van-text-ellipsis :content="text" expand-text="展开" collapse-text="收起" />
```

```js
export default {
  setup() {
    const text =
      'Vant 是一个轻量、可定制的移动端组件库，于 2017 年开源。目前 Vant 官方提供了 Vue 2 版本、Vue 3 版本和微信小程序版本，并由社区团队维护 React 版本和支付宝小程序版本。';
    return { text };
  },
};
```

### 自定义展示行数

通过设置 `rows` 限制展示行数。

```html
<van-text-ellipsis
  rows="3"
  :content="text"
  expand-text="展开"
  collapse-text="收起"
/>
```

```js
export default {
  setup() {
    const text =
      'Vant 是一个轻量、可定制的移动端组件库，于 2017 年开源。目前 Vant 官方提供了 Vue 2 版本、Vue 3 版本和微信小程序版本，并由社区团队维护 React 版本和支付宝小程序版本。';
    return { text };
  },
};
```

## API

### Props

| 参数          | 说明           | 类型               | 默认值 |
| ------------- | -------------- | ------------------ | ------ |
| rows          | 展示的行数     | _number \| string_ | `1`    |
| content       | 需要展示的文本 | _string_           | -      |
| expand-text   | 展开操作的文案 | _string_           | -      |
| collapse-text | 收起操作的文案 | _string_           | -      |

### Events

| 事件         | 说明                | 回调参数            |
| ------------ | ------------------- | ------------------- |
| click-action | 点击展开/收起时触发 | _event: MouseEvent_ |

### 类型定义

组件导出以下类型定义：

```ts
import type { TextEllipsisProps, TextEllipsisThemeVars } from 'vant';
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称                             | 默认值            | 描述           |
| -------------------------------- | ----------------- | -------------- |
| --van-text-ellipsis-action-color | _var(--van-blue)_ | 操作按钮的颜色 |
| --van-text-ellipsis-line-height  | _1.6_             | 文本的行高     |
