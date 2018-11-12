## SwipeCell

### Install
``` javascript
import { SwipeCell } from 'vant';

Vue.use(SwipeCell);
```

### Usage

#### Basic Usage

```html
<van-swipe-cell :right-width="65" :left-width="65">
  <span slot="left">Select</span>
  <van-cell-group>
    <van-cell title="Cell" value="Cell Content" />
  </van-cell-group>
  <span slot="right">Delete</span>
</van-swipe-cell>
```

#### Async close

```html
<van-swipe-cell :right-width="65" :left-width="65" :on-close="onClose">
  <span slot="left">Select</span>
  <van-cell-group>
    <van-cell title="Cell" value="Cell Content" />
  </van-cell-group>
  <span slot="right">Delete</span>
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

### API

| Attribute | Description | Type | Default |
|------|------|------|------|
| left-width | Width of the left scrollable area | `Number` | `0` |
| right-width | Width of the right scrollable area | `Number` | `0` |
| on-close | Callback function before close | `Function` | - |
| disabled | Whether to disabled swipe | `Boolean` | `false` |

### Slot

| name | Description |
|------|------|
| - | custom content |
| left | content of left scrollable area |
| right | content of right scrollabe area |

### Event

| Event | Description | Arguments |
|------|------|------|
| click | Triggered when clicked | Click positon (`left` `right` `cell` `outside`) |

### onClose Params

| Argument | Type | Description |
|------|------|------|
| clickPosition | `String` | Click positon (`left` `right` `cell` `outside`) |
| instance | `Object` | SwipeCell instance |

### Methods

Use ref to get SwipeCell instance and call instance methods

| Name | Attribute | Return value | Description |
|------|------|------|------|
| open | position: 'left' \| 'right' | - | open SwipeCell |
| close | - | - | close SwipeCell |
