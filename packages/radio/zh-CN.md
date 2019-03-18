## Radio 单选框

### 使用指南
``` javascript
import { RadioGroup, Radio } from 'vant';

Vue.use(RadioGroup);
Vue.use(Radio);
```

### 代码演示

#### 基础用法

通过`v-model`绑定值当前选中项的 name

```html
<van-radio-group v-model="radio">
  <van-radio name="1">单选框 1</van-radio>
  <van-radio name="2">单选框 2</van-radio>
</van-radio-group>
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

通过`disabled`属性禁止选项切换，在`van-radio`上设置`disabled`可以禁用单个选项

```html
<van-radio-group v-model="radio" disabled>
  <van-radio name="1">单选框 1</van-radio>
  <van-radio name="2">单选框 2</van-radio>
</van-radio-group>
```

#### 自定义颜色

```html
<van-radio checked-color="#07c160">复选框</van-radio>
```

#### 自定义图标

通过 icon 插槽自定义图标，可以通过 `slot-scope` 判断是否为选中状态

```html
<van-radio v-model="checked">
  自定义图标
  <img
    slot="icon"
    slot-scope="props"
    :src="props.checked ? icon.active : icon.normal"
  >
</van-radio>
```

```js
export default {
  data() {
    checked: true,
    icon: {
      normal: '//img.yzcdn.cn/icon-normal.png',
      active: '//img.yzcdn.cn/icon-active.png'
    }
  }
}
```

#### 与 Cell 组件一起使用

此时你需要再引入`Cell`和`CellGroup`组件。

```html
<van-radio-group v-model="radio">
  <van-cell-group>
    <van-cell title="单选框 1" clickable @click="radio = '1'">
      <van-radio name="1" />
    </van-cell>
    <van-cell title="单选框 2" clickable @click="radio = '2'">
      <van-radio name="2" />
    </van-cell>
  </van-cell-group>
</van-radio-group>
```

### Radio API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| name | 标识符 | 任意类型 | - | - |
| shape | 形状，可选值为 `square` | `String` | `round` | 1.6.0 |
| disabled | 是否为禁用状态 | `Boolean` | `false` | - |
| label-disabled | 是否禁用文本内容点击 | `Boolean` | `false` | 1.1.13 |
| label-position | 文本位置，可选值为 `left` | `String` | `right` | 1.1.13 |
| checked-color | 选中状态颜色 | `String` | `#1989fa` | 1.4.5 |

### RadioGroup API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| v-model | 当前选中项的标识符 | 任意类型 | - | - |
| disabled | 是否禁用所有单选框 | `Boolean` | `false` | - |

### Radio Event

| 事件名称 | 说明 | 回调参数 |
|------|------|------|
| click | 点击单选框时触发 | event: Event |

### RadioGroup Event

| 事件名称 | 说明 | 回调参数 |
|------|------|------|
| change | 当绑定值变化时触发的事件 | 当前选中项的 name |

### Radio 插槽

| 名称 | 说明 | slot-scope |
|------|------|------|
| - | 自定义文本 | - |
| icon | 自定义图标 | checked: 是否为选中状态 |
