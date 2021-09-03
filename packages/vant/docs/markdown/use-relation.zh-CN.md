# useRelation

### 介绍

建立父子组件之间的关联关系，进行数据通信和方法调用，基于 `provide` 和 `inject` 实现。

## 代码演示

### 基本用法

在父组件中使用 `useChildren` 关联子组件:

```js
import { ref } from 'vue';
import { useChildren } from '@vant/use';

const RELATION_KEY = Symbol('my-relation');

export default {
  setup() {
    const { linkChildren } = useChildren(RELATION_KEY);

    const count = ref(0);
    const add = () => {
      count.value++;
    };

    // 向子组件提供数据和方法
    linkChildren({ add, count });
  },
};
```

在子组件中使用 `useParent` 获取父组件提供的数据和方法:

```js
import { useParent } from '@vant/use';

export default {
  setup() {
    const { parent } = useParent(RELATION_KEY);

    // 调用父组件提供的数据和方法
    if (parent) {
      parent.add();
      console.log(parent.count.value); // -> 1
    }
  },
};
```

## API

### 类型定义

```ts
function useParent<T>(key: string | symbol): {
  parent?: T;
  index?: Ref<number>;
};

function useChildren(key: string | symbol): {
  children: ComponentPublicInstance[];
  linkChildren: (value: any) => void;
};
```

### useParent 返回值

| 参数   | 说明                                         | 类型           |
| ------ | -------------------------------------------- | -------------- |
| parent | 父组件提供的值                               | _any_          |
| index  | 当前组件在父组件的所有子组件中对应的索引位置 | _Ref\<number>_ |

### useChildren 返回值

| 参数         | 说明                 | 类型                        |
| ------------ | -------------------- | --------------------------- |
| children     | 子组件列表           | _ComponentPublicInstance[]_ |
| linkChildren | 向子组件提供值的方法 | _(value: any) => void_      |
