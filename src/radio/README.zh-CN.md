# Radio 单选框

### 引入

``` javascript
import Vue from 'vue';
import { RadioGroup, Radio } from 'vant';

Vue.use(RadioGroup);
Vue.use(Radio);
```

## 代码演示

### 基础用法

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

### 禁用状态

通过`disabled`属性禁止选项切换，在`Radio`上设置`disabled`可以禁用单个选项

```html
<van-radio-group v-model="radio" disabled>
  <van-radio name="1">单选框 1</van-radio>
  <van-radio name="2">单选框 2</van-radio>
</van-radio-group>
```

### 自定义颜色

通过`checked-color`属性设置选中状态的图标颜色

```html
<van-radio-group v-model="radio">
  <van-radio name="1" checked-color="#07c160">单选框 1</van-radio>
  <van-radio name="2" checked-color="#07c160">单选框 2</van-radio>
</van-radio-group>
```

### 自定义图标

通过`icon`插槽自定义图标，并通过`slotProps`判断是否为选中状态

```html
<van-radio-group v-model="radio">
  <van-radio name="1">
    单选框 1
    <img
      slot="icon"
      slot-scope="props"
      :src="props.checked ? activeIcon : inactiveIcon"
    >
  </van-radio>
  <van-radio name="2">
    单选框 2
    <img
      slot="icon"
      slot-scope="props"
      :src="props.checked ? activeIcon : inactiveIcon"
    >
  </van-radio>
</van-radio-group>
```

```js
export default {
  data() {
    radio: '1',
    activeIcon: 'https://img.yzcdn.cn/vant/user-active.png',
    inactiveIcon: 'https://img.yzcdn.cn/vant/user-inactive.png'
  }
}
```

### 与 Cell 组件一起使用

此时你需要再引入`Cell`和`CellGroup`组件

```html
<van-radio-group v-model="radio">
  <van-cell-group>
    <van-cell title="单选框 1" clickable @click="radio = '1'">
      <van-radio slot="right-icon" name="1" />
    </van-cell>
    <van-cell title="单选框 2" clickable @click="radio = '2'">
      <van-radio slot="right-icon" name="2" />
    </van-cell>
  </van-cell-group>
</van-radio-group>
```

## API

### Radio Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| name | 标识符 | *any* | - | - |
| shape | 形状，可选值为 `square` | *string* | `round` | - |
| disabled | 是否为禁用状态 | *boolean* | `false` | - |
| label-disabled | 是否禁用文本内容点击 | *boolean* | `false` | - |
| label-position | 文本位置，可选值为 `left` | *string* | `right` | - |
| icon-size | 图标大小，默认单位为`px` | *string \| number* | `20px` | - |
| checked-color | 选中状态颜色 | *string* | `#1989fa` | - |

### RadioGroup Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| v-model | 当前选中项的标识符 | *any* | - | - |
| disabled | 是否禁用所有单选框 | *boolean* | `false` | - |
| icon-size | 所有单选框的图标大小，默认单位为`px` | *string \| number* | `20px` | 2.2.3 |
| checked-color | 所有单选框的选中状态颜色 | *string* | `#1989fa` | 2.2.3 |

### Radio Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| click | 点击单选框时触发 | event: Event |

### RadioGroup Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| change | 当绑定值变化时触发的事件 | 当前选中项的 name |

### Radio Slots

| 名称 | 说明 | SlotProps |
|------|------|------|
| default | 自定义文本 | - |
| icon | 自定义图标 | checked: 是否为选中状态 |
