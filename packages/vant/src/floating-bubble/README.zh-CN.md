# FloatingBubble 浮动气泡

### 介绍

悬浮在页面边缘的可点击气泡。请升级 `vant` 到 >= 4.6.0 版本来使用该组件。

### 引入

通过以下方式来全局注册组件，更多注册方式请参考[组件注册](#/zh-CN/advanced-usage#zu-jian-zhu-ce)。

```js
import { createApp } from 'vue';
import { FloatingBubble } from 'vant';

const app = createApp();
app.use(FloatingBubble);
```

## 代码演示

### 基础用法

浮动气泡默认展示在右下角，并允许在 y 轴方向上下拖拽，你可以通过 `icon` 属性设置气泡的图标。

```html
<van-floating-bubble icon="chat" @click="onClick" />
```

```js
import { showToast } from 'vant';

export default {
  setup() {
    const onClick = () => {
      showToast('点击气泡');
    };
    return { onClick };
  },
};
```

### 自由拖拽和磁吸

允许 x 和 y 轴方向拖拽，吸附到 x 轴方向最近一边。

```html
<van-floating-bubble
  axis="xy"
  icon="chat"
  magnetic="x"
  @offset-change="onOffsetChange"
/>
```

```js
import { showToast } from 'vant';

export default {
  setup() {
    const onOffsetChange = (offset) => {
      showToast(`x: ${offset.x.toFixed(0)}, y: ${offset.y.toFixed(0)}`);
    };
    return { onOffsetChange };
  },
};
```

### 双向绑定

使用 `v-model:offset` 控制 FloatingBubble 的位置。

```html
<van-floating-bubble v-model:offset="offset" axis="xy" icon="chat" />
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const offset = ref({ x: 200, y: 400 });
    return { offset };
  },
};
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model:offset | 控制气泡位置 | _OffsetType_ | `默认右下角坐标` |
| axis | 拖拽的方向，`xy` 代表自由拖拽，`lock` 代表禁止拖拽 | _'x' \| 'y' \| 'xy' \| 'lock'_ | `y` |
| magnetic | 自动磁吸的方向 | _'x' \| 'y'_ | - |
| icon | 气泡图标名称或图片链接，等同于 Icon 组件的 [name 属性](#/zh-CN/icon#props) | _string_ | - |
| gap | 气泡与窗口的最小间距，单位为 `px` | _number_ | `24` |
| teleport | 指定挂载的节点，等同于 Teleport 组件的 [to 属性](https://cn.vuejs.org/api/built-in-components.html#teleport) | _string \| Element_ | `body` |

### Events

| 事件名        | 说明                         | 回调参数                 |
| ------------- | ---------------------------- | ------------------------ |
| click         | 点击组件时触发               | _MouseEvent_             |
| offset-change | 由用户拖拽导致位置改变后触发 | _{x: string, y: string}_ |

### Slots

| 名称    | 说明               |
| ------- | ------------------ |
| default | 自定义气泡显示内容 |

### 类型定义

组件导出以下类型定义：

```ts
export type {
  FloatingBubbleProps,
  FloatingBubbleAxis,
  FloatingBubbleMagnetic,
  FloatingBubbleOffset,
} from 'vant';
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
| --van-floating-bubble-size | _48px_ | - |
| --van-floating-bubble-initial-gap | _24px_ | - |
| --van-floating-bubble-icon-size | _28px_ | - |
| --van-floating-bubble-background | _var(--van-primary-color)_ | - |
| --van-floating-bubble-color | _var(--van-background-2)_ | - |
| --van-floating-bubble-z-index | _999_ | - |
| --van-floating-bubble-border-radius | _--van-floating-bubble-border-radius_ | - |
