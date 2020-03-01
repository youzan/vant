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
<van-picker :columns="columns" @change="onChange" />
```

```js
import { Toast } from 'vant';

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

### Default Index

```html
<van-picker
  :columns="columns"
  :default-index="2"
  @change="onChange"
/>
```

### Show Toolbar

```html
<van-picker
  show-toolbar
  title="Title"
  :columns="columns"
  @cancel="onCancel"
  @confirm="onConfirm"
/>
```

```js
import { Toast } from 'vant';

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
          defaultIndex: 2
        },
        {
          values: ['Morging', 'Afternoon', 'Evening'],
          defaultIndex: 1
        }
      ]
    };
  }
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
      columns: [{
        text: 'Zhejiang',
        children: [{
          text: 'Hangzhou',
          children: [{ text: 'Xihu' }, { text: 'Yuhang' }]
        }, {
          text: 'Wenzhou',
          children: [{ text: 'Lucheng' }, { text: 'Ouhai' }]
        }]
      }, {
        text: 'Fujian',
        children: [{
          text: 'Fuzhou',
          children: [{ text: 'Gulou' }, { text: 'Taijiang' }]
        }, {
          text: 'Xiamen',
          children: [{ text: 'Siming' }, { text: 'Haicang' }]
        }]
      }]
    };
  }
};
```

### Disable option

```html
<van-picker :columns="columns" />
```

```js
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

### Set Column Values

```html
<van-picker :columns="columns" @change="onChange" />
```

```js
const states = {
  'Group1': ['Delaware', 'Florida', 'Georqia', 'Indiana', 'Maine'],
  'Group2': ['Alabama', 'Kansas', 'Louisiana', 'Texas']
};

export default {
  data() {
    return {
      columns: [
        { values: Object.keys(states) },
        { values: states.Group1 }
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

### Loading

When Picker columns data is acquired asynchronously, use `loading` prop to show loading prompt

```html
<van-picker :columns="columns" :loading="loading" />
```

```js
export default {
  data() {
    return {
      columns: [],
      loading: true
    };
  },
  created() {
    setTimeout(() => {
      this.loading = false;
      this.columns = ['Option'];
    }, 1000);
  }
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
<van-popup v-model="showPicker" position="bottom">
  <van-picker
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
      columns: ['Delaware', 'Florida', 'Georqia', 'Indiana', 'Maine']
    }
  },
  methods: {
    onConfirm(value) {
      this.value = value;
      this.showPicker = false;
    }
  }
};
```

## API

### Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| columns | Columns data | *Column[]* | `[]` |
| title | Toolbar title | *string* | - |
| confirm-button-text | Text of confirm button | *string* | `Confirm` |
| cancel-button-text | Text of cancel button | *string* | `Cancel` |
| value-key | Key of option text | *string* | `text` |
| toolbar-position | Toolbar position, cat be set to `bottom` | *string* | `top` |
| loading | Whether to show loading prompt | *boolean* | `false` |
| show-toolbar | Whether to show toolbar | *boolean* | `false` |
| allow-html `v2.1.8` | Whether to allow HTML in option text | *boolean* | `true` |
| default-index | Default value index of single column picker | *number \| string* | `0` |
| item-height | Option height | *number \| string* | `44` |
| visible-item-count | Count of visible columns | *number \| string* | `5` |
| swipe-duration `v2.2.10` | Duration of the momentum animation，unit `ms` | *number \| string*  | `1000` |

### Events

Picker events will pass different parameters according to the columns are single or multiple

| Event | Description | Arguments |
|------|------|------|
| confirm | Triggered when click confirm button | Single column：current value，current index<br>Multiple columns：current values，current indexes |
| cancel | Triggered when click cancel button | Single column：current value，current index<br>Multiple columns：current values，current indexes |
| change | Triggered when current option changed | Single column：Picker instance, current value，current index<br>Multiple columns：Picker instance, current values，column index |

### Slots

| Name | Description |
|------|------|
| default | Custom toolbar content |
| title | Custom title |
| columns-top | Custom content above columns |
| columns-bottom | Custom content below columns |

### Data Structure of Column

| Key | Description | Type |
|------|------|------|
| values | Value of column | *string[]* |
| defaultIndex | Default value index | *number* |
| className | ClassName for this column | *any* |
| children `v2.4.5` | Cascade children | *Column* |

### Methods

Use [ref](https://vuejs.org/v2/api/#ref) to get Picker instance and call instance methods

| Name | Description | Attribute | Return value |
|------|------|------|------|
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
