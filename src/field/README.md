# Field

### Install

```js
import Vue from 'vue';
import { Field } from 'vant';

Vue.use(Field);
```

## Usage

### Basic Usage

The value of field is bound with v-model.

```html
<van-cell-group>
  <van-field v-model="value" placeholder="Text" />
</van-cell-group>
```

```js
export default {
  data() {
    return {
      value: ''
    };
  }
}
```

### Custom Type

Use `type` prop to custom different type fields.

```html
<van-field v-model="text" label="Text" />
<van-field v-model="tel" type="tel" label="Phone" />
<van-field v-model="digit" type="digit" label="Digit" />
<van-field v-model="number" type="number" label="Number" />
<van-field v-model="password" type="password" label="Password" />
```

```js
export default {
  data() {
    return {
      tel: '',
      text: '',
      digit: '',
      number: '',
      password: ''
    };
  }
}
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
export default {
  data() {
    return {
      value1: '',
      value2: '123'
    };
  }
};
```

### Error Info

Use `error` or `error-message` to show error info

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

Use button slot to insert button

```html
<van-field
  v-model="sms"
  center
  clearable
  label="SMS"
  placeholder="SMS"
>
  <template #button>
    <van-button size="small" type="primary">Send SMS</van-button>
  </template>
</van-field>
```

### Format Value

Use `formatter` prop to format the input value

```html
<van-field
  v-model="value"
  label="Text"
  :formatter="formatter"
  placeholder="Format Value"
/>
```

```js
export default {
  data() {
    return {
      value: ''
    };
  },
  methods: {
    formatter(value) {
      return value.replace(/\d/g, '');
    }
  }
}
```

### Auto Resize

Textarea Field can be auto resize when has `autosize` prop

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

Use `input-align` prop to align the input value

```html
<van-field
  v-model="value"
  :label="Text"
  :placeholder="Input Align Right"
  input-align="right"
/>
```

## API

### Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| v-model (value) | Field value | *number \| string* | - |
| label | Field label | *string* | - |
| name `v2.5.0` | Name | *string* | - |
| type | Input type, can be set to `tel` `digit`<br>`number` `textarea` `password` | *string* | `text` |
| size | Size，can be set to `large` | *string* | - |
| maxlength | Max length of value | *number \| string* | - |
| placeholder | Placeholder | *string* | - |
| border | Whether to show inner border | *boolean* | `true` |
| disabled | Whether to disable field | *boolean* | `false` |
| readonly | Whether to be readonly | *boolean* | `false` |
| required | Whether to show required mark | *boolean* | `false` |
| clearable | Whether to be clearable | *boolean* | `false` |
| clickable | Whether to show click feedback when clicked | *boolean* | `false` |
| is-link | Whether to show link icon | *boolean* | `false` |
| autofocus | Whether to auto focus, unsupported in iOS | *boolean* | `false` |
| show-word-limit `v2.2.8` | Whether to show word limit, need to set the `maxlength` prop | *boolean* | `false` |
| error | Whether to show error info | *boolean* | `false` |
| error-message | Error message | *string* | - |
| formatter `v2.4.2` | Input value formatter | *Function* | - |
| arrow-direction `v2.0.4` | Can be set to `left` `up` `down` | *string* | `right` |
| label-class | Label className | *any* | - |
| label-width | Label width | *number \| string* | `90px` |
| label-align | Label align, can be set to `center` `right` | *string* | `left` |
| input-align | Input align, can be set to `center` `right` | *string* | `left` |
| error-message-align | Error message align, can be set to `center` `right` | *string* | `left` |
| autosize | Textarea auto resize，can accpet an object,<br>e.g. { maxHeight: 100, minHeight: 50 } | *boolean \| object* | `false` |
| left-icon | Left side icon name | *string* | - |
| right-icon | Right side icon name | *string* | - |
| icon-prefix `v2.5.3` | Icon className prefix | *string* | `van-icon` |
| rules `v2.5.0` | Form validation rules | *Rule[]* | - |

### Events

Field support all native events of input tag

| Event | Description | Parameters |
|------|------|------|
| input | Triggered when input value changed | *value: string* |
| focus | Triggered when input gets focus | *event: Event* |
| blur | Triggered when input loses focus | *event: Event* |
| clear | Triggered when click clear icon | *event: Event* |
| click | Triggered when click Field | *event: Event* |
| click-left-icon | Triggered when click the left icon of Field | *event: Event* |
| click-right-icon | Triggered when click the right icon of Field | *event: Event* |

### Methods

Use [ref](https://vuejs.org/v2/api/#ref) to get Field instance and call instance methods

| Name | Description | Attribute | Return value |
|------|------|------|------|
| focus | Trigger input focus | - | - |
| blur | Trigger input blur | - | - |

### Slots

| Name | Description |
|------|------|
| label | Custom label |
| input | Custom input |
| left-icon | Custom left icon |
| right-icon | Custom right icon |
| button | Insert button |
