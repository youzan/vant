# Stepper

### Install

```js
import { createApp } from 'vue';
import { Stepper } from 'vant';

const app = createApp();
app.use(Stepper);
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
      value: 1,
    };
  },
};
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
<van-stepper :model-value="value" async-change @change="onChange" />
```

```js
import { Toast } from 'vant';

export default {
  data() {
    return {
      value: 1,
    };
  },
  methods: {
    onChange(value) {
      Toast.loading({ forbidClick: true });

      setTimeout(() => {
        Toast.clear();
        this.value = value;
      }, 500);
    },
  },
};
```

### Round Theme

```html
<van-stepper v-model="value" theme="round" button-size="22" disable-input />
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| v-model | Current value | _number \| string_ | - |
| min | Min value | _number \| string_ | `1` |
| max | Max value | _number \| string_ | - |
| default-value | Default value, valid when v-model is empty | _number \| string_ | `1` |
| step | Value change step | _number \| string_ | `1` |
| name | Stepper name | _number \| string_ | - |
| input-width | Input width | _number \| string_ | `32px` |
| button-size | Button size | _number \| string_ | `28px` |
| decimal-length | Decimal length | _number \| string_ | - |
| theme `v2.8.2` | Theme, can be set to `round` | _string_ | - |
| placeholder `v2.8.6` | Input placeholder | _string_ | - |
| integer | Whether to allow only integers | _boolean_ | `false` |
| disabled | Whether to disable value change | _boolean_ | `false` |
| disable-plus | Whether to disable plus button | _boolean_ | `false` |
| disable-minus | Whether to disable minus button | _boolean_ | `false` |
| disable-input | Whether to disable input | _boolean_ | `false` |
| async-change | Whether to enable async change | _boolean_ | `false` | - |
| show-plus | Whether to show plus button | _boolean_ | `true` |
| show-minus | Whether to show minus button | _boolean_ | `true` |
| long-press `v2.4.3` | Whether to allow long press | _boolean_ | `true` |
| allow-empty `v2.9.1` | Whether to allow the input to be empty | _boolean_ | `false` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| change | Triggered when value change | _value: string, detail: { name: string }_ |
| overlimit | Triggered when click disabled button | - |
| plus | Triggered when click plus button | - |
| minus | Triggered when click minus button | - |
| focus | Triggered when input focused | _event: Event_ |
| blur | Triggered when input blured | _event: Event_ |
