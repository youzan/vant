# Panel 面板

### 废弃提示

<b>由于使用场景有限，Panel 组件将在 3.0 版本中废弃</b>，请直接使用 Cell 和 Button 组件代替。

### 引入

```js
import Vue from 'vue';
import { Panel } from 'vant';

Vue.use(Panel);
```

## 代码演示

### 基础用法

面板只是一个容器，里面可以放入自定义的内容。

```html
<van-panel title="标题" desc="描述信息" status="状态">
  <div>内容</div>
</van-panel>
```

### 高级用法

使用插槽自定义内容。

```html
<van-panel title="标题" desc="描述信息" status="状态">
  <div>内容</div>
  <template #footer>
    <van-button size="small">按钮</van-button>
    <van-button size="small" type="danger">按钮</van-button>
  </template>
</van-panel>
```

## API

### Props

| 参数   | 说明                                       | 类型     | 默认值 |
| ------ | ------------------------------------------ | -------- | ------ |
| title  | 标题                                       | _string_ | -      |
| desc   | 描述                                       | _string_ | -      |
| status | 状态                                       | _string_ | -      |
| icon   | 标题左侧[图标名称](#/zh-CN/icon)或图片链接 | _string_ | -      |

### Slots

| 名称    | 说明          |
| ------- | ------------- |
| default | 自定义内容    |
| header  | 自定义 header |
| footer  | 自定义 footer |

### 样式变量

组件提供了下列 Less 变量，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/theme)。

| 名称                      | 默认值                    | 描述 |
| ------------------------- | ------------------------- | ---- |
| @panel-background-color   | `@white`                  | -    |
| @panel-header-value-color | `@red`                    | -    |
| @panel-footer-padding     | `@padding-xs @padding-md` | -    |
