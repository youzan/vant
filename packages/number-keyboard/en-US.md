## NumberKeyboard

### Install
``` javascript
import { NumberKeyboard } from 'vant';

Vue.use(NumberKeyboard);
```

### Usage

#### Default Style

```html
<van-button @touchstart.stop="show = true">
  Show Keyboard
</van-button>

<van-number-keyboard
  :show="show"
  extra-key="."
  close-button-text="Close"
  @blur="show = false"
  @input="onInput"
  @delete="onDelete"
/>
```

```javascript
export default {
  data() {
    return {
      show: true
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

#### Custom Style

```html
<van-number-keyboard
  :show="show"
  theme="custom"
  extra-key="."
  close-button-text="Close"
  @blur="show = false"
  @input="onInput"
  @delete="onDelete"
/>
```

### API

| Attribute | Description | Type | Default |
|------|------|------|------|
| show | Whether to show keyboard | `Boolean` | - |
| theme | Keyboard theme，can be set to `default` `custom` | `String` | `default` |
| title | Keyboard title | `String` | - |
| transition | Whether to show transition animation | `Boolean` | `true` |
| z-index | Keyboard z-index | `Number` | `100` |
| extra-key | Content of bottom left key | `String` | `''` |
| close-button-text | Close button text | `String` | `-` |
| delete-button-text | Delete button text | `String` | `delete` |
| show-delete-key | Whether to show delete button | `Boolean` | `true` |
| hide-on-click-outside | Whether to hide keyboard when click outside | `Boolean` | `true` |

### Event

| Event | Description | Arguments |
|------|------|------|
| input | Triggered when keydown | key: Content of the key |
| delete | Triggered when press delete key | - |
| blur | Triggered when click close button | - |
| blur | Triggered when click close button or blur keyboard | - |
| show | Triggered when keyboard is fully displayed. | - |
| hide | Triggered when keyboard is fully hidden. | - |
