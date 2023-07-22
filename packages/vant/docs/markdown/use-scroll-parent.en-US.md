# useScrollParent

### Intro

Get the closest parent element that is scrollable.

## Usage

### Basic Usage

```html
<div ref="root" />
```

```js
import { ref, watch } from 'vue';
import { useScrollParent, useEventListener } from '@vant/use';

export default {
  setup() {
    const root = ref();
    const scrollParent = useScrollParent(root);

    useEventListener(
      'scroll',
      () => {
        console.log('scroll');
      },
      { target: scrollParent },
    );

    return { root };
  },
};
```

## API

### Type Declarations

```ts
function useScrollParent(
  element: Ref<Element | undefined>,
): Ref<Element | Window | undefined>;
```

### Params

| Name    | Description         | Type            | Default Value |
| ------- | ------------------- | --------------- | ------------- |
| element | The current element | _Ref\<Element>_ | -             |

### Return Value

| Name | Description | Type |
| --- | --- | --- |
| scrollParent | The closest parent element that is scrollable | _Ref\<Element>_ |
