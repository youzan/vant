# NumberKeyboard

### Install

``` javascript
import Vue from 'vue';
import { NumberKeyboard } from 'vant';

Vue.use(NumberKeyboard);
```

## Usage

### Default Style

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

### Custom Style

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

### Bind Value

```html
<van-field
  readonly
  clickable
  :value="value"
  @touchstart.native.stop="show = true"
/>

<van-number-keyboard
  v-model="value"
  :show="show"
  :maxlength="6"
  @blur="show = false"
/>
```

```javascript
export default {
  data() {
    return {
      show: false,
      value: ''
    }
  }
}
```

## API

### Props

| Attribute | Description | Type | Default | Version |
|------|------|------|------|------|
| v-model | Current value | *string* | - | 2.0.2 |
| show | Whether to show keyboard | *boolean* | - | - |
| theme | Keyboard theme，can be set to `default` `custom` | *string* | `default` | - |
| title | Keyboard title | *string* | - | - |
| maxlength | Value maxlength | *string \| number* | - | 2.0.2 |
| transition | Whether to show transition animation | *boolean* | `true` | - |
| z-index | Keyboard z-index | *number* | `100` | - |
| extra-key | Content of bottom left key | *string* | `''` | - |
| close-button-text | Close button text | *string* | `-` | - |
| delete-button-text | Delete button text | *string* | `delete` | - |
| show-delete-key | Whether to show delete button | *boolean* | `true` | - |
| hide-on-click-outside | Whether to hide keyboard when click outside | *boolean* | `true` | - |
| safe-area-inset-bottom | Whether to enable bottom safe area adaptation, to enable those features use `viewport-fit=cover` in the `viewport` meta tag | *boolean* | `false` | - |

### Events

| Event | Description | Arguments |
|------|------|------|
| input | Triggered when keydown | key: Content of the key |
| delete | Triggered when press delete key | - |
| blur | Triggered when click close button | - |
| blur | Triggered when click close button or blur keyboard | - |
| show | Triggered when keyboard is fully displayed. | - |
| hide | Triggered when keyboard is fully hidden. | - |

### Slots

| Name | Description |
|------|------|
| delete | Custom delete button content |
| title-left | Custom title left content |
