<style>
.swipe-delete-btn {
    background-color: #FF4444;
    color: #FFFFFF;
    font-size: 16px;
    width: 65px;
    height: 44px;
    display: inline-block;
    text-align: center;
    line-height: 44px;
}
.swipe-check-btn {
    background-color: #84c483;
    color: #FFFFFF;
    font-size: 16px;
    width: 65px;
    height: 44px;
    display: inline-block;
    text-align: center;
    line-height: 44px;
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
  <van-cell-group>
    <van-cell title="单元格1" value="单元格1内容"></van-cell>
  </van-cell-group>
  <span slot="right" class="swipe-delete-btn">删除</span>
  <span slot="left" class="swipe-check-btn">选择</span>
</van-cell-swipe>
```
:::


### API

| 参数       | 说明      | 类型       | 默认值       | 可选值       |
|-----------|-----------|-----------|-------------|-------------|
| left-width | 左侧滑动按钮宽度 | `number`  | 0 | |
| right-width | 右侧滑动按钮宽度 | `number`  | 0 | |

### Slot

| name       | 描述      |
|-----------|-----------|
| - | 自定义显示内容 |
| left | 左侧滑动内容 |
| right | 右侧滑动内容 |
