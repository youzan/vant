# useRaf

### 介绍

提供便捷的 [requestAnimationFrame](https://developer.mozilla.org/zh-CN/docs/Web/API/window/requestAnimationFrame) 的调用和取消。

## 代码演示

### 单次调用

通过 `useRaf` 方法，可以在下一次浏览器重新绘制之前调用指定的函数。

```js
import { useRaf } from '@vant/use';

export default {
  setup() {
    let count = 0;
    useRaf(() => {
      console.log(++count); // 只会执行 1 次
    });
  },
};
```

### 循环调用

通过开启 `isLoop` 选项，你可以按指定的间隔重复执行某个函数，直到被取消。

```js
import { useRaf } from '@vant/use';

export default {
  setup() {
    let count = 0;
    const cancelRaf = useRaf(
      () => {
        console.log(++count); // 无限执行，直到被 cancel

        if (count === 5) {
          cancelRaf();
        }
      },
      {
        isLoop: true, // 开启循环
        interval: 100, // 设置调用间隔
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
): void;
```

### 参数

| 参数 | 说明 | 类型 | 默认 |
| --- | --- | --- | --- |
| callback | 回调函数 | _() => void_ | - |
| options | 配置参数 | _{ interval?: number; isLoop?: boolean }_ | _{ interval: 0; isLoop: false }_ |
