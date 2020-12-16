# TreeSelect

### Install

```js
import { createApp } from 'vue';
import { TreeSelect } from 'vant';

const app = createApp();
app.use(TreeSelect);
```

## Usage

### Radio Mode

```html
<van-tree-select
  v-model:active-id="state.activeId"
  v-model:main-active-index="state.activeIndex"
  :items="items"
/>
```

```js
import { reactive } from 'vue';

export default {
  setup() {
    const state = reactive({
      activeId: 1,
      activeIndex: 0,
    });
    const items = [
      {
        text: 'Group 1',
        children: [
          { text: 'Delaware', id: 1 },
          { text: 'Florida', id: 2 },
        ],
      },
      {
        text: 'Group 2',
        children: [
          { text: 'Alabama', id: 5 },
          { text: 'Kansas', id: 6 },
        ],
      },
    ];

    return {
      state,
      items,
    };
  },
};
```

### Multiple Mode

```html
<van-tree-select
  v-model:active-id="state.activeIds"
  v-model:main-active-index="state.activeIndex"
  :items="items"
/>
```

```js
import { reactive } from 'vue';

export default {
  setup() {
    const state = reactive({
      activeId: [1, 2],
      activeIndex: 0,
    });
    const items = [
      {
        text: 'Group 1',
        children: [
          { text: 'Delaware', id: 1 },
          { text: 'Florida', id: 2 },
        ],
      },
      {
        text: 'Group 2',
        children: [
          { text: 'Alabama', id: 5 },
          { text: 'Kansas', id: 6 },
        ],
      },
    ];

    return {
      state,
      items,
    };
  },
};
```

### Custom Content

```html
<van-tree-select
  v-model:main-active-index="activeIndex"
  height="55vw"
  :items="items"
>
  <template #content>
    <van-image
      v-if="activeIndex === 0"
      src="https://img.yzcdn.cn/vant/apple-1.jpg"
    />
    <van-image
      v-if="activeIndex === 1"
      src="https://img.yzcdn.cn/vant/apple-2.jpg"
    />
  </template>
</van-tree-select>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const activeIndex = ref(0);
    return {
      activeIndex,
      items: [{ text: 'Group 1' }, { text: 'Group 2' }],
    };
  },
};
```

### Show Badge

```html
<van-tree-select
  v-model:main-active-index="activeIndex"
  height="55vw"
  :items="items"
/>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const activeIndex = ref(0);
    return {
      activeIndex,
      items: [
        { text: 'Group 1', children: [], dot: true },
        { text: 'Group 2', children: [], badge: 5 },
      ],
    };
  },
};
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| items | Required datasets for the component | _Item[]_ | `[]` |
| height | Height | _number \| string_ | `300` |
| main-active-index | The index of selected parent node | _number \| string_ | `0` |
| active-id | Id of selected item | _number \| string \|<br>(number \| string)[]_ | `0` |
| max | Maximum number of selected items | _number \| string_ | `Infinity` |
| selected-icon `v2.9.0` | Selected icon | _string_ | `success` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| click-nav | Emitted when parent node is selected | index: index of selected parent |
| click-item | Emitted when item is selected | data: selected item |

### Slots

| Name    | Description          |
| ------- | -------------------- |
| content | Custom right content |

### Data Structure of Item

`items` should be an array contains specified tree objects.

In every tree object, `text` property defines `id` stands for the unique key while the `children` contains sub-tree objects.

```js
[
  {
    // name of the parent node
    text: 'Group 1',
    // badge
    badge: 3,
    // Whether to show red dot
    dot: true,
    // ClassName of parent node
    className: 'my-class',
    // leaves of this parent node
    children: [
      {
        // name of the leaf node
        text: 'Washington',
        // id of the leaf node, component highlights leaf node by comparing the activeId with this.
        id: 1,
        // disable options
        disabled: true,
      },
      {
        text: 'Baltimore',
        id: 2,
      },
    ],
  },
];
```

### Less Variables

How to use: [Custom Theme](#/en-US/theme).

| Name                                  | Default Value       | Description |
| ------------------------------------- | ------------------- | ----------- |
| @tree-select-font-size                | `@font-size-md`     | -           |
| @tree-select-nav-background-color     | `@background-color` | -           |
| @tree-select-content-background-color | `@white`            | -           |
| @tree-select-nav-item-padding         | `14px @padding-sm`  | -           |
| @tree-select-item-height              | `48px`              | -           |
| @tree-select-item-active-color        | `@red`              | -           |
| @tree-select-item-disabled-color      | `@gray-5`           | -           |
| @tree-select-item-selected-size       | `16px`              | -           |
