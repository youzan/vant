# Drag 拖拽

### 介绍

使元素可以自由拖拽。

### 引入

通过以下方式来全局注册组件，更多注册方式请参考[组件注册](#/zh-CN/advanced-usage#zu-jian-zhu-ce)。

```js
import { createApp } from 'vue';
import { Drag } from 'vant';

const app = createApp();
app.use(Drag);
```

## 代码演示

### 基础用法

可以任意拖拽元素。

```html
<van-drag>
  <van-button type="primary">按钮</van-button>
</van-drag>
```

### 自由拖拽和磁吸

允许 x 和 y 轴方向拖拽，吸附到 x 轴方向最近一边。

```html
<van-drag magnetic="x">
  <van-button type="primary">按钮</van-button>
</van-drag>
```

### 边界限制

在一定范围内拖拽。

```html
<div class="demo-boundary" ref="demoBoundaryRef"></div>
<van-drag :boundary="{ top, left: 0, bottom, right }">
  <van-button type="primary">按钮</van-button>
</van-drag>
</van-drag>
```

```js
const demoBoundaryRef = ref<HTMLDivElement>();
const top = computed(() => demoBoundaryRef.value?.getBoundingClientRect().top as number);
const right = computed(() => (demoBoundaryRef.value?.getBoundingClientRect().right as number) - 60);
const bottom = computed(() => (demoBoundaryRef.value?.getBoundingClientRect().bottom as number) - 44);
```

```css
<style lang="less">
.demo-boundary {
  position: absolute;
  top: 330px;
  left: 0px;
  width: 300px;
  height: 200px;
  border: 1px solid red;
  box-sizing: border-box;
}
</style>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| axis | 拖拽的方向，`xy` 代表自由拖拽 | _'x' \| 'y' \| 'xy'_ | `y` |
| magnetic | 自动磁吸的方向 | _'x' \| 'y'_ | - |
| boundary | 限制的边界范围 | _{ top?: number \| string, bottom?: number \| string, left?: number \| string, right?: number \| string }_ | - |

| 事件名       | 说明                         | 回调参数                 |
| ------------ | ---------------------------- | ------------------------ |
| drag-start   | 开始拖拽时触发               | _MouseEvent_             |
| drag         | 拖拽中触发                   | _MouseEvent_             |
| drag-end     | 拖拽结束时触发               | _MouseEvent_             |
| offsetChange | 由用户拖拽导致位置改变后触发 | _{x: string, y: string}_ |
