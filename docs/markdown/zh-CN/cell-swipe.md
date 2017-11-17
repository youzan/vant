## CellSwipe 滑动单元格

### 使用指南
``` javascript
import { CellSwipe } from 'vant';

Vue.component(CellSwipe.name, CellSwipe);
```

### 代码演示

#### 基础用法

```html
<van-cell-swipe :right-width="65" :left-width="65">
  <span slot="left">选择</span>
  <van-cell-group>
    <van-cell title="单元格" value="内容" />
  </van-cell-group>
  <span slot="right">删除</span>
</van-cell-swipe>
```

### API

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| left-width | 左侧滑动区域宽度 | `Number` | `0` | - |
| right-width | 右侧滑动区域宽度 | `Number` | `0` | - |

### Slot

| name | 描述 |
|-----------|-----------|
| - | 自定义显示内容 |
| left | 左侧滑动内容 |
| right | 右侧滑动内容 |
