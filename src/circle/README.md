# Circle

### Install

```js
import Vue from 'vue';
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

```js
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

### Custom Width

```html
<van-circle
  v-model="currentRate"
  :rate="rate"
  :stroke-width="60"
  text="Custom Width"
/>
```

### Custom Color

```html
<van-circle
  v-model="currentRate"
  :rate="rate"
  layer-color="#ebedf0"
  text="Custom Color"
/>
```

### Gradient

```html
<van-circle
  v-model="currentRate"
  :rate="rate"
  :color="gradientColor"
  text="Gradient"
/>
```

```js
export default {
  data() {
    return {
      currentRate: 0,
      gradientColor: {
        '0%': '#3fecff',
        '100%': '#6149f6'
      }
    };
  }
};
```

### Counter Clockwise

```html
<van-circle
  v-model="currentRate"
  :rate="rate"
  :clockwise="false"
  text="Counter Clockwise"
/>
```

### Custom Size

```html
<van-circle
  v-model="currentRate"
  :rate="rate"
  size="120px"
  text="Custom Size"
/>
```

## API

### Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| v-model | Current rate | *number* | - |
| rate | Target rate | *number \| string* | `100` |
| size | Circle size | *number \| string* | `100px` |
| color `v2.1.4` | Progress color, passing object to render gradient | *string \| object* | `#1989fa` |
| layer-color | Layer color | *string* | `white` |
| fill | Fill color | *string* | `none` |
| speed | Animate speed（rate/s）| *number \| string* | `0` |
| text | Text | *string* | - |
| stroke-width | Stroke width | *number \| string* | `40` |
| stroke-linecap `v2.2.15` | Stroke linecap，can be set to `sqaure` `butt` | *string* | `round` |
| clockwise | Whether to be clockwise | *boolean* | `true` |

### Slots

| Name | Description |
|------|------|
| default | custom text content |
