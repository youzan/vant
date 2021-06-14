# ContactEdit

### Intro

Edit and save the contact information.

### Install

Register component globally via `app.use`, refer to [Component Registration](#/en-US/advanced-usage#zu-jian-zhu-ce) for more registration ways.

```js
import { createApp } from 'vue';
import { ContactEdit } from 'vant';

const app = createApp();
app.use(ContactEdit);
```

## Usage

### Basic Usage

```html
<van-contact-edit
  is-edit
  show-set-default
  :contact-info="editingContact"
  set-default-label="Set as the default contact"
  @save="onSave"
  @delete="onDelete"
/>
```

```js
import { ref } from 'vue';
import { Toast } from 'vant';

export default {
  setup() {
    const editingContact = ref({});
    const onSave = (contactInfo) => Toast('Save');
    const onDelete = (contactInfo) => Toast('Delete');
    return {
      onSave,
      onDelete,
      editingContact,
    };
  },
};
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| contact-info | Contact Info | _Contact_ | `[]` |
| is-edit | Whether is editing | _boolean_ | `false` |
| is-saving | Whether to show save button loading status | _boolean_ | `false` |
| is-deleting | Whether to show delete button loading status | _boolean_ | `false` |
| tel-validator | The method to validate tel | _(tel: string) => boolean_ | - |
| show-set-default | Whether to show default contact switch | _boolean_ | `false` |
| set-default-label | default contact switch label | _string_ | - |

### Events

| Event  | Description                               | Arguments             |
| ------ | ----------------------------------------- | --------------------- |
| save   | Emitted when the save button is clicked   | content：contact info |
| delete | Emitted when the delete button is clicked | content：contact info |

### Data Structure of Contact

| key  | Description | Type     |
| ---- | ----------- | -------- |
| name | Name        | _string_ |
| tel  | Phone       | _string_ |

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/config-provider).

| Name                                    | Default Value       | Description |
| --------------------------------------- | ------------------- | ----------- |
| --van-contact-edit-padding              | `@padding-md`       | -           |
| --van-contact-edit-fields-radius        | `@border-radius-md` | -           |
| --van-contact-edit-buttons-padding      | `@padding-xl 0`     | -           |
| --van-contact-edit-button-margin-bottom | `@padding-sm`       | -           |
| --van-contact-edit-button-font-size     | `16px`              | -           |
| --van-contact-edit-field-label-width    | `4.1em`             | -           |
