# Pagination 分页

### 介绍

数据量过多时，采用分页的形式将数据分隔，每次只加载一个页面。

### 引入

通过以下方式来全局注册组件，更多注册方式请参考[组件注册](#/zh-CN/advanced-usage#zu-jian-zhu-ce)。

```js
import { createApp } from 'vue';
import { Pagination } from 'vant';

const app = createApp();
app.use(Pagination);
```

## 代码演示

### 基础用法

通过 `v-model` 来绑定当前页码。

```html
<van-pagination v-model="currentPage" :total-items="24" :items-per-page="5" />
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const currentPage = ref(1);
    return { currentPage };
  },
};
```

### 简单模式

 将 `mode` 设置为 `simple` 来切换到简单模式，此时分页器不会展示具体的页码按钮。

```html
<van-pagination v-model="currentPage" :page-count="12" mode="simple" />
```

### 显示省略号

设置 `force-ellipses` 后会展示省略号按钮，点击后可以快速跳转。

```html
<van-pagination
  v-model="currentPage"
  :total-items="125"
  :show-page-size="3"
  force-ellipses
/>
```

### 自定义按钮

通过 `prev-text`、`next-text` 等插槽来自定义分页按钮的内容。

```html
<van-pagination v-model="currentPage" :total-items="50" :show-page-size="5">
  <template #prev-text>
    <van-icon name="arrow-left" />
  </template>
  <template #next-text>
    <van-icon name="arrow" />
  </template>
  <template #page="{ text }">{{ text }}</template>
</van-pagination>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model | 当前页码 | _number_ | - |
| mode | 显示模式，可选值为 `simple` | _string_ | `multi` |
| prev-text | 上一页按钮文字 | _string_ | `上一页` |
| next-text | 下一页按钮文字 | _string_ | `下一页` |
| page-count | 总页数 | _number \| string_ | 根据页数计算 |
| total-items | 总记录数 | _number \| string_ | `0` |
| items-per-page | 每页记录数 | _number \| string_ | `10` |
| show-page-size | 显示的页码个数 | _number \| string_ | `5` |
| force-ellipses | 是否显示省略号 | _boolean_ | `false` |

### Events

| 事件名 | 说明           | 回调参数 |
| ------ | -------------- | -------- |
| change | 页码改变时触发 | -        |

### Slots

| 名称 | 描述 | 参数 |
| --- | --- | --- |
| page | 自定义页码 | _{ number: number, text: string, active: boolean }_ |
| prev-text | 自定义上一页按钮文字 | - |
| next-text | 自定义下一页按钮文字 | - |

### 类型定义

组件导出以下类型定义：

```ts
import type { PaginationMode } from 'vant';
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
| --van-pagination-height | _40px_ | - |
| --van-pagination-font-size | _var(--van-font-size-md)_ | - |
| --van-pagination-item-width | _36px_ | - |
| --van-pagination-item-default-color | _var(--van-primary-color)_ | - |
| --van-pagination-item-disabled-color | _var(--van-gray-7)_ | - |
| --van-pagination-item-disabled-background-color | _var(--van-background-color)_ | - |
| --van-pagination-background-color | _var(--van-white)_ | - |
| --van-pagination-desc-color | _var(--van-gray-7)_ | - |
| --van-pagination-disabled-opacity | _var(--van-disabled-opacity)_ | - |
