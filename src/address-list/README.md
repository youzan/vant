# AddressList

### Install

```js
import Vue from 'vue';
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
  default-tag-text="Default"
  @add="onAdd"
  @edit="onEdit"
/>
```

```js
import { Toast } from 'vant';

export default {
  data() {
    return {
      chosenAddressId: '1',
      list: [
        {
          id: '1',
          name: 'John Snow',
          tel: '13000000000',
          address: 'Somewhere',
          isDefault: true,
        },
        {
          id: '2',
          name: 'Ned Stark',
          tel: '1310000000',
          address: 'Somewhere',
        },
      ],
      disabledList: [
        {
          id: '3',
          name: 'Tywin',
          tel: '1320000000',
          address: 'Somewhere',
        },
      ],
    };
  },
  methods: {
    onAdd() {
      Toast('Add');
    },
    onEdit(item, index) {
      Toast('Edit:' + index);
    },
  },
};
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| v-model | Id of chosen address | _string_ | - |
| list | Address list | _Address[]_ | `[]` |
| disabled-list | Disabled address list | _Address[]_ | `[]` |
| disabled-text | Disabled text | _string_ | - |
| switchable | Whether to allow switch address | _boolean_ | `true` |
| add-button-text | Add button text | _string_ | `Add new address` |
| default-tag-text | Default tag text | _string_ | - |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| add | Emitted when the add button is clicked | - |
| edit | Emitted when the edit icon of address is clicked | item: address object，index |
| select | Emitted when an address is selected | item: address object，index |
| edit-disabled | Emitted when the edit icon of disabled address is clicked | item: address object，index |
| select-disabled | Emitted when a disabled address is selected | item: address object，index |
| click-item | Emitted when an address item is clicked | item: address object，index |

### Data Structure of Address

| Key       | Description        | Type               |
| --------- | ------------------ | ------------------ |
| id        | Id                 | _number \| string_ |
| name      | Name               | _string_           |
| tel       | Phone              | _number \| string_ |
| address   | Address            | _string_           |
| isDefault | Is default address | _boolean_          |

### Slots

| Name                 | Description                      | SlotProps |
| -------------------- | -------------------------------- | --------- |
| default              | Custom content after list        | -         |
| top                  | Custom content before list       | -         |
| item-bottom `v2.5.0` | Custom content after list item   | item      |
| tag `v2.12.9`        | Custom tag content for list item | item      |

### Less Variables

How to use: [Custom Theme](#/en-US/theme).

| Name | Default Value | Description |
| --- | --- | --- |
| @address-list-padding | `@padding-sm @padding-sm 80px` | - |
| @address-list-disabled-text-color | `@gray-6` | - |
| @address-list-disabled-text-padding | `@padding-base * 5 0 @padding-md` | - |
| @address-list-disabled-text-font-size | `@font-size-md` | - |
| @address-list-disabled-text-line-height | `@line-height-md` | - |
| @address-list-add-button-z-index | `999` | - |
| @address-list-item-padding | `@padding-sm` | - |
| @address-list-item-text-color | `@text-color` | - |
| @address-list-item-disabled-text-color | `@gray-5` | - |
| @address-list-item-font-size | `13px` | - |
| @address-list-item-line-height | `@line-height-sm` | - |
| @address-list-item-radio-icon-color | `@red` | - |
| @address-list-edit-icon-size | `20px` | - |
