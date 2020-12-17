# PasswordInput 密码输入框

### 介绍

带网格的输入框组件，可以用于输入密码、短信验证码等场景，通常与[数字键盘](#/zh-CN/number-keyboard)组件配合使用。

### 引入

```js
import Vue from 'vue';
import { PasswordInput, NumberKeyboard } from 'vant';

Vue.use(PasswordInput);
Vue.use(NumberKeyboard);
```

## 代码演示

### 基础用法

搭配数字键盘组件来实现密码输入功能。

```html
<!-- 密码输入框 -->
<van-password-input
  :value="value"
  :focused="showKeyboard"
  @focus="showKeyboard = true"
/>
<!-- 数字键盘 -->
<van-number-keyboard
  v-model="value"
  :show="showKeyboard"
  @blur="showKeyboard = false"
/>
```

```js
export default {
  data() {
    return {
      value: '123',
      showKeyboard: true,
    };
  },
};
```

### 自定义长度

通过 `length` 属性来设置密码长度。

```html
<van-password-input
  :value="value"
  :length="4"
  :focused="showKeyboard"
  @focus="showKeyboard = true"
/>
```

### 格子间距

通过 `gutter` 属性来设置格子之间的间距。

```html
<van-password-input
  :value="value"
  :gutter="10"
  :focused="showKeyboard"
  @focus="showKeyboard = true"
/>
```

### 明文展示

将 `mask` 设置为 `false` 可以明文展示输入的内容，适用于短信验证码等场景。

```html
<van-password-input
  :value="value"
  :mask="false"
  :focused="showKeyboard"
  @focus="showKeyboard = true"
/>
```

### 提示信息

通过 `info` 属性设置提示信息，通过 `error-info` 属性设置错误提示，例如当输入六位时提示密码错误。

```html
<van-password-input
  :value="value"
  info="密码为 6 位数字"
  :error-info="errorInfo"
  :focused="showKeyboard"
  @focus="showKeyboard = true"
/>
<van-number-keyboard
  v-model="value"
  :show="showKeyboard"
  @blur="showKeyboard = false"
/>
```

```js
export default {
  data() {
    return {
      value: '123',
      errorInfo: '',
      showKeyboard: true,
    };
  },
  watch: {
    value(value) {
      if (value.length === 6 && value !== '123456') {
        this.errorInfo = '密码错误';
      } else {
        this.errorInfo = '';
      }
    },
  },
};
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 密码值 | _string_ | `''` |
| info | 输入框下方文字提示 | _string_ | - |
| error-info | 输入框下方错误提示 | _string_ | - |
| length | 密码最大长度 | _number \| string_ | `6` |
| gutter | 输入框格子之间的间距，如 `20px` `2em`，默认单位为`px` | _number \| string_ | `0` |
| mask | 是否隐藏密码内容 | _boolean_ | `true` |
| focused | 是否已聚焦，聚焦时会显示光标 | _boolean_ | `false` |

### Events

| 事件名 | 说明             | 回调参数 |
| ------ | ---------------- | -------- |
| focus  | 输入框聚焦时触发 | -        |

### 样式变量

组件提供了下列 Less 变量，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/theme)。

| 名称                             | 默认值          | 描述 |
| -------------------------------- | --------------- | ---- |
| @password-input-height           | `50px`          | -    |
| @password-input-margin           | `0 @padding-md` | -    |
| @password-input-font-size        | `20px`          | -    |
| @password-input-border-radius    | `6px`           | -    |
| @password-input-background-color | `@white`        | -    |
| @password-input-info-color       | `@gray-6`       | -    |
| @password-input-info-font-size   | `@font-size-md` | -    |
| @password-input-error-info-color | `@red`          | -    |
| @password-input-dot-size         | `10px`          | -    |
| @password-input-dot-color        | `@black`        | -    |
