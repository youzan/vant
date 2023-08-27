# useRaf

### Intro

Provide convenient call and cancellation of [requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame).

## Usage

### Single Call

By using the `useRaf` method, you can execute a function before the next browser repaint.

```js
import { useRaf } from '@vant/use';

export default {
  setup() {
    let count = 0;
    useRaf(() => {
      console.log(++count); // It will only be executed once.
    });
  },
};
```

### Loop Calls

By using the `isLoop` option, you can execution of a function repeatedly at a specified interval until it is canceled.

```js
import { useRaf } from '@vant/use';

export default {
  setup() {
    let count = 0;
    const cancelRaf = useRaf(
      () => {
        console.log(++count); // Execute infinitely until canceled

        if (count === 5) {
          cancelRaf();
        }
      },
      {
        isLoop: true, // Enable the loop
        interval: 100, // Set call interval
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
): void;
```

### Params

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| callback | Callback | _() => void_ | - |
| options | Options | _{ interval?: number; isLoop?: boolean }_ | _{ interval: 0; isLoop: false }_ |
