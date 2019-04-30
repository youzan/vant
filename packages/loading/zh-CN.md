## Loading 加载

### 使用指南
``` javascript
import { Loading } from 'vant';

Vue.use(Loading);
```

### 代码演示

#### 加载类型

```html
<van-loading />
<van-loading type="spinner" />
```

#### 自定义颜色

```html
<van-loading color="#1989fa" />
<van-loading type="spinner" color="#1989fa" />
```

#### 加载文案

```html
<van-loading size="24px">加载中...</van-loading>
```

### API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| color | 颜色 | `String` | `#c9c9c9` | - |
| type | 类型，可选值为 `spinner` | `String` | `circular` | - |
| size | 加载图标大小 | `String | Number` | `30px` | - |
| text-size | 文字大小 | `String | Number` | `14px` | 2.0.0 |

### Slot

| 名称 | 说明 |
|------|------|
| default | 加载文案 |
