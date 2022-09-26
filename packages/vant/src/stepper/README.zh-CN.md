# Stepper 步进器

### 介绍

步进器由增加按钮、减少按钮和输入框组成，用于在一定范围内输入、调整数字。

### 引入

通过以下方式来全局注册组件，更多注册方式请参考[组件注册](#/zh-CN/advanced-usage#zu-jian-zhu-ce)。

```js
import { createApp } from 'vue';
import { Stepper } from 'vant';

const app = createApp();
app.use(Stepper);
```

## 代码演示

### 基础用法

通过 `v-model` 绑定输入值，可以通过 `change` 事件监听到输入值的变化。

```html
<van-stepper v-model="value" />
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const value = ref(1);
    return { value };
  },
};
```

### 步长设置

通过 `step` 属性设置每次点击增加或减少按钮时变化的值，默认为 `1`。

```html
<van-stepper v-model="value" step="2" />
```

### 限制输入范围

通过 `min` 和 `max` 属性限制输入值的范围，默认超出范围后会自动校正最大值或最小值，通过 `auto-fixed` 可以关闭自动校正。

```html
<van-stepper v-model="value" min="5" max="8" />
```

### 限制输入整数

设置 `integer` 属性后，输入框将限制只能输入整数。

```html
<van-stepper v-model="value" integer />
```

### 禁用状态

通过设置 `disabled` 属性来禁用步进器，禁用状态下无法点击按钮或修改输入框。

```html
<van-stepper v-model="value" disabled />
```

### 禁用输入框

通过设置 `disable-input` 属性来禁用输入框，此时按钮仍然可以点击。

```html
<van-stepper v-model="value" disable-input />
```

### 固定小数位数

通过设置 `decimal-length` 属性可以保留固定的小数位数。

```html
<van-stepper v-model="value" step="0.2" :decimal-length="1" />
```

### 自定义大小

通过 `input-width` 属性设置输入框宽度，通过 `button-size` 属性设置按钮大小和输入框高度。

```html
<van-stepper v-model="value" input-width="40px" button-size="32px" />
```

### 异步变更

通过 `before-change` 属性可以在输入值变化前进行校验和拦截。

```html
<van-stepper v-model="value" :before-change="beforeChange" />
```

```js
import { ref } from 'vue';
import { closeToast, showLoadingToast } from 'vant';

export default {
  setup() {
    const value = ref(1);

    const beforeChange = (value) => {
      showLoadingToast({ forbidClick: true });

      return new Promise((resolve) => {
        setTimeout(() => {
          closeToast();
          // 在 resolve 函数中返回 true 或 false
          resolve(true);
        }, 500);
      });
    };

    return {
      value,
      beforeChange,
    };
  },
};
```

### 圆角风格

将 `theme` 设置为 `round` 来展示圆角风格的步进器。

```html
<van-stepper v-model="value" theme="round" button-size="22" disable-input />
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model | 当前输入的值 | _number \| string_ | - |
| min | 最小值 | _number \| string_ | `1` |
| max | 最大值 | _number \| string_ | - |
| auto-fixed | 是否自动校正超出限制范围的数值，设置为 `false` 后输入超过限制范围的数值将不会自动校正 | _boolean_ | `true` |
| default-value | 初始值，当 v-model 为空时生效 | _number \| string_ | `1` |
| step | 步长，每次点击时改变的值 | _number \| string_ | `1` |
| name | 标识符，通常为一个唯一的字符串或数字，可以在 `change` 事件回调参数中获取 | _number \| string_ | - |
| input-width | 输入框宽度，默认单位为 `px` | _number \| string_ | `32px` |
| button-size | 按钮大小以及输入框高度，默认单位为 `px` | _number \| string_ | `28px` |
| decimal-length | 固定显示的小数位数 | _number \| string_ | - |
| theme | 样式风格，可选值为 `round` | _string_ | - |
| placeholder | 输入框占位提示文字 | _string_ | - |
| integer | 是否只允许输入整数 | _boolean_ | `false` |
| disabled | 是否禁用步进器 | _boolean_ | `false` |
| disable-plus | 是否禁用增加按钮 | _boolean_ | `false` |
| disable-minus | 是否禁用减少按钮 | _boolean_ | `false` |
| disable-input | 是否禁用输入框 | _boolean_ | `false` |
| before-change | 输入值变化前的回调函数，返回 `false` 可阻止输入，支持返回 Promise | _(value: number \| string) => boolean \| Promise\<boolean\>_ | `false` |
| show-plus | 是否显示增加按钮 | _boolean_ | `true` |
| show-minus | 是否显示减少按钮 | _boolean_ | `true` |
| show-input | 是否显示输入框 | _boolean_ | `true` |
| long-press | 是否开启长按手势，开启后可以长按增加和减少按钮 | _boolean_ | `true` |
| allow-empty | 是否允许输入的值为空，设置为 `true` 后允许传入空字符串 | _boolean_ | `false` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 当绑定值变化时触发的事件 | _value: string, detail: { name: string }_ |
| overlimit | 点击不可用的按钮时触发 | - |
| plus | 点击增加按钮时触发 | - |
| minus | 点击减少按钮时触发 | - |
| focus | 输入框聚焦时触发 | _event: Event_ |
| blur | 输入框失焦时触发 | _event: Event_ |

### 类型定义

组件导出以下类型定义：

```ts
import type { StepperTheme, StepperProps } from 'vant';
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称                                     | 默认值                     | 描述 |
| ---------------------------------------- | -------------------------- | ---- |
| --van-stepper-background                 | _var(--van-active-color)_  | -    |
| --van-stepper-button-icon-color          | _var(--van-text-color)_    | -    |
| --van-stepper-button-disabled-color      | _var(--van-background)_    | -    |
| --van-stepper-button-disabled-icon-color | _var(--van-gray-5)_        | -    |
| --van-stepper-button-round-theme-color   | _var(--van-primary-color)_ | -    |
| --van-stepper-input-width                | _32px_                     | -    |
| --van-stepper-input-height               | _28px_                     | -    |
| --van-stepper-input-font-size            | _var(--van-font-size-md)_  | -    |
| --van-stepper-input-line-height          | _normal_                   | -    |
| --van-stepper-input-text-color           | _var(--van-text-color)_    | -    |
| --van-stepper-input-disabled-text-color  | _var(--van-text-color-3)_  | -    |
| --van-stepper-input-disabled-background  | _var(--van-active-color)_  | -    |
| --van-stepper-radius                     | _var(--van-radius-md)_     | -    |

## 常见问题

### 为什么 value 有时候会变成 string 类型？

这是因为用户输入过程中可能出现小数点或空值，比如 `1.`，这种情况下组件会抛出字符串类型。

如果希望 value 保持 number 类型，可以在 v-model 上添加 `number` 修饰符：

```html
<van-stepper v-model.number="value" />
```
