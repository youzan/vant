# Calendar

### Intro

Calendar component for selecting dates or date ranges.

### Install

```js
import Vue from 'vue';
import { Calendar } from 'vant';

Vue.use(Calendar);
```

## Usage

### Select Single Date

The `confirm` event will be emitted after the date selection is completed.

```html
<van-cell title="Select Single Date" :value="date" @click="show = true" />
<van-calendar v-model="show" @confirm="onConfirm" />
```

```js
export default {
  data() {
    return {
      date: '',
      show: false,
    };
  },
  methods: {
    formatDate(date) {
      return `${date.getMonth() + 1}/${date.getDate()}`;
    },
    onConfirm(date) {
      this.show = false;
      this.date = this.formatDate(date);
    },
  },
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
      show: false,
    };
  },
  methods: {
    onConfirm(date) {
      this.show = false;
      this.text = `${date.length} dates selected`;
    },
  },
};
```

### Select Date Range

You can select a date range after setting `type` to`range`. In range mode, the date returned by the `confirm` event is an array, the first item in the array is the start time and the second item is the end time.

```html
<van-cell title="Select Date Range" :value="date" @click="show = true" />
<van-calendar v-model="show" type="range" @confirm="onConfirm" />
```

```js
export default {
  data() {
    return {
      date: '',
      show: false,
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
    },
  },
};
```

### Quick Select

Set `show-confirm` to `false` to hide the confirm button. In this case, the `confirm` event will be emitted immediately after the selection is completed.

```html
<van-calendar v-model="show" :show-confirm="false" />
```

### Custom Color

Use `color` prop to custom calendar color.

```html
<van-calendar v-model="show" color="#1989fa" />
```

### Custom Date Range

Use `min-date` and `max-date` to custom date range.

```html
<van-calendar v-model="show" :min-date="minDate" :max-date="maxDate" />
```

```js
export default {
  data() {
    return {
      show: false,
      minDate: new Date(2010, 0, 1),
      maxDate: new Date(2010, 0, 31),
    };
  },
};
```

### Custom Confirm Text

Use `confirm-text` and `confirm-disabled-text` to custom confirm text.

```html
<van-calendar
  v-model="show"
  type="range"
  confirm-text="OK"
  confirm-disabled-text="Select End Time"
/>
```

### Custom Day Text

Use `formatter` to custom day text.

```html
<van-calendar v-model="show" type="range" :formatter="formatter" />
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
    },
  },
};
```

### Custom Position

Use `position` to custom popup position，can be set to `top`、`left`、`right`.

```html
<van-calendar v-model="show" :round="false" position="right" />
```

### Max Range

When selecting a date range, you can use the `max-range` prop to specify the maximum number of selectable days.

```html
<van-calendar type="range" :max-range="3" :style="{ height: '500px' }" />
```

### Custom First Day Of Week

Use `first-day-of-week` to custom the start day of week

```html
<van-calendar first-day-of-week="1" />
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
| --- | --- | --- | --- |
| type `v2.5.4` | Type，can be set to `range` `multiple` | _string_ | `single` |
| title | Title of calendar | _string_ | `Calendar` |
| color | Color for the bottom button and selected date | _string_ | `#ee0a24` |
| min-date | Min date | _Date_ | Today |
| max-date | Max date | _Date_ | Six months after the today |
| default-date | Default selected date | _Date \| Date[] \| null_ | Today |
| row-height | Row height | _number \| string_ | `64` |
| formatter | Day formatter | _(day: Day) => Day_ | - |
| poppable | Whether to show the calendar inside a popup | _boolean_ | `true` |
| lazy-render `v2.8.1` | Whether to enable lazy render | _boolean_ | `true` |
| show-mark | Whether to show background month mark | _boolean_ | `true` |
| show-title `v2.5.5` | Whether to show title | _boolean_ | `true` |
| show-subtitle `v2.5.5` | Whether to show subtitle | _boolean_ | `true` |
| show-confirm | Whether to show confirm button | _boolean_ | `true` |
| readonly `v2.10.5` | Whether to be readonly | _boolean_ | `false` |
| confirm-text | Confirm button text | _string_ | `Confirm` |
| confirm-disabled-text | Confirm button text when disabled | _string_ | `Confirm` |
| first-day-of-week `v2.9.2` | Set the start day of week | _0-6_ | `0` |

### Poppable Props

