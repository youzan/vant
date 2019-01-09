## Circle

### Install
``` javascript
import { Circle } from 'vant';

Vue.use(Circle);
```

### Usage

#### Basic Usage

```html
<van-circle
  v-model="currentRate"
  :rate="30"
  :speed="100"
  :text="text"
/>
```

``` javascript
export default {
  data() {
    return {
      currentRate: 0
    };
  },
  computed: {
    text() {
      return this.currentRate.toFixed(0) + '%'
    }
  }
};
```

#### Custom style

```html
<van-circle
  v-model="currentRate"
  color="#07c160"
  fill="#fff"
  size="120px"
  layer-color="#ebedf0"
  :text="text"
  :rate="rate"
  :speed="100"
  :clockwise="false"
  :stroke-width="60"
/>
```


### API

| Attribute | Description | Type | Default |
|------|------|------|------|
| v-model | Current rate | `Number` | - |
| rate | Target rate | `Number` | `100` |
| size | Circle size | `String` | `100px` |
| color | Progress bar color | `String` | `#1989fa` |
| layer-color | Layer color | `String` | `#fff` |
| fill | Fill color | `String` | `none` |
| speed | Animate speed（rate/s）| `Number` | - |
| text | Text | `String` | - |
| stroke-width | Stroke width | `Number` | `40` |
| clockwise | Is clockwise | `Boolean` | `true` |

### Cell Slot

| name | Description |
|------|------|
| - | custom text content |
