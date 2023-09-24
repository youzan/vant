# FloatingPanel

### Intro

A panel that floats at the bottom of a page, which can be dragged up and down to browse content, often used to provide additional functionality or information. Please upgrade `vant` to >= v4.5.0 before using this component.

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

The default height of FloatingPanel is `100px`, and users can drag it to expand the panel to a height of `60%` of the screen height.

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

You can set the anchor position of FloatingPanel through the `anchors` attribute, and control the display height of the current panel through `v-model:height`.

For example, you can make the panel stop at three positions: `100px`, 40% of the screen height, and 70% of the screen height.

```html
<van-floating-panel v-model:height="height" :anchors="anchors">
  <div style="text-align: center; padding: 15px">
    <p>Panel Show Height {{ height.toFixed(0) }} px</p>
  </div>
</van-floating-panel>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const anchors = [
      100,
      Math.round(0.4 * window.innerHeight),
      Math.round(0.7 * window.innerHeight),
    ];
    const height = ref(anchors[0]);

    return { anchors, height };
  },
};
```

### Head Drag Only

By default, both the header and content areas of FloatingPanel can be dragged, but you can disable dragging of the content area through the `content-draggable` attribute.

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
| v-model:height | The current display height of the panel | _number \| string_ | `0` |
| anchors | Setting custom anchors, unit `px` | _number[]_ | `[100, window.innerWidth * 0.6]` |
| duration | Transition duration, unit second | _number \| string_ | `0.3` |
| content-draggable | Allow dragging content | _boolean_ | `true` |
| lock-scroll `v4.6.4` | When not dragging, Whether to lock background scroll | _boolean_ | `false` |
| safe-area-inset-bottom | Whether to enable bottom safe area adaptation | _boolean_ | `true` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| height-change | Emitted when panel height is changed and the dragging is finished | _{ height: number }_ |

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
| --van-floating-panel-bar-width     | _20px_                    | -           |
| --van-floating-panel-bar-height    | _3px_                     | -           |
| --van-floating-panel-bar-color     | _var(--van-gray-5)_       | -           |
