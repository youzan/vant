## Picker 选择器
选择器组件通常与 [弹出层](#/zh-CN/popup) 组件配合使用

### 使用指南
``` javascript
import { Picker } from 'vant';

Vue.use(Picker);
```

### 代码演示

#### 基础用法

对于单列选择器，传入数值格式的 columns 即可，同时可以监听选项改变的 change 事件

```html
<van-picker :columns="columns" @change="onChange" />
```

```javascript
export default {
  data() {
    return {
      columns: ['杭州', '宁波', '温州', '嘉兴', '湖州']
    };
  },
  methods: {
    onChange(picker, value, index) {
      Toast(`当前值：${value}, 当前索引：${index}`);
    }
  }
};
```

#### 默认选中项

单列选择器可以直接通过`default-index`属性设置初始选中项的索引值

```html
<van-picker
  :columns="columns"
  :default-index="2"
  @change="onChange"
/>
```

#### 展示顶部栏

通常选择器组件会传入`show-toolbar`属性以展示顶部操作栏，并可以监听对应的`confirm`和`cancel`事件

```html
<van-picker
  show-toolbar
  title="标题"
  :columns="columns"
  @cancel="onCancel"
  @confirm="onConfirm"
/>
```

```javascript
export default {
  data() {
    return {
      columns: ['杭州', '宁波', '温州', '嘉兴', '湖州']
    }
  },
  methods: {
    onConfirm(value, index) {
      Toast(`当前值：${value}, 当前索引：${index}`);
    },
    onCancel() {
      Toast('取消');
    }
  }
};
```

#### 禁用选项

选项可以为对象结构，通过设置 disabled 来禁用该选项

```html
<van-picker :columns="columns" />
```

```javascript
export default {
  data() {
    return {
      columns: [
        { text: '杭州', disabled: true },
        { text: '宁波' },
        { text: '温州' }
      ]
    };
  }
};
```

#### 多列联动

```html
<van-picker :columns="columns" @change="onChange" />
```

```javascript
const citys = {
  '浙江': ['杭州', '宁波', '温州', '嘉兴', '湖州'],
  '福建': ['福州', '厦门', '莆田', '三明', '泉州']
};

export default {
  data() {
    return {
      columns: [
        {
          values: Object.keys(citys),
          className: 'column1'
        },
        {
          values: citys['浙江'],
          className: 'column2',
          defaultIndex: 2
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

#### 加载状态

若选择器数据是异步获取的，可以通过 `loading` 属性显示加载提示

```html
<van-picker :columns="columns" loading />
```

### API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| columns | 对象数组，配置每一列显示的数据 | `Array` | `[]` | - |
| show-toolbar | 是否显示顶部栏 | `Boolean` | `false` | - |
| title | 顶部栏标题 | `String` | `''` | - |
| loading | 是否显示加载状态 | `Boolean` | `false` | - |
| value-key | 选项对象中，文字对应的 key | `String` | `text` | - |
| item-height | 选项高度 | `Number` | `44` | - |
| confirm-button-text | 确认按钮文字 | `String` | `确认` | - |
| cancel-button-text | 取消按钮文字 | `String` | `取消` | - |
| visible-item-count | 可见的选项个数 | `Number` | `5` | - |
| default-index | 单列选择器的默认选中项索引，<br>多列选择器请参考下方的 Columns 配置 | `Number` | `0` | 1.6.9 |

### Event

Picker 组件的事件会根据 columns 是单列或多列返回不同的参数

| 事件名 | 说明 | 参数 |
|------|------|------|
| confirm | 点击完成按钮时触发 | 单列：选中值，选中值对应的索引<br>多列：所有列选中值，所有列选中值对应的索引 |
| cancel | 点击取消按钮时触发 | 单列：选中值，选中值对应的索引<br>多列：所有列选中值，所有列选中值对应的索引 |
| change | 选项改变时触发 | 单列：Picker 实例，选中值，选中值对应的索引<br>多列：Picker 实例，所有列选中值，当前列对应的索引 |

### Slot

| 名称 | 说明 |
|------|------|
| title | 自定义标题内容 |

### Columns 数据结构

当传入多列数据时，`columns`为一个对象数组，数组中的每一个对象配置每一列，每一列有以下`key`

| key | 说明 |
|------|------|
| values | 列中对应的备选值 |
| defaultIndex | 初始选中项的索引，默认为 0 |
| className | 为对应列添加额外的`class` |

### 方法

通过 ref 可以获取到 picker 实例并调用实例方法

| 方法名 | 参数 | 返回值 | 介绍 |
|------|------|------|------|
| getValues | - | values | 获取所有列选中的值 |
| setValues | values | - | 设置所有列选中的值 |
| getIndexes | - | indexes | 获取所有列选中值对应的索引 |
| setIndexes | indexes | - | 设置所有列选中值对应的索引 |
| getColumnValue | columnIndex | value | 获取对应列选中的值 |
| setColumnValue | columnIndex, value | - | 设置对应列选中的值 |
| getColumnIndex | columnIndex | optionIndex | 获取对应列选中项的索引 |
| setColumnIndex | columnIndex, optionIndex | - | 设置对应列选中项的索引 |
| getColumnValues | columnIndex | values | 获取对应列中所有选项 |
| setColumnValues | columnIndex, values | - | 设置对应列中所有选项 |
