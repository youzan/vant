# AddressList

### Install
``` javascript
import { AddressList } from 'vant';

Vue.use(AddressList);
```

## Usage

### Basic Usage

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

## API

### Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| v-model | Id of chosen address | `string` | - |
| list | Address list | `Address[]` | `[]` |
| disabled-list | Disabled address list | `Address[]` | `[]` |
| disabled-text | Disabled text | `string` | - |
| switchable | Whether to allow switch address | `boolean` | `true` |
| add-button-text | Add button text | `string` | `Add new address` |

### Events

| Event | Description | Arguments |
|------|------|------|
| add | Triggered when click add button | - |
| edit | Triggered when edit address | item: address object，index |
| select | Triggered when select address | item: address object，index |
| edit-disabled | Triggered when edit disabled address | item: address object，index |
| select-disabled | Triggered when select disabled address | item: address object，index |
| click-item | Triggered when click address item | item: address object，index |

### Data Structure of Address

| Key | Description | Type |
|------|------|------|
| id | Id | `string | number` |
| name | Name | `string` |
| tel | Phone | `string | number` |
| address | Address | `string` |

### Slots

| Name | Description |
|------|------|
| default | Custom content after list |
| top | Custom content before list |
