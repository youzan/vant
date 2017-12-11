
## Pagination 分页

### 使用指南
``` javascript
import { Pagination } from 'vant';

Vue.use(Pagination);
```

### 代码演示

#### 基础用法


```html
<van-pagination 
  v-model="currentPage" 
  :totalItems="24" 
  :itemsPerPage="5"
/>
```

```javascript
export default {
  data() {
    return  {
      currentPage: 1
    }
  }
}
```

#### 简单模式

```html
<van-pagination 
  v-model="currentPage" 
  :pageCount="12"
  mode="simple" 
/>
```

#### 显示省略号

```html
<van-pagination 
  v-model="currentPage" 
  :totalItems="125" 
  :showPageSize="3" 
  :forceEllipses="true"
/>
```

### API

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| v-model | 当前页码 | `Object` | - | - |
| mode | 显示模式 | `String` | `multi` | `simple`  |
| itemsPerPage | 每页记录数 | `Number` | `10` | - |
| previousText | 上一页 | `String` | `上一页` | - |
| nextText | 下一页 | `String` | `下一页` | - |
| showPageSize | 显示的页码个数 | `Number` | `5` | - |
| forceEllipses | 显示省略号 | `Boolean` | `false` | - |

### Event

| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|
| change | 页码改变时触发 | - |
