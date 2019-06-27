# PasswordInput 密码输入框

### 介绍

密码输入框组件通常与 [数字键盘](#/zh-CN/number-keyboard) 组件配合使用

### 引入
``` javascript
import { PasswordInput, NumberKeyboard } from 'vant';

Vue.use(PasswordInput).use(NumberKeyboard);
```

## 代码演示

### 基础用法

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

### 自定义长度

```html
<van-password-input
  :value="value"
  :length="4"
  :gutter="15"
  @focus="showKeyboard = true"
/>
```

### 明文展示

```html
<van-password-input
  :value="value"
  :mask="false"
  @focus="showKeyboard = true"
/>
```

### Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| value | 密码值 | `String` | `''` | - |
| length | 密码最大长度 | `Number` | `6` | - |
| mask | 是否隐藏密码内容 | `Boolean` | `true` | 1.6.6 |
| info | 输入框下方文字提示 | `String` | - | - |
| error-info | 输入框下方错误提示 | `String` | - | - |
| gutter | 输入框格子之间的间距，如 `20px` `2em`，默认单位为`px` | `Number | String` | `0` | 2.0.0 |

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| focus | 输入框聚焦时触发 | - |
