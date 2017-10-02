<style>
.demo-checkbox {
  .van-checkbox {
    margin: 10px 0 0 20px;
  }
  .van-cell {
    .van-checkbox {
      margin: 0;
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      checkbox1: true,
      checkbox2: true,
      list: [
        'a',
        'b',
        'c'
      ],
      result: ['a', 'b']
    };
  },

  watch: {
    result(val) {
      console.log(val);
    }
  }
};
</script>

## Checkbox 复选框

### 使用指南
``` javascript
import { Checkbox } from 'vant';

Vue.component(Checkbox.name, Checkbox);
```

### 代码演示

#### 基础用法
通过`v-model`绑定 checkbox 的勾选状态

:::demo 基础用法
```html
<van-checkbox v-model="checkbox1">复选框1</van-checkbox>
```

```javascript
export default {
  data() {
    return {
      checkbox1: true
    };
  }
};
```
:::

#### 禁用状态

设置`disabled`属性即可，此时`Checkbox`不能点击。

:::demo 禁用状态
```html
<van-checkbox v-model="checkbox2" disabled>复选框2</van-checkbox>
```

```javascript
export default {
  data() {
    return {
      checkbox2: true
    };
  }
};
```
:::

#### Checkbox组

需要与`van-checkbox-group`一起使用，值通过`v-model`绑定在`van-checkbox-group`上，例如下面的`result`，此时`result`的值是一个数组。数组中的项即为选中的`Checkbox`的`name`属性设置的值。

:::demo Checkbox组
```html
<van-checkbox-group v-model="result">
  <van-checkbox
    v-for="(item, index) in list"
    :key="index"
    :name="item"
  >
    复选框{{ item }}
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
  },

  watch: {
    result(val) {
      console.log(val);
    }
  }
};
```
:::

#### 与Cell组件一起使用

此时你需要再引入`Cell`和`CellGroup`组件。

:::demo 与Cell组件一起使用
```html
<van-checkbox-group v-model="result">
  <van-cell-group>
    <van-cell v-for="(item, index) in list" :key="index">
      <van-checkbox :name="item">复选框{{ item }}</van-checkbox>
    </van-cell>
  </van-cell-group>
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
:::

### Checkbox API

| 参数       | 说明      | 类型       | 默认值       | 可选值       |
|-----------|-----------|-----------|-------------|-------------|
| name | 标识 Checkbox 名称 | `Boolean`  | `false` | - |
| disabled | 是否禁用单选框 | `Boolean`  | `false` | - |
| shape | 形状 | `String`  | `round` | `square` |

### CheckboxGroup API

| 参数       | 说明      | 类型       | 默认值       | 可选值       |
|-----------|-----------|-----------|-------------|-------------|
| disabled | 是否禁用所有单选框 | `Boolean` | `false` | - |

### Checkbox Event

| 事件名称       | 说明      | 回调参数 |
|-----------|-----------|-----------|
| change | 当绑定值变化时触发的事件 | 当前组件的值 |

### CheckboxGroup Event

| 事件名称       | 说明      | 回调参数 |
|-----------|-----------|-----------|
| change | 当绑定值变化时触发的事件 | 当前组件的值 |
