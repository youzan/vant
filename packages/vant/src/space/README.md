# Space

### Intro

Set the spacing between elements.

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
<van-space>
  <van-button type="primary">Button</van-button>
  <van-button type="primary">Button</van-button>
  <van-button type="primary">Button</van-button>
  <van-button type="primary">Button</van-button>
</van-space>
```

### Vertical

```html
<van-space direction="vertical" fill>
  <van-button type="primary" block>Button</van-button>
  <van-button type="primary" block>Button</van-button>
  <van-button type="primary" block>Button</van-button>
</van-space>
```

### Custom Size

```html
<!-- 20px -->
<van-space :size="20">
  <van-button type="primary">Button</van-button>
  <van-button type="primary">Button</van-button>
  <van-button type="primary">Button</van-button>
</van-space>

<!-- 2rem -->
<van-space size="2rem">
  <van-button type="primary">Button</van-button>
  <van-button type="primary">Button</van-button>
  <van-button type="primary">Button</van-button>
</van-space>
```

### Alignment

```html
<van-radio-group
  v-model="align"
  direction="horizontal"
  style="margin-bottom: 16px"
>
  <van-radio name="start">start</van-radio>
  <van-radio name="center">center</van-radio>
  <van-radio name="end">end</van-radio>
  <van-radio name="baseline">baseline</van-radio>
</van-radio-group>

<van-space :align="align" style="padding: 16px; background: #f3f2f5">
  <van-button type="primary">{{ align }}</van-button>
  <div style="padding: 40px 20px; background: #fff">Block</div>
</van-space>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const align = ref('center');
    return { align };
  },
};
```

### Auto Wrap

```html
<van-space wrap>
  <van-button type="primary" block>Button</van-button>
  <van-button type="primary" block>Button</van-button>
  <van-button type="primary" block>Button</van-button>
  <van-button type="primary" block>Button</van-button>
  <van-button type="primary" block>Button</van-button>
  <van-button type="primary" block>Button</van-button>
  <van-button type="primary" block>Button</van-button>
  <van-button type="primary" block>Button</van-button>
</van-space>
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| direction | Spacing direction | _vertical \| horizontal_ | `horizontal` |
| size | Spacing size, such as `20px` `2em`. The default unit is px, supports using array to set horizontal and vertical spacing | _number \| string \| number[] \| string[]_ | `8px` |
| align | Spacing alignment | _start \| end \| center \| baseline_ | - |
| wrap | Whether to wrap automatically, only for horizontal alignment | _boolean_ | `false` |
| fill | Whether to render Space as a block element and fill the parent element | _boolean_ | `false` |

### Slots

| Name    | Description  |
| ------- | ------------ |
| default | Default slot |

### Types

The component exports the following type definitions:

```ts
import type { SpaceProps, SpaceSize, SpaceAlign } from 'vant';
```
