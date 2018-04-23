## Slider 滑块

### 使用指南
``` javascript
import { Slider } from 'vant';

Vue.use(Slider);
```

#### 基本用法

```html
<van-slider v-model="value" @change="onChange" />
```

```js
export default {
  data() {
    return {
      value: 50
    };
  },

  methods: {
    onChange(value) {
      this.$toast('当前值：' + value);
    }
  }
};
```

#### 指定选择范围

```html
<van-slider 
  v-model="value"
  :min="10"
  :max="90"
/>
```

```js
export default {
  data() {
    return {
      value: 50
    };
  }
};
```

#### 禁用

```html
<van-slider v-model="value" bar-height="4px" disabled />
```

### API

| 参数       | 说明      | 类型       | 默认值       |
|-----------|-----------|-----------|-------------|
| value | 当前进度百分比 | `Number` | `0` |
| disabled | 是否禁用滑块 | `Boolean` | `false` |
| max | 最大值 | `Number` | `100` |
| min | 最小值 | `Number` | `0` |
| bar-height | 进度条高度 | `String` | `2px` |

### Event

| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|
| change | 进度值改变后触发 | value: 当前进度 |
