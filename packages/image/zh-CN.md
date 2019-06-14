# Image 图片

### 介绍

增强版的 img 标签，提供多种图片填充模式，支持图片懒加载、加载中提示、加载失败提示

### 引入

``` javascript
import { Image } from 'vant';

Vue.use(Image);
```

## 代码演示

### 基础用法

基础用法与原生`img`标签一致，可以设置`src`、`width`、`height`、`alt`等原生属性

```html
<van-image
  width="100"
  height="100"
  src="https://img.yzcdn.cn/vant/cat.jpeg"
/>
```

### 填充模式

通过`fit`属性可以设置图片填充模式，可选值见下方表格

```html
<van-image
  width="10rem"
  height="10rem"
  fit="contain"
  src="https://img.yzcdn.cn/vant/cat.jpeg"
/>
```

### 图片懒加载

设置`lazy-load`属性来开启图片懒加载，需要搭配 [Lazyload](#/zh-CN/lazyload) 组件使用

```html
<van-image
  width="100"
  height="100"
  lazy-load
  src="https://img.yzcdn.cn/vant/cat.jpeg"
/>
```

### 加载中提示

`Image`组件提供了默认的加载中提示，支持通过`loading`插槽自定义内容

```html
<van-image src="https://img.yzcdn.cn/vant/cat.jpeg">
  <template v-slot:loading>
    <van-loading type="spinner" size="20" />
  </template>
</van-image>
```

### 加载失败提示

`Image`组件提供了默认的加载失败提示，支持通过`error`插槽自定义内容

```html
<van-image src="https://img.yzcdn.cn/vant/cat.jpeg">
  <template v-slot:error>加载失败</template>
</van-image>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| src | 图片链接 | `String` | - | - |
| fit | 图片填充模式 | `String` | `fill` | - |
| alt | 替代文本 | `String` | - | - |
| width | 宽度，默认单位为 px | `String | Number` | - | - |
| height | 高度，默认单位为 px | `String | Number` | - | - |
| lazy-load | 是否开启图片懒加载，须配合 [Lazyload](#/zh-CN/lazyload) 组件使用 | `Boolean` | `false` | - |

### 图片填充模式

| 名称 | 含义 |
|------|------|
| contain | 保持宽高缩放图片，使图片的长边能完全显示出来 |
| cover | 保持宽高缩放图片，使图片的短边能完全显示出来，裁剪长边 |
| fill | 拉伸图片，使图片填满元素 |
| none | 保持图片原有尺寸 |
| scale-down | 取`none`或`contain`中较小的一个 |

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| click | 点击图片时触发 | event: Event |
| load | 图片加载完毕时触发 | - |
| error | 图片加载失败时触发 | - |

### Slots

| 名称 | 说明 |
|------|------|
| loading | 自定义加载中的提示内容 |
| error | 自定义加载失败时的提示内容 |
