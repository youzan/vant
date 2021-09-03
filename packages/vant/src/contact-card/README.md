# ContactCard

### Intro

Display contact information in the form of cards.

### Install

Register component globally via `app.use`, refer to [Component Registration](#/en-US/advanced-usage#zu-jian-zhu-ce) for more registration ways.

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
    const onAdd = () => Toast('add');
    return {
      onAdd,
    };
  },
};
```

### Edit Contact

```html
<van-contact-card type="edit" :tel="tel" :name="name" @click="onEdit" />
```

```js
import { ref } from 'vue';
import { Toast } from 'vant';

export default {
  setup() {
    const tel = ref('13000000000');
    const name = ref('John Snow');
    const onEdit = () => Toast('edit');

    return {
      tel,
      name,
      onEdit,
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

| Event | Description                       | Arguments           |
| ----- | --------------------------------- | ------------------- |
| click | Emitted when component is clicked | _event: MouseEvent_ |

### Types

The component exports the following type definitions:

```ts
import type { ContactCardType } from 'vant';
```

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/config-provider).

| Name | Default Value | Description |
| --- | --- | --- |
| --van-contact-card-padding | _var(--van-padding-md)_ | - |
| --van-contact-card-add-icon-size | _40px_ | - |
| --van-contact-card-add-icon-color | _var(--van-primary-color)_ | - |
| --van-contact-card-value-line-height | _var(--van-line-height-md)_ | - |
