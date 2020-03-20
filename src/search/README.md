# Search

### Install

```js
import Vue from 'vue';
import { Search } from 'vant';

Vue.use(Search);
```

## Usage

### Basic Usage

```html
<van-search v-model="value" placeholder="Placeholder" />
```

```js
export default {
  data() {
    value: ''
  }
}
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
      value: ''
    };
  },
  methods: {
    onSearch(val) {
      Toast(val);
    },
    onCancel() {
      Toast('Cancel');
    }
  }
}
```

> Tips: There will be a search button on the keyboard when Search is inside a form in iOS.

### Input Align

```html
<van-search
  v-model="value"
  input-align="center"
  placeholder="Placeholder"
/>
```

### Disabled

```html
<van-search
  v-model="value"
  disabled
  placeholder="Placeholder"
/>
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

Use `action` slot to custom right button, `cancel` event will no longer be triggered when use this slot

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
|------|------|------|------|
| label | Left side label | *string* | - |
| shape | Shape of field, can be set to `round` | *string* | `square` |
| background | Background color of field | *string* | `#f2f2f2` |
| maxlength | Max length of value | *number \| string* | - |
| placeholder | Placeholder | *string* | - |
| clearable | Whether to be clearable | *boolean* | `true` |
| autofocus | Whether to auto focus, unsupported in iOS | *boolean* | `false` |
| show-action | Whether to show right action button | *boolean* | `false` |
| action-text `v2.2.2` | Text of action button | *boolean* | `Cancel` |
| disabled | Whether to disable field | *boolean* | `false` |
| readonly | Whether to be readonly | *boolean* | `false` |
| error | Whether to show error info | *boolean* | `false` |
| input-align | Text align of field, can be set to `center` `right` | *string* | `left` |
| left-icon | Left icon name | *string* | `search` |
| right-icon | Right icon name | *string* | - |

### Events

| Event | Description | Arguments |
|------|------|------|
| search | Triggered when confirm search | *value: string* |
| input | Triggered when input value changed | *value: string* |
| focus | Triggered when input gets focus | *event: Event* |
| blur | Triggered when input loses focus | *event: Event* |
| clear | Triggered when click clear icon | *event: Event* |
| cancel | Triggered when click cancel button | - |

### Slots

| Name | Description |
|------|------|
| left | Custom left side content |
| action | Custom right button, displayed when `show-action` is `true` |
| label | Custom Search label |
| left-icon | Custom left icon |
| right-icon | Custom right icon |
