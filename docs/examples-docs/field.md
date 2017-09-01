<style>
.demo-field {
  .van-field-wrapper {
    padding: 0 10px;
  }
}
</style>

<script>
export default {
  data() {
    return {
      username: 'zhangmin'
    };
  },
  methods: {
    onIconClick() {
      this.username = '';
    },

    onFieldBlur() {
      console.log('blured');
    }
  }
};
</script>

## Field 输入框

表单中`input`或`textarea`的输入框。

### 使用指南
``` javascript
import { Field } from 'vant';

Vue.component(Field.name, Field);
```

### 代码演示

#### 基础用法

根据`type`属性显示不同的输入框。

:::demo 基础用法
```html
<van-cell-group>
  <van-field
    type="text"
    label="用户名："
    placeholder="请输入用户名"
    v-model="username"
    icon="clear"
    :on-icon-click="onIconClick"
    @blur="onFieldBlur"
    required></van-field>
  <van-field
    type="password"
    label="密码："
    placeholder="请输入密码"
    required>
    <template slot="icon">
      <van-icon name="search"></van-icon>
    </template>
  </van-field>
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
| icon | 输入框尾部图标 | `string`  |  |  icon中支持的类型 |
| onIconClick | 点击图标的回调函数 | `function`  |  |  |

### Slot

| name       | 描述      |
|-----------|-----------|
| icon | 自定义icon |

