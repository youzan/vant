## Lazyload

### Install

```js
import Vue from 'vue';
import { Lazyload } from 'vant';

Vue.use(Lazyload, options);
```

### Usage

#### Basic Usage

```html
<img v-for="img in imageList" v-lazy="img" >
```

```javascript
export default {
  data() {
    return {
      imageList: [
        'https://img.yzcdn.cn/1.jpg',
        'https://img.yzcdn.cn/2.jpg'
      ]
    };
  }
}
```

#### Lazyload Background Image
Use `v-lazy:background-image` to set background url, and declare the height of the container.

```html
<div v-for="img in imageList" v-lazy:background-image="img" />
```

#### Lazyload Component

```html
<lazy-component>
  <img v-for="img in imageList" v-lazy="img" >
</lazy-component>
```

### Options

| Attribute | Description | Type | Default |
|------|------|------|------|
| loading | Src of the image while loading | `String` | - |
| error | Src of the image upon load fail | `String` | - |
| preload | Proportion of pre-loading height | `String` | - |
| attempt | Attempts count | `Number` | `3` |
| listenEvents | Events that you want vue listen for | `Array` | `scroll`... |
| adapter | Dynamically modify the attribute of element | `Object` | - |
| filter | The image's listener filter | `Object` | - |
| lazyComponent | Lazyload component | `Boolean` | `false` |

See more：[ vue-lazyload ](https://github.com/hilongjw/vue-lazyload)
