# ContactEdit

### Install

```js
import Vue from 'vue';
import { ContactEdit } from 'vant';

Vue.use(ContactEdit);
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
import { Toast } from 'vant';

export default {
  data() {
    return {
      editingContact: {},
    };
  },
  methods: {
    onSave(contactInfo) {
      Toast('Save');
    },
    onDelete(contactInfo) {
      Toast('Delete');
    },
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
| show-set-default `v2.3.0` | Whether to show default contact switch | _boolean_ | `false` |
| set-default-label `v2.3.0` | default contact switch label | _string_ | - |

### Events

| Event  | Description                        | Arguments             |
| ------ | ---------------------------------- | --------------------- |
| save   | Triggered when click save button   | content：contact info |
| delete | Triggered when click delete button | content：contact info |

### Data Structure of Contact

| key  | Description | Type     |
| ---- | ----------- | -------- |
| name | Name        | _string_ |
| tel  | Phone       | _string_ |
