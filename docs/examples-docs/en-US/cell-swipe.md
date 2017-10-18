## CellSwipe

### Install
``` javascript
import { CellSwipe } from 'vant';

Vue.component(CellSwipe.name, CellSwipe);
```

### Usage

#### Basic Usage

:::demo Basic Usage
```html
<van-cell-swipe :right-width="65" :left-width="65">
  <span slot="left">选择</span>
  <van-cell-group>
    <van-cell title="单元格1" value="单元格1内容"></van-cell>
  </van-cell-group>
  <span slot="right">删除</span>
</van-cell-swipe>
```
:::

### API

| Attribute | Description | Type | Default | Accepted Values |
|-----------|-----------|-----------|-------------|-------------|
| left-width | 左侧滑动区域宽度 | `Number` | `0` | - |
| right-width | 右侧滑动区域宽度 | `Number` | `0` | - |

### Slot

| name | Description |
|-----------|-----------|
| - | 自定义显示内容 |
| left | 左侧滑动内容 |
| right | 右侧滑动内容 |
