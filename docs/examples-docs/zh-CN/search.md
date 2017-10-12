<script>
export default {
  data() {
    return {
      search: '',
      basicSearch: ''
    };
  },

  methods: {
    goSearch() {
      alert(this.search);
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

`van-search` 中，v-model 用于控制搜索框中的文字。background 可以自定义搜索框外部背景色

:::demo 基础用法
```html
<van-search placeholder="搜索框基础用法" v-model="basicSearch" background="transparent"></van-search>
```

```javascript
export default {
  data() {
    return { basicSearch: '' };
  }
};
```
:::

#### 监听对应事件

`van-search` 提供了 search 和 cancel 事件。search 事件在用户点击键盘上的 搜索/回车 按钮触发。cancel 事件在用户点击搜索框右侧取消按钮时触发

Tips: 在 `van-search` 外层增加 form 标签，并且 action 不为空，即可在 IOS 弹出的输入法中显示搜索按钮

:::demo 监听对应事件
```html
<form action="/">
  <van-search
    placeholder="请输入商品名称"
    v-model="search"
    :show-cancel="true"
    @search="goSearch"
    @cancel="handleCancel"></van-search>
</form>
```

```javascript
export default {
  data() {
    return { search: '' };
  },

  methods: {
    goSearch() {
      alert(this.search)
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
| background | 搜索框背景色 | `String`  |     `#f2f2f2`      |  所有浏览器支持的颜色描述   |
| showCancel | 是否在搜索框聚焦是显示右侧取消按钮 | `Boolean`  |     false      |     |

### Event

| 事件名       | 说明      | 参数       |
|-----------|-----------|-----------|
| cancel | 取消搜索 |   |
| search | 确定搜索 |   |
