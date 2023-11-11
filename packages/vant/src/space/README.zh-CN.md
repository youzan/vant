# Space 间距

### 介绍

设置元素之间的间距。

### 引入

通过以下方式来全局注册组件，更多注册方式请参考[组件注册](#/zh-CN/advanced-usage#zu-jian-zhu-ce)。

```js
import { createApp } from 'vue';
import { Space } from 'vant';

const app = createApp();
app.use(Space);
```

## 代码演示

### 基础用法

Space 组件会在各个子组件之间设置一定的间距，默认间距为 `8px`。

```html
<van-space>
  <van-button type="primary">按钮</van-button>
  <van-button type="primary">按钮</van-button>
  <van-button type="primary">按钮</van-button>
  <van-button type="primary">按钮</van-button>
</van-space>
```

### 垂直排列

将 `direction` 属性设置为 `vertical`，可以设置垂直方向排列的间距。

```html
<van-space direction="vertical" fill>
  <van-button type="primary" block>按钮</van-button>
  <van-button type="primary" block>按钮</van-button>
  <van-button type="primary" block>按钮</van-button>
</van-space>
```

### 自定义间距

通过调整 `size` 的值来控制间距的大小。传入 `number` 类型时，会默认使用 `px` 单位；也可以传入 `string` 类型，比如 `2rem` 或 `5vw` 等带有单位的值。

```html
<!-- 20px -->
<van-space :size="20">
  <van-button type="primary">按钮</van-button>
  <van-button type="primary">按钮</van-button>
  <van-button type="primary">按钮</van-button>
</van-space>

<!-- 2rem -->
<van-space size="2rem">
  <van-button type="primary">按钮</van-button>
  <van-button type="primary">按钮</van-button>
  <van-button type="primary">按钮</van-button>
</van-space>
```

### 对齐方式

通过调整 `align` 的值来设置子元素的对齐方式, 可选值为 `start`, `center` ,`end` ,`baseline`，在水平模式下的默认值为 `center`。

```html
<van-radio-group
  v-model="align"
  direction="horizontal"
  style="margin-bottom: 16px"
>
  <van-radio name="start">start</van-radio>
  <van-radio name="center">center</van-radio>
  <van-radio name="end">end</van-radio>
  <van-radio name="baseline">baseline</van-radio>
</van-radio-group>

<van-space :align="align" style="padding: 16px; background: #f3f2f5">
  <van-button type="primary">{{ align }}</van-button>
  <div style="padding: 40px 20px; background: #fff">Block</div>
</van-space>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const align = ref('center');
    return { align };
  },
};
```

### 自动换行

在水平模式下, 通过 `wrap` 属性来控制子元素是否自动换行。

```html
<van-space wrap>
  <van-button type="primary" block>按钮</van-button>
  <van-button type="primary" block>按钮</van-button>
  <van-button type="primary" block>按钮</van-button>
  <van-button type="primary" block>按钮</van-button>
  <van-button type="primary" block>按钮</van-button>
  <van-button type="primary" block>按钮</van-button>
  <van-button type="primary" block>按钮</van-button>
  <van-button type="primary" block>按钮</van-button>
</van-space>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| direction | 间距方向 | _vertical \| horizontal_ | `horizontal` |
| size | 间距大小，如 `20px` `2em`，默认单位为 `px`，支持数组形式来分别设置横向和纵向间距 | _number \| string \| number[] \| string[]_ | `8px` |
| align | 设置子元素的对齐方式 | _start \| end \| center \| baseline_ | - |
| wrap | 是否自动换行，仅适用于水平方向排列 | _boolean_ | `false` |
| fill | 是否让 Space 变为一个块级元素，填充整个父元素 | _boolean_ | `false` |

### Slots

| 名称    | 说明         |
| ------- | ------------ |
| default | 间距组件内容 |

### 类型定义

组件导出以下类型定义：

```ts
import type { SpaceProps, SpaceSize, SpaceAlign } from 'vant';
```
