# SwipeCell

### Install

``` javascript
import Vue from 'vue';
import { SwipeCell } from 'vant';

Vue.use(SwipeCell);
```

## Usage

### Basic Usage

```html
<van-swipe-cell>
  <template slot="left">
    <van-button square type="primary" text="Select" />
  </template>

  <van-cell :border="false" title="Cell" value="Cell Content" />

  <template slot="right">
    <van-button square type="danger" text="Delete" />
    <van-button square type="primary" text="Collect"/>
  </template>
</van-swipe-cell>
```

### Async close

```html
<van-swipe-cell :on-close="onClose">
  <template slot="left">
    <van-button square type="primary" text="Select" />
  </template>

  <van-cell :border="false" title="Cell" value="Cell Content" />

  <template slot="right">
    <van-button square type="danger" text="Delete" />
  </template>
</van-swipe-cell>
```

```js
export default {
  methods: {
    onClose(clickPosition, instance) {
      switch (clickPosition) {
        case 'left':
        case 'cell':
        case 'outside':
          instance.close();
          break;
        case 'right':
          Dialog.confirm({
            message: 'Are you sure to delete?'
          }).then(() => {
            instance.close();
          });
          break;
      }
    }
  }
}
```

## API

### Props

| Attribute | Description | Type | Default | Version |
|------|------|------|------|------|
| name | Identifier of SwipeCell | *string \| number* | - | 2.0.4 |
| on-close | Callback function before close | *Function* | - | - |
| disabled | Whether to disabled swipe | *boolean* | `false` | - |
| left-width | Width of the left swipe area | *number* | `auto` | - |
| right-width | Width of the right swipe area | *number* | `auto` | - |
| stop-propagation | Whether to stop touchmove event propagation | *boolean* | `false` | 2.1.0 |

### Slots

| Name | Description |
|------|------|
| default | custom content |
| left | content of left scrollable area |
| right | content of right scrollabe area |

### Events

| Event | Description | Arguments |
|------|------|------|
| click | Triggered when clicked | Click positon (`left` `right` `cell` `outside`) |
| open | Triggered when opened | { position: 'left' \| 'right' , name: string } |

### onClose Params

| Attribute | Description | Type |
|------|------|------|
| clickPosition | Click positon (`left` `right` `cell` `outside`) | *string* |
| instance | SwipeCell instance | *object* |
| detail | Detail info | *object* |

### Methods

Use ref to get SwipeCell instance and call instance methods

| Name | Description | Attribute | Return value |
|------|------|------|------|
| open | open SwipeCell | position: `left | right` | - |
| close | close SwipeCell | - | - |
