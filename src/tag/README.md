# Tag

### Install

```js
import { createApp } from 'vue';
import { Tag } from 'vant';

const app = createApp();
app.use(Tag);
```

## Usage

### Basic Usage

```html
<van-tag type="primary">Tag</van-tag>
<van-tag type="success">Tag</van-tag>
<van-tag type="danger">Tag</van-tag>
<van-tag type="warning">Tag</van-tag>
```

### Plain style

```html
<van-tag plain type="primary">Tag</van-tag>
```

### Round style

```html
<van-tag round type="primary">Tag</van-tag>
```

### Mark style

```html
<van-tag mark type="primary">Tag</van-tag>
```

### Closeable

```html
<van-tag :show="show" closeable size="medium" type="primary" @close="close">
  Tag
</van-tag>
```

```js
export default {
  data() {
    return {
      show: true,
    };
  },
  methods: {
    close() {
      this.show = false;
    },
  },
};
```

### Custom Size

```html
<van-tag type="primary">Tag</van-tag>
<van-tag type="primary" size="medium">Tag</van-tag>
<van-tag type="primary" size="large">Tag</van-tag>
```

### Custom Color

```html
<van-tag color="#7232dd">Tag</van-tag>
<van-tag color="#ffe1e1" text-color="#ad0000">Tag</van-tag>
<van-tag color="#7232dd" plain>Tag</van-tag>
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| type | Type, can be set to `primary` `success` `danger` `warning` | _string_ | `default` |
| size | Size, can be set to `large` `medium` | _string_ | - |
| color | Custom color | _string_ | - |
| show | Whether to show tag | _boolean_ | `true` |
| plain | Whether to be plain style | _boolean_ | `false` |
| round | Whether to be round style | _boolean_ | `false` |
| mark | Whether to be mark style | _boolean_ | `false` |
| text-color | Text color | _string_ | `white` |
| closeable | Whether to be closeable | _boolean_ | `false` |

### Slots

| Name    | Description  |
| ------- | ------------ |
| default | Default slot |

### Events

| Event | Description                     | Arguments      |
| ----- | ------------------------------- | -------------- |
| click | Triggered when clicked          | _event: Event_ |
| close | Triggered when click close icon | -              |
