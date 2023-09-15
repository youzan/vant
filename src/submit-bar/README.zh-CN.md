# SubmitBar 提交订单栏

### 引入

```js
import Vue from 'vue';
import { SubmitBar } from 'vant';

Vue.use(SubmitBar);
```

## 代码演示

### 基础用法

```html
<van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit" />
```

### 禁用状态

禁用状态下不会触发 `submit` 事件。

```html
<van-submit-bar
  disabled
  :price="3050"
  button-text="提交订单"
  tip="你的收货地址不支持同城送, 我们已为你推荐快递"
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
    你的收货地址不支持同城送, <span @click="onClickEditAddress">修改地址</span>
  </template>
</van-submit-bar>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| price | 价格（单位分） | _number_ | - |
| decimal-length | 价格小数点位数 | _number \| string_ | `2` |
| label | 价格左侧文案 | _string_ | `合计：` |
| suffix-label | 价格右侧文案 | _string_ | - |
| text-align | 价格文案对齐方向，可选值为 `left` | _string_ | `right` |
| button-text | 按钮文字 | _string_ | - |
| button-type | 按钮类型 | _string_ | `danger` |
| button-color `v2.9.1` | 自定义按钮颜色 | _string_ | - |
| tip | 在订单栏上方的提示文案 | _string_ | - |
| tip-icon | 提示文案左侧的[图标名称](#/zh-CN/icon)或图片链接 | _string_ | - |
| currency | 货币符号 | _string_ | `¥` |
| disabled | 是否禁用按钮 | _boolean_ | `false` |
| loading | 是否显示将按钮显示为加载中状态 | _boolean_ | `false` |
| safe-area-inset-bottom | 是否开启[底部安全区适配](#/zh-CN/advanced-usage#di-bu-an-quan-qu-gua-pei) | _boolean_ | `true` |

### Events

| 事件名 | 说明             | 回调参数 |
| ------ | ---------------- | -------- |
| submit | 按钮点击事件回调 | -        |

### Slots

| 名称              | 说明                 |
| ----------------- | -------------------- |
| default           | 自定义订单栏左侧内容 |
| button `v2.10.12` | 自定义按钮           |
| top               | 自定义订单栏上方内容 |
| tip               | 提示文案中的额外内容 |

### 样式变量

组件提供了下列 Less 变量，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/theme)。

| 名称                                | 默认值                       | 描述 |
| ----------------------------------- | ---------------------------- | ---- |
| @submit-bar-height                  | `50px`                       | -    |
| @submit-bar-z-index                 | `100`                        | -    |
| @submit-bar-background-color        | `@white`                     | -    |
| @submit-bar-button-width            | `110px`                      | -    |
| @submit-bar-price-color             | `@red`                       | -    |
| @submit-bar-price-font-size         | `@font-size-md`              | -    |
| @submit-bar-currency-font-size      | `@font-size-md`              | -    |
| @submit-bar-text-color              | `@text-color`                | -    |
| @submit-bar-text-font-size          | `@font-size-md`              | -    |
| @submit-bar-tip-padding             | `@padding-xs @padding-sm`    | -    |
| @submit-bar-tip-font-size           | `@font-size-sm`              | -    |
| @submit-bar-tip-line-height         | `1.5`                        | -    |
| @submit-bar-tip-color               | `#f56723`                    | -    |
| @submit-bar-tip-background-color    | `#fff7cc`                    | -    |
| @submit-bar-tip-icon-size           | `12px`                       | -    |
| @submit-bar-button-height           | `40px`                       | -    |
| @submit-bar-padding                 | `0 @padding-md`              | -    |
| @submit-bar-price-integer-font-size | `20px`                       | -    |
| @submit-bar-price-font-family       | `@price-integer-font-family` | -    |
