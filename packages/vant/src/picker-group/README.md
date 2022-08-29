# PickerGroup

### Intro

Used to select date, usually used with the [Popup](#/en-US/popup) component.

### Install

Register component globally via `app.use`, refer to [Component Registration](#/en-US/advanced-usage#zu-jian-zhu-ce) for more registration ways.

```js
import { createApp } from 'vue';
import { PickerGroup } from 'vant';

const app = createApp();
app.use(PickerGroup);
```

## Usage

### Basic Usage

```html
<van-date-picker v-model="currentDate" title="Choose Date" />
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

## API

### Props

| Attribute           | Description            | Type     | Default   |
| ------------------- | ---------------------- | -------- | --------- |
| title               | Toolbar title          | _string_ | `''`      |
| confirm-button-text | Text of confirm button | _string_ | `Confirm` |
| cancel-button-text  | Text of cancel button  | _string_ | `Cancel`  |

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
import type { DatePickerProps, DatePickerColumnType } from 'vant';
```
