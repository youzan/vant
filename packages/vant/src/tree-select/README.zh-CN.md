# TreeSelect 分类选择

### 介绍

用于从一组相关联的数据集合中进行选择。

### 引入

通过以下方式来全局注册组件，更多注册方式请参考[组件注册](#/zh-CN/advanced-usage#zu-jian-zhu-ce)。

```js
import { createApp } from 'vue';
import { TreeSelect } from 'vant';

const app = createApp();
app.use(TreeSelect);
```

## 代码演示

### 单选模式

`item` 为分类显示所需的数据，数据格式见下方示例。`main-active-index` 表示左侧高亮选项的索引，`active-id` 表示右侧高亮选项的 id。

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
        text: '浙江',
        children: [
          { text: '杭州', id: 1 },
          { text: '温州', id: 2 },
          { text: '宁波', id: 3, disabled: true },
        ],
      },
      {
        text: '江苏',
        children: [
          { text: '南京', id: 4 },
          { text: '无锡', id: 5 },
          { text: '徐州', id: 6 },
        ],
      },
      { text: '福建', disabled: true },
    ];

    return {
      items,
      activeId,
      activeIndex,
    };
  },
};
```

### 多选模式

`active-id` 为数组格式时，可以选中多个右侧选项。

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
        text: '浙江',
        children: [
          { text: '杭州', id: 1 },
          { text: '温州', id: 2 },
          { text: '宁波', id: 3, disabled: true },
        ],
      },
      {
        text: '江苏',
        children: [
          { text: '南京', id: 4 },
          { text: '无锡', id: 5 },
          { text: '徐州', id: 6 },
        ],
      },
      { text: '福建', disabled: true },
    ];

    return {
      items,
      activeIds,
      activeIndex,
    };
  },
};
```

### 自定义内容

通过 `content` 插槽可以自定义右侧区域的内容。

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
      items: [{ text: '分组 1' }, { text: '分组 2' }],
    };
  },
};
```

### 徽标提示

设置 `dot` 属性后，会在图标右上角展示一个小红点；设置 `badge` 属性后，会在图标右上角展示相应的徽标。

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
          text: '浙江',
          children: [
            { text: '杭州', id: 1 },
            { text: '温州', id: 2 },
            { text: '宁波', id: 3, disabled: true },
          ],
          dot: true,
        },
        {
          text: '江苏',
          children: [
            { text: '南京', id: 4 },
            { text: '无锡', id: 5 },
            { text: '徐州', id: 6 },
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

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model:main-active-index | 左侧选中项的索引 | _number \| string_ | `0` |
| v-model:active-id | 右侧选中项的 id，支持传入数组 | _number \| string \|<br>(number \| string)[]_ | `0` |
| items | 分类显示所需的数据 | _TreeSelectItem[]_ | `[]` |
| height | 高度，默认单位为`px` | _number \| string_ | `300` |
| max | 右侧项最大选中个数 | _number \| string_ | `Infinity` |
| selected-icon | 自定义右侧栏选中状态的图标 | _string_ | `success` |

### Events

| 事件名     | 说明                 | 回调参数                |
| ---------- | -------------------- | ----------------------- |
| click-nav  | 点击左侧导航时触发   | _index: number_         |
| click-item | 点击右侧选择项时触发 | _item: TreeSelectChild_ |

### Slots

| 名称              | 说明               | 参数                    |
| ----------------- | ------------------ | ----------------------- |
| nav-text `v4.1.0` | 自定义导航名称     | _item: TreeSelectChild_ |
| content           | 自定义右侧区域内容 | -                       |

### TreeSelectItem 数据结构

`TreeSelectItem` 整体为一个数组，数组内包含一系列描述分类的对象，每个分类里，`text` 表示当前分类的名称，`children` 表示分类里的可选项。

```js
[
  {
    // 导航名称
    text: '所有城市',
    // 导航名称右上角徽标
    badge: 3,
    // 是否在导航名称右上角显示小红点
    dot: true,
    // 导航节点额外类名
    className: 'my-class',
    // 该导航下所有的可选项
    children: [
      {
        // 名称
        text: '温州',
        // id，作为匹配选中状态的标识符
        id: 1,
        // 禁用选项
        disabled: true,
      },
      {
        text: '杭州',
        id: 2,
      },
    ],
  },
];
```

### 类型定义

组件导出以下类型定义：

```ts
import type { TreeSelectItem, TreeSelectChild, TreeSelectProps } from 'vant';
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称                                  | 默认值                       | 描述 |
| ------------------------------------- | ---------------------------- | ---- |
| --van-tree-select-font-size           | _var(--van-font-size-md)_    | -    |
| --van-tree-select-nav-background      | _var(--van-background)_      | -    |
| --van-tree-select-content-background  | _var(--van-background-2)_    | -    |
| --van-tree-select-nav-item-padding    | _14px var(--van-padding-sm)_ | -    |
| --van-tree-select-item-height         | _48px_                       | -    |
| --van-tree-select-item-active-color   | _var(--van-primary-color)_   | -    |
| --van-tree-select-item-disabled-color | _var(--van-gray-5)_          | -    |
| --van-tree-select-item-selected-size  | _16px_                       | -    |
