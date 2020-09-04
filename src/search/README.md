# Search

### Install

```js
import { createApp } from 'vue';
import { Search } from 'vant';

const app = createApp();
app.use(Search);
```

## Usage

### Basic Usage

```html
<van-search v-model="value" placeholder="Placeholder" />
```

```js
export default {
  data() {
    value: '';
  },
};
```

### Listen to Events

`search` event will be triggered when click the search button on the keyboard, `cancel` event will be triggered when click the cancel button.

```html
<form action="/">
  <van-search
    v-model="value"
    show-action
    placeholder="Placeholder"
    @search="onSearch"
    @cancel="onCancel"
  />
</form>
```

```js
import { Toast } from 'vant';

export default {
  data() {
    return {
      value: '',
    };
  },
  methods: {
    onSearch(val) {
      Toast(val);
    },
    onCancel() {
      Toast('Cancel');
    },
  },
};
```

> Tips: There will be a search button on the keyboard when Search is inside a form in iOS.

### Input Align

```html
<van-search v-model="value" input-align="center" placeholder="Placeholder" />
```

### Disabled

```html
<van-search v-model="value" disabled placeholder="Placeholder" />
```

### Custom Background Color

```html
<van-search
  v-model="value"
  shape="round"
  background="#4fc08d"
  placeholder="Placeholder"
/>
```

### Custom Action Button

Use `action` slot to custom right button, `cancel` event will no longer be triggered when use this slot.

```html
<van-search
  v-model="value"
  show-action
  label="Address"
  placeholder="Placeholder"
  @search="onSearch"
>
  <template #action>
    <div @click="onSearch">Search</div>
  </template>
</van-search>
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| label | Left side label | _string_ | - |
| shape | Shape of field, can be set to `round` | _string_ | `square` |
| background | Background color of field | _string_ | `#f2f2f2` |
| maxlength | Max length of value | _number \| string_ | - |
| placeholder | Placeholder | _string_ | - |
| clearable | Whether to be clearable | _boolean_ | `true` |
| clear-trigger `v2.9.1` | When to display the clear icon, `always` means to display the icon when value is not empty, `focus` means to display the icon when input is focused | _string_ | `focus` |
| autofocus | Whether to auto focus, unsupported in iOS | _boolean_ | `false` |
| show-action | Whether to show right action button | _boolean_ | `false` |
| action-text | Text of action button | _boolean_ | `Cancel` |
| disabled | Whether to disable field | _boolean_ | `false` |
| readonly | Whether to be readonly | _boolean_ | `false` |
| error | Whether to show error info | _boolean_ | `false` |
| input-align | Text align of field, can be set to `center` `right` | _string_ | `left` |
| left-icon | Left icon name | _string_ | `search` |
| right-icon | Right icon name | _string_ | - |

### Events

| Event  | Description                        | Arguments       |
| ------ | ---------------------------------- | --------------- |
| search | Triggered when confirm search      | _value: string_ |
| input  | Triggered when input value changed | _value: string_ |
| focus  | Triggered when input gets focus    | _event: Event_  |
| blur   | Triggered when input loses focus   | _event: Event_  |
| clear  | Triggered when click clear icon    | _event: Event_  |
| cancel | Triggered when click cancel button | -               |

### Slots

| Name       | Description                                                 |
| ---------- | ----------------------------------------------------------- |
| left       | Custom left side content                                    |
| action     | Custom right button, displayed when `show-action` is `true` |
| label      | Custom Search label                                         |
| left-icon  | Custom left icon                                            |
| right-icon | Custom right icon                                           |
