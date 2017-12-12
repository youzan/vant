## AddressList

### Install
``` javascript
import { AddressList } from 'vant';

Vue.use(AddressList);
```

### Usage

#### Basic Usage

```html
<van-address-list
  v-model="chosenAddressId"
  :list="list"
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
      ]
    }
  },

  methods: {
    onAdd() {
      Toast('新增收货地址');
    },
    onEdit(item, index) {
      Toast('编辑收货地址:' + index);
    }
  }
}
```

### API

| Attribute | Description | Type | Default | Accepted Values |
|-----------|-----------|-----------|-------------|-------------|
| v-model | 当前选中地址的 id | String | - | - |
| list | 地址列表 | Array | `[]` | - |
| addButtonText | 底部按钮文字 | String | `新增收货地址` | - |

### Event

| Event | Description | Attribute |
|-----------|-----------|-----------|
| add | 点击新增按钮时触发 | - |
| edit | 点击编辑按钮时触发 | item: 当前地址对象，index: 索引 |
| select | 切换选中的地址时触发 | item: 当前地址对象，index: 索引 |

### Data Structure
#### 地址列表字段说明
| key | Description | Type |
|-----------|-----------|-----------|
| id | 每条地址的唯一标识 | `String | Number` |
| name | 收货人姓名 | `String` |
| tel | 收货人手机号 | `String` |
| address | 收货地址 | `String` |
