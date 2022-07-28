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
  <van-button type="primary">按钮</van-button>
  <van-button type="primary">按钮</van-button>
  <van-button type="primary">按钮</van-button>
  <van-button type="primary">按钮</van-button>
  <van-button type="primary">按钮</van-button>
</van-space>
```

### Vertical Arrangement

```html
<van-space direction="vertical" fill>
  <van-button type="primary" block>按钮</van-button>
  <van-button type="primary" block>按钮</van-button>
  <van-button type="primary" block>按钮</van-button>
</van-space>
```

### Size

```html
<van-radio-group v-model="size" direction="horizontal">
  <van-radio name="small">small</van-radio>
  <van-radio name="">默认</van-radio>
  <van-radio name="large">large</van-radio>
</van-radio-group>
<van-space>
  <van-button type="primary">按钮</van-button>
  <van-button type="primary">按钮</van-button>
  <van-button type="primary">按钮</van-button>
</van-space>
```

```js
import { SpaceSize } from '../Space';
const size = ref < SpaceSize > '';
```

### Alignment

```html
<van-radio-group v-model="align" direction="horizontal">
  <van-radio name="start">start</van-radio>
  <van-radio name="center">center</van-radio>
  <van-radio name="end">end</van-radio>
  <van-radio name="baseline">baseline</van-radio>
</van-radio-group>
<br />
<van-space :align="align" style="padding: 10px;background: #f3f2f5;">
  <div>Space</div>
  <van-button type="primary">按钮</van-button>
  <div style="padding: 20px;border: 1px solid #eee">
    <div>标题</div>
    <div>内容</div>
  </div>
</van-space>
```

```js
import { SpaceAlign } from '../Space';
const align = ref < SpaceAlign > 'center';
```

### Wrap

```html
<van-space wrap>
  <van-button type="primary" block>按钮</van-button>
  <van-button type="primary" block>按钮</van-button>
  <van-button type="primary" block>按钮</van-button>
  <van-button type="primary" block>按钮</van-button>
  <van-button type="primary" block>按钮</van-button>
  <van-button type="primary" block>按钮</van-button>
  <van-button type="primary" block>按钮</van-button>
  <van-button type="primary" block>按钮</van-button>
  <van-button type="primary" block>按钮</van-button>
  <van-button type="primary" block>按钮</van-button>
  <van-button type="primary" block>按钮</van-button>
  <van-button type="primary" block>按钮</van-button>
  <van-button type="primary" block>按钮</van-button>
</van-space>
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| direction | Spacing direction | vertical \| horizontal | horizontal |
| align | Spacing alignment | start \| end \| center \| baseline | - |
| size | Spacing size, support to formulate horizontal and vertical spacing respectively | number \| small \| large \| [SpaceSize, SpaceSize] | - |
| wrap | Whether to wrap lines automatically is only applicable to horizontal arrangement | boolean | false |
| fill | Whether to fill the whole line | boolean | false |

### Slots

| Name    | Description  |
| ------- | ------------ |
| default | Default slot |

### Types

The component exports the following type definitions:

```ts
import type { SpaceProps, SpaceSize, SpaceAlign } from 'vant';
```
