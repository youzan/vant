## Progress 进度条

### 使用指南
``` javascript
import { Progress } from 'vant';

Vue.use(Progress);
```

### 代码演示

#### 基础用法

进度条默认为蓝色，使用`percentage`属性来设置当前进度

```html
<van-progress :percentage="0" />
<van-progress :percentage="46" />
<van-progress :percentage="100" />
```


#### 进度条置灰

```html
<van-progress inactive :percentage="0" />
<van-progress inactive :percentage="46" />
<van-progress inactive :percentage="100" />
```


#### 样式定制

可以使用`pivotText`属性自定义文字，`color`属性自定义进度条颜色

```html
<van-progress pivotText="红色" color="#ed5050" :percentage="26" />
<van-progress pivotText="橙色" color="#f60" :percentage="46" />
<van-progress pivotText="黄色" color="#f09000" :percentage="66" />
```

### API

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| inactive | 是否置灰 | `Boolean` | `false` | - |
| percentage | 进度百分比 | `Number` | `false` | `0-100` |
| showPivot | 是否显示进度文字 | `Boolean` | `true` | - |
| pivotText | 文字显示 | `String` | 百分比文字 | - |
| color | 进度条颜色 | `String` | `#38f` | hexvalue |
| textColor | 进度条文字颜色 | `String` | `#fff` | hexvalue |
