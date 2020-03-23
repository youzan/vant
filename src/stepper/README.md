# Stepper

### Install

```js
import Vue from 'vue';
import { Stepper } from 'vant';

Vue.use(Stepper);
```

## Usage

### Basic Usage

```html
<van-stepper v-model="value" />
```

```js
export default {
  data() {
    return {
      value: 1
    }
  }
}
```

### Step

```html
<van-stepper v-model="value" step="2" />
```

### Range

```html
<van-stepper v-model="value" min="5" max="8" />
```

### Integer

```html
<van-stepper v-model="value" integer />
```

### Disabled

```html
<van-stepper v-model="value" disabled />
```

### Disable Input

```html
<van-stepper v-model="value" disable-input />
```

### Decimal Length

```html
<van-stepper v-model="value" step="0.2" :decimal-length="1" />
```

### Custom Size

```html
<van-stepper v-model="value" input-width="40px" button-size="32px" />
```

### Async Change

```html
<van-stepper
  :value="value"
  async-change
  @change="onChange"
/>
```

```js
import { Toast } from 'vant';

export default {
  data() {
    return {
      value: 1
    }
  },
  methods: {
    onChange(value) {
      Toast.loading({ forbidClick: true });

      setTimeout(() => {
        Toast.clear();
        this.value = value;
      }, 500);
    }
  }
}
```

## API

### Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| v-model | Current value | *number \| string* | - |
| min | Min value | *number \| string* | `1` |
| max | Max value | *number \| string* | - |
| default-value | Default value, valid when v-model is empty | *number \| string* | `1` |
| step | Value change step | *number \| string* | `1` |
| name `v2.0.3` | Stepper name | *number \| string* | - |
| input-width | Input width | *number \| string* | `32px` |
| button-size `v2.0.5` | Button size | *number \| string* | `28px` |
| decimal-length `v2.2.1` | Decimal length | *number \| string* | - |
| integer | Whether to allow only integers | *boolean* | `false` |
| disabled | Disable value change | *boolean* | `false` |
| disable-plus `v2.2.16` | Whether to disable plus button | *boolean* | `false` |
| disable-minus `v2.2.16` | Whether to disable minus button | *boolean* | `false` |
| disable-input | Whether to disable input | *boolean* | `false` |
| async-change | Whether to enable async change | *boolean* | `false` | - |
| show-plus `v2.1.2` | Whether to show plus button | *boolean* | `true` |
| show-minus `v2.1.2` | Whether to show minus button | *boolean* | `true` |
| long-press `v2.4.3` | Whether to allow long press | *boolean* | `true` |

### Events

| Event | Description | Arguments |
|------|------|------|
| change | Triggered when value change | *value: string, detail: { name: string }* |
| overlimit | Triggered when click disabled button | - |
| plus | Triggered when click plus button | - |
| minus | Triggered when click minus button | - |
| focus | Triggered when input focused | *event: Event* |
| blur | Triggered when input blured | *event: Event* |
