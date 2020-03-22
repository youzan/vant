# ImagePreview

### Install

```js
import Vue from 'vue';
import { ImagePreview } from 'vant';

Vue.use(ImagePreview);
```

## Usage

### Basic Usage

```js
ImagePreview([
  'https://img.yzcdn.cn/vant/apple-1.jpg',
  'https://img.yzcdn.cn/vant/apple-2.jpg'
]);
```

### Custom config

```js
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

### Show Close Icon

After setting the `closeable` attribute, the close icon will be displayed in the upper right corner of the pop-up layer, and the icon can be customized through the `close-icon` attribute, and the icon location can be customized by using the `close-icon-position` attribute

```js
ImagePreview({
  images: [
    'https://img.yzcdn.cn/1.jpg',
    'https://img.yzcdn.cn/2.jpg'
  ],
  closeable: true
});
```

### Async Close

```js
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
<van-image-preview v-model="show" :images="images" @change="onChange">
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
| images | Images URL list | *string[]* | `[]` |
| startPosition | Start position | *number \| string* | `0` |
| showIndex | Whether to show index | *boolean* | `true` |
| showIndicators | Whether to show indicators | *boolean* | `false` |
| loop | Whether to enable loop | *boolean* | `true` |
| swipeDuration | Animation duration (ms) | *number \| string* | `500` |
| onClose | Triggered when close | *Function* | - |
| onChange `v2.0.3` | Triggered when current image change | *Function* | - |
| onScale | Triggered when current image scale | *Function* | - |
| closeOnPopstate | Whether to close when popstate | *boolean* | `false` |
| asyncClose | Whether to enable async close | *boolean* | `false` |
| className | Custom className | *any* | - |
| maxZoom | Max zoom | *number \| string* | `3` |
| minZoom | Min zoom | *number \| string* | `1/3` |
| closeable | Whether to show close icon | *boolean* | `false` |
| closeIcon | Close icon name | *string* | `clear` |
| closeIconPosition | Close icon position，can be set to `top-left` `bottom-left` `bottom-right` | *string* | `top-right` |

### Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| images | Images URL list | *string[]* | `[]` |
| start-position | Start position | *number \| string* | `0` |
| swipe-duration | Animation duration (ms) | *number \| string* | `500` |
| show-index | Whether to show index | *boolean* | `true` |
| show-indicators | Whether to show indicators | *boolean* | `false` |
| loop | Whether to enable loop | *boolean* | `true` |
| async-close | Whether to enable async close | *boolean* | `false` |
| close-on-popstate | Whether to close when popstate | *boolean* | `false` |
| class-name | Custom className | *any* | - |
| max-zoom | Max zoom | *number \| string* | `3` |
| min-zoom | Min zoom | *number \| string* | `1/3` |
| closeable `v2.5.0` | Whether to show close icon | *boolean* | `false` |
| close-icon `v2.5.0` | Close icon name | *string* | `clear` |
| close-icon-position `v2.5.0` | Close icon position，can be set to `top-left` `bottom-left` `bottom-right` | *string* | `top-right` |

### Events

| Event | Description | Parameters |
|------|------|------|
| close | Triggered when close | { index, url } |
| closed `v2.5.6` | Triggered after closed | - |
| change | Triggered when current image change | index: index of current image |
| scale `v2.5.0` | Triggered when current image scale | { index: index of current image, scale: scale of current image} |

### Slots

| Name | Description |
|------|------|
| index | Custom index |
| cover | Custom content that covers the image preview |

### onClose Parematers

| Attribute | Description | Type |
|------|------|------|
| url | Url of current image | *number* |
| index | Index of current image | *number* |

### onScale Parematers

| Attribute | Description | Type |
|------|------|------|
| index | Index of current image | *number* |
| scale | scale of current image | *number* |
