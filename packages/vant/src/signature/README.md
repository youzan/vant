# Signature

### Intro

Component for signature scene, based on Canvas.

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

```html
<van-signature @submit="onSubmit" @clear="onClear" />
<van-image v-if="demoUrl" :src="demoUrl" />
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const demoUrl = ref('');

    const onSubmit = (data) => {
      const { filePath, canvas } = data;
      demoUrl.value = filePath;

      console.log('submit', canvas, filePath);
    };

    const onClear = () => console.log('clear');

    return {
      onSubmit,
      onClear,
      demoUrl,
    };
  },
};
```

### Pen Color

```html
<van-signature pen-color="#ff0000" @submit="onSubmit" @clear="onClear" />
```

### LineWidth

```html
<van-signature :line-width="6" @submit="onSubmit" @clear="onClear" />
```

## API

### Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| type | Export image type | _string_ | `png` |
| penColor | Color of the brush stroke, default is black | _string_ | `#000` |
| lineWidth | Width of the line | _number_ | `3` |
| tips | Text that appears when Canvas is not supported | _string_ | - |

### Events

| Event Name | Description | Callback Parameters |
| --- | --- | --- |
| start | Callback for start of signature | - |
| end | Callback for end of signature | - |
| signing | Callback for signature in progress | _event: TouchEvent_ |
| submit | submit button click | _data: {canvas: HTMLCanvasElement, filePath: string}_ |
| clear | clear button click | - |

### Types

The component exports the following type definitions:

```js
import type { SignatureProps } from 'vant';
```

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/config-provider).

| Name | Default Value | Description |
| --- | --- | --- |
| --van-signature-padding | _var(--van-padding-xs)_ | - |
| --van-signature-content-height | _160px_ | Height of the canvas |
| --van-signature-content-background | _var(--van-background-2)_ | Background color of the canvas |
| --van-signature-content-border | _1px dotted #dadada_ | Border style of the canvas |
