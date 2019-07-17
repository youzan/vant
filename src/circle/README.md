# Circle

### Install
``` javascript
import { Circle } from 'vant';

Vue.use(Circle);
```

## Usage

### Basic Usage

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

### Custom style

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

## API

### Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| v-model | Current rate | `number` | - |
| rate | Target rate | `number` | `100` |
| size | Circle size | `string` | `100px` |
| color | Progress bar color | `string` | `#1989fa` |
| layer-color | Layer color | `string` | `#fff` |
| fill | Fill color | `string` | `none` |
| speed | Animate speed（rate/s）| `number` | `0` |
| text | Text | `string` | - |
| stroke-width | Stroke width | `number` | `40` |
| clockwise | Is clockwise | `boolean` | `true` |

### Slots

| Name | Description |
|------|------|
| default | custom text content |
