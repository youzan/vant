# TreeSelect

### Install

``` javascript
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
  :main-active-index.sync="mainActiveIndex"
/>
```

```javascript
export default {
  data() {
    return {
      items,
      activeId: 1,
      mainActiveIndex: 0
    };
  }
}
```

### Multiple Mode

```html
<van-tree-select
  :items="items"
  :active-id.sync="activeIds"
  :main-active-index.sync="mainActiveIndex"
/>
```

```javascript
export default {
  data() {
    return {
      items,
      activeIds: [1, 2],
      mainActiveIndex: 0
    };
  }
}
```

## API

### Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| items | Required datasets for the component | `Item[]` | `[]` |
| height | Height | `string | number` | `300` |
| main-Active-index | The index of selected parent node | `number` | `0` |
| active-id | Id of selected item | `string | number | (string | number)[]` | `0` |

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

```javascript
[
  {
    // name of the parent node
    text: 'All Cities',
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
