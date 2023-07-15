# AddressList

### Intro

Display a list of receiving addresses.

### Install

Register component globally via `app.use`, refer to [Component Registration](#/en-US/advanced-usage#zu-jian-zhu-ce) for more registration ways.

```js
import { createApp } from 'vue';
import { AddressList } from 'vant';

const app = createApp();
app.use(AddressList);
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
import { ref } from 'vue';
import { showToast } from 'vant';

export default {
  setup() {
    const chosenAddressId = ref('1');
    const list = [
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
    ];
    const disabledList = [
      {
        id: '3',
        name: 'Tywin',
        tel: '1320000000',
        address: 'Somewhere',
      },
    ];

    const onAdd = () => showToast('Add');
    const onEdit = (item, index) => showToast('Edit:' + index);

    return {
      list,
      onAdd,
      onEdit,
      disabledList,
      chosenAddressId,
    };
  },
};
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| v-model | Id of chosen address | _number \| string_ | - |
| list | Address list | _Address[]_ | `[]` |
| disabled-list | Disabled address list | _Address[]_ | `[]` |
| disabled-text | Disabled text | _string_ | - |
| switchable | Whether to allow switch address | _boolean_ | `true` |
| show-add-button | Whether to show add button | _boolean_ | `true` |
| add-button-text | Add button text | _string_ | `Add new address` |
| default-tag-text | Default tag text | _string_ | - |
| right-icon `v4.5.0` | Right Icon | _string_ | `edit` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| add | Emitted when the add button is clicked | - |
| edit | Emitted when the edit icon of address is clicked | _item: Address, index: number_ |
| select | Emitted when an address is selected | _item: Address, index: number_ |
| edit-disabled | Emitted when the edit icon of disabled address is clicked | _item: Address, index: number_ |
| select-disabled | Emitted when a disabled address is selected | _item: Address, index: number_ |
| click-item | Emitted when an address item is clicked | _item: Address, index: number_ |

### Data Structure of Address

| Key       | Description        | Type               |
| --------- | ------------------ | ------------------ |
| id        | Id                 | _number \| string_ |
| name      | Name               | _string_           |
| tel       | Phone              | _number \| string_ |
| address   | Address            | _string_           |
| isDefault | Is default address | _boolean_          |

### Slots

| Name        | Description                    | SlotProps       |
| ----------- | ------------------------------ | --------------- |
| default     | Custom content after list      | -               |
| top         | Custom content before list     | -               |
| item-bottom | Custom content after list item | _item: Address_ |
| tag         | Custom tag of list item        | _item: Address_ |

### Types

The component exports the following type definitions:

```ts
import type { AddressListProps, AddressListAddress } from 'vant';
```

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/config-provider).

| Name | Default Value | Description |
| --- | --- | --- |
| --van-address-list-padding | _var(--van-padding-sm) var(--van-padding-sm) 80px_ | - |
| --van-address-list-disabled-text-color | _var(--van-text-color-2)_ | - |
| --van-address-list-disabled-text-padding | _var(--van-padding-base) \* 5 0 var(--van-padding-md)_ | - |
| --van-address-list-disabled-text-font-size | _var(--van-font-size-md)_ | - |
| --van-address-list-disabled-text-line-height | _var(--van-line-height-md)_ | - |
| --van-address-list-add-button-z-index | _999_ | - |
| --van-address-list-item-padding | _var(--van-padding-sm)_ | - |
| --van-address-list-item-text-color | _var(--van-text-color)_ | - |
| --van-address-list-item-disabled-text-color | _var(--van-text-color-3)_ | - |
| --van-address-list-item-font-size | _13px_ | - |
| --van-address-list-item-line-height | _var(--van-line-height-sm)_ | - |
| --van-address-list-radio-color | _var(--van-primary-color)_ | - |
| --van-address-list-edit-icon-size | _20px_ | - |
