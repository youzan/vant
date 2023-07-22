# PickerGroup

### Intro

Used to combine multiple Picker components, allow users to select multiple value.

The following components can be placed inside PickerGroup:

- [Picker](#/en-US/picker)
- [Area](#/en-US/area)
- [DatePicker](#/en-US/date-picker)
- [TimePicker](#/en-US/time-picker)
- Other custom components based on Picker component

### Install

Register component globally via `app.use`, refer to [Component Registration](#/en-US/advanced-usage#zu-jian-zhu-ce) for more registration ways.

```js
import { createApp } from 'vue';
import { PickerGroup } from 'vant';

const app = createApp();
app.use(PickerGroup);
```

## Usage

### Select Date Time

Place a `DatePicker` component and a `TimePicker` component in the default slot of the `PickerGroup` to select both a date and a time.

`PickerGroup` will render a unified toolbar, so the child components will not render is's toolbar, and the toolbar props and events need to be set to the `PickerGroup`, such as the `title` prop, `confirm` event, `cancel` event, etc. Other props and events in child components can be used as before.

```html
<van-picker-group
  title="Title"
  :tabs="['Date', 'Time']"
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

### Next Step Button

In some scenarios, in order to ensure that users can select all Pickers in turn, you can set the `next-step-text` prop of PickerGroup. After setting the `next-step-text` prop, if the user has not switched to the last tab, the button in the upper right corner will become "Next Step", and automatically switch to the next Picker after clicking. When the user switches to the last tab, the button in the upper right corner changes to "Confirm".

```html
<van-picker-group
  title="Title"
  :tabs="['Date', 'Time']"
  next-step-text="Next Step"
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

### Select Date Range

Place two `DatePicker` components in the default slot of `PickerGroup` to select the time range.

```html
<van-picker-group
  title="Title"
  :tabs="['Start Date', 'End Date']"
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

### Select Time Range

Place two `TimePicker` components in the default slot of `PickerGroup` to select the time range.

```html
<van-picker-group
  title="Title"
  :tabs="['Start Time', 'End Time']"
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

### Controlled Mode

Supports both uncontrolled and controlled modes:

- When `v-model:active-tab` is not bound, the PickerGroup component completely controls the `tab` switching.
- When `v-model:active-tab` is bound, PickerGroup supports controlled mode, and the `tab` switching is controlled by both the `v-model:active-tab` value and the component itself.

```html
<van-button type="primary" @click="setActiveTab">
  toggle tab, current {{ activeTab }}
</van-button>
<van-picker-group
  v-model:active-tab="activeTab"
  title="Title"
  :tabs="['Date', 'Time']"
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

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| v-model:active-tab `v4.3.2` | Set index of active tab | _number \| string_ | `0` |
| tabs | Titles of tabs | _string[]_ | `[]` |
| title | Toolbar title | _string_ | `''` |
| next-step-text `v4.0.8` | Text of next step button | _string_ | `''` |
| confirm-button-text | Text of confirm button | _string_ | `Confirm` |
| cancel-button-text | Text of cancel button | _string_ | `Cancel` |

### Slots

| Name    | Description                | SlotProps |
| ------- | -------------------------- | --------- |
| toolbar | Custom toolbar content     | -         |
| title   | Custom title               | -         |
| confirm | Custom confirm button text | -         |
| cancel  | Custom cancel button text  | -         |

### Types

The component exports the following type definitions:

```ts
import type { PickerGroupProps, PickerGroupThemeVars } from 'vant';
```

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/config-provider).

| Name                          | Default Value        | Description |
| ----------------------------- | -------------------- | ----------- |
| --van-picker-group-background | _--van-background-2_ | -           |
