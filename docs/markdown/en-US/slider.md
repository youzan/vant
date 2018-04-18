## Slider

### Usage
``` javascript
import { Slider } from 'vant';

Vue.use(Slider);
```

#### Events

```html
<van-slider :value="50" @change="handleChange"
  @after-change="handleAfterChange"></van-slider>
```

```js
methods: {
  handleChange(value) {
    console.log('handleChange:', value)
  },
  handleAfterChange(value) {
    console.log('handleAfterChange:', value)
  }
}
```

#### Disabled

```html
<van-slider :value="50" disabled></van-slider>
```
### Customized style

```html
<van-slider :value="50"
  pivot-color="#333"
  loaded-bar-color="red"
  bar-color="blue"></van-slider>
```

### API

| Attribute | Description | Type | Default | Accepted Values |
|-----------|-----------|-----------|-------------|-------------|
| value | current value | Number  | 0 |  - |
| disabled | disabled | Boolean  | false |  - |
| bar-color | bar-color | string | `#cacaca` | - |
| loaded-bar-color | loaded-bar-color | string | `#4b0` | - |
| pivot-color | pivot-color | string  | `#4b0` |  - |

### Event

| Event | Description | Arguments |
|-----------|-----------|-----------|
| change | touchmove emit | value |
| after-change | touchend emit | value |
