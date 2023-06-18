# RollingText 翻滚文本动效

### 介绍

文本翻滚动效，可以翻滚数字和其他类型文本。

### 引入

通过以下方式来全局注册组件，更多注册方式请参考[组件注册](#/zh-CN/advanced-usage#zu-jian-zhu-ce)。

```js
import { createApp } from 'vue';
import { RollingText } from 'vant';

const app = createApp();
app.use(RollingText);
```

## 代码演示

### 基础用法

```html
<van-rolling-text
  :start-num="0"
  :target-num="123"
  :duration="2"
  :auto-start="false"
  direction="down"
/>
```

### 设置翻滚方向

可以通过 `direction` 属性设置数字的翻滚方向。`up` 表示向上翻滚。

```html
<van-rolling-text
  :start-num="0"
  :target-num="432"
  :duration="2"
  :auto-start="false"
  direction="up"
/>
```

### 设置各数位停止顺序

可以通过 `stop-order` 属性设置动画各个数位的停止先后顺序。默认先停止高位。设置 `rtl` 可以先从个位停止。

```html
<van-rolling-text
  :start-num="0"
  :target-num="54321"
  :duration="2"
  :auto-start="false"
  stop-order="rtl"
  direction="up"
/>
```

### 翻转非数字内容

可以通过 `text-array` 属性设置非数字内容的翻转。

```html
<van-rolling-text
  :text-array="textArray"
  :duration="1"
  :auto-start="false"
  stop-order="rtl"
  direction="up"
/>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const textArray = ref([
      'aaaaa',
      'bbbbb',
      'ccccc',
      'ddddd',
      'eeeee',
      'fffff',
      'ggggg',
    ]);
    return { textArray };
  },
};
```

### 自定义样式

```html
<van-rolling-text
  class="my-rolling-text"
  :start-num="12345"
  :target-num="54321"
  :duration="2"
  stop-order="rtl"
  direction="up"
  :height="70"
/>
```

```css
.my-rolling-text {
  --van-rolling-text-background: deepskyblue;
  --van-rolling-text-color: white;
  --van-rolling-text-font-size: 40px;
  --van-rolling-text-gap: 6px;
  --van-rolling-text-item-border-radius: 5px;
  --van-rolling-text-item-width: 50px;
}
```

### 手动控制

通过 ref 获取到组件实例后，可以调用 `start`、`reset` 方法。

```html
<van-rolling-text
  ref="rollingTextRef"
  :start-num="0"
  :target-num="54321"
  :duration="2"
  :auto-start="false"
  stop-order="rtl"
  direction="up"
/>
<van-grid clickable :column-num="3">
  <van-grid-item icon="play-circle-o" :text="start" @click="start" />
  <van-grid-item icon="replay" :text="reset" @click="reset" />
</van-grid>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const rollingTextRef = ref(null);
    const start = () => {
      rollingTextRef.value.start();
    };
    const reset = () => {
      rollingTextRef.value.reset();
    };
    return { rollingTextRef, start, reset };
  },
};
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| start-num | 开始数值 | _number_ | `0` |
| target-num | 目标数值 | _number_ | - |
| text-array | 内容数组，翻转非数字内容，需要传此参数 | _Array_ | `[]` |
| duration | 动画时长，单位为秒 | _number_ | `2` |
| direction | 文本翻滚方向，值为 `down` 和 `up` | _string_ | `down` |
| auto-start | 是否自动开始动画 | _boolean_ | `true` |
| stop-order | 各个数位动画停止先后顺序，值为 `ltr` 和 `rtl` | _string_ | `ltr` |
| height | 数位高度，单位为 `px` | _number_ | `40` |

### 方法

通过 ref 可以获取到 RollingText 实例并调用实例方法，详见[组件实例方法](#/zh-CN/advanced-usage#zu-jian-shi-li-fang-fa)。

| 方法名 | 说明     | 参数 | 返回值 |
| ------ | -------- | ---- | ------ |
| start  | 开始动画 | -    | -      |
| reset  | 重置动画 | -    | -      |

### 类型定义

组件导出以下类型定义：

```ts
import type {
  RollingTextProps,
  RollingTextInstance,
  RollingTextDirection,
  RollingTextStopOrder,
} from 'vant';
```

`RollingTextInstance` 是组件实例的类型，用法如下：

```ts
import { ref } from 'vue';
import type { RollingTextInstance } from 'vant';

const rollingTextRef = ref<RollingTextInstance>();

rollingTextRef.value?.start();
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
| --van-rolling-text-background | _inherit_ | 单个数位背景色 |
| --van-rolling-text-color | _var(--van-text-color)_ | 数字颜色 |
| --van-rolling-text-font-size | _var(--van-font-size-md)_ | 字体大小 |
| --van-rolling-text-gap | _0px_ | 数位之间的间隔 |
| --van-rolling-text-item-width | _15px_ | 单个数位宽度 |
| --van-rolling-text-item-border-radius | _0px_ | 单个数位边框圆角 |
