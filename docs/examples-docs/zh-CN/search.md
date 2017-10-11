<script>
export default {
  data() {
    return {
      basicSearch: ''
    };
  },

  methods: {
    goSearch(value) {
      alert(value)
    },
    goBasicSearch() {
      alert(this.basicSearch);
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
``` javascript
import { Search } from 'vant';

Vue.component(Search.name, Search);
```

### 代码演示

#### 基础用法

如果你只需要在搜索时有个回调，只要监听一个`search`事件。

:::demo 基础用法
```html
<form action="/">
  <van-search placeholder="商品名称" @search="goBasicSearch()" v-model="basicSearch"></van-search>
</form>
```

```javascript
export default {
  methods: {
    goSearch(value) {
      alert(value)
    }
  }
};
```
:::

#### 微杂志页搜索样式

:::demo 微杂志页搜索样式
```html
<van-search placeholder="搜索商品" type="simple"></van-search>
```
:::

#### 监听对应事件

除了`search`事件，还有`change`和`cancel`事件，`change`事件在`input`输入框每次`change`时触发，适用于实时搜索等，`cancel`在取消按钮点击时触发。

:::demo 监听对应事件
```html
<van-search placeholder="商品名称" @search="goSearch" @change="handleChange" @cancel="handleCancel"></van-search>
```

```javascript
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
| change | `input`输入框每次`change`时触发，适用于实时搜索等 | value：当前`input`输入框的值  |
| cancel | 取消搜索 |   |
| search | 确定搜索 | value：当前`input`输入框的值  |
