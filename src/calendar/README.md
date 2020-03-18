# Calendar

### Intro

Calendar component for selecting dates or date ranges

### Install

```js
import Vue from 'vue';
import { Calendar } from 'vant';

Vue.use(Calendar);
```

## Usage

### Select Single Date

The `confirm` event will be triggered after the date selection is completed

```html
<van-cell title="Select Single Date" :value="date" @click="show = true" />
<van-calendar v-model="show" @confirm="onConfirm" />
```

```js
export default {
  data() {
    return {
      date: '',
      show: false
    };
  },
  methods: {
    formatDate(date) {
      return `${date.getMonth() + 1}/${date.getDate()}`;
    },
    onConfirm(date) {
      this.show = false;
      this.date = this.formatDate(date);
    }
  }
};
```

### Select Multiple Date

```html
<van-cell title="Select Multiple Date" :value="text" @click="show = true" />
<van-calendar v-model="show" type="multiple" @confirm="onConfirm" />
```

```js
export default {
  data() {
    return {
      text: '',
      show: false
    };
  },
  methods: {
    onConfirm(date) {
      this.show = false;
      this.text = `${date.length} dates selected`;
    }
  }
};
```

### Select Date Range

You can select a date range after setting `type` to` range`. In range mode, the date returned by the `confirm` event is an array, the first item in the array is the start time and the second item is the end time.

```html
<van-cell title="Select Date Range" :value="date" @click="show = true" />
<van-calendar v-model="show" type="range" @confirm="onConfirm" />
```

```js
export default {
  data() {
    return {
      date: '',
      show: false
    };
  },
  methods: {
    formatDate(date) {
      return `${date.getMonth() + 1}/${date.getDate()}`;
    },
    onConfirm(date) {
      const [start, end] = date;
      this.show = false;
      this.date = `${this.formatDate(start)} - ${this.formatDate(end)}`;
    }
  }
};
```

### Quick Select

Set `show-confirm` to` false` to hide the confirm button. In this case, the `confirm` event will be triggered immediately after the selection is completed.

```html
<van-calendar v-model="show" :show-confirm="false" />
```

### Custom Color

Use `color` prop to custom calendar color

```html
<van-calendar v-model="show" color="#07c160" />
```

### Custom Date Range

Use `min-date` and `max-date` to custom date range

```html
<van-calendar
  v-model="show"
  :min-date="minDate"
  :max-date="maxDate"
/>
```

```js
export default {
  data() {
    return {
      show: false,
      minDate: new Date(2010, 0, 1),
      maxDate: new Date(2010, 0, 31)
    };
  }
};
```

### Custom Confirm Text

Use `confirm-text` and `confirm-disabled-text` to custom confirm text

```html
<van-calendar
  v-model="show"
  type="range"
  confirm-text="OK"
  confirm-disabled-text="Select End Time"
/>
```

### Custom Day Text

Use `formatter` to custom day text

```html
<van-calendar
  v-model="show"
  type="range"
  :formatter="formatter"
/>
```

```js
export default {
  methods: {
    formatter(day) {
      const month = day.date.getMonth() + 1;
      const date = day.date.getDate();

      if (month === 5) {
        if (date === 1) {
          day.topInfo = 'Labor Day';
        } else if (date === 4) {
          day.topInfo = 'Youth Day';
        } else if (date === 11) {
          day.text = 'Today';
        }
      }

      if (day.type === 'start') {
        day.bottomInfo = 'In';
      } else if (day.type === 'end') {
        day.bottomInfo = 'Out';
      }

      return day;
    }
  }
}
```

### Custom Position

Use `position` to custom popup position，can be set to `top`、`left`、`right`

```html
<van-calendar
  v-model="show"
  :round="false"
  position="right"
/>
```

### Max Range

When selecting a date range, you can use the `max-range` prop to specify the maximum number of selectable days

```html
<van-calendar
  type="range"
  :max-range="3"
  :style="{ height: '500px' }"
/>
```

### Tiled display

Set `poppable` to `false`, the calendar will be displayed directly on the page instead of appearing as a popup

```html
<van-calendar
  title="Calendar"
  :poppable="false"
  :show-confirm="false"
  :style="{ height: '500px' }"
/>
```

## API

### Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| type `v2.5.4` | Type，can be set to `range` `multiple` | *string* | `single` |
| title | Title of calendar | *string* | `Calendar` |
| color | Color for the bottom button and selected date | *string* | `#ee0a24` |
| min-date | Min date | *Date*  | Today |
| max-date | Max date | *Date*  | Six months after the today |
| default-date | Default selected date | *Date \| Date[]* | Today |
| row-height | Row height | *number \| string* | `64` |
| formatter | Day formatter | *(day: Day) => Day* | - |
| poppable | Whether to show the calendar inside a popup | *boolean* | `true` |
| show-mark | Whether to show background month mark | *boolean* | `true` |
| show-title `v2.5.5` | Whether to show title | *boolean* | `true` |
| show-subtitle `v2.5.5` | Whether to show subtitle | *boolean* | `true` |
| show-confirm | Whether to show confirm button | *boolean* | `true` |
| confirm-text | Confirm button text | *string* | `Confirm` |
| confirm-disabled-text | Confirm button text when disabled | *string* | `Confirm` |

### Poppable Props

Following props are supported when the poppable is true

| Attribute | Description | Type | Default |
|------|------|------|------|
| v-model | Whether to show calendar | *boolean* | `false` |
| position | Popup position, can be set to `top` `right` `left` | *string* | `bottom` |
| round | Whether to show round corner | *boolean* | `true` |
| close-on-popstate `v2.4.4` | Whether to close when popstate | *boolean* | `false` |
| close-on-click-overlay | Whether to close when click overlay | *boolean* | `true` |
| safe-area-inset-bottom | Whether to enable bottom safe area adaptation | *boolean* | `true` |
| get-container `v2.4.4` | Return the mount node for Calendar | _string \| () => Element_ | - |

### Range Props

Following props are supported when the type is range

| Attribute | Description | Type | Default |
|------|------|------|------|
| max-range `v2.4.3` | Number of selectable days | *number \| string* | - |
| range-prompt `v2.4.3` | Error message when exceeded max range | *string* | `Choose no more than xx days` |
| allow-same-day `v2.5.6` | Whether the start and end time of the range is allowed on the same day | *boolean* | `fasle` |

### Data Structure of Day

| Key | Description | Type |
|------|------|------|
| date | Date | *Date* |
| type | Type, can be set to `selected`、`start`、`middle`、`end`、`disabled` | *string* |
| text | Text | *string* |
| topInfo | Top info | *string* |
| bottomInfo | Bottom info | *string* |
| className | Extra className | *string* |

### Events

| Event | Description | Arguments |
|------|------|------|
| select | Triggered when select date | *value: Date \| Date[]* |
| confirm | Triggered after date selection is complete，if `show-confirm` is` true`, it is triggered after clicking the confirm button | *value: Date \| Date[]* |
| open `v2.5.2` | Triggered when open Popup | - |
| close `v2.5.2` | Triggered when close Popup | - |
| opened `v2.5.2` | Triggered when opened Popup | - |
| closed `v2.5.2` | Triggered when closed Popup | - |

### Slots

| Name | Description |
|------|------|
| title | Custom title |
| footer | Custom fotter |

### Methods

Use [ref](https://vuejs.org/v2/api/#ref) to get Calendar instance and call instance methods

| Name | Description | Attribute | Return value |
|------|------|------|------|
| reset | Reset selected date to default date | - | - |
