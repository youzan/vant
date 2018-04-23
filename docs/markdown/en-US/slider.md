## Slider

### Install
``` javascript
import { Slider } from 'vant';

Vue.use(Slider);
```

### Usage
#### Basic Usage

```html
<van-slider v-model="value1"/>
<van-row>
  <van-col span="12">
    <van-stepper v-model="value1" />
  </van-col>
</van-row>
```

```js
data() {
  return {
    value1: 50
  }
}
```

#### Max && Min

```html
<van-slider 
  v-model="value2"
  :min="min"
  :max="max"
/>
```
```js
data() {
  return {
    value2: 50,
    min: 10,
    max: 90
  }
}
```

#### Disabed

```html
<van-slider v-model="value3" disabled />
```

#### Customized style

```html
<van-slider
    v-model="value4"
    @change="handleChange"
    @after-change="handleAfterChange"
  />
```

```js
data() {
  return {
    value4: 50
  }
},
methods: {
  handleChange(value) {
    console.log('handleChange:', value)
  },
  handleAfterChange(value) {
    console.log('handleAfterChange:', value)
  }
}
```

### Customized style

```html
<van-slider
  v-model="value5"
  pivot-color="#333"
  loaded-bar-color="red"
  bar-color="blue"
/>
```

### API

| Attribute | Description | Type | Default | Accepted Values |
|-----------|-----------|-----------|-------------|-------------|
| value | current value | Number  | 0 |  - |
| disabled | disabled | Boolean  | false |  - |
| bar-color | bar-color | string | `#cacaca` | - |
| loaded-bar-color | loaded-bar-color | string | `#4b0` | - |
| pivot-color | pivot-color | string  | `#4b0` |  - |
| max | max | Number | 100 | - |
| min | min | Number | 0 | - |

### Event

| Event | Description | Arguments |
|-----------|-----------|-----------|
| change | touchmove emit | value |
| after-change | touchend emit | value |
