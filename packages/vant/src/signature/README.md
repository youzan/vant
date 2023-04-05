# Space

### Intro

Component for signature scene, based on Canvas.

### Install

Register component globally via `app.use`, refer to [Component Registration](#/en-US/advanced-usage#zu-jian-zhu-ce) for more registration ways.

```js
import { createApp } from 'vue';
import { Space } from 'vant';

const app = createApp();
app.use(Space);
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

    const onSubmit = (data, filePath) => {
      demoUrl.value = filePath;
      console.log('submit', data, filePath);
    };
    const onClear = () => console.log('clear');

    return {
      onSubmit,
      onClear,
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
| penColor | Color of the brush stroke, default is black | _string_ | `#000000` |
| lineWidth | Width of the line | _number_ | `3` |
| tips | Text that appears when Canvas is not supported | _string_ | `This browser does not support Canvas and cannot use this component.` |
| className | Custom class name | _string \| Array \| object_ | - |

### Events

| Event Name | Description | Callback Parameters |
| --- | --- | --- |
| start | Callback for start of signature | - |
| end | Callback for end of signature | - |
| signing | Callback for signature in progress | _event: TouchEvent_ |
| submit | submit button click | _canvas: HTMLCanvasElement, filePath: string_ |
| clear | clear button click | - |

### Types

The component exports the following type definitions:

```js
import type { SignatureProps } from 'vant';
```
