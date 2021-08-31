# PasswordInput

### Intro

The passwordinput component is usually used with [NumberKeyboard](#/en-US/number-keyboard) Component.

### Install

Register component globally via `app.use`, refer to [Component Registration](#/en-US/advanced-usage#zu-jian-zhu-ce) for more registration ways.

```js
import { createApp } from 'vue';
import { PasswordInput, NumberKeyboard } from 'vant';

const app = createApp();
app.use(PasswordInput);
app.use(NumberKeyboard);
```

## Usage

### Basic Usage

```html
<van-password-input
  :value="value"
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

### Custom Length

```html
<van-password-input
  :value="value"
  :gutter="15"
  :focused="showKeyboard"
  @focus="showKeyboard = true"
/>
```

### Add Gutter

```html
<van-password-input
  :value="value"
  :gutter="10"
  :focused="showKeyboard"
  @focus="showKeyboard = true"
/>
```

### Without Mask

```html
<van-password-input
  :value="value"
  :mask="false"
  :focused="showKeyboard"
  @focus="showKeyboard = true"
/>
```

### Hint Error

Use `info` to set info message, use `error-info` prop to set error message.

```html
<van-password-input
  :value="value"
  info="Some tips"
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
        errorInfo.value = 'Password Mistake';
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

| Attribute  | Description                    | Type               | Default |
| ---------- | ------------------------------ | ------------------ | ------- |
| value      | Password value                 | _string_           | `''`    |
| info       | Bottom info                    | _string_           | -       |
| error-info | Bottom error info              | _string_           | -       |
| length     | Maxlength of password          | _number \| string_ | `6`     |
| gutter     | Gutter of input                | _number \| string_ | `0`     |
| mask       | Whether to mask value          | _boolean_          | `true`  |
| focused    | Whether to show focused cursor | _boolean_          | `false` |

### Events

| Event | Description                   | Arguments |
| ----- | ----------------------------- | --------- |
| focus | Emitted when input is focused | -         |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/config-provider).

| Name | Default Value | Description |
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
