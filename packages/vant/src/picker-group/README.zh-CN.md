# PickerGroup 选择器组

### 介绍

用于结合多个 Picker 选择器组件，在一次交互中完成多个值的选择。

PickerGroup 中可以放置以下组件：

- [Picker](#/zh-CN/picker)
- [Area](#/zh-CN/area)
- [DatePicker](#/zh-CN/date-picker)
- [TimePicker](#/zh-CN/time-picker)
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
        `${currentDate.value.join('/')} ${currentTime.value.join(':')}`,
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
      onConfirm,
      onCancel,
    };
  },
};
```

### 下一步按钮

部分场景下，为了保证用户能够依次选择所有的 Picker，你可以设置 PickerGroup 的 `next-step-text` 属性。在设置 `next-step-text` 属性后，如果用户未切换到最后一个标签页，那么右上角的按钮会变成「下一步」，点击后自动切换到下一个 Picker。当用户切换到最后一个标签页时，右上角的按钮会变为「确认」。

```html
<van-picker-group
  title="预约日期"
  :tabs="['选择日期', '选择时间']"
  next-step-text="下一步"
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
        `${currentDate.value.join('/')} ${currentTime.value.join(':')}`,
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
      onConfirm,
      onCancel,
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
  <van-date-picker
    v-model="startDate"
    :min-date="minDate"
    :max-date="maxDate"
  />
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
      onConfirm,
      onCancel,
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
  <van-time-picker v-model="startTime" />
  <van-time-picker v-model="endTime" />
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
      onConfirm,
      onCancel,
    };
  },
};
```

### 受控模式

`PickerGroup` 中 `tab` 的切换支持非受控模式和受控模式：

- 当未绑定 `v-model:active-tab` 时，PickerGroup 组件 `tab` 的切换完全由组件自身控制。
- 当绑定 `v-model:active-tab` 时，PickerGroup 支持受控模式，此时组件 `tab` 的切换同时支持 `v-model:active-tab` 的值和组件本身控制。

```html
<van-button type="primary" @click="setActiveTab">
  点击切换 tab，当前为 {{ activeTab }}
</van-button>
<van-picker-group
  v-model:active-tab="activeTab"
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
    const activeTab = ref(0);
    const currentDate = ref(['2022', '06', '01']);
    const currentTime = ref(['12', '00']);

    const setActiveTab = () => {
      activeTab.value = activeTab.value ? 0 : 1;
    };

    const onConfirm = () => {
      showToast(
        `${currentDate.value.join('/')} ${currentTime.value.join(':')}`,
      );
    };

    const onCancel = () => {
      showToast('cancel');
    };

    return {
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 5, 1),
      activeTab,
      currentDate,
      currentTime,
      setActiveTab,
      onConfirm,
      onCancel,
    };
  },
};
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model:active-tab `v4.3.2` | 设置当前选中的标签 | _number \| string_ | `0` |
| tabs | 设置标签页的标题 | _string[]_ | `[]` |
| title | 顶部栏标题 | _string_ | `''` |
| next-step-text `v4.0.8` | 下一步按钮的文字 | _string_ | `''` |
| confirm-button-text | 确认按钮的文字 | _string_ | `确认` |
| cancel-button-text | 取消按钮的文字 | _string_ | `取消` |

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
import type { PickerGroupProps, PickerGroupThemeVars } from 'vant';
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称                          | 默认值               | 描述 |
| ----------------------------- | -------------------- | ---- |
| --van-picker-group-background | _--van-background-2_ | -    |
