# Tag

### Install

```js
import Vue from 'vue';
import { Tag } from 'vant';

Vue.use(Tag);
```

## Usage

### Basic Usage

```html
<van-tag>Tag</van-tag>
<van-tag type="primary">Tag</van-tag>
<van-tag type="success">Tag</van-tag>
<van-tag type="danger">Tag</van-tag>
<van-tag type="warning">Tag</van-tag>
```

### Round style

```html
<van-tag round>Tag</van-tag>
<van-tag round type="primary">Tag</van-tag>
<van-tag round type="success">Tag</van-tag>
<van-tag round type="danger">Tag</van-tag>
<van-tag round type="warning">Tag</van-tag>
```

### Mark style

```html
<van-tag mark>Tag</van-tag>
<van-tag mark type="primary">Tag</van-tag>
<van-tag mark type="success">Tag</van-tag>
<van-tag mark type="danger">Tag</van-tag>
<van-tag mark type="warning">Tag</van-tag>
```

### Plain style

```html
<van-tag plain>Tag</van-tag>
<van-tag plain type="primary">Tag</van-tag>
<van-tag plain type="success">Tag</van-tag>
<van-tag plain type="danger">Tag</van-tag>
<van-tag plain type="warning">Tag</van-tag>
```

### Custom Color

```html
<van-tag color="#f2826a">Tag</van-tag>
<van-tag color="#f2826a" plain>Tag</van-tag>
<van-tag color="#7232dd">Tag</van-tag>
<van-tag color="#7232dd" plain>Tag</van-tag>
<van-tag color="#ffe1e1" text-color="#ad0000">Tag</van-tag>
```

### Custom Size

```html
<van-tag type="danger">Tag</van-tag>
<van-tag type="danger" size="medium">Tag</van-tag>
<van-tag type="danger" size="large">Tag</van-tag>
```

### Closeable

```html
<van-tag
  v-if="show.primary"
  closeable
  size="medium"
  type="primary"
  @close="close('primary')"
>
  Tag
</van-tag>
<van-tag
  v-if="show.success"
  closeable
  size="medium"
  type="success"
  @close="close('success')"
>
  Tag
</van-tag>
```

```js
export default {
  data() {
    return {
      show: {
        primary: true,
        success: true
      }
    }
  },
  methods: {
    close(type) {
      this.show[type] = false;
    }
  }
}
```

## API

### Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| type | Type, can be set to `primary` `success` `danger` `warning` | *string* | `default` |
| size | Size, can be set to `large` `medium` | *string* | - |
| color | Custom color | *string* | - |
| plain | Whether to be plain style | *boolean* | `false` |
| round | Whether to be round style | *boolean* | `false` |
| mark | Whether to be mark style | *boolean* | `false` |
| text-color | Text color | *string* | `white` |
| closeable `v2.2.9` | Whether to be closeable | *boolean* | `false` |

### Slots

| Name | Description |
|------|------|
| default | Default slot |

### Events

| Event | Description | Arguments |
|------|------|------|
| click | Triggered when clicked | *event: Event* |
| close | Triggered when click close icon | - |
