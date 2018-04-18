## Slider 滑块

### 使用指南
``` javascript
import { Slider } from 'vant';

Vue.use(Slider);
```
### 代码演示

#### 事件

```html
<van-slider :value="50" @change="handleChange"
  @after-change="handleAfterChange"></van-slider>
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
  pivot-color="#333"
  loaded-bar-color="red"
  bar-color="blue"></van-slider>
```

### API

| 参数       | 说明      | 类型       | 默认值       | 必须      |
|-----------|-----------|-----------|-------------|-------------|
| value | 当前进度百分比 | Number  | 0 |  否 |
| disabled | 滑块是否禁用 | Boolean  | false |  否 |
| bar-color | 进度条颜色 | string | `#cacaca` | 否 |
| loaded-bar-color | 已加载条颜色 | string | `#4b0` | 否 |
| pivot-color | 滑块颜色 | string  | `#4b0` |  否 |

### Event

| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|
| change | 拖动时触发 | value |
| after-change | 拖动停止后触发 | value |
