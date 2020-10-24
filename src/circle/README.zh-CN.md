# Circle 环形进度条

### 介绍

圆环形的进度条组件，支持进度渐变动画。

### 引入

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
export default {
  data() {
    return {
      currentRate: 0,
    };
  },
  computed: {
    text() {
      return this.currentRate.toFixed(0) + '%';
    },
  },
};
```

### 宽度定制

通过 `stroke-width` 属性来控制进度条宽度。

```html
<van-circle
  v-model:current-rate="currentRate"
  :rate="rate"
  :stroke-width="60"
  text="宽度定制"
/>
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
export default {
  data() {
    return {
      currentRate: 0,
      gradientColor: {
        '0%': '#3fecff',
        '100%': '#6149f6',
      },
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
| stroke-linecap | 进度条端点的形状，可选值为 `sqaure` `butt` | _string_ | `round` |
| clockwise | 是否顺时针增加 | _boolean_ | `true` |

### Slots

| 名称    | 说明           |
| ------- | -------------- |
| default | 自定义文字内容 |
