# DatetimePicker

### Intro

Used to select time, support date and time dimensions, usually used with the [Popup](#/en-US/popup) component.

### Install

```js
import Vue from 'vue';
import { DatetimePicker } from 'vant';

Vue.use(DatetimePicker);
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
export default {
  data() {
    return {
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate: new Date(2021, 0, 17),
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
export default {
  data() {
    return {
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate: new Date(),
    };
  },
  methods: {
    formatter(type, val) {
      if (type === 'year') {
        return `${val} Year`;
      } else if (type === 'month') {
        return `${val} Month`;
      }
      return val;
    },
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
export default {
  data() {
    return {
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate: new Date(),
    };
  },
  methods: {
    formatter(type, val) {
      if (type === 'month') {
        return `${val} Month`;
      } else if (type === 'day') {
        return `${val} Day`;
      }
      return val;
    },
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
export default {
  data() {
    return {
      currentTime: '12:00',
    };
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
export default {
  data() {
    return {
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate: new Date(),
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
export default {
  data() {
    return {
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate: new Date(),
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
export default {
  data() {
    return {
      currentTime: '12:00',
    };
  },
  methods: {
    filter(type, options) {
      if (type === 'minute') {
        return options.filter((option) => option % 5 === 0);
      }
      return options;
    },
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
export default {
  data() {
    return {
      currentDate: new Date(),
    };
  },
  methods: {
    formatter(type, val) {
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
    },
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
| readonly `v2.10.5` | Whether to be readonly | _boolean_ | `false` |
| filter | Option filter | _(type, vals) => vals_ | - |
| formatter | Option text formatter | _(type, val) => val_ | - |
| columns-order `v2.9.2` | Array for ordering columns, where item can be set to<br> `year`, `month`, `day`, `hour` and `minute` | _string[]_ | - |
| item-height `v2.8.6` | Option height, supports `px` `vw` `vh` `rem` unit, default `px` | _number \| string_ | `44` |
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

| Event | Description | Arguments |
| --- | --- | --- |
| change | Emitted when value changed | picker: Picker instance |
| confirm | Emitted when the confirm button is clicked | value: current value |
| cancel | Emitted when the cancel button is clicked | - |

### Slots

| Name | Description | SlotProps |
| --- | --- | --- |
| default `v2.11.1` | Custom toolbar content | - |
| title `v2.11.1` | Custom title | - |
| confirm `v2.11.1` | Custom confirm button text | - |
| cancel `v2.11.1` | Custom cancel button text | - |
| option `v2.11.1` | Custom option content | _option: string \| object_ |
| columns-top `v2.11.1` | Custom content above columns | - |
| columns-bottom `v2.11.1` | Custom content below columns | - |

### Methods

Use [ref](https://vuejs.org/v2/api/#ref) to get DatetimePicker instance and call instance methods.

| Name               | Description         | Attribute | Return value |
| ------------------ | ------------------- | --------- | ------------ |
| getPicker `v2.5.3` | get Picker instance | -         | -            |
