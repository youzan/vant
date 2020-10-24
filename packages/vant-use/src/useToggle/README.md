# useToggle

用于在 `true` 和 `false` 之间进行切换。

## 代码演示

### 基本用法

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

### 设置默认值

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

### 类型定义

```ts
function useToggle(
  defaultValue: boolean
): [Ref<boolean>, (newValue: boolean) => void];
```

### 参数

| 参数         | 说明   | 类型      | 默认值  |
| ------------ | ------ | --------- | ------- |
| defaultValue | 默认值 | _boolean_ | `false` |

### 返回值

| 参数   | 说明             | 类型                           |
| ------ | ---------------- | ------------------------------ |
| state  | 状态值           | _Ref\<boolean>_                |
| toggle | 切换状态值的函数 | _(newValue?: boolean) => void_ |
