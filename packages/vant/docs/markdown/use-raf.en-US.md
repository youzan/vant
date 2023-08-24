# useRaf

### Intro

Provide convenient call and cancellation of [requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame).

## Usage

### Basic Usage

```html
<div ref="root" />
```

```js
import { useRaf } from '@vant/use';

export default {
  setup() {
    let count = 0;
    // A single call will be automatically canceledRaf after the callback is executed.
    useRaf(() => {
      count++;
      console.log(count); // It will only be executed once.
    });
    // isLoop Turn on the cycle
    let count1 = 0;
    const cancelRaf = useRaf(
      () => {
        count1++;
        console.log(count1); // Unlimited execution until it is cancelled.
        if (count1 === 5) {
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
function useRaf(): {
  callback: () => void;
  options: {
    interval?: number;
    isLoop?: boolean;
  };
};
```

### Return Value

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| callback | Callback | _() => void_ | _() => void_ |
| options | Options | _{interval?: number; isLoop?: boolean}_ | _{interval: 0; isLoop: false}_ |
