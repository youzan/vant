<script>
import { Toast } from 'packages';
import areaList from '../mock/area.json';

export default {
  data() {
    return {
      areaList,
      searchResult: []
    }
  },

  methods: {
    onSave() {
      Toast('save');
    },
    onDelete() {
      Toast('delete');
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [{
          name: '黄龙万科中心',
          address: '杭州市西湖区'
        }, {
          name: '黄龙万科中心H座'
        }, {
          name: '黄龙万科中心H座',
          address: '杭州市西湖区'
        }];
      } else {
        this.searchResult = [];
      }
    }
  }
};
</script>

## AddressEdit 地址编辑

### 使用指南
``` javascript
import { AddressEdit } from 'vant';

Vue.component(AddressEdit.name, AddressEdit);
```

### 代码演示

#### 基础用法

:::demo 基础用法
```html
<van-address-edit
  :area-list="areaList"
  :show-postal="true"
  :show-set-default="true"
  :show-search-result="true"
  :search-result="searchResult"
  @save="onSave"
  @delete="onDelete"
  @change-detail="onChangeDetail"
/>
```

```javascript
export default {
  
}
```
:::

### API

| 参数       | 说明      | 类型       | 默认值       | 可选值       |
|-----------|-----------|-----------|-------------|-------------|
| v-model | 当前选中地址的 id | String | - | - |
| list | 地址列表 | Array | `[]` | - |
| addButtonText | 底部按钮文字 | String | `新增收货地址` | - |

### Event

| 事件名       | 说明      | 参数       |
|-----------|-----------|-----------|
| add | 点击新增按钮时触发 | - |
| edit | 点击编辑按钮时触发 | item: 当前地址对象，index: 索引 |
| change | 切换选中的地址时触发 | item: 当前地址对象，index: 索引 |

### 数据格式
#### 地址列表字段说明
| key       | 说明      | 类型       |
|-----------|-----------|-----------|
| id | 每条地址的唯一标识 | `String | Number` |
| name | 收货人姓名 | `String` |
| tel | 收货人手机号 | `String` |
| address | 收货地址 | `String` |
