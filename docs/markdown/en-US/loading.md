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

#### Circle

```html
<van-loading type="circle" color="black" />
<van-loading type="circle" color="white" />
```

#### Circular

```html
<van-loading type="circular" color="black" />
<van-loading type="circular" color="white" />
```

### API

| Attribute | Description | Type | Default | Accepted Values |
|-----------|-----------|-----------|-------------|-------------|
| color | Color | `String` | `black` | `black` `white` |
| type | Type | `String` | `circular` | `spinner` `circle` |
| size | Size | `String` | `30px` | - |
