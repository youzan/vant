# ContactList

### Intro

Used to display the contact list.

### Install

Register component globally via `app.use`, refer to [Component Registration](#/en-US/advanced-usage#zu-jian-zhu-ce) for more registration ways.

```js
import { createApp } from 'vue';
import { ContactList } from 'vant';

const app = createApp();
app.use(ContactList);
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
import { ref } from 'vue';
import { showToast } from 'vant';

export default {
  setup() {
    const chosenContactId = ref('1');
    const list = ref([
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
    ]);

    const onAdd = () => showToast('Add');
    const onEdit = (contact) => showToast('Edit' + contact.id);
    const onSelect = (contact) => showToast('Select' + contact.id);

    return {
      list,
      onAdd,
      onEdit,
      onSelect,
      chosenContactId,
    };
  },
};
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| v-model | Id of chosen contact | _number \| string_ | - |
| list | Contact list | _ContactListItem[]_ | `[]` |
| add-text | Add button text | _string_ | `Add new contact` |
| default-tag-text | Default tag text | _string_ | - |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| add | Emitted when the add button is clicked | - |
| edit | Emitted when the edit button is clicked | _contact: ContactListItem, index: number_ |
| select | Emitted when a contact is selected | _contact: ContactListItem, index: number_ |

### Data Structure of ContactListItem

| key       | Description        | Type                   |
| --------- | ------------------ | ---------------------- |
| id        | ID                 | _number \| string_     |
| name      | Name               | _string_               |
| tel       | Phone              | _string_               |
| isDefault | Is default contact | _boolean \| undefined_ |

### Types

The component exports the following type definitions:

```ts
import type { ContactListItem, ContactListProps } from 'vant';
```

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/config-provider).

| Name | Default Value | Description |
| --- | --- | --- |
| --van-contact-list-padding | _var(--van-padding-sm) var(--van-padding-sm) 80px_ | - |
| --van-contact-list-edit-icon-size | _16px_ | - |
| --van-contact-list-add-button-z-index | _999_ | - |
| --van-contact-list-radio-color | _var(--van-primary-color)_ | - |
| --van-contact-list-item-padding | _var(--van-padding-md)_ | - |
