# Slider 滑块

### 介绍

滑动输入条，用于在给定的范围内选择一个值。

### 引入

```js
import Vue from 'vue';
import { Slider } from 'vant';

Vue.use(Slider);
```

## 代码演示

### 基础用法

```html
<van-slider v-model="value" @change="onChange" />
```

```js
import { Toast } from 'vant';

export default {
  data() {
    return {
      value: 50,
    };
  },
  methods: {
    onChange(value) {
      Toast('当前值：' + value);
    },
  },
};
```

### 双滑块

添加 `range` 属性就可以开启双滑块模式，确保 `value` 的值是一个数组。

```html
<van-slider v-model="value" range @change="onChange" />
```

```js
import { Toast } from 'vant';

export default {
  data() {
    return {
      // 双滑块模式时，值必须是数组
      value: [10, 50],
    };
  },
  methods: {
    onChange(value) {
      Toast('当前值：' + value);
    },
  },
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
<van-slider v-model="value" bar-height="4px" active-color="#ee0a24" />
```

### 自定义按钮

```html
<van-slider v-model="value" active-color="#ee0a24">
  <template #button>
    <div class="custom-button">{{ value }}</div>
  </template>
</van-slider>

<style>
  .custom-button {
    width: 26px;
    color: #fff;
    font-size: 10px;
    line-height: 18px;
    text-align: center;
    background-color: #ee0a24;
    border-radius: 100px;
  }
</style>
```

### 垂直方向

设置 `vertical` 属性后，滑块会垂直展示，且高度为 100% 父元素高度。

```html
<div :style="{ height: '150px' }">
  <van-slider v-model="value" vertical @change="onChange" />
  <van-slider
    v-model="value2"
    range
    vertical
    style="margin-left: 100px;"
    @change="onChange"
  />
</div>
```

```js
import { Toast } from 'vant';

export default {
  data() {
    return {
      value: 50,
      value2: [10, 50],
    };
  },
  methods: {
    onChange(value) {
      Toast('当前值：' + value);
    },
  },
};
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 当前进度百分比 | _number \| array_ | `0` |
| max | 最大值 | _number \| string_ | `100` |
| min | 最小值 | _number \| string_ | `0` |
| step | 步长 | _number \| string_ | `1` |
| bar-height | 进度条高度，默认单位为`px` | _number \| string_ | `2px` |
| button-size | 滑块按钮大小，默认单位为`px` | _number \| string_ | `24px` |
| active-color | 进度条激活态颜色 | _string_ | `#1989fa` |
| inactive-color | 进度条非激活态颜色 | _string_ | `#e5e5e5` |
| range `v2.10.7` | 是否开启双滑块模式 | _boolean_ | `false` |
| disabled | 是否禁用滑块 | _boolean_ | `false` |
| vertical | 是否垂直展示 | _boolean_ | `false` |

### Events

| 事件名     | 说明                     | 回调参数        |
| ---------- | ------------------------ | --------------- |
| input      | 进度变化时实时触发       | value: 当前进度 |
| change     | 进度变化且结束拖动后触发 | value: 当前进度 |
| drag-start | 开始拖动时触发           | -               |
| drag-end   | 结束拖动时触发           | -               |

### Slots

| 名称 | 说明 | 参数 |
| --- | --- | --- |
| button | 自定义滑动按钮 | - |
| left-button `v2.12.38` | 自定义左侧滑块按钮（双滑块模式下） | { value: number } |
| right-button `v2.12.38` | 自定义右侧滑块按钮（双滑块模式下） | { value: number } |

### 样式变量

组件提供了下列 Less 变量，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/theme)。

| 名称                              | 默认值                         | 描述 |
| --------------------------------- | ------------------------------ | ---- |
| @slider-active-background-color   | `@blue`                        | -    |
| @slider-inactive-background-color | `@gray-3`                      | -    |
| @slider-disabled-opacity          | `@disabled-opacity`            | -    |
| @slider-bar-height                | `2px`                          | -    |
| @slider-button-width              | `24px`                         | -    |
| @slider-button-height             | `24px`                         | -    |
| @slider-button-border-radius      | `50%`                          | -    |
| @slider-button-background-color   | `@white`                       | -    |
| @slider-button-box-shadow         | `0 1px 2px rgba(0, 0, 0, 0.5)` | -    |
