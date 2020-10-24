# usePageVisibility

获取页面的可见状态。

## 代码演示

### 基本用法

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

### 类型定义

```ts
function usePageVisibility(): Ref<VisibilityState>;

type VisibilityState = 'visible' | 'hidden';
```

### 返回值

| 参数 | 说明 | 类型 |
| --- | --- | --- |
| visibilityState | 页面当前的可见状态，`visible` 为可见，`hidden` 为隐藏 | _Ref\<VisibilityState>_ |
