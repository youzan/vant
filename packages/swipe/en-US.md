## Swipe

### Install
``` javascript
import { Swipe, SwipeItem } from 'vant';

Vue.use(Swipe).use(SwipeItem);
```

### Usage

#### Basic Usage
Use `autoplay` prop to set autoplay interval

```html
<van-swipe :autoplay="3000" indicator-color="white">
  <van-swipe-item>1</van-swipe-item>
  <van-swipe-item>2</van-swipe-item>
  <van-swipe-item>3</van-swipe-item>
  <van-swipe-item>4</van-swipe-item>
</van-swipe>
```

#### Image Lazyload
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
        'https://img.yzcdn.cn/1.jpg',
        'https://img.yzcdn.cn/2.jpg'
      ]
    }
  }
}
```

#### change event

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

#### Vertical Scrolling

```html
<van-swipe :autoplay="3000" vertical>
  <van-swipe-item>1</van-swipe-item>
  <van-swipe-item>2</van-swipe-item>
  <van-swipe-item>3</van-swipe-item>
  <van-swipe-item>4</van-swipe-item>
</van-swipe>
```

#### Set Swiper Item Size

```html
<van-swipe :autoplay="3000" :width="300">
  <van-swipe-item>1</van-swipe-item>
  <van-swipe-item>2</van-swipe-item>
  <van-swipe-item>3</van-swipe-item>
  <van-swipe-item>4</van-swipe-item>
</van-swipe>
```

#### Custom Indicator

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

### API

| Attribute | Description | Type | Default |
|------|------|------|------|
| autoplay | Autoplay interval (ms) | `Number` | - |
| duration | Animation duration (ms) | `Number` | `500` |
| loop | Whether to enable loop | `Boolean` | `true` |
| vertical | Vertical Scrolling | `Boolean` | `false` |
| touchable | Whether touchable | `Boolean` | `true` |
| show-indicators | Whether to show indicators | `Boolean` | `true` |
| indicator-color | Indicator color | `String` | `#1989fa` |
| initial-swipe | Index of initial swipe, start from 0 | `Number` | `0` |
| width | Set Swiper Item Width | `Number` | `0` |
| height | Set Swiper Item Height | `Number` | `0` |

### Event

| Event | Description | Arguments |
|------|------|------|
| change | Triggered when current swipe change | index: index of current swipe |

### Methods

Use ref to get swipe instance and call instance methods

| Name | Attribute | Return value | Description |
|------|------|------|------|
| swipeTo | index: target index | void | Swipe to target index |

### Slot

| name | Description |
|------|------|
| - | Content |
| indicator | Custom indicator |
