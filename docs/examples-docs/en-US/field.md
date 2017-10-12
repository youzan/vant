<style>
.demo-field {
  padding-bottom: 30px;
}
</style>

<script>
export default {
  data() {
    return {
      value: '',
      password: '',
      username: '',
      message: ''
    };
  }
};
</script>

## Field

### Install
``` javascript
import { Field } from 'vant';

Vue.component(Field.name, Field);
```

### Usage

#### Basic Usage
The value of filed is bound with v-model.

:::demo Basic Usage
```html
<van-cell-group>
  <van-field v-model="value" placeholder="Username"></van-field>
</van-cell-group>
```
:::

#### Custom Type
Use `type` prop to custom diffrent type fileds.

:::demo Custom Type
```html
<van-cell-group>
  <van-field
    v-model="username"
    label="Username"
    icon="clear"
    placeholder="Username"
    required
    @click-icon="username = ''"
  >
  </van-field>

  <van-field
    v-model="password"
    type="password"
    label="Password"
    placeholder="Password"
    required>
  </van-field>
</van-cell-group>
```
:::

#### Disabled

:::demo Disabled
```html
<van-cell-group>
  <van-field value="Disabled" label="Username" disabled></van-field>
</van-cell-group>
```
:::

#### ErrorInfo

:::demo ErrorInfo
```html
<van-cell-group>
  <van-field label="Username" placeholder="Username" error></van-field>
</van-cell-group>
```
:::

#### Auto resize
Textarea Filed can be auto resize when has `autosize` prop.

:::demo Auto resize
```html
<van-cell-group>
  <van-field
    v-model="message"
    label="Message"
    type="textarea"
    placeholder="Message"
    rows="1"
    autosize
  >
  </van-field>
</van-cell-group>
```
:::

### API

| Attribute | Description | Type | Default | Accepted Values |
|-----------|-----------|-----------|-------------|-------------|
| type | Filed type | `String`  | `text` | `number` `email` <br> `textarea` `tel` <br> `datetime` `date` <br> `password` `url` |
| value | Filed value | `String`  | - | - |
| label | Filed label | `String`  | - | - |
| disabled | Disable field  | `Boolean`  | `false` | - |
| error | Whether to show error info | `Boolean`  | `false` | - |
| autosize | Textarea auto resize | `Boolean`  | `false` | - |
| icon | Right side Icon name | `String`  | - | - |

### Event

| Event | Description | Parameters |
|-----------|-----------|-----------|
| focus | Triggered when filed get focused | - |
| blur | Triggered when blur filed | - |
| click-icon | Triggered when click the icon of filed | - |

### Slot

| name | Description |
|-----------|-----------|
| icon | Custom icon |
