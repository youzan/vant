<style>
@component-namespace demo {
  @b quantity {
    .zan-quantity {
      margin: 15px;
    }

    .curr-quantity {
      margin: 15px;
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      quantity1: 1,
      quantity2: null,
    };
  }
};
</script>

## Quantity 数量选择

### 使用指南

如果你已经按照[快速上手](/vue/component/quickstart)中引入了整个`ZanUI`，以下**组件注册**就可以忽略了，因为你已经全局注册了`ZanUI`中的全部组件。

#### 全局注册

你可以在全局注册`Quantity`组件，比如页面的主文件（`index.js`，`main.js`），这样页面任何地方都可以直接使用`Quantity`组件了：

```js
import Vue from 'vue';
import { Quantity } from '@youzan/zanui-vue';
import '@youzan/zanui-vue/lib/zanui-css/quantity.css';

Vue.component(Quantity.name, Quantity);
```

#### 局部注册

如果你只是想在某个组件中使用，你可以在对应组件中注册`Quantity`组件，这样只能在你注册的组件中使用`Quantity`：

```js
import { Quantity } from '@youzan/zanui-vue';

export default {
  components: {
    'zan-quantity': Quantity
  }
};
```

### 代码演示

#### 基础用法

:::demo 基础用法
```html
<zan-quantity v-model="quantity1"></zan-quantity>
<p class="curr-quantity">当前值：{{ quantity1 }}</p>
```
:::

#### 禁用Quantity

设置`disabled`属性，此时`quantity`不可改变。

:::demo 禁用Quantity
```html
<zan-quantity v-model="quantity1" disabled></zan-quantity>
```
:::

#### 高级用法

默认是每次加减为1，可以对组件设置`step`、`min`、`max`、`defaultValue`属性。

:::demo 高级用法
```html
<zan-quantity v-model="quantity2" min="5" max="40" step="2" default-value="9"></zan-quantity>
<p class="curr-quantity">当前值：{{ quantity2 }}</p>
```
:::

### API

| 参数       | 说明      | 类型       | 默认值       | 可选值       |
|-----------|-----------|-----------|-------------|-------------|
| min | 最小值 | `string`, `number` | `1`         |           |
| max | 最大值 | `string`, `number`  |           |           |
| step | 步数 | `string`, `number`  | `1`         |           |
| disabled | 是否被禁用了 | `boolean`  | `false`      |           |
| defaultValue | 默认值 | `string`, `number`  | `1`      |           |

