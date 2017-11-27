## Tabs 标签页

### 使用指南
``` javascript
import { Tab, Tabs } from 'vant';

Vue.component(Tab.name, Tab);
Vue.component(Tabs.name, Tabs);
```

### 代码演示

#### 基础用法

默认情况下启用第一个 tab，可以通过`active`属性激活对应特定索引的 tab

```html
<van-tabs :active="active">
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

默认情况下多于4个tab时，可以横向滚动tab。可以通过设置`swipeThreshold`这个阙值，多于这个阙值时，tab就会支持横向滚动。

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
    onClickDisabled() {
      Toast('Disabled!')
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

可以在`van-tabs`上绑定一个`click`事件，事件处理函数有一个参数，参数为对应`tab`在`tabs`中的索引。

```html
<van-tabs @click="handleTabClick">
  <van-tab v-for="index in 4" :title="'选项 ' + index">
    内容 {{ index }}
  </van-tab>
</van-tabs>
```

```javascript
export default {
  methods: {
    handleTabClick(index) {
      Toast(index);
    }
  }
};
```

### Tabs API

| 参数 | 说明 | 类型 | 默认值 | 可选 |
|-----------|-----------|-----------|-------------|-------------|
| type | Tab 样式类型 | `String` | `line` | `card` |
| active | 默认激活的 tab | `String` `Number` | `0` | - |
| duration | 切换 tab 的动画时间 | `Number` | `0.3` | - | - |
| swipeThreshold | 滚动阀值，设置 Tab 超过多少个可滚动 | `Number` | `4` | - | - |

### Tab API

| 参数 | 说明 | 类型 | 默认值 | 可选 |
|-----------|-----------|-----------|-------------|-------------|
| title | tab的标题 | `String` | - | - |
| disabled | 是否禁用这个tab | `Boolean` | `false` | - |

### Tabs Event

| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|
| click | 某个tab点击事件 | index：点击的`tab`的索引 |
| disabled | 某个tab禁用时点击事件 | index：点击的`tab`的索引 |

