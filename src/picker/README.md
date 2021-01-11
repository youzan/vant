# Picker

### Intro

The Picker component is usually used with [Popup](#/en-US/popup) Component.

### Install

```js
import Vue from 'vue';
import { Picker } from 'vant';

Vue.use(Picker);
```

## Usage

### Basic Usage

```html
<van-picker
  show-toolbar
  title="Title"
  :columns="columns"
  @confirm="onConfirm"
  @cancel="onCancel"
  @change="onChange"
/>
```

```js
import { Toast } from 'vant';

export default {
  data() {
    return {
      columns: ['Delaware', 'Florida', 'Georqia', 'Indiana', 'Maine'],
    };
  },
  methods: {
    onConfirm(value, index) {
      Toast(`Value: ${value}, Index: ${index}`);
    },
    onChange(picker, value, index) {
      Toast(`Value: ${value}, Index: ${index}`);
    },
    onCancel() {
      Toast('Cancel');
    },
  },
};
```

### Default Index

```html
<van-picker show-toolbar title="Title" :columns="columns" :default-index="2" />
```

### Multiple Columns

```html
<van-picker show-toolbar title="Title" :columns="columns" />
```

```js
export default {
  data() {
    return {
      columns: [
        {
          values: ['Monday', 'Tuesday', 'Wednesday', 'Thusday', 'Friday'],
          defaultIndex: 2,
        },
        {
          values: ['Morging', 'Afternoon', 'Evening'],
          defaultIndex: 1,
        },
      ],
    };
  },
};
```

### Cascade

```html
<van-picker show-toolbar title="Title" :columns="columns" />
```

```js
export default {
  data() {
    return {
      columns: [
        {
          text: 'Zhejiang',
          children: [
            {
              text: 'Hangzhou',
              children: [{ text: 'Xihu' }, { text: 'Yuhang' }],
            },
            {
              text: 'Wenzhou',
              children: [{ text: 'Lucheng' }, { text: 'Ouhai' }],
            },
          ],
        },
        {
          text: 'Fujian',
          children: [
            {
              text: 'Fuzhou',
              children: [{ text: 'Gulou' }, { text: 'Taijiang' }],
            },
            {
              text: 'Xiamen',
              children: [{ text: 'Siming' }, { text: 'Haicang' }],
            },
          ],
        },
      ],
    };
  },
};
```

### Disable option

```html
<van-picker show-toolbar :columns="columns" />
```

```js
export default {
  data() {
    return {
      columns: [
        { text: 'Delaware', disabled: true },
        { text: 'Florida' },
        { text: 'Georqia' },
      ],
    };
  },
};
```

### Set Column Values

```html
<van-picker show-toolbar title="Title" :columns="columns" @change="onChange" />
```

```js
const states = {
  Group1: ['Delaware', 'Florida', 'Georqia', 'Indiana', 'Maine'],
  Group2: ['Alabama', 'Kansas', 'Louisiana', 'Texas'],
};

export default {
  data() {
    return {
      columns: [{ values: Object.keys(states) }, { values: states.Group1 }],
    };
  },
  methods: {
    onChange(picker, values) {
      picker.setColumnValues(1, states[values[0]]);
    },
  },
};
```

### Loading

When Picker columns data is acquired asynchronously, use `loading` prop to show loading prompt.

```html
<van-picker show-toolbar title="Title" :columns="columns" :loading="loading" />
```

```js
export default {
  data() {
    return {
      columns: [],
      loading: true,
    };
  },
  created() {
    setTimeout(() => {
      this.loading = false;
      this.columns = ['Option'];
    }, 1000);
  },
};
```

### With Popup

```html
<van-field
  readonly
  clickable
  label="City"
  :value="value"
  placeholder="Choose City"
  @click="showPicker = true"
/>
<van-popup v-model="showPicker" round position="bottom">
  <van-picker
    title="Title"
    show-toolbar
    :columns="columns"
    @cancel="showPicker = false"
    @confirm="onConfirm"
  />
</van-popup>
```

```js
export default {
  data() {
    return {
      value: '',
      showPicker: false,
      columns: ['Delaware', 'Florida', 'Georqia', 'Indiana', 'Maine'],
    };
  },
  methods: {
    onConfirm(value) {
      this.value = value;
      this.showPicker = false;
    },
  },
};
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| columns | Columns data | _Column[]_ | `[]` |
| title | Toolbar title | _string_ | - |
| confirm-button-text | Text of confirm button | _string_ | `Confirm` |
| cancel-button-text | Text of cancel button | _string_ | `Cancel` |
| value-key | Key of option text | _string_ | `text` |
| toolbar-position | Toolbar position, cat be set to `bottom` | _string_ | `top` |
| loading | Whether to show loading prompt | _boolean_ | `false` |
| readonly `v2.10.5` | Whether to be readonly | _boolean_ | `false` |
| show-toolbar | Whether to show toolbar | _boolean_ | `false` |
| allow-html | Whether to allow HTML in option text | _boolean_ | `true` |
| default-index | Default value index of single column picker | _number \| string_ | `0` |
| item-height `v2.8.6` | Option height, supports `px` `vw` `vh` `rem` unit, default `px` | _number \| string_ | `44` |
| visible-item-count | Count of visible columns | _number \| string_ | `6` |
| swipe-duration | Duration of the momentum animation，unit `ms` | _number \| string_ | `1000` |

### Events

Picker events will pass different parameters according to the columns are single or multiple

| Event | Description | Arguments |
| --- | --- | --- |
| confirm | Emitted when click confirm button | Single column：current value，current index<br>Multiple columns：current values，current indexes |
| cancel | Emitted when click cancel button | Single column：current value，current index<br>Multiple columns：current values，current indexes |
| change | Emitted when current option changed | Single column：Picker instance, current value，current index<br>Multiple columns：Picker instance, current values，column index |

### Slots

| Name | Description | SlotProps |
| --- | --- | --- |
| default | Custom toolbar content | - |
| title | Custom title | - |
| confirm `v2.10.11` | Custom confirm button text | - |
| cancel `v2.10.11` | Custom cancel button text | - |
| option `v2.10.11` | Custom option content | _option: string \| object_ |
| columns-top | Custom content above columns | - |
| columns-bottom | Custom content below columns | - |

### Data Structure of Column

| Key          | Description               | Type       |
| ------------ | ------------------------- | ---------- |
| values       | Value of column           | _string[]_ |
| defaultIndex | Default value index       | _number_   |
| className    | ClassName for this column | _any_      |
| children     | Cascade children          | _Column_   |

### Methods

Use [ref](https://vuejs.org/v2/api/#ref) to get Picker instance and call instance methods.

| Name | Description | Attribute | Return value |
| --- | --- | --- | --- |
| getValues | Get current values of all columns | - | values |
| setValues | Set current values of all columns | values | - |
| getIndexes | Get current indexes of all columns | - | indexes |
| setIndexes | Set current indexes of all columns | indexes | - |
| getColumnValue | Get current value of the column | columnIndex | value |
| setColumnValue | Set current value of the column | columnIndex, value | - |
| getColumnIndex | Get current index of the column | columnIndex | optionIndex |
| setColumnIndex | Set current index of the column | columnIndex, optionIndex | - |
| getColumnValues | Get columns data of the column | columnIndex | values |
| setColumnValues | Set columns data of the column | columnIndex, values | - |
| confirm | Stop scrolling and emit confirm event | - | - |

### Less Variables

How to use: [Custom Theme](#/en-US/theme).

| Name                            | Default Value              | Description |
| ------------------------------- | -------------------------- | ----------- |
| @picker-background-color        | `@white`                   | -           |
| @picker-toolbar-height          | `44px`                     | -           |
| @picker-title-font-size         | `@font-size-lg`            | -           |
| @picker-title-line-height       | `@line-height-md`          | -           |
| @picker-action-padding          | `0 @padding-md`            | -           |
| @picker-action-font-size        | `@font-size-md`            | -           |
| @picker-confirm-action-color    | `@text-link-color`         | -           |
| @picker-cancel-action-color     | `@gray-6`                  | -           |
| @picker-option-font-size        | `@font-size-lg`            | -           |
| @picker-option-text-color       | `@black`                   | -           |
| @picker-option-disabled-opacity | `0.3`                      | -           |
| @picker-loading-icon-color      | `@blue`                    | -           |
| @picker-loading-mask-color      | `rgba(255, 255, 255, 0.9)` | -           |
