## Field

### Install
``` javascript
import { Field } from 'vant';

Vue.use(Field);
```

### Usage

#### Basic Usage
The value of field is bound with v-model.

```html
<van-cell-group>
  <van-field v-model="value" placeholder="Username" />
</van-cell-group>
```

#### Custom type
Use `type` prop to custom diffrent type fields.

```html
<van-cell-group>
  <van-field
    v-model="username"
    required
    clearable
    label="Username"
    icon="question"
    placeholder="Username"
    @click-icon="$toast('question')"
  />

  <van-field
    v-model="password"
    type="password"
    label="Password"
    placeholder="Password"
    required
  />
</van-cell-group>
```

#### Disabled

```html
<van-cell-group>
  <van-field
    value="Disabled"
    label="Username"
    left-icon="contact"
    disabled
  />
</van-cell-group>
```

#### Error info
Use `error` or `error-message` to show error info

```html
<van-cell-group>
  <van-field
    v-model="username"
    label="Username"
    placeholder="Username"
    error
  />
  <van-field
    v-model="phone"
    label="Phone"
    placeholder="Phone"
    error-message="Invalid phone"
  />
</van-cell-group>
```

#### Auto resize
Textarea Field can be auto resize when has `autosize` prop

```html
<van-cell-group>
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

#### Insert button
Use button slot to insert button

```html
<van-cell-group>
  <van-field
    v-model="sms"
    center
    clearable
    label="SMS"
    placeholder="SMS"
  >
    <van-button slot="button" size="small" type="primary">Send SMS</van-button>
  </van-field>
</van-cell-group>
```

### API

Field support all native properties of input tag，such as `maxlength`、`placeholder`、`autofocus`

| Attribute | Description | Type | Default |
|-----------|-----------|-----------|-------------|
| value | Field value | `String | Number` | - |
| label | Field label | `String` | - |
| type | Input type | `String` | `text` |
| border | Whether to show inner border | `Boolean` | `true` |
| disabled | Whether to disable field | `Boolean` | `false` |
| readonly | Whether to be readonly | `Boolean` | `false` |
| clearable | Whether to be clearable | `Boolean` | `false` |
| required | Whether to show required mark | `Boolean` | `false` 
| is-link | Whether to show link icon | `Boolean` | `false` |
| error | Whether to show error info | `Boolean` | `false` |
| error-message | Error message | `String` | `''` |
| label-align | Label text align, can be set to `center` `right` | `String` | `left` |
| input-align | Input text align, can be set to `center` `right` | `String` | `left` |
| autosize | Textarea auto resize，can accpet an object,<br>e.g. { maxHeight: 100, minHeight: 50 } | `Boolean | Object` | `false` |
| icon | Right side icon name | `String` | - |
| left-icon | Left side icon name | `String` | - |

### Event

Field support all native events of input tag，such as `focus`、`blur`、`keypress`

| Event | Description | Parameters |
|-----------|-----------|-----------|
| click-icon | Triggered when click the icon of Field | - |

### Methods

Use ref to get field instance and call instance methods

| Name | Attribute | Return value | Description |
|-----------|-----------|-----------|-------------|
| blur | - | - | Trigger input blur |

### Slot

| name | Description |
|-----------|-----------|
| label | Custom label |
| icon | Custom icon |
| button | Insert button |
