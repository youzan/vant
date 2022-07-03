# Notify 消息提示

### 介绍

在页面顶部展示消息提示，支持组件调用和函数调用两种方式。

### 引入

通过以下方式来全局注册组件，更多注册方式请参考[组件注册](#/zh-CN/advanced-usage#zu-jian-zhu-ce)。

```js
import { createApp } from 'vue';
import { Notify } from 'vant';

const app = createApp();
app.use(Notify);
```

### 函数调用

为了便于使用 `Notify`，Vant 提供了一系列辅助函数，通过辅助函数可以快速唤起全局的消息提示。

比如使用 `showNotify` 函数，调用后会直接在页面中渲染对应的提示。

```js
import { showNotify } from 'vant';

showNotify({ message: '提示' });
```

## 代码演示

### 基础用法

```js
import { showNotify, hideNotify } from 'vant';

// 3 秒后自动关闭
showNotify('通知内容');

// 主动关闭
hideNotify();
```

### 通知类型

支持 `primary`、`success`、`warning`、`danger` 四种通知类型，默认为 `danger`。

```js
import { showNotify } from 'vant';

// 主要通知
showNotify({ type: 'primary', message: '通知内容' });

// 成功通知
showNotify({ type: 'success', message: '通知内容' });

// 危险通知
showNotify({ type: 'danger', message: '通知内容' });

// 警告通知
showNotify({ type: 'warning', message: '通知内容' });
```

### 自定义通知

自定义消息通知的颜色、位置和展示时长。

```js
import { showNotify } from 'vant';

showNotify({
  message: '自定义颜色',
  color: '#ad0000',
  background: '#ffe1e1',
});

showNotify({
  message: '自定义位置',
  position: 'bottom',
});

showNotify({
  message: '自定义时长',
  duration: 1000,
});
```

### 组件调用

如果需要在 Notify 内嵌入组件或其他自定义内容，可以使用组件调用的方式。

```html
<van-button type="primary" text="组件调用" @click="showNotify" />
<van-notify v-model:show="show" type="success">
  <van-icon name="bell" style="margin-right: 4px;" />
  <span>通知内容</span>
</van-notify>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const show = ref(false);

    const showNotify = () => {
      show.value = true;
      setTimeout(() => {
        show.value = false;
      }, 2000);
    };

    return {
      show,
      showNotify,
    };
  },
};
```

## API

### 方法

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| showNotify | 展示提示 | `options \| message` | notify 实例 |
| hideNotify | 关闭提示 | - | `void` |
| setNotifyDefaultOptions | 修改默认配置，影响所有的 `showNotify` 调用 | `options` | `void` |
| resetNotifyDefaultOptions | 重置默认配置，影响所有的 `showNotify` 调用 | - | `void` |

### Options

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 类型，可选值为 `primary` `success` `warning` | _NotifyType_ | `danger` |
| message | 展示文案，支持通过`\n`换行 | _string_ | - |
| duration | 展示时长(ms)，值为 0 时，notify 不会消失 | _number \| string_ | `3000` |
| position `v3.4.0` | 弹出位置，可选值为 `bottom` | _NotifyPosition_ | `top` |
| color | 字体颜色 | _string_ | `white` |
| background | 背景颜色 | _string_ | - |
| className | 自定义类名 | _string \| Array \| object_ | - |
| lockScroll `v3.0.7` | 是否锁定背景滚动 | _boolean_ | `false` |
| onClick | 点击时的回调函数 | _(event: MouseEvent): void_ | - |
| onOpened | 完全展示后的回调函数 | _() => void_ | - |
| onClose | 关闭时的回调函数 | _() => void_ | - |

### 类型定义

组件导出以下类型定义：

```ts
import type {
  NotifyType,
  NotifyProps,
  NotifyOptions,
  NotifyPosition,
} from 'vant';
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
| --van-notify-text-color | _var(--van-white)_ | - |
| --van-notify-padding | _var(--van-padding-xs) var(--van-padding-md)_ | - |
| --van-notify-font-size | _var(--van-font-size-md)_ | - |
| --van-notify-line-height | _var(--van-line-height-md)_ | - |
| --van-notify-primary-background | _var(--van-primary-color)_ | - |
| --van-notify-success-background | _var(--van-success-color)_ | - |
| --van-notify-danger-background | _var(--van-danger-color)_ | - |
| --van-notify-warning-background | _var(--van-warning-color)_ | - |
