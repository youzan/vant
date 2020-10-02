# Badge

### Install

```js
import { createApp } from 'vue';
import { Badge } from 'vant';

const app = createApp();
app.use(Badge);
```

## Usage

### Basic Usage

```html
<van-badge content="5">
  <div class="child" />
</van-badge>
<van-badge dot>
  <div class="child" />
</van-badge>

<style>
  .child {
    width: 36px;
    height: 36px;
    background: #f2f3f5;
    border-radius: 4px;
  }
</style>
```

### Max

```html
<van-badge content="20" max="9">
  <div class="child" />
</van-badge>
<van-badge content="200" max="99">
  <div class="child" />
</van-badge>
```

### Custom Color

```html
<van-badge content="5" color="#1989fa">
  <div class="child" />
</van-badge>
<van-badge dot color="#1989fa">
  <div class="child" />
</van-badge>
```

### Standaline

```html
<van-badge content="200" max="99" />
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| content | Badge content | _number \| string_ | - |
| color | Background color | _string_ | `#ee0a24` |
| dot | Whether to show dot | _boolean_ | `false` |
| max | Max value，show `{max}+` when exceed，only works when content is number | _number \| string_ | - |

### Slots

| Name    | Description  |
| ------- | ------------ |
| default | Default slot |
