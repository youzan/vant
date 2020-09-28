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
import { Toast } from 'vant';

export default {
  data() {
    return {
      value: 50,
    };
  },
  methods: {
    onChange(value) {
      Toast('Current value：' + value);
    },
  },
};
```

### Dual thumb

Add `range` attribute to open dual thumb mode.

```html
<van-slider v-model="value" range @change="onChange" />
```

```js
import { Toast } from 'vant';

export default {
  data() {
    return {
      // value must be an Array
      value: [10, 50],
    };
  },
  methods: {
    onChange(value) {
      Toast('current value：' + value);
    },
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
import { Toast } from 'vant';

export default {
  data() {
    return {
      value: 50,
      value2: [10, 50],
    };
  },
  methods: {
    onChange(value) {
      Toast('Current value：' + value);
    },
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

| Event      | Description                          | Arguments           |
| ---------- | ------------------------------------ | ------------------- |
| input      | Instant triggered when value changed | value: current rate |
| change     | Triggered after value changed        | value: current rate |
| drag-start | Triggered when start drag            | -                   |
| drag-end   | Triggered when end drag              | -                   |

### Slots

| Name   | Description   |
| ------ | ------------- |
| button | Custom button |
