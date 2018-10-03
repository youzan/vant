## Stepper 步进器

### 使用指南
``` javascript
import { Stepper } from 'vant';

Vue.use(Stepper);
```

### 代码演示

#### 基础用法

```html
<van-stepper v-model="value" />
```

```javascript
export default {
  data() {
    return {
      value: 1
    }
  }
}
```

#### 禁用状态
通过设置`disabled`属性来禁用 stepper

```html
<van-stepper v-model="value" disabled />
```

#### 高级用法

可以对组件设置`step`、`min`、`max`属性

```html
<van-stepper
  v-model="value"
  integer
  :min="5"
  :max="40"
  :step="2"
/>
```

### API

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| v-model | 当前输入值 | `String | Number` | 最小值 |
| min | 最小值 | `String | Number` | `1` |
| max | 最大值 | `String | Number` | - |
| step | 步数 | `String | Number` | `1` |
| integer | 是否只允许输入整数 | `Boolean` | `false` |
| disabled | 是否禁用 | `Boolean` | `false` |
| disable-input | 是否禁用input框 | `Boolean` | `false` |

### Event

| 事件名称 | 说明 | 回调参数 |
|-----------|-----------|-----------|
| change | 当绑定值变化时触发的事件 | 当前组件的值 |
| overlimit | 点击不可用的按钮时触发 | - |
| plus | 点击增加按钮时触发 | - |
| minus | 点击减少按钮时触发 | - |
| blur | 输入框失焦时触发 | - |

### 更新日志

| 版本 | 类型 | 内容 |
|-----------|-----------|-----------|
| 1.2.1 | bugfix | 修复初始值不能为 0 的问题 |
| 1.1.15 | improvement | 优化禁用态样式 |
| 1.1.15 | improvement | 优化输入体验 |
| 1.1.14 | bugfix | 修复 integer 属性在 Android 上无法生效的问题 |
| 1.1.9 | improvement | 输入框失焦且内容为空时，自动补全为最小值 |
| 1.1.2 | improvement | 优化禁用状态样式 |
| 1.1.2 | bugfix | 修复 integer 属性拼写错误 |
| 1.1.1 | feature | 新增 integer 属性 |
