# Search

### Install

``` javascript
import Vue from 'vue';
import { Search } from 'vant';

Vue.use(Search);
```

## Usage

### Basic Usage

```html
<van-search placeholder="Placeholder" v-model="value" />
```

```javascript
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
    placeholder="Placeholder"
    show-action
    @search="onSearch"
    @cancel="onCancel"
  />
</form>
```

> Tips: There will be a search button on the keyboard when Search is inside a form in iOS.

### Custom Action Button

Use `action` slot to custom right button, `cancel` event will no longer be triggered when use this slot

```html
<van-search
  v-model="value"
  show-action
  shape="round"
  @search="onSearch"
>
  <div slot="action" @click="onSearch">Search</div>
</van-search>
```

## API

### Props

| Attribute | Description | Type | Default | Version |
|------|------|------|------|------|
| label | Left side label | *string* | - | - |
| shape | Shape of field, can be set to `round` | *string* | `square` | - |
| background | Background color of field | *string* | `#f2f2f2` | - |
| maxlength | Max length of value | *string \| number* | - | - |
| placeholder | Placeholder | *string* | - | - |
| clearable | Whether to be clearable | *boolean* | `true` | - |
| show-action | Whether to show right action button | *boolean* | `false` | - |
| action-text | Text of action button | *boolean* | `Cancel` | 2.2.2 |
| disabled | Whether to disable field | *boolean* | `false` | - |
| readonly | Whether to be readonly | *boolean* | `false` | - |
| error | Whether to show error info | *boolean* | `false` | - |
| input-align | Text align of field, can be set to `center` `right` | *string* | `left` | - |
| left-icon | Left icon name | *string* | `search` | - |
| right-icon | Right icon name | *string* | - | - |

### Events

| Event | Description | Arguments |
|------|------|------|
| search | Triggered when confirm search | value: current value |
| input | Triggered when input value changed | value: current value |
| focus | Triggered when input gets focus | event: Event |
| blur | Triggered when input loses focus | event: Event |
| clear | Triggered when click clear icon | event: Event |
| cancel | Triggered when click cancel button | - |

### Slots

| Name | Description |
|------|------|
| label | Custom Search label |
| action | Custom right button, displayed when `show-action` is `true` |
| left-icon | Custom left icon |
| right-icon | Custom right icon |
