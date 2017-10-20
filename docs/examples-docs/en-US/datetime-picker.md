<script>
export default {
  data() {
    return {
      minHour: 10,
      maxHour: 20,
      minDate: new Date(),
      maxDate: new Date(2019, 10, 1),
      currentDate1: new Date(2018, 0, 1),
      currentDate2: null,
      currentDate3: null
    };
  },

  methods: {
    handlePickerChange(picker) {
      console.log(picker);
    },
    handlePickerCancel() {
      console.log('picker cancel');
    },
    handlePickerConfirm() {
      console.log('picker confirm');
    }
  }
};
</script>

## DatetimePicker

### Install
``` javascript
import { DatetimePicker } from 'vant';

Vue.component(DatetimePicker.name, DatetimePicker);
```

### Usage

#### Basic Usage

:::demo Basic Usage
```html
<van-datetime-picker
  v-model="currentDate1"
  type="datetime"
  :min-hour="minHour"
  :max-hour="maxHour"
  :min-date="minDate"
  :max-date="maxDate"
  @change="handlePickerChange">  
</van-datetime-picker>
```

```javascript
export default {
  data() {
    return {
      minHour: 10,
      maxHour: 20,
      minDate: new Date(),
      maxDate: new Date(2019, 10, 1),
      currentDate: new Date(2018, 0, 1)
    };
  },

  methods: {
    handlePickerChange(picker) {
      console.log(picker);
    }
  }
};
```
:::

#### 选择日期

:::demo 选择日期
```html
<van-datetime-picker
  v-model="currentDate2"
  type="date"
  :min-hour="minHour"
  :max-hour="maxHour"
  :min-date="minDate"
  @change="handlePickerChange">  
</van-datetime-picker>
```
:::

#### 选择时间

:::demo 选择时间
```html
<van-datetime-picker
  v-model="currentDate3"
  type="time"
  :min-hour="minHour"
  :max-hour="maxHour"
  :min-date="minDate"
  @change="handlePickerChange">
</van-datetime-picker>
```
:::


### API

| Attribute | Description | Type | Default | Accepted Values |
|-----------|-----------|-----------|-------------|-------------|
| visibileColumnCount | 每一列可见备选元素的个数 | Number | 5 | - |
| type | 组件类型 | String | 'datetime' |  'datetime', 'date', 'time' |
| minDate | 可选的最小日期 | Date | 十年前的 1 月 1 日 | - |
| maxDate | 可选的最大日期 | Date | 十年后的 12 月 31 日 | - |
| minHour | 可选的最小小时 | Number | 0 | - |
| maxHour | 可选的最大小时 | Number | 23 | - |

### Event

| Event | Description | Arguments |
|-----------|-----------|-----------|
| change | 当值变化时触发的事件 | picker 实例 |
| confirm | 点击完成按钮时触发的事件 | 当前 value |
| cancel | 点击取消按钮时触发的事件 | - |

### change事件

在`change`事件中，可以获取到`picker`实例，对`picker`进行相应的更新等操作：

| 函数 | Description |
|-----------|-----------|
| getColumnValue(index) | 获取对应列中选中的值 |
| setColumnValue(index, value) | 设置对应列中选中的值 |
| getColumnValues(index) | 获取对应列中所有的备选值 |
| setColumnValues(index, values) | 设置对应列中所有的备选值 |
| getValues() | 获取所有列中被选中的值，返回一个数组 |
| setValues(values) | `values`为一个数组，设置所有列中被选中的值 |
