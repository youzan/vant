# Watermark 水印

### 介绍

页面上添加特定的文字或图案，可用于防止信息盗用

### 引入

通过以下方式来全局注册组件，更多注册方式请参考[组件注册](#/zh-CN/advanced-usage#zu-jian-zhu-ce)。

```js
import { createApp } from 'vue';
import { Watermark } from 'vant';

const app = createApp();
app.use(Watermark);
```

## 代码演示

### 基础用法

```html
<!-- 文字水印 -->
<van-watermark content="Vant" />

<!-- 图片水印 -->
<van-watermark image="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
```

### 自定义间隔

通过 `gapX` `gapY` 属性来控制重复水印之间的间隔。

```html
<van-watermark
  image="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
  :gap-x="20"
  :gap-y="10"
/>
```

### 自定义倾斜角度

通过 `rotate` 属性来控制水印的倾斜角度，默认值为`-22`。

```html
<van-watermark
  image="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
  rotate="22"
/>
```

### 显示范围

通过 `fullPage` 属性来控制水印的显示范围。

```html
<van-watermark
  :full-page="true"
  content="vant watermark"
  font-color="rgba(0, 0, 0, 0.15)"
>
</van-watermark>
```

### HTML 水印

通过默认插槽可以直接传入 HTML，HTML 样式仅支持行内样式同时不支持传入自闭合标签。

```html
<van-watermark :width="150">
  <div style="background: linear-gradient(45deg, #000 0, #000 50%, #fff 50%)">
    <p style="mix-blend-mode: difference; color: #fff">Vant watermark</p>
  </div>
</van-watermark>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| width | 水印宽度 | _number_ | 100 |
| height | 水印高度 | _number_ | 100 |
| zIndex | 水印的 z-index | _number_ | 1 |
| content | 文字水印的内容 | _string_ | - |
| image | 图片水印的内容，如果与 content 同时传入，优先使用图片水印 | _string_ | - |
| fullPage | 水印是否全屏显示 | _boolean_ | false |
| gapX | 水印水平间隔 | _number_ | 0 |
| gapY | 水印垂直间隔 | _number_ | 0 |
| fontColor | 文字水印的颜色 | _string_ | #323233 |

### Slots

| 名称 | 说明 |
| --- | --- |
| default | HTML 水印的内容，仅支持行内样式同时不支持传入自闭合标签，存在 content 或 image 时此插槽无效 |

### 类型定义

组件导出以下类型定义：

```ts
import type { WaterProps } from 'vant';
```
