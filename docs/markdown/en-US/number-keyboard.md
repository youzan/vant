## NumberKeyboard

### Install
``` javascript
import { NumberKeyboard } from 'vant';

Vue.use(NumberKeyboard);
```

### Usage

#### Basic Usage

```html
<van-button @touchstart.native.stop="showKeyboard = true">
  Show Keyboard
</van-button>

<van-number-keyboard
  extraKey="."
  :show="showKeyboard"
  closeButtonText="Close"
  @blur="showKeyboard = false"
  @input="onInput"
  @delete="onDelete"
/>
```

```javascript
export default {
  data() {
    return {
      showKeyboard: true
    }
  },

  methods: {
    onInput(value) {
      Toast(value);
    },
    onDelete() {
      Toast('delete');
    }
  }
}
```

### API

| Attribute | Description | Type | Default | Accepted Values |
|-----------|-----------|-----------|-------------|-------------|
| show | Whether to show keyboard | `Boolean` | - | - |
| title | Keyboard title | `String` | - | - |
| zIndex | Keyboard z-index | `Number` | `100` | - |
| extraKey | Content of bottom left key | `String` | `''` | - |
| closeButtonText | Close button text | `String` | `-` | - |
| transition | Whether to show transition animation | `Boolean` | `true` | - |
| showDeleteKey | Whether to show delete button | `Boolean` | `true` | - |
| hideOnClickOutside | Whether to hide keyboard when click outside | `Boolean` | `true` | - |

### Event

| Event | Description | Attribute |
|-----------|-----------|-----------|
| input | Triggered when keydown | key: Content of the key |
| delete | Triggered when press delete key | - |
| blur | Triggered when blur keyboard | - |
| show | Triggered when keyboard is fully displayed. | - |
| hide | Triggered when keyboard is fully hidden. | - |
