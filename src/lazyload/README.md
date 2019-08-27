# Lazyload

### Install

```js
import Vue from 'vue';
import { Lazyload } from 'vant';

Vue.use(Lazyload, options);
```

## Usage

### Basic Usage

```html
<img v-for="img in imageList" v-lazy="img" >
```

```javascript
export default {
  data() {
    return {
      imageList: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg'
      ]
    };
  }
}
```

### Lazyload Background Image

Use `v-lazy:background-image` to set background url, and declare the height of the container.

```html
<div v-for="img in imageList" v-lazy:background-image="img" />
```

### Lazyload Component

```html
<lazy-component>
  <img v-for="img in imageList" v-lazy="img" >
</lazy-component>
```

## API

### Options

| Attribute | Description | Type | Default | Version |
|------|------|------|------|------|
| loading | Src of the image while loading | *string* | - | - |
| error | Src of the image upon load fail | *string* | - | - |
| preload | Proportion of pre-loading height | *string* | - | - |
| attempt | Attempts count | *number* | `3` | - |
| listenEvents | Events that you want vue listen for | *string[]* | `scroll`... | - |
| adapter | Dynamically modify the attribute of element | *object* | - | - |
| filter | The image's listener filter | *object* | - | - |
| lazyComponent | Lazyload component | *boolean* | `false` | - |

See more：[ vue-lazyload ](https://github.com/hilongjw/vue-lazyload)
