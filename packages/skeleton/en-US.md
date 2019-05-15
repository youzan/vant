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
| row | Row count | `Number` | `0` |
| row-width | Row width, can be array | `Number | String | Array` | `100%` |
| title | Whether to show title placeholder | `Boolean` | `false` |
| title-width | Title width | `Number | String` | `40%` |
| avatar | Whether to show avatar placeholder | `Boolean` | `false` |
| avatar-size | Size of avatar placeholder | `Number | String` | `32px` |
| avatar-shape | Shape of avatar placeholder，can be set to `square` | `String` | `round` |
| loading | Whether to show skeleton，pass `false` to show child component | `Boolean` | `true` |
| animate | Whether to enable animation | `Boolean` | `true` |
