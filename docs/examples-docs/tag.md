<style>
.tags-container {
  padding: 5px 15px;

  .zan-tag + .zan-tag {
    margin-left: 10px;
  }
}
</style>

## Tag 组件

### 基础用法

:::demo 基础用法
```html
<div class="tags-container">
  <zan-tag>返现</zan-tag>
  <zan-tag :plain="true">返现</zan-tag>
</div>
<div class="tags-container">
  <zan-tag type="danger">返现</zan-tag>
  <zan-tag type="danger">四字标签</zan-tag>
  <zan-tag type="danger">一</zan-tag>
</div>
```
:::

### 高级用法

:::demo 高级用法
```html
<div class="tags-container">
  <zan-tag type="danger">返现</zan-tag>
  <zan-tag :plain="true" type="danger">返现</zan-tag>
</div>
<div class="tags-container">
  <zan-tag type="primary">返现</zan-tag>
  <zan-tag :plain="true" type="primary">返现</zan-tag>
</div>
<div class="tags-container">
  <zan-tag type="success">返现</zan-tag>
  <zan-tag :plain="true" type="success">返现</zan-tag>
</div>
<div class="tags-container">
  <zan-tag type="danger" :mark="true">返现</zan-tag>
</div>
```
:::

### API

| 参数       | 说明      | 类型       | 默认值       | 可选值       |
|-----------|-----------|-----------|-------------|-------------|
| plain | 是否是空心tag | boolean  | false          | ''          |
| mark | 是否是标记 | boolean  | false          | ''          |
| type | tag类型 | string  | ''          | 'primary', 'success', 'danger' |

### Slot

| name       | 描述      |
|-----------|-----------|
| - | 自定义tag显示内容 |
