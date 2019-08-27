# Circle

### Install

``` javascript
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

``` javascript
export default {
  data() {
    return {
      currentRate: 0,
      gradientColor: {
        '0%': '#ffd01e',
        '100%': '#ee0a24'
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

| Attribute | Description | Type | Default | Version |
|------|------|------|------|------|
| v-model | Current rate | *number* | - | - |
| rate | Target rate | *number* | `100` | - |
| size | Circle size | *string \| number* | `100px` | - |
| color | Progress color, passing object to render gradient | *string \| object* | `#1989fa` | 2.1.4 |
| layer-color | Layer color | *string* | `#fff` | - |
| fill | Fill color | *string* | `none` | - |
| speed | Animate speed（rate/s）| *number* | `0` | - |
| text | Text | *string* | - | - |
| stroke-width | Stroke width | *number* | `40` | - |
| clockwise | Is clockwise | *boolean* | `true` | - |

### Slots

| Name | Description |
|------|------|
| default | custom text content |
