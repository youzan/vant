# Stepper

### Intro

The stepper component consists of an increase button, a decrease button and an input box, which are used to input and adjust numbers within a certain range.

### Install

Register component globally via `app.use`, refer to [Component Registration](#/en-US/advanced-usage#zu-jian-zhu-ce) for more registration ways.

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
import { closeToast, showLoadingToast } from 'vant';

export default {
  setup() {
    const value = ref(1);

    const beforeChange = (value) => {
      showLoadingToast({ forbidClick: true });

      return new Promise((resolve) => {
        setTimeout(() => {
          closeToast();
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
| auto-fixed | Whether to auto fix value that is out of range, set to `false` and value that is out of range won’t be auto fixed | _boolean_ | `true` |
| default-value | Default value, valid when v-model is empty | _number \| string_ | `1` |
| step | Value change step | _number \| string_ | `1` |
| name | Stepper name, usually a unique string or number | _number \| string_ | - |
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
| before-change | Callback function before changing, return `false` to prevent change, support return Promise | _(value: number \| string) => boolean \| Promise\<boolean\>_ | `false` |
| show-plus | Whether to show plus button | _boolean_ | `true` |
| show-minus | Whether to show minus button | _boolean_ | `true` |
| show-input | Whether to show input | _boolean_ | `true` |
| long-press | Whether to enable the long press gesture, when enabled you can long press the increase and decrease buttons | _boolean_ | `true` |
| allow-empty | Whether to allow the input value to be empty, set to `true` to allow an empty string to be passed in | _boolean_ | `false` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| change | Emitted when value changed | _value: string, detail: { name: string }_ |
| overlimit | Emitted when a disabled button is clicked | - |
| plus | Emitted when the plus button is clicked | - |
| minus | Emitted when the minus button is clicked | - |
| focus | Emitted when the input is focused | _event: Event_ |
| blur | Emitted when the input is blurred | _event: Event_ |

### Types

The component exports the following type definitions:

```ts
import type { StepperTheme, StepperProps } from 'vant';
```

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/config-provider).

| Name | Default Value | Description |
| --- | --- | --- |
| --van-stepper-background | _var(--van-active-color)_ | - |
| --van-stepper-button-icon-color | _var(--van-text-color)_ | - |
| --van-stepper-button-disabled-color | _var(--van-background)_ | - |
| --van-stepper-button-disabled-icon-color | _var(--van-gray-5)_ | - |
| --van-stepper-button-round-theme-color | _var(--van-primary-color)_ | - |
| --van-stepper-input-width | _32px_ | - |
| --van-stepper-input-height | _28px_ | - |
| --van-stepper-input-font-size | _var(--van-font-size-md)_ | - |
| --van-stepper-input-line-height | _normal_ | - |
| --van-stepper-input-text-color | _var(--van-text-color)_ | - |
| --van-stepper-input-disabled-text-color | _var(--van-text-color-3)_ | - |
| --van-stepper-input-disabled-background | _var(--van-active-color)_ | - |
| --van-stepper-radius | _var(--van-radius-md)_ | - |
