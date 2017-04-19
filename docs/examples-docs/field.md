<style>
@component-namespace demo {
  @b field {
    .van-field-wrapper {
      padding: 0 10px;
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      username: 'zhangmin'
    };
  }
};
</script>

## Field 输入框

表单中`input`或`textarea`的输入框。

### 使用指南

如果你已经按照快速上手中引入了整个`vant`，以下**组件注册**就可以忽略了，因为你已经全局注册了`vant`中的全部组件。

#### 全局注册

你可以在全局注册`Field`组件，比如页面的主文件（`index.js`，`main.js`），这样页面任何地方都可以直接使用`Field`组件了：

```js
import Vue from 'vue';
import { Field } from 'vant';
import 'vant/lib/vant-css/field.css';

Vue.component(Field.name, Field);
```

#### 局部注册

如果你只是想在某个组件中使用，你可以在对应组件中注册`Field`组件，这样只能在你注册的组件中使用`Field`：

```js
import { Field } from 'vant';

export default {
  components: {
    'van-field': Field
  }
};
```

### 代码演示

#### 基础用法

根据`type`属性显示不同的输入框。

:::demo 基础用法
```html
<van-cell-group>
  <van-field type="text" label="用户名：" placeholder="请输入用户名" v-model="username" required></van-field>
  <van-field type="password" label="密码：" placeholder="请输入密码" required></van-field>
  <van-field type="textarea" label="个人介绍：" placeholder="请输入个人介绍" required></van-field>
</van-cell-group>
```
:::

#### 无label的输入框

不传入`label`属性即可。

:::demo 无label的输入框
```html
<van-cell-group>
  <van-field type="text" placeholder="请输入用户名"></van-field>
</van-cell-group>
```
:::

#### 带border的输入框

传入一个`border`属性。

:::demo 带border的输入框
```html
<div class="van-field-wrapper">
  <van-field type="text" placeholder="请输入用户名" border></van-field>
</div>
```
:::

#### 禁用的输入框

传入`disabled`属性即可。

:::demo 禁用的输入框
```html
<van-cell-group>
  <van-field label="用户名：" type="text" placeholder="请输入用户名" v-model="username" disabled></van-field>
</van-cell-group>
```
:::

#### 错误的输入框

传入`error`属性即可。

:::demo 错误的输入框
```html
<van-cell-group>
  <van-field label="用户名：" type="text" placeholder="请输入用户名" error></van-field>
</van-cell-group>
```
:::


#### Autosize的输入框(仅支持textarea)

传入`autosize`属性, 且将`rows`设为1。

:::demo 错误的输入框
```html
<van-cell-group>
  <van-field label="留言：" type="textarea" placeholder="请输入留言" rows="1" autosize></van-field>
</van-cell-group>
```
:::

### API

| 参数       | 说明      | 类型       | 默认值       | 可选值       |
|-----------|-----------|-----------|-------------|-------------|
| type | 输入框类型 | `string`  | `text` | `text`, `number`, `email`, `url`, `tel`, `date`, `datetime`, `password`, `textarea`  |
| placeholder | 输入框placeholder | `string`  |  |   |
| value | 输入框的值 | `string`  |  |   |
| label | 输入框标签 | `string`  |  |   |
| disabled | 是否禁用输入框 | `boolean`  | `false` |   |
| error | 输入框是否有错误 | `boolean`  | `false` |   |
| readonly | 输入框是否只读 | `boolean`  | `false` |   |
| maxlength | 输入框maxlength | `string`, `number`  |  |   |
| rows | textarea rows | `string`, `number`   |  |   |
| cols | textarea cols | `string`, `number`  |  |   |
| autosize | 自动调整高度(仅支持textarea) | `boolean`  | `false` |  `true`, `false` |

