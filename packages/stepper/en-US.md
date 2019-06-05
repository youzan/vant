# Stepper

### Install

``` javascript
import { Stepper } from 'vant';

Vue.use(Stepper);
```

## Usage

### Basic Usage

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

### Async Change

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
      if (this.changing) {
        return;
      }

      this.changing = true;
      setTimeout(() => {
        this.value = value;
        this.changing = false;
      }, 500);
    }
  }
}
```

## API

### Props

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
| input-width | Input width | `String | Number` | `30px` |

### Events

| Event | Description | Arguments |
|------|------|------|
| change | Triggered when value change | value: current value |
| overlimit | Triggered when click disabled button | - |
| plus | Triggered when click plus button | - |
| minus | Triggered when click minus button | - |
| focus | Triggered when input focused | - |
| blur | Triggered when input blured | - |
