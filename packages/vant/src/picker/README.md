# Picker

### Intro

The picker component is usually used with [Popup](#/en-US/popup) Component.

### Install

Register component globally via `app.use`, refer to [Component Registration](#/en-US/advanced-usage#zu-jian-zhu-ce) for more registration ways.

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
    const onCancel = () => Toast('Cancel');

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
        values: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        defaultIndex: 2,
      },
      {
        values: ['Morning', 'Afternoon', 'Evening'],
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
import { ref } from 'vue';

export default {
  setup() {
    const columns = ref([]);
    const loading = ref(true);

    setTimeout(() => {
      columns.value = ['Option'];
      loading.value = false;
    }, 1000);

    return { columns, loading };
  },
};
```

### With Popup

```html
<van-field
  v-model="result"
  is-link
  readonly
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
import { ref } from 'vue';

export default {
  setup() {
    const columns = ['Delaware', 'Florida', 'Georqia', 'Indiana', 'Maine'];
    const result = ref('');
    const showPicker = ref(false);

    const onConfirm = (value) => {
      result.value = value;
      showPicker.value = false;
    };

    return {
      result,
      columns,
      onConfirm,
      showPicker,
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
| toolbar-position | Toolbar position, cat be set to `bottom` | _string_ | `top` |
| loading | Whether to show loading prompt | _boolean_ | `false` |
| show-toolbar | Whether to show toolbar | _boolean_ | `true` |
| allow-html | Whether to allow HTML in option text | _boolean_ | `false` |
| default-index | Default value index of single column picker | _number \| string_ | `0` |
| item-height | Option height, supports `px` `vw` `vh` `rem` unit, default `px` | _number \| string_ | `44` |
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

| Name            | Description                  | SlotProps                  |
| --------------- | ---------------------------- | -------------------------- |
| toolbar `3.1.2` | Custom toolbar content       | -                          |
| title           | Custom title                 | -                          |
| confirm         | Custom confirm button text   | -                          |
| cancel          | Custom cancel button text    | -                          |
| option          | Custom option content        | _option: string \| object_ |
| columns-top     | Custom content above columns | -                          |
| columns-bottom  | Custom content below columns | -                          |

### Data Structure of Column

| Key          | Description               | Type                        |
| ------------ | ------------------------- | --------------------------- |
| values       | Value of column           | _Array<string \| number>_   |
| defaultIndex | Default value index       | _number_                    |
| className    | ClassName for this column | _string \| Array \| object_ |
| children     | Cascade children          | _Column_                    |

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
| confirm | Stop scrolling and emit confirm event | - | - |

### Types

The component exports the following type definitions:

```ts
import type {
  PickerProps,
  PickerColumn,
  PickerOption,
  PickerInstance,
  PickerFieldNames,
  PickerObjectColumn,
  PickerObjectOption,
  PickerToolbarPosition,
} from 'vant';
```

`PickerInstance` is the type of component instance:

```ts
import { ref } from 'vue';
import type { PickerInstance } from 'vant';

const pickerRef = ref<PickerInstance>();

pickerRef.value?.confirm();
```

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/config-provider).

| Name | Default Value | Description |
| --- | --- | --- |
| --van-picker-background-color | _var(--van-white)_ | - |
| --van-picker-toolbar-height | _44px_ | - |
| --van-picker-title-font-size | _var(--van-font-size-lg)_ | - |
| --van-picker-title-line-height | _var(--van-line-height-md)_ | - |
| --van-picker-action-padding | _0 var(--van-padding-md)_ | - |
| --van-picker-action-font-size | _var(--van-font-size-md)_ | - |
| --van-picker-confirm-action-color | _var(--van-text-link-color)_ | - |
| --van-picker-cancel-action-color | _var(--van-gray-6)_ | - |
| --van-picker-option-padding | _0 var(--van-padding-base)_ | - |
| --van-picker-option-font-size | _var(--van-font-size-lg)_ | - |
| --van-picker-option-text-color | _var(--van-black)_ | - |
| --van-picker-option-disabled-opacity | _0.3_ | - |
| --van-picker-loading-icon-color | _var(--van-primary-color)_ | - |
| --van-picker-loading-mask-color | _rgba(255, 255, 255, 0.9)_ | - |
