# Slider 滑块

### 引入

``` javascript
import { Slider } from 'vant';

Vue.use(Slider);
```

## 代码演示

### 基本用法

```html
<van-slider v-model="value" @change="onChange" />
```

```js
export default {
  data() {
    return {
      value: 50
    };
  },

  methods: {
    onChange(value) {
      this.$toast('当前值：' + value);
    }
  }
};
```

### 指定选择范围

```html
<van-slider v-model="value" :min="-50" :max="50" />
```

### 禁用

```html
<van-slider v-model="value" disabled />
```

### 指定步长

```html
<van-slider v-model="value" :step="10" />
```

### 自定义样式

```html
<van-slider
  v-model="value"
  bar-height="4px"
  active-color="#f44"
/>
```

### 自定义按钮

```html
<van-slider
  v-model="value"
  active-color="#f44"
>
  <div
    slot="button"
    class="custom-button"
  >
    {{ value }}
  </div>
</van-slider>
```

### 垂直方向

Slider 垂直展示时，高度为 100% 父元素高度

```html
<div :style="{ height: '100px' }">
  <van-slider v-model="value" vertical />
</div>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| value | 当前进度百分比 | `number` | `0` | - |
| disabled | 是否禁用滑块 | `boolean` | `false` | - |
| max | 最大值 | `number` | `100` | - |
| min | 最小值 | `number` | `0` | - |
| step | 步长 | `number` | `1` | - |
| bar-height | 进度条高度，默认单位为`px` | `number | string` | `2px` | - |
| active-color | 进度条激活态颜色 | `string` | `#1989fa` | 1.5.1 |
| inactive-color | 进度条默认颜色 | `string` | `#e5e5e5` | 1.5.1 |
| vertical | 是否垂直展示 | `boolean` | `false` | 1.6.13 |

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| change | 进度值改变后触发 | value: 当前进度 |
| drag-start | 开始拖动时触发 | - |
| drag-end | 结束拖动时触发 | - |

### Slots

| 名称 | 说明 |
|------|------|
| button | 自定义滑动按钮 |
