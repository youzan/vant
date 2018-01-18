## PasswordInput
The PasswordInput component is usually used with [NumberKeyboard](#/en-US/component/number-keyboard) Component.

### Install
``` javascript
import { PasswordInput, NumberKeyboard } from 'vant';

Vue.use(PasswordInput);
Vue.use(NumberKeyboard);
```

### Usage

#### Basic Usage

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
      value: '',
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

### API

| Attribute | Description | Type | Default | Accepted Values |
|-----------|-----------|-----------|-------------|-------------|
| value | Password value | `String` | `''` | - |
| length | Maxlength of password | `Number` | `6` | - |
| info | Bottom info | `String` | - | - |
| error-info | Bottom error info | `String` | - | - |

### Event

| Event | Description | Attribute |
|-----------|-----------|-----------|
| focus | Triggered when input get focused | - |
