# TreeSelect 分类选择

### 引入

``` javascript
import Vue from 'vue';
import { TreeSelect } from 'vant';

Vue.use(TreeSelect);
```

## 代码演示

### 单选模式

`item`为分类显示所需的数据，数据格式见下方示例。`main-active-index`表示左侧高亮选项的索引，`active-id`表示右侧高亮选项的 id

```html
<van-tree-select
  :items="items"
  :active-id.sync="activeId"
  :main-active-index.sync="activeIndex"
/>
```

```javascript
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

### 多选模式

`active-id`为数组格式时，可以选中多个右侧选项

```html
<van-tree-select
  :items="items"
  :active-id.sync="activeIds"
  :main-active-index.sync="activeIndex"
/>
```

```javascript
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

### 自定义内容

通过`content`插槽可以自定义右侧区域的内容

```html
<van-tree-select
  height="55vw"
  :items="items"
  :main-active-index.sync="activeIndex"
>
  <template slot="content">
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
export default {
  data() {
    return {
      activeIndex: 0,
      items: [{ text: '分组 1' }, { text: '分组 2' }]
    }
  }
}
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| items | 分类显示所需的数据 | *Item[]* | `[]` | - |
| height | 高度，默认单位为`px` | *string \| number* | `300` | - |
| main-active-index | 左侧选中项的索引 | *number* | `0` | - |
| active-id | 右侧选中项的 id，支持传入数组 | *string \| number \| (string \| number)[]* | `0` | - |
| max | 右侧项最大选中个数 | *number* | `Infinity` | 2.2.0 |

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| click-nav | 点击左侧导航时触发 | index：被点击的导航的索引 |
| click-item | 点击右侧选择项时触发 | data: 该点击项的数据 |

### Slots

| 名称 | 说明 |
|------|------|
| content | 自定义右侧区域内容 |

### Item 数据结构

`items` 整体为一个数组，数组内包含一系列描述分类的对象，每个分类里，`text`表示当前分类的名称，`children`表示分类里的可选项。

```javascript
[
  {
    // 导航名称
    text: '所有城市',
    // 导航名称右上角徽标
    info: 3,
    // 该导航下所有的可选项
    children: [
      {
        // 名称
        text: '温州',
        // id，作为匹配选中状态的标识符
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
