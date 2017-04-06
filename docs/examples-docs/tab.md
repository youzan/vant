<style>
@component-namespace demo {
  @b tab {
    .zan-tab__pane {
      background-color: #fff;
      padding: 20px;
    }

    .zan-tabs--card .zan-tab__pane {
      background-color: transparent;
    }

    .custom-tabwrap .zan-tab-active {
      color: #20a0ff;
    }
    .custom-tabwrap .zan-tabs-nav-bar {
      background: #20a0ff;
    }
    .custom-pane {
      text-align: center;
      height: 50px;
      line-height: 50px;
    }
  }
}
</style>

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

## Tab 标签

### 使用指南

如果你已经按照[快速上手](/vue/component/quickstart)中引入了整个`ZanUI`，以下**组件注册**就可以忽略了，因为你已经全局注册了`ZanUI`中的全部组件。

#### 全局注册

你可以在全局注册`Tab`组件，比如页面的主文件（`index.js`，`main.js`），这样页面任何地方都可以直接使用`Tab`组件了：

```js
import Vue from 'vue';
import { Tab, Tabs } from '@youzan/zanui-vue';
import '@youzan/zanui-vue/lib/zanui-css/tab.css';

Vue.component(Tab.name, Tab);
Vue.component(Tabs.name, Tabs);
```

#### 局部注册

如果你只是想在某个组件中使用，你可以在对应组件中注册`Tab`组件，这样只能在你注册的组件中使用`Tab`：

```js
import { Tab, Tabs } from '@youzan/zanui-vue';

export default {
  components: {
    'zan-tab': Tab,
    'zan-tabs': Tabs
  }
};
```

### 代码演示

#### 基础用法

默认情况下是启用第一个`tab`。

:::demo 基础用法
```html
<zan-tabs>
  <zan-tab title="选项一">内容一</zan-tab>
  <zan-tab title="选项二">内容二</zan-tab>
  <zan-tab title="选项三">内容三</zan-tab>
  <zan-tab title="选项四">内容四</zan-tab>
  <zan-tab title="选项五">内容五</zan-tab>
</zan-tabs>
```
:::

#### active特定tab

可以在`zan-tabs`上设置`active`为对应`tab`的索引（从0开始，即0代表第一个）即可激活对应`tab`。

:::demo 基础用法
```html
<zan-tabs :active="active">
  <zan-tab title="选项一">内容一</zan-tab>
  <zan-tab title="选项二">内容二</zan-tab>
  <zan-tab title="选项三">内容三</zan-tab>
  <zan-tab title="选项四">内容四</zan-tab>
  <zan-tab title="选项五">内容五</zan-tab>
</zan-tabs>
```
:::

#### 禁用tab

在对应的`zan-tab`上设置`disabled`属性即可，如果需要监听禁用事件，可以监听`disabled`事件。

:::demo 禁用tab
```html
<zan-tabs>
  <zan-tab title="选项一">内容一</zan-tab>
  <zan-tab title="选项二" disabled @disabled="popalert">内容二</zan-tab>
  <zan-tab title="选项三">内容三</zan-tab>
  <zan-tab title="选项四">内容四</zan-tab>
  <zan-tab title="选项五">内容五</zan-tab>
</zan-tabs>

<script>
export default {
  methods: {
    popalert() {
      alert('haha')
    }
  }
};
</script>
```
:::

#### card样式

`Tabs`目前有两种样式：`line`和`card`，默认为`line`样式，也就上面基础用法中的样式，你可以在`zan-tabs`上设置`type`为`card`改为card样式。

:::demo card样式
```html
<zan-tabs type="card">
  <zan-tab title="选项一">内容一</zan-tab>
  <zan-tab title="选项二">内容二</zan-tab>
  <zan-tab title="选项三">内容三</zan-tab>
  <zan-tab title="选项四">内容四</zan-tab>
  <zan-tab title="选项五">内容五</zan-tab>
</zan-tabs>
```
:::
<style>
  .custom-tabwrap .zan-tab-active {
    color: #20a0ff;
  }
  .custom-tabwrap .zan-tabs-nav-bar {
    background: #20a0ff;
  }
  .custom-pane {
    text-align: center;
    height: 50px;
    line-height: 50px;
  }
</style>

#### 自定义样式

可以在`zan-tabs`上设置对应的`class`，从而自定义某些样式。

:::demo 自定义样式
```html
<zan-tabs active="2" class="custom-tabwrap">
    <zan-tab title="选项一" class="custom-pane">内容一</zan-tab>
    <zan-tab title="选项二" class="custom-pane">内容二</zan-tab>
    <zan-tab title="选项三" class="custom-pane">内容三</zan-tab>
    <zan-tab title="选项四" class="custom-pane">内容四</zan-tab>
    <zan-tab title="选项五" class="custom-pane">内容五</zan-tab>
</zan-tabs>

<style>
  .custom-tabwrap .zan-tab-active {
    color: #20a0ff;
  }
  .custom-tabwrap .zan-tabs-nav-bar {
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

可以在`zan-tabs`上绑定一个`click`事件，事件处理函数有一个参数，参数为对应`tab`在`tabs`中的索引。

:::demo click事件
```html
<zan-tabs @click="handleTabClick">
  <zan-tab title="选项一">内容一</zan-tab>
  <zan-tab title="选项二">内容二</zan-tab>
  <zan-tab title="选项三">内容三</zan-tab>
  <zan-tab title="选项四">内容四</zan-tab>
  <zan-tab title="选项五">内容五</zan-tab>
</zan-tabs>

<script>
export default {
  methods: {
    handleTabClick(index) {
      alert(index);
    }
  }
};
</script>
```
:::

### zan-tabs API

| 参数       | 说明      | 类型       | 默认值       | 可选      |
|-----------|-----------|-----------|-------------|-------------|
| classtype | 两种UI | `string`  | `line` |     `line`, `card`      |
| active | 默认激活的tab | `string`, `number`  | `0` |           |
| navclass | tabs的内部nav上的自定义classname | `string`  |  |           |


### zan-tab API

| 参数       | 说明      | 类型       | 默认值       | 可选       |
|-----------|-----------|-----------|-------------|-------------|
| title | tab的标题 | `string`  |         |          |
| disabled | 是否禁用这个tab | `boolean`  | `false`      |           |

### zan-tabs Event

| 事件名       | 说明      | 参数       |
|-----------|-----------|-----------|
| click | 某个tab点击事件 | index：点击的`tab`的索引 |
| disabled | 某个tab禁用时点击事件 | index：点击的`tab`的索引 |

