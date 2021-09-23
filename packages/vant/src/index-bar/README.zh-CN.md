# IndexBar 索引栏

### 介绍

用于列表的索引分类显示和快速定位。

### 引入

通过以下方式来全局注册组件，更多注册方式请参考[组件注册](#/zh-CN/advanced-usage#zu-jian-zhu-ce)。

```js
import { createApp } from 'vue';
import { IndexBar, IndexAnchor } from 'vant';

const app = createApp();
app.use(IndexBar);
app.use(IndexAnchor);
```

## 代码演示

### 基础用法

点击索引栏时，会自动跳转到对应的 `IndexAnchor` 锚点位置。

```html
<van-index-bar>
  <van-index-anchor index="A" />
  <van-cell title="文本" />
  <van-cell title="文本" />
  <van-cell title="文本" />

  <van-index-anchor index="B" />
  <van-cell title="文本" />
  <van-cell title="文本" />
  <van-cell title="文本" />

  ...
</van-index-bar>
```

### 自定义索引列表

可以通过 `index-list` 属性自定义展示的索引字符列表。

```html
<van-index-bar :index-list="indexList">
  <van-index-anchor index="1">标题1</van-index-anchor>
  <van-cell title="文本" />
  <van-cell title="文本" />
  <van-cell title="文本" />

  <van-index-anchor index="2">标题2</van-index-anchor>
  <van-cell title="文本" />
  <van-cell title="文本" />
  <van-cell title="文本" />

  ...
</van-index-bar>
```

```js
export default {
  setup() {
    return {
      indexList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
  },
};
```

## API

### IndexBar Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| index-list | 索引字符列表 | _string[] \| number[]_ | `A-Z` |
| z-index | z-index 层级 | _number \| string_ | `1` |
| sticky | 是否开启锚点自动吸顶 | _boolean_ | `true` |
| sticky-offset-top | 锚点自动吸顶时与顶部的距离 | _number_ | `0` |
| highlight-color | 索引字符高亮颜色 | _string_ | `#ee0a24` |
| teleport `v3.0.19` | 指定索引栏挂载的节点 | _string \| Element_ | - |

### IndexAnchor Props

| 参数  | 说明     | 类型               | 默认值 |
| ----- | -------- | ------------------ | ------ |
| index | 索引字符 | _number \| string_ | -      |

### IndexBar Events

| 事件名 | 说明                         | 回调参数                  |
| ------ | ---------------------------- | ------------------------- |
| select | 点击索引栏的字符时触发       | _index: number \| string_ |
| change | 当前高亮的索引字符变化时触发 | _index: number \| string_ |

### IndexBar 方法

通过 ref 可以获取到 IndexBar 实例并调用实例方法，详见[组件实例方法](#/zh-CN/advanced-usage#zu-jian-shi-li-fang-fa)。

| 方法名   | 说明           | 参数                      | 返回值 |
| -------- | -------------- | ------------------------- | ------ |
| scrollTo | 滚动到指定锚点 | _index: number \| string_ | -      |

### 类型定义

组件导出以下类型定义：

```ts
import type { IndexBarProps, IndexBarInstance } from 'vant';
```

`IndexBarInstance` 是组件实例的类型，用法如下：

```ts
import { ref } from 'vue';
import type { IndexBarInstance } from 'vant';

const indexBarRef = ref<IndexBarInstance>();

indexBarRef.value?.scrollTo('B');
```

### IndexAnchor Slots

| 名称    | 说明                             |
| ------- | -------------------------------- |
| default | 锚点位置显示内容，默认为索引字符 |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
| --van-index-bar-sidebar-z-index | _2_ | - |
| --van-index-bar-index-font-size | _var(--van-font-size-xs)_ | - |
| --van-index-bar-index-line-height | _var(--van-line-height-xs)_ | - |
| --van-index-bar-index-active-color | _var(--van-danger-color)_ | - |
| --van-index-anchor-z-index | _1_ | - |
| --van-index-anchor-padding | _0 var(--van-padding-md)_ | - |
| --van-index-anchor-text-color | _var(--van-text-color)_ | - |
| --van-index-anchor-font-weight | _var(--van-font-weight-bold)_ | - |
| --van-index-anchor-font-size | _var(--van-font-size-md)_ | - |
| --van-index-anchor-line-height | _32px_ | - |
| --van-index-anchor-background-color | _transparent_ | - |
| --van-index-anchor-sticky-text-color | _var(--van-danger-color)_ | - |
| --van-index-anchor-sticky-background-color | _var(--van-white)_ | - |
