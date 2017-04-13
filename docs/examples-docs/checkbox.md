<style>
@component-namespace demo {
  @b checkbox {
    .zan-checkbox-wrapper {
      padding: 0 20px;

      .zan-checkbox {
        margin: 10px 0;
      }
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

如果你已经按照[快速上手](/vue/component/quickstart)中引入了整个`ZanUI`，以下**组件注册**就可以忽略了，因为你已经全局注册了`ZanUI`中的全部组件。

#### 全局注册

你可以在全局注册`Checkbox`组件，比如页面的主文件（`index.js`，`main.js`），这样页面任何地方都可以直接使用`Checkbox`组件了：

```js
import Vue from 'vue';
import { Checkbox, CheckboxGroup } from '@youzan/zanui-vue';
import '@youzan/zanui-vue/lib/zanui-css/checkbox.css';

Vue.component(Checkbox.name, Checkbox);
Vue.component(CheckboxGroup.name, CheckboxGroup);
```

#### 局部注册

如果你只是想在某个组件中使用，你可以在对应组件中注册`Checkbox`组件，这样只能在你注册的组件中使用`Checkbox`：

```js
import { Checkbox, CheckboxGroup } from '@youzan/zanui-vue';

export default {
  components: {
    'zan-checkbox': Checkbox,
    'zan-checkbox-group': CheckboxGroup
  }
};
```

### 基础用法

通过`v-model`绑定值即可。当`Checkbox`选中时，绑定的值即为`true`，否则为`false`。当单个`Checkbox`使用时，更建议使用`Switch`组件。

:::demo 基础用法
```html
<div class="zan-checkbox-wrapper">
  <zan-checkbox v-model="checkbox1">复选框1</zan-checkbox>
</div>

<script>
export default {
  data() {
    return {
      checkbox1: true
    };
  }
}; 
</script>
```
:::

### 禁用状态

设置`disabled`属性即可，此时`Checkbox`不能点击。

:::demo 禁用状态
```html
<div class="zan-checkbox-wrapper">
  <zan-checkbox v-model="checkbox2">复选框2</zan-checkbox>
</div>

<script>
export default {
  data() {
    return {
      checkbox2: true
    };
  }
}; 
</script>
```
:::

### Checkbox组

需要与`zan-checkbox-group`一起使用，值通过`v-model`绑定在`zan-checkbox-group`上，例如下面的`result`，此时`result`的值是一个数组。数组中的项即为选中的`Checkbox`的`name`属性设置的值。

:::demo Checkbox组
```html
<div class="zan-checkbox-wrapper">
  <zan-checkbox-group v-model="result">
    <zan-checkbox v-for="item in list" :name="item">复选框{{item}}</zan-checkbox>
  </zan-checkbox-group>
</div>

<script>
export default {
  data() {
    return {
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
```
:::

### 禁用Checkbox组

禁用`zan-checkbox-group`，此时整个组都不可点击。

:::demo 禁用Checkbox组
```html
<div class="zan-checkbox-wrapper">
  <zan-checkbox-group v-model="result" disabled>
    <zan-checkbox v-for="item in list" :name="item">复选框{{item}}</zan-checkbox>
  </zan-checkbox-group>
</div>

<script>
export default {
  data() {
    return {
      list: [
        'a',
        'b',
        'c'
      ],
      result: ['a', 'b']
    };
  }
};
</script>
```
:::

### 与Cell组件一起使用

此时你需要再引入`Cell`和`CellGroup`组件。

:::demo 与Cell组件一起使用
```html
<zan-checkbox-group v-model="result">
  <zan-cell-group>
    <zan-cell v-for="item in list">
      <zan-checkbox :name="item">复选框{{item}}</zan-checkbox>
    </zan-cell>
  </zan-cell-group>
</zan-checkbox-group>

<script>
export default {
  data() {
    return {
      list: [
        'a',
        'b',
        'c'
      ],
      result: ['a', 'b']
    };
  }
};
</script>
```
:::

### Checkbox API

| 参数       | 说明      | 类型       | 默认值       | 可选值       |
|-----------|-----------|-----------|-------------|-------------|
| disabled | 是否禁用单选框 | `boolean`  | `false` |   |
| name | 根据这个来判断radio是否选中 | `boolean`  | `false` |   |

### CheckboxGroup API

| 参数       | 说明      | 类型       | 默认值       | 可选值       |
|-----------|-----------|-----------|-------------|-------------|
| disabled | 是否禁用单选框 | `boolean`  | `false` |   |

### CheckboxGroup Event

| 事件名称       | 说明      | 回调参数 |
|-----------|-----------|-----------|
| change | 当绑定值变化时触发的事件 | 当前组件的值 |
