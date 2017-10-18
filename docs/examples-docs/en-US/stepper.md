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

## Stepper

### Install
``` javascript
import { Stepper } from 'vant';

Vue.component(Stepper.name, Stepper);
```

### Usage

#### Basic Usage

:::demo Basic Usage
```html
<van-stepper v-model="stepper1"></van-stepper>
<p class="curr-stepper">当前值：{{ stepper1 }}</p>
```
:::

#### Disabled
通过设置`disabled`属性来禁用 stepper

:::demo 禁用状态
```html
<van-stepper v-model="stepper1" disabled></van-stepper>
```
:::

#### Advanced Usage

默认是每次加减为1，可以对组件设置`step`、`min`、`max`、`defaultValue`属性

:::demo Advanced Usage
```html
<van-stepper v-model="stepper2" min="5" max="40" step="2" default-value="9"></van-stepper>
<p class="curr-stepper">当前值：{{ stepper2 || 9 }}</p>
```
:::

### API

| Attribute | Description | Type | Default | Accepted Values |
|-----------|-----------|-----------|-------------|-------------|
| min | 最小值 | `String | Number` | `1` | - |
| max | 最大值 | `String | Number` | - | - |
| defaultValue | Default | `String | Number` | `1` | - |
| step | 步数 | `String | Number` | `1` | - |
| disabled | 是否禁用 | `Boolean` | `false` | - | 
| disableInput | 是否禁用input框 | `Boolean` | `false` | - |

### Event

| Event | Description | 回调参数 |
|-----------|-----------|-----------|
| change | 当绑定值变化时触发的事件 | 当前组件的值 |
| overlimit | 点击不可用的按钮时触发 | - |
