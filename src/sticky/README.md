# Sticky

### Install

```js
import Vue from 'vue';
import { Sticky } from 'vant';

Vue.use(Sticky);
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
  <van-button type="info">Offset Top</van-button>
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
  data() {
    return {
      container: null
    };
  },
  mounted() {
    this.container = this.$refs.container;
  }
};
```

## API

### Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| offset-top | Offset top | *number \| string* | `0` |
| z-index | z-index when sticky | *number \| string* | `99` |
| container | Container DOM | *Element* | - |

### Events

| Event | Description | Arguments |
|------|------|------|
| scroll | Triggered when scroll | object: { scrollTop, isFixed } |
