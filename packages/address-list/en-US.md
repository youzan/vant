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
|-----------|-----------|-----------|-------------|
| v-model | Id of chosen address | String | - |
| list | Address list | Array | `[]` |
| add-button-text | Add button text | String | `Add new address` |

### Event

| Event | Description | Arguments |
|-----------|-----------|-----------|
| add | Triggered when click add button | - |
| edit | Triggered when click edit button | item: address object，index |
| select | Triggered when select address | item: address object，index |

### Address Data Structure

| key | Description | Type |
|-----------|-----------|-----------|
| id | Id | `String | Number` |
| name | Name | `String` |
| tel | Phone | `String` |
| address | Address | `String` |
