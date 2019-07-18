# TreeSelect

### Install

``` javascript
import { TreeSelect } from 'vant';

Vue.use(TreeSelect);
```

## Usage

### Basic Usage

```html
<van-tree-select
  :items="items"
  :main-active-index="mainActiveIndex"
  :active-id="activeId"
  @click-nav="onClickNav"
  @click-item="onClickItem"
/>
```

```javascript
export default {
  data() {
    return {
      items,
      // the index of parent item
      mainActiveIndex: 0,
      // the id of selected item
      activeId: 1001
    };
  },
  methods: {
    onClickNav(index) {
      this.mainActiveIndex = index;
    },
    onClickItem(data) {
      this.activeId = data.id;
    }
  }
}
```

## API

### Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| items | Required datasets for the component | `Item[]` | `[]` |
| height | Height (px) | `number` | `300` |
| main-Active-index | The index of selected parent node | `number` | `0` |
| active-id | Id of selected item | `string | number` | `0` |

### Events

| Event | Description | Arguments |
|------|------|------|
| click-nav | triggered when parent node is selected |  index: index of selected parent |
| click-item | triggered when item is selected | data: selected item |

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
