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
<van-image-preview
  v-model:show="state.show"
  :images="state.images"
  @change="onChange"
>
  <template v-slot:index>Page: {{ index }}</template>
</van-image-preview>
```

```js
import { reactive } from 'vue';

export default {
  setup() {
    const state = reactive({
      show: false,
      index: 0,
    });
    const onChange = (index) => {
      state.index = index;
    };

    return {
      state,
      images: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg',
      ],
      onChange,
    };
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
| onClose | Emitted when ImagePreview is closed | _Function_ | - |
| onChange | Emitted when current image changed | _Function_ | - |
| onScale | Emitted when scaling current image | _Function_ | - |
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
| close | Emitted when closing ImagePreview | { index, url } |
| closed `v2.5.6` | Emitted when ImagePreview is closed | - |
| change | Emitted when current image changed | index: index of current image |
| scale `v2.5.0` | Emitted when scaling current image | { index: index of current image, scale: scale of current image} |

### Methods

Use [ref](https://vuejs.org/v2/api/#ref) to get ImagePreview instance and call instance methods.

| Name | Description | Attribute | Return value |
| --- | --- | --- | --- |
| swipeTo `2.9.0` | Swipe to target index | index: target index, options: Options | - |

### Slots

| Name | Description | SlotProps |
| --- | --- | --- |
| index | Custom index | { index: index of current image } |
| cover | Custom content that covers the image preview | - |

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

### Less Variables

How to use: [Custom Theme](#/en-US/theme).

| Name                                    | Default Value        | Description |
| --------------------------------------- | -------------------- | ----------- |
| @image-preview-index-text-color         | `@white`             | -           |
| @image-preview-index-font-size          | `@font-size-md`      | -           |
| @image-preview-index-line-height        | `@line-height-md`    | -           |
| @image-preview-index-text-shadow        | `0 1px 1px @gray-8`  | -           |
| @image-preview-overlay-background-color | `rgba(0, 0, 0, 0.9)` | -           |
| @image-preview-close-icon-size          | `22px`               | -           |
| @image-preview-close-icon-color         | `@gray-5`            | -           |
| @image-preview-close-icon-active-color  | `@gray-6`            | -           |
| @image-preview-close-icon-margin        | `@padding-md`        | -           |
| @image-preview-close-icon-z-index       | `1`                  | -           |
