<script>
export default {
  data() {
    return {
      name: ''
    };
  },

  methods: {
    handleChange() {
      console.log(this.name);
    }
  }
};
</script>

## Field组件

表单中`input`或`textarea`的输入框。

### 基础用法

:::demo 根据`type`属性显示不同的输入框。
```html
<z-cell-group>
  <z-field type="text" label="用户名：" placeholder="请输入用户名"></z-field>
  <z-field type="password" label="密码：" placeholder="请输入密码"></z-field>
  <z-field type="textarea" label="个人介绍：" placeholder="请输入个人介绍"></z-field>
</z-cell-group>
```
:::

### 无label的输入框

:::demo 不传入`label`属性即可。
```html
<z-cell-group>
  <z-field type="text" placeholder="请输入用户名"></z-field>
</z-cell-group>
```
:::

### 监听change事件

:::demo 监听组件的`change`事件。
```html
<z-cell-group>
  <z-field type="text" label="用户名：" placeholder="请输入用户名" @change="handleChange"></z-field>
</z-cell-group>
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
| readonly | 输入框是否只读 | boolean  | false |   |
| maxlength | 输入框maxlength | [String, Number]  | '' |   |

