# Calendar 日历

### 引入

``` javascript
import Vue from 'vue';
import { Calendar } from 'vant';

Vue.use(Calendar);
```

## 代码演示

### 基础用法

```html
<van-calendar />
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| v-model | 选中的日期 | `Date` | - | - |
| title | 日历标题 | `string` | - | - |

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|

### Slots

| 名称 | 说明 | SlotProps |
|------|------|------|

### 方法

通过 [ref](https://cn.vuejs.org/v2/api/#ref) 可以获取到 Calendar 实例并调用实例方法

| 方法名 | 说明 | 参数 | 返回值 |
|------|------|------|------|
