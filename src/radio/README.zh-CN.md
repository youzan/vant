# Radio 单选框

### 引入

```js
import Vue from 'vue';
import { RadioGroup, Radio } from 'vant';

Vue.use(Radio);
Vue.use(RadioGroup);
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

```js
export default {
  data() {
    return {
      radio: '1'
    }
  }
};
```

### 水平排列

将`direction`属性设置为`horizontal`后，单选框组会变成水平排列

```html
<van-radio-group v-model="radio" direction="horizontal">
  <van-radio name="1">单选框 1</van-radio>
  <van-radio name="2">单选框 2</van-radio>
</van-radio-group>
```

### 禁用状态

通过`disabled`属性禁止选项切换，在`Radio`上设置`disabled`可以禁用单个选项

```html
<van-radio-group v-model="radio" disabled>
  <van-radio name="1">单选框 1</van-radio>
  <van-radio name="2">单选框 2</van-radio>
</van-radio-group>
```

### 自定义形状

将`shape`属性设置为`square`，单选框的形状会变成方形

```html
<van-radio-group v-model="radio">
  <van-radio name="1" shape="square">单选框 1</van-radio>
  <van-radio name="2" shape="square">单选框 2</van-radio>
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

### 自定义大小

通过`icon-size`属性可以自定义图标的大小

```html
<van-radio-group v-model="radio">
  <van-radio name="1" icon-size="24px">单选框 1</van-radio>
  <van-radio name="2" icon-size="24px">单选框 2</van-radio>
</van-radio-group>
```

### 自定义图标

通过`icon`插槽自定义图标，并通过`slotProps`判断是否为选中状态

```html
<van-radio-group v-model="radio">
  <van-radio name="1">
    单选框 1
    <template #icon="props">
      <img
        class="img-icon"
        :src="props.checked ? activeIcon : inactiveIcon"
      >
    </template>
  </van-radio>
  <van-radio name="2">
    单选框 2
    <template #icon="props">
      <img
        class="img-icon"
        :src="props.checked ? activeIcon : inactiveIcon"
      />
    </template>
  </van-radio>
</van-radio-group>

<style>
  .img-icon {
    height: 20px;  
}
</style>
```

```js
export default {
  data() {
    return {
     radio: '1',
     activeIcon: 'https://img.yzcdn.cn/vant/user-active.png',
     inactiveIcon: 'https://img.yzcdn.cn/vant/user-inactive.png'
    }
  }
}
```

### 禁用文本点击

设置`label-disabled`属性后，点击图标以外的内容不会触发单选框切换

```html
<van-radio-group v-model="radio">
  <van-radio name="1" label-disabled>单选框 1</van-radio>
  <van-radio name="2" label-disabled>单选框 2</van-radio>
</van-radio-group>
```

### 与 Cell 组件一起使用

此时你需要再引入`Cell`和`CellGroup`组件

```html
<van-radio-group v-model="radio">
  <van-cell-group>
    <van-cell title="单选框 1" clickable @click="radio = '1'">
      <template #right-icon>      
        <van-radio name="1" />
      </template>
    </van-cell>
    <van-cell title="单选框 2" clickable @click="radio = '2'">
      <template #right-icon>
        <van-radio name="2" />
      </template>
    </van-cell>
  </van-cell-group>
</van-radio-group>
```

## API

### Radio Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| name | 标识符 | *any* | - |
| shape | 形状，可选值为 `square` | *string* | `round` |
| disabled | 是否为禁用状态 | *boolean* | `false` |
| label-disabled | 是否禁用文本内容点击 | *boolean* | `false` |
| label-position | 文本位置，可选值为 `left` | *string* | `right` |
| icon-size | 图标大小，默认单位为`px` | *number \| string* | `20px` |
| checked-color | 选中状态颜色 | *string* | `#1989fa` |

### RadioGroup Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| v-model (value) | 当前选中项的标识符 | *any* | - |
| disabled | 是否禁用所有单选框 | *boolean* | `false` |
| direction `v2.5.0` | 排列方向，可选值为`horizontal` | *string* | `vertical` |
| icon-size `v2.2.3` | 所有单选框的图标大小，默认单位为`px` | *number \| string* | `20px` |
| checked-color `v2.2.3` | 所有单选框的选中状态颜色 | *string* | `#1989fa` |

### Radio Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| click | 点击单选框时触发 | *event: Event* |

### RadioGroup Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| change | 当绑定值变化时触发的事件 | *name: string* |

### Radio Slots

| 名称 | 说明 | SlotProps |
|------|------|------|
| default | 自定义文本 | - |
| icon | 自定义图标 | *checked: boolean* |
