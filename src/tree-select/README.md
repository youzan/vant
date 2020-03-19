# TreeSelect

### Install

```js
import Vue from 'vue';
import { TreeSelect } from 'vant';

Vue.use(TreeSelect);
```

## Usage

### Radio Mode

```html
<van-tree-select
  :items="items"
  :active-id.sync="activeId"
  :main-active-index.sync="activeIndex"
/>
```

```js
export default {
  data() {
    return {
      items,
      activeId: 1,
      activeIndex: 0
    };
  }
}
```

### Multiple Mode

```html
<van-tree-select
  :items="items"
  :active-id.sync="activeIds"
  :main-active-index.sync="activeIndex"
/>
```

```js
export default {
  data() {
    return {
      items,
      activeIds: [1, 2],
      activeIndex: 0
    };
  }
}
```

### Custom Content

```html
<van-tree-select
  height="55vw"
  :items="items"
  :main-active-index.sync="active"
>
  <template #content>
    <van-image v-if="active === 0" src="https://img.yzcdn.cn/vant/apple-1.jpg" />
    <van-image v-if="active === 1" src="https://img.yzcdn.cn/vant/apple-2.jpg" />
  </template>
</van-tree-select>
```

```js
export default {
  data() {
    return {
      active: 0,
      items: [{ text: 'Group 1' }, { text: 'Group 2' }]
    }
  }
}
```

### Show Badge

```html
<van-tree-select
  height="55vw"
  :items="items"
  :main-active-index.sync="activeIndex"
/>
```

```js
export default {
  data() {
    return {
      activeIndex: 0,
      items: [
        { text: 'Group 1', children: [], dot: true },
        { text: 'Group 2', children: [], badge: 5 }
      ]
    }
  }
}
```

## API

### Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| items | Required datasets for the component | *Item[]* | `[]` |
| height | Height | *number \| string* | `300` |
| main-active-index | The index of selected parent node | *number \| string* | `0` |
| active-id | Id of selected item | *number \| string \|<br>(number \| string)[]* | `0` |
| max `v2.2.0` | Maximum number of selected items | *number \| string* | `Infinity` |

### Events

| Event | Description | Arguments |
|------|------|------|
| click-nav | triggered when parent node is selected | index: index of selected parent |
| click-item | triggered when item is selected | data: selected item |

### Slots

| Name | Description |
|------|------|
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
        disabled: true
      },
      {
        text: 'Baltimore',
        id: 2
      }
    ]
  }
]
```
