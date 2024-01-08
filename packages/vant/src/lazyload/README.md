# Lazyload

### Intro

When the page needs to load a large amount of content, delay loading the content outside the visible area of the page to make the page load smoother.

### Install

Register component globally via `app.use`, refer to [Component Registration](#/en-US/advanced-usage#zu-jian-zhu-ce) for more registration ways.

```js
import { createApp } from 'vue';
import { Lazyload } from 'vant';

const app = createApp();
app.use(Lazyload);

// with options
app.use(Lazyload, {
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
  setup() {
    return {
      imageList: [
        'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
        'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
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
app.use(Lazyload, {
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
| preLoad | Proportion of pre-loading height | _number_ | - |
| attempt | Attempts count | _number_ | `3` |
| listenEvents | Events that you want vue listen for | _string[]_ | `scroll`... |
| adapter | Dynamically modify the attribute of element | _object_ | - |
| filter | The image's listener filter | _object_ | - |
| lazyComponent | Lazyload component | _boolean_ | `false` |

> See more: [ vue-lazyload ](https://github.com/hilongjw/vue-lazyload)
