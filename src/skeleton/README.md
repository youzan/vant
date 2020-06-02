# Skeleton

### Install

```js
import Vue from 'vue';
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
<van-skeleton title avatar :row="3" :loading="loading">
  <div>Content</div>
</van-skeleton>
```

```js
export default {
  data() {
    return {
      loading: true,
    };
  },
  mounted() {
    this.loading = false;
  },
};
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| row | Row count | _number \| string_ | `0` |
| row-width | Row width, can be array | _number \| string \|<br>(number \| string)[]_ | `100%` |
| title | Whether to show title placeholder | _boolean_ | `false` |
| avatar | Whether to show avatar placeholder | _boolean_ | `false` |
| loading | Whether to show skeleton，pass `false` to show child component | _boolean_ | `true` |
| animate | Whether to enable animation | _boolean_ | `true` |
| round `v2.8.5` | Whether to show round title and row | _boolean_ | `false` |
| title-width | Title width | _number \| string_ | `40%` |
| avatar-size | Size of avatar placeholder | _number \| string_ | `32px` |
| avatar-shape | Shape of avatar placeholder，can be set to `square` | _string_ | `round` |
