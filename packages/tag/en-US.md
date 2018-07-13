## Tag

### Install
``` javascript
import { Tag } from 'vant';

Vue.use(Tag);
```

### Usage

#### Basic Usage

```html
<van-tag>Tag</van-tag>
<van-tag type="danger">Tag</van-tag>
<van-tag type="success">Tag</van-tag>
<van-tag type="primary">Tag</van-tag>
```

#### Plain style

```html
<van-tag plain>Tag</van-tag>
<van-tag plain type="danger">Tag</van-tag>
<van-tag plain type="primary">Tag</van-tag>
<van-tag plain type="success">Tag</van-tag>
```

#### Mark style

```html
<van-tag mark>Tag</van-tag>
<van-tag mark type="danger">Tag</van-tag>
<van-tag mark type="primary">Tag</van-tag>
<van-tag mark type="success">Tag</van-tag>
```

### API

| Attribute | Description | Type | Default |
|-----------|-----------|-----------|-------------|
| type | Type, can be set to `primary` `success` `danger` | `String` | `''`|
| plain | Whether to be plain style | `Boolean` | `false` |
| mark | Wtether to be mark style | `Boolean` | `false` |

### Slot

| name | Description |
|-----------|-----------|
| - | Default slot |
