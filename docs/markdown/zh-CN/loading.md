## Loading 加载

### 使用指南
``` javascript
import { Loading } from 'vant';

Vue.use(Loading);
```

### 代码演示

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

### API

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| color | 颜色 | `String` | `black` | `black` `white` |
| type | 类型 | `String` | `circular` | `spinner` `circle` |
| size | 大小 | `String` | `30px` | - |
