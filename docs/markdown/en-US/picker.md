## Picker

### Install
``` javascript
import { Picker } from 'vant';

Vue.component(Picker.name, Picker);
```

### Usage

#### Basic Usage


```html
<van-picker :columns="pickerColumns" @change="onChange" />
```

```javascript
const states = {
  'Group1': ['Delaware', 'Florida', 'Georqia', 'Indiana', 'Maine'],
  'Group2': ['Alabama', 'Kansas', 'Louisiana', 'Texas']
};

export default {
  data() {
    return {
      pickerColumns: [
        {
          values: Object.keys(states),
          className: 'column1'
        },
        {
          values: states.Group1,
          className: 'column2'
        }
      ]
    };
  },

  methods: {
    onChange(picker, values) {
      picker.setColumnValues(1, citys[values[0]]);
    }
  }
};
```


#### Picker with toolbar

```html
<van-picker
  showToolbar
  :title="title"
  :columns="pickerColumns"
  @change="onChange"
  @cancel="onCancel"
  @confirm="onConfirm"
/>
```

```javascript
const states = {
  'Group1': ['Delaware', 'Florida', 'Georqia', 'Indiana', 'Maine'],
  'Group2': ['Alabama', 'Kansas', 'Louisiana', 'Texas']
};

export default {
  data() {
    return {
      title: 'Title',
      pickerColumns: [
        {
          values: Object.keys(states),
          className: 'column1'
        },
        {
          values: states.Group1,
          className: 'column2'
        }
      ]
    };
  },

  methods: {
    onChange(picker, values) {
      picker.setColumnValues(1, citys[values[0]]);
    },
    onCancel() {
      Toast('Cancel');
    },
    onConfirm() {
      Toast('Confirm');
    }
  }
};
```

### API

| Attribute | Description | Type | Default | Accepted Values |
|-----------|-----------|-----------|-------------|-------------|
| visibileColumnCount | Count of columns to show | `Number` | `5` | - |
| itemHeight | Item height | `Number` | `44` | - |
| columns | Columns data | `Array` | - | - |
| showToolbar | Whether to show toolbar | `Boolean` | `true` | - |
| title | Toolbar title | `String` | - | - |

### Data struct of columns

| key | Description |
|-----------|-----------|
| values | Value of column |
| defaultIndex | Default value index |
| className | ClassName for this column |

### Picker instance
The first argument of change event's callback function is a picker instance with some methods

| Method | Description |
|-----------|-----------|
| getColumnValue(index) | get current value of the column |
| setColumnValue(index, value) | set current value of the column |
| getColumnValues(index) | get all values of the column |
| setColumnValues(index, values) | set all values of the column |
| getValues() | get current values of all columns |
| setValues(values) | set current values of all columns |
