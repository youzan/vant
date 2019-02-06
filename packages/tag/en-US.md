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
<van-tag type="primary">Tag</van-tag>
<van-tag type="success">Tag</van-tag>
```

#### Plain style

```html
<van-tag plain>Tag</van-tag>
<van-tag plain type="danger">Tag</van-tag>
<van-tag plain type="primary">Tag</van-tag>
<van-tag plain type="success">Tag</van-tag>
```

#### Round style

```html
<van-tag round>Tag</van-tag>
<van-tag round type="danger">Tag</van-tag>
<van-tag round type="primary">Tag</van-tag>
<van-tag round type="success">Tag</van-tag>
```

#### Mark style

```html
<van-tag mark>Tag</van-tag>
<van-tag mark type="danger">Tag</van-tag>
<van-tag mark type="primary">Tag</van-tag>
<van-tag mark type="success">Tag</van-tag>
```

#### Custom Color

```html
<van-tag color="#f2826a">Tag</van-tag>
<van-tag color="#f2826a" plain>Tag</van-tag>
<van-tag color="#7232dd">Tag</van-tag>
<van-tag color="#7232dd" plain>Tag</van-tag>
<van-tag color="#ffe1e1" text-color="#ad0000">Tag</van-tag>
```

#### Custom Size

```html
<van-tag>Tag</van-tag>
<van-tag size="medium">Tag</van-tag>
<van-tag size="large">Tag</van-tag>
```

### API

| Attribute | Description | Type | Default |
|------|------|------|------|
| type | Type, can be set to `primary` `success` `danger` | `String` | - |
| size | Size, can be set to `large` `medium` | `String` | - |
| color | Custom color | `String` | - |
| plain | Whether to be plain style | `Boolean` | `false` |
| round | Whether to be round style | `Boolean` | `false` |
| mark | Whether to be mark style | `Boolean` | `false` |
| text-color | Text color | `String` | `white` |


### Slot

| name | Description |
|------|------|
| - | Default slot |

### Event

| Event | Description | Arguments |
|------|------|------|
| click | Triggered when clicked | - |
