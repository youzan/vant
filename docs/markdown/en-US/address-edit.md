<script>
import { Toast } from 'packages';
import areaList from '../../mock/area.json';

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

## AddressEdit

### Install
``` javascript
import { AddressEdit } from 'vant';

Vue.component(AddressEdit.name, AddressEdit);
```

### Usage

#### Basic Usage

:::demo Basic Usage
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
        }];
      } else {
        this.searchResult = [];
      }
    }
  }
}
```
:::

### API

| Attribute | Description | Type | Default | Accepted Values |
|-----------|-----------|-----------|-------------|-------------|
| areaList | 地区列表 | `Object` | - | - |
| addressInfo | 收货人信息 | `Object` | `{}` | - |
| searchResult | 详细地址搜索结果 | `Array` | `[]` | - |
| addressText | "地址"文案前缀 | `String` | `收货` | - |
| showPostal | 是否显示邮政编码 | `Boolean` | `false` | - |
| showSetDefault | 是否显示默认地址栏 | `Boolean` | `false` | - |
| showSearchResult | 是否显示搜索结果 | `Boolean` | `false` | - |
| isSaving | 是否显示保存按钮加载动画 | `Boolean` | `false` | - |
| isDeleting | 是否显示删除按钮加载动画 | `Boolean` | `false` | - |

### Event

| Event | Description | Attribute |
|-----------|-----------|-----------|
| save | 点击保存按钮时触发 | content：表单内容 |
| delete | 点击删除按钮时触发 | content：表单内容 |
| change-detail | 修改详细地址时触发 | value: 详细地址内容 |

### Data Structure

#### addressInfo Data Structure
| key | Description | Type |
|-----------|-----------|-----------|
| id | 每条地址的唯一标识 | `String | Number` |
| name | 收货人姓名 | `String` |
| tel | 收货人手机号 | `String` |
| province | 省份 | `String` |
| city | 城市 | `String` |
| county | 区县 | `String` |
| address_detail | 详细地址 | `String` |
| area_code | 地区编码，通过省市区选择获取 | `String` |
| postal_code | 邮政编码 | `String` |
| is_default | 是否为默认地址 | `String` |

#### searchResult Data Structure
| key | Description | Type |
|-----------|-----------|-----------|
| name | 地名 | `String` |
| address | 详细地址 | `String` |

#### 省市县列表Data Structure
请参考 [Area](#/zh-CN/component/area) 组件。
