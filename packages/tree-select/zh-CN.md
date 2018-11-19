## TreeSelect 分类选择

### 使用指南
``` javascript
import { TreeSelect } from 'vant';

Vue.use(TreeSelect);
```

### 代码演示

#### 基础用法

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
      items,
      // 左侧高亮元素的index
      mainActiveIndex: 0,
      // 被选中元素的id
      activeId: 1
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

#### 传入参数

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| items | 分类显示所需的数据，结构参见下方 | `Array` | `[]` | - |
| height | 高度，单位为 px | `Number` | `300` | 1.3.6 |
| main-active-index | 左侧导航高亮的索引 | `Number` | `0` | - |
| active-id | 右侧选择项，高亮的数据id | `String | Number` | `0` | - |

#### 事件

| 事件名 | 说明 | 参数 |
|------|------|------|
| navclick | 左侧导航点击时，触发的事件 |  index：被点击的导航的索引 |
| itemclick | 右侧选择项被点击时，会触发的事件 | data: 该点击项的数据 |

### 数据格式
#### items 分类显示所需数据的数据结构
`items` 整体为一个数组，数组内包含一系列描述分类的对象。

每个分类里，text 表示当前分类的名称。children 表示分类里的可选项，为数组结构，id 被用来唯一标识每个选项
```javascript
[
  {
    // 导航名称
    text: '所有城市',
    // 该导航下所有的可选项
    children: [
      {
        // 名称
        text: '温州',
        // id，作为匹配选中状态的标识
        id: 1,
        // 禁用选项
        disabled: true
      },
      {
        text: '杭州',
        id: 2
      }
    ]
  }
]
```
