# TreeSelect 分类选择

### 引入

``` javascript
import { TreeSelect } from 'vant';

Vue.use(TreeSelect);
```

## 代码演示

### 基础用法

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
      // 左侧高亮元素的index
      mainActiveIndex: 0,
      // 被选中元素的id
      activeId: 1
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

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| items | 分类显示所需的数据 | `Item[]` | `[]` | - |
| height | 高度，单位为 px | `number` | `300` | - |
| main-active-index | 左侧导航高亮的索引 | `number` | `0` | - |
| active-id | 右侧选择项，高亮的数据id | `string | number` | `0` | - |

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| click-nav | 点击左侧导航时触发 | index：被点击的导航的索引 |
| click-item | 点击右侧选择项时触发 | data: 该点击项的数据 |

### Item 数据结构

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
