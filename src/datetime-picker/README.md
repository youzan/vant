# DatetimePicker

### Intro

Used to select time, support date and time dimensions, usually used with the [Popup](#/en-US/popup) component.

### Install

``` javascript
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

```javascript
export default {
  data() {
    return {
      minHour: 10,
      maxHour: 20,
      minDate: new Date(),
      maxDate: new Date(2019, 10, 1),
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
/>
```

```js
export default {
  data() {
    return {
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
  :formatter="formatter"
/>
```

```js
export default {
  data() {
    return {
      currentDate: new Date()
    };
  },

  methods: {
    formatter(type, value) {
      if (type === 'year') {
        return `${value} Year`;
      } else if (type === 'month') {
        return `${value} Month`
      }
      return value;
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

| Attribute | Description | Type | Default | Version |
|------|------|------|------|------|
| type | Can be set to `date` `time`<br> `year-month` | *string* | `datetime` | - |
| min-date | Min date | *Date* | Ten years ago on January 1 | - |
| max-date | Max date | *Date* | Ten years later on December 31 | - |
| min-hour | Min hour for `time` type | *number* | `0` | - |
| max-hour | Max hour for `time` type | *number* | `23` | - |
| min-minute | Max minute for `time` type | *number* | `0` | - |
| max-minute | Max minute for `time` type | *number* | `59` | - |
| filter | Option filter | *(type, values) => values* | - | - |
| formatter | Option text formatter | *(type, value) => value* | - | - |
| title | Toolbar title | *string* | `''` | - |
| show-toolbar | Whether to show toolbar | *boolean* | `true` | - |
| loading | Whether to show loading prompt | *boolean* | `false` | - |
| item-height | Option height | *number* | `44` | - |
| confirm-button-text | Text of confirm button | *string* | `Confirm` | - |
| cancel-button-text | Text of cancel button | *string* | `Cancel` | - |
| visible-item-count | Count of visible columns | *number* | `5` | - |

### Events

| Event | Description | Arguments |
|------|------|------|
| change | Triggered when value changed | picker: picker instance |
| confirm | Triggered when click confirm button | value: current value |
| cancel | Triggered when click cancel button | - |
