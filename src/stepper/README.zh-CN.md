# Stepper 步进器

### 介绍

步进器由增加按钮、减少按钮和输入框组成，用于在一定范围内输入、调整数字。

### 引入

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
export default {
  data() {
    return {
      value: 1,
    };
  },
};
```

### 步长设置

通过 `step` 属性设置每次点击增加或减少按钮时变化的值，默认为 `1`。

```html
<van-stepper v-model="value" step="2" />
```

### 限制输入范围

通过 `min` 和 `max` 属性限制输入值的范围。

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

如果需要异步地修改输入框的值，可以设置 `async-change` 属性，并在 `change` 事件中手动修改 `value`。

```html
<van-stepper :model-value="value" async-change @change="onChange" />
```

```js
import { Toast } from 'vant';

export default {
  data() {
    return {
      value: 1,
    };
  },
  methods: {
    onChange(value) {
      Toast.loading({ forbidClick: true });

      setTimeout(() => {
        Toast.clear();

        // 注意此时修改 value 后会再次触发 change 事件
        this.value = value;
      }, 500);
    },
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
| default-value | 初始值，当 v-model 为空时生效 | _number \| string_ | `1` |
| step | 步长，每次点击时改变的值 | _number \| string_ | `1` |
| name | 标识符，可以在 `change` 事件回调参数中获取 | _number \| string_ | - |
| input-width | 输入框宽度，默认单位为 `px` | _number \| string_ | `32px` |
| button-size | 按钮大小以及输入框高度，默认单位为 `px` | _number \| string_ | `28px` |
| decimal-length | 固定显示的小数位数 | _number \| string_ | - |
| theme `v2.8.2` | 样式风格，可选值为 `round` | _string_ | - |
| placeholder `v2.8.6` | 输入框占位提示文字 | _string_ | - |
| integer | 是否只允许输入整数 | _boolean_ | `false` |
| disabled | 是否禁用步进器 | _boolean_ | `false` |
| disable-plus | 是否禁用增加按钮 | _boolean_ | `false` |
| disable-minus | 是否禁用减少按钮 | _boolean_ | `false` |
| disable-input | 是否禁用输入框 | _boolean_ | `false` |
| async-change | 是否开启异步变更，开启后需要手动控制输入值 | _boolean_ | `false` |
| show-plus | 是否显示增加按钮 | _boolean_ | `true` |
| show-minus | 是否显示减少按钮 | _boolean_ | `true` |
| long-press `v2.4.3` | 是否开启长按手势 | _boolean_ | `true` |
| allow-empty `v2.9.1` | 是否允许输入的值为空 | _boolean_ | `false` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 当绑定值变化时触发的事件 | _value: string, detail: { name: string }_ |
| overlimit | 点击不可用的按钮时触发 | - |
| plus | 点击增加按钮时触发 | - |
| minus | 点击减少按钮时触发 | - |
| focus | 输入框聚焦时触发 | _event: Event_ |
| blur | 输入框失焦时触发 | _event: Event_ |

## 常见问题

### 为什么 value 有时候会变成 string 类型？

这是因为用户输入过程中可能出现小数点或空值，比如 `1.`，这种情况下组件会抛出字符串类型。

如果希望 value 保持 number 类型，可以在 v-model 上添加 `number` 修饰符：

```html
<van-stepper v-model.number="value" />
```
