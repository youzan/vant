<style>
.cell-groups {
  padding-left: 10px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}
</style>

## Cell 组件

### 基础用法

:::demo 样例代码
```html
<div class="cell-groups">
  <o2-cell title="单元格1" value="单元格1内容"></o2-cell>
  <o2-cell title="单元格2" value="单元格2内容"></o2-cell>
</div>
```
:::

### API

| 参数       | 说明      | 类型       | 默认值       | 可选值       |
|-----------|-----------|-----------|-------------|-------------|
| icon | 左侧图标 | string  | ''          | ''          |
| title | 左侧标题 | string  | ''          | ''          |
| value | 右侧内容 | string  | ''          | ''          |
| isLink | 是否为链接，链接会在右侧出现箭头 | string  | ''          | ''          |

### Slot

| name       | 描述      |
|-----------|-----------|
| - | 自定义显示内容 |
| icon | 自定义icon |
| title | 自定义title |
