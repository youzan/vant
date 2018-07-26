## Loading

### Install
``` javascript
import { Loading } from 'vant';

Vue.use(Loading);
```

### Usage

#### Circular

```html
<van-loading color="black" />
<van-loading color="white" />
```

#### Spinner

```html
<van-loading type="spinner" color="black" />
<van-loading type="spinner" color="white" />
```

### API

| Attribute | Description | Type | Default |
|-----------|-----------|-----------|-------------|
| color | Can be set to `white` | `String` | `black` |  |
| type | Can be set to `spinner` | `String` | `circular` |
| size | Size | `String` | `30px` |
