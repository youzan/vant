# Signature

### Intro

Component for signature scene, based on Canvas. Please upgrade `vant` to >= v4.3.0 before using this component.

### Install

Register component globally via `app.use`, refer to [Component Registration](#/en-US/advanced-usage#zu-jian-zhu-ce) for more registration ways.

```js
import { createApp } from 'vue';
import { Signature } from 'vant';

const app = createApp();
app.use(Signature);
```

## Usage

### Basic Usage

When the confirm button is clicked, the component will emit the `submit` event. The first parameter of the event is `data`, which contains the following fields:

- `image`: The image corresponding to the signature, which is in base64 string format. Returns an empty string if the signature is empty.
- `canvas`: The Canvas element.

```html
<van-signature @submit="onSubmit" @clear="onClear" />
<van-image v-if="image" :src="image" />
```

```js
import { ref } from 'vue';
import { showToast } from 'vant';

export default {
  setup() {
    const image = ref('');
    const onSubmit = (data) => {
      image.value = data.image;
    };
    const onClear = () => showToast('clear');

    return {
      image,
      onSubmit,
      onClear,
    };
  },
};
```

### Pen Color

Use `pen-color` prop to set the color of the brush stroke.

```html
<van-signature pen-color="#ff0000" @submit="onSubmit" @clear="onClear" />
```

### Line Width

Use `line-width` prop to set the width of the line.

```html
<van-signature :line-width="6" @submit="onSubmit" @clear="onClear" />
```

### Background Color

Use `background-color` prop to set the color of the background.

```html
<van-signature background-color="#eee" @submit="onSubmit" @clear="onClear" />
```

## API

### Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| type | Export image type | _string_ | `png` |
| pen-color | Color of the brush stroke, default is black | _string_ | `#000` |
| line-width | Width of the line | _number_ | `3` |
| background-color | Background color | _string_ | - |
| tips | Text that appears when Canvas is not supported | _string_ | - |
| clear-button-text | Clear button text | _string_ | `Clear` |
| confirm-button-text | Confirm button text | _string_ | `Confirm` |

### Events

| Event Name | Description | Callback Parameters |
| --- | --- | --- |
| start | Emitted when signing starts | - |
| end | Emitted when signing ends | - |
| signing | Emitted when signing | _event: TouchEvent_ |
| submit | Emitted when clicking the confirm button | _data: { image: string; canvas: HTMLCanvasElement }_ |
| clear | Emitted when clicking the cancel button | - |

### Methods

Use [ref](https://vuejs.org/guide/essentials/template-refs.html) to get Signature instance and call instance methods.

| Name | Description | Attribute | Return value |
| --- | --- | --- | --- |
| resize `v4.7.3` | Resize Signature when container element resized or visibility changed | - | - |

### Types

The component exports the following type definitions:

```ts
import type { SignatureProps, SignatureInstance } from 'vant';
```

`SignatureInstance` is the type of component instance:

```ts
import { ref } from 'vue';
import type { SignatureInstance } from 'vant';

const signatureRef = ref<SignatureInstance>();

signatureRef.value?.resize();
```

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/config-provider).

| Name | Default Value | Description |
| --- | --- | --- |
| --van-signature-padding | _var(--van-padding-xs)_ | - |
| --van-signature-content-height | _200px_ | Height of the canvas |
| --van-signature-content-background | _var(--van-background-2)_ | Background color of the canvas |
| --van-signature-content-border | _1px dotted #dadada_ | Border style of the canvas |
