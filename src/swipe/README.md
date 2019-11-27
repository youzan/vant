# Swipe

### Install

``` javascript
import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';

Vue.use(Swipe).use(SwipeItem);
```

## Usage

### Basic Usage

Use `autoplay` prop to set autoplay interval

```html
<van-swipe :autoplay="3000" indicator-color="white">
  <van-swipe-item>1</van-swipe-item>
  <van-swipe-item>2</van-swipe-item>
  <van-swipe-item>3</van-swipe-item>
  <van-swipe-item>4</van-swipe-item>
</van-swipe>
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

```javascript
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

  <div class="custom-indicator" slot="indicator">
    {{ current + 1 }}/4
  </div>
</van-swipe>
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

| Attribute | Description | Type | Default | Version |
|------|------|------|------|------|
| autoplay | Autoplay interval (ms) | *number* | - | - |
| duration | Animation duration (ms) | *number* | `500` | - |
| initial-swipe | Index of initial swipe, start from 0 | *number* | `0` | - |
| width | Set Swiper Item Width | *number* | `0` | - |
| height | Set Swiper Item Height | *number* | `0` | - |
| loop | Whether to enable loop | *boolean* | `true` | - |
| show-indicators | Whether to show indicators | *boolean* | `true` | - |
| indicator-color | Indicator color | *string* | `#1989fa` | - |
| vertical | Whether to be vertical Scrolling | *boolean* | `false` | - |
| touchable | Whether to allow swipe by touch gesture | *boolean* | `true` | - |
| stop-propagation | Whether to stop touchmove event propagation | *boolean* | `false` | 2.1.0 |

### Swipe Events

| Event | Description | Arguments | Version |
|------|------|------|------|
| change | Triggered when current swipe change | index: index of current swipe | - |

### SwipeItem Events

| Event | Description | Arguments | Version |
|------|------|------|------|
| click | Triggered when clicked | event: Event | - |

### Swipe Methods

Use [ref](https://vuejs.org/v2/api/#ref) to get Swipe instance and call instance methods

| Name | Description | Attribute | Return value | Version |
|------|------|------|------|------|
| swipeTo | Swipe to target index | index: target index, options: Options | void | - |
| resize | Resize Swipe when container element resized | - | void | 2.2.14 |

### swipeTo Options

| Name | Description | Type |
|------|------|------|------|
| immediate | Whether to skip animation | *boolean* |

### Swipe Slots

| Name | Description | Version |
|------|------|------|
| default | Content | - |
| indicator | Custom indicator | - |
