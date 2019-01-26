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
<van-switch
  v-model="checked"
  disabled
/>
```

#### Loading

```html
<van-switch
  v-model="checked"
  loading
/>
```

#### Custom Size

```html
<van-switch
  v-model="checked"
  size="24px"
/>
```

#### Custom Color

```html
<van-switch
  v-model="checked"
  active-color="#07c160"
  inactive-color="#f44"
/>
```

#### Async Control

```html
<van-switch
  :value="checked"
  @input="onInput"
/>
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
|------|------|------|------|
| v-model | Check status of Switch | `any` | `false` |
| loading | Whether to show loading icon | `Boolean` | `false` |
| disabled | Whether to disable switch | `Boolean` | `false` |
| size | Size of switch | `String` | `30px` |
| active-color | Background color when active | `String` | `#1989fa` |
| inactive-color | Background color when inactive | `String` | `#fff` |
| active-value | Value when active | `any` | `true` |
| inactive-value | Value when inactive | `any` | `false` |

### Event

| Event | Description | Parameters |
|------|------|------|
| change | Triggered when check status changed | checked: is switch checked |
