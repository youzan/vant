# SwitchCell 开关单元格

### 介绍

`SwitchCell`组件是对`Switch`和`Cell`组件的封装

### 引入

``` javascript
import { SwitchCell } from 'vant';

Vue.use(SwitchCell);
```

## 代码演示

### 基础用法

```html
<van-cell-group>
  <van-switch-cell v-model="checked" title="标题" />
</van-cell-group>
```

```javascript
export default {
  data() {
    return {
      checked: true
    }
  }
}
```

### 禁用状态

通过`disabled`属性可以将组件设置为禁用状态

```html
<van-cell-group>
  <van-switch-cell v-model="checked" disabled title="标题" />
</van-cell-group>
```

### 加载状态

通过`loading`属性可以将组件设置为加载状态

```html
<van-cell-group>
  <van-switch-cell v-model="checked" loading title="标题" />
</van-cell-group>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| v-model | 开关状态 | `null` | `false` | - |
| title | 左侧标题 |  `String` | `''` | - |
| border | 是否展示单元格内边框 | `Boolean` | `true` | 2.0.0 |
| cell-size | 单元格大小，可选值为 `large` | `String` | 2.0.0 |
| loading | 是否为加载状态 |  `Boolean` | `false` | - |
| disabled | 是否为禁用状态 |  `Boolean` | `false` | - |
| size | 开关尺寸 | `String` | `24px` | 1.1.11 |
| active-color | 开关时的背景色 | `String` | `#1989fa` | 1.5.0 |
| inactive-color | 开关时的背景色 | `String` | `#fff` | 1.5.0 |
| active-value | 打开时的值 | `any` | `true` | 1.5.6 |
| inactive-value | 关闭时的值 | `any` | `false` | 1.5.6 |

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| change | 开关状态切换回调 | checked: 是否选中开关 |
