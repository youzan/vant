## AddressEdit

### Install
``` javascript
import { AddressEdit } from 'vant';

Vue.component(AddressEdit.name, AddressEdit);
```

### Usage

#### Basic Usage


```html
<van-address-edit
  :areaList="areaList"
  :showPostal="true"
  :showSetDefault="true"
  :showSearchResult="true"
  :searchResult="searchResult"
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


### API

| Attribute | Description | Type | Default | Accepted Values |
|-----------|-----------|-----------|-------------|-------------|
| areaList | Area List | `Object` | - | - |
| addressInfo | Address Info | `Object` | `{}` | - |
| searchResult | Address search result | `Array` | `[]` | - |
| showPostal | Whether to show postal field | `Boolean` | `false` | - |
| showSetDefault | Whether to show default address switch | `Boolean` | `false` | - |
| showSearchResult | Whether to show address search result | `Boolean` | `false` | - |
| isSaving | Whether to show save button loading status | `Boolean` | `false` | - |
| isDeleting | Whether to show delete button loading status | `Boolean` | `false` | - |

### Event

| Event | Description | Attribute |
|-----------|-----------|-----------|
| save | Triggered when click save button | content：Form content |
| delete | Triggered when click delete | content：Form content |
| change-detail | Triggered when address detail changed | value: address detail |

### Data Structure

#### addressInfo Data Structure
| key | Description | Type |
|-----------|-----------|-----------|
| id | Address Id | `String | Number` |
| name | Name | `String` |
| tel | Phone | `String` |
| province | Province | `String` |
| city | City | `String` |
| county | County | `String` |
| address_detail | Detailed Address | `String` |
| area_code | Area code | `String` |
| postal_code | Postal code | `String` |
| is_default | Is default address | `String` |

#### searchResult Data Structure
| key | Description | Type |
|-----------|-----------|-----------|
| name | Name | `String` |
| address | Address | `String` |

#### Area Data Structure
Please refer to [Area](#/en-US/component/area) component。
