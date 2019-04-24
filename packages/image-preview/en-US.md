## ImagePreview

### Install

```js
import { ImagePreview } from 'vant';

Vue.use(ImagePreview);
```

### Usage

#### Basic Usage

```javascript
ImagePreview([
  'https://img.yzcdn.cn/1.jpg',
  'https://img.yzcdn.cn/2.jpg'
]);
```

#### Custom config

```javascript
ImagePreview({
  images: [
    'https://img.yzcdn.cn/1.jpg',
    'https://img.yzcdn.cn/2.jpg'
  ],
  startPosition: 1,
  onClose() {
    // do something
  }
});
```

#### Async Close

```javascript
const instance = ImagePreview({
  images: [
    'https://img.yzcdn.cn/1.jpg',
    'https://img.yzcdn.cn/2.jpg'
  ],
  asyncClose: true
});

setTimeout(() => {
  instance.close();
}, 1000);
```

#### Component Call

```html
<van-image-preview
  v-model="show"
  :images="images"
  @change="onChange"
>
  <template v-slot:index>Page: { index }</template>
</van-image-preview>
```

```js
export default {
  data() {
    return {
      show: false,
      index: 0,
      images: [
        'https://img.yzcdn.cn/1.jpg',
        'https://img.yzcdn.cn/2.jpg'
      ]
    };
  },

  methods: {
    onChange(index) {
      this.index = index;
    }
  }
}
```

### Options

| Attribute | Description | Type | Default |
|------|------|------|------|
| images | Images URL list | `Array` | `[]` |
| startPosition | Start position | `Number` | `0` |
| showIndex | Whether to show index | `Boolean` | `true` |
| showIndicators | Whether to show indicators | `Boolean` | `false` |
| loop | Whether to enable loop | `Boolean` | `true` |
| onClose | Close callback | `Function` | - |
| asyncClose | Whether to enable async close | `Boolean` | `false` |
| className | Custom className | `String | Array | Object` | - |
| lazyLoad | Whether to enable thumb lazy load，should register [Lazyload](#/en-US/lazyload) component | `Boolean` | `false` |
| maxZoom | Max zoom | `Number` | `3` |
| minZoom | Min zoom | `Number` | `1/3` |

### Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| images | Images URL list | `Array` | `[]` |
| start-position | Start position | `Number` | `0` |
| show-index | Whether to show index | `Boolean` | `true` |
| show-indicators | Whether to show indicators | `Boolean` | `false` |
| loop | Whether to enable loop | `Boolean` | `true` |
| async-close | Whether to enable async close | `Boolean` | `false` |
| class-name | Custom className | `String | Array | Object` | - |
| lazy-load | Whether to enable thumb lazy load，should register [Lazyload](#/en-US/lazyload) component | `Boolean` | `false` |
| max-zoom | Max zoom | `Number` | `3` |
| min-zoom | Min zoom | `Number` | `1/3` |

### Event

| Event | Description | Parameters |
|------|------|------|
| close | Triggered when close | { index, url } |
| change | Triggered when current image change | index: index of current image |

### Slot

| name | Description |
|------|------|
| index | Custom index |

### onClose Parematers

| Attribute | Description | Type |
|------|------|------|
| url | Url of current image | `Number` |
| index | Index of current image | `String` |
