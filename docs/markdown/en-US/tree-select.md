## TreeSelect

### Install
``` javascript
import { TreeSelect } from 'vant';

Vue.component(TreeSelect.name, TreeSelect);
```

### Usage

#### Basic Usage

```html
<van-tree-select
  :items="items"
  :main-active-index="mainActiveIndex"
  :active-id="activeId"
  @navclick="onNavClick"
  @itemclick="onItemClick"
/>
```

```javascript
export default {
  data() {
    return {
      items: items,
      // the index of parent item
      mainActiveIndex: 0,
      // the id of selected item
      activeId: 1001
    };
  },
  methods: {
    onNavClick(index) {
      this.mainActiveIndex = index;
    },
    onItemClick(data) {
      this.activeId = data.id;
    }
  }
}
```

### API

#### Properties

| Attribute | Description | Type | Default | 必须 |
|-----------|-----------|-----------|-------------|-------------|
| items | Required datasets for the component, see Data Structure for detail. | `Array` | `[]` | - |
| mainActiveIndex | The index of selected parent node | `Number` | `0` | - |
| activeId | Id of selected item | `Number` | `0` | - |

#### Event
| Event | Description | Attribute |
|-----------|-----------|-----------|
| navclick | triggered when parent node is selected |  index: index of selected parent |
| itemclick | triggered when item is selected | data: selected item |

### Data Structure
`items` should be an array contains specified tree objects.

In every tree object, `text` property defines the name, `id` stands for the unique key while the `children` contains sub-tree objects.

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
        id: 1002
      },
      {
        // name of the leaf node
        text: 'Baltimore',
        // id of the leaf node, component highlights leaf node by comparing the activeId with this.
        id: 1001
      }
    ]
  }
]
```
