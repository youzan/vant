## Picker组件

模仿iOS中的`UIPickerView`。

### API

| 参数       | 说明      | 类型       | 默认值       | 可选值       |
|-----------|-----------|-----------|-------------|-------------|
| visibileColumnCount | 每一列可见备选元素的个数 | Number  | 5 |   |
| itemHeight | 选中元素区高度 | Number  | 44 |   |
| columns | 对象数组，配置每一列显示的数据 | Array  |  |   |
| showToolbar | 是否在组件顶部显示一个toolbar | Boolean  | true |   |

### columns

`API`中的`columns`为一个对象数组，数组中的每一个对象配置每一列，每一列有以下`key`：

| key       | 说明      |
|-----------|-----------|
| values | 列中对应的备选值 |
| defaultIndex | 初始选中值的索引，默认为0 |
| className | 为对应列添加特殊的`class` |

### change事件

在`change`事件中，可以获取到`picker`实例，对`picker`进行相应的更新等操作：

| 函数       | 说明      |
|-----------|-----------|
| getColumnValue(index) | 获取对应列中选中的值 |
| setColumnValue(index, value) | 设置对应列中选中的值 |
| getColumnValues(index) | 获取对应列中所有的备选值 |
| setColumnValues(index, values) | 设置对应列中所有的备选值 |
| getValues() | 获取所有列中被选中的值，返回一个数组 |
| setValues(values) | `values`为一个数组，设置所有列中被选中的值 |
