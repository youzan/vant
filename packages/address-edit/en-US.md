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
  show-delete
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

| Attribute | Description | Type | Default |
|------|------|------|------|
| area-list | Area List | `Object` | - |
| address-info | Address Info | `Object` | `{}` |
| search-result | Address search result | `Array` | `[]` |
| show-postal | Whether to show postal field | `Boolean` | `false` |
| show-delete | Whether to show delete button | `Boolean` | `false` |
| show-set-default | Whether to show default address switch | `Boolean` | `false` |
| show-search-result | Whether to show address search result | `Boolean` | `false` |
| save-button-text | Save button text | `String` | `Save` |
| delete-button-text | Delete button text | `String` | `Delete` |
| is-saving | Whether to show save button loading status | `Boolean` | `false` |
| is-deleting | Whether to show delete button loading status | `Boolean` | `false` |
| tel-validator | The method to validate tel | `(tel: string) => boolean` | - |
| validator | Custom validator | `(key, value) => string` | - | 1.3.9 |

### Event

| Event | Description | Arguments |
|------|------|------|
| save | Triggered when click save button | content：form content |
| focus | Triggered when focus field | key: field name |
| delete | Triggered when confirm delete | content：form content |
| cancel-delete | Triggered when cancel delete | content：form content |
| select-search | Triggered when select search result | value: search content |
| change-area | Triggered when change area | values: area values |
| change-detail | Triggered when address detail changed | value: address detail |
| change-default | Triggered when switch default address | value: checked |

### Slot

| Name | Description |
|------|------|
| - | Custom content below postal |

### Methods

Use ref to get address-edit instance and call instance methods

| Name | Attribute | Return value | Description |
|------|------|------|------|
| setAddressDetail | addressDetail: string | - | Set address detail |

### Data Structure

#### addressInfo Data Structure
| key | Description | Type |
|------|------|------|
| id | Address Id | `String | Number` |
| name | Name | `String` |
| tel | Phone | `String` |
| province | Province | `String` |
| city | City | `String` |
| county | County | `String` |
| addressDetail | Detailed Address | `String` |
| areaCode | Area code | `String` |
| postalCode | Postal code | `String` |
| isDefault | Is default address | `Boolean` |

#### searchResult Data Structure
| key | Description | Type |
|------|------|------|
| name | Name | `String` |
| address | Address | `String` |

#### Area Data Structure
Please refer to [Area](#/en-US/area) component。
