# PasswordInput

### Intro

The PasswordInput component is usually used with [NumberKeyboard](#/en-US/number-keyboard) Component.

### Install

```js
import Vue from 'vue';
import { PasswordInput, NumberKeyboard } from 'vant';

Vue.use(PasswordInput);
Vue.use(NumberKeyboard);
```

## Usage

### Basic Usage

```html
<!-- PasswordInput -->
<van-password-input
  :value="value"
  info="Some tips"
  :focused="showKeyboard"
  @focus="showKeyboard = true"
/>
<!-- NumberKeyboard -->
<van-number-keyboard
  :show="showKeyboard"
  @input="onInput"
  @delete="onDelete"
  @blur="showKeyboard = false"
/>
```

```js
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

### Custom length

```html
<van-password-input
  :value="value"
  :length="4"
  :gutter="15"
  :focused="showKeyboard"
  @focus="showKeyboard = true"
/>
```

### Without mask

```html
<van-password-input
  :value="value"
  :mask="false"
  :focused="showKeyboard"
  @focus="showKeyboard = true"
/>
```

### Hint Error

Use `error-info` prop to set error message. For example, a password error is prompted when entering 6 bits

```html
<!-- PasswordInput -->
<van-password-input
  :value="value"
  :error-info="errorInfo"
  :focused="showKeyboard"
  @focus="showKeyboard = true"
/>

<!-- NumberKeyboard -->
<van-number-keyboard
  :show="showKeyboard"
  @input="onInput"
  @delete="onDelete"
  @blur="showKeyboard = false"
/>
```

```js
export default {
  data() {
    return {
      value: '123',
      showKeyboard: true,
      errorInfo: ''
    };
  },
  methods: {
    onInput(key) {
      this.value = (this.value + key).slice(0, 6);
      if (this.value.length === 6) {
        this.errorInfo = 'Password Mistake';
      } else {
        this.errorInfo = '';
      }
    },
    onDelete() {
      this.value = this.value.slice(0, this.value.length - 1);
    }
  }
}
```
## API

### Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| value | Password value | *string* | `''` |
| info | Bottom info | *string* | - |
| error-info | Bottom error info | *string* | - |
| length | Maxlength of password | *number \| string* | `6` |
| gutter | Gutter of input | *number \| string* | `0` |
| mask | Whether to mask value | *boolean* | `true` |
| focused `v2.1.8` | Whether to show focused cursor | *boolean* | `false` |

### Events

| Event | Description | Arguments |
|------|------|------|
| focus | Triggered when input get focused | - |
