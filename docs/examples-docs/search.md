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

如果你已经按照[快速上手](/vue/component/quickstart)中引入了整个`ZanUI`，以下**组件注册**就可以忽略了，因为你已经全局注册了`ZanUI`中的全部组件。

#### 全局注册

你可以在全局注册`Search`组件，比如页面的主文件（`index.js`，`main.js`），这样页面任何地方都可以直接使用`Search`组件了：

```js
import Vue from 'vue';
import { Search } from '@youzan/zanui-vue';
import '@youzan/zanui-vue/lib/zanui-css/search.css';

Vue.component(Search.name, Search);
```

#### 局部注册

如果你只是想在某个组件中使用，你可以在对应组件中注册`Search`组件，这样只能在你注册的组件中使用`Search`：

```js
import { Search } from '@youzan/zanui-vue';

export default {
  components: {
    'zan-search': Search
  }
};
```

### 代码演示

#### 基础用法

如果你只需要在搜索时有个回调，只要监听一个`search`事件。

:::demo 基础用法
```html
<zan-search placeholder="商品名称" @search="goSearch"></zan-search>

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

#### 监听对应事件

除了`search`事件，还有`change`和`cancel`事件，`change`事件在`input`输入框每次`change`时触发，适用于实时搜索等，`cancel`在取消按钮点击时触发。

:::demo 监听对应事件
```html
<zan-search placeholder="商品名称" @search="goSearch" @change="handleChange" @cancel="handleCancel"></zan-search>

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

| 参数       | 说明      | 类型       | 默认值       | 必须       |
|-----------|-----------|-----------|-------------|-------------|
| placeholder | `input`的`placeholder`文案 | `string`  |           |     |

### Event

| 事件名       | 说明      | 参数       |
|-----------|-----------|-----------|
| change | `input`输入框每次`change`时触发，适用于实时搜索等 | value：当前`input`输入框的值  |
| cancel | 取消搜索 |   |
| search | 确定搜索 | value：当前`input`输入框的值  |
