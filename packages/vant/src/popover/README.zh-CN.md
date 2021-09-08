# Popover 气泡弹出框

### 介绍

弹出式的气泡菜单。

### 引入

通过以下方式来全局注册组件，更多注册方式请参考[组件注册](#/zh-CN/advanced-usage#zu-jian-zhu-ce)。

```js
import { createApp } from 'vue';
import { Popover } from 'vant';

const app = createApp();
app.use(Popover);
```

## 代码演示

### 基础用法

当 Popover 弹出时，会基于 `reference` 插槽的内容进行定位。

```html
<van-popover v-model:show="showPopover" :actions="actions" @select="onSelect">
  <template #reference>
    <van-button type="primary">浅色风格</van-button>
  </template>
</van-popover>
```

```js
import { ref } from 'vue';
import { Toast } from 'vant';

export default {
  setup() {
    const showPopover = ref(false);

    // 通过 actions 属性来定义菜单选项
    const actions = [
      { text: '选项一' },
      { text: '选项二' },
      { text: '选项三' },
    ];
    const onSelect = (action) => Toast(action.text);

    return {
      actions,
      onSelect,
      showPopover,
    };
  },
};
```

### 深色风格

Popover 支持浅色和深色两种风格，默认为浅色风格，将 `theme` 属性设置为 `dark` 可切换为深色风格。

```html
<van-popover v-model:show="showPopover" theme="dark" :actions="actions">
  <template #reference>
    <van-button type="primary">深色风格</van-button>
  </template>
</van-popover>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const showPopover = ref(false);
    const actions = [
      { text: '选项一' },
      { text: '选项二' },
      { text: '选项三' },
    ];

    return {
      actions,
      showPopover,
    };
  },
};
```

### 弹出位置

通过 `placement` 属性来控制气泡的弹出位置。

```html
<van-popover placement="top" />
```

`placement` 支持以下值：

```bash
top           # 顶部中间位置
top-start     # 顶部左侧位置
top-end       # 顶部右侧位置
left          # 左侧中间位置
left-start    # 左侧上方位置
left-end      # 左侧下方位置
right         # 右侧中间位置
right-start   # 右侧上方位置
right-end     # 右侧下方位置
bottom        # 底部中间位置
bottom-start  # 底部左侧位置
bottom-end    # 底部右侧位置
```

### 展示图标

在 `actions` 数组中，可以通过 `icon` 字段来定义选项的图标，支持传入[图标名称](#/zh-CN/icon)或图片链接。

```html
<van-popover v-model:show="showPopover" :actions="actions">
  <template #reference>
    <van-button type="primary">展示图标</van-button>
  </template>
</van-popover>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const showPopover = ref(false);
    const actions = [
      { text: '选项一', icon: 'add-o' },
      { text: '选项二', icon: 'music-o' },
      { text: '选项三', icon: 'more-o' },
    ];

    return {
      actions,
      showPopover,
    };
  },
};
```

### 禁用选项

在 `actions` 数组中，可以通过 `disabled` 字段来禁用某个选项。

```html
<van-popover v-model:show="showPopover" :actions="actions">
  <template #reference>
    <van-button type="primary">禁用选项</van-button>
  </template>
</van-popover>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const showPopover = ref(false);
    const actions = [
      { text: '选项一', disabled: true },
      { text: '选项二', disabled: true },
      { text: '选项三' },
    ];

    return {
      actions,
      showPopover,
    };
  },
};
```

### 自定义内容

通过默认插槽，可以在 Popover 内部放置任意内容。

```html
<van-popover v-model:show="showPopover">
  <van-grid
    square
    clickable
    :border="false"
    column-num="3"
    style="width: 240px;"
  >
    <van-grid-item
      v-for="i in 6"
      :key="i"
      text="选项"
      icon="photo-o"
      @click="showPopover = false"
    />
  </van-grid>
  <template #reference>
    <van-button type="primary">自定义内容</van-button>
  </template>
</van-popover>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const showPopover = ref(false);
    return { showPopover };
  },
};
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model:show | 是否展示气泡弹出层 | _boolean_ | `false` |
| actions | 选项列表 | _PopoverAction[]_ | `[]` |
| placement | 弹出位置 | _PopoverPlacement_ | `bottom` |
| theme | 主题风格，可选值为 `dark` | _PopoverTheme_ | `light` |
| trigger | 触发方式，可选值为 `manual` | _PopoverTrigger_ | `click` |
| duration | 动画时长，单位秒，设置为 0 可以禁用动画 | _number \| string_ | `0.3` |
| offset | 出现位置的偏移量 | _[number, number]_ | `[0, 8]` |
| overlay | 是否显示遮罩层 | _boolean_ | `false` |
| overlay-class `v3.0.10` | 自定义遮罩层类名 | _string \| Array \| object_ | - |
| overlay-style `v3.0.10` | 自定义遮罩层样式 | _object_ | - |
| show-arrow `v3.2.2` | 是否展示小箭头 | _boolean_ | `true` |
| close-on-click-action | 是否在点击选项后关闭 | _boolean_ | `true` |
| close-on-click-outside | 是否在点击外部元素后关闭菜单 | _boolean_ | `true` |
| close-on-click-overlay `v3.0.10` | 是否在点击遮罩层后关闭菜单 | _boolean_ | `true` |
| teleport | 指定挂载的节点，等同于 Teleport 组件的 [to 属性](https://v3.cn.vuejs.org/api/built-in-components.html#teleport) | _string \| Element_ | `body` |
| icon-prefix `v3.0.17` | 图标类名前缀，等同于 Icon 组件的 [class-prefix 属性](#/zh-CN/icon#props) | _string_ | `van-icon` |

### PopoverAction 数据结构

`actions` 属性是一个由对象构成的数组，数组中的每个对象配置一列，对象可以包含以下值：

| 键名 | 说明 | 类型 |
| --- | --- | --- |
| text | 选项文字 | _string_ |
| icon | 文字左侧的图标，支持传入[图标名称](#/zh-CN/icon)或图片链接 | _string_ |
| color | 选项文字颜色 | _string_ |
| disabled | 是否为禁用状态 | _boolean_ |
| className | 为对应选项添加额外的类名 | _string \| Array \| object_ |

### Events

| 事件名        | 说明                     | 回调参数                        |
| ------------- | ------------------------ | ------------------------------- |
| select        | 点击选项时触发           | _action: Action, index: number_ |
| open          | 打开菜单时触发           | -                               |
| close         | 关闭菜单时触发           | -                               |
| opened        | 打开菜单且动画结束后触发 | -                               |
| closed        | 关闭菜单且动画结束后触发 | -                               |
| click-overlay | 点击遮罩层时触发         | _event: MouseEvent_             |

### Slots

| 名称      | 说明                        |
| --------- | --------------------------- |
| default   | 自定义菜单内容              |
| reference | 触发 Popover 显示的元素内容 |

### 类型定义

组件导出以下类型定义：

```ts
import type {
  PopoverTheme,
  PopoverAction,
  PopoverTrigger,
  PopoverPlacement,
} from 'vant';
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
| --van-popover-arrow-size | _6px_ | - |
| --van-popover-border-radius | _var(--van-border-radius-lg)_ | - |
| --van-popover-action-width | _128px_ | - |
| --van-popover-action-height | _44px_ | - |
| --van-popover-action-font-size | _var(--van-font-size-md)_ | - |
| --van-popover-action-line-height | _var(--van-line-height-md)_ | - |
| --van-popover-action-icon-size | _20px_ | - |
| --van-popover-light-text-color | _var(--van-text-color)_ | - |
| --van-popover-light-background-color | _var(--van-white)_ | - |
| --van-popover-light-action-disabled-text-color | _var(--van-gray-5)_ | - |
| --van-popover-dark-text-color | _var(--van-white)_ | - |
| --van-popover-dark-background-color | _#4a4a4a_ | - |
| --van-popover-dark-action-disabled-text-color | _var(--van-gray-6)_ | - |

## 常见问题

### Popover 的点击事件无法正确触发？

这种情况通常是由于项目中引入了 `fastclick` 库导致的。建议移除 `fastclick`，或者配置 `fastclick` 的 [ignore 规则](https://github.com/ftlabs/fastclick#advanced)。
