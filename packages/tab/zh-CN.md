## Tab 标签页

### 使用指南
``` javascript
import { Tab, Tabs } from 'vant';

Vue.use(Tab).use(Tabs);
```

### 代码演示

#### 基础用法

默认情况下启用第一个标签，可以通过`v-model`绑定当前激活的标签索引

```html
<van-tabs v-model="active">
  <van-tab title="标签 1">内容 1</van-tab>
  <van-tab title="标签 2">内容 2</van-tab>
  <van-tab title="标签 3">内容 3</van-tab>
  <van-tab title="标签 4">内容 4</van-tab>
</van-tabs>
```

```js
export default {
  data() {
    return {
      active: 2
    };
  }
}
```

#### 横向滚动

多于 4 个标签时，Tab 可以横向滚动

```html
<van-tabs>
  <van-tab v-for="index in 8" :title="'选项 ' + index">
    内容 {{ index }}
  </van-tab>
</van-tabs>
```

#### 禁用标签

设置`disabled`属性即可禁用标签。如果需要监听禁用标签的点击事件，可以在`van-tabs`上监听`disabled`事件

```html
<van-tabs @disabled="onClickDisabled">
  <van-tab v-for="index in 4" :title="'选项 ' + index" :disabled="index === 2">
    内容 {{ index }}
  </van-tab>
</van-tabs>
```

```javascript
export default {
  methods: {
    onClickDisabled(index, title) {
      this.$toast(title + '已被禁用');
    }
  }
};
```

#### 样式风格

`Tab`支持两种样式风格：`line`和`card`，默认为`line`样式，可以通过`type`属性修改样式风格

```html
<van-tabs type="card">
  <van-tab v-for="index in 4" :title="'选项 ' + index">
    内容 {{ index }}
  </van-tab>
</van-tabs>
```

#### 点击事件

可以在`van-tabs`上绑定`click`事件，事件传参为标签对应的索引和标题

```html
<van-tabs @click="onClick">
  <van-tab v-for="index in 4" :title="'选项 ' + index">
    内容 {{ index }}
  </van-tab>
</van-tabs>
```

```javascript
export default {
  methods: {
    onClick(index, title) {
      this.$toast(title);
    }
  }
};
```

#### 粘性布局

通过`sticky`属性可以开启粘性布局，粘性布局下，当 Tab 滚动到顶部时会自动吸顶

```html
<van-tabs v-model="active" sticky>
  <van-tab v-for="index in 4" :title="'选项 ' + index">
    内容 {{ index }}
  </van-tab>
</van-tabs>
```

#### 自定义标签

通过 title 插槽可以自定义标签内容

```html
<van-tabs v-model="active">
  <van-tab v-for="index in 2">
    <div slot="title">
      <van-icon name="more-o" />选项
    </div>
    内容 {{ index }}
  </van-tab>
</van-tabs>
```

#### 滑动切换

通过`swipeable`属性可以开启滑动切换tab

```html
<van-tabs v-model="active" swipeable>
  <van-tab v-for="index in 4" :title="'选项 ' + index">
    内容 {{ index }}
  </van-tab>
</van-tabs>
```

### Tabs API

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| v-model | 当前激活标签的索引 | `String` `Number` | `0` |
| color | 标签颜色 | `String` | `#f44` |
| type | 样式类型，可选值为`card` | `String` | `line` |
| duration | 动画时间 (单位秒) | `Number` | `0.2` |
| line-width | 底部条宽度 (px) | `Number` | 与当前标签等宽 |
| swipe-threshold | 滚动阈值，设置标签数量超过多少个可滚动 | `Number` | `4` |
| sticky | 是否使用粘性定位布局 | `Boolean` | `false` |
| offset-top | 粘性定位布局下与顶部的最小距离 (px) | `Number` | `0` |
| swipeable | 是否可以滑动内容切换 | `Boolean` | `false` |

### Tab API

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| title | 标题 | `String` | - |
| disabled | 是否禁用标签 | `Boolean` | `false` |

### Tab Slot

| 名称 | 说明 |
|-----------|-----------|
| - | 标签页内容 |
| title | 自定义标签 |

### Tabs Event

| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|
| click | 点击标签时触发 | index：标签索引，title：标题 |
| change | 当前激活的标签改变时触发 | index：标签索引，title：标题 |
| disabled | 点击被禁用的标签时触发 | index：标签索引，title：标题 |
| scroll | 滚动时触发 | Object: { scrollTop: 距离顶部位置, isFixed: 是否吸顶 } |

### 更新日志

| 版本 | 类型 | 内容 |
|-----------|-----------|-----------|
| 1.3.2 | improvement | 优化点击反馈
| 1.3.1 | bugfix | 修复使用 card 主题时 color 属性不生效的问题
| 1.3.0 | feature | 新增 scroll 事件
| 1.3.0 | bugfix | 修复能通过手势滑动至禁用标签的问题
| 1.2.1 | bugfix | 修复使用 color 属性时下划线样式错误的问题
| 1.2.0 | feature | 新增 color 属性
| 1.1.15 | feature | 新增 offset-top 属性
| 1.1.14 | feature | 新增 change 事件
| 1.1.14 | bugfix | 修复路由切换时标签位置错误的问题
| 1.1.14 | bugfix | 修复 sticky 属性在局部滚动元素下无法生效的问题
| 1.1.12 | bugfix | 修复同时进行插入和删除时顺序错误的问题
| 1.1.11 | improvement | 更新 card 风格样式
| 1.1.11 | bugfix | 修复动态渲染时顺序错误的问题
| 1.1.9 | bugfix | 修复屏幕尺寸变化时未重新渲染的问题
| 1.1.8 | bugfix | 修复标题长度变化时底部条未重新渲染的问题
| 1.1.6 | bugfix | 修复 title 插槽渲染无法更新的问题
| 1.1.2 | bugfix | 修复初始化时的渲染问题
| 1.1.1 | feature | 新增 line-width 属性
| 1.0.6 | feature | 支持 v-model 绑定当前 active 标签
| 1.0.3 | improvement | 布局方式由 table 升级为 flex-box
| 1.0.3 | feature | click 事件回调新增 title 参数
| 1.0.2 | bugfix | 修复内容无法点击的问题
| 1.0.0 | feature | 支持通过滑动手势进行切换
