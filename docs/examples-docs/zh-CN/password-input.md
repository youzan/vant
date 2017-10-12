<script>
export default {
  data() {
    return {
      value: '',
      showKeyboard: true
    }
  },

  methods: {
    onInput(key) {
      this.value = (this.value + key).slice(0, 6);
    },
    onDelete() {
      this.value = this.value.slice(0, this.value.length - 1);
    }
  }
}
</script>

## PasswordInput 密码输入框
密码输入框组件通常与 [数字键盘](#/zh-CN/component/number-keyboard) 组件配合使用

### 使用指南
``` javascript
import { PasswordInput, NumberKeyBoard } from 'vant';

Vue.component(PasswordInput.name, PasswordInput);
Vue.component(NumberKeyBoard.name, NumberKeyBoard);
```

### 代码演示

#### 基础用法

:::demo 基础用法
```html
<!-- 密码输入框 -->
<van-password-input
  :value="value"
  info="密码为 6 位数字"
  @focus="showKeyboard = true"
></van-password-input>

<!-- 数字键盘 -->
<van-number-keyboard
  :show="showKeyboard"
  @input="onInput"
  @delete="onDelete"
  @blur="showKeyboard = false"
></van-number-keyboard>
```

```javascript
export default {
  data() {
    return {
      value: '',
      showKeyboard: true
    }
  },

  methods: {
    onInput(key) {
      this.value = (this.value + key).slice(0, 6);
    },
    onDelete() {
      this.value = this.value.slice(0, this.value.length - 1);
    }
  }
}
```
:::

### API

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| value | 密码值 | `String`  | `''` | - |
| length | 密码最大长度 | `Number` | `6` | - |
| info | 输入框下方提示 | `String` | - | - |
| errorInfo | 输入框下方错误提示 | `String` | - | - |

### Event

| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|
| focus | 输入框聚焦时触发 | - |
