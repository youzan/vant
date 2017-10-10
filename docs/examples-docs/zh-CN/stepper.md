<style>
.demo-stepper {
  .van-stepper {
    margin-left: 15px;
  }

  .curr-stepper {
    margin: 15px;
  }
}
</style>

<script>
export default {
  data() {
    return {
      stepper1: 1,
      stepper2: null,
    };
  }
};
</script>

## Stepper 步进器

### 使用指南
``` javascript
import { Stepper } from 'vant';

Vue.component(Stepper.name, Stepper);
```

### 代码演示

#### 基础用法

:::demo 基础用法
```html
<van-stepper v-model="stepper1"></van-stepper>
<p class="curr-stepper">当前值：{{ stepper1 }}</p>
```
:::

#### 禁用状态
通过设置`disabled`属性来禁用 stepper

:::demo 禁用状态
```html
<van-stepper v-model="stepper1" disabled></van-stepper>
```
:::

#### 高级用法

默认是每次加减为1，可以对组件设置`step`、`min`、`max`、`defaultValue`属性

:::demo 高级用法
```html
<van-stepper v-model="stepper2" min="5" max="40" step="2" default-value="9"></van-stepper>
<p class="curr-stepper">当前值：{{ stepper2 || 9 }}</p>
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
| disableInput | 是否禁用input框 | `Boolean` | `false` | - |

### Event

| 事件名称       | 说明      | 回调参数 |
|-----------|-----------|-----------|
| change | 当绑定值变化时触发的事件 | 当前组件的值 |
| overlimit | 点击不可用的按钮时触发 | - |
