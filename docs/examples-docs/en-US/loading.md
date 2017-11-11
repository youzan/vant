## Loading

### Install
``` javascript
import { Loading } from 'vant';

Vue.component(Loading.name, Loading);
```

### Usage

#### Solid Circle

:::demo Solid Circle
```html
<van-loading type="circle" color="black"></van-loading>
<van-loading type="circle" color="white"></van-loading>
```
:::

#### Gradient Circle

:::demo Gradient Circle
```html
<van-loading type="gradient-circle" color="black"></van-loading>
<van-loading type="gradient-circle" color="white"></van-loading>
```
:::

#### Spinner

:::demo Spinner
```html
<van-loading type="spinner" color="black"></van-loading>
<van-loading type="spinner" color="white"></van-loading>
```
:::

### API

| Attribute | Description | Type | Default | Accepted Values |
|-----------|-----------|-----------|-------------|-------------|
| color | Color | `String` | `black` | `black` `white` |
| type | Type | `String` | `gradient-circle` | `spinner` `circle` |
