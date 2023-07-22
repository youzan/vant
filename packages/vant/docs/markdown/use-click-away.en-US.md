# useClickAway

### Intro

Triggers a callback when user clicks outside of the target element.

## Usage

### Basic Usage

```html
<div ref="root" />
```

```js
import { ref } from 'vue';
import { useClickAway } from '@vant/use';

export default {
  setup() {
    const root = ref();
    useClickAway(root, () => {
      console.log('click outside!');
    });

    return { root };
  },
};
```

### Custom Event

```html
<div ref="root" />
```

```js
import { ref } from 'vue';
import { useClickAway } from '@vant/use';

export default {
  setup() {
    const root = ref();
    useClickAway(
      root,
      () => {
        console.log('touch outside!');
      },
      { eventName: 'touchstart' },
    );

    return { root };
  },
};
```

## API

### Type Declarations

```ts
type Options = {
  eventName?: string;
};

function useClickAway(
  target:
    | Element
    | Ref<Element | undefined>
    | Array<Element | Ref<Element | undefined>>,
  listener: EventListener,
  options?: Options,
): void;
```

### Params

| Name | Description | Type | Default Value |
| --- | --- | --- | --- |
| target | Target element, support multiple elements | _Element \| Ref\<Element> \| Array\<Element \| Ref\<Element>>_ | - |
| listener | Callback function when the outside is clicked | _EventListener_ | - |
| options | Options | _Options_ | `{ eventName: 'click' }` |

### Options

| Name      | Description | Type     | Default Value |
| --------- | ----------- | -------- | ------------- |
| eventName | Event name  | _string_ | `click`       |
