# Checkbox 复选框

### 引入

``` javascript
import Vue from 'vue';
import { Checkbox, CheckboxGroup } from 'vant';

Vue.use(Checkbox).use(CheckboxGroup);
```

## 代码演示

### 基础用法

通过`v-model`绑定复选框的勾选状态

```html
<van-checkbox v-model="checked">复选框</van-checkbox>
```

```javascript
export default {
  data() {
    return {
      checked: true
    };
  }
};
```

### 禁用状态

通过设置`disabled`属性可以禁用复选框

```html
<van-checkbox v-model="checked" disabled>复选框</van-checkbox>
```

### 自定义形状

将`shape`属性设置为`square`，复选框的形状会变成方形

```html
<van-checkbox v-model="checked" shape="square">复选框</van-checkbox>
```

### 自定义颜色

通过`checked-color`属性可以自定义选中状态下的图标颜色

```html
<van-checkbox v-model="checked" checked-color="#07c160">复选框</van-checkbox>
```

### 自定义图标

通过 icon 插槽自定义图标，可以通过`slotProps`判断是否为选中状态

```html
<van-checkbox v-model="checked">
  自定义图标
  <img
    slot="icon"
    slot-scope="props"
    :src="props.checked ? activeIcon : inactiveIcon"
  >
</van-checkbox>
```

```js
export default {
  data() {
    checked: true,
    activeIcon: 'https://img.yzcdn.cn/vant/user-active.png',
    inactiveIcon: 'https://img.yzcdn.cn/vant/user-inactive.png'
  }
}
```

### 复选框组

复选框可以与复选框组一起使用，选中值是一个数组，通过`v-model`绑定在`CheckboxGroup`上，数组中的值为选中的复选框的`name`

```html
<van-checkbox-group v-model="result">
  <van-checkbox name="a">复选框 a</van-checkbox>
  <van-checkbox name="b">复选框 b</van-checkbox>
  <van-checkbox name="c">复选框 c</van-checkbox>
</van-checkbox-group>
```

```javascript
export default {
  data() {
    return {
      result: ['a', 'b']
    };
  }
};
```

### 设置最大可选数

通过`max`属性可以限制最大可选数

```html
<van-checkbox-group v-model="result" :max="2">
  <van-checkbox name="a">复选框 a</van-checkbox>
  <van-checkbox name="b">复选框 b</van-checkbox>
  <van-checkbox name="c">复选框 c</van-checkbox>
</van-checkbox-group>
```

### 全选与反选

通过`CheckboxGroup`实例上的`toggleAll`方法可以实现全选与反选

```html
<van-checkbox-group v-model="result" ref="checkboxGroup">
  <van-checkbox name="a">复选框 a</van-checkbox>
  <van-checkbox name="b">复选框 b</van-checkbox>
  <van-checkbox name="c">复选框 c</van-checkbox>
</van-checkbox-group>

<van-button type="primary" @click="checkAll">全选</van-button>
<van-button type="info" @click="toggleAll">反选</van-button>
```

```js
export default {
  data() {
    return {
      result: []
    }
  },

  methods: {
    checkAll() {
      this.$refs.checkboxGroup.toggleAll(true);
    },
    toggleAll() {
      this.$refs.checkboxGroup.toggleAll();
    }
  }
}
```

### 搭配单元格组件使用

此时你需要再引入`Cell`和`CellGroup`组件，并通过`Checkbox`实例上的 toggle 方法触发切换

```html
<van-checkbox-group v-model="result">
  <van-cell-group>
    <van-cell
      v-for="(item, index) in list"
      clickable
      :key="item"
      :title="`复选框 ${item}`"
      @click="toggle(index)"
    >
      <van-checkbox
        :name="item"
        ref="checkboxes"
        slot="right-icon"
      />
    </van-cell>
  </van-cell-group>
</van-checkbox-group>
```

```js
export default {
  methods: {
    toggle(index) {
      this.$refs.checkboxes[index].toggle();
    }
  }
}
```

## API

### Checkbox Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| name | 标识符 | *any* | - | - |
| shape | 形状，可选值为 `square` | *string* | `round` | - |
| v-model | 是否为选中状态 | *boolean* | `false` | - |
| disabled | 是否禁用复选框 | *boolean* | `false` | - |
| label-disabled | 是否禁用复选框文本点击 | *boolean* | `false` | - |
| label-position | 文本位置，可选值为 `left` | *string* | `right` | - |
| icon-size | 图标大小，默认单位为`px` | *string \| number* | `20px` | - |
| checked-color | 选中状态颜色 | *string* | `#1989fa` | - |
| bind-group | 是否与复选框组绑定 | *boolean* | `true` | 2.2.4 |

### CheckboxGroup Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| v-model | 所有选中项的标识符 | *any[]* | - | - |
| disabled | 是否禁用所有复选框 | *boolean* | `false` | - |
| max | 最大可选数，0 为无限制 | *number* | `0` | - |
| icon-size | 所有复选框的图标大小，默认单位为`px` | *string \| number* | `20px` | 2.2.3 |
| checked-color | 所有复选框的选中状态颜色 | *string* | `#1989fa` | 2.2.3 |

### Checkbox Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| change | 当绑定值变化时触发的事件 | 当前组件的值 |
| click | 点击复选框时触发 | event: Event |

### CheckboxGroup Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| change | 当绑定值变化时触发的事件 | 当前组件的值 |

### Checkbox Slots

| 名称 | 说明 | SlotProps |
|------|------|------|
| default | 自定义文本 | - |
| icon | 自定义图标 | checked: 是否为选中状态 |

### CheckboxGroup 方法

通过 ref 可以获取到 CheckboxGroup 实例并调用实例方法

| 方法名 | 说明 | 参数 | 返回值 |
|------|------|------|------|
| toggleAll | 切换所有复选框的选中状态 | checked?: boolean | - |

### Checkbox 方法

通过 ref 可以获取到 Checkbox 实例并调用实例方法

| 方法名 | 说明 | 参数 | 返回值 |
|------|------|------|------|
| toggle | 切换选中状态 | checked?: boolean | - |
