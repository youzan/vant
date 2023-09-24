# AddressEdit

### Intro

Used to create, update, and delete receiving addresses.

### Install

Register component globally via `app.use`, refer to [Component Registration](#/en-US/advanced-usage#zu-jian-zhu-ce) for more registration ways.

```js
import { createApp } from 'vue';
import { AddressEdit } from 'vant';

const app = createApp();
app.use(AddressEdit);
```

## Usage

### Basic Usage

```html
<van-address-edit
  :area-list="areaList"
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
import { ref } from 'vue';
import { showToast } from 'vant';

export default {
  setup() {
    const searchResult = ref([]);

    const onSave = () => showToast('save');
    const onDelete = () => showToast('delete');
    const onChangeDetail = (val) => {
      if (val) {
        searchResult.value = [
          {
            name: 'Name1',
            address: 'Address',
          },
        ];
      } else {
        searchResult.value = [];
      }
    };

    return {
      onSave,
      onDelete,
      areaList,
      searchResult,
      onChangeDetail,
    };
  },
};
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| area-list | Area List | _object_ | - |
| area-columns-placeholder | placeholder of area columns | _string[]_ | `[]` |
| area-placeholder | placeholder of area input field | _string_ | `Area` |
| address-info | Address Info | _AddressEditInfo_ | `{}` |
| search-result | Address search result | _AddressEditSearchItem[]_ | `[]` |
| show-delete | Whether to show delete button | _boolean_ | `false` |
| show-set-default | Whether to show default address switch | _boolean_ | `false` |
| show-search-result | Whether to show address search result | _boolean_ | `false` |
| show-area | Whether to show area cell | _boolean_ | `true` |
| show-detail | Whether to show detail field | _boolean_ | `true` |
| disable-area | Whether to disable area select | _boolean_ | `false` |
| save-button-text | Save button text | _string_ | `Save` |
| delete-button-text | Delete button text | _string_ | `Delete` |
| detail-rows | Detail input rows | _number \| string_ | `1` |
| detail-maxlength | Detail maxlength | _number \| string_ | `200` |
| is-saving | Whether to show save button loading status | _boolean_ | `false` |
| is-deleting | Whether to show delete button loading status | _boolean_ | `false` |
| tel-validator | The method to validate tel | _(val: string) => boolean_ | - |
| tel-maxlength | Tel maxlength | _number \| string_ | - |
| validator | Custom validator | _(key: string, val: string) => string_ | - |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| save | Emitted when the save button is clicked | _info: AddressEditInfo_ |
| focus | Emitted when field is focused | _key: string_ |
| change `v4.7.0` | Emitted when only the name and tel field are changed | _{key: string, value: string}_ |
| delete | Emitted when confirming delete | _info: AddressEditInfo_ |
| select-search | Emitted when a search result is selected | _value: string_ |
| click-area | Emitted when the area field is clicked | - |
| change-area | Emitted when area changed | _selectedOptions: PickerOption[]_ |
| change-detail | Emitted when address detail changed | _value: string_ |
| change-default | Emitted when switching default address | _checked: boolean_ |

### Slots

| Name    | Description                         |
| ------- | ----------------------------------- |
| default | Custom content below address detail |

### Methods

Use [ref](https://vuejs.org/guide/essentials/template-refs.html) to get AddressEdit instance and call instance methods.

| Name | Description | Attribute | Return value |
| --- | --- | --- | --- |
| setAddressDetail | Set address detail | _addressDetail: string_ | - |
| setAreaCode | Set area code | _code: string_ | - |

### Types

The component exports the following type definitions:

```ts
import type {
  AddressEditInfo,
  AddressEditProps,
  AddressEditInstance,
  AddressEditSearchItem,
} from 'vant';
```

`AddressEditInstance` is the type of component instance:

```ts
import { ref } from 'vue';
import type { AddressEditInstance } from 'vant';

const addressEditRef = ref<AddressEditInstance>();

addressEditRef.value?.setAddressDetail('');
```

### AddressEditInfo Data Structure

| key           | Description        | Type      |
| ------------- | ------------------ | --------- |
| name          | Name               | _string_  |
| tel           | Phone              | _string_  |
| province      | Province           | _string_  |
| city          | City               | _string_  |
| county        | County             | _string_  |
| addressDetail | Detailed Address   | _string_  |
| areaCode      | Area code          | _string_  |
| isDefault     | Is default address | _boolean_ |

### AddressEditSearchItem Data Structure

| key     | Description | Type     |
| ------- | ----------- | -------- |
| name    | Name        | _string_ |
| address | Address     | _string_ |

### Area Data Structure

Please refer to [Area](#/en-US/area) component.

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/config-provider).

| Name | Default Value | Description |
| --- | --- | --- |
| --van-address-edit-padding | _var(--van-padding-sm)_ | - |
| --van-address-edit-buttons-padding | _var(--van-padding-xl) var(--van-padding-base)_ | - |
| --van-address-edit-button-margin-bottom | _var(--van-padding-sm)_ | - |
| --van-address-edit-button-font-size | _var(--van-font-size-lg)_ | - |
