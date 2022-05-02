# useWindowSize

### Intro

Get the viewport width and height of the browser window, and update it automatically when the window size changes.

## Usage

### Basic Usage

```js
import { watch } from 'vue';
import { useWindowSize } from '@vant/use';

export default {
  setup() {
    const { width, height } = useWindowSize();

    console.log(width.value); // -> width of browser window
    console.log(height.value); // -> height of browser window

    watch([width, height], () => {
      console.log('window resized');
    });
  },
};
```

## API

### Type Declarations

```ts
function useWindowSize(): {
  width: Ref<number>;
  height: Ref<number>;
};
```

### Return Value

| Name   | Description                  | Type           |
| ------ | ---------------------------- | -------------- |
| width  | The width of browser window  | _Ref\<number>_ |
| height | The height of browser window | _Ref\<number>_ |
