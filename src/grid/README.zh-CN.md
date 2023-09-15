# Grid 宫格

### 介绍

宫格可以在水平方向上把页面分隔成等宽度的区块，用于展示内容或进行页面导航。

### 引入

```js
import Vue from 'vue';
import { Grid, GridItem } from 'vant';

Vue.use(Grid);
Vue.use(GridItem);
```

## 代码演示

### 基础用法

通过 `icon` 属性设置格子内的图标，`text` 属性设置文字内容。

```html
<van-grid>
  <van-grid-item icon="photo-o" text="文字" />
  <van-grid-item icon="photo-o" text="文字" />
  <van-grid-item icon="photo-o" text="文字" />
  <van-grid-item icon="photo-o" text="文字" />
</van-grid>
```

### 自定义列数

默认一行展示四个格子，可以通过 `column-num` 自定义列数。

```html
<van-grid :column-num="3">
  <van-grid-item v-for="value in 6" :key="value" icon="photo-o" text="文字" />
</van-grid>
```

### 自定义内容

通过插槽可以自定义格子展示的内容。

```html
<van-grid :border="false" :column-num="3">
  <van-grid-item>
    <van-image src="https://img01.yzcdn.cn/vant/apple-1.jpg" />
  </van-grid-item>
  <van-grid-item>
    <van-image src="https://img01.yzcdn.cn/vant/apple-2.jpg" />
  </van-grid-item>
  <van-grid-item>
    <van-image src="https://img01.yzcdn.cn/vant/apple-3.jpg" />
  </van-grid-item>
</van-grid>
```

### 正方形格子

设置 `square` 属性后，格子的高度会和宽度保持一致。

```html
<van-grid square>
  <van-grid-item v-for="value in 8" :key="value" icon="photo-o" text="文字" />
</van-grid>
```

### 格子间距

通过 `gutter` 属性设置格子之间的距离。

```html
<van-grid :gutter="10">
  <van-grid-item v-for="value in 8" :key="value" icon="photo-o" text="文字" />
</van-grid>
```

### 内容横排

将 `direction` 属性设置为 `horizontal`，可以让宫格的内容呈横向排列。

```html
<van-grid direction="horizontal" :column-num="2">
  <van-grid-item icon="photo-o" text="文字" />
  <van-grid-item icon="photo-o" text="文字" />
  <van-grid-item icon="photo-o" text="文字" />
</van-grid>
```

### 页面导航

通过 `to` 属性设置 `vue-router` 跳转链接，通过 `url` 属性设置 URL 跳转链接。

```html
<van-grid clickable :column-num="2">
  <van-grid-item icon="home-o" text="路由跳转" to="/" />
  <van-grid-item icon="search" text="URL 跳转" url="/vant/mobile.html" />
</van-grid>
```

### 徽标提示

设置 `dot` 属性后，会在图标右上角展示一个小红点。设置 `badge` 属性后，会在图标右上角展示相应的徽标。

```html
<van-grid :column-num="2">
  <van-grid-item icon="home-o" text="文字" dot />
  <van-grid-item icon="search" text="文字" badge="99+" />
</van-grid>
```

## API

### Grid Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| column-num | 列数 | _number \| string_ | `4` |
| icon-size | 图标大小，默认单位为`px` | _number \| string_ | `28px` |
| gutter | 格子之间的间距，默认单位为`px` | _number \| string_ | `0` |
| border | 是否显示边框 | _boolean_ | `true` |
| center | 是否将格子内容居中显示 | _boolean_ | `true` |
| square | 是否将格子固定为正方形 | _boolean_ | `false` |
| clickable | 是否开启格子点击反馈 | _boolean_ | `false` |
| direction `v2.8.2` | 格子内容排列的方向，可选值为 `horizontal` | _string_ | `vertical` |

### GridItem Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| text | 文字 | _string_ | - |
| icon | [图标名称](#/zh-CN/icon)或图片链接 | _string_ | - |
| icon-prefix `v2.5.3` | 图标类名前缀，同 Icon 组件的 [class-prefix 属性](#/zh-CN/icon#props) | _string_ | `van-icon` |
| dot | 是否显示图标右上角小红点 | _boolean_ | `false` |
| badge `v2.5.6` | 图标右上角徽标的内容 | _number \| string_ | - |
| info `2.2.1` | 图标右上角徽标的内容（已废弃，请使用 badge 属性） | _number \| string_ | - |
| url | 点击后跳转的链接地址 | _string_ | - |
| to | 点击后跳转的目标路由对象，同 vue-router 的 [to 属性](https://router.vuejs.org/zh/api/#to) | _string \| object_ | - |
| replace | 是否在跳转时替换当前页面历史 | _boolean_ | `false` |

### GridItem Events

| 事件名 | 说明           | 回调参数       |
| ------ | -------------- | -------------- |
| click  | 点击格子时触发 | _event: Event_ |

### GridItem Slots

| 名称    | 说明                 |
| ------- | -------------------- |
| default | 自定义宫格的所有内容 |
| icon    | 自定义图标           |
| text    | 自定义文字           |

### 样式变量

组件提供了下列 Less 变量，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/theme)。

| 名称                                | 默认值                    | 描述 |
| ----------------------------------- | ------------------------- | ---- |
| @grid-item-content-padding          | `@padding-md @padding-xs` | -    |
| @grid-item-content-background-color | `@white`                  | -    |
| @grid-item-content-active-color     | `@active-color`           | -    |
| @grid-item-icon-size                | `28px`                    | -    |
| @grid-item-text-color               | `@gray-7`                 | -    |
| @grid-item-text-font-size           | `@font-size-sm`           | -    |
