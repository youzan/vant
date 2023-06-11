# TextEllipsis 文本省略

### 介绍

对长文本进行省略，支持展开/收起。请升级 `vant` 到 >= 4.1.0 版本来使用该组件。

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
    const text = '慢慢来，不要急，生活给你出了难题，可也终有一天会给出答案。';
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
      '似水流年是一个人所有的一切，只有这个东西，才真正归你所有。其余的一切，都是片刻的欢娱和不幸，转眼间就已跑到那似水流年里去了。';
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
      '那一天我二十一岁，在我一生的黄金时代。我有好多奢望。我想爱，想吃，还想在一瞬间变成天上半明半暗的云。后来我才知道，生活就是个缓慢受锤的过程，人一天天老下去，奢望也一天天消失，最后变得像挨了锤的牛一样。可是我过二十一岁生日时没有预见到这一点。我觉得自己会永远生猛下去，什么也锤不了我。';
    return { text };
  },
};
```

## API

### Props

| 参数          | 说明             | 类型               | 默认值  |
| ------------- | ---------------- | ------------------ | ------- |
| rows          | 展示的行数       | _number \| string_ | `1`     |
| content       | 需要展示的文本   | _string_           | -       |
| expand-text   | 展开操作的文案   | _string_           | -       |
| collapse-text | 收起操作的文案   | _string_           | -       |
| dots `v4.2.0` | 省略号的文本内容 | _string_           | `'...'` |

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
