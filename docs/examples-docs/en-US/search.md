<script>
export default {
  data() {
    return {
      search: '',
      basicSearch: '',
      slotSearch: ''
    };
  },

  methods: {
    goSearch() {
      alert(this.search);
    },
    goSlotSearch() {
      alert(this.slotSearch);
    },
    handleCancel() {
      alert('cancel');
    }
  }
};
</script>

## Search

### Install
``` javascript
import { Search } from 'vant';

Vue.component(Search.name, Search);
```

### Usage

#### Basic Usage

`van-search` 中，v-model 用于控制搜索框中的文字。background 可以自定义搜索框外部背景色。

:::demo Basic Usage
```html
<van-search placeholder="搜索框基础用法" v-model="basicSearch" background="transparent"></van-search>
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
    :show-action="true"
    @search="goSearch"
    @cancel="handleCancel"></van-search>
</form>
```
:::

#### 自定义行动按钮

`van-search` 支持自定义右侧取消按钮，使用名字为 action 的 slot 即可。使用此 slot 以后，原有的 cancel 事件不再生效。

:::demo 自定义行动按钮
```html
<van-search
  v-model="slotSearch"
  :show-action="true"
  @search="goSlotSearch">
  <template slot="action">
    <div class="demo-search-action" @click="goSlotSearch">搜索</div>
  </template>    
</van-search>
```
:::

### API

| Attribute | Description | Type | Default | Accepted Values |
|-----------|-----------|-----------|-------------|-------------|
| placeholder | `input`的`placeholder`文案 | `String` | | |
| background | 搜索框背景色 | `String` |     `#f2f2f2` |  所有浏览器支持的颜色描述 |
| showAction | 是否在搜索框右侧显示取消按钮 | `Boolean` |     false | |

### Event

| Event | Description | Attribute |
|-----------|-----------|-----------|
| cancel | 取消搜索 | - |
| search | 确定搜索 | - |

### Slot

| name | Description |
|-----------|-----------|
| action | 自定义搜索框右侧按钮，需要在`showAction`为 true 时才会显示 |
