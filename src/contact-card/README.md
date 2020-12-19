# ContactCard

### Install

```js
import Vue from 'vue';
import { ContactCard } from 'vant';

Vue.use(ContactCard);
```

## Usage

### Add Contact

```html
<van-contact-card type="add" @click="onAdd" />
```

```js
import { Toast } from 'vant';

export default {
  methods: {
    onAdd() {
      Toast('add');
    },
  },
};
```

### Edit Contact

```html
<van-contact-card
  type="edit"
  :name="currentContact.name"
  :tel="currentContact.tel"
  @click="onEdit"
/>
```

```js
import { Toast } from 'vant';

export default {
  data() {
    return {
      currentContact: {
        name: 'John Snow',
        tel: '13000000000',
      },
    };
  },
  methods: {
    onEdit() {
      Toast('edit');
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

### Props

| Attribute | Description          | Type     | Default            |
| --------- | -------------------- | -------- | ------------------ |
| type      | Can be set to `edit` | _string_ | `add`              |
| name      | Name                 | _string_ | -                  |
| tel       | Phone                | _string_ | -                  |
| add-text  | Add card text        | _string_ | `Add contact info` |

### Events

| Event | Description                       | Arguments      |
| ----- | --------------------------------- | -------------- |
| click | Emitted when component is clicked | _event: Event_ |

### Less Variables

How to use: [Custom Theme](#/en-US/theme).

| Name                            | Default Value     | Description |
| ------------------------------- | ----------------- | ----------- |
| @contact-card-padding           | `@padding-md`     | -           |
| @contact-card-add-icon-size     | `40px`            | -           |
| @contact-card-add-icon-color    | `@blue`           | -           |
| @contact-card-value-line-height | `@line-height-md` | -           |
