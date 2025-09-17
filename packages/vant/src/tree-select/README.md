# TreeSelect

### Intro

Used to select from a set of related data sets.

### Install

Register component globally via `app.use`, refer to [Component Registration](#/en-US/advanced-usage#zu-jian-zhu-ce) for more registration ways.

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
  v-model:active-id="activeId"
  v-model:main-active-index="activeIndex"
  :items="items"
/>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const activeId = ref(1);
    const activeIndex = ref(0);
    const items = [
      {
        text: 'Group 1',
        children: [
          { text: 'Delaware', id: 1 },
          { text: 'Florida', id: 2 },
          { text: 'Georgia', id: 3, disabled: true },
        ],
      },
      {
        text: 'Group 2',
        children: [
          { text: 'Alabama', id: 4 },
          { text: 'Kansas', id: 5 },
          { text: 'Louisiana', id: 6 },
        ],
      },
      { text: 'Group 3', disabled: true },
    ];

    return {
      items,
      activeId,
      activeIndex,
    };
  },
};
```

### Multiple Mode

```html
<van-tree-select
  v-model:active-id="activeIds"
  v-model:main-active-index="activeIndex"
  :items="items"
/>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const activeIds = ref([1, 2]);
    const activeIndex = ref(0);
    const items = [
      {
        text: 'Group 1',
        children: [
          { text: 'Delaware', id: 1 },
          { text: 'Florida', id: 2 },
          { text: 'Georgia', id: 3, disabled: true },
        ],
      },
      {
        text: 'Group 2',
        children: [
          { text: 'Alabama', id: 4 },
          { text: 'Kansas', id: 5 },
          { text: 'Louisiana', id: 6 },
        ],
      },
      { text: 'Group 3', disabled: true },
    ];

    return {
      items,
      activeIds,
      activeIndex,
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
      src="https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg"
    />
    <van-image
      v-if="activeIndex === 1"
      src="https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg"
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
        {
          text: 'Group 1',
          children: [
            { text: 'Delaware', id: 1 },
            { text: 'Florida', id: 2 },
            { text: 'Georgia', id: 3, disabled: true },
          ],
          dot: true,
        },
        {
          text: 'Group 2',
          children: [
            { text: 'Alabama', id: 4 },
            { text: 'Kansas', id: 5 },
            { text: 'Louisiana', id: 6 },
          ],
          badge: 5,
        },
      ],
    };
  },
};
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| v-model:main-active-index | The index of selected parent node | _number \| string_ | `0` |
| v-model:active-id | Id of selected item | _number \| string \|<br>(number \| string)[]_ | `0` |
| items | Required datasets for the component | _TreeSelectItem[]_ | `[]` |
| height | Height | _number \| string_ | `300` |
| max | Maximum number of selected items | _number \| string_ | `Infinity` |
| selected-icon | Selected icon | _string_ | `success` |

### Events

| Event      | Description                          | Arguments               |
| ---------- | ------------------------------------ | ----------------------- |
| click-nav  | Emitted when parent node is selected | _index: number_         |
| click-item | Emitted when item is selected        | _item: TreeSelectChild_ |

### Slots

| Name              | Description                    | SlotProps               |
| ----------------- | ------------------------------ | ----------------------- |
| nav-text `v4.1.0` | Custom name of the parent node | _item: TreeSelectChild_ |
| content           | Custom right content           | -                       |

### Data Structure of TreeSelectItem

`TreeSelectItem` should be an array contains specified tree objects.

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

### Types

The component exports the following type definitions:

```ts
import type { TreeSelectItem, TreeSelectChild, TreeSelectProps } from 'vant';
```

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/config-provider).

| Name | Default Value | Description |
| --- | --- | --- |
| --van-tree-select-font-size | _var(--van-font-size-md)_ | - |
| --van-tree-select-nav-background | _var(--van-background)_ | - |
| --van-tree-select-content-background | _var(--van-background-2)_ | - |
| --van-tree-select-nav-item-padding | _14px var(--van-padding-sm)_ | - |
| --van-tree-select-item-height | _48px_ | - |
| --van-tree-select-item-active-color | _var(--van-primary-color)_ | - |
| --van-tree-select-item-disabled-color | _var(--van-gray-5)_ | - |
| --van-tree-select-item-selected-size | _16px_ | - |
