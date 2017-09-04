<style>
.demo-quantity {
  .van-quantity {
    margin-left: 15px;
  }

  .curr-quantity {
    margin: 15px;
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
``` javascript
import { Quantity } from 'vant';

Vue.component(Quantity.name, Quantity);
```

### 代码演示

#### 基础用法

:::demo 基础用法
```html
<van-quantity v-model="quantity1"></van-quantity>
<p class="curr-quantity">当前值：{{ quantity1 }}</p>
```
:::

#### 禁用Quantity

设置`disabled`属性，此时`quantity`不可改变。

:::demo 禁用Quantity
```html
<van-quantity v-model="quantity1" disabled></van-quantity>
```
:::

#### 高级用法

默认是每次加减为1，可以对组件设置`step`、`min`、`max`、`defaultValue`属性。

:::demo 高级用法
```html
<van-quantity v-model="quantity2" min="5" max="40" step="2" default-value="9"></van-quantity>
<p class="curr-quantity">当前值：{{ quantity2 || 9 }}</p>
```
:::

### API

| 参数       | 说明      | 类型       | 默认值       | 可选值       |
|-----------|-----------|-----------|-------------|-------------|
| min | 最小值 | `String | Number` | `1` | - |
| max | 最大值 | `String | Number` | - | - |
| defaultValue | 默认值 | `String | Number` | `1` | - |
| step | 步数 | `String | Number` | `1` | - |
| disabled | 是否禁用 | `Boolean` | `false` | - |

### Event

| 事件名称       | 说明      | 回调参数 |
|-----------|-----------|-----------|
| change | 当绑定值变化时触发的事件 | 当前组件的值 |
| overlimit | 点击不可用的按钮时触发 | - |
