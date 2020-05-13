# NumberKeyboard

### Install

```js
import Vue from 'vue';
import { NumberKeyboard } from 'vant';

Vue.use(NumberKeyboard);
```

## Usage

### Default Keyboard

```html
<van-cell @touchstart.native.stop="show = true">
  Show Keyboard
</van-cell>
<van-number-keyboard
  :show="show"
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
      show: true,
    };
  },
  methods: {
    onInput(value) {
      Toast(value);
    },
    onDelete() {
      Toast('delete');
    },
  },
};
```

### Keyboard With Sidebar

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

### IdNumber Keyboard

Use `extra-key` prop to set the content of bottom left button

```html
<van-cell plain type="primary" @touchstart.native.stop="show = true">
  Show IdNumber Keyboard
</van-cell>

<van-number-keyboard
  :show="show"
  extra-key="X"
  close-button-text="Close"
  @blur="show = false"
  @input="onInput"
  @delete="onDelete"
/>
```

### Keyboard With Title

Use `title` prop to set keyboard title

```html
<van-cell plain type="info" @touchstart.native.stop="show = true">
  Show Keyboard With Title
</van-cell>
<van-number-keyboard
  :show="show"
  title="Keyboard Title"
  extra-key="."
  close-button-text="Close"
  @blur="show = false"
  @input="onInput"
  @delete="onDelete"
/>
```

### Multiple ExtraKey

```html
<van-cell plain type="primary" @touchstart.native.stop="show = true">
  Show Keyboard With Multiple ExtraKey
</van-cell>
<van-number-keyboard
  :show="show"
  :extra-key="['00', '.']"
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
      value: '',
    };
  },
};
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| v-model (value) `v2.0.2` | Current value | _string_ | - |
| show | Whether to show keyboard | _boolean_ | - |
| title | Keyboard title | _string_ | - |
| theme | Keyboard theme，can be set to `custom` | _string_ | `default` |
| maxlength `v2.0.2` | Value maxlength | _number \| string_ | - |
| transition | Whether to show transition animation | _boolean_ | `true` |
| z-index | Keyboard z-index | _number \| string_ | `100` |
| extra-key `v2.8.2` | Content of bottom left key | _string \| string[]_ | `''` |
| close-button-text | Close button text | _string_ | - |
| delete-button-text | Delete button text | _string_ | Delete Icon |
| close-button-loading `v2.7.0` | Whether to show loading close button in custom theme | _boolean_ | `false` |
| show-delete-key `v2.5.9` | Whether to show delete button | _boolean_ | `true` |
| hide-on-click-outside | Whether to hide keyboard when click outside | _boolean_ | `true` |
| safe-area-inset-bottom | Whether to enable bottom safe area adaptation | _boolean_ | `true` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| input | Triggered when keydown | key: Content of the key |
| delete | Triggered when press delete key | - |
| close | Triggered when click close button | - |
| blur | Triggered when click close button or blur keyboard | - |
| show | Triggered when keyboard is fully displayed | - |
| hide | Triggered when keyboard is fully hidden | - |

### Slots

| Name       | Description               |
| ---------- | ------------------------- |
| delete     | Custom delete key content |
| extra-key  | Custom extra key content  |
| title-left | Custom title left content |
