# useScrollParent

### 介绍

获取元素最近的可滚动父元素。

## 代码演示

### 基本用法

```html
<div ref="root" />
```

```js
import { ref, watch } from 'vue';
import { useScrollParent, useEventListener } from '@vant/use';

export default {
  setup() {
    const root = ref();
    const scrollParent = useScrollParent(root);

    useEventListener(
      'scroll',
      () => {
        console.log('scroll');
      },
      { target: scrollParent },
    );

    return { root };
  },
};
```

## API

### 类型定义

```ts
function useScrollParent(
  element: Ref<Element | undefined>,
): Ref<Element | Window | undefined>;
```

### 参数

| 参数    | 说明     | 类型            | 默认值 |
| ------- | -------- | --------------- | ------ |
| element | 当前元素 | _Ref\<Element>_ | -      |

### 返回值

| 参数         | 说明               | 类型            |
| ------------ | ------------------ | --------------- |
| scrollParent | 最近的可滚动父元素 | _Ref\<Element>_ |
