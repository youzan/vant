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

#### Simple mode

```html
<van-pagination 
  v-model="currentPage" 
  :page-count="12"
  mode="simple" 
/>
```

#### Show ellipses

```html
<van-pagination 
  v-model="currentPage" 
  :total-items="125" 
  :show-page-size="3" 
  force-ellipses
/>
```

### API

| Attribute | Description | Type | Default |
|------|------|------|------|
| v-model | Current page number | `Number` | - |
| mode | Mode, can be set to `simple` `multi` | `String` | `multi` |
| total-items | Total items | `Number` | `0` |
| items-per-page | Item number per page | `Number` | `10` |
| page-count | The total number of pages, if not set, will be calculated based on `total-items` and `items-per-page` | `Number` | `-` |
| prev-text | Previous text | `String` | `Previous` |
| next-text | Next text | `String` | `Next` |
| show-page-size | Count of page size to show | `Number` | `5` |
| force-ellipses | Whether to show ellipses | `Boolean` | `false` |

### Event

| Event | Description | Arguments |
|------|------|------|
| change | Triggered on page change | - |
