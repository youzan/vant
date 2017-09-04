## ExpressWay 配送方式

<script>
import { Toast, CellGroup } from 'packages';

export default {
  data() {
    return {
      currentExpressType: 1,
      expressList: [{
        'postage': 10050,
        'postage_desc': '由商家门店提供配送服务, 起送价 0.01 元',
        'postage_title': '同城配送',
        'express_type': 1
      }, {
        'postage': 0,
        'postage_desc': '由商家选择合作快递为您服务',
        'postage_title': '快递发货',
        'express_type': 2,
        'postage_warn_desc': '3天后发货'
      }]
    };
  },

  methods: {
    onChange(item, index) {
      Toast('配送方式更换为:' + item.postage_title);
    }
  },

  components: {
    [CellGroup.name]: CellGroup
  }
}
</script>

### 使用指南
``` javascript
import { ExpressWay } from 'vant';

Vue.component(ExpressWay.name, ExpressWay);
```

### 代码演示

#### 基础用法

:::demo 基础用法
```html
<van-cell-group>
  <van-express-way
    v-model="currentExpressType"
    :express-list="expressList"
    @change="onChange"
  ></van-express-way>
</van-cell-group>
```

```javascript
export default {
  data() {
    return {
      currentExpressType: 1,
      expressList: [{
        'postage': 10050,
        'postage_desc': '由商家门店提供配送服务, 起送价 0.01 元',
        'postage_title': '同城配送',
        'express_type': 1
      }]
    };
  },

  methods: {
    onChange(item) {
      Toast(`配送方式更换为:${item.postage_title}`);
    }
  }
}
```
:::

#### 不可修改配送方式

:::demo 不可修改配送方式
```html
<van-cell-group>
  <van-express-way 
    :value="1" 
    :express-list="expressList"
    :editable="false"
    @change="onChange"
  ></van-express-way>
</van-cell-group>
```
:::

### API

| 参数       | 说明      | 类型       | 默认值       | 必须      |
|-----------|-----------|-----------|-------------|-------------|
| v-model | 当前选择的配送类型 | `Number`  |   | 是 |
| expressList | 配送方式列表数据 | `Array`  |   | 是 |
| cellTitle | Cell 标题 | `String`  | `配送方式` | 否 |
| actionsheetTitle | Actionsheet 标题 | `String`  | `配送方式` | 否 |
| editable | 能否修改配送方式 | `Boolean`  | `true` | 否 |


### 数据格式
#### expressList中的配送方式字段说明
| key       | 说明      | 类型       |
|-----------|-----------|-----------|
| postage | 运费，以分为单位 |  Number |
| postage_title | 配送方式 |  String |
| postage_desc | 描述信息 |  String |
| express_type | 配送类型 |  Number |
| postage_warn_desc | 提示信息 |  String |

### Event

| 事件名       | 说明      | 参数       |
|-----------|-----------|-----------|
| change | 修改配送方式时触发 | item: 对应的数据, index：对应的索引 |
