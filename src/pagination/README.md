# Pagination

### Install

```js
import Vue from 'vue';
import { Pagination } from 'vant';

Vue.use(Pagination);
```

## Usage

### Basic Usage

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

### Simple mode

```html
<van-pagination 
  v-model="currentPage" 
  :page-count="12"
  mode="simple" 
/>
```

### Show ellipses

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

| Attribute | Description | Type | Default |
|------|------|------|------|
| v-model | Current page number | *number* | - |
| mode | Mode, can be set to `simple` `multi` | *string* | `multi` |
| prev-text | Previous text | *string* | `Previous` |
| next-text | Next text | *string* | `Next` |
| total-items | Total items | *number \| string* | `0` |
| items-per-page | Item number per page | *number \| string* | `10` |
| page-count | The total number of pages, if not set, will be calculated based on `total-items` and `items-per-page` | *number \| string* | `-` |
| show-page-size | Count of page size to show | *number \| string* | `5` |
| force-ellipses | Whether to show ellipses | *boolean* | `false` |

### Events

| Event | Description | Arguments |
|------|------|------|
| change | Triggered on page change | - |
