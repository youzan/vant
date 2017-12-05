## Picker

### Install
``` javascript
import { Picker } from 'vant';

Vue.component(Picker.name, Picker);
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
  showToolbar
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
| showToolbar | Whether to show toolbar | `Boolean` | `false` | - |
| title | Toolbar title | `String` | `''` | - |
| itemHeight | Option height | `Number` | `44` | - |
| visibileColumnCount | Count of visible columns | `Number` | `5` | - |
| valueKey | Key of option text | `String` | `text` | - |

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
