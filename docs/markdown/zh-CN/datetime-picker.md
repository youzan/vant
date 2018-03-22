## DatetimePicker 时间选择

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
  :min-hour="minHour"
  :max-hour="maxHour"
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

```html
<van-datetime-picker
  v-model="currentDate"
  type="year-month"
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

#### 选择时间

```html
<van-datetime-picker
  v-model="currentDate"
  type="time"
  :min-hour="minHour"
  :max-hour="maxHour"
  :min-date="minDate"
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

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| type | 组件类型 | `String` | `datetime` |  `date` `time` `year-month` |
| min-date | 可选的最小日期 | `Date` | 十年前的 1 月 1 日 | - |
| max-date | 可选的最大日期 | `Date` | 十年后的 12 月 31 日 | - |
| min-hour | 可选的最小小时 | `Number` | `0` | - |
| max-hour | 可选的最大小时 | `Number` | `23` | - |
| visible-item-count | 每一列可见备选元素的个数 | `Number` | `5` | - |

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
