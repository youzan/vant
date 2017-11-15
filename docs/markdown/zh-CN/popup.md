## Popup 弹出层

### 使用指南
``` javascript
import { Popup } from 'vant';

Vue.component(Popup.name, Popup);
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
| overlay | 是否显示背景遮罩层 | `Boolean` | `true` | - |
| lockOnScroll | 背景是否跟随滚动 | `Boolean` | `false` | - |
| position | 弹出层位置 | `String` | - | `top` `bottom` `right` `left` |
| closeOnClickOverlay | 点击遮罩层是否关闭弹出层 | `Boolean` | `true` | - |
| transition | 弹出层的`transition` | `String` | `popup-slide` | - |
| preventScroll | 是否防止滚动穿透 | `Boolean` | `false` | - |
