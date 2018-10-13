## DatetimePicker 时间选择
时间选择组件通常与 [弹出层](#/zh-CN/popup) 组件配合使用

### 使用指南
``` javascript
import { DatetimePicker } from 'vant';

Vue.use(DatetimePicker);
```

### 代码演示

#### 选择完整时间

```html
<van-datetime-picker
  v-model="currentDate"
  type="datetime"
  :min-date="minDate"
  :max-date="maxDate"
/>
```

```javascript
export default {
  data() {
    return {
      minHour: 10,
      maxHour: 20,
      minDate: new Date(),
      maxDate: new Date(2019, 10, 1),
      currentDate: new Date()
    };
  }
};
```

#### 选择日期（年月日）

```html
<van-datetime-picker
  v-model="currentDate"
  type="date"
  :min-date="minDate"
/>
```

```js
export default {
  data() {
    return {
      currentDate: new Date()
    };
  }
}
```

#### 选择日期（年月）
通过传入 `formatter` 函数对选项文字进行处理

```html
<van-datetime-picker
  v-model="currentDate"
  type="year-month"
  :min-date="minDate"
  :formatter="formatter"
/>
```

```js
export default {
  data() {
    return {
      currentDate: new Date()
    };
  },

  methods: {
    formatter(type, value) {
      if (type === 'year') {
        return `${value}年`;
      } else if (type === 'month') {
        return `${value}月`
      }
      return value;
    }
  }
}
```

#### 选择时间

```html
<van-datetime-picker
  v-model="currentDate"
  type="time"
  :min-hour="minHour"
  :max-hour="maxHour"
/>
```

```js
export default {
  data() {
    return {
      currentDate: '12:00'
    };
  }
}
```

### API

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|-------------|
| type | 类型，可选值为 `date` `time`<br> `year-month` | `String` | `datetime` |
| min-date | 可选的最小时间，精确到分钟 | `Date` | 十年前的 1 月 1 日 |
| max-date | 可选的最大时间，精确到分钟 | `Date` | 十年后的 12 月 31 日 |
| min-hour | 可选的最小小时，针对 time 类型 | `Number` | `0` |
| max-hour | 可选的最大小时，针对 time 类型 | `Number` | `23` |
| min-minute | 可选的最小分钟，针对 time 类型 | `Number` | `0` |
| max-minute | 可选的最大分钟，针对 time 类型 | `Number` | `59` |
| formatter | 选项格式化函数 | `(type, value) => value` | - |
| title | 顶部栏标题 | `String` | `''` |
| loading | 是否显示加载状态 | `Boolean` | `false` |
| item-height | 选项高度 | `Number` | `44` |
| confirm-button-text | 确认按钮文字 | `String` | `确认` |
| cancel-button-text | 取消按钮文字 | `String` | `取消` |
| visible-item-count | 可见的选项个数 | `Number` | `5` |

### Event

| 事件名称 | 说明 | 回调参数 |
|-----------|-----------|-----------|
| change | 当值变化时触发的事件 | picker 实例 |
| confirm | 点击完成按钮时触发的事件 | 当前 value |
| cancel | 点击取消按钮时触发的事件 | - |

### change事件

在`change`事件中，可以获取到`picker`实例，对`picker`进行相应的更新等操作：

| 函数 | 说明 |
|-----------|-----------|
| getColumnValue(index) | 获取对应列中选中的值 |
| setColumnValue(index, value) | 设置对应列中选中的值 |
| getColumnValues(index) | 获取对应列中所有的备选值 |
| setColumnValues(index, values) | 设置对应列中所有的备选值 |
| getValues() | 获取所有列中被选中的值，返回一个数组 |
| setValues(values) | `values`为一个数组，设置所有列中被选中的值 |

### 更新日志

| 版本 | 类型 | 内容 |
|-----------|-----------|-----------|
| 1.3.3 | bugfix | 修复时间范围变化时未正确更新 value 的问题 |
| 1.3.0 | bugfix | 修复使用 min-minute 属性时初始值错误的问题
| 1.1.16 | bugfix | 修复使用 formatter 时默认值错误的问题
| 1.1.15 | feature | 新增 max-minute、min-minute 属性
| 1.1.14 | feature | 新增 formatter 属性
| 1.1.11 | bugfix | 修复 change 事件回调参数不正确的问题
| 1.1.9 | bugfix | 修复 visible-item-count 属性拼写错误
| 1.1.4 | bugfix | 修复初始值错误的问题
| 1.0.6 | bugfix | 修复 change 事件参数错误
| 1.0.4 | feature | 支持 Picker 组件所有属性
| 1.0.2 | feature | 新增 show-toolbar 属性
| 1.0.2 | feature | 新增 month-year 类型
