## SwipeCell 滑动单元格

### 使用指南
``` javascript
import { SwipeCell } from 'vant';

Vue.use(SwipeCell);
```

### 代码演示

#### 基础用法

```html
<van-swipe-cell :right-width="65" :left-width="65">
  <span slot="left">选择</span>
  <van-cell-group>
    <van-cell title="单元格" value="内容" />
  </van-cell-group>
  <span slot="right">删除</span>
</van-swipe-cell>
```

#### 异步关闭

```html
<van-swipe-cell :right-width="65" :left-width="65" :on-close="onClose">
  <span slot="left">选择</span>
  <van-cell-group>
    <van-cell title="单元格" value="内容" />
  </van-cell-group>
  <span slot="right">删除</span>
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
            message: '确定删除吗？'
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

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| left-width | 左侧滑动区域宽度 | `Number` | `0` | - |
| right-width | 右侧滑动区域宽度 | `Number` | `0` | - |
| on-close | 关闭时的回调函数 | `Function` | - | - |
| disabled | 是否禁用滑动 | `Boolean` | `false` | 1.3.4 |

### Slot

| 名称 | 说明 |
|------|------|
| - | 自定义显示内容 |
| left | 左侧滑动内容 |
| right | 右侧滑动内容 |

### Event

| 事件名 | 说明 | 参数 |
|------|------|------|
| click | 点击时触发 | 关闭时的点击位置 (`left` `right` `cell` `outside`) |

### onClose 参数

| 参数 | 类型 | 说明 |
|------|------|------|
| clickPosition | `String` | 关闭时的点击位置 (`left` `right` `cell` `outside`) |
| instance | `Object` | SwipeCell 实例 |

### 方法

通过 ref 可以获取到 SwipeCell 实例并调用实例方法

| 方法名 | 参数 | 返回值 | 介绍 |
|------|------|------|------|
| open | position: `left | right` | - | 打开单元格侧边栏 |
| close | - | - | 收起单元格侧边栏 |
