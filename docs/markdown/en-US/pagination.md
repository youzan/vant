
## Pagination

### Usage
``` javascript
import { Pagination } from 'vant';

Vue.component(Pagination.name, Pagination);
```

### Demo

#### Basic Usage

```html
<van-pagination 
  :totalItems="totalItems" 
  :itemsPerPage="itemsPerPage"
  :showPageSize="showPageSize2" 
  previousText= "Prev" 
  nextText= "Next" 
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
        showPageSize2: 5
        bigTotalItems: 125,
        itemsPerPage: 5
    }
  }
}
```

Set `mode=simple` use Simple Mode

```html
<van-pagination 
  :totalItems="bigTotalItems" 
  v-model="pagination2" 
  :previousText="'Prev'" 
  :nextText="'Next'" 
  mode="simple" 
></van-pagination>
<pre>Page: {{pagination2.currentPage}} / {{pagination2.numPages}}</pre>
```

#### Advanced Usage

Set `forceEllipses: true`, show ellipses

```html
<van-pagination 
  :totalItems="bigTotalItems" 
  v-model="pagination3" 
  :showPageSize="showPageSize" 
  :forceEllipses="true"
  previousText= "Prev" 
  nextText= "Next" 
></van-pagination>

<pre>Page: {{pagination3.currentPage}} / {{pagination3.numPages}}</pre>
```

### API

| Attribute | Description | Type | Default | Accepted Values |
|-----------|-----------|-----------|-------------|-------------|
| v-model | pageModel | Object | - | - |
| mode | mode | String | multi | multi : simple  |
| itemsPerPage | itemsPerPage | Number | 10 | - |
| previousText | previousText | String | Previous | - |
| nextText | nextText | String | Next | - |
| showPageSize | showPageSize | Number | 5 | - |
| forceEllipses | ellipses | Boolean | false | - |

### Event

| Event | Description | Attribute |
|-----------|-----------|-----------|
| change | triggered on page change | - |
