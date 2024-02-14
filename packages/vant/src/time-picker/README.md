# TimePicker

### Intro

Used to select time, usually used with the [Popup](#/en-US/popup) component.

### Install

Register component globally via `app.use`, refer to [Component Registration](#/en-US/advanced-usage#zu-jian-zhu-ce) for more registration ways.

```js
import { createApp } from 'vue';
import { TimePicker } from 'vant';

const app = createApp();
app.use(TimePicker);
```

## Usage

### Basic Usage

```html
<van-time-picker v-model="currentTime" title="Choose Time" />
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const currentTime = ref(['12', '00']);
    return { currentTime };
  },
};
```

### Columns Type

Using `columns-type` prop to control the type of columns.

For example:

- Pass in `['hour']` to select hour.
- Pass in `['minute']` to select minute.
- Pass in `['minute', 'second']` to select minute and second.
- Pass in `['hour', 'minute', 'second']` to select hour, minute and second.

```html
<van-time-picker
  v-model="currentTime"
  title="Choose Time"
  :columns-type="columnsType"
/>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const currentTime = ref(['12', '00', '00']);
    const columnsType = ['hour', 'minute', 'second'];
    return {
      currentTime,
      columnsType,
    };
  },
};
```

### Time Range

You can use props like `min-hour` and `max-hour` to limit the range of hours, `min-minute` and `max-minute` to limit the range of minutes, and `min-second` and `max-second` to limit the range of seconds.

For example, in the following example, users can only select hours between `10` and `20`, and minutes between `30` and `40`.

```html
<van-time-picker
  v-model="currentTime"
  title="Choose Time"
  :min-hour="10"
  :max-hour="20"
  :min-minute="30"
  :max-minute="40"
/>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const currentTime = ref(['12', '35']);
    return { currentTime };
  },
};
```

### Overall Time Range

You can use `min-time` and `max-time` attributes to limit the overall time range, with the format `10:00:00`.

- When `min-time` is set, attributes like `min-hour`, `min-minute`, and `min-second` will not take effect.
- When `max-time` is set, attributes like `max-hour`, `max-minute`, and `max-second` will not take effect.

For example, in the following example, users can select any time between `09:40:10` and `20:20:50`.

```html
<van-time-picker
  v-model="currentTime"
  title="Choose Time"
  :columns-type="['hour', 'minute', 'second']"
  min-time="09:40:10"
  max-time="20:20:50"
/>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const currentTime = ref(['12', '00', '00']);
    return { currentTime };
  },
};
```

### Options Formatter

Using `formatter` prop to format option text.

```html
<van-time-picker
  v-model="currentTime"
  title="Choose Time"
  :formatter="formatter"
/>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const currentTime = ref(['12', '00']);
    const formatter = (type, option) => {
      if (type === 'hour') {
        option.text += 'h';
      }
      if (type === 'minute') {
        option.text += 'm';
      }
      return option;
    };

    return {
      formatter,
      currentTime,
    };
  },
};
```

### Options Filter

Using `filter` prop to filter options.

```html
<van-time-picker v-model="currentTime" title="Choose Time" :filter="filter" />
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const currentTime = ref(['12', '00']);

    const filter = (type, options) => {
      if (type === 'minute') {
        return options.filter((option) => Number(option.value) % 10 === 0);
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

### Advanced Usage

The third parameter of the `filter` function can get the currently selected time, which can be used to filter unwanted times more flexibly when using the uncontrolled mode.

```html
<van-time-picker title="Choose Time" :filter="filter" />
```

```js
export default {
  setup() {
    const filter = (type, options, values) => {
      const hour = +values[0];

      if (type === 'hour') {
        return options.filter(
          (option) => Number(option.value) >= 8 && Number(option.value) <= 18,
        );
      }

      if (type === 'minute') {
        options = options.filter((option) => Number(option.value) % 10 === 0);

        if (hour === 8) {
          return options.filter((option) => Number(option.value) >= 40);
        }

        if (hour === 18) {
          return options.filter((option) => Number(option.value) <= 20);
        }
      }

      return options;
    };

    return {
      filter,
    };
  },
};
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| v-model | Current time | _string[]_ | - |
| columns-type | Columns type | _string[]_ | `['hour', 'minute']` |
| min-hour | Min hour | _number \| string_ | `0` |
| max-hour | Max hour | _number \| string_ | `23` |
| min-minute | Min minute | _number \| string_ | `0` |
| max-minute | Max minute | _number \| string_ | `59` |
| min-second | Min second | _number \| string_ | `0` |
| max-second | Max second | _number \| string_ | `59` |
| min-time `v4.5.0` | Min time, format reference `07:40:00`, `min-hour` `min-minute` `min-second` is invalid when used | _string_ | - |
| max-time `v4.5.0` | Max time, format reference `10:20:00`, `min-hour` `min-minute` `max-second` is invalid when used | _string_ | - |
| title | Toolbar title | _string_ | `''` |
| confirm-button-text | Text of confirm button | _string_ | `Confirm` |
| cancel-button-text | Text of cancel button | _string_ | `Cancel` |
| show-toolbar | Whether to show toolbar | _boolean_ | `true` |
| loading | Whether to show loading prompt | _boolean_ | `false` |
| readonly | Whether to be readonly | _boolean_ | `false` |
| filter | Option filter | _(type: string, options: PickerOption[], values: string[]) => PickerOption[]_ | - |
| formatter | Option text formatter | _(type: string, option: PickerOption) => PickerOption_ | - |
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
import type { TimePickerProps, TimePickerColumnType } from 'vant';
```
