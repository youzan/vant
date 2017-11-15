## CellSwipe

### Install
``` javascript
import { CellSwipe } from 'vant';

Vue.component(CellSwipe.name, CellSwipe);
```

### Usage

#### Basic Usage

```html
<van-cell-swipe :right-width="65" :left-width="65">
  <span slot="left">Select</span>
  <van-cell-group>
    <van-cell title="Cell" value="Cell Content"></van-cell>
  </van-cell-group>
  <span slot="right">Delete</span>
</van-cell-swipe>
```

### API

| Attribute | Description | Type | Default | Accepted Values |
|-----------|-----------|-----------|-------------|-------------|
| left-width | Width of the left scrollable area | `Number` | `0` | - |
| right-width | Width of the right scrollable area | `Number` | `0` | - |

### Slot

| name | Description |
|-----------|-----------|
| - | custom content |
| left | content of left scrollable area |
| right | content of right scrollabe area |
