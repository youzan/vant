# Slider

### Intro

Used to select a value within a given range.

### Install

Register component globally via `app.use`, refer to [Component Registration](#/en-US/advanced-usage#zu-jian-zhu-ce) for more registration ways.

```js
import { createApp } from 'vue';
import { Slider } from 'vant';

const app = createApp();
app.use(Slider);
```

## Usage

### Basic Usage

```html
<van-slider v-model="value" @change="onChange" />
```

```js
import { ref } from 'vue';
import { showToast } from 'vant';

export default {
  setup() {
    const value = ref(50);
    const onChange = (value) => showToast('Current value: ' + value);
    return {
      value,
      onChange,
    };
  },
};
```

### Dual thumb

Add `range` attribute to open dual thumb mode.

```html
<van-slider v-model="value" range @change="onChange" />
```

```js
import { ref } from 'vue';
import { showToast } from 'vant';

export default {
  setup() {
    // value must be an Array
    const value = ref([10, 50]);
    const onChange = (value) => showToast('Current value: ' + value);
    return {
      value,
      onChange,
    };
  },
};
```

### Range

```html
<van-slider v-model="value" :min="-50" :max="50" />
```

### Disabled

```html
<van-slider v-model="value" disabled />
```

### Step size

```html
<van-slider v-model="value" :step="10" />
```

### Custom style

```html
<van-slider v-model="value" bar-height="4px" active-color="#ee0a24" />
```

### Custom button

```html
<van-slider v-model="value">
  <template #button>
    <div class="custom-button">{{ value }}</div>
  </template>
</van-slider>

<style>
  .custom-button {
    width: 26px;
    color: #fff;
    font-size: 10px;
    line-height: 18px;
    text-align: center;
    background-color: var(--van-primary-color);
    border-radius: 100px;
  }
</style>
```

### Vertical

```html
<div :style="{ height: '150px' }">
  <van-slider v-model="value" vertical @change="onChange" />
  <van-slider
    v-model="value2"
    range
    vertical
    style="margin-left: 100px;"
    @change="onChange"
  />
</div>
```

```js
import { ref } from 'vue';
import { showToast } from 'vant';

export default {
  setup() {
    const value = ref(50);
    const value2 = ref([10, 50]);
    const onChange = (value) => showToast('Current value: ' + value);
    return {
      value,
      value2,
      onChange,
    };
  },
};
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| v-model | Current value | _number \| [number, number]_ | `0` |
| max | Max value | _number \| string_ | `100` |
| min | Min value | _number \| string_ | `0` |
| step | Step size | _number \| string_ | `1` |
| bar-height | Height of bar | _number \| string_ | `2px` |
| button-size | Button size | _number \| string_ | `24px` |
| active-color | Active color of bar | _string_ | `#1989fa` |
| inactive-color | Inactive color of bar | _string_ | `#e5e5e5` |
| range | Whether to enable dual thumb mode | _boolean_ | `false` |
| reverse `v3.2.1` | Whether to reverse slider | _boolean_ | `false` |
| disabled | Whether to disable slider | _boolean_ | `false` |
| readonly `v3.0.5` | Whether to be readonly | _boolean_ | `false` |
| vertical | Whether to display slider vertically | _boolean_ | `false` |

### Events

| Event              | Description                    | Arguments           |
| ------------------ | ------------------------------ | ------------------- |
| update:model-value | Emitted when value is changing | _value: number_     |
| change             | Emitted after value changed    | _value: number_     |
| drag-start         | Emitted when start dragging    | _event: TouchEvent_ |
| drag-end           | Emitted when end dragging      | _event: TouchEvent_ |

### Slots

| Name | Description | SlotProps |
| --- | --- | --- |
| button | Custom button | _{ value: number }_ |
| left-button `v3.1.3` | Custom left button in range mode | _{ value: number }_ |
| right-button `v3.1.3` | Custom right button in range mode | _{ value: number }_ |

### Types

The component exports the following type definitions:

```ts
import type { SliderProps } from 'vant';
```

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/config-provider).

| Name | Default Value | Description |
| --- | --- | --- |
| --van-slider-active-background | _var(--van-primary-color)_ | - |
| --van-slider-inactive-background | _var(--van-gray-3)_ | - |
| --van-slider-disabled-opacity | _var(--van-disabled-opacity)_ | - |
| --van-slider-bar-height | _2px_ | - |
| --van-slider-button-width | _24px_ | - |
| --van-slider-button-height | _24px_ | - |
| --van-slider-button-radius | _50%_ | - |
| --van-slider-button-background | _var(--van-white)_ | - |
| --van-slider-button-shadow | _0 1px 2px rgba(0, 0, 0, 0.5)_ | - |
