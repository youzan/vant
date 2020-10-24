# Image 图片

### 介绍

增强版的 img 标签，提供多种图片填充模式，支持图片懒加载、加载中提示、加载失败提示。

### 引入

```js
import { createApp } from 'vue';
import { Image as VanImage } from 'vant';

const app = createApp();
app.use(VanImage);
```

## 代码演示

### 基础用法

基础用法与原生 `img` 标签一致，可以设置 `src`、`width`、`height`、`alt` 等原生属性。

```html
<van-image width="100" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
```

### 填充模式

通过 `fit` 属性可以设置图片填充模式，可选值见下方表格。

```html
<van-image
  width="10rem"
  height="10rem"
  fit="contain"
  src="https://img.yzcdn.cn/vant/cat.jpeg"
/>
```

### 圆形图片

通过 `round` 属性可以设置图片变圆，注意当图片宽高不相等且 `fit` 为 `contain` 或 `scale-down` 时，将无法填充一个完整的圆形。

```html
<van-image
  round
  width="10rem"
  height="10rem"
  src="https://img.yzcdn.cn/vant/cat.jpeg"
/>
```

### 图片懒加载

设置 `lazy-load` 属性来开启图片懒加载，需要搭配 [Lazyload](#/zh-CN/lazyload) 组件使用。

```html
<van-image
  width="100"
  height="100"
  lazy-load
  src="https://img.yzcdn.cn/vant/cat.jpeg"
/>
```

```js
import { createApp } from 'vue';
import { Lazyload } from 'vant';

const app = createApp();
app.use(Lazyload);
```

### 加载中提示

`Image` 组件提供了默认的加载中提示，支持通过 `loading` 插槽自定义内容。

```html
<van-image src="https://img.yzcdn.cn/vant/cat.jpeg">
  <template v-slot:loading>
    <van-loading type="spinner" size="20" />
  </template>
</van-image>
```

### 加载失败提示

`Image` 组件提供了默认的加载失败提示，支持通过 `error` 插槽自定义内容。

```html
<van-image src="https://img.yzcdn.cn/vant/cat.jpeg">
  <template v-slot:error>加载失败</template>
</van-image>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| src | 图片链接 | _string_ | - |
| fit | 图片填充模式 | _string_ | `fill` |
| alt | 替代文本 | _string_ | - |
| width | 宽度，默认单位为`px` | _number \| string_ | - |
| height | 高度，默认单位为`px` | _number \| string_ | - |
| radius | 圆角大小，默认单位为`px` | _number \| string_ | `0` |
| round | 是否显示为圆形 | _boolean_ | `false` |
| lazy-load | 是否开启图片懒加载，须配合 [Lazyload](#/zh-CN/lazyload) 组件使用 | _boolean_ | `false` |
| show-error | 是否展示图片加载失败提示 | _boolean_ | `true` |
| show-loading | 是否展示图片加载中提示 | _boolean_ | `true` |
| error-icon `v2.4.2` | 失败时提示的[图标名称](#/zh-CN/icon)或图片链接 | _string_ | `photo-fail` |
| loading-icon `v2.4.2` | 加载时提示的[图标名称](#/zh-CN/icon)或图片链接 | _string_ | `photo` |

### 图片填充模式 

| 名称       | 含义                                                   |
| ---------- | ------------------------------------------------------ |
| contain    | 保持宽高缩放图片，使图片的长边能完全显示出来           |
| cover      | 保持宽高缩放图片，使图片的短边能完全显示出来，裁剪长边 |
| fill       | 拉伸图片，使图片填满元素                               |
| none       | 保持图片原有尺寸                                       |
| scale-down | 取 `none` 或 `contain` 中较小的一个                    |

### Events

| 事件名 | 说明               | 回调参数       |
| ------ | ------------------ | -------------- |
| click  | 点击图片时触发     | _event: Event_ |
| load   | 图片加载完毕时触发 | -              |
| error  | 图片加载失败时触发 | -              |

### Slots

| 名称             | 说明                       |
| ---------------- | -------------------------- |
| default `v2.9.0` | 自定义图片下方的内容       |
| loading          | 自定义加载中的提示内容     |
| error            | 自定义加载失败时的提示内容 |

## 常见问题

### 如何引用本地图片？

在 .vue 文件中通过相对路径引用本地图片时，需要在图片的链接外包上一层 `require()`，将图片 URL 转换为 webpack 模块请求，并结合 [file-loader](https://github.com/webpack-contrib/file-loader) 或者 [url-loader](https://github.com/webpack-contrib/url-loader) 进行处理。

```html
<!-- 错误写法 -->
<van-image src="./image.png" />

<!-- 正确写法 -->
<van-image :src="require('./image.png')" />
```

> 对此更详细的解释可以参考 vue-loader 的[处理资源路径](https://vue-loader.vuejs.org/zh/guide/asset-url.html)章节。

### 使用 image 标签无法渲染？

使用 Image 组件时，可能会遇到将 \<image> 作为标签名时无法渲染的问题，比如下面的写法：

```html
<template>
  <image src="xxx" />
</template>

<script>
import { Image } from 'vant';

export default {
  components: {
    Image,
  },
};
<script>
```

这是因为 \<image> 标签是原生的 SVG 标签，Vue 不允许将原生标签名注册为组件名，使用 \<van-image> 即可规避这个问题。
