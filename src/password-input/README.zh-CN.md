# PasswordInput 密码输入框

### 介绍

带网格的输入框组件，可以用于输入密码、短信验证码等场景，通常与[数字键盘](#/zh-CN/number-keyboard)组件配合使用。

### 引入

通过以下方式来全局注册组件，更多注册方式请参考[组件注册](#/zh-CN/advanced-usage#zu-jian-zhu-ce)。

```js
import { createApp } from 'vue';
import { PasswordInput, NumberKeyboard } from 'vant';

const app = createApp();
app.use(PasswordInput);
app.use(NumberKeyboard);
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
import { ref } from 'vue';

export default {
  setup() {
    const value = ref('123');
    const showKeyboard = ref(true);

    return {
      value,
      showKeyboard,
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
import { ref, watch } from 'vue';

export default {
  setup() {
    const value = ref('123');
    const errorInfo = ref('');
    const showKeyboard = ref(true);

    watch(value, (newVal) => {
      if (newVal.length === 6 && newVal !== '123456') {
        errorInfo.value = '密码错误';
      } else {
        errorInfo.value = '';
      }
    });

    return {
      value,
      errorInfo,
      showKeyboard,
    };
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

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
| --van-password-input-height | _50px_ | - |
| --van-password-input-margin | _0 var(--van-padding-md)_ | - |
| --van-password-input-font-size | _20px_ | - |
| --van-password-input-border-radius | _6px_ | - |
| --van-password-input-background-color | _var(--van-white)_ | - |
| --van-password-input-info-color | _var(--van-gray-6)_ | - |
| --van-password-input-info-font-size | _var(--van-font-size-md)_ | - |
| --van-password-input-error-info-color | _var(--van-danger-color)_ | - |
| --van-password-input-dot-size | _10px_ | - |
| --van-password-input-dot-color | _var(--van-black)_ | - |
| --van-password-input-text-color | _var(--van-text-color)_ | - |
| --van-password-input-cursor-color | _var(--van-text-color)_ | - |
| --van-password-input-cursor-width | _1px_ | - |
| --van-password-input-cursor-height | _40%_ | - |
| --van-password-input-cursor-animation-duration | _1s_ | - |
