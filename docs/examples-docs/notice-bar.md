<style>
.demo-notice-bar {
  .van-notice-bar:not(:first-of-type) {
    margin-top: 15px;
  }
}
</style>

## NoticeBar 通告栏

### 使用指南
``` javascript
import { NoticeBar } from 'vant';

Vue.component(NoticeBar.name, NoticeBar);
```

### 代码演示

#### 基础用法

:::demo 基础用法
```html
<van-notice-bar text="足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。">
```
:::

#### 禁用滚动
文字内容多于一行时，可通过`scrollable`参数控制是否开启滚动

:::demo 禁用滚动
```html
<van-notice-bar :scrollable="false">
  足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。
</van-notice-bar>
```
:::

#### 通告栏模式
默认模式为空，支持`closeable`和`link`。

:::demo 通告栏模式
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
:::

### API

| 参数       | 说明      | 类型       | 默认值       | 可选值       |
|-----------|-----------|-----------|-------------|-------------|
| mode | 通告栏模式 | String | `''` | `closeable` `link` |
| delay | 动画延迟时间，单位秒 | Number | `1` | |
| scrollable | 是否滚动 | Boolean | `true` | |
| speed | 滚动速率，单位px | Number | `40` | |

### Event

| 事件名       | 说明      | 参数       |
|-----------|-----------|-----------|
| click | 点击事件回调 | - |
