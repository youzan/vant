# BackTop 回到顶部

### 介绍

返回页面顶部的操作按钮。

### 引入

通过以下方式来全局注册组件，更多注册方式请参考[组件注册](#/zh-CN/advanced-usage#zu-jian-zhu-ce)。

```js
import { createApp } from 'vue';
import { BackTop } from 'vant';

const app = createApp();
app.use(BackTop);
```

## 代码演示

### 基础用法

请滚动右侧的示例页面，当页面滚动 `200px` 时，右下角会出现返回顶部按钮。

```html
<van-cell v-for="item in list" :key="item" :title="item" />

<van-back-top />
```

```js
export default {
  setup() {
    const list = [...Array(50).keys()];
    return { list };
  },
};
```

### 自定义位置

通过 `right` 和 `bottom` 属性来设置组件距离右侧和底部的位置。

```html
<van-cell v-for="item in list" :key="item" :title="item" />
<van-back-top right="15vw" bottom="10vh" />
```

```js
export default {
  setup() {
    const list = [...Array(50).keys()];
    return { list };
  },
};
```

### 自定义内容

使用默认插槽来自定义组件展示的内容。

```html
<van-cell v-for="item in list" :key="item" :title="item" />
<van-back-top class="custom">返回顶部</van-back-top>

<style>
  .custom {
    width: 80px;
    font-size: 14px;
    text-align: center;
  }
</style>
```

```js
export default {
  setup() {
    const list = [...Array(50).keys()];
    return { list };
  },
};
```

### 设置滚动目标

可以通过 `target` 属性来设置触发滚动的目标对象，支持传入选择器或 `HTMLElement`。

```html
<div class="container">
  <van-cell v-for="item in list" :key="item" :title="item" />
  <van-back-top target=".container" bottom="30vh" />
</div>

<style>
  .container {
    height: 60vh;
    overflow: auto;
  }
</style>
```

```js
export default {
  setup() {
    const list = [...Array(50).keys()];
    return { list };
  },
};
```

### 瞬间滚动

当设置 `immediate` 属性后，页面滚动的过程不再有过渡效果，而是瞬间滚动到顶部。

```html
<van-back-top immediate />
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| target | 触发滚动的目标对象，支持传入选择器或 DOM 元素 | _string \| HTMLElement_ | - |
| right | 距离页面右侧的距离，默认单位为 `px` | _number \| string_ | `30` |
| bottom | 距离页面底部的距离，默认单位为 `px` | _number \| string_ | `40` |
| offset | 滚动高度达到此参数值时才显示组件 | _number_ | `200` |
| teleport | 指定挂载的节点，等同于 Teleport 组件的 [to 属性](https://v3.cn.vuejs.org/api/built-in-components.html#teleport) | _string \| Element_ | `body` |
| immediate `v4.0.9` | 是否瞬间滚动到顶部 | _boolean_ | `false` |
| z-index | 设置组件的 z-index 层级 | _number \| string_ | `100` |

### Events

| 事件  | 说明           | 回调参数            |
| ----- | -------------- | ------------------- |
| click | 点击组件时触发 | _event: MouseEvent_ |

### Slots

| 名称    | 说明               |
| ------- | ------------------ |
| default | 自定义按钮显示内容 |

### 类型定义

组件导出以下类型定义：

```ts
import type { BackTopProps, BackTopThemeVars } from 'vant';
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称                      | 默认值            | 描述 |
| ------------------------- | ----------------- | ---- |
| --van-back-top-size       | _40px_            | -    |
| --van-back-top-icon-size  | _20px_            | -    |
| --van-back-top-right      | _30px_            | -    |
| --van-back-top-bottom     | _40px_            | -    |
| --van-back-top-z-index    | _100_             | -    |
| --van-back-top-text-color | _#fff_            | -    |
| --van-back-top-background | _var(--van-blue)_ | -    |
