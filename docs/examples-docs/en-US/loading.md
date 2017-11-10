## Loading

### Install
``` javascript
import { Loading } from 'vant';

Vue.component(Loading.name, Loading);
```

### Usage

#### Solid color

:::demo Solid color
```html
<van-loading type="circle" color="black"></van-loading>
<van-loading type="circle" color="white"></van-loading>
```
:::

#### Gradient color

:::demo Gradient color
```html
<van-loading type="gradient-circle" color="black"></van-loading>
<van-loading type="gradient-circle" color="white"></van-loading>
```
:::

### API

| Attribute | Description | Type | Default | Accepted Values |
|-----------|-----------|-----------|-------------|-------------|
| color | Color | `String` | `black` | `black` `white` |
| type | Type | `String` | `gradient-circle` | `gradient-circle` `circle` |
