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
| lockOnScroll | 背景是否跟随滚动 | `Boolean` | `false` | - |
| position | Popup 位置 | `String` | - | `top` `bottom` `right` `left` |
| overlayClass | 自定义蒙层 class | `String` | `` | - |
| overlayStyle | 自定义蒙层样式 | `Object` | `` | - |
| closeOnClickOverlay | 点击蒙层是否关闭 Popup | `Boolean` | `true` | - |
| transition | transition 名称 | `String` | `popup-slide` | - |
| preventScroll | 是否防止滚动穿透 | `Boolean` | `false` | - |
