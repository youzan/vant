# useRaf

### Intro

Provide convenient call and cancellation of [requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame).

## Usage

### Basic Usage

```js
// Single call demo

import { useRaf } from '@vant/use';

export default {
  setup() {
    let count = 0;
    // A single call will be automatically canceledRaf after the callback is executed.
    useRaf(() => {
      count++;
      console.log(count); // It will only be executed once.
    });
  },
};
```

```js
// Unlimited calls demo
import { useRaf } from '@vant/use';

export default {
  setup() {
    // isLoop Turn on the cycle
    let count = 0;
    const cancelRaf = useRaf(
      () => {
        count++;
        console.log(count); // Unlimited execution until it is cancelled.
        if (count === 5) {
          cancelRaf();
        }
      },
      {
        interval: 0, // control interval to call this function
        isLoop: true,
      },
    );
  },
};
```

## API

### Type Declarations

```ts
function useRaf(
  callback: () => void,
  options: {
    interval?: number;
    isLoop?: boolean;
  },
) {}
```

### Params

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| callback | Callback | _() => void_ | _() => void_ |
| options | Options | _{ interval?: number; isLoop?: boolean }_ | _{ interval: 0; isLoop: false }_ |
