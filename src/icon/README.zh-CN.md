# Icon 图标

### 介绍

基于字体的图标集，可以通过 Icon 组件使用，也可以在其他组件中通过 `icon` 属性引用。

### 引入

```js
import Vue from 'vue';
import { Icon } from 'vant';

Vue.use(Icon);
```

## 代码演示

### 基础用法

`Icon` 的 `name` 属性支持传入图标名称或图片链接，所有可用的图标名称见右侧示例。

```html
<van-icon name="chat-o" />
<van-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" />
```

### 徽标提示

设置 `dot` 属性后，会在图标右上角展示一个小红点；设置 `badge` 属性后，会在图标右上角展示相应的徽标。

```html
<van-icon name="chat-o" dot />
<van-icon name="chat-o" badge="9" />
<van-icon name="chat-o" badge="99+" />
```

### 图标颜色

`Icon` 的 `color` 属性用来设置图标的颜色。

```html
<van-icon name="cart-o" color="#1989fa" />
<van-icon name="fire-o" color="#ee0a24" />
```

### 图标大小

`Icon` 的 `size` 属性用来设置图标的尺寸大小，默认单位为 `px`。

```html
<van-icon name="chat-o" size="40" /> <van-icon name="chat-o" size="3rem" />
```

### 使用本地字体文件

Icon 组件默认引用 CDN 提供的字体文件，并通过网络下载。如果需要在项目中使用本地字体文件，请引入下面的 CSS 文件，并在项目中配置 `url-loader`。

```js
import 'vant/lib/icon/local.css';
```

> Tips: 从 2.10.13 版本开始，Vant 会默认使用 woff2 格式的本地字体文件，只有在不支持 woff2 字体的低端浏览器上才会加载 CDN 的网络图标。

### 自定义图标

如果需要在现有 Icon 的基础上使用更多图标，可以引入第三方 iconfont 对应的字体文件和 CSS 文件，之后就可以在 Icon 组件中直接使用。

```css
/* 引入第三方或自定义的字体图标样式 */
@font-face {
  font-family: 'my-icon';
  src: url('./my-icon.ttf') format('truetype');
}

.my-icon {
  font-family: 'my-icon';
}

.my-icon-extra::before {
  content: '\e626';
}
```

```html
<!-- 通过 class-prefix 指定类名为 my-icon -->
<van-icon class-prefix="my-icon" name="extra" />
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 图标名称或图片链接 | _string_ | - |
| dot | 是否显示图标右上角小红点 | _boolean_ | `false` |
| badge `v2.5.6` | 图标右上角徽标的内容 | _number \| string_ | - |
| info | 图标右上角徽标的内容（已废弃，请使用 badge 属性） | _number \| string_ | - |
| color | 图标颜色 | _string_ | `inherit` |
| size | 图标大小，如 `20px` `2em`，默认单位为`px` | _number \| string_ | `inherit` |
| class-prefix | 类名前缀，用于使用自定义图标 | _string_ | `van-icon` |
| tag | HTML 标签 | _string_ | `i` |

### Events

| 事件名 | 说明           | 回调参数       |
| ------ | -------------- | -------------- |
| click  | 点击图标时触发 | _event: Event_ |
