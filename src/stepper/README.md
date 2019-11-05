# Stepper

### Install

``` javascript
import Vue from 'vue';
import { Stepper } from 'vant';

Vue.use(Stepper);
```

## Usage

### Basic Usage

```html
<van-stepper v-model="value" />
```

```javascript
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

```javascript
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

| Attribute | Description | Type | Default | Version |
|------|------|------|------|------|
| v-model | Current value | *string \| number* | Min value | - |
| min | Min value | *string \| number* | `1` | - |
| max | Max value | *string \| number* | - | - |
| step | Value change step | *string \| number* | `1` | - |
| name | Stepper name | *string \| number* | - | 2.0.3 |
| integer | Whether to allow only integers | *boolean* | `false` | - |
| disabled | Disable value change | *boolean* | `false` | - |
| disable-input | Disable input | *boolean* | `false` | - |
| async-change | Whether to enable async change | *boolean* | `false` | - | - |
| input-width | Input width | *string \| number* | `32px` | - |
| button-size | Button size | *string \| number* | `28px` | 2.0.5 |
| show-plus | Whether to show plus button | *boolean* | `true` | 2.1.2 |
| show-minus | Whether to show minus button | *boolean* | `true` | 2.1.2 |
| decimal-length | Decimal length | *number* | - | 2.2.1 |

### Events

| Event | Description | Arguments |
|------|------|------|
| change | Triggered when value change | value: current value, detail: Detail info, contains name |
| overlimit | Triggered when click disabled button | - |
| plus | Triggered when click plus button | - |
| minus | Triggered when click minus button | - |
| focus | Triggered when input focused | event: Event |
| blur | Triggered when input blured | event: Event |
