# FloatingBubble

### Intro

Clickable bubbles that hover around the edge of the page. Please upgrade `vant` to >= v4.6.0 before using this component.

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

The floating bubble is displayed by default in the bottom right corner and allows vertical dragging in the y-axis direction. You can set the icon of the bubble using the `icon` prop.

```html
<van-floating-bubble icon="chat" @click="onClick" />
```

```js
import { showToast } from 'vant';

export default {
  setup() {
    const onClick = () => {
      showToast('Click Bubble');
    };
    return { onClick };
  },
};
```

### Free Magnetic

Allow x and y drags to attach to the nearest side of the x axis.

```html
<van-floating-bubble
  axis="xy"
  icon="chat"
  magnetic="x"
  @offset-change="onOffsetChange"
/>
```

```js
import { showToast } from 'vant';

export default {
  setup() {
    const onOffsetChange = (offset) => {
      showToast(`x: ${offset.x.toFixed(0)}, y: ${offset.y.toFixed(0)}`);
    };
    return { onOffsetChange };
  },
};
```

### Use v-model

Use `v-model:offset` control the position.

```html
<van-floating-bubble v-model:offset="offset" axis="xy" icon="chat" />
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const offset = ref({ x: 200, y: 400 });
    return { offset };
  },
};
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| v-model:offset | Control bubble position | _OffsetType_ | `Default right-bottom coordinate` |
| axis | Drag direction, `xy` stands for free drag, `lock` stands for disable drag | _'x' \| 'y' \| 'xy' \| 'lock'_ | `y` |
| magnetic | Direction of automatic magnetic absorption | _'x' \| 'y'_ | - |
| icon | Bubble icon | _string_ | - |
| gap | Minimum gap between the bubble and the window, unit `px` | _number_ | `24` |
| teleport | Specifies a target element where BackTop will be mounted | _string \| Element_ | `body` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| click | Triggered when a component is clicked | _MouseEvent_ |
| offset-change | Triggered when the position changes due to user dragging | _{x: string, y: string}_ |

### Slots

| Name    | Description                          |
| ------- | ------------------------------------ |
| default | Customize the bubble display content |

### Types

The component exports the following type definitions:

```ts
export type {
  FloatingBubbleProps,
  FloatingBubbleAxis,
  FloatingBubbleMagnetic,
  FloatingBubbleOffset,
} from 'vant';
```

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/config-provider).

| Name | Default Value | Description |
| --- | --- | --- |
| --van-floating-bubble-size | _48px_ | - |
| --van-floating-bubble-initial-gap | _24px_ | - |
| --van-floating-bubble-icon-size | _28px_ | - |
| --van-floating-bubble-background | _var(--van-primary-color)_ | - |
| --van-floating-bubble-color | _var(--van-background-2)_ | - |
| --van-floating-bubble-z-index | _999_ | - |
| --van-floating-bubble-border-radius | _--van-floating-bubble-border-radius_ | - |
