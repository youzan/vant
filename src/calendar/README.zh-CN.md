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
| type | 选择类型，`single`为选择单日，`range`为选择日期区间 | `string` | `single` | - |
| title | 日历标题 | `string` | - | - |
| min-date | 最小日期 | `Date` | 当前时间 | - |
| max-date | 最大日期 | `Date` | 当前时间的六个月后 | - |

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| select | 选择日期时触发 | value: Date |

### Slots

| 名称 | 说明 |
|------|------|

### 方法

通过 [ref](https://cn.vuejs.org/v2/api/#ref) 可以获取到 Calendar 实例并调用实例方法

| 方法名 | 说明 | 参数 | 返回值 |
|------|------|------|------|
