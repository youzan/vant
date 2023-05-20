# FloatingBubble 浮动气泡

### Intro

Clickable bubbles that hover around the edge of the page.

### Install

Register component globally via `app.use`, refer to [Component Registration](#/en-US/advanced-usage#zu-jian-zhu-ce) for more registration ways.

```js
import { createApp } from 'vue';
import { FloatingBubble } from 'vant';

const app = createApp();
app.use(FloatingBubble);
```

## Usage

### Basic Usage

In the default x position, drag in the y direction is allowed.

```html
<van-floating-bubble @click="onClick" />
```

```js
import { showToast } from 'vant';

export default {
  setup() {
    const onClick = () => {
      showToast('点击气泡');
    };
    return { onClick };
  },
};
```

### Free drag and magnetic

Allow x and y drags to attach to the nearest side of the x axis.

```html
<van-floating-bubble axis="xy" magnetic="x" @offset-change="onOffsetChange" />
```

```js
import { showToast } from 'vant';

export default {
  setup() {
    const onOffsetChange = (offset: OffsetType) => {
      showToast(offset.x + '__' + offset.y);
    };
    return { onOffsetChange };
  },
};
```

### Use v-model

Use `v-model:offset` control the position.

```html
<van-floating-bubble v-model:offset="offset" axis="xy" />
```

```js
export default {
  setup() {
    const offset = ref < OffsetType > { x: 200, y: 400 };
    return { offset };
  },
};
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| v-model:offset | Control bubble position | _OffsetType_ | `{x: -1, y: -1}` |
| axis | Drag direction, 'xy' stands for free drag | _'x' \| 'y' \| 'xy'_ | `y` |
| magnetic | Direction of automatic magnetic absorption | _'x' \| 'y'_ | - |
| space | Minimum space between the bubble and the window, unit `px` | _number_ | `24` |
| teleport | Specifies a target element where BackTop will be mounted | _string \| Element_ | `body` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| click | Triggered when a component is clicked | - |
| offset-change | Triggered after position change | _{x: string, y: string}_ |

### Slots

| Name    | Description                          |
| ------- | ------------------------------------ |
| default | Customize the bubble display content |

### 类型定义

The component exports the following type definitions:

```ts
import type { FloatingBubbleProps, OffsetType } from 'vant';
```

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/config-provider).

| Name | Default Value | Description |
| --- | --- | --- |
| --van-floating-bubble-size | _48px_ | - |
| --van-floating-bubble-initial-space | _24px_ | - |
| --van-floating-bubble-background | _var(--van-primary-color)_ | - |
| --van-floating-bubble-color | _var(--van-background-2)_ | - |
| --van-floating-bubble-z-index | _9999_ | - |
