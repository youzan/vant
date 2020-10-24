# Contact

### Install

```js
import { createApp } from 'vue';
import { ContactCard, ContactList, ContactEdit } from 'vant';

const app = createApp();
app.use(ContactCard);
app.use(ContactList);
app.use(ContactEdit);
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
<van-popup v-model:show="showList" position="bottom">
  <van-contact-list
    v-model="chosenContactId"
    :list="list"
    @add="onAdd"
    @edit="onEdit"
    @select="onSelect"
  />
</van-popup>

<!-- Contact Edit -->
<van-popup v-model:show="showEdit" position="bottom">
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
      list: [
        {
          name: 'John Snow',
          tel: '13000000000',
          id: 0,
        },
      ],
    };
  },

  computed: {
    cardType() {
      return this.chosenContactId !== null ? 'edit' : 'add';
    },

    currentContact() {
      const id = this.chosenContactId;
      return id !== null ? this.list.filter((item) => item.id === id)[0] : {};
    },
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
        this.list = this.list.map((item) =>
          item.id === info.id ? info : item
        );
      } else {
        this.list.push(info);
      }
      this.chosenContactId = info.id;
    },

    // delete contact
    onDelete(info) {
      this.showEdit = false;
      this.list = this.list.filter((item) => item.id !== info.id);
      if (this.chosenContactId === info.id) {
        this.chosenContactId = null;
      }
    },
  },
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

| Attribute | Description                | Type     | Default            |
| --------- | -------------------------- | -------- | ------------------ |
| type      | Can be set to `add` `edit` | _string_ | `add`              |
| name      | Name                       | _string_ | -                  |
| tel       | Phone                      | _string_ | -                  |
| add-text  | Add card text              | _string_ | `Add contact info` |

### ContactCard Events

| Event | Description            | Arguments      |
| ----- | ---------------------- | -------------- |
| click | Triggered when clicked | _event: Event_ |

### ContactList Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| v-model | Id of chosen contact | _number \| string_ | - |
| list | Contact list | _Contact[]_ | `[]` |
| add-text | Add button text | _string_ | `Add new contact` |
| default-tag-text `v2.3.0` | Default tag text | _string_ | - |

### ContactList Events

| Event  | Description                      | Arguments                   |
| ------ | -------------------------------- | --------------------------- |
| add    | Triggered when click add button  | -                           |
| edit   | Triggered when click edit button | item: contact object，index |
| select | Triggered when select contact    | item: contact object        |

### ContactEdit Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| contact-info | Contact Info | _object_ | `[]` |
| is-edit | Whether is editing | _boolean_ | `false` |
| is-saving | Whether to show save button loading status | _boolean_ | `false` |
| is-deleting | Whether to show delete button loading status | _boolean_ | `false` |
| tel-validator | The method to validate tel | _(tel: string) => boolean_ | - |
| show-set-default `v2.3.0` | Whether to show default contact switch | _boolean_ | `false` |
| set-default-label `v2.3.0` | default contact switch label | _string_ | - |

### ContactEdit Events

| Event  | Description                        | Arguments             |
| ------ | ---------------------------------- | --------------------- |
| save   | Triggered when click save button   | content：contact info |
| delete | Triggered when click delete button | content：contact info |

### Data Structure of Contact

| key       | Description        | Type               |
| --------- | ------------------ | ------------------ |
| id        | ID                 | _number \| string_ |
| name      | Name               | _string_           |
| tel       | Phone              | _string_           |
| isDefault | Is default contact | _boolean_          |
