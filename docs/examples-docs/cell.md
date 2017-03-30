<style>
.official-img {
  width: 31px;
  vertical-align: middle;
  border: 0;
}
</style>

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

如果你已经按照[快速上手](/vue/component/quickstart)中引入了整个`ZanUI`，以下**组件注册**就可以忽略了，因为你已经全局注册了`ZanUI`中的全部组件。

#### 全局注册

你可以在全局注册`Cell`组件，比如页面的主文件（`index.js`，`main.js`），这样页面任何地方都可以直接使用`Cell`组件了：

```js
import Vue from 'vue';
import { Cell } from '@youzan/zanui-vue';
import '@youzan/zanui-vue/lib/zanui-css/cell.css';

Vue.component(Cell.name, Cell);
```

#### 局部注册

如果你只是想在某个组件中使用，你可以在对应组件中注册`Cell`组件，这样只能在你注册的组件中使用`Cell`：

```js
import { Cell } from '@youzan/zanui-vue';

export default {
  components: {
    'zan-cell': Cell
  }
};
```

### 代码演示

#### 基础用法

:::demo 基础用法
```html
<zan-cell-group>
  <zan-cell title="单元格1" value="单元格1内容"></zan-cell>
  <zan-cell title="单元格2" value="单元格2内容"></zan-cell>
</zan-cell-group>
```
:::

#### 标题带描述信息

传入`label`属性，属性值为描述信息的值。

:::demo 标题带描述信息
```html
<zan-cell-group>
  <zan-cell title="单元格1" label="描述信息" is-link url="javascript:void(0)" @click="handleClick"></zan-cell>
  <zan-cell title="单元格2" label="描述信息"></zan-cell>
</zan-cell-group>
```
:::

#### 带图标

传入`icon`属性。

:::demo 带图标
```html
<zan-cell-group>
  <zan-cell title="起码运动馆" icon="home"></zan-cell>
  <zan-cell title="线下门店" icon="location"></zan-cell>
</zan-cell-group>
```
:::

#### 可点击的链接

传入`url`属性，传入`isLink`属性则会在右侧显示箭头。

:::demo 可点击的链接
```html
<zan-cell-group>
  <zan-cell title="起码运动馆" value="进入店铺" icon="home" url="http://youzan.com" is-link></zan-cell>
  <zan-cell title="线下门店" icon="location" url="http://youzan.com" is-link></zan-cell>
</zan-cell-group>
```
:::

#### 高级用法

如以上用法不能满足你的需求，可以使用对应的`slot`来自定义显示的内容。包含三个`slot`，默认`slot`，`icon`和`title`的`slot`。

:::demo 高级用法
```html
<zan-cell-group>
  <zan-cell value="进入店铺" icon="home" url="http://youzan.com" is-link>
    <template slot="title">
      <span class="zan-cell-text">起码运动馆</span>
      <img src="//su.yzcdn.cn/v2/image/account/icon_guan_160421.png" class="official-img">
    </template>
  </zan-cell>
  <zan-cell title="线下门店" icon="location" url="http://youzan.com" is-link></zan-cell>
</zan-cell-group>
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
