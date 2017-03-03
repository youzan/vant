## Tab 组件

### 基础用法

```html
<zan-tabs>
  <zan-tab tab-key="0" title="选项一">内容一</zan-tab>
  <zan-tab tab-key="1" title="选项二">内容二</zan-tab>
  <zan-tab tab-key="2" title="选项三">内容三</zan-tab>
  <zan-tab tab-key="3" title="选项四">内容四</zan-tab>
  <zan-tab tab-key="4" title="选项五">内容五</zan-tab>
</zan-tabs>
```

### 自定义样式用法

```html
<zan-tabs active-tab-key="2" tabs-class-name="custom-tabwrap" tab-class-name="custom-tab">
    <zan-tab tab-key="0" title="选项一" tab-pane-class-name="custom-pane">内容一</zan-tab>
    <zan-tab tab-key="1" title="选项二" tab-pane-class-name="custom-pane">内容二</zan-tab>
    <zan-tab tab-key="2" title="选项三" tab-pane-class-name="custom-pane">内容三</zan-tab>
    <zan-tab tab-key="3" title="选项四" tab-pane-class-name="custom-pane">内容四</zan-tab>
    <zan-tab tab-key="4" title="选项五" tab-pane-class-name="custom-pane">内容五</zan-tab>
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


### zan-tabs API

| 参数       | 说明      | 类型       | 默认值       | 必须      |
|-----------|-----------|-----------|-------------|-------------|
| active-key | 激活的badge的索引 | string  | '0'但必须子badge里的mark是有0位索引 |           |


### z-badge API
| 参数       | 说明      | 类型       | 默认值       | 必须       |
|-----------|-----------|-----------|-------------|-------------|
| mark | badge的唯一key值 | string  | ''          | required         |
| title | badge的文案标题 | string  | ''          | required          |
| info | 当前badge的提示消息数量 | string  | ''          |           |
| url | 跳转链接 | string  | 全连接直接跳转或者hash          |           |
