## Search

### Install
``` javascript
import { Search } from 'vant';

Vue.use(Search);
```

### Usage

#### Basic Usage

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

#### Listen to Events
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

#### Custom Button
Use `action` slot to custom right button, `cancel` event will no longer be triggered when use this slot

```html
<van-search
  v-model="value"
  show-action
  @search="onSearch"
>
  <div slot="action" @click="onSearch">Search</div>
</van-search>
```

### API
Search support all native properties of input tag，such as `maxlength`、`placeholder`、`readonly`、`autofocus`

| Attribute | Description | Type | Default |
|-----------|-----------|-----------|-------------|
| placeholder | Input placeholder | `String` | - |
| background | Background color | `String` | `#f2f2f2` |
| show-action | Whether to show right button | `Boolean` | `false` |

### Event
Search support all native events of input tag，such as `focus`、`blur`、`keypress`

| Event | Description | Arguments |
|-----------|-----------|-----------|
| cancel | Triggered when click cancel button | - |
| search | Triggered when confirm search | - |

### Slot

| name | Description |
|-----------|-----------|
| action | Custom right button, displayed when `showAction` is true |
