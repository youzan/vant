<script>
const citys = {
  '浙江': ['杭州', '宁波', '温州', '嘉兴', '湖州', '绍兴', '金华', '衢州', '舟山', '台州', '丽水'],
  '福建': ['福州', '厦门', '莆田', '三明', '泉州', '漳州', '南平', '龙岩', '宁德'],
  '湖南': ['长沙', '株洲', '湘潭', '衡阳', '邵阳', '岳阳', '常德', '张家界', '益阳', '郴州', '永州', '怀化', '娄底', '湘西土家族苗族自治州']
};

export default {
  data() {
    return {
      pickerColumns: [
        {
          values: Object.keys(citys),
          className: 'column1'
        },
        {
          values: ['杭州', '宁波', '温州', '嘉兴', '湖州', '绍兴', '金华', '衢州', '舟山', '台州', '丽水'],
          className: 'column2'
        }
      ]
    };
  },

  methods: {
    handlePickerChange(picker, values) {
      picker.setColumnValues(1, citys[values[0]]);
    },
    handlePickerCancel() {
      alert('picker cancel');
    },
    handlePickerConfirm() {
      alert('picker confirm');
    }
  }
};
</script>

## Picker 选择器

### 使用指南

如果你已经按照快速上手中引入了整个`vant`，以下**组件注册**就可以忽略了，因为你已经全局注册了`vant`中的全部组件。

#### 全局注册

你可以在全局注册`Picker`组件，比如页面的主文件（`index.js`，`main.js`），这样页面任何地方都可以直接使用`Picker`组件了：

```js
import Vue from 'vue';
import { Picker } from 'vant';
import 'vant/lib/vant-css/picker.css';

Vue.component(Picker.name, Picker);
```

#### 局部注册

如果你只是想在某个组件中使用，你可以在对应组件中注册`Picker`组件，这样只能在你注册的组件中使用`Picker`：

```js
import { Picker } from 'vant';

export default {
  components: {
    'van-picker': Picker
  }
};
```

### 代码演示

#### 基础用法

:::demo 基础用法
```html
<van-picker :columns="pickerColumns" @change="handlePickerChange"></van-picker>

<script>
const citys = {
  '浙江': ['杭州', '宁波', '温州', '嘉兴', '湖州', '绍兴', '金华', '衢州', '舟山', '台州', '丽水'],
  '福建': ['福州', '厦门', '莆田', '三明', '泉州', '漳州', '南平', '龙岩', '宁德'],
  '湖南': ['长沙', '株洲', '湘潭', '衡阳', '邵阳', '岳阳', '常德', '张家界', '益阳', '郴州', '永州', '怀化', '娄底', '湘西土家族苗族自治州']
};

export default {
  data() {
    return {
      pickerColumns: [
        {
          values: Object.keys(citys),
          className: 'column1'
        },
        {
          values: ['杭州', '宁波', '温州', '嘉兴', '湖州', '绍兴', '金华', '衢州', '舟山', '台州', '丽水'],
          className: 'column2'
        }
      ]
    };
  },

  methods: {
    handlePickerChange(picker, values) {
      picker.setColumnValues(1, citys[values[0]]);
    }
  }
};
</script>
```
:::

#### 带toolbar的Picker

:::demo 带toolbar的Picker
```html
<van-picker :columns="pickerColumns" show-toolbar @change="handlePickerChange" @cancel="handlePickerCancel" @confirm="handlePickerConfirm"></van-picker>

<script>
const citys = {
  '浙江': ['杭州', '宁波', '温州', '嘉兴', '湖州', '绍兴', '金华', '衢州', '舟山', '台州', '丽水'],
  '福建': ['福州', '厦门', '莆田', '三明', '泉州', '漳州', '南平', '龙岩', '宁德'],
  '湖南': ['长沙', '株洲', '湘潭', '衡阳', '邵阳', '岳阳', '常德', '张家界', '益阳', '郴州', '永州', '怀化', '娄底', '湘西土家族苗族自治州']
};

export default {
  data() {
    return {
      pickerColumns: [
        {
          values: Object.keys(citys),
          className: 'column1'
        },
        {
          values: ['杭州', '宁波', '温州', '嘉兴', '湖州', '绍兴', '金华', '衢州', '舟山', '台州', '丽水'],
          className: 'column2'
        }
      ]
    };
  },

  methods: {
    handlePickerChange(picker, values) {
      picker.setColumnValues(1, citys[values[0]]);
    },
    handlePickerCancel() {
      alert('picker cancel');
    },
    handlePickerConfirm() {
      alert('picker confirm');
    }
  }
};
</script>
```
:::

### API

| 参数       | 说明      | 类型       | 默认值       | 可选值       |
|-----------|-----------|-----------|-------------|-------------|
| visibileColumnCount | 每一列可见备选元素的个数 | `number`  | `5` |   |
| itemHeight | 选中元素区高度 | `number`  | `44` |   |
| columns | 对象数组，配置每一列显示的数据 | `Array`  |  |   |
| showToolbar | 是否在组件顶部显示一个toolbar | `Boolean`  | `true` |   |

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
