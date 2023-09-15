# Pagination 分页

### 引入

```js
import Vue from 'vue';
import { Pagination } from 'vant';

Vue.use(Pagination);
```

## 代码演示

### 基础用法

通过 `v-model` 来绑定当前页码。

```html
<van-pagination v-model="currentPage" :total-items="24" :items-per-page="5" />
```

```js
export default {
  data() {
    return {
      currentPage: 1,
    };
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
| page `v2.10.9` | 自定义页码 | _{ number: number, text: string, active: boolean }_ |
| prev-text `v2.10.9` | 自定义上一页按钮文字 | `-` |
| next-text `v2.10.9` | 自定义下一页按钮文字 | `-` |

### 样式变量

组件提供了下列 Less 变量，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/theme)。

| 名称                                       | 默认值              | 描述 |
| ------------------------------------------ | ------------------- | ---- |
| @pagination-height                         | `40px`              | -    |
| @pagination-font-size                      | `@font-size-md`     | -    |
| @pagination-item-width                     | `36px`              | -    |
| @pagination-item-default-color             | `@blue`             | -    |
| @pagination-item-disabled-color            | `@gray-7`           | -    |
| @pagination-item-disabled-background-color | `@background-color` | -    |
| @pagination-background-color               | `@white`            | -    |
| @pagination-desc-color                     | `@gray-7`           | -    |
| @pagination-disabled-opacity               | `@disabled-opacity` | -    |
