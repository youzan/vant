## SwitchCell 开关单元格

`SwitchCell`组件是对`Switch`和`Cell`组件的封装

### 使用指南
``` javascript
import { SwitchCell } from 'vant';

Vue.use(SwitchCell);
```

### 代码演示

#### 基础用法

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

#### 禁用状态

通过`disabled`属性可以将组件设置为禁用状态

```html
<van-cell-group>
  <van-switch-cell v-model="checked" disabled title="标题" />
</van-cell-group>
```

#### 加载状态

通过`loading`属性可以将组件设置为加载状态

```html
<van-cell-group>
  <van-switch-cell v-model="checked" loading title="标题" />
</van-cell-group>
```

### API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| v-model | 开关状态 | `null` | `false` | - |
| title | 左侧标题 |  `String` | `''` | - |
| loading | 是否为加载状态 |  `Boolean` | `false` | - |
| disabled | 是否为禁用状态 |  `Boolean` | `false` | - |
| size | 开关尺寸 | `String` | `24px` | 1.1.11 |
| active-color | 开关时的背景色 | `String` | `#1989fa` | 1.5.0 |
| inactive-color | 开关时的背景色 | `String` | `#fff` | 1.5.0 |
| active-value | 打开时的值 | `any` | `true` | 1.5.6 |
| inactive-value | 关闭时的值 | `any` | `false` | 1.5.6 |

### Event

| 事件名 | 说明 | 参数 |
|------|------|------|
| change | 开关状态切换回调 | checked: 是否选中开关 |
