# Field

### Intro

Field component let users enter and edit text.

### Install

Register component globally via `app.use`, refer to [Component Registration](#/en-US/advanced-usage#zu-jian-zhu-ce) for more registration ways.

```js
import { createApp } from 'vue';
import { Field, CellGroup } from 'vant';

const app = createApp();
app.use(Field);
app.use(CellGroup);
```

## Usage

### Basic Usage

The value of field is bound with v-model.

```html
<van-cell-group inset>
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
<van-cell-group inset>
  <van-field v-model="text" label="Text" />
  <van-field v-model="tel" type="tel" label="Phone" />
  <van-field v-model="digit" type="digit" label="Digit" />
  <van-field v-model="number" type="number" label="Number" />
  <van-field v-model="password" type="password" label="Password" />
</van-cell-group>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const tel = ref('');
    const text = ref('');
    const digit = ref('');
    const number = ref('');
    const password = ref('');

    return { tel, text, digit, number, password };
  },
};
```

### Disabled

```html
<van-cell-group inset>
  <van-field label="Text" model-value="Input Readonly" readonly />
  <van-field label="Text" model-value="Input Disabled" disabled />
</van-cell-group>
```

### Show Icon

```html
<van-cell-group inset>
  <van-field
    v-model="value1"
    label="Text"
    left-icon="smile-o"
    right-icon="warning-o"
    placeholder="Show Icon"
  />
  <van-field
    v-model="value2"
    clearable
    label="Text"
    left-icon="music-o"
    placeholder="Show Clear Icon"
  />
</van-cell-group>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const value1 = ref('');
    const value2 = ref('123');
    return {
      value1,
      value2,
    };
  },
};
```

### Required

Use the `required` prop to display a required asterisk.

```html
<van-cell-group inset>
  <van-field
    v-model="username"
    required
    label="Username"
    placeholder="Username"
  />
  <van-field v-model="phone" required label="Phone" placeholder="Phone" />
</van-cell-group>
```

Please note that the `required` prop is only used for controlling the style. For form validation, you need to use the `rule.required` option to control the validation logic.

### Auto Required

You can set `required="auto"` on the Form component, and all the fields inside the Form will automatically display the asterisk based on the `rule.required` option.

```html
<van-form required="auto">
  <van-field
    v-model="username"
    :rules="[{ required: true }]"
    label="Username"
    placeholder="Username"
  />
  <van-field
    v-model="phone"
    :rules="[{ required: false }]"
    label="Phone"
    placeholder="Phone"
  />
</van-form>
```

### Error Info

Use `error` or `error-message` to show error info.

```html
<van-cell-group inset>
  <van-field v-model="username" error label="Username" placeholder="Username" />
  <van-field
    v-model="phone"
    label="Phone"
    placeholder="Phone"
    error-message="Invalid phone"
  />
</van-cell-group>
```

### Insert Button

Use button slot to insert button.

```html
<van-cell-group inset>
  <van-field v-model="sms" center clearable label="SMS" placeholder="SMS">
    <template #button>
      <van-button size="small" type="primary">Send SMS</van-button>
    </template>
  </van-field>
</van-cell-group>
```

### Format Value

Use `formatter` prop to format the input value.

```html
<van-cell-group inset>
  <van-field
    v-model="value1"
    label="Text"
    :formatter="formatter"
    placeholder="Format On Change"
  />
  <van-field
    v-model="value2"
    label="Text"
    :formatter="formatter"
    format-trigger="onBlur"
    placeholder="Format On Blur"
  />
</van-cell-group>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const value1 = ref('');
    const value2 = ref('');
    const formatter = (value) => value.replace(/\d/g, '');

    return {
      value1,
      value2,
      formatter,
    };
  },
};
```

### Auto Resize

Textarea Field can be auto resize when has `autosize` prop.

```html
<van-cell-group inset>
  <van-field
    v-model="message"
    label="Message"
    type="textarea"
    placeholder="Message"
    rows="1"
    autosize
  />
</van-cell-group>
```

### Show Word Limit

```html
<van-cell-group inset>
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
</van-cell-group>
```

### Input Align

Use `input-align` prop to align the input value.

```html
<van-cell-group inset>
  <van-field
    v-model="value"
    label="Text"
    placeholder="Input Align Right"
    input-align="right"
  />
</van-cell-group>
```

### Label Align

Use `label-align` prop to align the input value, can be set to `center`, `right` or `top`.

```html
<van-cell-group inset>
  <van-field
    v-model="value"
    label="Label"
    placeholder="Align Top"
    label-align="top"
  />
  <van-field
    v-model="value2"
    label="Label"
    placeholder="Align Left"
    label-align="left"
  />
  <van-field
    v-model="value3"
    label="Label"
    placeholder="Align Center"
    label-align="center"
  />
  <van-field
    v-model="value4"
    label="Label"
    placeholder="Align Right"
    label-align="right"
  />
</van-cell-group>
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| v-model | Input value | _number \| string_ | - |
| label | Left side label | _string_ | - |
| name | As the identifier when submitting the form | _string_ | - |
| id | Input id, the for attribute of the label also will be set | _string_ | `van-field-n-input` |
| type | Input type, support all [native types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types) and `digit` type | _FieldType_ | `text` |
| size | Size, can be set to `large` `normal` | _string_ | - |
| maxlength | Max length of value | _number \| string_ | - |
| placeholder | Input placeholder | _string_ | - |
| border | Whether to show inner border | _boolean_ | `true` |
| disabled | Whether to disable field | _boolean_ | `false` |
| readonly | Whether to be readonly | _boolean_ | `false` |
| colon | Whether to display colon after label | _boolean_ | `false` |
| required | Whether to show required mark | _boolean \| 'auto'_ | `null` |
| center | Whether to center content vertically | _boolean_ | `true` |
| clearable | Whether to be clearable | _boolean_ | `false` |
| clear-icon | Clear icon name | _string_ | `clear` |
| clear-trigger | When to display the clear icon, `always` means to display the icon when value is not empty, `focus` means to display the icon when input is focused | _FieldClearTrigger_ | `focus` |
| clickable | Whether to show click feedback when clicked | _boolean_ | `false` |
| is-link | Whether to show link icon | _boolean_ | `false` |
| autofocus | Whether to auto focus, unsupported in iOS | _boolean_ | `false` |
| show-word-limit | Whether to show word limit, need to set the `maxlength` prop | _boolean_ | `false` |
| error | Whether to mark the input content in red | _boolean_ | `false` |
| error-message | Error message | _string_ | - |
| error-message-align | Error message align, can be set to `center` `right` | _FieldTextAlign_ | `left` |
| formatter | Input value formatter | _(val: string) => string_ | - |
| format-trigger | When to format value, can be set to `onBlur` | _FieldFormatTrigger_ | `onChange` |
| arrow-direction | Can be set to `left` `up` `down` | _string_ | `right` |
| label-class | Label className | _string \| Array \| object_ | - |
| label-width | Label width | _number \| string_ | `6.2em` |
| label-align | Label align, can be set to `center` `right` `top` | _FieldTextAlign_ | `left` |
| input-align | Input align, can be set to `center` `right` | _FieldTextAlign_ | `left` |
| autosize | Textarea auto resize, can accept an object,<br>e.g. { maxHeight: 100, minHeight: 50 } | _boolean \| FieldAutosizeConfig_ | `false` |
| left-icon | Left side icon name | _string_ | - |
| right-icon | Right side icon name | _string_ | - |
| icon-prefix | Icon className prefix | _string_ | `van-icon` |
| rules | Form validation rules | _FieldRule[]_ | - |
| autocomplete | HTML native attribute, see [MDN - autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) | _string_ | - |
| autocapitalize `v4.6.2` | HTML native attribute, see [MDN - autocapitalize](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autocapitalize)<br> | _string_ | - |
| enterkeyhint | HTML native attribute, see [MDN - enterkeyhint](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/enterkeyhint)<br> | _string_ | - |
| spellcheck `v4.6.2` | HTML native attribute, see [MDN - spellcheck](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/spellcheck)<br> | _boolean_ | - |
| autocorrect `v4.6.2` | Safari only, see [MDN - autocorrect](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#autocorrect)<br> | _string_ | - |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| update:model-value | Emitted when input value changed | _value: string_ |
| focus | Emitted when input is focused | _event: Event_ |
| blur | Emitted when input is blurred | _event: Event_ |
| clear | Emitted when the clear icon is clicked | _event: MouseEvent_ |
| click | Emitted when component is clicked | _event: MouseEvent_ |
| click-input | Emitted when the input is clicked | _event: MouseEvent_ |
| click-left-icon | Emitted when the left icon is clicked | _event: MouseEvent_ |
| click-right-icon | Emitted when the right icon is clicked | _event: MouseEvent_ |
| start-validate | Emitted when start validation | - |
| end-validate | Emitted when end validation | _{ status: string, message: string }_ |

### Methods

Use [ref](https://vuejs.org/guide/essentials/template-refs.html) to get Field instance and call instance methods.

| Name  | Description         | Attribute | Return value |
| ----- | ------------------- | --------- | ------------ |
| focus | Trigger input focus | -         | -            |
| blur  | Trigger input blur  | -         | -            |

### Types

The component exports the following type definitions:

```ts
import type {
  FieldType,
  FieldRule,
  FieldProps,
  FieldInstance,
  FieldTextAlign,
  FieldRuleMessage,
  FieldClearTrigger,
  FieldFormatTrigger,
  FieldRuleValidator,
  FieldRuleFormatter,
  FieldValidateError,
  FieldAutosizeConfig,
  FieldValidateTrigger,
  FieldValidationStatus,
} from 'vant';
```

`FieldInstance` is the type of component instance:

```ts
import { ref } from 'vue';
import type { FieldInstance } from 'vant';

const fieldRef = ref<FieldInstance>();

fieldRef.value?.focus();
```

### Slots

| Name          | Description                 | SlotProps             |
| ------------- | --------------------------- | --------------------- |
| label         | Custom label                | -                     |
| input         | Custom input                | -                     |
| left-icon     | Custom left icon            | -                     |
| right-icon    | Custom right icon           | -                     |
| button        | Insert button               | -                     |
| error-message | Custom error message        | _{ message: string }_ |
| extra         | Custom content on the right | -                     |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/config-provider).

| Name | Default Value | Description |
| --- | --- | --- |
| --van-field-label-width | _6.2em_ | - |
| --van-field-label-color | _var(--van-text-color)_ | - |
| --van-field-label-margin-right | _var(--van-padding-sm)_ | - |
| --van-field-input-text-color | _var(--van-text-color)_ | - |
| --van-field-input-error-text-color | _var(--van-danger-color)_ | - |
| --van-field-input-disabled-text-color | _var(--van-text-color-3)_ | - |
| --van-field-placeholder-text-color | _var(--van-text-color-3)_ | - |
| --van-field-icon-size | _18px_ | - |
| --van-field-clear-icon-size | _18px_ | - |
| --van-field-clear-icon-color | _var(--van-gray-5)_ | - |
| --van-field-right-icon-color | _var(--van-gray-6)_ | - |
| --van-field-error-message-color | _var(--van-danger-color)_ | - |
| --van-field-error-message-font-size | _12px_ | - |
| --van-field-text-area-min-height | _60px_ | - |
| --van-field-word-limit-color | _var(--van-gray-7)_ | - |
| --van-field-word-limit-font-size | _var(--van-font-size-sm)_ | - |
| --van-field-word-limit-line-height | _16px_ | - |
| --van-field-disabled-text-color | _var(--van-text-color-3)_ | - |
| --van-field-required-mark-color | _var(--van-red)_ | - |
