# ImagePreview

### Intro

Used to zoom in and preview the picture, and it supports two methods: function call and component call.

### Install

Register component globally via `app.use`, refer to [Component Registration](#/en-US/advanced-usage#zu-jian-zhu-ce) for more registration ways.

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
import { ref } from 'vue';

export default {
  setup() {
    const show = ref(false);
    const index = ref(0);
    const images = [
      'https://img.yzcdn.cn/vant/apple-1.jpg',
      'https://img.yzcdn.cn/vant/apple-2.jpg',
    ];
    const onChange = (newIndex) => {
      index.value = newIndex;
    };

    return {
      show,
      index,
      images,
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
| swipeDuration | Animation duration (ms) | _number \| string_ | `300` |
| onClose | Emitted when ImagePreview is closed | _Function_ | - |
| onChange | Emitted when current image changed | _Function_ | - |
| onScale | Emitted when scaling current image | _Function_ | - |
| closeOnPopstate | Whether to close when popstate | _boolean_ | `true` |
| beforeClose | Callback function before close | _(action) => boolean \| Promise_ | - |
| className | Custom className | _string \| Array \| object_ | - |
| maxZoom | Max zoom | _number \| string_ | `3` |
| minZoom | Min zoom | _number \| string_ | `1/3` |
| closeable | Whether to show close icon | _boolean_ | `false` |
| closeIcon | Close icon name | _string_ | `clear` |
| closeIconPosition | Close icon position，can be set to `top-left` `bottom-left` `bottom-right` | _string_ | `top-right` |
| transition `v3.0.8` | Transition, equivalent to `name` prop of [transition](https://v3.vuejs.org/api/built-in-components.html#transition) | _string_ | `van-fade` |
| overlay-style `v3.0.8` | Custom overlay style | _object_ | - |
| teleport | Specifies a target element where ImagePreview will be mounted | _string \| Element_ | - |

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| v-model:show | Whether to show ImagePreview | _boolean_ | `false` |
| images | Images URL list | _string[]_ | `[]` |
| start-position | Start position | _number \| string_ | `0` |
| swipe-duration | Animation duration (ms) | _number \| string_ | `300` |
| show-index | Whether to show index | _boolean_ | `true` |
| show-indicators | Whether to show indicators | _boolean_ | `false` |
| loop | Whether to enable loop | _boolean_ | `true` |
| before-close | Callback function before close | _(action: number) => boolean \| Promise\<boolean\>_ | - |
| close-on-popstate | Whether to close when popstate | _boolean_ | `true` |
| class-name | Custom className | _string \| Array \| object_ | - |
| max-zoom | Max zoom | _number \| string_ | `3` |
| min-zoom | Min zoom | _number \| string_ | `1/3` |
| closeable | Whether to show close icon | _boolean_ | `false` |
| close-icon | Close icon name | _string_ | `clear` |
| close-icon-position | Close icon position，can be set to `top-left` `bottom-left` `bottom-right` | _string_ | `top-right` |
| transition `v3.0.8` | Transition, equivalent to `name` prop of [transition](https://v3.vuejs.org/api/built-in-components.html#transition) | _string_ | `van-fade` |
| overlay-style `v3.0.8` | Custom overlay style | _object_ | - |
| teleport | Specifies a target element where ImagePreview will be mounted | _string \| Element_ | - |

### Events

| Event | Description | Parameters |
| --- | --- | --- |
| close | Emitted when closing ImagePreview | { index, url } |
| closed | Emitted when ImagePreview is closed | - |
| change | Emitted when current image changed | index: index of current image |
| scale | Emitted when scaling current image | { index: index of current image, scale: scale of current image} |

### Methods

Use [ref](https://vuejs.org/v2/api/#ref) to get ImagePreview instance and call instance methods.

| Name | Description | Attribute | Return value |
| --- | --- | --- | --- |
| swipeTo `2.9.0` | Swipe to target index | _index: number, options?: SwipeToOptions_ | - |

### Types

The component exports the following type definitions:

```ts
import type {
  ImagePreviewProps,
  ImagePreviewOptions,
  ImagePreviewInstance,
  ImagePreviewScaleEventParams,
} from 'vant';
```

`ImagePreviewInstance` is the type of component instance:

```ts
import { ref } from 'vue';
import type { ImagePreviewInstance } from 'vant';

const imagePreviewRef = ref<ImagePreviewInstance>();

imagePreviewRef.value?.swipeTo(1);
```

### Slots

| Name | Description | SlotProps |
| --- | --- | --- |
| index | Custom index | { index: index of current image } |
| cover | Custom content that covers the image preview | - |

### onClose Parameters

| Attribute | Description            | Type     |
| --------- | ---------------------- | -------- |
| url       | Url of current image   | _number_ |
| index     | Index of current image | _number_ |

### onScale Parameters

| Attribute | Description            | Type     |
| --------- | ---------------------- | -------- |
| index     | Index of current image | _number_ |
| scale     | scale of current image | _number_ |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/config-provider).

| Name | Default Value | Description |
| --- | --- | --- |
| --van-image-preview-index-text-color | _var(--van-white)_ | - |
| --van-image-preview-index-font-size | _var(--van-font-size-md)_ | - |
| --van-image-preview-index-line-height | _var(--van-line-height-md)_ | - |
| --van-image-preview-index-text-shadow | _0 1px 1px var(--van-gray-8)_ | - |
| --van-image-preview-overlay-background-color | _rgba(0, 0, 0, 0.9)_ | - |
| --van-image-preview-close-icon-size | _22px_ | - |
| --van-image-preview-close-icon-color | _var(--van-gray-5)_ | - |
| --van-image-preview-close-icon-active-color | _var(--van-gray-6)_ | - |
| --van-image-preview-close-icon-margin | _var(--van-padding-md)_ | - |
| --van-image-preview-close-icon-z-index | _1_ | - |
