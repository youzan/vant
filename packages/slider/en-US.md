## Slider

### Install
``` javascript
import { Slider } from 'vant';

Vue.use(Slider);
```

### Usage
#### Basic Usage

```html
<van-slider v-model="value" @change="onChange" />
```

```js
export default {
  data() {
    return {
      value: 50
    };
  },

  methods: {
    onChange(value) {
      this.$toast('Current value：' + value);
    }
  }
};
```

#### Range

```html
<van-slider v-model="value" :min="10" :max="90" />
```

#### Disabled

```html
<van-slider v-model="value" disabled />
```

#### Step size

```html
<van-slider v-model="value" :step="10" bar-height="4px" />
```

### API

| Attribute | Description | Type | Default |
|------|------|------|------|------|
| value | Current value | `Number` | `0` |
| disabled | Whether to disable slider | `Boolean` | `false` |
| max | Max value | `Number` | `100` |
| min | Min value | `Number` | `0` |
| step | Step size | `Number` | `1` |
| bar-height | Height of bar | `String` | `2px` |

### Event

| Event | Description | Arguments |
|------|------|------|
| change | Triggered after value change | value: current rate |
