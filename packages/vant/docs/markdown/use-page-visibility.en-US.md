# usePageVisibility

### Intro

Get the visible state of the page.

## Usage

### Basic Usage

```js
import { watch } from 'vue';
import { usePageVisibility } from '@vant/use';

export default {
  setup() {
    const pageVisibility = usePageVisibility();

    watch(pageVisibility, (value) => {
      console.log('visibility: ', value);
    });
  },
};
```

## API

### Type Declarations

```ts
type VisibilityState = 'visible' | 'hidden';

function usePageVisibility(): Ref<VisibilityState>;
```

### Return Value

| Name | Description | Type |
| --- | --- | --- |
| visibilityState | The current visible state of the page, could be `visible` or `hidden` | _Ref\<VisibilityState>_ |
