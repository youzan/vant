# NumberKeyboard

### Intro

The NumberKeyboard component can be used with [PasswordInput](#/en-US/password-input) component or custom input box components.

### Install

Register component globally via `app.use`, refer to [Component Registration](#/en-US/advanced-usage#zu-jian-zhu-ce) for more registration ways.

```js
import { createApp } from 'vue';
import { NumberKeyboard } from 'vant';

const app = createApp();
app.use(NumberKeyboard);
```

## Usage

### Default Keyboard

```html
<van-cell @touchstart.stop="show = true">Show Keyboard</van-cell>
<van-number-keyboard
  :show="show"
  @blur="show = false"
  @input="onInput"
  @delete="onDelete"
/>
```

```js
import { ref } from 'vue';
import { Toast } from 'vant';

export default {
  setup() {
    const show = ref(true);
    const onInput = (value) => Toast(value);
    const onDelete = () => Toast('delete');

    return {
      show,
      onInput,
      onDelete,
    };
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

Use `extra-key` prop to set the content of bottom left button.

```html
<van-cell plain type="primary" @touchstart.stop="show = true">
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

Use `title` prop to set keyboard title.

```html
<van-cell plain type="primary" @touchstart.stop="show = true">
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
<van-cell plain type="primary" @touchstart.stop="show = true">
  Show Keyboard With Multiple ExtraKey
</van-cell>
<van-number-keyboard
  :show="show"
  theme="custom"
  :extra-key="['00', '.']"
  close-button-text="Close"
  @blur="show = false"
  @input="onInput"
  @delete="onDelete"
/>
```

### Random Key Order

Use `random-key-order` prop to shuffle the order of keys.

```html
<van-cell @touchstart.stop="show = true">
  Show Keyboard With Random Key Order
</van-cell>
<van-number-keyboard
  :show="show"
  random-key-order
  @blur="show = false"
  @input="onInput"
  @delete="onDelete"
/>
```

### Bind Value

```html
<van-field v-model="value" readonly clickable @touchstart.stop="show = true" />
<van-number-keyboard
  v-model="value"
  :show="show"
  :maxlength="6"
  @blur="show = false"
/>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const show = ref(true);
    const value = ref('');
    return {
      show,
      value,
    };
  },
};
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| v-model | Current value | _string_ | - |
| show | Whether to show keyboard | _boolean_ | - |
| title | Keyboard title | _string_ | - |
| theme | Keyboard theme，can be set to `custom` | _string_ | `default` |
| maxlength | Value maxlength | _number \| string_ | `Infinity` |
| transition | Whether to show transition animation | _boolean_ | `true` |
| z-index | Keyboard z-index | _number \| string_ | `100` |
| extra-key | Content of bottom left key | _string \| string[]_ | `''` |
| close-button-text | Close button text | _string_ | - |
| delete-button-text | Delete button text | _string_ | Delete Icon |
| close-button-loading | Whether to show loading close button in custom theme | _boolean_ | `false` |
| show-delete-key | Whether to show delete button | _boolean_ | `true` |
| blur-on-close `v3.0.6` | Whether to emit blur event when clicking close button | _boolean_ | `true` |
| hide-on-click-outside | Whether to hide keyboard when outside is clicked | _boolean_ | `true` |
| teleport | Specifies a target element where NumberKeyboard will be mounted | _string \| Element_ | - |
| safe-area-inset-bottom | Whether to enable bottom safe area adaptation | _boolean_ | `true` |
| random-key-order | Whether to shuffle the order of keys | _boolean_ | `false` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| input | Emitted when a key is pressed | key: Content of the key |
| delete | Emitted when the delete key is pressed | - |
| close | Emitted when the close button is clicked | - |
| blur | Emitted when the close button is clicked or the keyboard is blurred | - |
| show | Emitted when keyboard is fully displayed | - |
| hide | Emitted when keyboard is fully hidden | - |

### Slots

| Name       | Description               |
| ---------- | ------------------------- |
| delete     | Custom delete key content |
| extra-key  | Custom extra key content  |
| title-left | Custom title left content |

### Types

The component exports the following type definitions:

```ts
import type { NumberKeyboardTheme } from 'vant';
```

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/config-provider).

| Name | Default Value | Description |
| --- | --- | --- |
| --van-number-keyboard-background-color | _var(--van-gray-2)_ | - |
| --van-number-keyboard-key-height | _48px_ | - |
| --van-number-keyboard-key-font-size | _28px_ | - |
| --van-number-keyboard-key-active-color | _var(--van-gray-3)_ | - |
| --van-number-keyboard-key-background-color | _van(--van-white)_ | - |
| --van-number-keyboard-delete-font-size | _var(--van-font-size-lg)_ | - |
| --van-number-keyboard-title-color | _var(--van-gray-7)_ | - |
| --van-number-keyboard-title-height | _34px_ | - |
| --van-number-keyboard-title-font-size | _var(--van-font-size-lg)_ | - |
| --van-number-keyboard-close-padding | _0 var(--van-padding-md)_ | - |
| --van-number-keyboard-close-color | _var(--van-text-link-color)_ | - |
| --van-number-keyboard-close-font-size | _var(--van-font-size-md)_ | - |
| --van-number-keyboard-button-text-color | _var(--van-white)_ | - |
| --van-number-keyboard-button-background-color | _var(--van-primary-color)_ | - |
| --van-number-keyboard-z-index | _100_ | - |
