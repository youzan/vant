<script>
import { Toast } from 'packages/index';

export default {
  data() {
    return {
      show1: false,
      show2: false,
      show3: false,
      actions: [
        { name: 'Option1', callback: this.onClick },
        { name: 'Option2' },
        { name: 'Option3', loading: true }
      ]
    };
  },

  methods: {
    onClick(item) {
      Toast(item.name);
    }
  }
}
</script>

## Actionsheet

### Install
``` javascript
import { Actionsheet } from 'vant';

Vue.component(Actionsheet.name, Actionsheet);
```

### Usage

#### Basic Usage
Use `actions` prop to set options of actionsheet. 

:::demo Basic Usage
```html
<van-button @click="show1 = true">Show Actionsheet</van-button>
<van-actionsheet v-model="show1" :actions="actions" />
```

```javascript
export default {
  data() {
    return {
      show1: false,
      actions: [
        { name: 'Option1', callback: this.onClick },
        { name: 'Option2' },
        { name: 'Option3', loading: true }
      ]
    };
  },

  methods: {
    onClick(item) {
      Toast(item.name);
    }
  }
}
```
:::

#### Actionsheet with cancel button

:::demo Actionsheet with cancel button
```html
<van-button @click="show2 = true">Show Actionsheet with cancel button</van-button>
<van-actionsheet v-model="show2" :actions="actions" cancel-text="Cancel" />
```
:::

#### Actionsheet with title
Actionsheet will get another style if there is a `title` prop.

:::demo Actionsheet with title
```html
<van-button @click="show3 = true">Show Actionsheet with title</van-button>
<van-actionsheet v-model="show3" title="Title">
  <p>Content</p>
</van-actionsheet>
```
:::

### API

| Attribute | Description | Type | Default | Accepted Values |
|-----------|-----------|-----------|-------------|-------------|
| actions | Options | `Array` | `[]` | - |
| title | Title | `String` | - | - |
| cancelText | Text of cancel button | `String` | - | - |
| overlay | Whether to show overlay | `Boolean` | - | - |
| closeOnClickOverlay | Whether to close when click overlay | `Boolean` | - | - |

### Data struct of actions

| key | Description |
|-----------|-----------|
| name | Title |
| subname | Subtitle |
| className | className for the option |
| loading | Whether to be loading status |
| callback | Triggered when click option |
