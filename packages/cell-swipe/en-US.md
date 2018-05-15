## CellSwipe

### Install
``` javascript
import { CellSwipe } from 'vant';

Vue.use(CellSwipe);
```

### Usage

#### Basic Usage

```html
<van-cell-swipe :right-width="65" :left-width="65">
  <span slot="left">Select</span>
  <van-cell-group>
    <van-cell title="Cell" value="Cell Content" />
  </van-cell-group>
  <span slot="right">Delete</span>
</van-cell-swipe>
```

#### Async close

```html
<van-cell-swipe :right-width="65" :left-width="65" :on-close="onClose">
  <span slot="left">Select</span>
  <van-cell-group>
    <van-cell title="Cell" value="Cell Content" />
  </van-cell-group>
  <span slot="right">Delete</span>
</van-cell-swipe>
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
|-----------|-----------|-----------|-------------|
| left-width | Width of the left scrollable area | `Number` | `0` |
| right-width | Width of the right scrollable area | `Number` | `0` |
| on-close | Callback function before close | `Function` | - |

### Slot

| name | Description |
|-----------|-----------|
| - | custom content |
| left | content of left scrollable area |
| right | content of right scrollabe area |

### onClose Params
| Argument | Type | Description |
|-----------|-----------|-----------|
| clickPosition | `String` | Click positon (`left` `right` `cell` `outside`) |
| instance | `Object` | CellSwipe instance with a close method |
