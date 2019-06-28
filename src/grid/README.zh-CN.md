# Grid 宫格

### 介绍

宫格可以在水平方向上把页面分隔成等宽度的区块，用于展示内容或进行页面导航

### 引入

``` javascript
import { Grid, GridItem } from 'vant';

Vue.use(Grid).use(GridItem);
```

## 代码演示

### 基本用法

通过`icon`属性设置格子内的图标，`text`属性设置文字内容

```html
<van-grid>
  <van-grid-item
    v-for="value in 4"
    :key="value"
    icon="photo-o"
    text="文字"
  />
</van-grid>
```

### 自定义列数

默认一行展示四个格子，可以通过`column-num`自定义列数

```html
<van-grid :column-num="3">
  <van-grid-item
    v-for="value in 6"
    :key="value"
    icon="photo-o"
    text="文字"
  />
</van-grid>
```

### 自定义内容

通过插槽可以自定义格子展示的内容

```html
<van-grid :border="false" :column-num="3">
  <van-grid-item>
    <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
  </van-grid-item>
  <van-grid-item>
    <van-image src="https://img.yzcdn.cn/vant/apple-2.jpg" />
  </van-grid-item>
  <van-grid-item>
    <van-image src="https://img.yzcdn.cn/vant/apple-3.jpg" />
  </van-grid-item>
</van-grid>
```

### 正方形格子

设置`square`属性后，格子的高度会和宽度保持一致

```html
<van-grid square>
  <van-grid-item
    v-for="value in 8"
    :key="value"
    icon="photo-o"
    text="文字"
  />
</van-grid>
```

### 格子间距

通过`gutter`属性设置格子之间的距离

```html
<van-grid :gutter="10">
  <van-grid-item
    v-for="value in 8"
    :key="value"
    icon="photo-o"
    text="文字"
  />
</van-grid>
```

### 页面导航

通过`to`属性设置`vue-router`跳转链接，通过`url`属性设置 URL 跳转链接

```html
<van-grid clickable :column-num="2">
  <van-grid-item
    icon="home-o"
    text="路由跳转"
    to="/"
  />
  <van-grid-item
    icon="search"
    text="URL 跳转"
    url="https://www.baidu.com"
  />
</van-grid>
```

## API

### Grid Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| column-num | 列数 | `Number` | `4` | 2.0.4 |
| gutter | 格子之间的间距，默认单位为`px` | `String | Number` | `0` | - |
| border | 是否显示边框 | `Boolean` | `true` | - |
| center | 是否将格子内容居中显示 | `Boolean` | `true` | - |
| square | 是否将格子固定为正方形 | `Boolean` | `false` | - |
| clickable | 是否开启格子点击反馈 | `Boolean` | `false` | - |

### GridItem Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| text | 文字 | `String` | - | - |
| icon | 图标名称或图片链接，可选值见 Icon 组件 | `String` | - | - |
| url | 跳转链接 | `String` | - | - |
| to | 路由跳转对象，同 vue-router 的 to 属性 | `String | Object` | - | - |
| replace | 跳转时是否替换当前页面历史 | `Boolean` | `false` | - |

### GridItem Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| click | 点击格子时触发 | event: Event |

### GridItem Slots

| 名称 | 说明 |
|------|------|
| default | 自定义宫格的所有内容 |
| icon | 自定义图标 |
| text | 自定义文字 |
