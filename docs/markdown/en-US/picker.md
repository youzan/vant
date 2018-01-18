## Picker

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
  onChange(picker, value, index) {
    Toast(`Value: ${value}, Index: ${index}`);
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

#### Show Toolbar

```html
<van-picker
  show-toolbar
  :title="Title"
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

### API

| Attribute | Description | Type | Default | Accepted Values |
|-----------|-----------|-----------|-------------|-------------|
| columns | Columns data | `Array` | `[]` | - |
| show-toolbar | Whether to show toolbar | `Boolean` | `false` | - |
| title | Toolbar title | `String` | `''` | - |
| confirm-button-text | Text of confirm button | `String` | `Confirm` | - |
| cancel-button-text | Text of cancel button | `String` | `Cancel` | - |
| item-height | Option height | `Number` | `44` | - |
| visible-item-count | Count of visible columns | `Number` | `5` | - |
| value-key | Key of option text | `String` | `text` | - |

### Event
Picker events will pass different parameters according to the columns are single or multiple

| Event | Description | Arguments |
|-----------|-----------|-----------|
| confirm | Triggered when click confirm button | Single column：current value，current index<br>Multiple columns：current values，current indexes |
| cancel | Triggered when click cancel button | Single column：current value，current index<br>Multiple columns：current values，current indexes |
| change | Triggered when current option changed | Single column：current value，current index<br>Multiple columns：current values，column index |


### Data struct of columns

| key | Description |
|-----------|-----------|
| values | Value of column |
| defaultIndex | Default value index |
| className | ClassName for this column |

### Picker instance
You can get the picker instance in 'change' event, and 

| Method | Description |
|-----------|-----------|
| getValues() | Get current values of all columns |
| setValues(values) | Set current values of all columns |
| getIndexes() | Get current indexes of all columns |
| setIndexes(indexes) | Set current indexes of all columns |
| getColumnValue(columnIndex) | Get current value of the column |
| setColumnValue(columnIndex, value) | Set current value of the column |
| getColumnIndex(columnIndex) | Get current index of the column |
| setColumnIndex(columnIndex, optionIndex) | Set current index of the column |
| getColumnValues(columnIndex) | Get columns data of the column |
| setColumnValues(columnIndex, values) | Set columns data of the column |
