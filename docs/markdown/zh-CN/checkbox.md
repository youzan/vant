## Checkbox 复选框

### 使用指南
``` javascript
import { Checkbox, CheckboxGroup } from 'vant';

Vue.component(Checkbox.name, Checkbox);
Vue.component(CheckboxGroup.name, CheckboxGroup);
```

### 代码演示

#### 基础用法
通过`v-model`绑定 checkbox 的勾选状态

```html
<van-checkbox v-model="checked">复选框 1</van-checkbox>
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

#### 禁用状态

```html
<van-checkbox v-model="checked" disabled>复选框 2</van-checkbox>
```

#### Checkbox 组

需要与`van-checkbox-group`一起使用，选中值是一个数组，通过`v-model`绑定在`van-checkbox-group`上，数组中的项即为选中的`Checkbox`的`name`属性设置的值

```html
<van-checkbox-group v-model="result">
  <van-checkbox
    v-for="(item, index) in list"
    :key="index"
    :name="item"
  >
    复选框 {{ item }}
  </van-checkbox>
</van-checkbox-group>
```

```javascript
export default {
  data() {
    return {
      list: ['a', 'b', 'c'],
      result: ['a', 'b']
    };
  }
};
```

#### 与 Cell 组件一起使用

此时你需要再引入`Cell`和`CellGroup`组件

```html
<van-checkbox-group v-model="result">
  <van-cell-group>
    <van-cell v-for="(item, index) in list" :key="index">
      <van-checkbox :name="item">复选框 {{ item }}</van-checkbox>
    </van-cell>
  </van-cell-group>
</van-checkbox-group>
```

### Checkbox API

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| name | 标识 Checkbox 名称 | `Boolean` | `false` | - |
| disabled | 是否禁用单选框 | `Boolean` | `false` | - |
| shape | 形状 | `String` | `round` | `square` |

### CheckboxGroup API

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| disabled | 是否禁用所有单选框 | `Boolean` | `false` | - |

### Checkbox Event

| 事件名称 | 说明 | 回调参数 |
|-----------|-----------|-----------|
| change | 当绑定值变化时触发的事件 | 当前组件的值 |

### CheckboxGroup Event

| 事件名称 | 说明 | 回调参数 |
|-----------|-----------|-----------|
| change | 当绑定值变化时触发的事件 | 当前组件的值 |
