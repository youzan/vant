# Circle

### Install

```js
import { createApp } from 'vue';
import { Circle } from 'vant';

const app = createApp();
app.use(Circle);
```

## Usage

### Basic Usage

```html
<van-circle
  v-model:current-rate="currentRate"
  :rate="30"
  :speed="100"
  :text="text"
/>
```

```js
export default {
  data() {
    return {
      currentRate: 0,
    };
  },
  computed: {
    text() {
      return this.currentRate.toFixed(0) + '%';
    },
  },
};
```

### Custom Width

```html
<van-circle
  v-model:current-rate="currentRate"
  :rate="rate"
  :stroke-width="60"
  text="Custom Width"
/>
```

### Custom Color

```html
<van-circle
  v-model:current-rate="currentRate"
  :rate="rate"
  layer-color="#ebedf0"
  text="Custom Color"
/>
```

### Gradient

```html
<van-circle
  v-model:current-rate="currentRate"
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
        '100%': '#6149f6',
      },
    };
  },
};
```

### Counter Clockwise

```html
<van-circle
  v-model:current-rate="currentRate"
  :rate="rate"
  :clockwise="false"
  text="Counter Clockwise"
/>
```

### Custom Size

```html
<van-circle
  v-model:current-rate="currentRate"
  :rate="rate"
  size="120px"
  text="Custom Size"
/>
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| v-model:current-rate | Current rate | _number_ | - |
| rate | Target rate | _number \| string_ | `100` |
| size | Circle size | _number \| string_ | `100px` |
| color | Progress color, passing object to render gradient | _string \| object_ | `#1989fa` |
| layer-color | Layer color | _string_ | `white` |
| fill | Fill color | _string_ | `none` |
| speed | Animate speed（rate/s） | _number \| string_ | `0` |
| text | Text | _string_ | - |
| stroke-width | Stroke width | _number \| string_ | `40` |
| stroke-linecap | Stroke linecap，can be set to `sqaure` `butt` | _string_ | `round` |
| clockwise | Whether to be clockwise | _boolean_ | `true` |

### Slots

| Name    | Description         |
| ------- | ------------------- |
| default | custom text content |
