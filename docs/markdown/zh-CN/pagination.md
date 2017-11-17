
## Pagination 分页

### 使用指南
``` javascript
import { Pagination } from 'vant';

Vue.component(Pagination.name, Pagination);
```

### 代码演示

#### 基础用法

demo 基础用法

```html
<van-pagination 
  :total-items="totalItems" 
  :items-per-page="itemsPerPage"
  :show-page-size="showPageSize2" 
  previous-text= "上一页" 
  next-text= "下一页" 
  v-model="pagination1" 
  @change="pageChanged()"
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
        setPage: function (pageNo) {
            this.pagination1.currentPage = pageNo;
        },
        pageChanged: function () {
            console.log('Page changed to: ' + this.pagination1.currentPage);
        },
        pageChanged3: function () {
            console.log('Page changed to: ' + this.pagination3.currentPage);
        },
        showPageSize: 3,
        showPageSize2: 5,
        bigTotalItems: 125,
        itemsPerPage: 5
    }
  }
}
```

#### 简单模式

设置`mode=simple`

```html
<van-pagination 
  :total-items="bigTotalItems" 
  v-model="pagination3" 
  :previous-text="'上一页'" 
  :next-text="'下一页'" 
  @change="pageChanged3()" 
  mode="simple" 
  size="small" 
></van-pagination>
<pre>Page: {{pagination3.currentPage}} / {{pagination3.numPages}}</pre>
```

#### 限制最大显示按钮数

设置 `rotate=true`

```html
<van-pagination 
  :total-items="bigTotalItems" 
  v-model="pagination2" 
  :direction-links="true"
  previous-text= "上一页" 
  next-text= "下一页" 
></van-pagination>
```

设置 `rotate: true` 和 `force-ellipses: true`

```html
<van-pagination 
  :total-items="bigTotalItems" 
  v-model="pagination2" 
  :show-page-size="showPageSize" 
  :force-ellipses="true"
  previous-text= "上一页" 
  next-text= "下一页" 
></van-pagination>

<pre>Page: {{pagination2.currentPage}} / {{pagination2.numPages}}</pre>
```

### API

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| v-model | 当前页码 | Object | - | - |
| directionLinks | 显示前后指示链接 | Boolean | true | - |
| forceEllipses | 显示省略号 | Boolean | false | - |
| itemsPerPage | 每页记录数 | Number | 10 | - |
| firstText | 第一页文本 | String | First | - |
| lastText | 尾页文本 | String | Last | - |
| previousText | 上一页 | String | Previous | - |
| nextText | 下一页 | String | Next | - |
| showPageSize | 显示的页码个数 | Number | 5 | - |
| mode | 显示模式 | String | multi | multi : simple  |
| size | 尺寸 | String | normal | normal : small |

### Event

| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|
| change | 页码改变时触发 | - |
