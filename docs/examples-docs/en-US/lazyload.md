<script>
export default {
  data() {
    return {
      imageList: [
        'https://img.yzcdn.cn/public_files/2017/09/05/3bd347e44233a868c99cf0fe560232be.jpg',
        'https://img.yzcdn.cn/public_files/2017/09/05/c0dab461920687911536621b345a0bc9.jpg',
        'https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg',
        'https://img.yzcdn.cn/public_files/2017/09/05/fd08f07665ed67d50e11b32a21ce0682.jpg'
      ],
      backgroundImageList: [
        'https://img.yzcdn.cn/public_files/2017/09/05/bac1903e863834ace25773f3554b6890.jpg',
        'https://img.yzcdn.cn/public_files/2017/09/05/138c32d4384b5e4a78dc4e1ba58e6a80.jpg'
      ],
      componentImageList: [
        'https://img.yzcdn.cn/public_files/2017/09/05/100a7845756a70af2df513bdd1307d0e.jpg',
        'https://img.yzcdn.cn/public_files/2017/09/05/8a4f5be8289cb3a7434fc19a3de780a2.jpg'
      ]
    };
  },

  methods: {
    handleComponentShow() {
      console.log('component show');
    }
  }
}
</script>

## Lazyload

### Install

```js
import Vue from 'vue';
import { Lazyload } from 'vant';

Vue.use(Lazyload, options);
```

### Usage

#### Basic Usage

:::demo Basic Usage
```html
<img v-for="img in imageList" v-lazy="img">
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
:::

#### Background Image
Use `v-lazy:background-image` to set background url, and declare the height of the container.

:::demo Background Image
```html
<div v-for="img in backgroundImageList" v-lazy:background-image="img" />
```

```javascript
export default {
  data() {
    return {
      backgroundImageList: [
        'https://img.yzcdn.cn/1.jpg',
        'https://img.yzcdn.cn/2.jpg'
      ]
    };
  }
}
```
:::

#### Lazyload Component

:::demo Lazyload Component
```html
<lazy-component>
  <img v-for="img in componentImageList" v-lazy="img">
</lazy-component>
```

```javascript
export default {
  data() {
    return {
      componentImageList: [
        'https://img.yzcdn.cn/1.jpg',
        'https://img.yzcdn.cn/2.jpg'
      ]
    };
  }
}
```
:::

### Options

| Attribute | Description | Type | Default | Accepted Values |
|-----------|-----------|-----------|-------------|-------------|
| loading | Src of the image while loading | `String` | - | - |
| error | Src of the image upon load fail | `String` | - | - |
| preload | Proportion of pre-loading height | `String` | - | - |
| attempt | Attempts count | `Number` | `3` | |
| listenEvents | Events that you want vue listen for | `Array` | `scroll`... | - |
| adapter | Dynamically modify the attribute of element | `Object` | - | - |
| filter | The image's listener filter | `Object` | - | - |
| lazyComponent | Lazyload component | `Boolean` | `false` | - |

See more：[ vue-lazyload ](https://github.com/hilongjw/vue-lazyload)
