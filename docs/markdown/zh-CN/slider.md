## Slider 滑块

### 使用指南
``` javascript
import { Slider } from 'vant';

Vue.use(Slider);
```

#### 基本用法

```html
<van-slider v-model="value1"/>
<van-row>
  <van-col span="12">
    <van-stepper v-model="value1" />
  </van-col>
</van-row>
```

```js
data() {
  return {
    value1: 50
  }
}
```

#### 最大最小值

```html
<van-slider 
  v-model="value2"
  :min="min"
  :max="max"
/>
```
```js
data() {
  return {
    value2: 50,
    min: 10,
    max: 90
  }
}
```

#### 禁用

```html
<van-slider v-model="value3" disabled />
```

#### 事件

```html
<van-slider
    v-model="value4"
    @change="handleChange"
    @after-change="handleAfterChange"
  />
```

```js
data() {
  return {
    value4: 50
  }
},
methods: {
  handleChange(value) {
    console.log('handleChange:', value)
  },
  handleAfterChange(value) {
    console.log('handleAfterChange:', value)
  }
}
```

### 自定义样式

```html
<van-slider
  v-model="value5"
  pivot-color="#333"
  loaded-bar-color="red"
  bar-color="blue"
/>
```

### API

| 参数       | 说明      | 类型       | 默认值       | 必须      |
|-----------|-----------|-----------|-------------|-------------|
| value | 当前进度百分比 | Number  | 0 |  否 |
| disabled | 滑块是否禁用 | Boolean  | false |  否 |
| bar-color | 进度条颜色 | string | `#cacaca` | 否 |
| loaded-bar-color | 已加载条颜色 | string | `#4b0` | 否 |
| pivot-color | 滑块颜色 | string  | `#4b0` |  否 |
| max | 最大值 | Number | 100 | - |
| min | 最小值 | Number | 0 | - |

### Event

| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|
| change | 拖动时触发 | value |
| after-change | 拖动停止后触发 | value |
