<style>
.demo-badge {
  .badge-group-wrapper {
    padding: 30px 20px;
    background-color: #fff;
  }

  .van-badge-group {
    margin: 0 auto;
  }
}
</style>

<script>
  export default {
    data() {
      return {
        activeKey: '2'
      };
    },
    methods: {
      onItemClick(e, data) {
        this.activeKey = data.mark;
      }
    }
  };
</script>

## Badge 徽章

### 使用指南

如果你已经按照快速上手中引入了整个`vant`，以下**组件注册**就可以忽略了，因为你已经全局注册了`vant`中的全部组件。

#### 全局注册

你可以在全局注册`Badge`组件，比如页面的主文件（`index.js`，`main.js`），这样页面任何地方都可以直接使用`Badge`组件了：

```js
import Vue from 'vue';
import { Badge, BadgeGroup } from 'vant';
import 'vant/lib/vant-css/badge.css';

Vue.component(Badge.name, Badge);
Vue.component(BadgeGroup.name, BadgeGroup);
```

#### 局部注册

如果你只是想在某个组件中使用，你可以在对应组件中注册`Badge`组件，这样只能在你注册的组件中使用`Badge`：

```js
import { Badge, BadgeGroup } from 'vant';
import 'vant/lib/vant-css/badge.css';

export default {
  components: {
    'van-badge': Badge,
    'van-badge-group': BadgeGroup
  }
};
```

### 代码演示

#### 基础用法

默认情况下激活第一个`badge`。

:::demo 基础用法
```html
<div class="badge-group-wrapper">
  <van-badge-group>
    <van-badge title="热销榜" info="8" url="http://baidu.com" @click="onItemClick"></van-badge>
    <van-badge title="花式寿司" info="99" @click="onItemClick"></van-badge>
    <van-badge title="火炽寿司" @click="onItemClick"></van-badge>
    <van-badge title="手握寿司" info="199" @click="onItemClick"></van-badge>
  </van-badge-group>
</div>
```
:::

#### 选中某个badge

如果想默认选中某个`badge`，你可以在`van-badge-group`上设置`activeKey`属性，属性值为对应的`badge`索引。

:::demo 选中某个badge
```html
<div class="badge-group-wrapper">
  <van-badge-group :active-key="2">
    <van-badge title="热销榜" info="8" url="http://baidu.com" @click="onItemClick"></van-badge>
    <van-badge title="花式寿司" info="99" @click="onItemClick"></van-badge>
    <van-badge title="火炽寿司" @click="onItemClick"></van-badge>
    <van-badge title="手握寿司" info="199" @click="onItemClick"></van-badge>
  </van-badge-group>
</div>
```
:::

### z-badge-group API

| 参数       | 说明      | 类型       | 默认值       | 必须      |
|-----------|-----------|-----------|-------------|-------------|
| active-key | 激活的`badge`的索引 | `string`  | `0`但必须子badge里的mark是有`0`位索引 |           |


### z-badge API
| 参数       | 说明      | 类型       | 默认值       | 必须       |
|-----------|-----------|-----------|-------------|-------------|
| title | badge的文案标题 | `string`  | `''`          | `required`          |
| info | 当前badge的提示消息 | `string`  | `''`         |           |
| url | 跳转链接 | `string`  | 链接直接跳转或者hash          |           |
