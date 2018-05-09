## Stepper 步进器

### 使用指南
``` javascript
import { Stepper } from 'vant';

Vue.use(Stepper);
```

### 代码演示

#### 基础用法

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

#### 禁用状态
通过设置`disabled`属性来禁用 stepper

```html
<van-stepper v-model="value" disabled />
```

#### 高级用法

默认是每次加减为1，可以对组件设置`step`、`min`、`max`、`default-value`属性

```html
<van-stepper
  v-model="value"
  integer
  :min="5"
  :max="40"
  :step="2"
  :default-value="9"
/>
```

### API

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| min | 最小值 | `String | Number` | `1` |
| max | 最大值 | `String | Number` | - |
| default-value | 默认值 | `String | Number` | `1` |
| step | 步数 | `String | Number` | `1` |
| integer | 是否只允许输入整数 | `Boolean` | `false` |
| disabled | 是否禁用 | `Boolean` | `false` |
| disable-input | 是否禁用input框 | `Boolean` | `false` |

### Event

| 事件名称 | 说明 | 回调参数 |
|-----------|-----------|-----------|
| change | 当绑定值变化时触发的事件 | 当前组件的值 |
| overlimit | 点击不可用的按钮时触发 | - |
| plus | 点击增加按钮时触发 | - |
| minus | 点击减少按钮时触发 | - |
