# Badge 徽标

### 介绍

在右上角展示徽标数字或小红点。

### 引入

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
<van-badge dot>
  <div class="child" />
</van-badge>

<style>
  .child {
    width: 36px;
    height: 36px;
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
<van-badge dot color="#1989fa">
  <div class="child" />
</van-badge>
```

### 独立展示

当 Badge 没有子元素时，会作为一个独立的元素进行展示。

```html
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

### Slots

| 名称    | 说明             |
| ------- | ---------------- |
| default | 徽标包裹的子元素 |
| content | 自定义徽标内容   |
