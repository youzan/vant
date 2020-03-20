# Slider

### Install

```js
import Vue from 'vue';
import { Slider } from 'vant';

Vue.use(Slider);
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
      value: 50
    };
  },
  methods: {
    onChange(value) {
      Toast('Current value：' + value);
    }
  }
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
<van-slider
  v-model="value"
  bar-height="4px"
  active-color="#ee0a24"
/>
```

### Custom button

```html
<van-slider v-model="value" active-color="#ee0a24">
  <template #button>
    <div class="custom-button">
      {{ value }}
    </div>
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
<div :style="{ height: '100px' }">
  <van-slider v-model="value" vertical />
</div>
```

## API

### Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| value | Current value | *number* | `0` |
| max | Max value | *number \| string* | `100` |
| min | Min value | *number \| string* | `0` |
| step | Step size | *number \| string* | `1` |
| bar-height | Height of bar | *number \| string* | `2px` |
| button-size `v2.4.5` | Button size | *number \| string* | `24px` |
| active-color | Active color of bar | *string* | `#1989fa` |
| inactive-color | Inactive color of bar | *string* | `#e5e5e5` |
| disabled | Whether to disable slider | *boolean* | `false` |
| vertical | Whether to display slider vertically | *boolean* | `false` |

### Events

| Event | Description | Arguments |
|------|------|------|
| input | Instant triggered when value changed | value: current rate |
| change | Triggered after value changed | value: current rate |
| drag-start | Triggered when start drag | - |
| drag-end | Triggered when end drag | - |

### Slots

| Name | Description |
|------|------|
| button | Custom button |
