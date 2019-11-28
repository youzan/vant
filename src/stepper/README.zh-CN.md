# Stepper 步进器

### 介绍

步进器由增加按钮、减少按钮和输入框组成，用于在一定范围内输入、调整数字

### 引入

``` javascript
import Vue from 'vue';
import { Stepper } from 'vant';

Vue.use(Stepper);
```

## 代码演示

### 基础用法

通过`v-model`绑定输入值，可以通过`change`事件监听到输入值的变化

```html
<van-stepper v-model="value" />
```

```javascript
export default {
  data() {
    return {
      value: 1
    }
  }
}
```

### 步长设置

通过`step`属性设置每次点击增加或减少按钮时变化的值，默认为`1`

```html
<van-stepper v-model="value" step="2" />
```

### 限制输入范围

通过`min`和`max`属性限制输入值的范围

```html
<van-stepper v-model="value" min="5" max="8" />
```

### 限制输入整数

设置`integer`属性后，输入框将限制只能输入整数

```html
<van-stepper v-model="value" integer />
```

### 禁用状态

通过设置`disabled`属性来禁用步进器，禁用状态下无法点击按钮或修改输入框

```html
<van-stepper v-model="value" disabled />
```

### 固定小数位数

通过设置`decimal-length`属性可以保留固定的小数位数

```html
<van-stepper v-model="value" step="0.2" :decimal-length="1" />
```

### 自定义大小

通过`input-width`属性设置输入框宽度，通过`button-size`属性设置按钮大小和输入框高度

```html
<van-stepper v-model="value" input-width="40px" button-size="32px" />
```

### 异步变更

如果需要异步地修改输入框的值，可以设置`async-change`属性，并在`change`事件中手动修改`value`

```html
<van-stepper
  :value="value"
  async-change
  @change="onChange"
/>
```

```javascript
export default {
  data() {
    return {
      value: 1
    }
  },

  methods: {
    onChange(value) {
      Toast.loading({ forbidClick: true });

      setTimeout(() => {
        Toast.clear();

        // 注意此时修改 value 后会再次触发 change 事件
        this.value = value;
      }, 500);
    }
  }
}
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| v-model | 当前输入值 | *string \| number* | min | - |
| min | 最小值 | *string \| number* | `1` | - |
| max | 最大值 | *string \| number* | - | - |
| step | 步长，每次点击时改变的值 | *string \| number* | `1` | - |
| name | 标识符，可以在`change`事件回调参数中获取 | *string \| number* | - | 2.2.11 |
| integer | 是否只允许输入整数 | *boolean* | `false` | - |
| disabled | 是否禁用步进器 | *boolean* | `false` | - |
| disable-input | 是否禁用输入框 | *boolean* | `false` | - |
| async-change | 是否开启异步变更，开启后需要手动控制输入值 | *boolean* | `false` | - |
| input-width | 输入框宽度，默认单位为`px` | *string \| number* | `32px` | - |
| button-size | 按钮大小以及输入框高度，默认单位为`px` | *string \| number* | `28px` | 2.0.5 |
| show-plus | 是否显示增加按钮 | *boolean* | `true` | 2.1.2 |
| show-minus | 是否显示减少按钮 | *boolean* | `true` | 2.1.2 |
| decimal-length | 固定显示的小数位数 | *number* | - | 2.2.1 |

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| change | 当绑定值变化时触发的事件 | value: 当前组件的值, detail: 额外信息，包含 name 的字段 |
| overlimit | 点击不可用的按钮时触发 | - |
| plus | 点击增加按钮时触发 | - |
| minus | 点击减少按钮时触发 | - |
| focus | 输入框聚焦时触发 | event: Event |
| blur | 输入框失焦时触发 | event: Event |
