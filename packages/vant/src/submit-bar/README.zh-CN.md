# SubmitBar 提交订单栏

### 介绍

用于展示订单金额与提交订单。

### 引入

通过以下方式来全局注册组件，更多注册方式请参考[组件注册](#/zh-CN/advanced-usage#zu-jian-zhu-ce)。

```js
import { createApp } from 'vue';
import { SubmitBar } from 'vant';

const app = createApp();
app.use(SubmitBar);
```

## 代码演示

### 基础用法

```html
<van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit" />
```

```js
import { showToast } from 'vant';

export default {
  setup() {
    const onSubmit = () => showToast('点击按钮');
    return {
      onSubmit,
    };
  },
};
```

### 禁用状态

禁用状态下不会触发 `submit` 事件。

```html
<van-submit-bar
  disabled
  :price="3050"
  button-text="提交订单"
  tip="你的收货地址不支持配送"
  tip-icon="info-o"
  @submit="onSubmit"
/>
```

### 加载状态

加载状态下不会触发 `submit` 事件。

```html
<van-submit-bar
  loading
  :price="3050"
  button-text="提交订单"
  @submit="onSubmit"
/>
```

### 高级用法

通过插槽插入自定义内容。

```html
<van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit">
  <van-checkbox v-model="checked">全选</van-checkbox>
  <template #tip>
    你的收货地址不支持配送, <span @click="onClickLink">修改地址</span>
  </template>
</van-submit-bar>
```

```js
import { showToast } from 'vant';

export default {
  setup() {
    const onSubmit = () => showToast('点击按钮');
    const onClickLink = () => showToast('修改地址');
    return {
      onSubmit,
      onClickLink,
    };
  },
};
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| price | 金额（单位分） | _number_ | - |
| decimal-length | 金额小数点位数 | _number \| string_ | `2` |
| label | 金额左侧文案 | _string_ | `合计：` |
| suffix-label | 金额右侧文案 | _string_ | - |
| text-align | 金额文案对齐方向，可选值为 `left` | _string_ | `right` |
| button-text | 按钮文字 | _string_ | - |
| button-type | 按钮类型 | _string_ | `danger` |
| button-color | 自定义按钮颜色 | _string_ | - |
| tip | 在订单栏上方的提示文案 | _string_ | - |
| tip-icon | 提示文案左侧的图标名称或图片链接，等同于 Icon 组件的 [name 属性](#/zh-CN/icon#props) | _string_ | - |
| currency | 货币符号 | _string_ | `¥` |
| disabled | 是否禁用按钮 | _boolean_ | `false` |
| loading | 是否显示将按钮显示为加载中状态 | _boolean_ | `false` |
| safe-area-inset-bottom | 是否开启[底部安全区适配](#/zh-CN/advanced-usage#di-bu-an-quan-qu-gua-pei) | _boolean_ | `true` |
| placeholder | 是否在标签位置生成一个等高的占位元素 | _boolean_ | `false` |

### Events

| 事件名 | 说明             | 回调参数 |
| ------ | ---------------- | -------- |
| submit | 按钮点击事件回调 | -        |

### Slots

| 名称    | 说明                 |
| ------- | -------------------- |
| default | 自定义订单栏左侧内容 |
| button  | 自定义按钮           |
| top     | 自定义订单栏上方内容 |
| tip     | 提示文案中的额外内容 |

### 类型定义

组件导出以下类型定义：

```ts
import type { SubmitBarProps, SubmitBarTextAlign } from 'vant';
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
| --van-submit-bar-height | _50px_ | - |
| --van-submit-bar-z-index | _100_ | - |
| --van-submit-bar-background | _var(--van-background-2)_ | - |
| --van-submit-bar-button-width | _110px_ | - |
| --van-submit-bar-price-color | _var(--van-danger-color)_ | - |
| --van-submit-bar-price-font-size | _var(--van-font-size-sm)_ | - |
| --van-submit-bar-price-integer-font-size | _20px_ | - |
| --van-submit-bar-price-font | _var(--van-price-font)_ | - |
| --van-submit-bar-text-color | _var(--van-text-color)_ | - |
| --van-submit-bar-text-font-size | _var(--van-font-size-md)_ | - |
| --van-submit-bar-tip-padding | _var(--van-padding-xs) var(--van-padding-sm)_ | - |
| --van-submit-bar-tip-font-size | _var(--van-font-size-sm)_ | - |
| --van-submit-bar-tip-line-height | _1.5_ | - |
| --van-submit-bar-tip-color | _var(--van-orange-dark)_ | - |
| --van-submit-bar-tip-background | _var(--van-orange-light)_ | - |
| --van-submit-bar-tip-icon-size | _12px_ | - |
| --van-submit-bar-button-height | _40px_ | - |
| --van-submit-bar-padding | _0 var(--van-padding-md)_ | - |
