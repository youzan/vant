<style>
.tags-container {
  padding: 5px 15px;

  .van-tag + .van-tag {
    margin-left: 10px;
  }
}
</style>

## Tag 标记

### 代码演示

#### 基础用法

`Tag`默认是灰色，另外还有有三种类型，`danger`、`success`、`primary`，它们分别显示为红色，绿色和蓝色，你也可以加上自定义的类，为它们加上其他的颜色。

:::demo 基础用法
```html
<div class="tags-container">
  <van-tag>返现</van-tag>
</div>
<div class="tags-container">
  <van-tag type="danger">返现</van-tag>
  <van-tag type="success">四字标签</van-tag>
  <van-tag type="primary">一</van-tag>
</div>
```
:::

#### 高级用法

设置`plain`为`true`时表示空心的`tag`，还可以设置`mark`为`true`，表示是否为标记。

:::demo 高级用法
```html
<div class="tags-container">
  <van-tag>返现</van-tag>
  <van-tag plain>返现</van-tag>
</div>
<div class="tags-container">
  <van-tag type="danger">返现</van-tag>
  <van-tag plain type="danger">返现</van-tag>
</div>
<div class="tags-container">
  <van-tag type="primary">返现</van-tag>
  <van-tag plain type="primary">返现</van-tag>
</div>
<div class="tags-container">
  <van-tag type="success">返现</van-tag>
  <van-tag plain type="success">返现</van-tag>
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
