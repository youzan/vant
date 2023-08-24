# useRaf

### 介绍

提供便捷的[requestAnimationFrame](https://developer.mozilla.org/zh-CN/docs/Web/API/window/requestAnimationFrame)的调用和取消, 自动被requestAnimationFrame包裹, 保证在每一帧都会执行回调函数,可通过第二个参数interval来控制间隔多久去调用，并返回一个cancelRaf的函数，去停止继续的执行。

## 代码演示

### 基本用法

```js
import { useRaf } from '@vant/use';

export default {
  setup() {
    let count = 0;
    const cancelRaf = useRaf(() => {
      count++;
      if (count === 10) {
        cancelRaf();
      }
    }, 1000);
  },
};
```

## API

### 类型定义

```ts
function useRaf(): {
  callback: () => void;
  interval: number;
};
```

### 返回值

| 参数     | 说明     | 类型         |
| -------- | -------- | ------------ |
| callback | 回调函数 | _() => void_ |
| interval | 间隔时间 | _number_     |
