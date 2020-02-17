# Loading

### Install

```js
import Vue from 'vue';
import { Loading } from 'vant';

Vue.use(Loading);
```

## Usage

### Type

```html
<van-loading />
<van-loading type="spinner" />
```

### Color

```html
<van-loading color="#1989fa" />
<van-loading type="spinner" color="#1989fa" />
```

### Size

```html
<van-loading size="24" />
<van-loading type="spinner" size="24px" />
```

### Text

```html
<van-loading size="24px">Loading...</van-loading>
```

### Vertical

```html
<van-loading size="24px" vertical>Loading...</van-loading>
```

## API

### Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| color | Loading color | *string* | `#c9c9c9` |
| type | Can be set to `spinner` | *string* | `circular` |
| size | Icon size | *number \| string* | `30px` |
| text-size | Text font size | *number \| string* | `14px` |
| vertical | Whether to arrange icons and text content vertically | *boolean* | `false` |

### Slots

| Name | Description |
|------|------|
| default | Loading text |
