# Lazyload

### Install

```js
import Vue from 'vue';
import { Lazyload } from 'vant';

Vue.use(Lazyload);

// with options
Vue.use(Lazyload, {
  lazyComponent: true,
});
```

## Usage

### Basic Usage

```html
<img v-for="img in imageList" v-lazy="img" />
```

```js
export default {
  data() {
    return {
      imageList: [
        'https://img01.yzcdn.cn/vant/apple-1.jpg',
        'https://img01.yzcdn.cn/vant/apple-2.jpg',
      ],
    };
  },
};
```

### Lazyload Background Image

Use `v-lazy:background-image` to set background url, and declare the height of the container.

```html
<div v-for="img in imageList" v-lazy:background-image="img" />
```

### Lazyload Component

```js
// set `lazyComponent` option
Vue.use(Lazyload, {
  lazyComponent: true,
});
```

```html
<lazy-component>
  <img v-for="img in imageList" v-lazy="img" />
</lazy-component>
```

## API

### Options

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| loading | Src of the image while loading | _string_ | - |
| error | Src of the image upon load fail | _string_ | - |
| preload | Proportion of pre-loading height | _string_ | - |
| attempt | Attempts count | _number_ | `3` |
| listenEvents | Events that you want vue listen for | _string[]_ | `scroll`... |
| adapter | Dynamically modify the attribute of element | _object_ | - |
| filter | The image's listener filter | _object_ | - |
| lazyComponent | Lazyload component | _boolean_ | `false` |

> See more：[ vue-lazyload ](https://github.com/hilongjw/vue-lazyload)
