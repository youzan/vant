# ImagePreview

### Install

```js
import { ImagePreview } from 'vant';

Vue.use(ImagePreview);
```

## Usage

### Basic Usage

```javascript
ImagePreview([
  'https://img.yzcdn.cn/vant/apple-1.jpg',
  'https://img.yzcdn.cn/vant/apple-2.jpg'
]);
```

### Custom config

```javascript
ImagePreview({
  images: [
    'https://img.yzcdn.cn/vant/apple-1.jpg',
    'https://img.yzcdn.cn/vant/apple-2.jpg'
  ],
  startPosition: 1,
  onClose() {
    // do something
  }
});
```

### Async Close

```javascript
const instance = ImagePreview({
  images: [
    'https://img.yzcdn.cn/vant/apple-1.jpg',
    'https://img.yzcdn.cn/vant/apple-2.jpg'
  ],
  asyncClose: true
});

setTimeout(() => {
  instance.close();
}, 1000);
```

### Component Call

```html
<van-image-preview
  v-model="show"
  :images="images"
  @change="onChange"
>
  <template v-slot:index>Page: {{ index }}</template>
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

## API

### Options

| Attribute | Description | Type | Default |
|------|------|------|------|
| images | Images URL list | `string[]` | `[]` |
| startPosition | Start position | `number` | `0` |
| showIndex | Whether to show index | `boolean` | `true` |
| showIndicators | Whether to show indicators | `boolean` | `false` |
| loop | Whether to enable loop | `boolean` | `true` |
| onClose | Triggered when close | `Function` | - |
| onChange | Triggered when current image change | `Function` | - |
| closeOnPopstate | Whether to close when popstate | `boolean` | `false` |
| asyncClose | Whether to enable async close | `boolean` | `false` |
| className | Custom className | `any` | - |
| lazyLoad | Whether to enable thumb lazy load，should register [Lazyload](#/en-US/lazyload) component | `boolean` | `false` |
| maxZoom | Max zoom | `number` | `3` |
| minZoom | Min zoom | `number` | `1/3` |

### Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| images | Images URL list | `string[]` | `[]` |
| start-position | Start position | `number` | `0` |
| show-index | Whether to show index | `boolean` | `true` |
| show-indicators | Whether to show indicators | `boolean` | `false` |
| loop | Whether to enable loop | `boolean` | `true` |
| async-close | Whether to enable async close | `boolean` | `false` |
| close-on-popstate | Whether to close when popstate | `boolean` | `false` |
| class-name | Custom className | `any` | - |
| lazy-load | Whether to enable thumb lazy load，should register [Lazyload](#/en-US/lazyload) component | `boolean` | `false` |
| max-zoom | Max zoom | `number` | `3` |
| min-zoom | Min zoom | `number` | `1/3` |

### Events

| Event | Description | Parameters |
|------|------|------|
| close | Triggered when close | { index, url } |
| change | Triggered when current image change | index: index of current image |

### Slots

| Name | Description |
|------|------|
| index | Custom index |

### onClose Parematers

| Attribute | Description | Type |
|------|------|------|
| url | Url of current image | `number` |
| index | Index of current image | `string` |
