<script>
export default {
  methods: {
    goSearch(value) {
      alert(value)
    },
    handleChange(value) {
      console.log(value);
    },
    handleCancel() {
      alert('cancel');
    }
  }
};
</script>

## Search 搜索

### 使用指南

如果你已经按照快速上手中引入了整个`vant`，以下**组件注册**就可以忽略了，因为你已经全局注册了`vant`中的全部组件。

#### 全局注册

你可以在全局注册`Search`组件，比如页面的主文件（`index.js`，`main.js`），这样页面任何地方都可以直接使用`Search`组件了：

```js
import Vue from 'vue';
import { Search } from 'vant';
import 'vant/lib/vant-css/search.css';

Vue.component(Search.name, Search);
```

#### 局部注册

如果你只是想在某个组件中使用，你可以在对应组件中注册`Search`组件，这样只能在你注册的组件中使用`Search`：

```js
import { Search } from 'vant';
import 'vant/lib/vant-css/search.css';

export default {
  components: {
    'van-search': Search
  }
};
```

### 代码演示

#### 基础用法

如果你只需要在搜索时有个回调，只要监听一个`search`事件。

:::demo 基础用法
```html
<van-search placeholder="商品名称" @search="goSearch"></van-search>

<script>
export default {
  methods: {
    goSearch(value) {
      alert(value)
    }
  }
};
</script>
```
:::

#### 微杂志页搜索样式

:::demo 基础用法
```html
<van-search placeholder="搜索商品" type="showcase"></van-search>
```
:::

#### 监听对应事件

除了`search`事件，还有`change`和`cancel`事件，`change`事件在`input`输入框每次`change`时触发，适用于实时搜索等，`cancel`在取消按钮点击时触发。

:::demo 监听对应事件
```html
<van-search placeholder="商品名称" @search="goSearch" @change="handleChange" @cancel="handleCancel"></van-search>

<script>
export default {
  methods: {
    goSearch(value) {
      alert(value)
    },
    handleChange(value) {
      console.log(value);
    },
    handleCancel() {
      alert('cancel');
    }
  }
};
</script>
```
:::

### API

| 参数       | 说明      | 类型       | 默认值       | 可选值       |
|-----------|-----------|-----------|-------------|-------------|
| placeholder | `input`的`placeholder`文案 | `string`  |           |     |
| type | 搜索样式类型 | `string`  |     `normal`      |  `normal`：普通样式，`showcase`：微杂志页样式   |

### Event

| 事件名       | 说明      | 参数       |
|-----------|-----------|-----------|
| change | `input`输入框每次`change`时触发，适用于实时搜索等 | value：当前`input`输入框的值  |
| cancel | 取消搜索 |   |
| search | 确定搜索 | value：当前`input`输入框的值  |
