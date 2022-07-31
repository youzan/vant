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

间距组件的基本用法。

```html
<van-space>
  <van-button type="primary">按钮</van-button>
  <van-button type="primary">按钮</van-button>
  <van-button type="primary">按钮</van-button>
  <van-button type="primary">按钮</van-button>
  <van-button type="primary">按钮</van-button>
</van-space>
```

### 垂直排列

可以设置垂直方向排列的间距。

```html
<van-space direction="vertical" fill>
  <van-button type="primary" block>按钮</van-button>
  <van-button type="primary" block>按钮</van-button>
  <van-button type="primary" block>按钮</van-button>
</van-space>
```

### 尺寸

通过调整 `size` 的值来控制间距的大小。  
通过 `size` 控制组件大小, small, large, 分别对应 `8px`, `16px`的间距. 默认的间距大小为 `12px`。

```html
<van-radio-group v-model="size" direction="horizontal">
  <van-radio name="small">small</van-radio>
  <van-radio name="">默认</van-radio>
  <van-radio name="large">large</van-radio>
</van-radio-group>
<van-space>
  <van-button type="primary">按钮</van-button>
  <van-button type="primary">按钮</van-button>
  <van-button type="primary">按钮</van-button>
</van-space>
```

```js
import { SpaceSize } from '../Space';
const size = ref < SpaceSize > '';
```

### 对齐方式

通过调整 `align` 的值来设置对齐方式, 分别为 `start`, `center` ,`end` ,`baseline，在水平模式下默认为` center。

```html
<van-radio-group v-model="align" direction="horizontal">
  <van-radio name="start">start</van-radio>
  <van-radio name="center">center</van-radio>
  <van-radio name="end">end</van-radio>
  <van-radio name="baseline">baseline</van-radio>
</van-radio-group>
<br />
<van-space :align="align" style="padding: 10px;background: #f3f2f5;">
  <div>Space</div>
  <van-button type="primary">按钮</van-button>
  <div style="padding: 20px;border: 1px solid #eee">
    <div>标题</div>
    <div>内容</div>
  </div>
</van-space>
```

```js
import { SpaceAlign } from '../Space';
const align = ref < SpaceAlign > 'center';
```

### 自动换行

在水平模式下, 通过控制`wrap`来控制是否自动换行。

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
| align | 对齐方式 | _start \| end \| center \| baseline_ | - |
| size | 间距大小，如 20px 2em，默认单位为 px，支持数组形式，设置横向和纵向间距 | _number \| string \| number[] \| string[]_ | `8px` |
| wrap | 是否自动换行，仅适用于水平方向排列 | boolean | `false` |
| fill | 是否充满整行 | boolean | `false` |

### Slots

| 名称    | 说明         |
| ------- | ------------ |
| default | 间距组件内容 |

### 类型定义

组件导出以下类型定义：

```js
import type { SpaceProps, SpaceSize, SpaceAlign } from 'vant';
```
