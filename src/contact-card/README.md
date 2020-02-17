# Contact

### Install

```js
import Vue from 'vue';
import { ContactCard, ContactList, ContactEdit } from 'vant';

Vue.use(ContactCard);
Vue.use(ContactList);
Vue.use(ContactEdit);
```

## Usage

### Basic Usage

```html
<!-- Contact Card -->
<van-contact-card
  :type="cardType"
  :name="currentContact.name"
  :tel="currentContact.tel"
  @click="showList = true"
/>

<!-- Contact List -->
<van-popup v-model="showList" position="bottom">
  <van-contact-list
    v-model="chosenContactId"
    :list="list"
    @add="onAdd"
    @edit="onEdit"
    @select="onSelect"
  />
</van-popup>

<!-- Contact Edit -->
<van-popup v-model="showEdit" position="bottom">
  <van-contact-edit
    :contact-info="editingContact"
    :is-edit="isEdit"
    @save="onSave"
    @delete="onDelete"
  />
</van-popup>
```

```js
export default {
  data() {
    return {
      chosenContactId: null,
      editingContact: {},
      showList: false,
      showEdit: false,
      isEdit: false,
      list: [{
        name: 'John Snow',
        tel: '13000000000',
        id: 0
      }]
    };
  },

  computed: {
    cardType() {
      return this.chosenContactId !== null ? 'edit' : 'add';
    },

    currentContact() {
      const id = this.chosenContactId;
      return id !== null ? this.list.filter(item => item.id === id)[0] : {};
    }
  },

  methods: {
    // add contact
    onAdd() {
      this.editingContact = { id: this.list.length };
      this.isEdit = false;
      this.showEdit = true;
    },

    // edit contact
    onEdit(item) {
      this.isEdit = true;      
      this.showEdit = true;
      this.editingContact = item;
    },

    // select contact
    onSelect() {
      this.showList = false;
    },

    // save contact
    onSave(info) {
      this.showEdit = false;
      this.showList = false;
      
      if (this.isEdit) {
        this.list = this.list.map(item => item.id === info.id ? info : item);
      } else {
        this.list.push(info);
      }
      this.chosenContactId = info.id;
    },

    // delete contact
    onDelete(info) {
      this.showEdit = false;
      this.list = this.list.filter(item => item.id !== info.id);
      if (this.chosenContactId === info.id) {
        this.chosenContactId = null;
      }
    }
  }
};
```

### Uneditable

```html
<van-contact-card
  type="edit"
  name="John Snow"
  tel="13000000000"
  :editable="false"
/>
```

## API

### ContactCard Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| type | Can be set to `add` `edit` | *string* | `add` |
| name | Name | *string* | - |
| tel | Phone | *string* | - |
| add-text | Add card text | *string* | `Add contact info` |

### ContactCard Events

| Event | Description | Arguments |
|------|------|------|
| click | Triggered when clicked | *event: Event* |

### ContactList Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| v-model | Id of chosen contact | *number \| string* | - |
| list | Contact list | *Contact[]* | `[]` |
| add-text | Add button text | *string* | `Add new contact` |
| default-tag-text `v2.3.0` | Default tag text | *string* | - |

### ContactList Events

| Event | Description | Arguments |
|------|------|------|
| add | Triggered when click add button | - |
| edit | Triggered when click edit button | item: contact object，index |
| select | Triggered when select contact | item: contact object |


### ContactEdit Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| contact-info | Contact Info | *object* | `[]` |
| is-edit | Whether is editing | *boolean* | `false` |
| is-saving | Whether to show save button loading status | *boolean* | `false` |
| is-deleting | Whether to show delete button loading status | *boolean* | `false` |
| tel-validator | The method to validate tel | *(tel: string) => boolean* | - |
| show-set-default `v2.3.0` | Whether to show default contact switch | *boolean* | `false` |
| set-default-label `v2.3.0` | default contact switch label | *string* | - |

### ContactEdit Events

| Event | Description | Arguments |
|------|------|------|
| save | Triggered when click save button | content：contact info |
| delete | Triggered when click delete button | content：contact info |

### Data Structure of Contact

| key | Description | Type |
|------|------|------|
| id | ID | *number \| string* |
| name | Name | *string* |
| tel | Phone | *string* |
| isDefault | Is default contact | *boolean* |
