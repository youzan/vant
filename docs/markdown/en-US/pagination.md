## Pagination

### Install
``` javascript
import { Pagination } from 'vant';

Vue.use(Pagination);
```

### Usage

#### Basic Usage

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

#### Simple mode

```html
<van-pagination 
  v-model="currentPage" 
  :pageCount="12"
  mode="simple" 
/>
```

#### Show ellipses

```html
<van-pagination 
  v-model="currentPage" 
  :totalItems="125" 
  :showPageSize="3" 
  :forceEllipses="true"
/>
```

### API

| Attribute | Description | Type | Default | Accepted Values |
|-----------|-----------|-----------|-------------|-------------|
| v-model | pageModel | `Object` | - | - |
| mode | mode | `String` | `multi` | `simple`  |
| itemsPerPage | itemsPerPage | `Number` | `10` | - |
| prevText | previousText | `String` | `Previous` | - |
| nextText | nextText | `String` | `Next` | - |
| showPageSize | showPageSize | `Number` | `5` | - |
| forceEllipses | ellipses | `Boolean` | `false` | - |

### Event

| Event | Description | Attribute |
|-----------|-----------|-----------|
| change | Triggered on page change | - |
