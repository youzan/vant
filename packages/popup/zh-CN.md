# Popup 弹出层

### 引入

``` javascript
import { Popup } from 'vant';

Vue.use(Popup);
```

## 代码演示

### 基础用法

`Popup`默认从中间弹出

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

### 弹出位置

通过`position`属性设置`Popup`弹出位置

```html
<van-popup v-model="show" position="top" :overlay="false">
  内容
</van-popup>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| v-model | 当前组件是否显示 | `Boolean` | `false` | - |
| overlay | 是否显示遮罩层 | `Boolean` | `true` | - |
| position | 位置，可选值为 `top` `bottom` <br> `right` `left` | `String` | `center` | - |
| overlay-class | 自定义遮罩层类名 | `String` | - | - |
| overlay-style | 自定义遮罩层样式 | `Object` | - | - |
| transition | 动画类名，用法与原生`transtion`组件的`name`属性一致 | `String` | - | - |
| duration | 动画时长，单位秒 | `Number` | `0.3` | 2.0.0 |
| get-container | 指定挂载的节点，可以传入选择器，<br>或一个返回节点的函数 | `String | () => HTMLElement` | - | - |
| close-on-click-overlay | 是否在点击遮罩层后关闭 | `Boolean` | `true` | - |
| lock-scroll | 是否锁定背景滚动 | `Boolean` | `true` | 1.0.0 |
| lazy-render | 是否在显示弹层时才渲染节点 | `Boolean` | `true` | 1.1.5 |

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| click | 点击弹出层时触发 | - |
| open | 打开弹出层时触发 | - |
| opened | 打开弹出层且动画结束后触发 | - |
| close | 关闭弹出层时触发 | - |
| closed | 关闭弹出层且动画结束后触发 | - |
| click-overlay | 点击遮罩层时触发 | - |
