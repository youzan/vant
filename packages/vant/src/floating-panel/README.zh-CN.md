# FloatingPanel 浮动面板

### 介绍

浮动在页面底部的面板，可以上下拖动来浏览内容，常用于提供额外的功能或信息。

### 引入

通过以下方式来全局注册组件，更多注册方式请参考[组件注册](#/zh-CN/advanced-usage#zu-jian-zhu-ce)。

```js
import { createApp } from 'vue';
import { FloatingPanel } from 'vant';

const app = createApp();
app.use(FloatingPanel);
```

## 代码演示

### 基础用法

```html
<van-floating-panel>
  <van-cell-group>
    <van-cell
      v-for="i in 26"
      :key="i"
      :title="String.fromCharCode(i + 64)"
      size="large"
    />
  </van-cell-group>
</van-floating-panel>
```

### 自定义锚点

```html
<van-floating-panel :anchors="anchors" @height-change="onHeightChange">
  <div style="text-align: center; padding: 15px">
    <p>面板显示高度 {{ height }} px</p>
  </div>
</van-floating-panel>
```

```ts
const anchors = [
  100,
  Math.round(0.4 * window.innerHeight),
  Math.round(0.7 * window.innerHeight),
];
const height = ref(anchors[0]);
const onHeightChange = (h: number) => {
  height.value = h;
};
```

### 仅头部拖拽

```html
<van-floating-panel :content-draggable="false">
  <div style="text-align: center; padding: 15px">
    <p>内容不可拖拽</p>
  </div>
</van-floating-panel>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| anchors | 设置自定义锚点, 单位 `px` | _number[]_ | `[100, window.innerWidth * 0.6]` |
| content-draggable | 允许拖拽内容容器 | _boolean_ | `true` |
| safe-area-inset-bottom | 是否开启[底部安全区适配](#/zh-CN/advanced-usage#di-bu-an-quan-qu-gua-pei) | _boolean_ | `true` |

### Events

| 事件名        | 说明                   | 回调参数                            |
| ------------- | ---------------------- | ----------------------------------- |
| height-change | 面板显示高度改变时触发 | _height: number, dragging: boolean_ |

### Slots

| Name    | Description    |
| ------- | -------------- |
| default | 自定义面板内容 |

### 类型定义

组件导出以下类型定义：

```ts
import type { FloatingPanelProps } from 'vant';
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| Name                               | Default Value             | Description |
| ---------------------------------- | ------------------------- | ----------- |
| --van-floating-panel-border-radius | _16px_                    | -           |
| --van-floating-panel-header-height | _30px_                    | -           |
| --van-floating-panel-z-index       | _999_                     | -           |
| --van-floating-panel-background    | _var(--van-background-2)_ | -           |
