## Switch

### Install
``` javascript
import { Switch } from 'vant';

Vue.use(Switch);
```

### Usage

#### Basic Usage

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

#### Disabled

```html
<van-switch v-model="checked" disabled />
```

#### Loading


```html
<van-switch v-model="checked" loading />
```

#### Advanced usage

```html
<van-switch :value="checked" size="36px" @input="onInput" />
```

```js
export default {
  data() {
    return {
      checked: true
    };
  },

  methods: {
    onInput(checked) {
      Dialog.confirm({
        title: 'Confirm',
        message: 'Are you sure to toggle switch?'
      }).then(() => {
        this.checked = checked;
      });
    }
  }
};  
```

### API

| Attribute | Description | Type | Default |
|-----------|-----------|-----------|-------------|
| v-model | Check status of Switch | `Boolean` | `false` |
| loading | Whether to show loading icon | `Boolean` | `false` |
| disabled | Whether to disable switch | `Boolean` | `false` |
| size | Size of switch | `String` | `30px` |

### Event

| Event | Description | Parameters |
|-----------|-----------|-----------|
| change | Triggered when check status changed | checked: is switch checked |
