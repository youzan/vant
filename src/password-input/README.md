# PasswordInput

### Intro

The PasswordInput component is usually used with [NumberKeyboard](#/en-US/number-keyboard) Component.

### Install

``` javascript
import { PasswordInput, NumberKeyboard } from 'vant';

Vue.use(PasswordInput).use(NumberKeyboard);
```

## Usage

### Basic Usage

```html
<!-- PasswordInput -->
<van-password-input
  :value="value"
  info="Some tips"
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

### Custom length

```html
<van-password-input
  :value="value"
  :length="4"
  :gutter="15"
  @focus="showKeyboard = true"
/>
```

### Without mask

```html
<van-password-input
  :value="value"
  :mask="false"
  @focus="showKeyboard = true"
/>
```

## API

### Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| value | Password value | `String` | `''` |
| length | Maxlength of password | `Number` | `6` |
| mask | Whether to mask value | `Boolean` | `true` |
| info | Bottom info | `String` | - |
| error-info | Bottom error info | `String` | - |
| gutter | Gutter of input | `Number | String` | `0` |

### Events

| Event | Description | Arguments |
|------|------|------|
| focus | Triggered when input get focused | - |
