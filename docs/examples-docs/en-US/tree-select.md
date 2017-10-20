<script>

export default {
  data() {
    return {
      items: [{
        text: '所有城市',
        children: [{
          text: '杭州',
          id: 1001
        }, {
          text: '温州',
          id: 1002
        }, {
          text: '海南',
          id: 1100
        }, {
          text: '宁波',
          id: 1003
        }, {
          text: '义乌',
          id: 1004
        }, {
          text: '无锡',
          id: 1011
        }, {
          text: '常州',
          id: 1012
        }, {
          text: '大连',
          id: 1031
        }, {
          text: '诸暨',
          id: 1005
        }]
      }, {
        text: '浙江',
        children: [{
          text: '杭州',
          id: 1001
        }, {
          text: '温州',
          id: 1002
        }, {
          text: '宁波',
          id: 1003
        }, {
          text: '义乌',
          id: 1004
        }]
      }, {
        text: '江苏',
        children: [{
          text: '无锡',
          id: 1011
        }, {
          text: '常州',
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
      // 左侧高亮元素的index
      mainActiveIndex: 0,
      // 被选中元素的id
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

#### 传入参数

| Attribute | Description | Type | Default | 必须 |
|-----------|-----------|-----------|-------------|-------------|
| items | 分类显示所需的数据，具体数据结构可看 数据结构 |  Array | [] | - |
| mainActiveIndex | 左侧导航高亮的索引 |  Number | 0 | - |
| activeId | 右侧选择项，高亮的数据id |  Number | 0 | - |

#### Event
| Event | Description | Attribute |
|-----------|-----------|-----------|
| navclick | 左侧导航点击时，触发的事件 |  index：被点击的导航的索引 |
| itemclick | 右侧选择项被点击时，会触发的事件 | data: 该点击项的数据 |

### Data Structure
#### items 分类显示所需数据的数据结构
`items` 整体为一个数组，数组内包含一系列描述分类的 object。

每个分类里，text表示当前分类的名称。children 表示分类里的可选项，为数组结构，id被用来唯一标识每个选项
```javascript
[
  {
    // 导航名称
    text: '所有城市',
    // 该导航下所有的可选项
    children: [
      {
        // 可选项的名称
        text: '温州',
        // 可选项的id，高亮的时候是根据id是否和选中的id是否相同进行判断的
        id: 1002
      },
      {
        // 可选项的名称
        text: '杭州',
        // 可选项的id，高亮的时候是根据id是否和选中的id是否相同进行判断的
        id: 1001
      }
    ]
  }
]
```
