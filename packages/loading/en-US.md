## Loading

### Install
``` javascript
import { Loading } from 'vant';

Vue.use(Loading);
```

### Usage

#### Circular

```html
<van-loading />
<van-loading color="white" />
```

#### Spinner

```html
<van-loading type="spinner" />
<van-loading type="spinner" color="white" />
```

### API

| Attribute | Description | Type | Default |
|------|------|------|------|
| color | Loading color | `String` | `#c9c9c9` |  |
| type | Can be set to `spinner` | `String` | `circular` |
| size | Size | `String` | `30px` |
