## Tab 组件

### 基础用法

:::demo 基础用法
```html
<zan-tabs>
  <zan-tab title="选项一">内容一</zan-tab>
  <zan-tab title="选项二">内容二</zan-tab>
  <zan-tab title="选项三">内容三</zan-tab>
  <zan-tab title="选项四">内容四</zan-tab>
  <zan-tab title="选项五">内容五</zan-tab>
</zan-tabs>
```

<script>
export default {
  methods: {
    popalert() {
      alert('haha')
    }
  }
};
</script>
:::
### 禁用用法
:::demo 禁用用法
```html
<zan-tabs>
  <zan-tab title="选项一">内容一</zan-tab>
  <zan-tab disable title="选项二" @disable="popalert">内容二</zan-tab>
  <zan-tab title="选项三">内容三</zan-tab>
  <zan-tab title="选项四">内容四</zan-tab>
  <zan-tab title="选项五">内容五</zan-tab>
</zan-tabs>
<script>
export default {
  methods: {
    popalert() {
      alert('haha')
    }
  }
};
</script>
```
:::

### card样式用法
:::demo card样式用法
```html
<zan-tabs type="card">
  <zan-tab title="选项一">内容一</zan-tab>
  <zan-tab title="选项二">内容二</zan-tab>
  <zan-tab title="选项三">内容三</zan-tab>
  <zan-tab title="选项四">内容四</zan-tab>
  <zan-tab title="选项五">内容五</zan-tab>
</zan-tabs>
```
:::
<style>
  .page-tab {
    padding: 0 15px;
  }
  .custom-tabwrap .zan-tab-active{
    color: #20a0ff;
  }
  .custom-tabwrap .zan-tabs-nav-bar{
    background: #20a0ff;
  }
  .custom-tab {
    font-weight: bold;
  }
  .custom-pane {
    text-align: center;
    height: 50px;
    line-height: 50px;
  }
</style>

### 自定义样式用法
:::demo 自定义样式用法
```html
<zan-tabs active="2" navclass="custom-tabwrap">
    <zan-tab title="选项一" class="custom-pane">内容一</zan-tab>
    <zan-tab title="选项二" class="custom-pane">内容二</zan-tab>
    <zan-tab title="选项三" class="custom-pane">内容三</zan-tab>
    <zan-tab title="选项四" class="custom-pane">内容四</zan-tab>
    <zan-tab title="选项五" class="custom-pane">内容五</zan-tab>
</zan-tabs>
<style>
  .page-tab {
    padding: 0 15px;
  }
  .custom-tabwrap .zan-tab-active{
    color: #20a0ff;
  }
  .custom-tabwrap .zan-tabs-nav-bar{
    background: #20a0ff;
  }
  .custom-tab {
    font-weight: bold;
  }
  .custom-pane {
    text-align: center;
    height: 50px;
    line-height: 50px;
  }
</style>
```
:::

### zan-tabs API

| 参数       | 说明      | 类型       | 默认值       | 可选      |
|-----------|-----------|-----------|-------------|-------------|
| classtype | 两种UI | string  | line |     card      |
| active | 默认激活的tab | string || number  | 0 |           |
| classname | tabs自定义classname | string  | '' |           |


### zan-tab API
| 参数       | 说明      | 类型       | 默认值       | 必须       |
|-----------|-----------|-----------|-------------|-------------|
| title | tab的标题 | string  | ''          | required         |
| paneclass | 底部内容区的classname | string  | ''          |           |
| disable | 是否禁用这个tab | Boolean  | false      |           |

