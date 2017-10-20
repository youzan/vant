<script>
export default {
  data() {
    return {
      images: [
        'https://img.yzcdn.cn/public_files/2017/09/05/3bd347e44233a868c99cf0fe560232be.jpg',
        'https://img.yzcdn.cn/public_files/2017/09/05/c0dab461920687911536621b345a0bc9.jpg',
        'https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg',
        'https://img.yzcdn.cn/public_files/2017/09/05/fd08f07665ed67d50e11b32a21ce0682.jpg'
      ]
    };
  }
};
</script>

## Swipe

### Install
``` javascript
import { Swipe, SwipeItem } from 'vant';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
```

### Usage

#### Basic Usage
Use `autoplay` prop to set autoplay interval

:::demo Basic Usage
```html
<van-swipe :autoplay="3000">
  <van-swipe-item>1</van-swipe-item>
  <van-swipe-item>2</van-swipe-item>
  <van-swipe-item>3</van-swipe-item>
  <van-swipe-item>4</van-swipe-item>
</van-swipe>
```
:::

#### Image Lazyload
Use [Lazyload](#/zh-CN/component/lazyload) component to lazyload image

:::demo Image Lazyload
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
:::

### API

| Attribute | Description | Type | Default | Accepted Values |
|-----------|-----------|-----------|-------------|-------------|
| autoplay | Autoplay interval (ms) | `Number` | - | - |
| duration | Animation duration (ms) | `Number` | `500` | - |
| showIndicators | Whether to show indocators | `Boolean` | `true` | - |

### Event

| Event | Description | Attribute |
|-----------|-----------|-----------|
| change | Triggered when current swipe change | index: index of current swipe |
