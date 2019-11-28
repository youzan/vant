# Switch

### Install

``` javascript
import Vue from 'vue';
import { Switch } from 'vant';

Vue.use(Switch);
```

## Usage

### Basic Usage

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

### Disabled

```html
<van-switch v-model="checked" disabled />
```

### Loading

```html
<van-switch v-model="checked" loading />
```

### Custom Size

```html
<van-switch v-model="checked" size="24px" />
```

### Custom Color

```html
<van-switch v-model="checked" active-color="#07c160" inactive-color="#ee0a24" />
```

### Async Control

```html
<van-switch :value="checked" @input="onInput" />
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

## API

### Props

| Attribute | Description | Type | Default | Version |
|------|------|------|------|------|
| v-model | Check status of Switch | *any* | `false` | - |
| loading | Whether to show loading icon | *boolean* | `false` | - |
| disabled | Whether to disable switch | *boolean* | `false` | - |
| size | Size of switch | *string \| number* | `30px` | 2.2.11 |
| active-color | Background color when active | *string* | `#1989fa` | - |
| inactive-color | Background color when inactive | *string* | `#fff` | - |
| active-value | Value when active | *any* | `true` | - |
| inactive-value | Value when inactive | *any* | `false` | - |

### Events

| Event | Description | Parameters | Version |
|------|------|------|------|
| change | Triggered when check status changed | checked: is switch checked | - |
| click | Triggered when clicked | event: Event | 2.2.11 |
