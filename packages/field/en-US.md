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
    label="Username"
    icon="clear"
    placeholder="Username"
    required
    @click-icon="username = ''"
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
    center
    v-model="sms"
    label="SMS"
    placeholder="SMS"
    icon="clear"
    @click-icon="sms = ''"
  >
    <van-button slot="button" size="small" type="primary">Send SMS</van-button>
  </van-field>
</van-cell-group>
```

### API

Field support all native properties of input tag，such as `maxlength`、`placeholder`、`readonly`、`autofocus`

| Attribute | Description | Type | Default |
|-----------|-----------|-----------|-------------|
| value | Field value | `String | Number` | - |
| label | Field label | `String` | - |
| type | Input type | `String` | `text` |
| disabled | Disable field | `Boolean` | `false` |
| error | Whether to show error info | `Boolean` | `false` |
| error-message | Error message | `String` | `''` |
| autosize | Textarea auto resize，can accpet an object, e.g. { maxHeight: 100, minHeight: 50 } | `Boolean | Object` | `false` |
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
