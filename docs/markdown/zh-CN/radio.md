## Radio 单选框

### 使用指南
``` javascript
import { Radio } from 'vant';

Vue.component(Radio.name, Radio);
```

### 代码演示

#### 基础用法

通过`v-model`绑定值即可。当`Radio`选中时，绑定的值即为`Radio`中`name`属性设置的值。

```html
<van-radio name="1" v-model="radio">单选框 1</van-radio>
<van-radio name="2" v-model="radio">单选框 2</van-radio>
```

```javascript
export default {
  data() {
    return {
      radio: '1'
    }
  }
};
```

#### 禁用状态

设置`disabled`属性即可，此时`Radio`不能点击。

```html
<van-radio name="1" v-model="radio" disabled>未选中禁用</van-radio>
<van-radio name="2" v-model="radio" disabled>选中且禁用</van-radio>
```


#### Radio 组

需要与`van-radio-group`一起使用，在`van-radio-group`通过`v-model`来绑定当前选中的值。例如下面的`radio3`：

```html
<van-radio-group v-model="radio">
  <van-radio name="1">单选框 1</van-radio>
  <van-radio name="2">单选框 2</van-radio>
</van-radio-group>
```

#### 与 Cell 组件一起使用

此时你需要再引入`Cell`和`CellGroup`组件。

```html
<van-radio-group v-model="radio">
  <van-cell-group>
    <van-cell><van-radio name="1">单选框 1</van-radio></van-cell>
    <van-cell><van-radio name="2">单选框 2</van-radio></van-cell>
  </van-cell-group>
</van-radio-group>
```

### Radio API

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| disabled | 是否禁用单选框 | `Boolean` | `false` | - |
| name | 根据这个来判断 radio 是否选中 | `Boolean` | `false` | - |

### RadioGroup API

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| disabled | 是否禁用单选框 | `Boolean` | `false` | - |

### RadioGroup Event

| 事件名称 | 说明 | 回调参数 |
|-----------|-----------|-----------|
| change | 当绑定值变化时触发的事件 | 当前组件的值 |
