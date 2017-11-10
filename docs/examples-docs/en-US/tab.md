<script>
export default {
  data() {
    return {
      active: 2
    };
  },
  mounted() {
    setTimeout(() => {
      this.active = 3;
    }, 1000);
  },
  methods: {
    popalert() {
      alert('haha')
    },

    handleTabClick(index) {
      alert(index);
    }
  }
};
</script>

## Tab

### Install
``` javascript
import { Tab, Tabs } from 'vant';

Vue.component(Tab.name, Tab);
Vue.component(Tabs.name, Tabs);
```

### Usage

#### Basic Usage

默认情况下是启用第一个`tab`。

:::demo Basic Usage
```html
<van-tabs>
  <van-tab title="选项一">内容一</van-tab>
  <van-tab title="选项二">内容二</van-tab>
  <van-tab title="选项三">内容三</van-tab>
  <van-tab title="选项四">内容四</van-tab>
</van-tabs>
```
:::

#### active特定tab

可以在`van-tabs`上设置`active`为对应`tab`的索引（从0开始，即0代表第一个）即可激活对应`tab`，默认为0。

:::demo Basic Usage
```html
<van-tabs :active="active">
  <van-tab title="选项一">内容一</van-tab>
  <van-tab title="选项二">内容二</van-tab>
  <van-tab title="选项三">内容三</van-tab>
  <van-tab title="选项四">内容四</van-tab>
</van-tabs>
```
:::

#### 设置切换tab的动画时间

通过设置`duration`来指定时间，默认为0.3s，只接受`Number`类型参数。

:::demo 设置切换tab的动画时间
```html
<van-tabs :duration="0.6">
  <van-tab title="选项一">内容一</van-tab>
  <van-tab title="选项二">内容二</van-tab>
  <van-tab title="选项三">内容三</van-tab>
</van-tabs>
```
:::

#### 横向滚动tab

默认情况下多于4个tab时，可以横向滚动tab。可以通过设置`swipeThreshold`这个阙值，多于这个阙值时，tab就会支持横向滚动。

:::demo 横向滚动tab
```html
<van-tabs>
  <van-tab title="选项一">内容一</van-tab>
  <van-tab title="选项二">内容二</van-tab>
  <van-tab title="选项三">内容三</van-tab>
  <van-tab title="选项四">内容四</van-tab>
  <van-tab title="选项五">内容五</van-tab>
  <van-tab title="选项六">内容六</van-tab>
  <van-tab title="选项七">内容七</van-tab>
  <van-tab title="选项八">内容八</van-tab>
</van-tabs>
```
:::

#### 禁用tab

在对应的`van-tab`上设置`disabled`属性即可，如果需要监听禁用事件，可以监听`disabled`事件。

:::demo 禁用tab
```html
<van-tabs>
  <van-tab title="选项一">内容一</van-tab>
  <van-tab title="选项二" disabled @disabled="popalert">内容二</van-tab>
  <van-tab title="选项三">内容三</van-tab>
  <van-tab title="选项四">内容四</van-tab>
</van-tabs>
```

```javascript
export default {
  methods: {
    popalert() {
      alert('haha')
    }
  }
};
```
:::

#### card样式

`Tabs`目前有两种样式：`line`和`card`，默认为`line`样式，也就上面基础用法中的样式，你可以在`van-tabs`上设置`type`为`card`改为card样式。

:::demo card样式
```html
<van-tabs type="card">
  <van-tab title="选项一">内容一</van-tab>
  <van-tab title="选项二">内容二</van-tab>
  <van-tab title="选项三">内容三</van-tab>
  <van-tab title="选项四">内容四</van-tab>
</van-tabs>
```
:::
<style>
  .custom-tabwrap .van-tab-active {
    color: #20a0ff;
  }
  .custom-tabwrap .van-tabs-nav-bar {
    background: #20a0ff;
  }
  .custom-pane {
    text-align: center;
    height: 50px;
    line-height: 50px;
  }
</style>

#### 自定义样式

可以在`van-tabs`上设置对应的`class`，从而自定义某些样式。

:::demo 自定义样式
```html
<van-tabs active="2" class="custom-tabwrap">
    <van-tab title="选项一" class="custom-pane">内容一</van-tab>
    <van-tab title="选项二" class="custom-pane">内容二</van-tab>
    <van-tab title="选项三" class="custom-pane">内容三</van-tab>
    <van-tab title="选项四" class="custom-pane">内容四</van-tab>
</van-tabs>

<style>
  .custom-tabwrap .van-tab-active {
    color: #20a0ff;
  }
  .custom-tabwrap .van-tabs-nav-bar {
    background: #20a0ff;
  }
  .custom-pane {
    text-align: center;
    height: 50px;
    line-height: 50px;
  }
</style>
```
:::

#### click事件

可以在`van-tabs`上绑定一个`click`事件，事件处理函数有一个参数，参数为对应`tab`在`tabs`中的索引。

:::demo click事件
```html
<van-tabs @click="handleTabClick">
  <van-tab title="选项一">内容一</van-tab>
  <van-tab title="选项二">内容二</van-tab>
  <van-tab title="选项三">内容三</van-tab>
  <van-tab title="选项四">内容四</van-tab>
</van-tabs>
```

```javascript
export default {
  methods: {
    handleTabClick(index) {
      alert(index);
    }
  }
};
```
:::

### van-tabs API

| Attribute | Description | Type | Default | 可选 |
|-----------|-----------|-----------|-------------|-------------|
| classtype | 两种UI | `String` | `line` |     `line`, `card` |
| active | 默认激活的tab | `String`, `Number` | `0` | - |
| navclass | tabs的内部nav上的自定义classname | `String` | - | - |
| duration | 切换tab的动画时间 | `Number` | `0.3` | - | - |


### van-tab API

| Attribute | Description | Type | Default | 可选 |
|-----------|-----------|-----------|-------------|-------------|
| title | tab的标题 | `String` | - | - |
| disabled | 是否禁用这个tab | `Boolean` | `false` | - |

### van-tabs Event

| Event | Description | Attribute |
|-----------|-----------|-----------|
| click | 某个tab点击事件 | index：点击的`tab`的索引 |
| disabled | 某个tab禁用时点击事件 | index：点击的`tab`的索引 |

