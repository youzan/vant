# NoticeBar 通知栏

### 引入

```js
import Vue from 'vue';
import { NoticeBar } from 'vant';

Vue.use(NoticeBar);
```

## 代码演示

### 基础用法

```html
<van-notice-bar text="通知内容" left-icon="volume-o" />
```

### 禁用滚动

文字内容多于一行时，可通过`scrollable`参数控制是否开启滚动

```html
<van-notice-bar :scrollable="false">
  通知内容
</van-notice-bar>
```

### 多行展示

禁用滚动时，可以设置`wrapable`来开启多行展示

```html
<van-notice-bar wrapable :scrollable="false">
  通知内容
</van-notice-bar>
```

### 通知栏模式

默认模式为空，支持`closeable`和`link`两种模式

```html
<!-- closeable 模式，在右侧显示关闭按钮 -->
<van-notice-bar mode="closeable">
  通知内容
</van-notice-bar>

<!-- link 模式，在右侧显示链接箭头 -->
<van-notice-bar mode="link">
  通知内容
</van-notice-bar>
```

### 自定义样式

```html
<van-notice-bar
  color="#1989fa"
  background="#ecf9ff"
  left-icon="info-o"
>
  通知内容
</van-notice-bar>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| mode | 通知栏模式，可选值为 `closeable` `link` | *string* | `''` |
| text | 通知文本内容 | *string* | `''` |
| color | 文本颜色 | *string* | `#f60` |
| background | 滚动条背景 | *string* | `#fff7cc` |
| left-icon | 左侧[图标名称](#/zh-CN/icon)或图片链接 | *string* | - |
| delay | 动画延迟时间 (s) | *number \| string* | `1` |
| speed | 滚动速率 (px/s) | *number \| string* | `50` |
| scrollable | 是否在长度溢出时滚动播放 | *boolean* | `true` |
| wrapable | 是否开启文本换行，只在禁用滚动时生效 | *boolean* | `false` |

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| click | 点击通知栏时触发 | *event: Event* |
| close | 关闭通知栏时触发 | *event: Event* |

### Slots

| 名称 | 内容 |
|------|------|
| default | 通知文本内容 |
| left-icon | 自定义左侧图标 |
| right-icon | 自定义右侧图标 |
