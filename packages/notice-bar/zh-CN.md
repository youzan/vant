## NoticeBar 通告栏

### 使用指南
``` javascript
import { NoticeBar } from 'vant';

Vue.use(NoticeBar);
```

### 代码演示

#### 基础用法

```html
<van-notice-bar
  text="足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。"
  left-icon="volume-o"
/>
```

#### 通告栏模式

默认模式为空，支持`closeable`和`link`。

```html
<!-- closeable 模式，在右侧显示关闭按钮 -->
<van-notice-bar mode="closeable">
  足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。
</van-notice-bar>

<!-- link 模式，在右侧显示链接箭头 -->
<van-notice-bar mode="link">
  足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。
</van-notice-bar>
```

#### 禁用滚动

文字内容多于一行时，可通过`scrollable`参数控制是否开启滚动

```html
<van-notice-bar :scrollable="false">
  足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。
</van-notice-bar>
```

#### 文本换行

禁用滚动时，可以设置`wrapable`来开启文本换行

```html
<van-notice-bar wrapable :scrollable="false">
  足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。
</van-notice-bar>
```

### API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| mode | 通告栏模式，可选值为 `closeable` `link` | `String` | `''` | - |
| text | 通告文本内容 | `String` | `''` | - |
| delay | 动画延迟时间 (s) | `Number` | `1` | - |
| speed | 滚动速率 (px/s) | `Number` | `50` | - |
| scrollable | 是否在长度溢出时滚动播放 | `Boolean` | `true` | - |
| wrapable | 是否开启文本换行，只在禁用滚动时生效 | `Boolean` | `false` | 1.6.11 |
| left-icon | 左侧图标名称或图片链接，可选值见 Icon 组件 | `String` | - | - |
| color | 文本颜色 | `String` | `#f60` | - |
| background | 滚动条背景 | `String` | `#fff7cc` | - |

### Event

| 事件名 | 说明 | 参数 |
|------|------|------|
| click | 点击时触发 | - |
| close | 关闭时触发 | - |

### Slot

| 名称 | 内容 |
|------|------|
| - | 通告文本内容