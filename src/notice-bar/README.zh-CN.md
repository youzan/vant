# NoticeBar 通知栏

### 介绍

用于循环播放展示一组消息通知。

### 引入

```js
import { createApp } from 'vue';
import { NoticeBar } from 'vant';

const app = createApp();
app.use(NoticeBar);
```

## 代码演示

### 基础用法

通过 `text` 属性设置通知栏的内容，通过 `left-icon` 属性设置通知栏左侧的图标。

```html
<van-notice-bar
  left-icon="volume-o"
  text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。"
/>
```

### 滚动播放

通知栏的内容长度溢出时会自动开启滚动播放，通过 `scrollable` 属性可以控制该行为。

```html
<!-- 文字较短时，通过设置 scrollable 属性开启滚动播放 -->
<van-notice-bar scrollable text="技术是开发它的人的共同灵魂。" />

<!-- 文字较长时，通过禁用 scrollable 属性关闭滚动播放 -->
<van-notice-bar
  :scrollable="false"
  text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。"
/>
```

### 多行展示

文字较长时，可以通过设置 `wrapable` 属性来开启多行展示。

```html
<van-notice-bar
  wrapable
  :scrollable="false"
  text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。"
/>
```

### 通知栏模式

通知栏支持 `closeable` 和 `link` 两种模式。

```html
<!-- closeable 模式，在右侧显示关闭按钮 -->
<van-notice-bar mode="closeable">
  技术是开发它的人的共同灵魂。
</van-notice-bar>

<!-- link 模式，在右侧显示链接箭头 -->
<van-notice-bar mode="link">
  技术是开发它的人的共同灵魂。
</van-notice-bar>
```

### 自定义样式

通过 `color` 属性设置文本颜色，通过 `background` 属性设置背景色。

```html
<van-notice-bar color="#1989fa" background="#ecf9ff" left-icon="info-o">
  技术是开发它的人的共同灵魂。
</van-notice-bar>
```

### 垂直滚动

搭配 NoticeBar 和 Swipe 组件可以实现垂直滚动的效果。

```html
<van-notice-bar left-icon="volume-o" :scrollable="false">
  <van-swipe
    vertical
    class="notice-swipe"
    :autoplay="3000"
    :show-indicators="false"
  >
    <van-swipe-item>内容 1</van-swipe-item>
    <van-swipe-item>内容 2</van-swipe-item>
    <van-swipe-item>内容 3</van-swipe-item>
  </van-swipe>
</van-notice-bar>

<style>
  .notice-swipe {
    height: 40px;
    line-height: 40px;
  }
</style>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| mode | 通知栏模式，可选值为 `closeable` `link` | _string_ | `''` |
| text | 通知文本内容 | _string_ | `''` |
| color | 通知文本颜色 | _string_ | `#f60` |
| background | 滚动条背景 | _string_ | `#fff7cc` |
| left-icon | 左侧[图标名称](#/zh-CN/icon)或图片链接 | _string_ | - |
| delay | 动画延迟时间 (s) | _number \| string_ | `1` |
| speed | 滚动速率 (px/s) | _number \| string_ | `50` |
| scrollable | 是否开启滚动播放，内容长度溢出时默认开启 | _boolean_ | - |
| wrapable | 是否开启文本换行，只在禁用滚动时生效 | _boolean_ | `false` |

### Events

| 事件名          | 说明                         | 回调参数       |
| --------------- | ---------------------------- | -------------- |
| click           | 点击通知栏时触发             | _event: Event_ |
| close           | 关闭通知栏时触发             | _event: Event_ |
| replay `v2.6.2` | 每当滚动栏重新开始滚动时触发 | -              |

### Slots

| 名称       | 内容           |
| ---------- | -------------- |
| default    | 通知文本内容   |
| left-icon  | 自定义左侧图标 |
| right-icon | 自定义右侧图标 |
