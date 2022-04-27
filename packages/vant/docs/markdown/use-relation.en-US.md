# useRelation

### Intro

Establish the association relationship between parent and child components, perform data communication and method invocation, based on `provide` and `inject` implementation.

## Usage

### Basic Usage

Use `useChildren` in parent to associate child components:

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

    // provide data and methods to children
    linkChildren({ add, count });
  },
};
```

Use `useParent` in child component to get the data and methods provided by parent.

```js
import { useParent } from '@vant/use';

export default {
  setup() {
    const { parent } = useParent(RELATION_KEY);

    // use data and methods provided by parent
    if (parent) {
      parent.add();
      console.log(parent.count.value); // -> 1
    }
  },
};
```

## API

### Type Declarations

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

### Return Value of useParent

| Name | Description | Type |
| --- | --- | --- |
| parent | Data and methods provided by parent | _any_ |
| index | Index position of the current component in all child of the parent component | _Ref\<number>_ |

### Return Value of useChildren

| Name | Description | Type |
| --- | --- | --- |
| children | Component list of children | _ComponentPublicInstance[]_ |
| linkChildren | Function to provide values to child | _(value: any) => void_ |
