# Circle 环形进度条

### 介绍

圆环形的进度条组件，支持进度渐变动画。

### 引入

通过以下方式来全局注册组件，更多注册方式请参考[组件注册](#/zh-CN/advanced-usage#zu-jian-zhu-ce)。

```js
import { createApp } from 'vue';
import { Circle } from 'vant';

const app = createApp();
app.use(Circle);
```

## 代码演示

### 基础用法

`rate` 属性表示进度条的目标进度，`v-model:current-rate` 表示动画过程中的实时进度。当 `rate` 发生变化时，`v-model:current-rate` 会以 `speed` 的速度变化，直至达到 `rate` 设定的值。

```html
<van-circle
  v-model:current-rate="currentRate"
  :rate="30"
  :speed="100"
  :text="text"
/>
```

```js
import { ref, computed } from 'vue';

export default {
  setup() {
    const currentRate = ref(0);
    const text = computed(() => currentRate.value.toFixed(0) + '%');

    return {
      text,
      currentRate,
    };
  },
};
```

### 宽度定制

通过 `stroke-width` 属性来控制进度条宽度，`stroke-width` 指的是 SVG 中 `path` 的宽度，默认值为 `40`。

```html
<van-circle
  v-model:current-rate="currentRate"
  :rate="rate"
  :stroke-width="60"
  text="宽度定制"
/>
```

`stroke-width` 的单位不是 `px`，如果你想知道 `stroke-width` 与 `px` 的换算关系，可以通过如下公式计算：

```js
// SVG 的 viewBox 大小
const viewBox = 1000 + strokeWidth;

// Circle 组件的宽度，默认为 100px
const circleWidth = 100;

// 最终渲染出来的进度条宽度（px）
const pxWidth = (strokeWidth * circleWidth) / viewBox;
```

### 颜色定制

通过 `color` 属性来控制进度条颜色，`layer-color` 属性来控制轨道颜色。

```html
<van-circle
  v-model:current-rate="currentRate"
  :rate="rate"
  layer-color="#ebedf0"
  text="颜色定制"
/>
```

### 渐变色

`color` 属性支持传入对象格式来定义渐变色。

```html
<van-circle
  v-model:current-rate="currentRate"
  :rate="rate"
  :color="gradientColor"
  text="渐变色"
/>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const currentRate = ref(0);
    const gradientColor = {
      '0%': '#3fecff',
      '100%': '#6149f6',
    };

    return {
      currentRate,
      gradientColor,
    };
  },
};
```

### 逆时针方向

将 `clockwise` 设置为 `false`，进度会从逆时针方向开始。

```html
<van-circle
  v-model:current-rate="currentRate"
  :rate="rate"
  :clockwise="false"
  text="逆时针方向"
/>
```

### 大小定制

通过 `size` 属性设置圆环直径。

```html
<van-circle
  v-model:current-rate="currentRate"
  :rate="rate"
  size="120px"
  text="大小定制"
/>
```

### 起始位置

进度条默认从顶部开始，可以通过 `start-position` 属性设置起始位置。

```html
<van-circle
  v-model:current-rate="currentRate"
  :rate="rate"
  text="左侧"
  start-position="left"
/>
<van-circle
  v-model:current-rate="currentRate"
  :rate="rate"
  text="右侧"
  start-position="right"
/>
<van-circle
  v-model:current-rate="currentRate"
  :rate="rate"
  text="底部"
  start-position="bottom"
/>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model:current-rate | 当前进度 | _number_ | - |
| rate | 目标进度 | _number \| string_ | `100` |
| size | 圆环直径，默认单位为 `px` | _number \| string_ | `100px` |
| color | 进度条颜色，传入对象格式可以定义渐变色 | _string \| object_ | `#1989fa` |
| layer-color | 轨道颜色 | _string_ | `white` |
| fill | 填充颜色 | _string_ | `none` |
| speed | 动画速度（单位为 rate/s） | _number \| string_ | `0` |
| text | 文字 | _string_ | - |
| stroke-width | 进度条宽度 | _number \| string_ | `40` |
| stroke-linecap | 进度条端点的形状，可选值为 `square` `butt` | _string_ | `round` |
| clockwise | 是否顺时针增加 | _boolean_ | `true` |
| start-position | 进度起始位置，可选值为 `left`、`right`、`bottom` | _CircleStartPosition_ | `top` |

### Slots

| 名称    | 说明           |
| ------- | -------------- |
| default | 自定义文字内容 |

### 类型定义

组件导出以下类型定义：

```ts
import type { CircleProps, CircleStartPosition } from 'vant';
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称                          | 默认值                      | 描述 |
| ----------------------------- | --------------------------- | ---- |
| --van-circle-size             | _100px_                     | -    |
| --van-circle-color            | _var(--van-primary-color)_  | -    |
| --van-circle-layer-color      | _var(--van-white)_          | -    |
| --van-circle-text-color       | _var(--van-text-color)_     | -    |
| --van-circle-text-font-weight | _var(--van-font-bold)_      | -    |
| --van-circle-text-font-size   | _var(--van-font-size-md)_   | -    |
| --van-circle-text-line-height | _var(--van-line-height-md)_ | -    |
