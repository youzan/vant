# useRect

### Intro

Get the size of an element and its position relative to the viewport, equivalent to [Element.getBoundingClientRect](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect).

## Usage

### Basic Usage

```html
<div ref="root" />
```

```js
import { ref, onMounted } from 'vue';
import { useRect } from '@vant/use';

export default {
  setup() {
    const root = ref();

    onMounted(() => {
      const rect = useRect(root);
      console.log(rect); // -> the size of an element and its position relative to the viewport
    });

    return { root };
  },
};
```

## API

### Type Declarations

```ts
function useRect(
  element: Element | Window | Ref<Element | Window | undefined>,
): DOMRect;
```

### Return Value

| Name | Description | Type |
| --- | --- | --- |
| width | Width of the element | _number_ |
| height | Height of the element | _number_ |
| top | The distance from the top to the top-left of the viewport | _number_ |
| left | The distance from the left to the top-left of the viewport | _number_ |
| right | The distance from the right to the top-left of the viewport | _number_ |
| bottom | The distance from the bottom to the top-left of the viewport | _number_ |
