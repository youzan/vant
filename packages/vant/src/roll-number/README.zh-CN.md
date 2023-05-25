# RollNumber 翻滚数字动效

### 介绍

数字翻滚动效

### 引入

通过以下方式来全局注册组件，更多注册方式请参考[组件注册](#/zh-CN/advanced-usage#zu-jian-zhu-ce)。

```js
import { createApp } from 'vue';
import { RollNumber } from 'vant';

const app = createApp();
app.use(RollNumber);
```

## 代码演示

### 基础用法

```html
<van-roll-number
  :start-num="0"
  :target-num="123"
  :duration="2"
  :is-start="true"
  :direction="'down'"
/>
```

### 向上翻滚

可以通过 `direction` 属性设置数字的翻滚方向。`up`表示向上翻滚。

```html
<van-roll-number
  :start-num="0"
  :target-num="123"
  :duration="2"
  :is-start="true"
  :direction="'up'"
/>
```

### 个位先停止动画

可以通过 `stop-order` 属性设置动画各个数位的停止先后顺序。默认先停止高位。设置`rtl`可以先从个位停止。

```html
<van-roll-number
  :start-num="0"
  :target-num="123"
  :duration="2"
  :is-start="true"
  stop-order="rtl"
  :direction="'up'"
/>
```

## API

### Props

| 参数       | 说明                                       | 类型      | 默认值 |
| ---------- | ------------------------------------------ | --------- | ------ |
| start-num  | 开始数值                                   | _number_  | 0      |
| target-num | 目标数值                                   | _number_  | -      |
| duration   | 动画时长，单位 s                           | _number_  | 2      |
| direction  | 数值翻滚方向，值为`down`和`up`             | _string_  | `down` |
| is-start   | 是否启动动画                               | _boolean_ | false  |
| stop-order | 各个数位动画停止先后顺序, 值为`ltr`和`rtl` | _string_  | 'ltr'  |

### Events

| 事件名 | 说明 | 回调参数 |
| ------ | ---- | -------- |
|        |      |          |

### 类型定义

组件导出以下类型定义：

```ts
import type { RollNumberProps } from 'vant';
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称                              | 默认值  | 描述             |
| --------------------------------- | ------- | ---------------- |
| --van-roll-number-bg-color        | _black_ | 单个数位背景色   |
| --van-roll-number-color           | _white_ | 数字颜色         |
| --van-roll-number-gap             | _5px_   | 数位之间的间隔   |
| --van-roll-number-single-width    | _20px_  | 单个数位宽度     |
| --van-roll-number-single-border-r | _0px_   | 单个数位边框圆角 |
