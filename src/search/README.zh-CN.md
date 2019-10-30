# Search 搜索

### 引入

``` javascript
import Vue from 'vue';
import { Search } from 'vant';

Vue.use(Search);
```

## 代码演示

### 基础用法

v-model 用于控制搜索框中的文字，background 可以自定义搜索框外部背景色

```html
<van-search placeholder="请输入搜索关键词" v-model="value" />
```

### 事件监听

Search 组件提供了`search`和`cancel`事件，`search`事件在点击键盘上的搜索/回车按钮后触发，`cancel`事件在点击搜索框右侧取消按钮时触发

```html
<form action="/">
  <van-search
    v-model="value"
    placeholder="请输入搜索关键词"
    show-action
    @search="onSearch"
    @cancel="onCancel"
  />
</form>
```

> Tips: 在 van-search 外层增加 form 标签，且 action 不为空，即可在 iOS 输入法中显示搜索按钮

### 自定义按钮

使用`action`插槽可以自定义右侧按钮的内容。使用插槽后，cancel 事件将不再触发

```html
<van-search
  v-model="value"
  placeholder="请输入搜索关键词"
  show-action
  shape="round"
  @search="onSearch"
>
  <div slot="action" @click="onSearch">搜索</div>
</van-search>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| label | 搜索框左侧文本 | *string* | - | - |
| shape | 搜索框形状，可选值为 `round` | *string* | `square` | - |
| background | 搜索框背景色 | *string* | `#f2f2f2` | - |
| maxlength | 输入的最大字符数 | *string \| number* | - | - |
| placeholder | 占位提示文字 | *string* | - | - |
| clearable | 是否启用清除控件 | *boolean* | `true` | - |
| show-action | 是否在搜索框右侧显示取消按钮 | *boolean* | `false` | - |
| action-text | 取消按钮文字 | *boolean* | `取消` | 2.2.2 |
| disabled | 是否禁用输入框 | *boolean* | `false` | - |
| readonly | 是否将输入框设为只读 | *boolean* | `false` | - |
| error | 是否将输入内容标红 | *boolean* | `false` | - |
| input-align | 输入框内容对齐方式，可选值为 `center` `right` | *string* | `left` | - |
| left-icon | 输入框左侧图标名称或图片链接，可选值见 [Icon 组件](#/zh-CN/icon) | *string* | `search` | - |
| right-icon | 输入框右侧图标名称或图片链接，可选值见 [Icon 组件](#/zh-CN/icon) | *string* | - | - |

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| search | 确定搜索时触发 | value: 输入框当前值 |
| input | 输入框内容变化时触发 | value: 输入框当前值 |
| focus | 输入框获得焦点时触发 | event: Event |
| blur | 输入框失去焦点时触发 | event: Event |
| clear | 点击清除按钮后触发 | event: Event |
| cancel | 点击取消按钮时触发 | - |

### Slots

| 名称 | 说明 |
|------|------|
| label | 自定义搜索框左侧文本 |
| action | 自定义搜索框右侧按钮，设置`show-action`属性后展示 |
| left-icon | 自定义输入框左侧图标 |
| right-icon | 自定义输入框右侧图标 |
