## Slider 滑块

### 使用指南
``` javascript
import { Slider } from 'vant';

Vue.use(Slider);
```
### 代码演示

#### 基础使用

```html
<van-slider :value="50" @change="handleChange"
  @afterChange="handleAfterChange"></van-slider>
```

```js
methods: {
  handleChange(value) {
    console.log('handleChange:', value)
  },
  handleAfterChange(value) {
    console.log('handleAfterChange:', value)
  }
}
```

#### 禁用

```html
<van-slider :value="50" disabled></van-slider>
```
### 自定义样式

```html
<van-slider :value="50" 
  pivotColor="#333"
  loadedBarColor="red"
  barColor="blue"></van-slider>
```

### API

| 参数       | 说明      | 类型       | 默认值       | 必须      |
|-----------|-----------|-----------|-------------|-------------|
| value | 当前进度百分比 | Number  | 0 |  否 |
| disabled | 滑块是否禁用 | Boolean  | false |  否 |
| barColor | 进度条颜色 | string | `#cacaca` | 否 |
| loadedBarColor | 已加载条颜色 | string | `#4b0` | 否 |
| pivotColor | 滑块颜色 | string  | `#4b0` |  否 |

### Event

| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|
| change | 滑动时触发 | value |
| afterChange | 拖动停止后触发 | value |
