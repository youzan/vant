<script>
export default {
  data() {
    return {
      search: '',
      basicSearch: '',
      simpleSearch: ''
    };
  },

  methods: {
    goSearch() {
      alert(this.search);
    },
    goBasicSearch() {
      alert(this.basicSearch);
    },
    handleCancel() {
      alert('cancel');
    }
  }
};
</script>

## Search 搜索

### 使用指南
``` javascript
import { Search } from 'vant';

Vue.component(Search.name, Search);
```

### 代码演示

#### 基础用法

通过 v-model 可以 获取/控制 搜索文案。

如果你需要在搜索时有个回调，监听`search`事件即可。

在 van-search 外层增加 form 标签，并且 action 不为空，即可在 IOS 弹出的输入法中显示搜索按钮

:::demo 基础用法
```html
<form action="/">
  <van-search placeholder="商品名称" @search="goBasicSearch()" v-model="basicSearch"></van-search>
</form>
```

```javascript
export default {
  data() {
    return { basicSearch: '' };
  },

  methods: {
    goBasicSearch() {
      alert(this.basicSearch)
    }
  }
};
```
:::

#### 简单搜索样式

:::demo 简单搜索样式
```html
<van-search placeholder="搜索商品" type="simple" v-model="simpleSearch"></van-search>
```
:::

#### 监听对应事件

除了`search`事件，还有`change`和`cancel`事件，`change`事件在`input`输入框每次`change`时触发，适用于实时搜索等，`cancel`在取消按钮点击时触发。

:::demo 监听对应事件
```html
<van-search placeholder="商品名称" @search="goSearch" @cancel="handleCancel" v-model="search"></van-search>
```

```javascript
export default {
  data() {
    return { search: '' };
  },

  methods: {
    goSearch(value) {
      alert(value)
    },
    handleCancel() {
      alert('cancel');
    }
  }
};
```
:::

### API

| 参数       | 说明      | 类型       | 默认值       | 可选值       |
|-----------|-----------|-----------|-------------|-------------|
| placeholder | `input`的`placeholder`文案 | `String`  |           |     |
| type | 搜索样式类型 | `String`  |     `normal`      |  `normal`：普通样式，`simple`：简单样式，无背景和取消按钮   |

### Event

| 事件名       | 说明      | 参数       |
|-----------|-----------|-----------|
| cancel | 取消搜索 |   |
| search | 确定搜索 | value：当前`input`输入框的值  |
