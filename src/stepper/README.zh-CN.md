# Stepper 步进器

### 引入

``` javascript
import { Stepper } from 'vant';

Vue.use(Stepper);
```

## 代码演示

### 基础用法

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

```html
<van-stepper v-model="value" step="2" />
```

### 限制输入范围

```html
<van-stepper v-model="value" min="5" max="8" />
```

### 限制输入整数

```html
<van-stepper v-model="value" integer />
```

### 禁用状态

通过设置`disabled`属性来禁用 stepper

```html
<van-stepper v-model="value" disabled />
```

### 异步变更

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
        Toast.claer();
        this.value = value;
      }, 500);
    }
  }
}
```

### 自定义大小

通过`input-width`属性设置输入框宽度，通过`button-size`属性设置按钮大小和输入框高度

```html
<van-stepper
  v-model="value"
  input-width="40px"
  button-size="32px"
/>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| v-model | 当前输入值 | `String | Number` | 最小值 | - |
| min | 最小值 | `String | Number` | `1` | - |
| max | 最大值 | `String | Number` | - | - |
| step | 步数 | `String | Number` | `1` | - |
| integer | 是否只允许输入整数 | `Boolean` | `false` | - |
| disabled | 是否禁用步进器 | `Boolean` | `false` | - |
| disable-input | 是否禁用输入框 | `Boolean` | `false` | - |
| async-change | 是否开启异步变更，开启后需要手动控制输入值 | `Boolean` | `false` | - |
| input-width | 输入框宽度，默认单位为`px` | `String | Number` | `32px` | 1.6.13 |
| button-size | 按钮大小，默认单位为`px`，输入框高度会和按钮大小保持一致 | `String | Number` | `28px` | 2.0.5 |

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| change | 当绑定值变化时触发的事件 | 当前组件的值 |
| overlimit | 点击不可用的按钮时触发 | - |
| plus | 点击增加按钮时触发 | - |
| minus | 点击减少按钮时触发 | - |
| focus | 输入框聚焦时触发 | - |
| blur | 输入框失焦时触发 | - |
