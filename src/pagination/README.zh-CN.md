
# Pagination 分页

### 引入

```js
import Vue from 'vue';
import { Pagination } from 'vant';

Vue.use(Pagination);
```

## 代码演示

### 基础用法

```html
<van-pagination 
  v-model="currentPage" 
  :total-items="24" 
  :items-per-page="5"
/>
```

```js
export default {
  data() {
    return  {
      currentPage: 1
    }
  }
}
```

### 简单模式

```html
<van-pagination 
  v-model="currentPage" 
  :page-count="12"
  mode="simple" 
/>
```

### 显示省略号

```html
<van-pagination 
  v-model="currentPage" 
  :total-items="125" 
  :show-page-size="3" 
  force-ellipses
/>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| v-model | 当前页码 | *number* | - |
| mode | 显示模式，可选值为 `simple` | *string* | `multi` |
| prev-text | 上一页按钮文字 | *string* | `上一页` |
| next-text | 下一页按钮文字 | *string* | `下一页` |
| page-count | 总页数 | *number \| string* | 根据页数计算 |
| total-items | 总记录数 | *number \| string* | `0` |
| items-per-page | 每页记录数 | *number \| string* | `10` |
| show-page-size | 显示的页码个数 | *number \| string* | `5` |
| force-ellipses | 是否显示省略号 | *boolean* | `false` |

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| change | 页码改变时触发 | - |
