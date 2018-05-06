## Rate 评分

### 使用指南
``` javascript
import { Rate } from 'vant';

Vue.use(Rate);
```

### 代码演示

#### 基础用法

```html
<van-rate v-model="value" />
```

```javascript
export default {
  data() {
    return {
      value: 3
    };
  }
}
```

#### 自定义颜色

```html
<van-rate
  v-model="value"
  :size="25"
  :todal="6"
  :color="color",
  :defaultColor="defaultColor"
/>
```

#### 禁用状态

```html
 <van-rate v-model="value" disabled />
```

### Rate API

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| v-model | 当前分数 | `Number` | - |
| size | 星标大小，单位为`px` | `Number` | `20` |
| total | 总分 | `Number` | `5` |
| color | 选中时的星标颜色 | `String` | `#ffd21e`  |
| default-color | 未选中时的星标颜色 | `String` | `#c7c7c7` |
| disabled-color | 不可选时的星标颜色 | `String` | `#bdbdbd` | 
| disabled | 是否禁用评分 | `Boolean` | `false` |
