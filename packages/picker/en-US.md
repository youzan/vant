## Picker
The Picker component is usually used with [Popup](#/en-US/popup) Component.

### Install
``` javascript
import { Picker } from 'vant';

Vue.use(Picker);
```

### Usage

#### Basic Usage

```html
<van-picker :columns="columns" @change="onChange" />
```

```javascript
export default {
  data() {
    return {
      columns: ['Delaware', 'Florida', 'Georqia', 'Indiana', 'Maine']
    };
  },
  methods: {
    onChange(picker, value, index) {
      Toast(`Value: ${value}, Index: ${index}`);
    }
  }
};
```

#### Default Index

```html
<van-picker
  :columns="columns"
  :default-index="2"
  @change="onChange"
/>
```

#### Show Toolbar

```html
<van-picker
  show-toolbar
  title="Title"
  :columns="columns"
  @cancel="onCancel"
  @confirm="onConfirm"
/>
```

```javascript
export default {
  data() {
    return {
      columns: ['Delaware', 'Florida', 'Georqia', 'Indiana', 'Maine']
    }
  },
  methods: {
    onConfirm(value, index) {
      Toast(`Value: ${value}, Index: ${index}`);
    },
    onCancel() {
      Toast('Cancel');
    }
  }
};
```

#### Disable option

```html
<van-picker :columns="columns" />
```

```javascript
export default {
  data() {
    return {
      columns: [
        { text: 'Delaware', disabled: true },
        { text: 'Florida' },
        { text: 'Georqia' }
      ]
    };
  }
};
```

#### Multi columns

```html
<van-picker :columns="columns" @change="onChange" />
```

```javascript
const states = {
  'Group1': ['Delaware', 'Florida', 'Georqia', 'Indiana', 'Maine'],
  'Group2': ['Alabama', 'Kansas', 'Louisiana', 'Texas']
};

export default {
  data() {
    return {
      columns: [
        {
          values: Object.keys(states),
          className: 'column1'
        },
        {
          values: states.Group1,
          className: 'column2',
          defaultIndex: 2
        }
      ]
    };
  },
  methods: {
    onChange(picker, values) {
      picker.setColumnValues(1, states[values[0]]);
    }
  }
};
```

#### Loading
When Picker columns data is acquired asynchronously, use `loading` prop to show loading prompt

```html
<van-picker :columns="columns" loading />
```

### API

| Attribute | Description | Type | Default |
|------|------|------|------|
| columns | Columns data | `Array` | `[]` |
| show-toolbar | Whether to show toolbar | `Boolean` | `false` |
| title | Toolbar title | `String` | `''` |
| loading | Whether to show loading prompt | `Boolean` | `false` |
| value-key | Key of option text | `String` | `text` |
| item-height | Option height | `Number` | `44` |
| confirm-button-text | Text of confirm button | `String` | `Confirm` |
| cancel-button-text | Text of cancel button | `String` | `Cancel` |
| visible-item-count | Count of visible columns | `Number` | `5` |
| default-index | Default value index of single column picker | `Number` | `0` |

### Event
Picker events will pass different parameters according to the columns are single or multiple

| Event | Description | Arguments |
|------|------|------|
| confirm | Triggered when click confirm button | Single column：current value，current index<br>Multiple columns：current values，current indexes |
| cancel | Triggered when click cancel button | Single column：current value，current index<br>Multiple columns：current values，current indexes |
| change | Triggered when current option changed | Single column：Picker instance, current value，current index<br>Multiple columns：Picker instance, current values，column index |

### Slot

| name | Description |
|------|------|
| title | Custom title |

### Data struct of columns

| key | Description |
|------|------|
| values | Value of column |
| defaultIndex | Default value index |
| className | ClassName for this column |

### Methods

Use ref to get picker instance and call instance methods

| Name | Attribute | Return value | Description |
|------|------|------|------|
| getValues | - | values | Get current values of all columns |
| setValues | values | - |  Set current values of all columns |
| getIndexes | - | indexes | Get current indexes of all columns |
| setIndexes | indexes | - | Set current indexes of all columns |
| getColumnValue | columnIndex | value | Get current value of the column |
| setColumnValue | columnIndex, value | - | Set current value of the column |
| getColumnIndex | columnIndex | optionIndex | Get current index of the column |
| setColumnIndex | columnIndex, optionIndex | - | Set current index of the column |
| getColumnValues | columnIndex | values | Get columns data of the column |
| setColumnValues | columnIndex, values | - | Set columns data of the column |
