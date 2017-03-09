<script>
export default {
  data() {
    return {
      username: 'zhangmin'
    };
  }
};
</script>

## Field组件

表单中`input`或`textarea`的输入框。

### 基础用法

根据`type`属性显示不同的输入框。

:::demo 基础用法
```html
<zan-cell-group>
  <zan-field type="text" label="用户名：" placeholder="请输入用户名" v-model="username"></zan-field>
  <zan-field type="password" label="密码：" placeholder="请输入密码"></zan-field>
  <zan-field type="textarea" label="个人介绍：" placeholder="请输入个人介绍"></zan-field>
</zan-cell-group>
```
:::

### 无label的输入框

不传入`label`属性即可。

:::demo 无label的输入框
```html
<zan-cell-group>
  <zan-field type="text" placeholder="请输入用户名"></zan-field>
</zan-cell-group>
```
:::

### 禁用的输入框

传入`disabled`属性即可。

:::demo 禁用的输入框
```html
<zan-cell-group>
  <zan-field label="用户名：" type="text" placeholder="请输入用户名" v-model="username" disabled></zan-field>
</zan-cell-group>
```
:::

### 错误的输入框

传入`error`属性即可。

:::demo 禁用的输入框
```html
<zan-cell-group>
  <zan-field label="用户名：" type="text" placeholder="请输入用户名" error></zan-field>
</zan-cell-group>
```
:::

### API

| 参数       | 说明      | 类型       | 默认值       | 可选值       |
|-----------|-----------|-----------|-------------|-------------|
| type | 输入框类型 | string  | text | text, number, email, url, tel, date, datetime, password, textarea  |
| placeholder | 输入框placeholder | string  | '' |   |
| value | 输入框的值 | string  | '' |   |
| label | 输入框标签 | string  | '' |   |
| disabled | 是否禁用输入框 | boolean  | false |   |
| error | 输入框是否有错误 | boolean  | false |   |
| readonly | 输入框是否只读 | boolean  | false |   |
| maxlength | 输入框maxlength | [String, Number]  | '' |   |

