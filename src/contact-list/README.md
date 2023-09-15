# ContactList

### Install

```js
import Vue from 'vue';
import { ContactList } from 'vant';

Vue.use(ContactList);
```

## Usage

### Basic Usage

```html
<van-contact-list
  v-model="chosenContactId"
  :list="list"
  default-tag-text="default"
  @add="onAdd"
  @edit="onEdit"
  @select="onSelect"
/>
```

```js
import { Toast } from 'vant';

export default {
  data() {
    return {
      chosenContactId: '1',
      list: [
        {
          id: '1',
          name: 'John Snow',
          tel: '13000000000',
          isDefault: true,
        },
        {
          id: '2',
          name: 'Ned Stark',
          tel: '1310000000',
        },
      ],
    };
  },
  methods: {
    onAdd() {
      Toast('Add');
    },
    onEdit(contact) {
      Toast('Edit' + contact.id);
    },
    onSelect(contact) {
      Toast('Select' + contact.id);
    },
  },
};
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| v-model | Id of chosen contact | _number \| string_ | - |
| list | Contact list | _Contact[]_ | `[]` |
| add-text | Add button text | _string_ | `Add new contact` |
| default-tag-text | Default tag text | _string_ | - |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| add | Emitted when the add button is clicked | - |
| edit | Emitted when the edit button is clicked | _contact: Contact，index: number_ |
| select | Emitted when a contact is selected | _contact: Contact, index: number_ |

### Data Structure of Contact

| key       | Description        | Type               |
| --------- | ------------------ | ------------------ |
| id        | ID                 | _number \| string_ |
| name      | Name               | _string_           |
| tel       | Phone              | _string_           |
| isDefault | Is default contact | _boolean_          |

### Less Variables

How to use: [Custom Theme](#/en-US/theme).

| Name                             | Default Value | Description |
| -------------------------------- | ------------- | ----------- |
| @contact-list-edit-icon-size     | `16px`        | -           |
| @contact-list-add-button-z-index | `999`         | -           |
| @contact-list-item-padding       | `@padding-md` | -           |
