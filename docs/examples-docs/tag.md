<style>
.tags-container {
  padding: 5px 15px;

  .zan-tag + .zan-tag {
    margin-left: 10px;
  }
}
</style>

## Tag 标记

### 使用指南

如果你已经按照[快速上手](/vue/component/quickstart)中引入了整个`ZanUI`，以下**组件注册**就可以忽略了，因为你已经全局注册了`ZanUI`中的全部组件。

#### 全局注册

你可以在全局注册`Tag`组件，比如页面的主文件（`index.js`，`main.js`），这样页面任何地方都可以直接使用`Tag`组件了：

```js
import Vue from 'vue';
import { Tag } from '@youzan/zanui-vue';
import '@youzan/zanui-vue/lib/zanui-css/tag.css';

Vue.component(Tag.name, Tag);
```

#### 局部注册

如果你只是想在某个组件中使用，你可以在对应组件中注册`Tag`组件，这样只能在你注册的组件中使用`Tag`：

```js
import { Tag } from '@youzan/zanui-vue';

export default {
  components: {
    'zan-tag': Tag
  }
};
```

### 代码演示

#### 基础用法

`Tag`目前有三种类型，`danger`、`success`、`primary`，它们分别显示为红色，绿色和蓝色，你也可以加上自定义的类，为它们加上其他的颜色。

:::demo 基础用法
```html
<div class="tags-container">
  <zan-tag>返现</zan-tag>
  <zan-tag plain>返现</zan-tag>
</div>
<div class="tags-container">
  <zan-tag type="danger">返现</zan-tag>
  <zan-tag type="danger">四字标签</zan-tag>
  <zan-tag type="danger">一</zan-tag>
</div>
```
:::

#### 高级用法

设置`plain`为`true`时表示空心的`tag`，还可以设置`mark`为`true`，表示是否为标记。

:::demo 高级用法
```html
<div class="tags-container">
  <zan-tag type="danger">返现</zan-tag>
  <zan-tag plain type="danger">返现</zan-tag>
</div>
<div class="tags-container">
  <zan-tag type="primary">返现</zan-tag>
  <zan-tag plain type="primary">返现</zan-tag>
</div>
<div class="tags-container">
  <zan-tag type="success">返现</zan-tag>
  <zan-tag plain type="success">返现</zan-tag>
</div>
<div class="tags-container">
  <zan-tag type="danger" mark>返现</zan-tag>
</div>
```
:::

### API

| 参数       | 说明      | 类型       | 默认值       | 可选值       |
|-----------|-----------|-----------|-------------|-------------|
| plain | 是否是空心tag | `boolean`  | `false`          |           |
| mark | 是否是标记 | `boolean`  | `false`          |           |
| type | tag类型 | `string`  | `''`          | `primary`, `success`, `danger` |

### Slot

| name       | 描述      |
|-----------|-----------|
| - | 自定义tag显示内容 |
