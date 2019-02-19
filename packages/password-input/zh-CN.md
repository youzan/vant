## PasswordInput 密码输入框
密码输入框组件通常与 [数字键盘](#/zh-CN/number-keyboard) 组件配合使用

### 使用指南
``` javascript
import { PasswordInput, NumberKeyboard } from 'vant';

Vue.use(PasswordInput).use(NumberKeyboard);
```

### 代码演示

#### 基础用法

```html
<!-- 密码输入框 -->
<van-password-input
  :value="value"
  info="密码为 6 位数字"
  @focus="showKeyboard = true"
/>

<!-- 数字键盘 -->
<van-number-keyboard
  :show="showKeyboard"
  @input="onInput"
  @delete="onDelete"
  @blur="showKeyboard = false"
/>
```

```javascript
export default {
  data() {
    return {
      value: '123',
      showKeyboard: true
    };
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

#### 明文展示

```html
<!-- 密码输入框 -->
<van-password-input
  :value="value"
  :mask="false"
  @focus="showKeyboard = true"
/>
```

### API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| value | 密码值 | `String` | `''` | - |
| length | 密码最大长度 | `Number` | `6` | - |
| mask | 是否隐藏密码内容 | `Boolean` | `true` | 1.6.6 |
| info | 输入框下方文字提示 | `String` | - | - |
| error-info | 输入框下方错误提示 | `String` | - | - |

### Event

| 事件名 | 说明 | 参数 |
|------|------|------|
| focus | 输入框聚焦时触发 | - |
