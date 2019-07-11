# Skeleton

### Install

``` javascript
import { Skeleton } from 'vant';

Vue.use(Skeleton);
```

## Usage

### Basic Usage

```html
<van-skeleton title :row="3" />
```

### Show Avatar

```html
<van-skeleton title avatar :row="3" />
```

### Show Children

```html
<van-skeleton
  title
  avatar
  :row="3"
  :loading="loading"
>
  <div>Content</div>
</van-skeleton>
```

```js
export default {
  data() {
    return {
      loading: true
    }
  },
  mounted() {
    this.loading = false;
  }
};
```

## API

### Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| row | Row count | `number` | `0` |
| row-width | Row width, can be array | `number | string | number[] | string []` | `100%` |
| title | Whether to show title placeholder | `boolean` | `false` |
| title-width | Title width | `number | string` | `40%` |
| avatar | Whether to show avatar placeholder | `boolean` | `false` |
| avatar-size | Size of avatar placeholder | `number | string` | `32px` |
| avatar-shape | Shape of avatar placeholder，can be set to `square` | `string` | `round` |
| loading | Whether to show skeleton，pass `false` to show child component | `boolean` | `true` |
| animate | Whether to enable animation | `boolean` | `true` |
