## Stepper

### Install
``` javascript
import { Stepper } from 'vant';

Vue.use(Stepper);
```

### Usage

#### Basic Usage

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

#### Disabled

```html
<van-stepper v-model="value" disabled />
```

#### Advanced Usage

```html
<van-stepper
  v-model="value"
  integer
  :min="5"
  :max="40"
  :step="2"
  :default-value="9"
/>
```

### API

| Attribute | Description | Type | Default |
|-----------|-----------|-----------|-------------|
| min | Min value | `String | Number` | `1` |
| max | Max value | `String | Number` | - |
| default-value | Default value | `String | Number` | `1` |
| step | Value change step | `String | Number` | `1` |
| integer | Whether to allow only integers | `Boolean` | `false` |
| disabled | Disable value change | `Boolean` | `false` |
| disable-input | Disable input | `Boolean` | `false` |

### Event

| Event | Description | Arguments |
|-----------|-----------|-----------|
| change | Triggered when value change | value: current value |
| overlimit | Triggered when click disabled button | - |
| plus | Triggered when click plus button | - |
| minus | Triggered when click minus button | - |