<style>
.van-cell-swipe__left,
.van-cell-swipe__right {
    color: #FFFFFF;
    font-size: 16px;
    width: 65px;
    height: 44px;
    display: inline-block;
    text-align: center;
    line-height: 44px;
}
.van-cell-swipe__left {
  background-color: #FF4444;  
}
.van-cell-swipe__right {
  background-color: #84c483;
}
</style>
## CellSwipe 滑动单元格

### 使用指南
``` javascript
import { CellSwipe } from 'vant';

Vue.component(CellSwipe.name, CellSwipe);
```

### 代码演示

#### 基础用法

:::demo 基础用法
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

| 参数       | 说明      | 类型       | 默认值       | 可选值       |
|-----------|-----------|-----------|-------------|-------------|
| left-width | 左侧滑动区域宽度 | `Number`  | `0` | - |
| right-width | 右侧滑动区域宽度 | `Number`  | `0` | - |

### Slot

| name       | 描述      |
|-----------|-----------|
| - | 自定义显示内容 |
| left | 左侧滑动内容 |
| right | 右侧滑动内容 |
