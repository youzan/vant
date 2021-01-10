# Sticky

### Install

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

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| offset-top | Offset top, supports `px` `vw` `vh` `rem` unit, default `px` | _number \| string_ | `0` |
| z-index | z-index when sticky | _number \| string_ | `99` |
| container | Container DOM | _Element_ | - |

### Events

| Event  | Description            | Arguments                      |
| ------ | ---------------------- | ------------------------------ |
| scroll | Emitted when scrolling | object: { scrollTop, isFixed } |

### Less Variables

How to use: [Custom Theme](#/en-US/theme).

| Name            | Default Value | Description |
| --------------- | ------------- | ----------- |
| @sticky-z-index | `99`          | -           |
