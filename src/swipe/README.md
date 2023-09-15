# Swipe

### Install

```js
import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';

Vue.use(Swipe);
Vue.use(SwipeItem);
```

## Usage

### Basic Usage

Use `autoplay` prop to set autoplay interval.

```html
<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
  <van-swipe-item>1</van-swipe-item>
  <van-swipe-item>2</van-swipe-item>
  <van-swipe-item>3</van-swipe-item>
  <van-swipe-item>4</van-swipe-item>
</van-swipe>

<style>
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
</style>
```

### Image Lazyload

Use [Lazyload](#/en-US/lazyload) component to lazyload image.

```html
<van-swipe>
  <van-swipe-item v-for="(image, index) in images" :key="index">
    <img v-lazy="image" />
  </van-swipe-item>
</van-swipe>
```

```js
import Vue from 'vue';
import { Lazyload } from 'vant';

Vue.use(Lazyload);

export default {
  data() {
    return {
      images: [
        'https://img01.yzcdn.cn/vant/apple-1.jpg',
        'https://img01.yzcdn.cn/vant/apple-2.jpg',
      ],
    };
  },
};
```

### Change Event

```html
<van-swipe @change="onChange">
  <van-swipe-item>1</van-swipe-item>
  <van-swipe-item>2</van-swipe-item>
  <van-swipe-item>3</van-swipe-item>
  <van-swipe-item>4</van-swipe-item>
</van-swipe>
```

```js
import { Toast } from 'vant';

export default {
  methods: {
    onChange(index) {
      Toast('Current Swipe index:' + index);
    },
  },
};
```

### Vertical Scrolling

```html
<van-swipe :autoplay="3000" vertical>
  <van-swipe-item>1</van-swipe-item>
  <van-swipe-item>2</van-swipe-item>
  <van-swipe-item>3</van-swipe-item>
  <van-swipe-item>4</van-swipe-item>
</van-swipe>
```

### Set SwipeItem Size

```html
<van-swipe :loop="false" :width="300">
  <van-swipe-item>1</van-swipe-item>
  <van-swipe-item>2</van-swipe-item>
  <van-swipe-item>3</van-swipe-item>
  <van-swipe-item>4</van-swipe-item>
</van-swipe>
```

> It's not supported to set SwipeItem size in the loop mode.

### Custom Indicator

```html
<van-swipe @change="onChange">
  <van-swipe-item>1</van-swipe-item>
  <van-swipe-item>2</van-swipe-item>
  <van-swipe-item>3</van-swipe-item>
  <van-swipe-item>4</van-swipe-item>
  <template #indicator>
    <div class="custom-indicator">{{ current + 1 }}/4</div>
  </template>
</van-swipe>

<style>
  .custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.1);
  }
</style>
```

```js
export default {
  data() {
    return {
      current: 0,
    };
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
  },
};
```

## API

### Swipe Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| autoplay | Autoplay interval (ms) | _number \| string_ | - |
| duration | Animation duration (ms) | _number \| string_ | `500` |
| initial-swipe | Index of initial swipe, start from 0 | _number \| string_ | `0` |
| width | Set Swiper Item Width | _number \| string_ | `0` |
| height | Set Swiper Item Height | _number \| string_ | `0` |
| loop | Whether to enable loop | _boolean_ | `true` |
| show-indicators | Whether to show indicators | _boolean_ | `true` |
| vertical | Whether to be vertical Scrolling | _boolean_ | `false` |
| touchable | Whether to allow swipe by touch gesture | _boolean_ | `true` |
| stop-propagation | Whether to stop touchmove event propagation | _boolean_ | `false` |
| lazy-render `v2.5.8` | Whether to enable lazy render | _boolean_ | `false` |
| indicator-color | Indicator color | _string_ | `#1989fa` |

### Swipe Events

| Event  | Description                        | Arguments                     |
| ------ | ---------------------------------- | ----------------------------- |
| change | Emitted when current swipe changed | index: index of current swipe |

### SwipeItem Events

| Event | Description                       | Arguments      |
| ----- | --------------------------------- | -------------- |
| click | Emitted when component is clicked | _event: Event_ |

### Swipe Methods

Use [ref](https://vuejs.org/v2/api/#ref) to get Swipe instance and call instance methods..

| Name | Description | Attribute | Return value |
| --- | --- | --- | --- |
| prev | Swipe to prev item | - | - |
| next | Swipe to next item | - | - |
| swipeTo | Swipe to target index | index: target index, options: Options | - |
| resize | Resize Swipe when container element resized or visibility changed | - | - |

### swipeTo Options

| Name      | Description               | Type      |
| --------- | ------------------------- | --------- |
| immediate | Whether to skip animation | _boolean_ |

### Swipe Slots

| Name      | Description      |
| --------- | ---------------- |
| default   | Content          |
| indicator | Custom indicator |

### Less Variables

How to use: [Custom Theme](#/en-US/theme).

| Name                                       | Default Value   | Description |
| ------------------------------------------ | --------------- | ----------- |
| @swipe-indicator-size                      | `6px`           | -           |
| @swipe-indicator-margin                    | `@padding-sm`   | -           |
| @swipe-indicator-active-opacity            | `1`             | -           |
| @swipe-indicator-inactive-opacity          | `0.3`           | -           |
| @swipe-indicator-active-background-color   | `@blue`         | -           |
| @swipe-indicator-inactive-background-color | `@border-color` | -           |
