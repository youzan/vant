# useToggle

### Intro

Used to switch between `true` and `false`.

## Usage

### Basic Usage

```js
import { useToggle } from '@vant/use';

export default {
  setup() {
    const [state, toggle] = useToggle();

    toggle(true);
    console.log(state.value); // -> true

    toggle(false);
    console.log(state.value); // -> false

    toggle();
    console.log(state.value); // -> true
  },
};
```

### Default Value

```js
import { useToggle } from '@vant/use';

export default {
  setup() {
    const [state, toggle] = useToggle(true);
    console.log(state.value); // -> true
  },
};
```

## API

### Type Declarations

```ts
function useToggle(
  defaultValue: boolean
): [Ref<boolean>, (newValue: boolean) => void];
```

### Params

| Name         | Description   | Type      | Default Value |
| ------------ | ------------- | --------- | ------------- |
| defaultValue | Default value | _boolean_ | `false`       |

### Return Value

| Name   | Description              | Type                           |
| ------ | ------------------------ | ------------------------------ |
| state  | State                    | _Ref\<boolean>_                |
| toggle | Function to switch state | _(newValue?: boolean) => void_ |
