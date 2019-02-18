## Contact

### Install
``` javascript
import { ContactCard, ContactList, ContactEdit } from 'vant';

Vue
  .use(ContactCard)
  .use(ContactList)
  .use(ContactEdit);
```

### Usage

#### Basic Usage


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

``` javascript
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

#### Uneditable

```html
<van-contact-card
  type="edit"
  name="John Snow"
  tel="13000000000"
  :editable="false"
/>
```


### ContactCard API

| Attribute | Description | Type | Default |
|------|------|------|------|
| type | Can be set to `add` `edit` | `String` | `add` |
| name | Name | `String` | - |
| tel | Phone | `String` | - |
| add-text | Add card text | `String` | `Add contact info` |

### ContactCard Event

| Event | Description | Arguments |
|------|------|------|
| click | Triggered when clicked | - |

### ContactList API

| Attribute | Description | Type | Default |
|------|------|------|------|------|
| v-model | Id of chosen contact | `String | Number` | - |
| list | Contact list | `Array` | `[]` |
| add-text | Add button text | `String` | `Add new contact` |

### ContactList Event

| Event | Description | Arguments |
|------|------|------|
| add | Triggered when click add button | - |
| edit | Triggered when click edit button | item: contact object，index |
| select | Triggered when select contact | item: contact object |

### ContactEdit API
| Attribute | Description | Type | Default |
|------|------|------|------|------|
| contact-info | Contact Info | `Object` | `[]` |
| is-edit | Whether is editing | `Boolean` | `false` |
| is-saving | Whether to show save button loading status | `Boolean` | `false` |
| is-deleting | Whether to show delete button loading status | `Boolean` | `false` |
| tel-validator | The method to validate tel | `(tel: string) => boolean` | - |

### ContactEdit Event

| Event | Description | Arguments |
|------|------|------|
| save | Triggered when click save button | content：contact info |
| delete | Triggered when click delete button | content：contact info |

### Contact Data Structure

| key | Description | Type |
|------|------|------|
| id | ID | `String | Number` |
| name | Name | `String` |
| tel | Phone | `String` |
