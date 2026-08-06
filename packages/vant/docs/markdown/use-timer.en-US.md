# useTimer

### Intro

Used to manage the elapsed timer.

## Usage

### Basic Usage

```html
<span>Total time：{{ current.total }}</span>
<span>Elapsed days：{{ current.days }}</span>
<span>Elapsed hours：{{ current.hours }}</span>
<span>Elapsed minutes：{{ current.minutes }}</span>
<span>Elapsed seconds：{{ current.seconds }}</span>
<span>Elapsed milliseconds：{{ current.milliseconds }}</span>
```

```js
import { useTimer } from '@vant/use';

export default {
  setup() {
    const timer = useTimer({
      time: 0,
    });

    timer.start();

    return {
      current: timer.current,
    };
  },
};
```

### Millisecond

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

### Max Time

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

### Type Declarations

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

### Params

| Name | Description | Type | Default Value |
| --- | --- | --- | --- |
| time | Initial time, unit milliseconds | _number_ | - |
| maxTime | Max time, unit milliseconds; `0` means unlimited | _number_ | `0` |
| millisecond | Whether to enable millisecond render | _boolean_ | `false` |
| onChange | Triggered when the elapsed time changed | _(current: CurrentTime) => void_ | - |
| onFinish | Triggered when maxTime is reached | _() => void_ | - |

### Return Value

| Name    | Description          | Type                    |
| ------- | -------------------- | ----------------------- |
| current | Current elapsed time | _CurrentTime_           |
| start   | Start counting       | _() => void_            |
| pause   | Pause counting       | _() => void_            |
| reset   | Reset counting       | _(time?: number): void_ |

### CurrentTime Structure

| Name         | Description                           | Type     |
| ------------ | ------------------------------------- | -------- |
| total        | Total elapsed time, unit milliseconds | _number_ |
| days         | Elapsed days                          | _number_ |
| hours        | Elapsed hours                         | _number_ |
| minutes      | Elapsed minutes                       | _number_ |
| seconds      | Elapsed seconds                       | _number_ |
| milliseconds | Elapsed milliseconds                  | _number_ |
