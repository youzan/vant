# Panel 面板

### 引入

``` javascript
import Vue from 'vue';
import { Panel } from 'vant';

Vue.use(Panel);
```

## 代码演示

### 基础用法

面板只是一个容器，里面可以放入自定义的内容

```html
<van-panel title="标题" desc="描述信息" status="状态">
  <div>内容</div>
</van-panel>
```

### 高级用法

使用`slot`自定义内容

```html
<van-panel title="标题" desc="描述信息" status="状态">
  <div>内容</div>
  <div slot="footer">
    <van-button size="small">按钮</van-button>
    <van-button size="small" type="danger">按钮</van-button>
  </div>
</van-panel>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| title | 标题 | *string* | - | - |
| desc | 描述 | *string* | - | - |
| status | 状态 | *string* | - | - |
| icon | 标题左侧图标名称或图片链接，可选值见 [Icon 组件](#/zh-CN/icon) | *string* | - | - |

### Slots

| 名称 | 说明 |
|------|------|
| default | 自定义内容 |
| header | 自定义 header |
| footer | 自定义 footer |
