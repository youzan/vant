# Slider

### Install

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
import { Toast } from 'vant';

export default {
  setup() {
    const value = ref(50);
    const onChange = (value) => {
      Toast('Current value: ' + value);
    };
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
import { Toast } from 'vant';

export default {
  setup() {
    // value must be an Array
    const value = ref([10, 50]);
    const onChange = (value) => {
      Toast('Current value: ' + value);
    };
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
<van-slider v-model="value" active-color="#ee0a24">
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
    background-color: #ee0a24;
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
import { Toast } from 'vant';

export default {
  setup() {
    const value = ref(50);
    const value2 = ref([10, 50]);
    const onChange = (value) => {
      Toast('Current value: ' + value);
    };
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
| value | Current value | _number \| array_ | `0` |
| max | Max value | _number \| string_ | `100` |
| min | Min value | _number \| string_ | `0` |
| step | Step size | _number \| string_ | `1` |
| bar-height | Height of bar | _number \| string_ | `2px` |
| button-size `v2.4.5` | Button size | _number \| string_ | `24px` |
| active-color | Active color of bar | _string_ | `#1989fa` |
| inactive-color | Inactive color of bar | _string_ | `#e5e5e5` |
| range | Whether to enable dual thumb mode | _boolean_ | `false` |
| disabled | Whether to disable slider | _boolean_ | `false` |
| vertical | Whether to display slider vertically | _boolean_ | `false` |

### Events

| Event              | Description                    | Arguments           |
| ------------------ | ------------------------------ | ------------------- |
| update:model-value | Emitted when value is changing | value: current rate |
| change             | Emitted after value changed    | value: current rate |
| drag-start         | Emitted when start draging     | -                   |
| drag-end           | Emitted when end draging       | -                   |

### Slots

| Name   | Description   |
| ------ | ------------- |
| button | Custom button |

### Less Variables

How to use: [Custom Theme](#/en-US/theme).

| Name | Default Value | Description |
| --- | --- | --- |
| @slider-active-background-color | `@blue` | - |
| @slider-inactive-background-color | `@gray-3` | - |
| @slider-disabled-opacity | `@disabled-opacity` | - |
| @slider-bar-height | `2px` | - |
| @slider-button-width | `24px` | - |
| @slider-button-height | `24px` | - |
| @slider-button-border-radius | `50%` | - |
| @slider-button-background-color | `@white` | - |
| @slider-button-box-shadow | `0 1px 2px rgba(0, 0, 0, 0.5)` | - |
