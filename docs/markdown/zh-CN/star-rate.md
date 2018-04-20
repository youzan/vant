## StarRate 评分

### 使用指南
``` javascript
import { StarRate } from 'vant';

Vue.use(StarRate);
```

### 代码演示

#### 基础用法

```html
<van-star-rate
  :total="total"
  v-model="value"
  :size="30"
/>
```

```javascript
export default {
  data() {
    return {
      size: 30,
      value: 3,
      total: 6
    };
  }
}
```

#### 自定义颜色

```html
<van-star-rate
  :total="total"
  v-model="value"
  :size="size",
  :color="color",
  :defaultColor="defaultColor"
/>
```

```javascript
export default {
  data() {
    return {
      size: 24,
      value: 5,
      total: 7,
      color: '#2ba',
      defaultColor: '#ceefe8'
    };
  }
}
```


#### 竖向步骤条
```html
 <van-star-rate
  disabled
  :total="total"
  v-model="value"
/>
```

```javascript
export default {
  data() {
    return {
      value: 2,
      total: 6
    };
  }
}
```

### StarRate API

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| size | 星标大小，单位为`px` | `Number` | 20 | - |
| total | 总分，默认为5 | `Number` | 5 | - |
| value | 分数 | `Number` | 0 | - |
| color | 选中时的星标颜色 | `String` | `#ffd21e`  | - |
| default-color | 未选中时的星标颜色 | `String` | `#c7c7c7` | - |
| disabled-color | 不可选时的星标颜色 | `String` | `bdbdbd` | - |
| disabled | 是否可修改 | `Boolean` | false | - |

