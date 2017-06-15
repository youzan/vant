
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
## 滑动单元格

### 使用指南

如果你已经按照快速上手中引入了整个`vant`，以下**组件注册**就可以忽略了，因为你已经全局注册了`vant`中的全部组件。

#### 全局注册

你可以在全局注册`Cell Swipe`组件，比如页面的主文件（`index.js`，`main.js`），这样页面任何地方都可以直接使用`Cell Swipe`组件了：

```js
import Vue from 'vue';
import { CellSwipe } from 'vant';
import 'vant/lib/vant-css/cell-swipe.css';

Vue.component(CellSwipe.name, CellSwipe);
```

#### 局部注册

如果你只是想在某个组件中使用，你可以在对应组件中注册`Cell Swipe`组件，这样只能在你注册的组件中使用`Cell Swipe`：

```js
import { CellSwipe } from 'vant';

export default {
  components: {
    'van-cell-swipe': CellSwipe
  }
};
```

### 代码演示

#### 基础用法

:::demo 基础用法
```html
<van-cell-swipe :right-width="65" :left-width="65">
  <van-cell-group>
    <van-cell title="单元格1" value="单元格1内容"></van-cell>
  </van-cell-group>
  
  <span slot="right" class="swipe-delete-btn">
      删除
  </span>
  <span slot="left" class="swipe-check-btn">
      选择
  </span>
</van-cell-swipe>
```
:::


### API

| 参数       | 说明      | 类型       | 默认值       | 可选值       |
|-----------|-----------|-----------|-------------|-------------|
| right-width | 右侧滑动按钮宽度 | `number`  |      0     |           |
| left-width | 左侧滑动按钮宽度 | `number`  |       0    |           |

### Slot

| name       | 描述      |
|-----------|-----------|
| - | 自定义显示内容 |
| right | 右侧滑动内容 |
| left | 左侧滑动内容 |
