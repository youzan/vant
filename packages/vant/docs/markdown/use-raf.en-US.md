# useRaf

### Intro

Provide convenient call and cancellation of [requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame), automatically wrapped by requestAnimationFrame, to ensure that the callback function will be executed in every frame, the second parameter interval can be used to control how long the interval is called, and return a cancelRaf function to stop the continued execution.

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

### Type Declarations

```ts
function useRaf(): {
  callback: () => void;
  interval: number;
};
```

### Return Value

| Name     | Description | Type         |
| -------- | ----------- | ------------ |
| callback | Callback    | _() => void_ |
| interval | Intervals   | _number_     |
