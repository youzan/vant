# Tag

### Intro

Used to mark keywords and summarize the main content.

### Install

Register component globally via `app.use`, refer to [Component Registration](#/en-US/advanced-usage#zu-jian-zhu-ce) for more registration ways.

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
import { ref } from 'vue';

export default {
  setup() {
    const show = ref(true);
    const close = () => {
      show.value = false;
    };

    return {
      show,
      close,
    };
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

| Event | Description                        | Arguments           |
| ----- | ---------------------------------- | ------------------- |
| click | Emitted when component is clicked  | _event: MouseEvent_ |
| close | Emitted when close icon is clicked | _event: MouseEvent_ |

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/config-provider).

| Name | Default Value | Description |
| --- | --- | --- |
| --van-tag-padding | `0 var(--van-padding-base)` | - |
| --van-tag-text-color | `var(--van-white)` | - |
| --van-tag-font-size | `var(--van-font-size-sm)` | - |
| --van-tag-border-radius | `2px` | - |
| --van-tag-line-height | `16px` | - |
| --van-tag-medium-padding | `2px 6px` | - |
| --van-tag-large-padding | `var(--van-padding-base) var(--van-padding-xs)` | - |
| --van-tag-large-border-radius | `var(--van-border-radius-md)` | - |
| --van-tag-large-font-size | `var(--van-font-size-md)` | - |
| --van-tag-round-border-radius | `var(--van-border-radius-max)` | - |
| --van-tag-danger-color | `var(--van-red)` | - |
| --van-tag-primary-color | `var(--van-blue)` | - |
| --van-tag-success-color | `var(--van-green)` | - |
| --van-tag-warning-color | `var(--van-orange)` | - |
| --van-tag-default-color | `var(--van-gary-6)` | - |
| --van-tag-plain-background-color | `var(--van-white)` | - |
