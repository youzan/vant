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

#### 异步变更

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
      if (this.changing) {
        return;
      }

      this.changing = true;
      setTimeout(() => {
        this.value = value;
        this.changing = false;
      }, 500);
    }
  }
}
```

#### 高级用法

可以对组件设置`step`、`min`、`max`属性

```html
<van-stepper
  v-model="value"
  integer
  :min="5"
  :max="40"
  :step="2"
/>
```

### API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| v-model | 当前输入值 | `String | Number` | 最小值 | - |
| min | 最小值 | `String | Number` | `1` | - |
| max | 最大值 | `String | Number` | - | - |
| step | 步数 | `String | Number` | `1` | - |
| integer | 是否只允许输入整数 | `Boolean` | `false` | 1.1.1 |
| disabled | 是否禁用步进器 | `Boolean` | `false` | - |
| disable-input | 是否禁用输入框 | `Boolean` | `false` | - |
| async-change | 是否开启异步变更，开启后需要手动控制输入值 | `Boolean` | `false` | - |
| input-width | 输入框宽度，须指定单位 | `String` | `30px` | 1.6.13 |

### Event

| 事件名称 | 说明 | 回调参数 |
|------|------|------|
| change | 当绑定值变化时触发的事件 | 当前组件的值 |
| overlimit | 点击不可用的按钮时触发 | - |
| plus | 点击增加按钮时触发 | - |
| minus | 点击减少按钮时触发 | - |
| focus | 输入框聚焦时触发 | - |
| blur | 输入框失焦时触发 | - |
