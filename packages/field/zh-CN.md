## Field 输入框

`input`或`textarea`的输入框。

### 使用指南
``` javascript
import { Field } from 'vant';

Vue.use(Field);
```

### 代码演示

#### 基础用法
通过 v-model 绑定输入框的值

```html
<van-cell-group>
  <van-field v-model="value" placeholder="请输入用户名" />
</van-cell-group>
```

#### 自定义类型
根据`type`属性定义不同类型的输入框

```html
<van-cell-group>
  <van-field
    v-model="username"
    required
    clearable
    label="用户名"
    icon="question"
    placeholder="请输入用户名"
    @click-icon="$toast('question')"
  />

  <van-field
    v-model="password"
    type="password"
    label="密码"
    placeholder="请输入密码"
    required
  />
</van-cell-group>
```

#### 禁用输入框

```html
<van-cell-group>
  <van-field
    value="输入框已禁用"
    label="用户名"
    left-icon="contact"
    disabled
  />
</van-cell-group>
```

#### 错误提示
通过`error`或者`error-message`属性增加对应的错误提示

```html
<van-cell-group>
  <van-field
    v-model="username"
    label="用户名"
    placeholder="请输入用户名"
    error
  />
  <van-field
    v-model="phone"
    label="手机号"
    placeholder="请输入手机号"
    error-message="手机号格式错误"
  />
</van-cell-group>
```

#### 高度自适应
对于 textarea，可以通过`autosize`属性设置高度自适应

```html
<van-cell-group>
  <van-field
    v-model="message"
    label="留言"
    type="textarea"
    placeholder="请输入留言"
    rows="1"
    autosize
  />
</van-cell-group>
```

#### 插入按钮
通过 button slot 可以在输入框尾部插入按钮

```html
<van-cell-group>
  <van-field
    v-model="sms"
    center
    clearable
    label="短信验证码"
    placeholder="请输入短信验证码"
  >
    <van-button slot="button" size="small" type="primary">发送验证码</van-button>
  </van-field>
</van-cell-group>
```

### API

Field 默认支持 Input 标签所有的原生属性，比如 `maxlength`、`placeholder`、`autofocus` 等

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|-------------|
| label | 输入框左侧文本 | `String` | - |
| value | 当前输入的值 | `String | Number` | - |
| type | 可设置为任意原生类型, 如 `number` `tel` `textarea` | `String` | `text` |
| border | 是否显示内边框 | `Boolean` | `true` |
| disabled | 是否禁用输入框 | `Boolean` | `false` |
| readonly | 是否只读 | `Boolean` | `false` |
| clearable | 是否启用清除控件 | `Boolean` | `false` |
| required | 是否显示表单必填星号 | `Boolean` | `false` |
| is-link | 是否展示右侧箭头并开启点击反馈 | `Boolean` | `false` |
| error | 是否将输入内容标红 | `Boolean` | `false` |
| error-message | 底部错误提示文案，为空时不展示 | `String` | `''` |
| label-align | 文本对齐方式，可选值为 `center` `right` | `String` | `left` |
| input-align | 输入框内容对齐方式，可选值为 `center` `right` | `String` | `left` |
| autosize | 自适应内容高度，只对 textarea 有效，可传入对象,<br>如 { maxHeight: 100, minHeight: 50 }，单位为 px | `Boolean | Object` | `false` |
| icon | 输入框尾部图标 (可选值见 Icon 组件)  | `String` | - |
| left-icon | 输入框左侧图标 (可选值见 Icon 组件)  | `String` | - |

### Event

Field 默认支持 Input 标签所有的原生事件，如 `focus`、`blur`、`keypress` 等

| 事件 | 说明 | 回调参数 |
|-----------|-----------|-----------|
| click-icon | 点击尾部图标时触发 | - |

### 方法

通过 ref 可以获取到 field 实例并调用实例方法

| 方法名 | 参数 | 返回值 | 介绍 |
|-----------|-----------|-----------|-------------|
| blur | - | - | 取消输入框焦点 |

### Slot

| 名称 | 说明 |
|-----------|-----------|
| label | 自定义输入框标签 |
| icon | 自定义输入框尾部图标 |
| button | 自定义输入框尾部按钮 |

### 更新日志

| 版本 | 类型 | 内容 |
|-----------|-----------|-----------|
| 1.3.3 | bugfix | 修复类型为 number 时 maxlength 属性不生效的问题 |
| 1.2.1 | improvement | 优化清除按钮颜色
| 1.1.15 | bugfix | 修复 date 类型在 iOS 设备下显示错误的问题
| 1.1.14 | bugfix | 修复行高错误
| 1.1.11 | bugfix | 修复 readonly 状态下在 safari 上出现光标的问题
| 1.1.11 | bugfix | 修复 readonly 状态下仍然会显示清除按钮的问题
| 1.1.10 | feature | 新增 is-link 属性
| 1.1.10 | feature | 新增 input-align 属性
| 1.1.10 | feature | 新增 label-align 属性
| 1.1.9 | feature | 新增 clearable 属性
| 1.1.8 | feature | 新增 blur 方法
| 1.1.8 | improvement | 更新右侧按钮默认颜色
| 1.1.7 | feature | 支持 v-model.number
| 1.1.5 | bugfix | 修复在 safari 上不正确的外边距
| 1.1.4 | feature | 新增 left-icon 属性
| 1.1.3 | feature | 新增 label 插槽
| 1.0.8 | bugfix | 修复 number 类型无法输入负数的问题
| 1.0.3 | feature | 新增 button 插槽，支持插入按钮
| 1.0.0 | feature | 支持配置 autosize 最大/最小高度
