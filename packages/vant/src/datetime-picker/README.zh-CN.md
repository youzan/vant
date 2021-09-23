# DatetimePicker 时间选择

### 介绍

时间选择器，支持日期、年月、时分等维度，通常与[弹出层](#/zh-CN/popup)组件配合使用。

### 引入

通过以下方式来全局注册组件，更多注册方式请参考[组件注册](#/zh-CN/advanced-usage#zu-jian-zhu-ce)。

```js
import { createApp } from 'vue';
import { DatetimePicker } from 'vant';

const app = createApp();
app.use(DatetimePicker);
```

## 代码演示

### 选择年月日

DatetimePicker 通过 type 属性来定义需要选择的时间类型，type 为 `date` 表示选择年月日。通过 min-date 和 max-date 属性可以确定可选的时间范围。

```html
<van-datetime-picker
  v-model="currentDate"
  type="date"
  title="选择年月日"
  :min-date="minDate"
  :max-date="maxDate"
/>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const currentDate = ref(new Date(2021, 0, 17));
    return {
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate,
    };
  },
};
```

### 选择年月

将 type 设置为 `year-month` 即可选择年份和月份。通过传入 `formatter` 函数，可以对选项文字进行格式化处理。

```html
<van-datetime-picker
  v-model="currentDate"
  type="year-month"
  title="选择年月"
  :min-date="minDate"
  :max-date="maxDate"
  :formatter="formatter"
/>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const currentDate = ref(new Date());

    const formatter = (type, val) => {
      if (type === 'year') {
        return `${val}年`;
      }
      if (type === 'month') {
        return `${val}月`;
      }
      return val;
    };

    return {
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      formatter,
      currentDate,
    };
  },
};
```

### 选择月日

将 type 设置为 `month-day` 即可选择月份和日期。

```html
<van-datetime-picker
  v-model="currentDate"
  type="month-day"
  title="选择月日"
  :min-date="minDate"
  :max-date="maxDate"
  :formatter="formatter"
/>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const currentDate = ref(new Date());

    const formatter = (type, val) => {
      if (type === 'month') {
        return `${val}月`;
      }
      if (type === 'day') {
        return `${val}日`;
      }
      return val;
    };

    return {
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      formatter,
      currentDate,
    };
  },
};
```

### 选择时间

将 type 设置为 `time` 即可选择时间（小时和分钟）。

```html
<van-datetime-picker
  v-model="currentTime"
  type="time"
  title="选择时间"
  :min-hour="10"
  :max-hour="20"
/>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const currentTime = ref('12:00');
    return { currentTime };
  },
};
```

### 选择完整时间

将 type 设置为 `datetime` 即可选择完整时间，包括年月日和小时、分钟。

```html
<van-datetime-picker
  v-model="currentDate"
  type="datetime"
  title="选择完整时间"
  :min-date="minDate"
  :max-date="maxDate"
/>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const currentDate = ref(new Date());
    return {
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate,
    };
  },
};
```

### 选择年月日小时

将 type 设置为 `datehour` 即可选择日期和小时，包括年月日和小时。

```html
<van-datetime-picker
  v-model="currentDate"
  type="datehour"
  title="选择年月日小时"
  :min-date="minDate"
  :max-date="maxDate"
/>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const currentDate = ref(new Date());
    return {
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate,
    };
  },
};
```

### 选项过滤器

通过传入 `filter` 函数，可以对选项数组进行过滤，实现自定义时间间隔。

```html
<van-datetime-picker v-model="currentTime" type="time" :filter="filter" />
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const currentTime = ref('12:00');

    const filter = (type, options) => {
      if (type === 'minute') {
        return options.filter((option) => Number(option) % 5 === 0);
      }
      return options;
    };

    return {
      filter,
      currentTime,
    };
  },
};
```

### 自定义列排序

```html
<van-datetime-picker
  v-model="currentDate"
  type="date"
  title="自定义列排序"
  :columns-order="['month', 'day', 'year']"
  :formatter="formatter"
/>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const currentDate = ref(new Date());

    const formatter = (type, val) => {
      if (type === 'year') {
        return val + '年';
      }
      if (type === 'month') {
        return val + '月';
      }
      if (type === 'day') {
        return val + '日';
      }
      return val;
    };

    return {
      formatter,
      currentDate,
    };
  },
};
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 时间类型，可选值为 `date` `time` <br> `year-month` `month-day` `datehour` | _string_ | `datetime` |
| title | 顶部栏标题 | _string_ | `''` |
| confirm-button-text | 确认按钮文字 | _string_ | `确认` |
| cancel-button-text | 取消按钮文字 | _string_ | `取消` |
| show-toolbar | 是否显示顶部栏 | _boolean_ | `true` |
| loading | 是否显示加载状态 | _boolean_ | `false` |
| readonly | 是否为只读状态，只读状态下无法切换选项 | _boolean_ | `false` |
| filter | 选项过滤函数 | _(type: string, values: string[]) => string[]_ | - |
| formatter | 选项格式化函数 | _(type: string, value: string) => string_ | - |
| columns-order | 自定义列排序数组, 子项可选值为<br> `year`、`month`、`day`、`hour`、`minute` | _string[]_ | - |
| item-height | 选项高度，支持 `px` `vw` `vh` `rem` 单位，默认 `px` | _number \| string_ | `44` |
| visible-item-count | 可见的选项个数 | _number \| string_ | `6` |
| swipe-duration | 快速滑动时惯性滚动的时长，单位`ms` | _number \| string_ | `1000` |

### DatePicker Props

当时间选择器类型为 date 或 datetime 时，支持以下 props:

| 参数     | 说明                       | 类型   | 默认值 |
| -------- | -------------------------- | ------ | ------ |
| min-date | 可选的最小时间，精确到分钟 | _Date_ | 十年前 |
| max-date | 可选的最大时间，精确到分钟 | _Date_ | 十年后 |

### TimePicker Props

当时间选择器类型为 time 时，支持以下 props:

| 参数       | 说明           | 类型               | 默认值 |
| ---------- | -------------- | ------------------ | ------ |
| min-hour   | 可选的最小小时 | _number \| string_ | `0`    |
| max-hour   | 可选的最大小时 | _number \| string_ | `23`   |
| min-minute | 可选的最小分钟 | _number \| string_ | `0`    |
| max-minute | 可选的最大分钟 | _number \| string_ | `59`   |

### Events

| 事件名  | 说明                     | 回调参数              |
| ------- | ------------------------ | --------------------- |
| change  | 当值变化时触发的事件     | value: 当前选中的时间 |
| confirm | 点击完成按钮时触发的事件 | value: 当前选中的时间 |
| cancel  | 点击取消按钮时触发的事件 | -                     |

### Slots

| 名称           | 说明                   | 参数                       |
| -------------- | ---------------------- | -------------------------- |
| default        | 自定义整个顶部栏的内容 | -                          |
| title          | 自定义标题内容         | -                          |
| confirm        | 自定义确认按钮内容     | -                          |
| cancel         | 自定义取消按钮内容     | -                          |
| option         | 自定义选项内容         | _option: string \| object_ |
| columns-top    | 自定义选项上方内容     | -                          |
| columns-bottom | 自定义选项下方内容     | -                          |

### 方法

通过 ref 可以获取到 DatetimePicker 实例并调用实例方法，详见[组件实例方法](#/zh-CN/advanced-usage#zu-jian-shi-li-fang-fa)。

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| getPicker | 获取 Picker 实例，用于调用 Picker 的[实例方法](#/zh-CN/picker#fang-fa) | - | - |

### 类型定义

组件导出以下类型定义：

```ts
import type {
  DatetimePickerType,
  DatetimePickerProps,
  DatetimePickerInstance,
} from 'vant';
```

`DatetimePickerInstance` 是组件实例的类型，用法如下：

```ts
import { ref } from 'vue';
import type { DatetimePickerInstance } from 'vant';

const datetimePickerRef = ref<DatetimePickerInstance>();

datetimePickerRef.value?.getPicker();
```

## 常见问题

### 设置 min-date 或 max-date 后出现页面卡死的情况？

请注意不要在模板中直接使用类似`min-date="new Date()"`的写法，这样会导致每次渲染组件时传入一个新的 Date 对象，而传入新的数据会触发下一次渲染，从而陷入死循环。

正确的做法是将`min-date`作为一个数据定义在`data`函数中。

### 在 iOS 系统上初始化组件失败？

如果你遇到了在 iOS 上无法渲染组件的问题，请确认在创建 Date 对象时没有使用`new Date('2020-01-01')`这样的写法，iOS 不支持以中划线分隔的日期格式，正确写法是`new Date('2020/01/01')`。

对此问题的详细解释：[stackoverflow](https://stackoverflow.com/questions/13363673/javascript-date-is-invalid-on-ios)。

### 在桌面端无法操作组件？

参见[桌面端适配](#/zh-CN/advanced-usage#zhuo-mian-duan-gua-pei)。

### 是否有年份或月份选择器？

如果仅需要选择年份或者月份，建议直接使用 [Picker](#/zh-CN/picker) 组件。
