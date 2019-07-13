# Circle 环形进度条

### 引入
``` javascript
import { Circle } from 'vant';

Vue.use(Circle);
```

## 代码演示

### 基础用法

`rate`属性表示进度条的目标进度，`v-model`表示动画过程中的实时进度。当`rate`发生变化时，`v-model`会以`speed`的速度变化，直至达到`rate`设定的值。

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

### 样式定制

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

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| v-model | 当前进度 | `number` | - | - |
| rate | 目标进度 | `number` | `100` | - |
| size | 圆环直径 | `string` | `100px` | - |
| color | 进度条颜色 | `string` | `#1989fa` | - |
| layer-color | 轨道颜色 | `string` | `#fff` | - |
| fill | 填充颜色 | `string` | `none` | - |
| speed | 动画速度（单位为 rate/s）| `number` | `0` | - |
| text | 文字 | `string` | - | - |
| stroke-width | 进度条宽度 | `number` | `40` | - |
| clockwise | 是否顺时针增加 | `boolean` | `true` | - |

### Slots

| 名称 | 说明 |
|------|------|
| default | 自定义文字内容 |
