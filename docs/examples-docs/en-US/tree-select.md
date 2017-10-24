<script>

export default {
  data() {
    return {
      items: [{
        text: 'All Cities',
        children: [{
          text: 'Hang Zhou',
          id: 1001
        }, {
          text: 'Wen Zhou',
          id: 1002
        }, {
          text: 'Hai Nan',
          id: 1100
        }, {
          text: 'Ning Bo',
          id: 1003
        }, {
          text: 'Yi Wu',
          id: 1004
        }, {
          text: 'Wu Xi',
          id: 1011
        }, {
          text: 'Chang Zhou',
          id: 1012
        }, {
          text: 'Da Lian',
          id: 1031
        }, {
          text: 'Zhu Ji',
          id: 1005
        }]
      }, {
        text: 'Zhe Jiang',
        children: [{
          text: 'Hang Zhou',
          id: 1001
        }, {
          text: 'Wen Zhou',
          id: 1002
        }, {
          text: 'Ning Bo',
          id: 1003
        }, {
          text: 'Yi Wu',
          id: 1004
        }]
      }, {
        text: 'Jiang Su',
        children: [{
          text: 'Wu Xi',
          id: 1011
        }, {
          text: 'Chang Zhou',
          id: 1012
        }]
      }],
      mainActiveIndex: 0,
      activeId: 1001
    };
  },
  methods: {
    onNavClick(index) {
      this.mainActiveIndex = index;
    },
    onItemClick(data) {
      console.log(data);
      this.activeId = data.id;
    }
  }
}
</script>

## TreeSelect

### Install
``` javascript
import { TreeSelect } from 'vant';

Vue.component(TreeSelect.name, TreeSelect);
```

### Usage

#### Basic Usage

:::demo Basic Usage
```html
<van-tree-select
  :items="items"
  :main-active-index="mainActiveIndex"
  :active-id="activeId"
  @navclick="onNavClick"
  @itemclick="onItemClick"
></van-tree-select>
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
      console.log(data);
      this.activeId = data.id;
    }
  }
}
```
:::

### API

#### Properties

| Attribute | Description | Type | Default | 必须 |
|-----------|-----------|-----------|-------------|-------------|
| items | Required datasets for the component, see Data Structure for detail. |  Array | [] | - |
| mainActiveIndex | The index of selected parent node |  Number | 0 | - |
| activeId | Id of selected item |  Number | 0 | - |

#### Event
| Event | Description | Attribute |
|-----------|-----------|-----------|
| navclick | triggered when parent node is selected |  index: index of selected parent |
| itemclick | triggered when item is selected | data: selected item |

### Data Structure
#### Data Structure of `items` 
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
