# Picker

### Intro

The Picker component is usually used with [Popup](#/en-US/popup) Component.

### Install

```js
import { createApp } from 'vue';
import { Picker } from 'vant';

const app = createApp();
app.use(Picker);
```

## Usage

### Basic Usage

```html
<van-picker
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
  setup() {
    const columns = ['Delaware', 'Florida', 'Georqia', 'Indiana', 'Maine'];

    const onConfirm = (value, index) => {
      Toast(`Value: ${value}, Index: ${index}`);
    };
    const onChange = (value, index) => {
      Toast(`Value: ${value}, Index: ${index}`);
    };
    const onCancel = () => {
      Toast('Cancel');
    };

    return {
      columns,
      onChange,
      onCancel,
      onConfirm,
    };
  },
};
```

### Default Index

```html
<van-picker title="Title" :columns="columns" :default-index="2" />
```

### Multiple Columns

```html
<van-picker title="Title" :columns="columns" />
```

```js
export default {
  setup() {
    const columns = [
      {
        values: ['Monday', 'Tuesday', 'Wednesday', 'Thusday', 'Friday'],
        defaultIndex: 2,
      },
      {
        values: ['Morging', 'Afternoon', 'Evening'],
        defaultIndex: 1,
      },
    ];

    return { columns };
  },
};
```

### Cascade

```html
<van-picker title="Title" :columns="columns" />
```

```js
export default {
  setup() {
    const columns = [
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
    ];

    return { columns };
  },
};
```

### Disable option

```html
<van-picker :columns="columns" />
```

```js
export default {
  setup() {
    const columns = [
      { text: 'Delaware', disabled: true },
      { text: 'Florida' },
      { text: 'Georqia' },
    ];

    return { columns };
  },
};
```

### Set Column Values

```html
<van-picker ref="picker" title="Title" :columns="columns" @change="onChange" />
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const picker = ref(null);

    const states = {
      Group1: ['Delaware', 'Florida', 'Georqia', 'Indiana', 'Maine'],
      Group2: ['Alabama', 'Kansas', 'Louisiana', 'Texas'],
    };
    const columns = [
      { values: Object.keys(states) },
      { values: states.Group1 },
    ];

    const onChange = (values) => {
      picker.value.setColumnValues(1, states[values[0]]);
    };

    return {
      picker,
      columns,
      onChange,
    };
  },
};
```

### Loading

When Picker columns data is acquired asynchronously, use `loading` prop to show loading prompt.

```html
<van-picker title="Title" :columns="columns" :loading="loading" />
```

```js
import { reactive } from 'vue';

export default {
  setup() {
    const state = reactive({
      columns: [],
      loading: true,
    });

    setTimeout(() => {
      state.loading = false;
      state.columns = ['Option'];
    }, 1000);

    return { state };
  },
};
```

### With Popup

```html
<van-field
  v-model="value"
  readonly
  clickable
  label="City"
  placeholder="Choose City"
  @click="showPicker = true"
/>
<van-popup v-model:show="showPicker" round position="bottom">
  <van-picker
    title="Title"
    :columns="columns"
    @cancel="showPicker = false"
    @confirm="onConfirm"
  />
</van-popup>
```

```js
import { reactive } from 'vue';

export default {
  setup() {
    const columns = ['Delaware', 'Florida', 'Georqia', 'Indiana', 'Maine'];
    const state = reactive({
      value: '',
      showPicker: false,
    });

    const onConfirm = (value) => {
      state.value = value;
      state.showPicker = false;
    };

    return {
      state,
      columns,
      onConfirm,
    };
  },
};
```

### Custom Columns Field

```html
<van-picker
  :title="Title"
  :columns="columns"
  :columns-field-names="customFieldName"
/>
```

```js
import { reactive } from 'vue';

export default {
  setup() {
    const columns = [
      {
        cityName: 'Zhejiang',
        cities: [
          {
            cityName: 'Hangzhou',
            cities: [{ cityName: 'Xihu' }, { cityName: 'Yuhang' }],
          },
          {
            cityName: 'Wenzhou',
            cities: [{ cityName: 'Lucheng' }, { cityName: 'Ouhai' }],
          },
        ],
      },
      {
        cityName: 'Fujian',
        cities: [
          {
            cityName: 'Fuzhou',
            cities: [{ cityName: 'Gulou' }, { cityName: 'Taijiang' }],
          },
          {
            cityName: 'Xiamen',
            cities: [{ cityName: 'Siming' }, { cityName: 'Haicang' }],
          },
        ],
      },
    ];

    const customFieldName = {
      text: 'cityName',
      children: 'cities',
    };

    return {
      columns,
      customFieldName,
    };
  },
};
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| columns | Columns data | _Column[]_ | `[]` |
| columns-field-names | custom columns field | _object_ | `{ text: 'text', values: 'values', children: 'children' }` |
| title | Toolbar title | _string_ | - |
| confirm-button-text | Text of confirm button | _string_ | `Confirm` |
| cancel-button-text | Text of cancel button | _string_ | `Cancel` |
| value-key | Key of option text | _string_ | `text` |
| toolbar-position | Toolbar position, cat be set to `bottom` | _string_ | `top` |
| loading | Whether to show loading prompt | _boolean_ | `false` |
| show-toolbar | Whether to show toolbar | _boolean_ | `true` |
| allow-html | Whether to allow HTML in option text | _boolean_ | `false` |
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

| Key               | Description               | Type       |
| ----------------- | ------------------------- | ---------- |
| values            | Value of column           | _string[]_ |
| defaultIndex      | Default value index       | _number_   |
| className         | ClassName for this column | _any_      |
| children `v2.4.5` | Cascade children          | _Column_   |

### Methods

Use [ref](https://v3.vuejs.org/guide/component-template-refs.html) to get Picker instance and call instance methods.

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
| confirm `v2.4.0` | Stop scrolling and emit confirm event | - | - |

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
