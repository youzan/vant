<script>
export default {
  methods: {
    handleClick() {
      console.log('cell click');
    }
  }
};
</script>

## Cell 单元格

### 使用指南

如果你已经按照快速上手中引入了整个`vant`，以下**组件注册**就可以忽略了，因为你已经全局注册了`vant`中的全部组件。

#### 全局注册

你可以在全局注册`Cell`组件，比如页面的主文件（`index.js`，`main.js`），这样页面任何地方都可以直接使用`Cell`组件了：

```js
import Vue from 'vue';
import { Cell, CellGroup } from 'vant';
import 'vant/lib/vant-css/cell.css';

Vue.component(CellGroup.name, CellGroup);
Vue.component(Cell.name, Cell);
```

#### 局部注册

如果你只是想在某个组件中使用，你可以在对应组件中注册`Cell`组件，这样只能在你注册的组件中使用`Cell`：

```js
import { Cell } from 'vant';
import 'vant/lib/vant-css/cell.css';

export default {
  components: {
    'van-cell-group': CellGroup,
    'van-cell': Cell
  }
};
```

### 代码演示

#### 基础用法

你可以将`van-cell-group`组件看成一个容器即可。

:::demo 基础用法
```html
<van-cell-group>
  <van-cell title="单元格1" value="单元格1内容"></van-cell>
  <van-cell title="单元格2" value="单元格2内容"></van-cell>
</van-cell-group>
```
:::

#### 标题带描述信息

传入`label`属性，属性值为描述信息的值。

:::demo 标题带描述信息
```html
<van-cell-group>
  <van-cell title="单元格1" label="描述信息" is-link url="javascript:void(0)" @click="handleClick"></van-cell>
  <van-cell title="单元格2" label="描述信息"></van-cell>
</van-cell-group>
```
:::

#### 带图标

传入`icon`属性。

:::demo 带图标
```html
<van-cell-group>
  <van-cell title="起码运动馆" icon="home"></van-cell>
  <van-cell title="线下门店" icon="location"></van-cell>
</van-cell-group>
```
:::

#### 可点击的链接

传入`url`属性，传入`isLink`属性则会在右侧显示箭头。

:::demo 可点击的链接
```html
<van-cell-group>
  <van-cell title="起码运动馆" value="进入店铺" icon="home" url="http://youzan.com" is-link></van-cell>
  <van-cell title="线下门店" icon="location" url="http://youzan.com" is-link></van-cell>
</van-cell-group>
```
:::

#### 高级用法

如以上用法不能满足你的需求，可以使用对应的`slot`来自定义显示的内容。包含三个`slot`，默认`slot`，`icon`和`title`的`slot`。

:::demo 高级用法
```html
<van-cell-group>
  <van-cell value="进入店铺" icon="home" url="http://youzan.com" is-link>
    <template slot="title">
      <span class="van-cell-text">起码运动馆</span>
      <van-tag type="danger">官方</van-tag>
    </template>
  </van-cell>
  <van-cell title="线下门店" icon="location" url="http://youzan.com" is-link></van-cell>
</van-cell-group>
```
:::

### API

| 参数       | 说明      | 类型       | 默认值       | 可选值       |
|-----------|-----------|-----------|-------------|-------------|
| icon | 左侧图标 | `string`  |           |           |
| title | 左侧标题 | `string`  |           |           |
| value | 右侧内容 | `string`  |           |           |
| isLink | 是否为链接，链接会在右侧出现箭头 | `boolean`  |           |           |
| url | 跳转链接 | `string`  |           |           |
| label | 描述信息，显示在标题下方 | `string`  |           |           |

### Slot

| name       | 描述      |
|-----------|-----------|
| - | 自定义显示内容 |
| icon | 自定义`icon` |
| title | 自定义`title` |
