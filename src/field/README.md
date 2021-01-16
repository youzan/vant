# Field

### Install

```js
import { createApp } from 'vue';
import { Field } from 'vant';

const app = createApp();
app.use(Field);
```

## Usage

### Basic Usage

The value of field is bound with v-model.

```html
<van-cell-group>
  <van-field v-model="value" label="Label" placeholder="Text" />
</van-cell-group>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const value = ref('');
    return { value };
  },
};
```

### Custom Type

Use `type` prop to custom different type fields.

```html
<van-field v-model="state.text" label="Text" />
<van-field v-model="state.tel" type="tel" label="Phone" />
<van-field v-model="state.digit" type="digit" label="Digit" />
<van-field v-model="state.number" type="number" label="Number" />
<van-field v-model="state.password" type="password" label="Password" />
```

```js
import { reactive } from 'vue';

export default {
  setup() {
    const state = reactive({
      tel: '',
      text: '',
      digit: '',
      number: '',
      password: '',
    });

    return { state };
  },
};
```

### Disabled

```html
<van-cell-group>
  <van-field label="Text" value="Input Readonly" readonly />
  <van-field label="Text" value="Input Disabled" disabled />
</van-cell-group>
```

### Show Icon

```html
<van-cell-group>
  <van-field
    v-model="state.value1"
    label="Text"
    left-icon="smile-o"
    right-icon="warning-o"
    placeholder="Show Icon"
  />
  <van-field
    v-model="state.value2"
    clearable
    label="Text"
    left-icon="music-o"
    placeholder="Show Clear Icon"
  />
</van-cell-group>
```

```js
import { reactive } from 'vue';

export default {
  setup() {
    const state = reactive({
      value1: '',
      value2: '123',
    });

    return { state };
  },
};
```

### Error Info

Use `error` or `error-message` to show error info.

```html
<van-cell-group>
  <van-field
    v-model="username"
    error
    required
    label="Username"
    placeholder="Username"
  />
  <van-field
    v-model="phone"
    required
    label="Phone"
    placeholder="Phone"
    error-message="Invalid phone"
  />
</van-cell-group>
```

### Insert Button

Use button slot to insert button.

```html
<van-field v-model="sms" center clearable label="SMS" placeholder="SMS">
  <template #button>
    <van-button size="small" type="primary">Send SMS</van-button>
  </template>
</van-field>
```

### Format Value

Use `formatter` prop to format the input value.

```html
<van-field
  v-model="state.value1"
  label="Text"
  :formatter="formatter"
  placeholder="Format On Change"
/>
<van-field
  v-model="state.value2"
  label="Text"
  :formatter="formatter"
  format-trigger="onBlur"
  placeholder="Format On Blur"
/>
```

```js
import { reactive } from 'vue';

export default {
  setup() {
    const state = reactive({
      value1: '',
      value2: '',
    });
    const formatter = (value) => value.replace(/\d/g, '');

    return {
      state,
      formatter,
    };
  },
};
```

### Auto Resize

Textarea Field can be auto resize when has `autosize` prop.

```html
<van-field
  v-model="message"
  label="Message"
  type="textarea"
  placeholder="Message"
  rows="1"
  autosize
/>
```

### Show Word Limit

```html
<van-field
  v-model="message"
  rows="2"
  autosize
  label="Message"
  type="textarea"
  maxlength="50"
  placeholder="Message"
  show-word-limit
/>
```

### Input Align

Use `input-align` prop to align the input value.

