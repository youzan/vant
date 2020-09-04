# Switch

### Install

```js
import { createApp } from 'vue';
import { Switch } from 'vant';

const app = createApp();
app.use(Switch);
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
      checked: true,
    };
  },
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
<van-switch :model-value="checked" @update:model-value="onUpdateValue" />
```

```js
export default {
  data() {
    return {
      checked: true,
    };
  },
  methods: {
    onUpdateValue(checked) {
      Dialog.confirm({
        title: 'Confirm',
        message: 'Are you sure to toggle switch?',
      }).then(() => {
        this.checked = checked;
      });
    },
  },
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
| --- | --- | --- | --- |
| v-model | Check status of Switch | _ActiveValue \| InactiveValue_ | `false` |
| loading | Whether to show loading icon | _boolean_ | `false` |
| disabled | Whether to disable switch | _boolean_ | `false` |
| size | Size of switch | _number \| string_ | `30px` |
| active-color | Background color when active | _string_ | `#1989fa` |
| inactive-color | Background color when inactive | _string_ | `white` |
| active-value | Value when active | _any_ | `true` |
| inactive-value | Value when inactive | _any_ | `false` |

### Events

| Event  | Description                         | Parameters     |
| ------ | ----------------------------------- | -------------- |
| change | Triggered when check status changed | _value: any_   |
| click  | Triggered when clicked              | _event: Event_ |
