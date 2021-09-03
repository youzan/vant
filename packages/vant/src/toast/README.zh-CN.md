# Toast 轻提示

### 介绍

在页面中间弹出黑色半透明提示，用于消息通知、加载提示、操作结果提示等场景。

### 引入

通过以下方式来全局注册组件，更多注册方式请参考[组件注册](#/zh-CN/advanced-usage#zu-jian-zhu-ce)。

```js
import { createApp } from 'vue';
import { Toast } from 'vant';

const app = createApp();
app.use(Toast);
```

## 代码演示

### 文字提示

```js
Toast('提示内容');
```

### 加载提示

使用 `Toast.loading` 方法展示加载提示，通过 `forbidClick` 属性可以禁用背景点击。

```js
Toast.loading({
  message: '加载中...',
  forbidClick: true,
});
```

### 成功/失败提示

使用 `Toast.success` 方法展示成功提示，使用 `Toast.fail` 方法展示失败提示。

```js
Toast.success('成功文案');
Toast.fail('失败文案');
```

### 自定义图标

通过 `icon` 选项可以自定义图标，支持传入[图标名称](#/zh-CN/icon)或图片链接，通过`loadingType` 属性可以自定义加载图标类型。

```js
Toast({
  message: '自定义图标',
  icon: 'like-o',
});

Toast({
  message: '自定义图片',
  icon: 'https://img.yzcdn.cn/vant/logo.png',
});

Toast.loading({
  message: '加载中...',
  forbidClick: true,
  loadingType: 'spinner',
});
```

### 自定义位置

Toast 默认渲染在屏幕正中位置，通过 `position` 属性可以控制 Toast 展示的位置。

```js
Toast({
  message: '顶部展示',
  position: 'top',
});

Toast({
  message: '底部展示',
  position: 'bottom',
});
```

### 动态更新提示

执行 Toast 方法时会返回对应的 Toast 实例，通过修改实例上的 `message` 属性可以实现动态更新提示的效果。

```js
const toast = Toast.loading({
  duration: 0,
  forbidClick: true,
  message: '倒计时 3 秒',
});

let second = 3;
const timer = setInterval(() => {
  second--;
  if (second) {
    toast.message = `倒计时 ${second} 秒`;
  } else {
    clearInterval(timer);
    Toast.clear();
  }
}, 1000);
```

### 全局方法

通过 `app.use` 全局注册 Toast 组件后，会自动在 app 的所有子组件上挂载 `$toast` 方法，便于在组件内调用。

```js
export default {
  mounted() {
    this.$toast('提示文案');
  },
};
```

> Tips: 由于 setup 选项中无法访问 this，因此不能使用上述方式，请通过 import 引入。

### 单例模式

Toast 默认采用单例模式，即同一时间只会存在一个 Toast，如果需要在同一时间弹出多个 Toast，可以参考下面的示例：

```js
Toast.allowMultiple();

const toast1 = Toast('第一个 Toast');
const toast2 = Toast.success('第二个 Toast');

toast1.clear();
toast2.clear();
```

### 修改默认配置

通过 `Toast.setDefaultOptions` 函数可以全局修改 Toast 的默认配置。

```js
Toast.setDefaultOptions({ duration: 2000 });

Toast.setDefaultOptions('loading', { forbidClick: true });

Toast.resetDefaultOptions();

Toast.resetDefaultOptions('loading');
```

## API

### 方法

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| Toast | 展示提示 | `options \| message` | toast 实例 |
| Toast.loading | 展示加载提示 | `options \| message` | toast 实例 |
| Toast.success | 展示成功提示 | `options \| message` | toast 实例 |
| Toast.fail | 展示失败提示 | `options \| message` | toast 实例 |
| Toast.clear | 关闭提示 | `clearAll: boolean` | `void` |
| Toast.allowMultiple | 允许同时存在多个 Toast | - | `void` |
| Toast.setDefaultOptions | 修改默认配置，对所有 Toast 生效。<br>传入 type 可以修改指定类型的默认配置 | `type \| options` | `void` |
| Toast.resetDefaultOptions | 重置默认配置，对所有 Toast 生效。<br>传入 type 可以重置指定类型的默认配置 | `type` | `void` |

### ToastOptions 数据结构

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 提示类型，可选值为 `loading` `success`<br>`fail` `html` | _ToastType_ | `text` |
| position | 位置，可选值为 `top` `bottom` | _ToastPosition_ | `middle` |
| message | 文本内容，支持通过`\n`换行 | _string_ | `''` |
| icon | 自定义图标，支持传入[图标名称](#/zh-CN/icon)或图片链接 | _string_ | - |
| iconSize | 图标大小，如 `20px` `2em`，默认单位为 `px` | _number \| string_ | `36px` |
| iconPrefix | 图标类名前缀，等同于 Icon 组件的 [class-prefix 属性](#/zh-CN/icon#props) | _string_ | `van-icon` |
| overlay | 是否显示背景遮罩层 | _boolean_ | `false` |
| forbidClick | 是否禁止背景点击 | _boolean_ | `false` |
| closeOnClick | 是否在点击后关闭 | _boolean_ | `false` |
| closeOnClickOverlay | 是否在点击遮罩层后关闭 | _boolean_ | `false` |
| loadingType | [加载图标类型](#/zh-CN/loading), 可选值为 `spinner` | _string_ | `circular` |
| duration | 展示时长(ms)，值为 0 时，toast 不会消失 | _number_ | `2000` |
| className | 自定义类名 | _string \| Array \| object_ | - |
| overlayClass `v3.0.4` | 自定义遮罩层类名 | _string \| Array \| object_ | - |
| overlayStyle `v3.0.4` | 自定义遮罩层样式 | _object_ | - |
| onOpened | 完全展示后的回调函数 | _Function_ | - |
| onClose | 关闭时的回调函数 | _Function_ | - |
| transition | 动画类名，等价于 [transition](https://v3.cn.vuejs.org/api/built-in-components.html#transition) 的`name`属性 | _string_ | `van-fade` |
| teleport | 指定挂载的节点，等同于 Teleport 组件的 [to 属性](https://v3.cn.vuejs.org/api/built-in-components.html#teleport) | _string \| Element_ | `body` |

### 类型定义

组件导出以下类型定义：

```ts
import type { ToastType, ToastOptions, ToastPosition } from 'vant';
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
| --van-toast-max-width | _70%_ | - |
| --van-toast-font-size | _var(--van-font-size-md)_ | - |
| --van-toast-text-color | _var(--van-white)_ | - |
| --van-toast-loading-icon-color | _var(--van-white)_ | - |
| --van-toast-line-height | _var(--van-line-height-md)_ | - |
| --van-toast-border-radius | _var(--van-border-radius-lg)_ | - |
| --van-toast-background-color | _fade(var(--van-black), 70%)_ | - |
| --van-toast-icon-size | _36px_ | - |
| --van-toast-text-min-width | _96px_ | - |
| --van-toast-text-padding | _var(--van-padding-xs) var(--van-padding-sm)_ | - |
| --van-toast-default-padding | _var(--van-padding-md)_ | - |
| --van-toast-default-width | _88px_ | - |
| --van-toast-default-min-height | _88px_ | - |
| --van-toast-position-top-distance | _20%_ | - |
| --van-toast-position-bottom-distance | _20%_ | - |