```html
<van-field
  v-model="value"
  label="Text"
  placeholder="Input Align Right"
  input-align="right"
/>
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| v-model | Field value | _number \| string_ | - |
| label | Field label | _string_ | - |
| name | Name | _string_ | - |
| type | Input type, can be set to `tel` `digit`<br>`number` `textarea` `password` | _string_ | `text` |
| size | Size，can be set to `large` | _string_ | - |
| maxlength | Max length of value | _number \| string_ | - |
| placeholder | Input placeholder | _string_ | - |
| border | Whether to show inner border | _boolean_ | `true` |
| disabled | Whether to disable field | _boolean_ | `false` |
| readonly | Whether to be readonly | _boolean_ | `false` |
| colon | Whether to display colon after label | _boolean_ | `false` |
| required | Whether to show required mark | _boolean_ | `false` |
| center | Whether to center content vertically | _boolean_ | `true` |
| clearable | Whether to be clearable | _boolean_ | `false` |
| clear-trigger | When to display the clear icon, `always` means to display the icon when value is not empty, `focus` means to display the icon when input is focused | _string_ | `focus` |
| clickable | Whether to show click feedback when clicked | _boolean_ | `false` |
| is-link | Whether to show link icon | _boolean_ | `false` |
| autofocus | Whether to auto focus, unsupported in iOS | _boolean_ | `false` |
| show-word-limit | Whether to show word limit, need to set the `maxlength` prop | _boolean_ | `false` |
| error | Whether to show error info | _boolean_ | `false` |
| error-message | Error message | _string_ | - |
| formatter | Input value formatter | _Function_ | - |
| format-trigger | When to format value，can be set to `onBlur` | _string_ | `onChange` |
| arrow-direction | Can be set to `left` `up` `down` | _string_ | `right` |
| label-class | Label className | _string \| Array \| object_ | - |
| label-width | Label width | _number \| string_ | `6.2em` |
| label-align | Label align, can be set to `center` `right` | _string_ | `left` |
| input-align | Input align, can be set to `center` `right` | _string_ | `left` |
| error-message-align | Error message align, can be set to `center` `right` | _string_ | `left` |
| autosize | Textarea auto resize，can accpet an object,<br>e.g. { maxHeight: 100, minHeight: 50 } | _boolean \| object_ | `false` |
| left-icon | Left side icon name | _string_ | - |
| right-icon | Right side icon name | _string_ | - |
| icon-prefix | Icon className prefix | _string_ | `van-icon` |
| rules | Form validation rules | _Rule[]_ | - |
| autocomplete `v3.0.3` | [autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) attribute of native input element | _string_ | - |

### Events

Field support all native events of input tag

| Event | Description | Parameters |
| --- | --- | --- |
| update:model-value | Emitted when input value changed | _value: string_ |
| focus | Emitted when input is focused | _event: Event_ |
| blur | Emitted when input is blured | _event: Event_ |
| clear | Emitted when the clear icon is clicked | _event: Event_ |
| click | Emitted when component is clicked | _event: Event_ |
| click-input | Emitted when the input is clicked | _event: Event_ |
| click-left-icon | Emitted when the left icon is clicked | _event: Event_ |
| click-right-icon | Emitted when the right icon is clicked | _event: Event_ |

### Methods

Use [ref](https://v3.vuejs.org/guide/component-template-refs.html) to get Field instance and call instance methods.

| Name  | Description         | Attribute | Return value |
| ----- | ------------------- | --------- | ------------ |
| focus | Trigger input focus | -         | -            |
| blur  | Trigger input blur  | -         | -            |

### Slots

| Name       | Description                 |
| ---------- | --------------------------- |
| label      | Custom label                |
| input      | Custom input                |
| left-icon  | Custom left icon            |
| right-icon | Custom right icon           |
| button     | Insert button               |
| extra      | Custom content on the right |

### Less Variables

How to use: [Custom Theme](#/en-US/theme).

| Name                             | Default Value   | Description |
| -------------------------------- | --------------- | ----------- |
| @field-label-width               | `6.2em`         | -           |
| @field-label-color               | `@gray-7`       | -           |
| @field-label-margin-right        | `@padding-sm`   | -           |
| @field-input-text-color          | `@text-color`   | -           |
| @field-input-error-text-color    | `@red`          | -           |
| @field-input-disabled-text-color | `@gray-5`       | -           |
| @field-placeholder-text-color    | `@gray-5`       | -           |
| @field-icon-size                 | `16px`          | -           |
| @field-clear-icon-size           | `16px`          | -           |
| @field-clear-icon-color          | `@gray-5`       | -           |
| @field-right-icon-color          | `@gray-6`       | -           |
| @field-error-message-color       | `@red`          | -           |
| @field-error-message-text-color  | `12px`          | -           |
| @field-text-area-min-height      | `60px`          | -           |
| @field-word-limit-color          | `@gray-7`       | -           |
| @field-word-limit-font-size      | `@font-size-sm` | -           |
| @field-word-limit-line-height    | `16px`          | -           |
| @field-disabled-text-color       | `@gray-5`       | -           |
