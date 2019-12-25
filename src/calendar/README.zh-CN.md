# Calendar 日历

### 介绍

日历组件可以用于选择日期或日期区间，通常与 [弹出层](#/zh-CN/popup) 组件配合使用

### 引入

``` javascript
import Vue from 'vue';
import { Calendar } from 'vant';

Vue.use(Calendar);
```

## 代码演示

### 选择单个日期

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
| min-date | 最小日期 | `Date` | 当前日期 | - |
| max-date | 最大日期 | `Date` | 当前日期的六个月后 | - |
| button-text | 选择日期区间时，确认按钮的文字 | `string` | `确定` | - |
| button-disabled-text | 选择日期区间时，确认按钮处于禁用状态时的文字 | `string` | `确定` | - |
| show-mark | 是否显示月份背景水印 | `boolean` | `true` | - |

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| select | 选择日期时触发 | value: Date | Date[] |

### Slots

| 名称 | 说明 |
|------|------|
| title | 自定义标题 |

### 方法

通过 [ref](https://cn.vuejs.org/v2/api/#ref) 可以获取到 Calendar 实例并调用实例方法

| 方法名 | 说明 | 参数 | 返回值 |
|------|------|------|------|
