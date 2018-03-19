## AddressEdit

### Install
``` javascript
import { AddressEdit } from 'vant';

Vue.use(AddressEdit);
```

### Usage

#### Basic Usage


```html
<van-address-edit
  :area-list="areaList"
  show-postal
  show-set-default
  show-search-result
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


### API

| Attribute | Description | Type | Default | Accepted Values |
|-----------|-----------|-----------|-------------|-------------|
| area-list | Area List | `Object` | - | - |
| address-info | Address Info | `Object` | `{}` | - |
| search-result | Address search result | `Array` | `[]` | - |
| show-postal | Whether to show postal field | `Boolean` | `false` | - |
| show-delete | Whether to show delete button | `Boolean` | `false` | - |
| show-set-default | Whether to show default address switch | `Boolean` | `false` | - |
| show-search-result | Whether to show address search result | `Boolean` | `false` | - |
| is-saving | Whether to show save button loading status | `Boolean` | `false` | - |
| is-deleting | Whether to show delete button loading status | `Boolean` | `false` | - |
| tel-validator | The method to validate tel | `(tel: string) => boolean` | - | - |

### Event

| Event | Description | Arguments |
|-----------|-----------|-----------|
| save | Triggered when click save button | content：Form content |
| delete | Triggered when click delete | content：Form content |
| change-detail | Triggered when address detail changed | value: address detail |

### Slot

| Name | Description |
|-----------|-----------|
| - | Custom content below postal |

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
| is_default | Is default address | `Boolean` |

#### searchResult Data Structure
| key | Description | Type |
|-----------|-----------|-----------|
| name | Name | `String` |
| address | Address | `String` |

#### Area Data Structure
Please refer to [Area](#/en-US/component/area) component。
