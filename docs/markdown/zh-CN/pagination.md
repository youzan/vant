
## Pagination 分页

### 使用指南
``` javascript
import { Pagination } from 'vant';

Vue.component(Pagination.name, Pagination);
```

### 代码演示

#### 基础用法

```html
<van-pagination 
  :totalItems="totalItems" 
  :itemsPerPage="itemsPerPage"
  :showPageSize="showPageSize2" 
  previousText= "上一页" 
  nextText= "下一页" 
  v-model="pagination1" 
  @change="pageChanged"
></van-pagination>

<pre>Page: {{pagination1.currentPage}} / {{pagination1.numPages}}</pre>
```

```javascript
export default {
  data() {
    return  {
        totalItems: 24,
        pagination1: {
            currentPage: 2
        },
        pagination2: {
            currentPage: 1
        },
        pagination3: {
            currentPage: 1
        },
        setPage (pageNo) {
            this.pagination1.currentPage = pageNo;
        },
        pageChanged () {
            console.log('Page changed to: ' + this.pagination1.currentPage);
        },
        showPageSize: 3,
        showPageSize2: 5,
        bigTotalItems: 125,
        itemsPerPage: 5
    }
  }
}
```

设置`mode=simple`，使用简单模式

```html
<van-pagination 
  :totalItems="bigTotalItems" 
  v-model="pagination2" 
  previousText="上一页" 
  nextText="下一页" 
  mode="simple" 
></van-pagination>
<pre>Page: {{pagination2.currentPage}} / {{pagination2.numPages}}</pre>
```

#### 高级用法

设置 `forceEllipses: true`，显示省略号

```html
<van-pagination 
  :totalItems="bigTotalItems" 
  v-model="pagination3" 
  :showPageSize="showPageSize" 
  :forceEllipses="true"
  previousText= "上一页" 
  nextText= "下一页" 
></van-pagination>

<pre>Page: {{pagination3.currentPage}} / {{pagination3.numPages}}</pre>
```

### API

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| v-model | 当前页码 | Object | - | - |
| mode | 显示模式 | String | multi | multi : simple  |
| itemsPerPage | 每页记录数 | Number | 10 | - |
| previousText | 上一页 | String | Previous | - |
| nextText | 下一页 | String | Next | - |
| showPageSize | 显示的页码个数 | Number | 5 | - |
| forceEllipses | 显示省略号 | Boolean | false | - |

### Event

| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|
| change | 页码改变时触发 | - |
