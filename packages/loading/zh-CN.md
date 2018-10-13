## Loading 加载

### 使用指南
``` javascript
import { Loading } from 'vant';

Vue.use(Loading);
```

### 代码演示

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

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| color | 颜色 | `String` | `#c9c9c9` |
| type | 类型，可选值为 `spinner` | `String` | `circular` |
| size | 大小 | `String` | `30px` |

### 更新日志

| 版本 | 类型 | 内容 |
|-----------|-----------|-----------|
| 1.3.0 | feature | 支持配置为任意颜色 |
