# DatePicker

### Intro

Used to select date, usually used with the [Popup](#/en-US/popup) component.

### Install

Register component globally via `app.use`, refer to [Component Registration](#/en-US/advanced-usage#zu-jian-zhu-ce) for more registration ways.

```js
import { createApp } from 'vue';
import { DatePicker } from 'vant';

const app = createApp();
app.use(DatePicker);
```

## Usage

### Basic Usage

```html
<van-date-picker
  v-model="currentDate"
  title="Choose Date"
  :min-date="minDate"
  :max-date="maxDate"
/>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const currentDate = ref(['2021', '01', '01']);
    return {
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 5, 1),
      currentDate,
    };
  },
};
```

### Columns Type

Using `columns-type` prop to control the type of columns.

For example:

- Pass in `['year']` to select year.
- Pass in `['month']` to select month.
- Pass in `['year', 'month']` to select year and month.
- Pass in `['month', 'day']` to select month and day.

```html
<van-date-picker
  v-model="currentDate"
  title="Choose Year-Month"
  :min-date="minDate"
  :max-date="maxDate"
  :columns-type="columnsType"
/>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const currentDate = ref(['2021', '01']);
    const columnsType = ['year', 'month'];
    return {
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 5, 1),
      currentDate,
      columnsType,
    };
  },
};
```

### Options Formatter

```html
<van-date-picker
  v-model="currentDate"
  title="Choose Year-Month"
  :min-date="minDate"
  :max-date="maxDate"
  :formatter="formatter"
  :columns-type="columnsType"
/>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const currentDate = ref(['2021', '01']);
    const columnsType = ['year', 'month'];

    const formatter = (type, option) => {
      if (type === 'year') {
        option.text += ' Year';
      }
      if (type === 'month') {
        option.text += 'Month';
      }
      return option;
    };

    return {
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 5, 1),
      formatter,
      currentDate,
      columnsType,
    };
  },
};
```

### Options Filter

```html
<van-date-picker
  v-model="currentDate"
  title="Choose Year-Month"
  :filter="filter"
  :min-date="minDate"
  :max-date="maxDate"
  :columns-type="columnsType"
/>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const currentDate = ref(['2021', '01']);
    const columnsType = ['year', 'month'];
    const filter = (type, options) => {
      if (type === 'month') {
        return options.filter((option) => Number(option.value) % 6 === 0);
      }
      return options;
    };

    return {
      filter,
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 5, 1),
      currentTime,
      columnsType,
    };
  },
};
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| v-model | Current date | _string[]_ | `[]` |
| columns-type | Columns type | _string[]_ | `['year', 'month', 'day']` |
| min-date | Min date | _Date_ | Ten years ago on January 1 |
| max-date | Max date | _Date_ | Ten years later on December 31 |
| title | Toolbar title | _string_ | `''` |
| confirm-button-text | Text of confirm button | _string_ | `Confirm` |
| cancel-button-text | Text of cancel button | _string_ | `Cancel` |
| show-toolbar | Whether to show toolbar | _boolean_ | `true` |
| loading | Whether to show loading prompt | _boolean_ | `false` |
| readonly | Whether to be readonly | _boolean_ | `false` |
| filter | Option filter | _(type: string, options: PickerOption[]) => PickerOption[]_ | - |
| formatter | Option formatter | _(type: string, option: PickerOption) => PickerOption_ | - |
| option-height | Option height, supports `px` `vw` `vh` `rem` unit, default `px` | _number \| string_ | `44` |
| visible-option-num | Count of visible columns | _number \| string_ | `6` |
| swipe-duration | Duration of the momentum animation, unit `ms` | _number \| string_ | `1000` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| confirm | Emitted when the confirm button is clicked | _{ selectedValues, selectedOptions, selectedIndexes }_ |
| cancel | Emitted when the cancel button is clicked | _{ selectedValues, selectedOptions, selectedIndexes }_ |
| change | Emitted when current option is changed | _{ selectedValues, selectedOptions, selectedIndexes, columnIndex }_ |

### Slots

| Name | Description | SlotProps |
| --- | --- | --- |
| toolbar | Custom toolbar content | - |
| title | Custom title | - |
| confirm | Custom confirm button text | - |
| cancel | Custom cancel button text | - |
| option | Custom option content | _option: PickerOption, index: number_ |
| columns-top | Custom content above columns | - |
| columns-bottom | Custom content below columns | - |

### Types

The component exports the following type definitions:

```ts
import type { DatePickerProps, DatePickerColumnType } from 'vant';
```
