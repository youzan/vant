# Dialog 弹出框

### 介绍

弹出模态框，常用于消息提示、消息确认，或在当前页面内完成特定的交互操作。

弹出框组件支持函数调用和组件调用两种方式。

### 函数调用

Dialog 是一个函数，调用后会直接在页面中弹出相应的模态框。

```js
import { Dialog } from 'vant';

Dialog({ message: '提示' });
```

### 组件调用

通过组件调用 Dialog 时，可以通过下面的方式进行注册：

```js
import { createApp } from 'vue';
import { Dialog } from 'vant';

// 全局注册
const app = createApp();
app.use(Dialog);

// 局部注册
export default {
  components: {
    [Dialog.Component.name]: Dialog.Component,
  },
};
```

## 代码演示

### 消息提示

用于提示一些消息，只包含一个确认按钮。

```js
Dialog.alert({
  title: '标题',
  message: '弹窗内容',
}).then(() => {
  // on close
});

Dialog.alert({
  message: '弹窗内容',
}).then(() => {
  // on close
});
```

### 消息确认

用于确认消息，包含取消和确认按钮。

```js
Dialog.confirm({
  title: '标题',
  message: '弹窗内容',
})
  .then(() => {
    // on confirm
  })
  .catch(() => {
    // on cancel
  });
```

### 圆角按钮风格

将 theme 选项设置为 `round-button` 可以展示圆角按钮风格的弹窗，该选项从 2.10.0 版本开始支持。

```js
Dialog.alert({
  title: '标题',
  message: '弹窗内容',
  theme: 'round-button',
}).then(() => {
  // on close
});

Dialog.alert({
  message: '弹窗内容',
  theme: 'round-button',
}).then(() => {
  // on close
});
```

### 异步关闭

通过 `beforeClose` 属性可以传入一个回调函数，在弹窗关闭前进行特定操作。

```js
const beforeClose = (action, done) =>
  new Promsie((resolve) => {
    setTimeout(() => {
      if (action === 'confirm') {
        resolve(true);
      } else {
        // 拦截取消操作
        resolve(false);
      }
    }, 1000);
  });

Dialog.confirm({
  title: '标题',
  message: '弹窗内容',
  beforeClose,
});
```

### 全局方法

通过 `app.use` 注册 Dialog 组件后，会自动在 app 的所有子组件上挂载 `$dialog` 方法，在所有组件内部都可以直接调用此方法。

```js
export default {
  mounted() {
    this.$dialog.alert({
      message: '弹窗内容',
    });
  },
};
```

### 组件调用

如果需要在弹窗内嵌入组件或其他自定义内容，可以使用组件调用的方式。

```html
<van-dialog v-model:show="show" title="标题" show-cancel-button>
  <img src="https://img.yzcdn.cn/vant/apple-3.jpg" />
</van-dialog>
```

```js
export default {
  data() {
    return {
      show: false,
    };
  },
};
```

## API

### 方法

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| Dialog | 展示弹窗 | `options` | `Promise` |
| Dialog.alert | 展示消息提示弹窗 | `options` | `Promise` |
| Dialog.confirm | 展示消息确认弹窗 | `options` | `Promise` |
| Dialog.setDefaultOptions | 修改默认配置，对所有 Dialog 生效 | `options` | `void` |
| Dialog.resetDefaultOptions | 重置默认配置，对所有 Dialog 生效 | - | `void` |
| Dialog.close | 关闭弹窗 | - | `void` |

### Options

