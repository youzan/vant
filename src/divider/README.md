# Divider

### Install

```js
import Vue from 'vue';
import { Divider } from 'vant';

Vue.use(Divider);
```

## Usage

### Basic Usage

```html
<van-divider />
```

### With Text

```html
<van-divider>Text</van-divider>
```

### Content Position

```html
<van-divider content-position="left">Text</van-divider>
<van-divider content-position="right">Text</van-divider>
```

### Dashed

```html
<van-divider dashed>Text</van-divider>
```

### Custom Style

```html
<van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">
  Text
</van-divider>
```

## API

### Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| dashed | Whether to use dashed border | *boolean* | `false` |
| hairline | Whether to use hairline | *boolean* | `true` |
| content-position | Content position，can be set to `left` `right` | *string* | `center` |

### Slots

| Name | Description |
|------|------|
| default | content |
