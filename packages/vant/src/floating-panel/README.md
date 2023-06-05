# FloatingPanel

### Intro

A panel that floats at the bottom of a page, which can be dragged up and down to browse content, often used to provide additional functionality or information.

### Install

Register component globally via `app.use`, refer to [Component Registration](#/en-US/advanced-usage#zu-jian-zhu-ce) for more registration ways.

```js
import { createApp } from 'vue';
import { FloatingPanel } from 'vant';

const app = createApp();
app.use(FloatingPanel);
```

## Usage

### Basic Usage

```html
<van-floating-panel>
  <van-cell-group>
    <van-cell
      v-for="i in 26"
      :key="i"
      :title="String.fromCharCode(i + 64)"
      size="large"
    />
  </van-cell-group>
</van-floating-panel>
```

### Custom Anchors

```html
<van-floating-panel :anchors="anchors" @height-change="onHeightChange">
  <div style="text-align: center; padding: 15px">
    <p>Panel Show Height {{ height }} px</p>
  </div>
</van-floating-panel>
```

```ts
const anchors = [
  100,
  Math.round(0.4 * window.innerHeight),
  Math.round(0.7 * window.innerHeight),
];
const height = ref(anchors[0]);
const onHeightChange = (h: number) => {
  height.value = h;
};
```

### Head Drag Only

```html
<van-floating-panel :content-draggable="false">
  <div style="text-align: center; padding: 15px">
    <p>Content cannot be dragged</p>
  </div>
</van-floating-panel>
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| anchors | Setting custom anchors, unit `px` | _number[]_ | `[100, window.innerWidth * 0.6]` |
| content-draggable | Allow dragging content | _boolean_ | `true` |
| safe-area-inset-bottom | Whether to enable bottom safe area adaptation | _boolean_ | `true` |

### Events

| Event         | Description                          | Arguments        |
| ------------- | ------------------------------------ | ---------------- |
| height-change | Emitted when panel height is changed | _height: number_ |

### Slots

| Name    | Description          |
| ------- | -------------------- |
| default | Custom panel content |

### Types

The component exports the following type definitions:

```ts
import type { FloatingPanelProps } from 'vant';
```

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/config-provider).

| Name                               | Default Value             | Description |
| ---------------------------------- | ------------------------- | ----------- |
| --van-floating-panel-border-radius | _16px_                    | -           |
| --van-floating-panel-header-height | _30px_                    | -           |
| --van-floating-panel-z-index       | _999_                     | -           |
| --van-floating-panel-background    | _var(--van-background-2)_ | -           |
