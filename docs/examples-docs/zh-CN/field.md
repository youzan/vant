<style>
.demo-field {
  padding-bottom: 30px;
}
</style>

<script>
export default {
  data() {
    return {
      value: '',
      password: '',
      username: '',
      message: ''
    };
  }
};
</script>

## Field 输入框

`input`或`textarea`的输入框。

### 使用指南
``` javascript
import { Field } from 'vant';

Vue.component(Field.name, Field);
```

### 代码演示

#### 基础用法
通过 v-model 绑定输入框的值

:::demo 基础用法
```html
<van-cell-group>
  <van-field v-model="value" placeholder="请输入用户名"></van-field>
</van-cell-group>
```
:::

#### 自定义类型
根据`type`属性定义不同类型的输入框

:::demo 自定义类型
```html
<van-cell-group>
  <van-field
    v-model="username"
    label="用户名"
    icon="clear"
    placeholder="请输入用户名"
    required
    @click-icon="username = ''"
  >
  </van-field>

  <van-field
    v-model="password"
    type="password"
    label="密码"
    placeholder="请输入密码"
    required>
  </van-field>
</van-cell-group>
```
:::

#### 禁用输入框

:::demo 禁用输入框
```html
<van-cell-group>
  <van-field value="输入框已禁用" label="用户名" disabled></van-field>
</van-cell-group>
```
:::

#### 错误提示

:::demo 错误提示
```html
<van-cell-group>
  <van-field label="用户名" placeholder="请输入用户名" error></van-field>
</van-cell-group>
```
:::

#### 高度自适应
对于 textarea，可以通过`autosize`属性设置高度自适应

:::demo 高度自适应
```html
<van-cell-group>
  <van-field
    v-model="message"
    label="留言"
    type="textarea"
    placeholder="请输入留言"
    rows="1"
    autosize
  >
  </van-field>
</van-cell-group>
```
:::

### API

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| type | 输入框类型 | `String` | `text` | `number` `email` <br> `textarea` `tel` <br> `datetime` `date` <br> `password` `url` |
| value | 输入框的值 | `String` | - | - |
| label | 输入框标签 | `String` | - | - |
| disabled | 是否禁用输入框 | `Boolean` | `false` | - |
| error | 输入框是否有错误 | `Boolean` | `false` | - |
| autosize | 高度自适应(仅支持textarea) | `Boolean` | `false` | - |
| icon | 输入框尾部图标 | `String` | - |  Icon 组件支持的类型 |

### Event

| 事件名称 | 说明 | 回调参数 |
|-----------|-----------|-----------|
| focus | 输入框聚焦时触发 | - |
| blur | 输入框失焦时触发 | - |
| click-icon | 点击尾部图标时触发 | - |

### Slot

| name | 描述 |
|-----------|-----------|
| icon | 自定义icon |
