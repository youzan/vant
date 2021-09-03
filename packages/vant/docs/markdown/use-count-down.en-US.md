# useCountDown

### Intro

Used to manage the countdown.

## Usage

### Basic Usage

```html
<span>Total time：{{ current.total }}</span>
<span>Remain days：{{ current.days }}</span>
<span>Remain hours：{{ current.hours }}</span>
<span>Remain minutes：{{ current.minutes }}</span>
<span>Remain seconds：{{ current.seconds }}</span>
<span>Remain milliseconds：{{ current.milliseconds }}</span>
```

```js
import { useCountDown } from '@vant/use';

export default {
  setup() {
    const countDown = useCountDown({
      time: 24 * 60 * 60 * 1000,
    });

    countDown.start();

    return {
      current: countDown.current,
    };
  },
};
```

### Millisecond

```js
import { useCountDown } from '@vant/use';

export default {
  setup() {
    const countDown = useCountDown({
      time: 24 * 60 * 60 * 1000,
      millisecond: true,
    });
    countDown.start();

    return {
      current: countDown.current,
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

type CountDown = {
  start: () => void;
  pause: () => void;
  reset: (totalTime: number) => void;
  current: ComputedRef<CurrentTime>;
};

type UseCountDownOptions = {
  time: number;
  millisecond?: boolean;
  onChange?: (current: CurrentTime) => void;
  onFinish?: () => void;
};

function useCountDown(options: UseCountDownOptions): CountDown;
```

### Params

| Name | Description | Type | Default Value |
| --- | --- | --- | --- |
| time | Total time, unit milliseconds | _number_ | - |
| millisecond | Whether to enable millisecond render | _boolean_ | `false` |
| onChange | Triggered when count down changed | _(current: CurrentTime) => void_ | - |
| onFinish | Triggered when count down finished | - |

### Return Value

| Name    | Description         | Type                    |
| ------- | ------------------- | ----------------------- |
| current | Current remain time | _CurrentTime_           |
| start   | Start count down    | _() => void_            |
| pause   | Pause count down    | _() => void_            |
| reset   | Reset count down    | _(time?: number): void_ |

### CurrentTime Structure

| Name         | Description                   | Type     |
| ------------ | ----------------------------- | -------- |
| total        | Total time, unit milliseconds | _number_ |
| days         | Remain days                   | _number_ |
| hours        | Remain hours                  | _number_ |
| minutes      | Remain minutes                | _number_ |
| seconds      | Remain seconds                | _number_ |
| milliseconds | Remain milliseconds           | _number_ |
