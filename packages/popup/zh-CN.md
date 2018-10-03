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

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| v-model | 当前组件是否显示 | `Boolean` | `false` |
| overlay | 是否显示背景蒙层 | `Boolean` | `true` |
| lock-scroll | 是否锁定背景滚动 | `Boolean` | `true` |
| position | 可选值为 `top` `bottom` `right` `left` | `String` | - |
| overlay-class | 自定义蒙层 class | `String` | `` |
| overlay-style | 自定义蒙层样式 | `Object` | `` |
| close-on-click-overlay | 点击蒙层是否关闭 Popup | `Boolean` | `true` |
| transition | transition 名称 | `String` | `popup-slide` |
| lazy-render | 是否在首次显示弹层时才渲染 DOM 节点 | `Boolean` | `true` |
| get-container | 指定挂载的节点，可以传入 CSS 选择器，<br>或一个返回 DOM 节点的函数 | `String | () => HTMLElement` | - |

### Event

| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|
| click-overlay | 点击蒙层时触发 | - |

### 更新日志

| 版本 | 类型 | 内容 |
|-----------|-----------|-----------|
| 1.3.0 | improvement | 优化过渡动画时长
| 1.3.0 | feature | get-container 属性支持传入 CSS 选择器
| 1.2.1 | bugfix | 修复使用 get-container 属性时 DOM 不能被正确销毁的问题
| 1.1.8 | bugfix | 修复内容过高时超出屏幕可视范围的问题
| 1.1.5 | feature | 新增 lazy-render 属性
| 1.1.0 | bugfix | 修复多层级关闭时未正确移除 lock-scroll 导致无法滚动的问题
| 1.0.8 | bugfix | 修复 lock-scroll 属性在 iOS 下无效的问题
| 1.0.4 | bugfix | 修复多层弹出时 lock-scroll 失效的问题
| 1.0.0 | breaking change | 新增 lock-scroll 属性，废弃 lock-on-scroll、prevent-scroll 属性
