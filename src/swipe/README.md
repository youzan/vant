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

Use `autoplay` prop to set autoplay interval

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

Use [Lazyload](#/en-US/lazyload) component to lazyload image

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
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg'
      ]
    }
  }
}
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
    }
  }
}
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

> It's not supported to set SwipeItem size in the loop mode

### Custom Indicator

```html
<van-swipe @change="onChange">
  <van-swipe-item>1</van-swipe-item>
  <van-swipe-item>2</van-swipe-item>
  <van-swipe-item>3</van-swipe-item>
  <van-swipe-item>4</van-swipe-item>
  <template #indicator>
    <div class="custom-indicator">
      {{ current + 1 }}/4
    </div>
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
      current: 0
    }
  },
  methods: {
    onChange(index) {
      this.current = index;
    }
  }
}
```

## API

### Swipe Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| autoplay | Autoplay interval (ms) | *number \| string* | - |
| duration | Animation duration (ms) | *number \| string* | `500` |
| initial-swipe | Index of initial swipe, start from 0 | *number \| string* | `0` |
| width | Set Swiper Item Width | *number \| string* | `0` |
| height | Set Swiper Item Height | *number \| string* | `0` |
| loop | Whether to enable loop | *boolean* | `true` |
| show-indicators | Whether to show indicators | *boolean* | `true` |
| vertical | Whether to be vertical Scrolling | *boolean* | `false` |
| touchable | Whether to allow swipe by touch gesture | *boolean* | `true` |
| stop-propagation `v2.1.0` | Whether to stop touchmove event propagation | *boolean* | `false` |
| lazy-render `v2.5.8` | Whether to enable lazy render | *boolean* | `false` |
| indicator-color | Indicator color | *string* | `#1989fa` |

### Swipe Events

| Event | Description | Arguments |
|------|------|------|
| change | Triggered when current swipe change | index: index of current swipe |

### SwipeItem Events

| Event | Description | Arguments |
|------|------|------|
| click | Triggered when clicked | *event: Event* |

### Swipe Methods

Use [ref](https://vuejs.org/v2/api/#ref) to get Swipe instance and call instance methods

| Name | Description | Attribute | Return value |
|------|------|------|------|
| prev `v2.4.2` | Swipe to prev item | - | - |
| next `v2.4.2` | Swipe to next item | - | - |
| swipeTo | Swipe to target index | index: target index, options: Options | void |
| resize `v2.2.14` | Resize Swipe when container element resized | - | void |

### swipeTo Options

| Name | Description | Type |
|------|------|------|------|
| immediate | Whether to skip animation | *boolean* |

### Swipe Slots

| Name | Description |
|------|------|
| default | Content |
| indicator | Custom indicator |
