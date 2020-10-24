# useRect

获取元素的大小及其相对于视口的位置，等价于 [Element.getBoundingClientRect](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getBoundingClientRect)。

## 代码演示

### 基本用法

```html
<div ref="root" />
```

```js
import { root } from 'vue';
import { useRect } from '@vant/use';

export default {
  setup() {
    const root = ref();
    const rect = useRect();

    console.log(rect); // -> 元素的大小及其相对于视口的位置

    return { root };
  },
};
```

## API

### 类型定义

```ts
function useRect((Element | Window) | Ref<Element | Window | undefined>): DOMRect;
```

### 返回值

| 参数   | 说明                       | 类型     |
| ------ | -------------------------- | -------- |
| width  | 宽度                       | _number_ |
| height | 高度                       | _number_ |
| top    | 顶部与视图窗口左上角的距离 | _number_ |
| left   | 左侧与视图窗口左上角的距离 | _number_ |
| right  | 右侧与视图窗口左上角的距离 | _number_ |
| bottom | 底部与视图窗口左上角的距离 | _number_ |
