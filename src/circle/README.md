# Circle

### Intro

Circular progress bar component, and supports gradient color animation.

### Install

Register component globally via `app.use`, refer to [Component Registration](#/en-US/advanced-usage#zu-jian-zhu-ce) for more registration ways.

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
import { ref, computed } from 'vue';

export default {
  setup() {
    const currentRate = ref(0);
    const text = computed(() => currentRate.value.toFixed(0) + '%');

    return {
      text,
      currentRate,
    };
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
import { ref } from 'vue';

export default {
  setup() {
    const currentRate = ref(0);
    const gradientColor = {
      '0%': '#3fecff',
      '100%': '#6149f6',
    };

    return {
      currentRate,
      gradientColor,
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

### Start Position

```html
<van-circle
  v-model:current-rate="currentRate"
  :rate="rate"
  :text="Left"
  start-position="left"
/>
<van-circle
  v-model:current-rate="currentRate"
  :rate="rate"
  text="Right"
  start-position="right"
/>
<van-circle
  v-model:current-rate="currentRate"
  :rate="rate"
  text="Bottom"
  start-position="bottom"
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
| stroke-linecap | Stroke linecap，can be set to `square` `butt` | _string_ | `round` |
| clockwise | Whether to be clockwise | _boolean_ | `true` |
| start-position `v3.2.1` | Progress start position，can be set to `left`、`right`、`bottom` | _CircleStartPosition_ | `top` |

### Slots

| Name    | Description         |
| ------- | ------------------- |
| default | custom text content |

### Types

The component exports the following type definitions:

```ts
import type { CircleStartPosition } from 'vant';
```

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/config-provider).

| Name                          | Default Value                 | Description |
| ----------------------------- | ----------------------------- | ----------- |
| --van-circle-size             | _100px_                       | -           |
| --van-circle-color            | _var(--van-primary-color)_    | -           |
| --van-circle-layer-color      | _var(--van-white)_            | -           |
| --van-circle-text-color       | _var(--van-text-color)_       | -           |
| --van-circle-text-font-weight | _var(--van-font-weight-bold)_ | -           |
| --van-circle-text-font-size   | _var(--van-font-size-md)_     | -           |
| --van-circle-text-line-height | _var(--van-line-height-md)_   | -           |
