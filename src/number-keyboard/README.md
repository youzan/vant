# NumberKeyboard

### Install

```js
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

```js
import { Toast } from 'vant';

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

```js
export default {
  data() {
    return {
      show: false,
      value: ''
    }
  }
}
```

### Bottom Left Button Content

Use `extra-key` prop to set the content of bottom left button

```html
<van-button plain type="primary" @touchstart.stop="show = true">
  Show Id Card Number Keyboard
</van-button>

<van-number-keyboard
  :show="show"
  close-button-text="Close"
  extra-key="X"
  @blur="show = false"
  @input="onInput"
  @delete="onDelete"
/>
```

### Keyboard Title

Use `title` prop to set keyboard title

```html
<van-button plain type="info" @touchstart.stop="show = true">
  Show Custom Title Keyboard
</van-button>

<van-number-keyboard
  :show="show"
  close-button-text="Close"
  title="Keyboard Title"
  extra-key="."
  @blur="show = false"
  @input="onInput"
  @delete="onDelete"
/>
```

## API

### Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| v-model `v2.0.2` | Current value | *string* | - |
| show | Whether to show keyboard | *boolean* | - |
| theme | Keyboard theme，can be set to `default` `custom` | *string* | `default` |
| title | Keyboard title | *string* | - |
| maxlength `v2.0.2` | Value maxlength | *number \| string* | - |
| transition | Whether to show transition animation | *boolean* | `true` |
| z-index | Keyboard z-index | *number \| string* | `100` |
| extra-key | Content of bottom left key | *string* | `''` |
| close-button-text | Close button text | *string* | `-` |
| delete-button-text | Delete button text | *string* | `delete` |
| show-delete-key `v2.5.9` | Whether to show delete button | *boolean* | `true` |
| hide-on-click-outside | Whether to hide keyboard when click outside | *boolean* | `true` |
| safe-area-inset-bottom | Whether to enable bottom safe area adaptation | *boolean* | `true` |

### Events

| Event | Description | Arguments |
|------|------|------|
| input | Triggered when keydown | key: Content of the key |
| delete | Triggered when press delete key | - |
| close | Triggered when click close button | - |
| blur | Triggered when click close button or blur keyboard | - |
| show | Triggered when keyboard is fully displayed. | - |
| hide | Triggered when keyboard is fully hidden. | - |

### Slots

| Name | Description |
|------|------|
| delete | Custom delete key content |
| extra-key | Custom extra key content |
| title-left | Custom title left content |