Following props are supported when the poppable is true

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| v-model | Whether to show calendar | _boolean_ | `false` |
| position | Popup position, can be set to `top` `right` `left` | _string_ | `bottom` |
| round | Whether to show round corner | _boolean_ | `true` |
| close-on-popstate | Whether to close when popstate | _boolean_ | `true` |
| close-on-click-overlay | Whether to close when overlay is clicked | _boolean_ | `true` |
| safe-area-inset-bottom | Whether to enable bottom safe area adaptation | _boolean_ | `true` |
| get-container | Return the mount node for Calendar | _string \| () => Element_ | - |

### Range Props

Following props are supported when the type is range

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| max-range | Number of selectable days | _number \| string_ | Unlimited |
| range-prompt | Error message when exceeded max range | _string_ | `Choose no more than xx days` |
| allow-same-day `v2.5.6` | Whether the start and end time of the range is allowed on the same day | _boolean_ | `false` |

### Multiple Props

Following props are supported when the type is multiple

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| max-range `v2.7.2` | Max count of selectable days | _number \| string_ | Unlimited |
| range-prompt | Error message when exceeded max count | _string_ | `Choose no more than xx days` |

### Data Structure of Day

| Key | Description | Type |
| --- | --- | --- |
| date | Date | _Date_ |
| type | Type, can be set to `selected`、`start`、`middle`、`end`、`disabled` | _string_ |
| text | Text | _string_ |
| topInfo | Top info | _string_ |
| bottomInfo | Bottom info | _string_ |
| className | Extra className | _string_ |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| select | Emitted when date is selected | _value: Date \| Date[]_ |
| confirm | Emitted after date selection is complete，if `show-confirm` is `true`, it is Emitted after clicking the confirm button | _value: Date \| Date[]_ |
| open `v2.5.2` | Emitted when opening Popup | - |
| close `v2.5.2` | Emitted when closing Popup | - |
| opened `v2.5.2` | Emitted when Popup is opened | - |
| closed `v2.5.2` | Emitted when Popup is closed | - |
| unselect `v2.7.2` | Emitted when unselect date when type is multiple | _value: Date_ |
| month-show `v2.8.2` | Emitted when a month enters the visible area | _{ date: Date, title: string }_ |

### Slots

| Name                   | Description               | SlotProps  |
| ---------------------- | ------------------------- | ---------- |
| title                  | Custom title              | -          |
| footer                 | Custom footer             | -          |
| top-info `v2.12.22`    | Custom top info of day    | _day: Day_ |
| bottom-info `v2.12.22` | Custom bottom info of day | _day: Day_ |

### Methods

Use [ref](https://vuejs.org/v2/api/#ref) to get Calendar instance and call instance methods.

| Name | Description | Attribute | Return value |
| --- | --- | --- | --- |
| reset | Reset selected date, will reset to default date when no params passed | _date?: Date \| Date[]_ | - |
| scrollToDate `v2.12.2` | Scroll to date | _date: Date_ | - |

### Less Variables

How to use: [Custom Theme](#/en-US/theme).

| Name | Default Value | Description |
| --- | --- | --- |
| @calendar-background-color | `@white` | - |
| @calendar-popup-height | `80%` | - |
| @calendar-header-box-shadow | `0 2px 10px rgba(125, 126, 128, 0.16)` | - |
| @calendar-header-title-height | `44px` | - |
| @calendar-header-title-font-size | `@font-size-lg` | - |
| @calendar-header-subtitle-font-size | `@font-size-md` | - |
| @calendar-weekdays-height | `30px` | - |
| @calendar-weekdays-font-size | `@font-size-sm` | - |
| @calendar-month-title-font-size | `@font-size-md` | - |
| @calendar-month-mark-color | `fade(@gray-2, 80%)` | - |
| @calendar-month-mark-font-size | `160px` | - |
| @calendar-day-height | `64px` | - |
| @calendar-day-font-size | `@font-size-lg` | - |
| @calendar-range-edge-color | `@white` | - |
| @calendar-range-edge-background-color | `@red` | - |
| @calendar-range-middle-color | `@red` | - |
| @calendar-range-middle-background-opacity | `0.1` | - |
| @calendar-selected-day-size | `54px` | - |
| @calendar-selected-day-color | `@white` | - |
| @calendar-info-font-size | `@font-size-xs` | - |
| @calendar-info-line-height | `@line-height-xs` | - |
| @calendar-selected-day-background-color | `@red` | - |
| @calendar-day-disabled-color | `@gray-5` | - |
| @calendar-confirm-button-height | `36px` | - |
| @calendar-confirm-button-margin | `7px 0` | - |
