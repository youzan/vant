# ActionSheet

### Install

```js
import Vue from 'vue';
import { ActionSheet } from 'vant';

Vue.use(ActionSheet);
```

## Usage

### Basic Usage

Use `actions` prop to set options of action-sheet.

```html
<van-action-sheet v-model="show" :actions="actions" @select="onSelect" />
```

```js
import { Toast } from 'vant';

export default {
  data() {
    return {
      show: false,
      actions: [
        { name: 'Option' },
        { name: 'Option' },
        { name: 'Option', subname: 'Description' }
      ]
    };
  },
  methods: {
    onSelect(item) {
      this.show = false;
      Toast(item.name);
    }
  }
};
```

### Status

```html
<van-action-sheet v-model="show" :actions="actions" />
```

```js
export default {
  data() {
    return {
      show: false,
      actions: [
        { name: 'Option', color: '#07c160' },
        { loading: true },
        { name: 'Disabled Option', disabled: true }
      ]
    };
  }
};
```

### ActionSheet with cancel button

```html
<van-action-sheet
  v-model="show"
  :actions="actions"
  cancel-text="Cancel"
  @cancel="onCancel"
/>
```

```js
import { Toast } from 'vant';

export default {
  data() {
    return {
      show: false
    };
  },
  methods: {
    onCancel() {
      this.show = false;
      Toast('cancel');
    }
  }
};
```

### Show Description

```html
<van-action-sheet v-model="show" :actions="actions" description="Description" />
```

### ActionSheet with title

```html
<van-action-sheet v-model="show" title="Title">
  <p>Content</p>
</van-action-sheet>
```

## API

### Props

| Attribute              | Description                                   | Type                      | Default |
| ---------------------- | --------------------------------------------- | ------------------------- | ------- |
| actions                | Options                                       | _Action[]_                | `[]`    |
| title                  | Title                                         | _string_                  | -       |
| cancel-text            | Text of cancel button                         | _string_                  | -       |
| description `v2.2.8`   | Description above the options                 | _string_                  | -       |
| overlay                | Whether to show overlay                       | _boolean_                 | `true`  |
| round `v2.0.9`         | Whether to show round corner                  | _boolean_                 | `true`  |
| close-icon `v2.2.13`   | Close icon name                               | _string_                  | `cross` |
| close-on-click-action  | Whether to close when click action            | _boolean_                 | `false` |
| close-on-click-overlay | Whether to close when click overlay           | _boolean_                 | `true`  |
| lazy-render            | Whether to lazy render util appeared          | _boolean_                 | `true`  |
| lock-scroll            | Whether to lock background scroll             | _boolean_                 | `true`  |
| duration `v2.0.3`      | Transition duration, unit second              | _number_                  | `0.3`   |
| get-container          | Return the mount node for action-sheet        | _string \| () => Element_ | -       |
| safe-area-inset-bottom | Whether to enable bottom safe area adaptation | _boolean_                 | `true`  |

### Events

| Event         | Description                       | Arguments   |
| ------------- | --------------------------------- | ----------- |
| select        | Triggered when click option       | item, index |
| cancel        | Triggered when cancel click       | -           |
| click-overlay | Triggered when click overlay      | -           |
| open          | Triggered when open ActionSheet   | -           |
| opened        | Triggered when opened ActionSheet | -           |
| close         | Triggered when close ActionSheet  | -           |
| closed        | Triggered when closed ActionSheet | -           |

### Data Structure of Action

| Key       | Description                  | Type      |
| --------- | ---------------------------- | --------- |
| name      | Title                        | _string_  |
| subname   | Subtitle                     | _string_  |
| color     | Text color                   | _string_  |
| className | className for the option     | _any_     |
| loading   | Whether to be loading status | _boolean_ |
| disabled  | Whether to be disabled       | _boolean_ |
