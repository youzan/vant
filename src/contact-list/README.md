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
| default-tag-text `v2.3.0` | Default tag text | _string_ | - |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| add | Triggered when click add button | - |
| edit | Triggered when click edit button | _contact: Contact，index: number_ |
| select | Triggered when select contact | _contact: Contact, index: number_ |

### Data Structure of Contact

| key       | Description        | Type               |
| --------- | ------------------ | ------------------ |
| id        | ID                 | _number \| string_ |
| name      | Name               | _string_           |
| tel       | Phone              | _string_           |
| isDefault | Is default contact | _boolean_          |
