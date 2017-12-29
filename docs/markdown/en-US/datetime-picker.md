## DatetimePicker

### Install
``` javascript
import { DatetimePicker } from 'vant';

Vue.use(DatetimePicker);
```

### Usage

#### Basic Usage

```html
<van-datetime-picker
  v-model="currentDate"
  type="datetime"
  :min-hour="minHour"
  :max-hour="maxHour"
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
      currentDate: new Date(2018, 0, 1)
    };
  }
};
```

#### Date Picker

```html
<van-datetime-picker
  v-model="currentDate"
  type="date"
  :min-hour="minHour"
  :max-hour="maxHour"
  :min-date="minDate"
/>
```

#### Time Picker

```html
<van-datetime-picker
  v-model="currentDate3"
  type="time"
  :min-hour="minHour"
  :max-hour="maxHour"
  :min-date="minDate"
/>
```

### API

| Attribute | Description | Type | Default | Accepted Values |
|-----------|-----------|-----------|-------------|-------------|
| type | Picker type | `String` | 'datetime' |  'date', 'time' |
| min-date | Min date | `Date` | Ten years ago on January 1 | - |
| max-date | Max date | `Date` | Ten years later on December 31 | - |
| min-hour | Min hour | `Number` | `0` | - |
| max-hour | Max hour | `Number` | `23` | - |
| visibile-column-count | Count of columns to show | `Number` | `5` | - |

### Event

| Event | Description | Arguments |
|-----------|-----------|-----------|
| change | Triggered when value changed | picker: picker instance |
| confirm | Triggered when click confirm button | value: current value |
| cancel | Triggered when click cancel button | - |
