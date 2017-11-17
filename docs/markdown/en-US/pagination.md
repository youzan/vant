<style>
.demo-pagination {
  .van-pagination {
    margin: 5px 0;
    width: 100%;
  }

  .zan-doc-demo-block {
    padding: 0 15px;
  }

  .zan-doc-demo-block__subtitle {
    padding-left: 0;
  }
}
</style>
<script>

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
</script>

## Pagination

### Usage
``` javascript
import { Pagination } from 'vant';

Vue.component(Pagination.name, Pagination);
```

### Demo

#### Basic Usage

:::demo Basic Usage
```html
<van-pagination 
  :total-items="totalItems" 
  :items-per-page="itemsPerPage"
  :show-page-size="showPageSize2" 
  previous-text= "Prev" 
  next-text= "Next" 
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
        showPageSize2: 5
        bigTotalItems: 125,
        itemsPerPage: 5
    }
  }
}
```
:::

#### Simple Mode

Set `mode=simple`
:::demo 
```html
<van-pagination 
  :total-items="bigTotalItems" 
  v-model="pagination3" 
  :previous-text="'Prev'" 
  :next-text="'Next'" 
  @change="pageChanged3()" 
  mode="simple" 
  size="small" 
></van-pagination>
<pre>Page: {{pagination3.currentPage}} / {{pagination3.numPages}}</pre>
```
:::

#### Advanced Usage

Set `rotate=true`
:::demo 
```html
<van-pagination 
  :total-items="bigTotalItems" 
  v-model="pagination2" 
  :direction-links="true"
  previous-text= "Prev" 
  next-text= "Next" 
></van-pagination>
```
:::

Set `rotate: true` and `force-ellipses: true`
:::demo 
```html
<van-pagination 
  :total-items="bigTotalItems" 
  v-model="pagination2" 
  :show-page-size="showPageSize" 
  :force-ellipses="true"
  previous-text= "Prev" 
  next-text= "Next" 
></van-pagination>

<pre>Page: {{pagination2.currentPage}} / {{pagination2.numPages}}</pre>
```
:::

### API

| Attribute | Description | Type | Default | Accepted Values |
|-----------|-----------|-----------|-------------|-------------|
| v-model | pageModel | Object | - | - |
| forceEllipses | ellipses | Boolean | false | - |
| itemsPerPage | itemsPerPage | Number | 10 | - |
| firstText | firstText | String | First | - |
| lastText | lastText | String | Last | - |
| previousText | previousText | String | Previous | - |
| nextText | nextText | String | Next | - |
| showPageSize | showPageSize | Number | 5 | - |
| mode | mode | String | multi | multi : simple  |

### Event

| Event | Description | Attribute |
|-----------|-----------|-----------|
| change | triggered on page change | - |
