<script>
import Dialog from 'packages/dialog';

export default {
  data() {
    return {
      checked: true,
      checked2: true
    };
  },

  methods: {
    onInput(checked) {
      Dialog.confirm({
        title: 'Confirm',
        confirmButtonText: 'ok',
        cancelButtonText: 'cancel',
        message: 'Are you sure to toggle switch?'
      }).then(() => {
        this.checked2 = checked;
      });
    }
  }
};
</script>

## Switch

### Install
``` javascript
import { Switch } from 'vant';

Vue.component(Switch.name, Switch);
```

### Usage

#### Basic Usage

:::demo Basic Usage
```html
<van-switch v-model="checked" />
```

```javascript
export default {
  data() {
    return {
      checked: true
    };
  }
};  
```
:::

#### Disabled

:::demo Disabled
```html
<van-switch v-model="checked" disabled />
```
:::

#### Loading


:::demo Loading
```html
<van-switch v-model="checked" loading />
```
:::

#### Advanced usage
:::demo Advanced usage
```html
<van-switch :value="checked2" @input="onInput" />
```
```js
export default {
  data() {
    return {
      checked2: true
    };
  },

  methods: {
    onInput(checked) {
      Dialog.confirm({
        title: 'Confirm',
        message: 'Are you sure to toggle switch?'
      }).then(() => {
        this.checked2 = checked;
      });
    }
  }
};  
```
:::

### API

| Attribute | Description | Type | Default | Accepted Values |
|-----------|-----------|-----------|-------------|-------------|
| v-model | Check status of Switch | `Boolean` | `false` | - |
| loading | Whether to show loading icon | `Boolean`  | `false` | - |
| disabled | Disable switch | `Boolean`  | `false` | - |

### Event

| Event | Description | Parameters |
|-----------|-----------|-----------|
| change | Triggered when check status changed | checked: is switch checked |
