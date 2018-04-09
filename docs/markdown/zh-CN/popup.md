## Popup 弹出层

### 使用指南
``` javascript
import { Popup } from 'vant';

Vue.use(Popup);
```

### 代码演示

#### 基础用法
`popup`默认从中间弹出

```html
<van-popup v-model="show">内容</van-popup>
```

```javascript
export default {
  data() {
    return {
      show: false
    }
  }
};
```

#### 弹出位置
通过`position`属性设置 Popup 弹出位置

```html
<van-popup v-model="show" position="top" :overlay="false">
  内容
</van-popup>
```

### API

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| v-model | 当前组件是否显示 | `Boolean` | `false` | - |
| overlay | 是否显示背景蒙层 | `Boolean` | `true` | - |
| lock-scroll | 是否锁定背景滚动 | `Boolean` | `true` | - |
| position | Popup 位置 | `String` | - | `top` `bottom` `right` `left` |
| overlay-class | 自定义蒙层 class | `String` | `` | - |
| overlay-style | 自定义蒙层样式 | `Object` | `` | - |
| close-on-click-overlay | 点击蒙层是否关闭 Popup | `Boolean` | `true` | - |
| transition | transition 名称 | `String` | `popup-slide` | - |
| get-container | 指定弹出层挂载的 HTML 节点 | `Function` | - | `() => HTMLElement` |

### Event

| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|
| click-overlay | 点击蒙层时触发 | - |
