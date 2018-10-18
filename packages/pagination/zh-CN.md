
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
  :total-items="24" 
  :items-per-page="5"
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
  :page-count="12"
  mode="simple" 
/>
```

#### 显示省略号

```html
<van-pagination 
  v-model="currentPage" 
  :total-items="125" 
  :show-page-size="3" 
  force-ellipses
/>
```

### API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| v-model | 当前页码 | `Number` | - | - |
| mode | 显示模式，可选值为 `simple` `multi` | `String` | `multi` | - |
| total-items | 总记录数 | `Number` | `0` | - |
| items-per-page | 每页记录数 | `Number` | `10` | - |
| page-count | 总页数 | `Number` | `根据页数计算` | - |
| prev-text | 上一页 | `String` | `上一页` | - |
| next-text | 下一页 | `String` | `下一页` | - |
| show-page-size | 显示的页码个数 | `Number` | `5` | - |
| force-ellipses | 显示省略号 | `Boolean` | `false` | - |

### Event

| 事件名 | 说明 | 参数 |
|------|------|------|
| change | 页码改变时触发 | - |
