# Switch

### Install

```js
import Vue from 'vue';
import { Switch } from 'vant';

Vue.use(Switch);
```

## Usage

### Basic Usage

```html
<van-switch v-model="checked" />
```

```js
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

### Inside a Cell

```html
<van-cell center title="Title">
  <template #right-icon>
    <van-switch v-model="checked" size="24" />
  </template>
</van-cell>
```

## API

### Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| v-model | Check status of Switch | *ActiveValue \| InactiveValue* | `false` |
| loading | Whether to show loading icon | *boolean* | `false` |
| disabled | Whether to disable switch | *boolean* | `false` |
| size `v2.2.11` | Size of switch | *number \| string* | `30px` |
| active-color | Background color when active | *string* | `#1989fa` |
| inactive-color | Background color when inactive | *string* | `white` |
| active-value | Value when active | *any* | `true` |
| inactive-value | Value when inactive | *any* | `false` |

### Events

| Event | Description | Parameters |
|------|------|------|
| change | Triggered when check status changed | *value: any* |
| click `v2.2.11` | Triggered when clicked | *event: Event* |
