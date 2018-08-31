## Tab 标签页

### 使用指南
``` javascript
import { Tab, Tabs } from 'vant';

Vue.use(Tab).use(Tabs);
```

### 代码演示

#### 基础用法

默认情况下启用第一个 tab，可以通过`v-model`绑定当前激活的标签索引

```html
<van-tabs v-model="active">
  <van-tab v-for="index in 4" :title="'选项 ' + index">
    内容 {{ index }}
  </van-tab>
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

默认情况下多于4个tab时，可以横向滚动tab。可以通过设置`swipe-threshold`这个阈值，多于这个阈值时，tab就会支持横向滚动。

```html
<van-tabs>
  <van-tab v-for="index in 8" :title="'选项 ' + index">
    内容 {{ index }}
  </van-tab>
</van-tabs>
```

#### 禁用标签

在对应的`van-tab`上设置`disabled`属性即可。如果需要监听禁用事件，可以在`van-tabs`上监听`disabled`事件。

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

`Tabs`目前有两种样式：`line`和`card`，默认为`line`样式，也就上面基础用法中的样式，你可以在`van-tabs`上设置`type`为`card`改为card样式。

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
通过 title slot 可以自定义标签内容

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
| type | 样式类型，可选值为 `line` `card` | `String` | `line` |
| duration | 切换 tab 的动画时间 | `Number` | `0.2` |
| line-width | 底部条宽度 (px) | `Number` | 与当前标签等宽 |
| swipe-threshold | 滚动阈值，设置 Tab 超过多少个可滚动 | `Number` | `4` |
| sticky | 是否使用粘性定位布局 | `Boolean` | `false` |
| offset-top | 粘性定位布局下与顶部的最小距离 (px) | `Number` | `0` |
| swipeable | 是否可以滑动内容切换 | `Boolean` | `false` |
| color | 设置 tab 标题的颜色 | `String` | - |

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
| scroll | 滚动时触发 | e：滚动参数 |
