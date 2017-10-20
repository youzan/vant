<script>
import { Toast } from 'packages/index';

export default {
  data() {
    return {
      value: '',
    };
  },

  methods: {
    onSearch() {
      Toast(this.value);
    },
    onCancel() {
      Toast('cancel');
    }
  }
};
</script>

## Search

### Install
``` javascript
import { Search } from 'vant';

Vue.component(Search.name, Search);
```

### Usage

#### Basic Usage

:::demo Basic Usage
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
:::

#### Listen to Events
`search` event will be triggered when click the search button on the keyboard.

`cancel` event will be triggered when click the cancel button.

Tips: There will be a search button on the keyboard when Search is inside a form in iOS.

:::demo Listen to Events
```html
<form action="/">
  <van-search
    v-model="value"
    placeholder="Placeholder"
    :show-action="true"
    @search="onSearch"
    @cancel="onCancel">
  </van-search>
</form>
```
:::

#### Custom Button
Use `action` slot to custom right button, `cancel` event will no longer be triggered when use this slot

:::demo Custom Button
```html
<van-search
  v-model="value"
  :show-action="true"
  @search="onSearch">
  <div slot="action" @click="onSearch">Search</div>
</van-search>
```
:::

### API

| Attribute | Description | Type | Default | Accepted Values |
|-----------|-----------|-----------|-------------|-------------|
| placeholder | Input placeholder | `String` | - | - |
| background | Background color | `String` | `#f2f2f2` | - |
| showAction | Whether to show right button | `Boolean` | false | - |

### Event

| Event | Description | Attribute |
|-----------|-----------|-----------|
| cancel | Triggered when click cancel button | - |
| search | Triggered when confirm search | - |

### Slot

| name | Description |
|-----------|-----------|
| action | Custom right button, displayed when `showAction` is true |
