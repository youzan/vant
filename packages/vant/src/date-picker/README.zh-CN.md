# DatePicker 日期选择

### 介绍

日期选择器，用于选择年、月、日，通常与[弹出层](#/zh-CN/popup)组件配合使用。

### 引入

通过以下方式来全局注册组件，更多注册方式请参考[组件注册](#/zh-CN/advanced-usage#zu-jian-zhu-ce)。

```js
import { createApp } from 'vue';
import { DatePicker } from 'vant';

const app = createApp();
app.use(DatePicker);
```

## 代码演示

### 基础用法

通过 `v-model` 绑定当前选中的日期，通过 `min-date` 和 `max-date` 属性来设定可选的时间范围。

```html
<van-date-picker
  v-model="currentDate"
  title="选择日期"
  :min-date="minDate"
  :max-date="maxDate"
/>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const currentDate = ref(['2021', '01', '01']);
    return {
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 5, 1),
      currentDate,
    };
  },
};
```

### 选项类型

通过 `columns-type` 属性可以控制选项的类型，支持以任意顺序对 `year`、`month` 和 `day` 进行排列组合。

比如：

- 传入 `['year']` 来单独选择年份。
- 传入 `['month']` 来单独选择月份。
- 传入 `['year', 'month']` 来选择年份和月份。
- 传入 `['month', 'day']` 来选择月份和日期。

```html
<van-date-picker
  v-model="currentDate"
  title="选择年月"
  :min-date="minDate"
  :max-date="maxDate"
  :columns-type="columnsType"
/>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const currentDate = ref(['2021', '01']);
    const columnsType = ['year', 'month'];
    return {
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 5, 1),
      currentDate,
      columnsType,
    };
  },
};
```

### 格式化选项

通过传入 `formatter` 函数，可以对选项文字进行格式化处理。

```html
<van-date-picker
  v-model="currentDate"
  title="选择年月"
  :min-date="minDate"
  :max-date="maxDate"
  :formatter="formatter"
  :columns-type="columnsType"
/>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const currentDate = ref(['2021', '01']);
    const columnsType = ['year', 'month'];

    const formatter = (type, option) => {
      if (type === 'year') {
        option.text += '年';
      }
      if (type === 'month') {
        option.text += '月';
      }
      return option;
    };

    return {
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 5, 1),
      formatter,
      currentDate,
      columnsType,
    };
  },
};
```

### 过滤选项

通过传入 `filter` 函数，可以对选项数组进行过滤，实现自定义选项间隔。

```html
<van-date-picker
  v-model="currentDate"
  title="选择年月"
  :filter="filter"
  :min-date="minDate"
  :max-date="maxDate"
  :columns-type="columnsType"
/>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const currentDate = ref(['2021', '01']);
    const columnsType = ['year', 'month'];
    const filter = (type, options) => {
      if (type === 'month') {
        return options.filter((option) => Number(option.value) % 6 === 0);
      }
      return options;
    };

    return {
      filter,
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 5, 1),
      currentTime,
      columnsType,
    };
  },
};
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model | 当前选中的日期 | _string[]_ | `[]` |
| columns-type | 选项类型，由 `year`、`month` 和 `day` 组成的数组 | _string[]_ | `['year', 'month', 'day']` |
| min-date | 可选的最小时间，精确到日 | _Date_ | 十年前 |
| max-date | 可选的最大时间，精确到日 | _Date_ | 十年后 |
| title | 顶部栏标题 | _string_ | `''` |
| confirm-button-text | 确认按钮文字 | _string_ | `确认` |
| cancel-button-text | 取消按钮文字 | _string_ | `取消` |
| show-toolbar | 是否显示顶部栏 | _boolean_ | `true` |
| loading | 是否显示加载状态 | _boolean_ | `false` |
| readonly | 是否为只读状态，只读状态下无法切换选项 | _boolean_ | `false` |
| filter | 选项过滤函数 | _(type: string, options: PickerOption[]) => PickerOption[]_ | - |
| formatter | 选项格式化函数 | _(type: string, option: PickerOption) => PickerOption_ | - |
| option-height | 选项高度，支持 `px` `vw` `vh` `rem` 单位，默认 `px` | _number \| string_ | `44` |
| visible-option-num | 可见的选项个数 | _number \| string_ | `6` |
| swipe-duration | 快速滑动时惯性滚动的时长，单位 `ms` | _number \| string_ | `1000` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| confirm | 点击完成按钮时触发 | _{ selectedValues, selectedOptions }_ |
| cancel | 点击取消按钮时触发 | _{ selectedValues, selectedOptions }_ |
| change | 选项改变时触发 | _{ selectedValues, selectedOptions, columnIndex }_ |

### Slots

| 名称 | 说明 | 参数 |
| --- | --- | --- |
| toolbar | 自定义整个顶部栏的内容 | - |
| title | 自定义标题内容 | - |
| confirm | 自定义确认按钮内容 | - |
| cancel | 自定义取消按钮内容 | - |
| option | 自定义选项内容 | _option: PickerOption, index: number_ |
| columns-top | 自定义选项上方内容 | - |
| columns-bottom | 自定义选项下方内容 | - |

### 类型定义

组件导出以下类型定义：

```ts
import type { DatePickerProps, DatePickerColumnType } from 'vant';
```

## 常见问题

### 设置 min-date 或 max-date 后出现页面卡死的情况？

请注意不要在模板中直接使用类似 `min-date="new Date()"` 的写法，这样会导致每次渲染组件时传入一个新的 Date 对象，而传入新的数据会触发下一次渲染，从而陷入死循环。

正确的做法是将 `min-date` 作为一个数据定义在 `data` 函数或 `setup` 中。

### 在 iOS 系统上初始化组件失败？

如果你遇到了在 iOS 上无法渲染组件的问题，请确认在创建 Date 对象时没有使用 `new Date('2020-01-01')` 这样的写法，iOS 不支持以中划线分隔的日期格式，正确写法是 `new Date('2020/01/01')`。

对此问题的详细解释：[stackoverflow](https://stackoverflow.com/questions/13363673/javascript-date-is-invalid-on-ios)。

### 在桌面端无法操作组件？

参见[桌面端适配](#/zh-CN/advanced-usage#zhuo-mian-duan-gua-pei)。
