# Grid 宫格

### 引入

``` javascript
import { Grid, GridItem } from 'vant';

Vue.use(Grid).use(GridItem);
```

## 代码演示

### 基本用法

## API

### Grid Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| column-num | 列数 | `Number` | `4` | - |
| gutter | 格子之间的间距，默认单位为`px` | `String | Number` | `0` | - |
| border | 是否显示边框 | `Boolean` | `true` | - |
| center | 是否将格子内容居中显示 | `Boolean` | `true` | - |
| square | 是否将格子固定为正方形 | `Boolean` | `false` | - |
| clickable | 是否开启点击反馈 | `Boolean` | `false` | - |

### GridItem Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| text | 文字 | `String` | - | - |
| icon | 图标名称或图片链接，可选值见 Icon 组件 | `String` | - | - |
| url | 跳转链接 | `String` | - | - |
| to | 路由跳转对象，同 `vue-router` 的 to | `String | Object` | - | - |
| replace | 跳转时是否替换当前页面历史 | `Boolean` | `false` | - |

### GridItem Slots

| 名称 | 说明 |
|------|------|
| default | 自定义宫格的所有内容 |
| icon | 自定义图标 |
| text | 自定义文字 |
