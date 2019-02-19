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
  :disabled-list="disabledList"
  disabled-text="The following address is out of range"
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
          name: 'John Snow',
          tel: '13000000000',
          address: 'Somewhere'
        },
        {
          id: '2',
          name: 'Ned Stark',
          tel: '1310000000',
          address: 'Somewhere'
        }
      ],
      disabledList: [
        {
          id: '3',
          name: 'Tywin',
          tel: '1320000000',
          address: 'Somewhere'
        }
      ]
    }
  },

  methods: {
    onAdd() {
      Toast('Add');
    },
    onEdit(item, index) {
      Toast('Edit:' + index);
    }
  }
}
```

### API

| Attribute | Description | Type | Default |
|------|------|------|------|
| v-model | Id of chosen address | String | - |
| list | Address list | Array | `[]` |
| disabled-list | Disabled address list | `Array` | `[]` |
| disabled-text | Disabled text | `String` | - |
| switchable | Whether to allow switch address | `Boolean` | `true` |
| add-button-text | Add button text | String | `Add new address` |

### Event

| Event | Description | Arguments |
|------|------|------|
| add | Triggered when click add button | - |
| edit | Triggered when edit address | item: address object，index |
| select | Triggered when select address | item: address object，index |
| edit-disabled | Triggered when edit disabled address | item: address object，index |
| select-disabled | Triggered when select disabled address | item: address object，index |

### Address Data Structure

| key | Description | Type |
|------|------|------|
| id | Id | `String | Number` |
| name | Name | `String` |
| tel | Phone | `String | Number` |
| address | Address | `String` |

### Slot

| 名称 | 说明 |
|------|------|
| - | Custom content after list |
| top | Custom content before list |
