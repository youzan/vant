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
<van-slider 
  v-model="value"
  :min="10"
  :max="90"
/>
```

```js
export default {
  data() {
    return {
      value: 50
    };
  }
};
```

#### Disabled

```html
<van-slider v-model="value" disabled />
```

#### Event

```html
<van-slider
  v-model="value"
  @change="onChange"
  @after-change="onAfterChange"
/>
```

```js
export default {
  data() {
    return {
      value: 50
    }
  },

  methods: {
    onChange(value) {
      console.log('onChange:', value)
    },
    onAfterChange(value) {
      console.log('onAfterChange:', value)
    }
  }
};
```

### API

| Attribute | Description | Type | Default |
|-----------|-----------|-----------|-------------|-------------|
| value | Current value | `Number` | `0` |
| disabled | Whether to disable slider | `Boolean` | `false` |
| max | Max value | `Number` | `100` |
| min | Min value | `Number` | `0` |
| bar-height | Height of bar | `String` | `2px` |

### Event

| Event | Description | Arguments |
|-----------|-----------|-----------|
| change | Triggered after value change | value: current rate |
