# Sticky 粘性布局

### 介绍

Sticky 组件与 CSS 中 `position: sticky` 属性实现的效果一致，当组件在屏幕范围内时，会按照正常的布局排列，当组件滚出屏幕范围时，始终会固定在屏幕顶部。

### 引入

通过以下方式来全局注册组件，更多注册方式请参考[组件注册](#/zh-CN/advanced-usage#zu-jian-zhu-ce)。

```js
import { createApp } from 'vue';
import { Sticky } from 'vant';

const app = createApp();
app.use(Sticky);
```

## 代码演示

### 基础用法

将内容包裹在 `Sticky` 组件内即可。

```html
<van-sticky>
  <van-button type="primary">基础用法</van-button>
</van-sticky>
```

### 吸顶距离

通过 `offset-top` 属性可以设置组件在吸顶时与顶部的距离。

```html
<van-sticky :offset-top="50">
  <van-button type="primary">吸顶距离</van-button>
</van-sticky>
```

### 指定容器

通过 `container` 属性可以指定组件的容器，页面滚动时，组件会始终保持在容器范围内，当组件即将超出容器底部时，会固定在容器的底部。

```html
<div ref="container" style="height: 150px;">
  <van-sticky :container="container">
    <van-button type="warning">指定容器</van-button>
  </van-sticky>
</div>
```

```js
export default {
  setup() {
    const container = ref(null);
    return { container };
  },
};
```

### 吸底距离

将 `position` 设置为 `bottom` 可以让组件吸附在底部。通过 `offset-bottom` 属性可以设置组件在吸底时与底部的距离。

```html
<van-sticky :offset-bottom="50" position="bottom">
  <van-button type="primary">吸底距离</van-button>
</van-sticky>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| position `v3.0.6` | 吸附位置，可选值为 `bottom` | _string_ | `top` |
| offset-top | 吸顶时与顶部的距离，支持 `px` `vw` `vh` `rem` 单位，默认 `px` | _number \| string_ | `0` |
| offset-bottom `v3.0.6` | 吸底时与底部的距离，支持 `px` `vw` `vh` `rem` 单位，默认 `px` | _number \| string_ | `0` |
| z-index | 吸顶时的 z-index | _number \| string_ | `99` |
| container | 容器对应的 HTML 节点 | _Element_ | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change `v3.0.10` | 当吸顶状态改变时触发 | _isFixed: boolean_ |
| scroll | 滚动时触发 | _{ scrollTop: number, isFixed: boolean }_ |

### 类型定义

组件导出以下类型定义：

```ts
import type { StickyPosition } from 'vant';
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称                 | 默认值 | 描述 |
| -------------------- | ------ | ---- |
| --van-sticky-z-index | _99_   | -    |
