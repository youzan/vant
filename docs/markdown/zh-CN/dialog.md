## Dialog 弹出框

### 使用指南

```js
import { Dialog } from 'vant';
```

### 代码演示

#### 消息提示
用于提示一些消息，只包含一个确认按钮

```javascript
Dialog.alert({
  title: '标题',
  message: '弹窗内容'
}).then(() => {
  // on close
});

Dialog.alert({
  message: '弹窗内容'
}).then(() => {
  // on close
});
```

#### 消息确认
用于确认消息，包含取消和确认按钮

```javascript
Dialog.confirm({
  title: '标题',
  message: '弹窗内容'
}).then(() => {
  // on confirm
}).catch(() => {
  // on cancel
});
```

#### 组件内调用
引入 Dialog 组件后，会自动在 Vue 的 prototype 上挂载 $dialog 方法，便于在组件内调用。

```js
export default {
  mounted() {
    this.$dialog.alert({
      message: '弹窗内容'
    });
  }
}
```

### 方法

| 方法名 | 参数 | 返回值 | 介绍 |
|-----------|-----------|-----------|-------------|
| Dialog.alert | options | `Promise` | 展示消息提示弹窗 |
| Dialog.confirm | options | `Promise` | 展示消息确认弹窗 |
| Dialog.setDefaultOptions | options | `void` | 修改默认配置，对所有 Dialog 生效 |
| Dialog.resetDefaultOptions | - | `void` | 重置默认配置，对所有 Dialog 生效 |
| Dialog.close | - | `void` | 关闭弹窗 |

### Options

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| title | 标题 | `String` | - | - |
| message | 内容 | `String` | - | - |
| showConfirmButton | 是否展示确认按钮 | `Boolean` |  `true` | - |
| showCancelButton | 是否展示取消按钮 | `Boolean` |  `false` | - |
| confirmButtonText | 确认按钮的文案 | `String` |  `确认` | - |
| cancelButtonText | 取消按钮的文案 | `String` | `取消` | - |
| overlay | 是否展示蒙层 | `Boolean` | `true` | - |
| closeOnClickOverlay | 点击蒙层时是否关闭弹窗 | `Boolean` | `false` | - |
| lockOnScroll | 是否禁用背景滚动 | `Boolean` | `true` | - |
