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

`search` event will be triggered when click the search button on the keyboard.

`cancel` event will be triggered when click the cancel button.

Tips: There will be a search button on the keyboard when Search is inside a form in iOS.

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

### Custom Button

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

Search support all native properties of input tag，such as `maxlength`、`placeholder`、`autofocus`

| Attribute | Description | Type | Default | Version |
|------|------|------|------|------|
| label | Search label | *string* | - | - |
| shape | Shape of input, can be set to `round` | *string* | `square` | - |
| background | Background color | *string* | `#f2f2f2` | - |
| clearable | Whether to be clearable | *boolean* | `true` | - |
| show-action | Whether to show right button | *boolean* | `false` | - |
| disabled | Whether to disable field | *boolean* | `false` | - |
| readonly | Whether to be readonly | *boolean* | `false` | - |
| error | Whether to show error info | *boolean* | `false` | - |
| input-align | Input text align, can be set to `center` `right` | *string* | `left` | - |
| left-icon | Left icon name | *string* | `search` | - |
| right-icon | Right icon name | *string* | - | - |

### Events

Search support all native events of input tag，such as `focus`、`blur`、`keypress`

| Event | Description | Arguments |
|------|------|------|
| cancel | Triggered when click cancel button | - |
| search | Triggered when confirm search | - |
| clear | Triggered when click clear icon | - |

### Slots

| Name | Description |
|------|------|
| label | Custom Search label |
| action | Custom right button, displayed when `showAction` is true |
| left-icon | Custom left icon |
| right-icon | Custom right icon |
