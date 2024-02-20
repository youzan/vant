# TimePicker 时间选择

### 介绍

时间选择器，通常与[弹出层](#/zh-CN/popup)组件配合使用。

### 引入

通过以下方式来全局注册组件，更多注册方式请参考[组件注册](#/zh-CN/advanced-usage#zu-jian-zhu-ce)。

```js
import { createApp } from 'vue';
import { TimePicker } from 'vant';

const app = createApp();
app.use(TimePicker);
```

## 代码演示

### 基础用法

通过 `v-model` 绑定当前选中的时间。

```html
<van-time-picker v-model="currentTime" title="选择时间" />
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const currentTime = ref(['12', '00']);
    return { currentTime };
  },
};
```

### 选项类型

通过 `columns-type` 属性可以控制选项的类型，支持以任意顺序对 `hour`、`minute` 和 `second` 进行排列组合。

比如：

- 传入 `['hour']` 来单独选择小时。
- 传入 `['minute']` 来单独选择分钟。
- 传入 `['minute', 'second']` 来选择分钟和秒。
- 传入 `['hour', 'minute', 'second']` 来选择小时、分钟和秒。

```html
<van-time-picker
  v-model="currentTime"
  title="选择时间"
  :columns-type="columnsType"
/>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const currentTime = ref(['12', '00', '00']);
    const columnsType = ['hour', 'minute', 'second'];
    return {
      currentTime,
      columnsType,
    };
  },
};
```

### 时间范围

你可以使用 `min-hour` 和 `max-hour` 等属性来限制小时（hour）范围、分钟（minute）范围和秒（second）范围。

比如以下示例，用户可以选择的小时是 `10 ~ 20` ，分钟是 `30 ~ 40`。

```html
<van-time-picker
  v-model="currentTime"
  title="选择时间"
  :min-hour="10"
  :max-hour="20"
  :min-minute="30"
  :max-minute="40"
/>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const currentTime = ref(['12', '35']);
    return { currentTime };
  },
};
```

### 整体时间范围

你可以使用 `min-time` 和 `max-time` 属性来限制整体时间范围，约定格式 `10:00:00`。

- 设置 `min-time` 后，`min-hour`、`min-minute`、`min-second` 属性将不会生效。
- 设置 `max-time` 后，`max-hour`、`max-minute`、`max-second` 属性将不会生效。

比如以下示例，用户可以选择从 `09:40:10` 到 `20:20:50` 的任意时间。

```html
<van-time-picker
  v-model="currentTime"
  title="选择时间"
  :columns-type="['hour', 'minute', 'second']"
  min-time="09:40:10"
  max-time="20:20:50"
/>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const currentTime = ref(['12', '00', '00']);
    return { currentTime };
  },
};
```

### 格式化选项

通过传入 `formatter` 函数，可以对选项的文字进行格式化。

```html
<van-time-picker
  v-model="currentTime"
  title="选择时间"
  :formatter="formatter"
/>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const currentTime = ref(['12', '00']);
    const formatter = (type, option) => {
      if (type === 'hour') {
        option.text += '时';
      }
      if (type === 'minute') {
        option.text += '分';
      }
      return option;
    };

    return {
      formatter,
      currentTime,
    };
  },
};
```

### 过滤选项

通过传入 `filter` 函数，可以对选项数组进行过滤，剔除不需要的时间，实现自定义时间间隔。

```html
<van-time-picker v-model="currentTime" title="选择时间" :filter="filter" />
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const currentTime = ref(['12', '00']);
    const filter = (type, options) => {
      if (type === 'minute') {
        return options.filter((option) => Number(option.value) % 10 === 0);
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

### 高级用法

`filter` 函数的第三个参数能获取到当前选择的时间，这在使用非受控模式时，可以更灵活地过滤掉不需要的时间。

```html
<van-time-picker title="选择时间" :filter="filter" />
```

```js
export default {
  setup() {
    const filter = (type, options, values) => {
      const hour = +values[0];

      if (type === 'hour') {
        return options.filter(
          (option) => Number(option.value) >= 8 && Number(option.value) <= 18,
        );
      }

      if (type === 'minute') {
        options = options.filter((option) => Number(option.value) % 10 === 0);

        if (hour === 8) {
          return options.filter((option) => Number(option.value) >= 40);
        }

        if (hour === 18) {
          return options.filter((option) => Number(option.value) <= 20);
        }
      }

      return options;
    };

    return {
      filter,
    };
  },
};
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model | 当前选中的时间 | _string[]_ | - |
| columns-type | 选项类型，由 `hour`、`minute` 和 `second` 组成的数组 | _string[]_ | `['hour', 'minute']` |
| min-hour | 可选的最小小时 | _number \| string_ | `0` |
| max-hour | 可选的最大小时 | _number \| string_ | `23` |
| min-minute | 可选的最小分钟 | _number \| string_ | `0` |
| max-minute | 可选的最大分钟 | _number \| string_ | `59` |
| min-second | 可选的最小秒数 | _number \| string_ | `0` |
| max-second | 可选的最大秒数 | _number \| string_ | `59` |
| min-time `v4.5.0` | 可选的最小时间，格式参考 `07:40:00`，使用时 `min-hour` `min-minute` `min-second` 不会生效 | _string_ | - |
| max-time `v4.5.0` | 可选的最大时间，格式参考 `10:20:00`，使用时 `max-hour` `max-minute` `max-second` 不会生效 | _string_ | - |
| title | 顶部栏标题 | _string_ | `''` |
| confirm-button-text | 确认按钮文字 | _string_ | `确认` |
| cancel-button-text | 取消按钮文字 | _string_ | `取消` |
| show-toolbar | 是否显示顶部栏 | _boolean_ | `true` |
| loading | 是否显示加载状态 | _boolean_ | `false` |
| readonly | 是否为只读状态，只读状态下无法切换选项 | _boolean_ | `false` |
| filter | 选项过滤函数 | _(type: string, options: PickerOption[], values: string[]) => PickerOption[]_ | - |
| formatter | 选项格式化函数 | _(type: string, option: PickerOption) => PickerOption_ | - |
| option-height | 选项高度，支持 `px` `vw` `vh` `rem` 单位，默认 `px` | _number \| string_ | `44` |
| visible-option-num | 可见的选项个数 | _number \| string_ | `6` |
| swipe-duration | 快速滑动时惯性滚动的时长，单位 `ms` | _number \| string_ | `1000` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| confirm | 点击完成按钮时触发 | _{ selectedValues, selectedOptions, selectedIndexes }_ |
| cancel | 点击取消按钮时触发 | _{ selectedValues, selectedOptions, selectedIndexes }_ |
| change | 选项改变时触发 | _{ selectedValues, selectedOptions, selectedIndexes, columnIndex }_ |

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
import type { TimePickerProps, TimePickerColumnType } from 'vant';
```

## 常见问题

### 在桌面端无法操作组件？

参见[桌面端适配](#/zh-CN/advanced-usage#zhuo-mian-duan-gua-pei)。
