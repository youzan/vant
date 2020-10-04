# useClickAway

用于监听元素外部的点击事件。

## 代码演示

### 基本用法

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

### 自定义事件

通过 `eventName` 选项可以自定义需要监听的事件类型。

```html
<template>
  <div ref="root" />
</template>
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
      { eventName: 'touchstart' }
    );

    return { root };
  },
};
```

## 参数

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| target | 绑定事件的节点 | \_Element | Ref<Element>\_ | - |
| listener | 点击外部时触发的回调函数 | _EventListener_ | - |
| options | 可选的配置项 | _Options_ | `{ eventName: 'click' }` |

## Options

| 参数      | 说明           | 类型     | 默认值  |
| --------- | -------------- | -------- | ------- |
| eventName | 监听的事件类型 | _string_ | `click` |
