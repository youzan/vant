# ImagePreview

### Install

```js
import { createApp } from 'vue';
import { ImagePreview } from 'vant';

const app = createApp();
app.use(ImagePreview);
```

## Usage

### Basic Usage

```js
ImagePreview([
  'https://img.yzcdn.cn/vant/apple-1.jpg',
  'https://img.yzcdn.cn/vant/apple-2.jpg',
]);
```

### Set Start Position

```js
ImagePreview({
  images: [
    'https://img.yzcdn.cn/vant/apple-1.jpg',
    'https://img.yzcdn.cn/vant/apple-2.jpg',
  ],
  startPosition: 1,
});
```

### Show Close Icon

After setting the `closeable` attribute, the close icon will be displayed in the upper right corner of the pop-up layer, and the icon can be customized through the `close-icon` attribute, and the icon location can be customized by using the `close-icon-position` attribute.

```js
ImagePreview({
  images: [
    'https://img.yzcdn.cn/vant/apple-1.jpg',
    'https://img.yzcdn.cn/vant/apple-2.jpg',
  ],
  closeable: true,
});
```

### Close Event

```js
import { Toast } from 'vant';

ImagePreview({
  images: [
    'https://img.yzcdn.cn/vant/apple-1.jpg',
    'https://img.yzcdn.cn/vant/apple-2.jpg',
  ],
  onClose() {
    Toast('closed');
  },
});
```

### Before Close

```js
const instance = ImagePreview({
  images: [
    'https://img.yzcdn.cn/vant/apple-1.jpg',
    'https://img.yzcdn.cn/vant/apple-2.jpg',
  ],
  beforeClose: () => false,
});

setTimeout(() => {
  instance.close();
}, 2000);
```

### Component Call

```html
<van-image-preview v-model:show="show" :images="images" @change="onChange">
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
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg',
      ],
    };
  },
  methods: {
    onChange(index) {
      this.index = index;
    },
  },
};
```

## API

### Options

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| images | Images URL list | _string[]_ | `[]` |
| startPosition | Start position | _number \| string_ | `0` |
| showIndex | Whether to show index | _boolean_ | `true` |
| showIndicators | Whether to show indicators | _boolean_ | `false` |
| loop | Whether to enable loop | _boolean_ | `true` |
| swipeDuration | Animation duration (ms) | _number \| string_ | `500` |
| onClose | Triggered when close | _Function_ | - |
| onChange | Triggered when current image change | _Function_ | - |
| onScale | Triggered when current image scale | _Function_ | - |
| closeOnPopstate | Whether to close when popstate | _boolean_ | `true` |
| beforeClose | Callback function before close | _(action) => boolean \| Promise_ | - |
| className | Custom className | _any_ | - |
| maxZoom | Max zoom | _number \| string_ | `3` |
| minZoom | Min zoom | _number \| string_ | `1/3` |
| closeable `v2.5.0` | Whether to show close icon | _boolean_ | `false` |
| closeIcon `v2.5.0` | Close icon name | _string_ | `clear` |
| closeIconPosition `v2.5.0` | Close icon position，can be set to `top-left` `bottom-left` `bottom-right` | _string_ | `top-right` |
| teleport | Return the mount node for ImagePreview | _string \| Element_ | - |

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| images | Images URL list | _string[]_ | `[]` |
| start-position | Start position | _number \| string_ | `0` |
| swipe-duration | Animation duration (ms) | _number \| string_ | `500` |
| show-index | Whether to show index | _boolean_ | `true` |
| show-indicators | Whether to show indicators | _boolean_ | `false` |
| loop | Whether to enable loop | _boolean_ | `true` |
| before-close | Callback function before close | _(action) => boolean \| Promise_ | - |
| close-on-popstate | Whether to close when popstate | _boolean_ | `true` |
| class-name | Custom className | _any_ | - |
| max-zoom | Max zoom | _number \| string_ | `3` |
| min-zoom | Min zoom | _number \| string_ | `1/3` |
| closeable `v2.5.0` | Whether to show close icon | _boolean_ | `false` |
| close-icon `v2.5.0` | Close icon name | _string_ | `clear` |
| close-icon-position `v2.5.0` | Close icon position，can be set to `top-left` `bottom-left` `bottom-right` | _string_ | `top-right` |
| teleport | Return the mount node for ImagePreview | _string \| Element_ | - |

### Events

| Event | Description | Parameters |
| --- | --- | --- |
| close | Triggered when close | { index, url } |
| closed `v2.5.6` | Triggered after closed | - |
| change | Triggered when current image change | index: index of current image |
| scale `v2.5.0` | Triggered when current image scale | { index: index of current image, scale: scale of current image} |
| swipeTo `2.9.0` | Swipe to target index | index: target index, options: Options | void |

### Slots

| Name  | Description                                  |
| ----- | -------------------------------------------- |
| index | Custom index                                 |
| cover | Custom content that covers the image preview |

### onClose Parematers

| Attribute | Description            | Type     |
| --------- | ---------------------- | -------- |
| url       | Url of current image   | _number_ |
| index     | Index of current image | _number_ |

### onScale Parematers

| Attribute | Description            | Type     |
| --------- | ---------------------- | -------- |
| index     | Index of current image | _number_ |
| scale     | scale of current image | _number_ |
