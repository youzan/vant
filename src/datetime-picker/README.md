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

### Choose DateTime

```html
<van-datetime-picker
  v-model="currentDate"
  type="datetime"
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
      currentDate: new Date()
    };
  }
};
```

### Choose Date

```html
<van-datetime-picker
  v-model="currentDate"
  type="date"
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
      currentDate: new Date()
    };
  }
}
```

### Choose Year-Month

```html
<van-datetime-picker
  v-model="currentDate"
  type="year-month"
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
      currentDate: new Date()
    };
  },
  methods: {
    formatter(type, val) {
      if (type === 'year') {
        return `${val} Year`;
      } else if (type === 'month') {
        return `${val} Month`
      }
      return val;
    }
  }
}
```

### Choose Time

```html
<van-datetime-picker
  v-model="currentTime"
  type="time"
  :min-hour="10"
  :max-hour="20"
/>
```

```js
export default {
  data() {
    return {
      currentTime: '12:00'
    };
  }
}
```

### Option Filter

```html
<van-datetime-picker
  v-model="currentTime"
  type="time"
  :filter="filter"
/>
```

```js
export default {
  data() {
    return {
      currentTime: '12:00'
    };
  },
  methods: {
    filter(type, options) {
      if (type === 'minute') {
        return options.filter(option => option % 5 === 0)
      }

      return options;
    }
  }
}
```

## API

### Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| type | Can be set to `date` `time`<br> `year-month` | *string* | `datetime` |
| title | Toolbar title | *string* | `''` |
| confirm-button-text | Text of confirm button | *string* | `Confirm` |
| cancel-button-text | Text of cancel button | *string* | `Cancel` |
| show-toolbar | Whether to show toolbar | *boolean* | `true` |
| loading | Whether to show loading prompt | *boolean* | `false` |
| filter | Option filter | *(type, vals) => vals* | - |
| formatter | Option text formatter | *(type, val) => val* | - |
| item-height | Option height | *number \| string* | `44` |
| visible-item-count | Count of visible columns | *number \| string* | `5` |
| swipe-duration `v2.2.13` | Duration of the momentum animation，unit `ms` | *number \| string*  | `1000` |

### DatePicker Props

Following props are supported when the type is date or datetime

| Attribute | Description | Type | Default |
|------|------|------|------|
| min-date | Min date | *Date* | Ten years ago on January 1 |
| max-date | Max date | *Date* | Ten years later on December 31 |

### TimePicker Props

Following props are supported when the type is time

| Attribute | Description | Type | Default |
|------|------|------|------|
| min-hour | Min hour for `time` type | *number \| string* | `0` |
| max-hour | Max hour for `time` type | *number \| string* | `23` |
| min-minute | Max minute for `time` type | *number \| string* | `0` |
| max-minute | Max minute for `time` type | *number \| string* | `59` |

### Events

| Event | Description | Arguments |
|------|------|------|
| change | Triggered when value changed | picker: Picker instance |
| confirm | Triggered when click confirm button | value: current value |
| cancel | Triggered when click cancel button | - |

### Methods

Use [ref](https://vuejs.org/v2/api/#ref) to get DatetimePicker instance and call instance methods

| Name | Description | Attribute | Return value |
|------|------|------|------|
| getPicker `v2.5.3` | get Picker instance | - | - |
