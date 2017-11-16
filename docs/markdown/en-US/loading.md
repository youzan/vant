## Loading

### Install
``` javascript
import { Loading } from 'vant';

Vue.component(Loading.name, Loading);
```

### Usage

#### Solid Circle

```html
<van-loading type="circle" color="black" />
<van-loading type="circle" color="white" />
```

#### Gradient Circle

```html
<van-loading type="gradient-circle" color="black" />
<van-loading type="gradient-circle" color="white" />
```

#### Spinner

```html
<van-loading type="spinner" color="black" />
<van-loading type="spinner" color="white" />
```

### API

| Attribute | Description | Type | Default | Accepted Values |
|-----------|-----------|-----------|-------------|-------------|
| color | Color | `String` | `black` | `black` `white` |
| type | Type | `String` | `gradient-circle` | `spinner` `circle` |
