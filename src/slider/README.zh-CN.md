# Slider 滑块

### 引入

```js
import Vue from 'vue';
import { Slider } from 'vant';

Vue.use(Slider);
```

## 代码演示

### 基本用法

```html
<van-slider v-model="value" @change="onChange" />
```

```js
import { Toast } from 'vant';

export default {
  data() {
    return {
      value: 50
    };
  },
  methods: {
    onChange(value) {
      Toast('当前值：' + value);
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
  active-color="#ee0a24"
/>
```

### 自定义按钮

```html
<van-slider v-model="value" active-color="#ee0a24">
  <template #button>
    <div class="custom-button">
      {{ value }}
    </div>
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

Slider 垂直展示时，高度为 100% 父元素高度

```html
<div :style="{ height: '100px' }">
  <van-slider v-model="value" vertical />
</div>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| value | 当前进度百分比 | *number* | `0` |
| max | 最大值 | *number \| string* | `100` |
| min | 最小值 | *number \| string* | `0` |
| step | 步长 | *number \| string* | `1` |
| bar-height | 进度条高度，默认单位为`px` | *number \| string* | `2px` |
| button-size `v2.4.5` | 滑块按钮大小，默认单位为`px` | *number \| string* | `24px` |
| active-color | 进度条激活态颜色 | *string* | `#1989fa` |
| inactive-color | 进度条非激活态颜色 | *string* | `#e5e5e5` |
| disabled | 是否禁用滑块 | *boolean* | `false` |
| vertical | 是否垂直展示 | *boolean* | `false` |

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| input | 进度变化时实时触发 | value: 当前进度 |
| change | 进度变化且结束拖动后触发 | value: 当前进度 |
| drag-start | 开始拖动时触发 | - |
| drag-end | 结束拖动时触发 | - |

### Slots

| 名称 | 说明 |
|------|------|
| button | 自定义滑动按钮 |
