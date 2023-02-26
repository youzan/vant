# Badge 徽标

### 介绍

在右上角展示徽标数字或小红点。

### 引入

通过以下方式来全局注册组件，更多注册方式请参考[组件注册](#/zh-CN/advanced-usage#zu-jian-zhu-ce)。

```js
import { createApp } from 'vue';
import { Badge } from 'vant';

const app = createApp();
app.use(Badge);
```

## 代码演示

### 基础用法

设置 `content` 属性后，Badge 会在子元素的右上角显示对应的徽标，也可以通过 `dot` 来显示小红点。

```html
<van-badge :content="5">
  <div class="child" />
</van-badge>
<van-badge :content="10">
  <div class="child" />
</van-badge>
<van-badge content="Hot">
  <div class="child" />
</van-badge>
<van-badge dot>
  <div class="child" />
</van-badge>

<style>
  .child {
    width: 40px;
    height: 40px;
    background: #f2f3f5;
    border-radius: 4px;
  }
</style>
```

### 最大值

设置 `max` 属性后，当 `content` 的数值超过最大值时，会自动显示为 `{max}+`。

```html
<van-badge :content="20" max="9">
  <div class="child" />
</van-badge>
<van-badge :content="50" max="20">
  <div class="child" />
</van-badge>
<van-badge :content="200" max="99">
  <div class="child" />
</van-badge>
```

### 自定义颜色

通过 `color` 属性来设置徽标的颜色。

```html
<van-badge :content="5" color="#1989fa">
  <div class="child" />
</van-badge>
<van-badge :content="10" color="#1989fa">
  <div class="child" />
</van-badge>
<van-badge dot color="#1989fa">
  <div class="child" />
</van-badge>
```

### 自定义徽标内容

通过 `content` 插槽可以自定义徽标的内容，比如插入一个图标。

```html
<van-badge>
  <div class="child" />
  <template #content>
    <van-icon name="success" class="badge-icon" />
  </template>
</van-badge>
<van-badge>
  <div class="child" />
  <template #content>
    <van-icon name="cross" class="badge-icon" />
  </template>
</van-badge>
<van-badge>
  <div class="child" />
  <template #content>
    <van-icon name="down" class="badge-icon" />
  </template>
</van-badge>
```

```css
.badge-icon {
  display: block;
  font-size: 10px;
  line-height: 16px;
}
```

### 自定义徽标位置

通过 `position` 属性来设置徽标的位置。

```html
<van-badge :content="10" position="top-left">
  <div class="child" />
</van-badge>
<van-badge :content="10" position="bottom-left">
  <div class="child" />
</van-badge>
<van-badge :content="10" position="bottom-right">
  <div class="child" />
</van-badge>
```

### 独立展示

当 Badge 没有子元素时，会作为一个独立的元素进行展示。

```html
<van-badge :content="20" />

<van-badge :content="200" max="99" />
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| content | 徽标内容 | _number \| string_ | - |
| color | 徽标背景颜色 | _string_ | `#ee0a24` |
| dot | 是否展示为小红点 | _boolean_ | `false` |
| max | 最大值，超过最大值会显示 `{max}+`，仅当 content 为数字时有效 | _number \| string_ | - |
| offset | 设置徽标的偏移量，数组的两项分别对应水平向右和垂直向下方向的偏移量，默认单位为 `px` | _[number \| string, number \| string]_ | - |
| show-zero | 当 content 为数字 0 或字符串 '0' 时，是否展示徽标 | _boolean_ | `true` |
| position | 徽标位置，可选值为 `top-left` `bottom-left` `bottom-right` | _string_ | `top-right` |

### Slots

| 名称    | 说明             |
| ------- | ---------------- |
| default | 徽标包裹的子元素 |
| content | 自定义徽标内容   |

### 类型定义

组件导出以下类型定义：

```ts
import type { BadgeProps, BadgePosition } from 'vant';
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
| --van-badge-size | _16px_ | - |
| --van-badge-color | _var(--van-white)_ | - |
| --van-badge-padding | _0 3px_ | - |
| --van-badge-font-size | _var(--van-font-size-sm)_ | - |
| --van-badge-font-weight | _var(--van-font-bold)_ | - |
| --van-badge-border-width | _var(--van-border-width)_ | - |
| --van-badge-background | _var(--van-danger-color)_ | - |
| --van-badge-dot-color | _var(--van-danger-color)_ | - |
| --van-badge-dot-size | _8px_ | - |
| --van-badge-font | _-apple-system-font, Helvetica Neue, Arial, sans-serif_ | - |
