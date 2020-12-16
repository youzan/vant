# ContactCard

### Install

```js
import { createApp } from 'vue';
import { ContactCard } from 'vant';

const app = createApp();
app.use(ContactCard);
```

## Usage

### Add Contact

```html
<van-contact-card type="add" @click="onAdd" />
```

```js
import { Toast } from 'vant';

export default {
  setup() {
    const onAdd = () => {
      Toast('add');
    };
    return {
      onAdd,
    };
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
import { reactive } from 'vue';
import { Toast } from 'vant';

export default {
  setup() {
    const currentContact = reactive({
      name: 'John Snow',
      tel: '13000000000',
    });

    const onEdit = () => {
      Toast('edit');
    };

    return {
      onEdit,
      currentContact,
    };
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
