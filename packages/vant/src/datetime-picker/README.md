# DatetimePicker

### Intro

Used to select time, support date and time dimensions, usually used with the [Popup](#/en-US/popup) component.

### Install

Register component globally via `app.use`, refer to [Component Registration](#/en-US/advanced-usage#zu-jian-zhu-ce) for more registration ways.

```js
import { createApp } from 'vue';
import { DatetimePicker } from 'vant';

const app = createApp();
app.use(DatetimePicker);
```

## Usage

### Choose Date

```html
<van-datetime-picker
  v-model="currentDate"
  type="date"
  title="Choose Date"
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

### Choose Year-Month

```html
<van-datetime-picker
  v-model="currentDate"
  type="year-month"
  title="Choose Year-Month"
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
        return `${val} Year`;
      }
      if (type === 'month') {
        return `${val} Month`;
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

### Choose Month-Day

```html
<van-datetime-picker
  v-model="currentDate"
  type="month-day"
  title="Choose Month-Day"
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
        return `${val} Month`;
      }
      if (type === 'day') {
        return `${val} Day`;
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

### Choose Time

```html
<van-datetime-picker
  v-model="currentTime"
  type="time"
  title="Choose Time"
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

### Choose DateTime

```html
<van-datetime-picker
  v-model="currentDate"
  type="datetime"
  title="Choose DateTime"
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

### Choose DateHour

```html
<van-datetime-picker
  v-model="currentDate"
  type="datehour"
  title="Choose DateTime"
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

### Option Filter

```html
<van-datetime-picker
  v-model="currentTime"
  type="time"
  title="Option Filter"
  :filter="filter"
/>
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

### Columns Order

```html
<van-datetime-picker
  v-model="currentDate"
  type="date"
  title="Columns Order"
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
        return val + ' Year';
      }
      if (type === 'month') {
        return val + ' Month';
      }
      if (type === 'day') {
        return val + ' Day';
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

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| type | Can be set to `date` `time`<br> `year-month` `month-day` `datehour` | _string_ | `datetime` |
| title | Toolbar title | _string_ | `''` |
| confirm-button-text | Text of confirm button | _string_ | `Confirm` |
| cancel-button-text | Text of cancel button | _string_ | `Cancel` |
| show-toolbar | Whether to show toolbar | _boolean_ | `true` |
| loading | Whether to show loading prompt | _boolean_ | `false` |
| readonly | Whether to be readonly | _boolean_ | `false` |
| filter | Option filter | _(type: string, values: string[]) => string[]_ | - |
| formatter | Option text formatter | _(type: string, value: string) => string_ | - |
| columns-order | Array for ordering columns, where item can be set to<br> `year`, `month`, `day`, `hour` and `minute` | _string[]_ | - |
| item-height | Option height, supports `px` `vw` `vh` `rem` unit, default `px` | _number \| string_ | `44` |
| visible-item-count | Count of visible columns | _number \| string_ | `6` |
| swipe-duration | Duration of the momentum animation，unit `ms` | _number \| string_ | `1000` |

### DatePicker Props

Following props are supported when the type is date or datetime

| Attribute | Description | Type   | Default                        |
| --------- | ----------- | ------ | ------------------------------ |
| min-date  | Min date    | _Date_ | Ten years ago on January 1     |
| max-date  | Max date    | _Date_ | Ten years later on December 31 |

### TimePicker Props

Following props are supported when the type is time

| Attribute  | Description                | Type               | Default |
| ---------- | -------------------------- | ------------------ | ------- |
| min-hour   | Min hour for `time` type   | _number \| string_ | `0`     |
| max-hour   | Max hour for `time` type   | _number \| string_ | `23`    |
| min-minute | Max minute for `time` type | _number \| string_ | `0`     |
| max-minute | Max minute for `time` type | _number \| string_ | `59`    |

### Events

| Event   | Description                                | Arguments            |
| ------- | ------------------------------------------ | -------------------- |
| change  | Emitted when value changed                 | value: current value |
| confirm | Emitted when the confirm button is clicked | value: current value |
| cancel  | Emitted when the cancel button is clicked  | -                    |

### Slots

| Name           | Description                  | SlotProps                  |
| -------------- | ---------------------------- | -------------------------- |
| default        | Custom toolbar content       | -                          |
| title          | Custom title                 | -                          |
| confirm        | Custom confirm button text   | -                          |
| cancel         | Custom cancel button text    | -                          |
| option         | Custom option content        | _option: string \| object_ |
| columns-top    | Custom content above columns | -                          |
| columns-bottom | Custom content below columns | -                          |

### Methods

Use [ref](https://v3.vuejs.org/guide/component-template-refs.html) to get DatetimePicker instance and call instance methods.

| Name      | Description         | Attribute | Return value |
| --------- | ------------------- | --------- | ------------ |
| getPicker | get Picker instance | -         | -            |

### Types

The component exports the following type definitions:

```ts
import type {
  DatetimePickerType,
  DatetimePickerProps,
  DatetimePickerInstance,
} from 'vant';
```

`DatetimePickerInstance` is the type of component instance:

```ts
import { ref } from 'vue';
import type { DatetimePickerInstance } from 'vant';

const datetimePickerRef = ref<DatetimePickerInstance>();

datetimePickerRef.value?.getPicker();
```
