# Search 搜索

### 介绍

用于搜索场景的输入框组件。

### 引入

通过以下方式来全局注册组件，更多注册方式请参考[组件注册](#/zh-CN/advanced-usage#zu-jian-zhu-ce)。

```js
import { createApp } from 'vue';
import { Search } from 'vant';

const app = createApp();
app.use(Search);
```

## 代码演示

### 基础用法

`v-model` 用于控制搜索框中的文字，`background` 可以自定义搜索框外部背景色。

```html
<van-search v-model="value" placeholder="请输入搜索关键词" />
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const value = ref('');
    return { value };
  },
};
```

### 事件监听

Search 组件提供了 `search` 和 `cancel` 事件，`search` 事件在点击键盘上的搜索/回车按钮后触发，`cancel` 事件在点击搜索框右侧取消按钮时触发。

```html
<form action="/">
  <van-search
    v-model="value"
    show-action
    placeholder="请输入搜索关键词"
    @search="onSearch"
    @cancel="onCancel"
  />
</form>
```

```js
import { ref } from 'vue';
import { showToast } from 'vant';

export default {
  setup() {
    const value = ref('');
    const onSearch = (val) => showToast(val);
    const onCancel = () => showToast('取消');
    return {
      value,
      onSearch,
      onCancel,
    };
  },
};
```

> Tips: 在 van-search 外层增加 form 标签，且 action 不为空，即可在 iOS 输入法中显示搜索按钮。

### 搜索框内容对齐

通过 `input-align` 属性设置搜索框内容的对齐方式，可选值为 `center`、`right`。

```html
<van-search
  v-model="value"
  placeholder="请输入搜索关键词"
  input-align="center"
/>
```

### 禁用搜索框

通过 `disabled` 属性禁用搜索框。

```html
<van-search v-model="value" disabled placeholder="请输入搜索关键词" />
```

### 自定义背景色

通过 `background` 属性可以设置搜索框外部的背景色，通过 `shape` 属性设置搜索框的形状，可选值为 `round`。

```html
<van-search
  v-model="value"
  shape="round"
  background="#4fc08d"
  placeholder="请输入搜索关键词"
/>
```

### 自定义按钮

使用 `action` 插槽可以自定义右侧按钮的内容。使用插槽后，`cancel` 事件将不再触发。

```html
<van-search
  v-model="value"
  show-action
  label="地址"
  placeholder="请输入搜索关键词"
  @search="onSearch"
>
  <template #action>
    <div @click="onClickButton">搜索</div>
  </template>
</van-search>
```

```js
import { ref } from 'vue';
import { showToast } from 'vant';

export default {
  setup() {
    const value = ref('');
    const onSearch = (val) => showToast(val);
    const onClickButton = () => showToast(value.value);
    return {
      value,
      onSearch,
      onClickButton,
    };
  },
};
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model | 当前输入的值 | _number \| string_ | - |
| label | 搜索框左侧文本 | _string_ | - |
| name | 名称，作为提交表单时的标识符 | _string_ | - |
| shape | 搜索框形状，可选值为 `round` | _string_ | `square` |
| id | 搜索框 id，同时会设置 label 的 for 属性 | _string_ | `van-search-n-input` |
| background | 搜索框外部背景色 | _string_ | `#f2f2f2` |
| maxlength | 输入的最大字符数 | _number \| string_ | - |
| placeholder | 占位提示文字 | _string_ | - |
| clearable | 是否启用清除图标，点击清除图标后会清空输入框 | _boolean_ | `true` |
| clear-icon | 清除图标名称或图片链接，等同于 Icon 组件的 [name 属性](#/zh-CN/icon#props) | _string_ | `clear` |
| clear-trigger | 显示清除图标的时机，`always` 表示输入框不为空时展示，<br>`focus` 表示输入框聚焦且不为空时展示 | _string_ | `focus` |
| autofocus | 是否自动聚焦，iOS 系统不支持该属性 | _boolean_ | `false` |
| show-action | 是否在搜索框右侧显示取消按钮 | _boolean_ | `false` |
| action-text | 取消按钮文字 | _string_ | `取消` |
| disabled | 是否禁用输入框 | _boolean_ | `false` |
| readonly | 是否将输入框设为只读状态，只读状态下无法输入内容 | _boolean_ | `false` |
| error | 是否将输入内容标红 | _boolean_ | `false` |
| error-message | 底部错误提示文案，为空时不展示 | _string_ | - |
| formatter | 输入内容格式化函数 | _(val: string) => string_ | - |
| format-trigger | 格式化函数触发的时机，可选值为 `onBlur` | _string_ | `onChange` |
| input-align | 输入框内容对齐方式，可选值为 `center` `right` | _string_ | `left` |
| left-icon | 输入框左侧图标名称或图片链接，等同于 Icon 组件的 [name 属性](#/zh-CN/icon#props) | _string_ | `search` |
| right-icon | 输入框右侧图标名称或图片链接，等同于 Icon 组件的 [name 属性](#/zh-CN/icon#props) | _string_ | - |
| autocomplete | input 标签原生的[自动完成属性](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) | _string_ | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| search | 确定搜索时触发 | _value: string (当前输入的值)_ |
| update:model-value | 输入框内容变化时触发 | _value: string (当前输入的值)_ |
| focus | 输入框获得焦点时触发 | _event: Event_ |
| blur | 输入框失去焦点时触发 | _event: Event_ |
| click-input | 点击输入区域时触发 | _event: MouseEvent_ |
| click-left-icon | 点击左侧图标时触发 | _event: MouseEvent_ |
| click-right-icon `3.4.0` | 点击右侧图标时触发 | _event: MouseEvent_ |
| clear | 点击清除按钮后触发 | _event: MouseEvent_ |
| cancel | 点击取消按钮时触发 | - |

### 方法

通过 ref 可以获取到 Search 实例并调用实例方法，详见[组件实例方法](#/zh-CN/advanced-usage#zu-jian-shi-li-fang-fa)。

| 方法名 | 说明           | 参数 | 返回值 |
| ------ | -------------- | ---- | ------ |
| focus  | 获取输入框焦点 | -    | -      |
| blur   | 取消输入框焦点 | -    | -      |

### 类型定义

组件导出以下类型定义：

```ts
import type { SearchProps, SearchShape, SearchInstance } from 'vant';
```

`SearchInstance` 是组件实例的类型，用法如下：

```ts
import { ref } from 'vue';
import type { SearchInstance } from 'vant';

const searchRef = ref<SearchInstance>();

searchRef.value?.focus();
```

### Slots

| 名称       | 说明                                                      |
| ---------- | --------------------------------------------------------- |
| left       | 自定义左侧内容（搜索框外）                                |
| action     | 自定义右侧内容（搜索框外），设置 `show-action` 属性后展示 |
| label      | 自定义左侧文本（搜索框内）                                |
| left-icon  | 自定义左侧图标（搜索框内）                                |
| right-icon | 自定义右侧图标（搜索框内）                                |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称                            | 默认值                       | 描述 |
| ------------------------------- | ---------------------------- | ---- |
| --van-search-padding            | _10px var(--van-padding-sm)_ | -    |
| --van-search-background         | _var(--van-background-2)_    | -    |
| --van-search-content-background | _var(--van-gray-1)_          | -    |
| --van-search-input-height       | _34px_                       | -    |
| --van-search-label-padding      | _0 5px_                      | -    |
| --van-search-label-color        | _var(--van-text-color)_      | -    |
| --van-search-label-font-size    | _var(--van-font-size-md)_    | -    |
| --van-search-left-icon-color    | _var(--van-gray-6)_          | -    |
| --van-search-action-padding     | _0 var(--van-padding-xs)_    | -    |
| --van-search-action-text-color  | _var(--van-text-color)_      | -    |
| --van-search-action-font-size   | _var(--van-font-size-md)_    | -    |

## 常见问题

### 在桌面端点击清除按钮无效？

清除按钮监听是的移动端 Touch 事件，参见[桌面端适配](#/zh-CN/advanced-usage#zhuo-mian-duan-gua-pei)。
