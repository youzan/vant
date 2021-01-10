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
import { ref } from 'vue';

export default {
  setup() {
    const value = ref(1);
    return { value };
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

### Before Change

```html
<van-stepper v-model="value" :before-change="beforeChange" />
```

```js
import { ref } from 'vue';
import { Toast } from 'vant';

export default {
  setup() {
    const value = ref(1);

    const beforeChange = (value) => {
      Toast.loading({ forbidClick: true });

      return new Promise((resolve) => {
        setTimeout(() => {
          Toast.clear();
          // resolve 'true' or 'false'
          resolve(true);
        }, 500);
      });
    };

    return {
      value,
      beforeChange,
    };
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
| theme | Theme, can be set to `round` | _string_ | - |
| placeholder | Input placeholder | _string_ | - |
| integer | Whether to allow only integers | _boolean_ | `false` |
| disabled | Whether to disable value change | _boolean_ | `false` |
| disable-plus | Whether to disable plus button | _boolean_ | `false` |
| disable-minus | Whether to disable minus button | _boolean_ | `false` |
| disable-input | Whether to disable input | _boolean_ | `false` |
| before-change | Callback function before changing，return `false` to prevent change，support return Promise | _(value) => boolean \| Promise_ | `false` |
| show-plus | Whether to show plus button | _boolean_ | `true` |
| show-minus | Whether to show minus button | _boolean_ | `true` |
| show-input | Whether to show input | _boolean_ | `true` |
| long-press | Whether to allow long press | _boolean_ | `true` |
| allow-empty | Whether to allow the input to be empty | _boolean_ | `false` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| change | Emitted when value changed | _value: string, detail: { name: string }_ |
| overlimit | Emitted when a disabled button is clicked | - |
| plus | Emitted when the plus button is clicked | - |
| minus | Emitted when the minus button is clicked | - |
| focus | Emitted when the input is focused | _event: Event_ |
| blur | Emitted when the input is blured | _event: Event_ |

### Less Variables

How to use: [Custom Theme](#/en-US/theme).

| Name                                     | Default Value       | Description |
| ---------------------------------------- | ------------------- | ----------- |
| @stepper-active-color                    | `#e8e8e8`           | -           |
| @stepper-background-color                | `@active-color`     | -           |
| @stepper-button-icon-color               | `@text-color`       | -           |
| @stepper-button-disabled-color           | `@background-color` | -           |
| @stepper-button-disabled-icon-color      | `@gray-5`           | -           |
| @stepper-button-round-theme-color        | `@red`              | -           |
| @stepper-input-width                     | `32px`              | -           |
| @stepper-input-height                    | `28px`              | -           |
| @stepper-input-font-size                 | `@font-size-md`     | -           |
| @stepper-input-line-height               | `normal`            | -           |
| @stepper-input-text-color                | `@text-color`       | -           |
| @stepper-input-disabled-text-color       | `@gray-5`           | -           |
| @stepper-input-disabled-background-color | `@active-color`     | -           |
| @stepper-border-radius                   | `@border-radius-md` | -           |
