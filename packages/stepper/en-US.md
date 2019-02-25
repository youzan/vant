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

#### Async Change

```html
<van-stepper
  :value="value"
  async-change
  @change="onChange"
/>
```

```javascript
export default {
  data() {
    return {
      value: 1
    }
  },

  methods: {
    onChange(value) {
      setTimeout(() => {
        this.value = value;
      }, 500);
    }
  }
}
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
|------|------|------|------|
| v-model | Current value | `String | Number` | Min value |
| min | Min value | `String | Number` | `1` |
| max | Max value | `String | Number` | - |
| step | Value change step | `String | Number` | `1` |
| integer | Whether to allow only integers | `Boolean` | `false` |
| disabled | Disable value change | `Boolean` | `false` |
| disable-input | Disable input | `Boolean` | `false` |
| async-change | Whether to enable async change | `Boolean` | `false` | - |

### Event

| Event | Description | Arguments |
|------|------|------|
| change | Triggered when value change | value: current value |
| overlimit | Triggered when click disabled button | - |
| plus | Triggered when click plus button | - |
| minus | Triggered when click minus button | - |
| focus | Triggered when input focused | - |
| blur | Triggered when input blured | - |
