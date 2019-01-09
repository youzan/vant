## Circle 环形进度条

### 使用指南
``` javascript
import { Circle } from 'vant';

Vue.use(Circle);
```

### 代码演示

#### 基础用法
通过 `rate` 指定目标进度，`v-model` 代表当前进度，`speed` 控制动画速度

```html
<van-circle
  v-model="currentRate"
  :rate="30"
  :speed="100"
  :text="text"
/>
```

``` javascript
export default {
  data() {
    return {
      currentRate: 0
    };
  },
  computed: {
    text() {
      return this.currentRate.toFixed(0) + '%'
    }
  }
};
```

#### 样式定制

```html
<van-circle
  v-model="currentRate"
  color="#07c160"
  fill="#fff"
  size="120px"
  layer-color="#ebedf0"
  :text="text"
  :rate="rate"
  :speed="100"
  :clockwise="false"
  :stroke-width="60"
/>
```


### API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| v-model | 当前进度 | `Number` | - | - |
| rate | 目标进度 | `Number` | `100` | - |
| size | 圆环直径 | `String` | `100px` | - |
| color | 进度条颜色 | `String` | `#1989fa` | - |
| layer-color | 轨道颜色 | `String` | `#fff` | - |
| fill | 填充颜色 | `String` | `none` | - |
| speed | 动画速度（单位为 rate/s）| `Number` | - | - |
| text | 文字 | `String` | - | - |
| stroke-width | 进度条宽度 | `Number` | `40` | - |
| clockwise | 是否顺时针增加 | `Boolean` | `true` | - |

### Circle Slot

| 名称 | 说明 |
|------|------|
| - | 自定义文字内容 |
