## Stepper

### Install
``` javascript
import { Stepper } from 'vant';

Vue.component(Stepper.name, Stepper);
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
  min="5"
  max="40"
  step="2"
  defaultValue="9"
/>
```

### API

| Attribute | Description | Type | Default | Accepted Values |
|-----------|-----------|-----------|-------------|-------------|
| min | Min value | `String | Number` | `1` | - |
| max | Max value | `String | Number` | - | - |
| defaultValue | Default value | `String | Number` | `1` | - |
| step | Value change step | `String | Number` | `1` | - |
| disabled | Disable value change | `Boolean` | `false` | - | 
| disableInput | Disable input | `Boolean` | `false` | - |

### Event

| Event | Description | Arguments |
|-----------|-----------|-----------|
| change | Triggered when value change | value: current value |
| overlimit | Triggered when click disabled button | - |
| plus | Triggered when click plus button | - |
| minus | Triggered when click minus button | - |