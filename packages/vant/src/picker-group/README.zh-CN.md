# PickerGroup 选择器组

### 介绍

用于结合多个 Picker 选择器组件，在一次交互中完成多个值的选择。

PickerGroup 中可以放置以下组件：

- [Picker](#/zh-CN/picker)
- [Area](#/zh-CN/area)
- [DatePicker](#/zh-CN/date-picker)
- [TimePicker](<(#/zh-CN/time-picker)>)
- 其他基于 Picker 封装的自定义组件

### 引入

通过以下方式来全局注册组件，更多注册方式请参考[组件注册](#/zh-CN/advanced-usage#zu-jian-zhu-ce)。

```js
import { createApp } from 'vue';
import { PickerGroup } from 'vant';

const app = createApp();
app.use(PickerGroup);
```

## 代码演示

### 选择日期时间

在 `PickerGroup` 的默认插槽中放置一个 `DatePicker` 组件和一个 `TimePicker` 组件，可以实现同时选择日期和时间的交互效果。

`PickerGroup` 会代替子组件来渲染统一的标题栏，这意味着子组件不会渲染单独的标题栏，与标题栏有关的 props 和 events 需要设置到 `PickerGroup` 上，比如 `title` 属性、`confirm` 事件、`cancel` 事件等，而子组件中与标题栏无关的属性和事件可以正常使用。

```html
<van-picker-group
  title="预约日期"
  :tabs="['选择日期', '选择时间']"
  @confirm="onConfirm"
  @cancel="onCancel"
>
  <van-date-picker
    v-model="currentDate"
    :min-date="minDate"
    :max-date="maxDate"
  />
  <van-time-picker v-model="currentTime" />
</van-picker-group>
```

```js
import { ref } from 'vue';
import { showToast } from 'vant';

export default {
  setup() {
    const currentDate = ref(['2022', '06', '01']);
    const currentTime = ref(['12', '00']);
    const onConfirm = () => {
      showToast(
        `${currentDate.value.join('/')} ${currentTime.value.join(':')}`
      );
    };
    const onCancel = () => {
      showToast('cancel');
    };

    return {
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 5, 1),
      currentDate,
      currentTime,
    };
  },
};
```

### 选择日期范围

在 `PickerGroup` 的默认插槽中放置两个 `DatePicker` 组件，可以实现选择日期范围的交互效果。

```html
<van-picker-group
  title="预约日期"
  :tabs="['开始日期', '结束日期']"
  @confirm="onConfirm"
  @cancel="onCancel"
>
  <van-date-picker v-model="startEnd" :min-date="minDate" :max-date="maxDate" />
  <van-date-picker v-model="endDate" :min-date="minDate" :max-date="maxDate" />
</van-picker-group>
```

```js
import { ref } from 'vue';
import { showToast } from 'vant';

export default {
  setup() {
    const startDate = ref(['2022', '06', '01']);
    const endDate = ref(['2023', '06', '01']);

    const onConfirm = () => {
      showToast(`${startDate.value.join('/')} ${endDate.value.join('/')}`);
    };
    const onCancel = () => {
      showToast('cancel');
    };

    return {
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 5, 1),
      endDate,
      startDate,
    };
  },
};
```

### 选择时间范围

在 `PickerGroup` 的默认插槽中放置两个 `TimePicker` 组件，可以实现选择时间范围的交互效果。

```html
<van-picker-group
  title="预约时间"
  :tabs="['开始时间', '结束时间']"
  @confirm="onConfirm"
  @cancel="onCancel"
>
  <van-time-picker v-model="startEnd" />
  <van-time-picker v-model="endDate" />
</van-picker-group>
```

```js
import { ref } from 'vue';
import { showToast } from 'vant';

export default {
  setup() {
    const startTime = ref(['12', '00']);
    const endTime = ref(['12', '00']);

    const onConfirm = () => {
      showToast(`${startTime.value.join(':')} ${endTime.value.join(':')}`);
    };
    const onCancel = () => {
      showToast('cancel');
    };

    return {
      endTime,
      startTime,
    };
  },
};
```

## API

### Props

| 参数                | 说明         | 类型     | 默认值 |
| ------------------- | ------------ | -------- | ------ |
| title               | 顶部栏标题   | _string_ | `''`   |
| confirm-button-text | 确认按钮文字 | _string_ | `确认` |
| cancel-button-text  | 取消按钮文字 | _string_ | `取消` |

### Slots

| 名称    | 说明                   | 参数 |
| ------- | ---------------------- | ---- |
| toolbar | 自定义整个顶部栏的内容 | -    |
| title   | 自定义标题内容         | -    |
| confirm | 自定义确认按钮内容     | -    |
| cancel  | 自定义取消按钮内容     | -    |

### 类型定义

组件导出以下类型定义：

```ts
import type { PickerGroupProps } from 'vant';
```
