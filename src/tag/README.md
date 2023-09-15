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
<van-tag v-if="show" closeable size="medium" type="primary" @close="close">
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

| Event | Description                        | Arguments      |
| ----- | ---------------------------------- | -------------- |
| click | Emitted when component is clicked  | _event: Event_ |
| close | Emitted when close icon is clicked | -              |

### Less Variables

How to use: [Custom Theme](#/en-US/theme).

| Name                        | Default Value               | Description |
| --------------------------- | --------------------------- | ----------- |
| @tag-padding                | `0 @padding-base`           | -           |
| @tag-text-color             | `@white`                    | -           |
| @tag-font-size              | `@font-size-sm`             | -           |
| @tag-border-radius          | `2px`                       | -           |
| @tag-line-height            | `16px`                      | -           |
| @tag-medium-padding         | `2px 6px`                   | -           |
| @tag-large-padding          | `@padding-base @padding-xs` | -           |
| @tag-large-border-radius    | `@border-radius-md`         | -           |
| @tag-large-font-size        | `@font-size-md`             | -           |
| @tag-round-border-radius    | `@border-radius-max`        | -           |
| @tag-danger-color           | `@red`                      | -           |
| @tag-primary-color          | `@blue`                     | -           |
| @tag-success-color          | `@green`                    | -           |
| @tag-warning-color          | `@orange`                   | -           |
| @tag-default-color          | `@gray-6`                   | -           |
| @tag-plain-background-color | `@white`                    | -           |
