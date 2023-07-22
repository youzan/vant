# useEventListener

### Intro

Attaching an event when the component is `mounted` and `activated`, then removing the event when the component is `unmounted` and `deactivated`.

## Usage

### Basic Usage

```js
import { ref } from 'vue';
import { useEventListener } from '@vant/use';

export default {
  setup() {
    // attach the resize event to window
    useEventListener('resize', () => {
      console.log('window resize');
    });

    // attach the click event to the body element
    useEventListener(
      'click',
      () => {
        console.log('click body');
      },
      { target: document.body },
    );
  },
};
```

### Remove Event Listener

`useEventListener` will return a `cleanup` function，you can call it to remove the event listener.

```js
import { ref } from 'vue';
import { useEventListener } from '@vant/use';

export default {
  setup() {
    const cleanup = useEventListener('resize', () => {
      console.log('window resize');
    });

    cleanup();
  },
};
```

## API

### Type Declarations

```ts
type Options = {
  target?: EventTarget | Ref<EventTarget>;
  capture?: boolean;
  passive?: boolean;
};

function useEventListener(
  type: string,
  listener: EventListener,
  options?: Options,
): () => void;
```

### Params

| Name     | Description       | Type            | Default Value |
| -------- | ----------------- | --------------- | ------------- |
| type     | Event type        | _string_        | -             |
| listener | Callback function | _EventListener_ | -             |
| options  | Options           | _Options_       | -             |

### Options

| Name | Description | Type | Default Value |
| --- | --- | --- | --- |
| target | Target element | _EventTarget \| Ref\<EventTarget>_ | `window` |
| capture | Whether to enable capture | _boolean_ | `false` |
| passive | if true, indicates that the listener will never call `preventDefault()` | _boolean_ | `false` |
