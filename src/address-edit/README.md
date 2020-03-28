# AddressEdit

### Install

```js
import Vue from 'vue';
import { AddressEdit } from 'vant';

Vue.use(AddressEdit);
```

## Usage

### Basic Usage

```html
<van-address-edit
  :area-list="areaList"
  show-postal
  show-delete
  show-set-default
  show-search-result
  :search-result="searchResult"
  :area-columns-placeholder="['Choose', 'Choose', 'Choose']"
  @save="onSave"
  @delete="onDelete"
  @change-detail="onChangeDetail"
/>
```

```js
import { Toast } from 'vant';

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

## API

### Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| area-list | Area List | *object* | - |
| area-columns-placeholder `v2.2.5` | placeholder of area columns | *string[]* | `[]` |
| address-info | Address Info | *AddressInfo* | `{}` |
| search-result | Address search result | *SearchResult[]* | `[]` |
| show-postal | Whether to show postal field | *boolean* | `false` |
| show-delete | Whether to show delete button | *boolean* | `false` |
| show-set-default | Whether to show default address switch | *boolean* | `false` |
| show-search-result | Whether to show address search result | *boolean* | `false` |
| show-area | Whether to show area cell | *boolean* | `true` |
| show-detail | Whether to show detail field | *boolean* | `true` |
| disable-area `v2.5.0` | Whether to disable area select | *boolean* | `false` |
| save-button-text | Save button text | *string* | `Save` |
| delete-button-text | Delete button text | *string* | `Delete` |
| detail-rows | Detail input rows | *number \| string* | `1` |
| detail-maxlength `v2.0.4` | Detail maxlength | *number \| string* | `200` |
| is-saving | Whether to show save button loading status | *boolean* | `false` |
| is-deleting | Whether to show delete button loading status | *boolean* | `false` |
| tel-validator | The method to validate tel | *(tel: string) => boolean* | - |
| postal-validator `v2.1.2` | The method to validate postal | *(tel: string) => boolean* | - |
| validator | Custom validator | *(key, val) => string* | - |

### Events

| Event | Description | Arguments |
|------|------|------|
| save | Triggered when click save button | content：form content |
| focus | Triggered when focus field | key: field name |
| delete | Triggered when confirm delete | content：form content |
| cancel-delete | Triggered when cancel delete | content：form content |
| select-search | Triggered when select search result | value: search content |
| click-area `v2.5.9` | Triggered when click area | - |
| change-area | Triggered when change area | values: area values |
| change-detail | Triggered when address detail changed | value: address detail |
| change-default | Triggered when switch default address | value: checked |

### Slots

| Name | Description |
|------|------|
| default | Custom content below postal |

### Methods

Use [ref](https://vuejs.org/v2/api/#ref) to get AddressEdit instance and call instance methods

| Name | Description | Attribute | Return value |
|------|------|------|------|
| setAddressDetail | Set address detail | addressDetail: string | - |

### AddressInfo Data Structure

| key | Description | Type |
|------|------|------|
| id | Address Id | *number \| string* |
| name | Name | *string* |
| tel | Phone | *string* |
| province | Province | *string* |
| city | City | *string* |
| county | County | *string* |
| addressDetail | Detailed Address | *string* |
| areaCode | Area code | *string* |
| postalCode | Postal code | *string* |
| isDefault | Is default address | *boolean* |

### SearchResult Data Structure

| key | Description | Type |
|------|------|------|
| name | Name | *string* |
| address | Address | *string* |

### Area Data Structure

Please refer to [Area](#/en-US/area) component。
