## AddressList 地址列表

### 使用指南
``` javascript
import { AddressList } from 'vant';

Vue.use(AddressList);
```

### 代码演示

#### 基础用法

```html
<van-address-list
  v-model="chosenAddressId"
  :list="list"
  :disabled-list="disabledList"
  disabled-text="以下地址超出配送范围"
  @add="onAdd"
  @edit="onEdit"
/>
```

```javascript
export default {
  data() {
    return {
      chosenAddressId: '1',
      list: [
        {
          id: '1',
          name: '张三',
          tel: '13000000000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
        },
        {
          id: '2',
          name: '李四',
          tel: '1310000000',
          address: '浙江省杭州市拱墅区莫干山路 50 号'
        }
      ],
      disabledList: [
        {
          id: '3',
          name: '王五',
          tel: '1320000000',
          address: '浙江省杭州市滨江区江南大道 15 号'
        }
      ]
    }
  },

  methods: {
    onAdd() {
      Toast('新增地址');
    },

    onEdit(item, index) {
      Toast('编辑地址:' + index);
    }
  }
}
```


### API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| v-model | 当前选中地址的 id | `String` | - | - |
| list | 地址列表 | `Array` | `[]` | - |
| add-button-text | 底部按钮文字 | `String` | `新增地址` | - |
| disabled-list | 不可配送地址列表 | `Array` | `[]` | 1.3.0 |
| disabled-text | 不可配送提示文案 | `String` | - | 1.3.0 |
| switchable | 是否允许切换地址 | `Boolean` | `true` | 1.3.8 |

### Event

| 事件名 | 说明 | 参数 | 版本 |
|------|------|------|------|
| add | 点击新增按钮时触发 | - | - |
| edit | 点击编辑按钮时触发 | item: 地址对象，index: 索引 | - |
| select | 切换选中的地址时触发 | item: 地址对象，index: 索引 | - |
| edit-disabled | 编辑不可配送的地址时触发 | item: 地址对象，index: 索引 | 1.3.0 |
| select-disabled | 选中不可配送的地址时触发 | item: 地址对象，index: 索引 | 1.3.0 |

### 数据格式

#### 地址列表字段说明

| key | 说明 | 类型 |
|------|------|------|
| id | 每条地址的唯一标识 | `String | Number` |
| name | 收货人姓名 | `String` |
| tel | 收货人手机号 | `String | Number` |
| address | 收货地址 | `String` |

### Slot

| 名称 | 说明 |
|------|------|
| - | 在列表下方插入内容 |
| top | 在顶部插入内容 |
