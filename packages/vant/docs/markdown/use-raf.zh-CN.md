# useRaf

### 介绍

提供便捷的 [requestAnimationFrame](https://developer.mozilla.org/zh-CN/docs/Web/API/window/requestAnimationFrame) 的调用和取消。

## 代码演示

### 基本用法

```js
// 单次调用 demo
import { useRaf } from '@vant/use';

export default {
  setup() {
    let count = 0;
    // 单次调用在回调执行完后会被自动 cancelRaf
    useRaf(() => {
      count++;
      console.log(count); // 只会执行 1 次
    });
    // isLoop 开启循环
    let count = 0;
    const cancelRaf = useRaf(
      () => {
        count++;
        console.log(count); // 无限的执行，直到被 cancel
        if (count === 5) {
          cancelRaf();
        }
      },
      {
        interval: 0, // 控制间隔多久去调用
        isLoop: true,
      },
    );
  },
};
```

```js
// 无限调用 demo
import { useRaf } from '@vant/use';

export default {
  setup() {
    // isLoop 开启循环
    let count = 0;
    const cancelRaf = useRaf(
      () => {
        count++;
        console.log(count); // 无限的执行，直到被 cancel
        if (count === 5) {
          cancelRaf();
        }
      },
      {
        interval: 0, // 控制间隔多久去调用
        isLoop: true,
      },
    );
  },
};
```

## API

### 类型定义

```ts
function useRaf(
  callback: () => void,
  options: {
    interval?: number;
    isLoop?: boolean;
  },
) {}
```

### 参数

| 参数 | 说明 | 类型 | 默认 |
| --- | --- | --- | --- |
| callback | 回调函数 | _() => void_ | _() => void_ |
| options | 配置参数 | _{ interval?: number; isLoop?: boolean }_ | _{ interval: 0; isLoop: false }_ |
