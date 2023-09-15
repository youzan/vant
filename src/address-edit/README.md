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
      searchResult: [],
    };
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
        this.searchResult = [
          {
            name: '黄龙万科中心',
            address: '杭州市西湖区',
          },
        ];
      } else {
        this.searchResult = [];
      }
    },
  },
};
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| area-list | Area List | _object_ | - |
| area-columns-placeholder | placeholder of area columns | _string[]_ | `[]` |
| area-placeholder `v2.6.1` | placeholder of area input field | _string_ | `Area` |
| address-info | Address Info | _AddressInfo_ | `{}` |
| search-result | Address search result | _SearchResult[]_ | `[]` |
| show-postal | Whether to show postal field | _boolean_ | `false` |
| show-delete | Whether to show delete button | _boolean_ | `false` |
| show-set-default | Whether to show default address switch | _boolean_ | `false` |
| show-search-result | Whether to show address search result | _boolean_ | `false` |
| show-area | Whether to show area cell | _boolean_ | `true` |
| show-detail | Whether to show detail field | _boolean_ | `true` |
| disable-area `v2.5.0` | Whether to disable area select | _boolean_ | `false` |
| save-button-text | Save button text | _string_ | `Save` |
| delete-button-text | Delete button text | _string_ | `Delete` |
| detail-rows | Detail input rows | _number \| string_ | `1` |
| detail-maxlength | Detail maxlength | _number \| string_ | `200` |
| is-saving | Whether to show save button loading status | _boolean_ | `false` |
| is-deleting | Whether to show delete button loading status | _boolean_ | `false` |
| tel-validator | The method to validate tel | _(tel: string) => boolean_ | - |
| tel-maxlength `v2.10.0` | Tel maxlength | _number \| string_ | - |
| postal-validator | The method to validate postal | _(tel: string) => boolean_ | - |
| validator | Custom validator | _(key, val) => string_ | - |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| save | Emitted when the save button is clicked | content：form content |
| focus | Emitted when field is focused | key: field name |
| delete | Emitted when confirming delete | content：form content |
| cancel-delete | Emitted when canceling delete | content：form content |
| select-search | Emitted when a search result is selected | value: search content |
| click-area `v2.5.9` | Emitted when the area field is clicked | - |
| change-area | Emitted when area changed | values: area values |
| change-detail | Emitted when address detail changed | value: address detail |
| change-default | Emitted when switching default address | value: checked |

### Slots

| Name    | Description                 |
| ------- | --------------------------- |
| default | Custom content below postal |

### Methods

Use [ref](https://vuejs.org/v2/api/#ref) to get AddressEdit instance and call instance methods.

| Name             | Description        | Attribute             | Return value |
| ---------------- | ------------------ | --------------------- | ------------ |
| setAddressDetail | Set address detail | addressDetail: string | -            |

### AddressInfo Data Structure

| key           | Description        | Type               |
| ------------- | ------------------ | ------------------ |
| id            | Address Id         | _number \| string_ |
| name          | Name               | _string_           |
| tel           | Phone              | _string_           |
| province      | Province           | _string_           |
| city          | City               | _string_           |
| county        | County             | _string_           |
| addressDetail | Detailed Address   | _string_           |
| areaCode      | Area code          | _string_           |
| postalCode    | Postal code        | _string_           |
| isDefault     | Is default address | _boolean_          |

### SearchResult Data Structure

| key     | Description | Type     |
| ------- | ----------- | -------- |
| name    | Name        | _string_ |
| address | Address     | _string_ |

### Area Data Structure

Please refer to [Area](#/en-US/area) component。

### Less Variables

How to use: [Custom Theme](#/en-US/theme).

| Name | Default Value | Description |
| --- | --- | --- |
| @address-edit-padding | `@padding-sm` | - |
| @address-edit-buttons-padding | `@padding-xl @padding-base` | - |
| @address-edit-button-margin-bottom | `@padding-sm` | - |
| @address-edit-detail-finish-color | `@blue` | - |
| @address-edit-detail-finish-font-size | `@font-size-sm` | - |