通过函数调用 `Dialog` 时，支持传入以下选项：

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 标题 | _string_ | - |
| width | 弹窗宽度，默认单位为`px` | _number \| string_ | `320px` |
| message | 文本内容，支持通过`\n`换行 | _string_ | - |
| messageAlign | 内容对齐方式，可选值为`left` `right` | _string_ | `center` |
| theme | 样式风格，可选值为`round` | _string_ | `default` |
| className | 自定义类名 | _any_ | - |
| showConfirmButton | 是否展示确认按钮 | _boolean_ | `true` |
| showCancelButton | 是否展示取消按钮 | _boolean_ | `false` |
| confirmButtonText | 确认按钮文案 | _string_ | `确认` |
| confirmButtonColor | 确认按钮颜色 | _string_ | `#ee0a24` |
| cancelButtonText | 取消按钮文案 | _string_ | `取消` |
| cancelButtonColor | 取消按钮颜色 | _string_ | `black` |
| overlay | 是否展示遮罩层 | _boolean_ | `true` |
| overlayClass | 自定义遮罩层类名 | _string_ | - |
| overlayStyle | 自定义遮罩层样式 | _object_ | - |
| closeOnPopstate | 是否在页面回退时自动关闭 | _boolean_ | `true` |
| closeOnClickOverlay | 是否在点击遮罩层后关闭弹窗 | _boolean_ | `false` |
| lockScroll | 是否锁定背景滚动 | _boolean_ | `true` |
| allowHtml `v2.8.7` | 是否允许 message 内容中渲染 HTML | _boolean_ | `false` |
| beforeClose | 关闭前的回调函数，<br>调用 done() 后关闭弹窗，<br>调用 done(false) 阻止弹窗关闭 | _(action, done) => void_ | - |
| transition | 动画类名，等价于 [transtion](https://cn.vuejs.org/v2/api/index.html#transition) 的`name`属性 | _string_ | - |
| teleport | 指定挂载的节点，[用法示例](#/zh-CN/popup#zhi-ding-gua-zai-wei-zhi) | _string \| Element_ | `body` |

### Props

通过组件调用 `Dialog` 时，支持以下 Props：

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model | 是否显示弹窗 | _boolean_ | - |
| title | 标题 | _string_ | - |
| width | 弹窗宽度，默认单位为 `px` | _number \| string_ | `320px` |
| message | 文本内容，支持通过 `\n` 换行 | _string_ | - |
| message-align | 内容对齐方式，可选值为 `left` `right` | _string_ | `center` |
| theme | 样式风格，可选值为 `round-button` | _string_ | `default` |
| show-confirm-button | 是否展示确认按钮 | _boolean_ | `true` |
| show-cancel-button | 是否展示取消按钮 | _boolean_ | `false` |
| confirm-button-text | 确认按钮文案 | _string_ | `确认` |
| confirm-button-color | 确认按钮颜色 | _string_ | `#ee0a24` |
| cancel-button-text | 取消按钮文案 | _string_ | `取消` |
| cancel-button-color | 取消按钮颜色 | _string_ | `black` |
| overlay | 是否展示遮罩层 | _boolean_ | `true` |
| overlay-class | 自定义遮罩层类名 | _string_ | - |
| overlay-style | 自定义遮罩层样式 | _object_ | - |
| close-on-popstate | 是否在页面回退时自动关闭 | _boolean_ | `true` |
| close-on-click-overlay | 是否在点击遮罩层后关闭弹窗 | _boolean_ | `false` |
| lazy-render | 是否在显示弹层时才渲染节点 | _boolean_ | `true` |
| lock-scroll | 是否锁定背景滚动 | _boolean_ | `true` |
| allow-html `v2.8.7` | 是否允许 message 内容中渲染 HTML | _boolean_ | `false` |
| before-close | 关闭前的回调函数，返回 `false` 可阻止关闭，支持返回 Promise | _(action) => boolean \| Promise_ | - |
| transition | 动画类名，等价于 [transtion](https://cn.vuejs.org/v2/api/index.html#transition) 的 `name` 属性 | _string_ | - |
| teleport | 指定挂载的节点，[用法示例](#/zh-CN/popup#zhi-ding-gua-zai-wei-zhi) | _string \| Element_ | - |

### Events

通过组件调用 `Dialog` 时，支持以下事件：

| 事件    | 说明                     | 回调参数 |
| ------- | ------------------------ | -------- |
| confirm | 点击确认按钮时触发       | -        |
| cancel  | 点击取消按钮时触发       | -        |
| open    | 打开弹窗时触发           | -        |
| close   | 关闭弹窗时触发           | -        |
| opened  | 打开弹窗且动画结束后触发 | -        |
| closed  | 关闭弹窗且动画结束后触发 | -        |

### Slots

通过组件调用 `Dialog` 时，支持以下插槽：

| 名称    | 说明       |
| ------- | ---------- |
| default | 自定义内容 |
| title   | 自定义标题 |
