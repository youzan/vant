# Sticky

### Intro

The sticky component is consistent with the effect achieved by the `position: sticky` property in CSS, in that when the component is within screen range, it will follow the normal layout arrangement, and when the component rolls out of screen range, it will always be fixed at the top of the screen.

### Install

Register component globally via `app.use`, refer to [Component Registration](#/en-US/advanced-usage#zu-jian-zhu-ce) for more registration ways.

```js
import { createApp } from 'vue';
import { Sticky } from 'vant';

const app = createApp();
app.use(Sticky);
```

## Usage

### Basic Usage

```html
<van-sticky>
  <van-button type="primary">Basic Usage</van-button>
</van-sticky>
```

### Offset Top

```html
<van-sticky :offset-top="50">
  <van-button type="primary">Offset Top</van-button>
</van-sticky>
```

### Set Container

```html
<div ref="container" style="height: 150px;">
  <van-sticky :container="container">
    <van-button type="warning">Set Container</van-button>
  </van-sticky>
</div>
```

```js
export default {
  setup() {
    const container = ref(null);
    return { container };
  },
};
```

### Offset Bottom

```html
<van-sticky :offset-bottom="50" position="bottom">
  <van-button type="primary">Offset Bottom</van-button>
</van-sticky>
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| position | Offset position, can be set to `bottom` | _string_ | `top` |
| offset-top | Offset top, supports `px` `vw` `vh` `rem` unit, default `px` | _number \| string_ | `0` |
| offset-bottom | Offset bottom, supports `px` `vw` `vh` `rem` unit, default `px` | _number \| string_ | `0` |
| z-index | z-index when sticky | _number \| string_ | `99` |
| container | Container DOM | _Element_ | - |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| change | Emitted when sticky status changed | _isFixed: boolean_ |
| scroll | Emitted when scrolling | _{ scrollTop: number, isFixed: boolean }_ |

### Types

The component exports the following type definitions:

```ts
import type { StickyProps, StickyPosition } from 'vant';
```

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/config-provider).

| Name                 | Default Value | Description |
| -------------------- | ------------- | ----------- |
| --van-sticky-z-index | _99_          | -           |
