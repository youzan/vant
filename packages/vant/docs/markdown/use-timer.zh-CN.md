# useTimer

### 介绍

提供正向计时管理能力。

## 代码演示

### 基本用法

```html
<span>总时间：{{ current.total }}</span>
<span>已计天数：{{ current.days }}</span>
<span>已计小时：{{ current.hours }}</span>
<span>已计分钟：{{ current.minutes }}</span>
<span>已计秒数：{{ current.seconds }}</span>
<span>已计毫秒：{{ current.milliseconds }}</span>
```

```js
import { useTimer } from '@vant/use';

export default {
  setup() {
    const timer = useTimer({
      time: 0,
    });

    // 开始计时
    timer.start();

    return {
      current: timer.current,
    };
  },
};
```

### 毫秒级渲染

计时默认每秒渲染一次，设置 millisecond 选项可以开启毫秒级渲染。

```js
import { useTimer } from '@vant/use';

export default {
  setup() {
    const timer = useTimer({
      time: 0,
      millisecond: true,
    });
    timer.start();

    return {
      current: timer.current,
    };
  },
};
```

### 限时计时

设置 maxTime 后，到达上限会停止并触发 onFinish。

```js
import { useTimer } from '@vant/use';

export default {
  setup() {
    const timer = useTimer({
      time: 0,
      maxTime: 5000,
      onFinish: () => {
        console.log('finished');
      },
    });
    timer.start();

    return {
      current: timer.current,
    };
  },
};
```

## API

### 类型定义

```ts
type CurrentTime = {
  days: number;
  hours: number;
  total: number;
  minutes: number;
  seconds: number;
  milliseconds: number;
};

type Timer = {
  start: () => void;
  pause: () => void;
  reset: (totalTime: number) => void;
  current: ComputedRef<CurrentTime>;
};

type UseTimerOptions = {
  time: number;
  maxTime?: number;
  millisecond?: boolean;
  onChange?: (current: CurrentTime) => void;
  onFinish?: () => void;
};

function useTimer(options: UseTimerOptions): Timer;
```

### 参数

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| time | 初始时间，单位毫秒 | _number_ | - |
| maxTime | 最大时间，单位毫秒；`0` 表示不限制 | _number_ | `0` |
| millisecond | 是否开启毫秒级渲染 | _boolean_ | `false` |
| onChange | 计时改变时触发的回调函数 | _(current: CurrentTime) => void_ | - |
| onFinish | 到达 maxTime 时触发的回调函数 | _() => void_ | - |

### 返回值

| 参数    | 说明                           | 类型                    |
| ------- | ------------------------------ | ----------------------- |
| current | 当前已计的时间                 | _CurrentTime_           |
| start   | 开始计时                       | _() => void_            |
| pause   | 暂停计时                       | _() => void_            |
| reset   | 重置计时，支持传入新的初始时间 | _(time?: number): void_ |

### CurrentTime 格式

| 名称         | 说明                   | 类型     |
| ------------ | ---------------------- | -------- |
| total        | 已计总时间（单位毫秒） | _number_ |
| days         | 天数                   | _number_ |
| hours        | 小时                   | _number_ |
| minutes      | 分钟                   | _number_ |
| seconds      | 秒数                   | _number_ |
| milliseconds | 毫秒                   | _number_ |
