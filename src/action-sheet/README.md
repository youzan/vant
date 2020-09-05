# ActionSheet

### Install

```js
import { createApp } from 'vue';
import { ActionSheet } from 'vant';

const app = createApp();
app.use(ActionSheet);
```

## Usage

### Basic Usage

Use `actions` prop to set options of action-sheet.

```html
<van-cell is-link title="Basic Usage" @click="show = true" />
<van-action-sheet v-model:show="show" :actions="actions" @select="onSelect" />
```

```js
import { Toast } from 'vant';

export default {
  data() {
    return {
      show: false,
      actions: [
        { name: 'Option 1' },
        { name: 'Option 2' },
        { name: 'Option 3' },
      ],
    };
  },
  methods: {
    onSelect(item) {
      this.show = false;
      Toast(item.name);
    },
  },
};
```

### Show Cancel Button

```html
<van-action-sheet
  v-model:show="show"
  :actions="actions"
  cancel-text="Cancel"
  close-on-click-action
  @cancel="onCancel"
/>
```

```js
import { Toast } from 'vant';

export default {
  data() {
    return {
      show: false,
      actions: [
        { name: 'Option 1' },
        { name: 'Option 2' },
        { name: 'Option 3' },
      ],
    };
  },
  methods: {
    onCancel() {
      Toast('cancel');
    },
  },
};
```

### Show Description

```html
<van-action-sheet
  v-model:show="show"
  :actions="actions"
  cancel-text="Cancel"
  description="Description"
  close-on-click-action
/>
```

```js
export default {
  data() {
    return {
      show: false,
      actions: [
        { name: 'Option 1' },
        { name: 'Option 2' },
        { name: 'Option 3', subname: 'Description' },
      ],
    };
  },
};
```

### Option Status

```html
<van-action-sheet
  v-model:show="show"
  :actions="actions"
  cancel-text="Cancel"
  close-on-click-action
/>
```

```js
export default {
  data() {
    return {
      show: false,
      actions: [
        { name: 'Colored Option', color: '#ee0a24' },
        { name: 'Disabled Option', disabled: true },
        { name: 'Loading Option', loading: true },
      ],
    };
  },
};
```

### Custom Panel

```html
<van-action-sheet v-model:show="show" title="Title">
  <div class="content">Content</div>
</van-action-sheet>

<style>
  .content {
    padding: 16px 16px 160px;
  }
</style>
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| v-model:show | Whether to show ActionSheet | _boolean_ | `false` |
| actions | Options | _Action[]_ | `[]` |
| title | Title | _string_ | - |
| cancel-text | Text of cancel button | _string_ | - |
| description | Description above the options | _string_ | - |
| closeable `v2.10.5` | Whether to show close icon | _boolean_ | `true` |
| close-icon | Close icon name | _string_ | `cross` |
| duration | Transition duration, unit second | _number \| string_ | `0.3` |
| round | Whether to show round corner | _boolean_ | `true` |
| overlay | Whether to show overlay | _boolean_ | `true` |
| lock-scroll | Whether to lock background scroll | _boolean_ | `true` |
| lazy-render | Whether to lazy render util appeared | _boolean_ | `true` |
| close-on-popstate `v2.5.3` | Whether to close when popstate | _boolean_ | `false` |
| close-on-click-action | Whether to close when click action | _boolean_ | `false` |
| close-on-click-overlay | Whether to close when click overlay | _boolean_ | `true` |
| safe-area-inset-bottom | Whether to enable bottom safe area adaptation | _boolean_ | `true` |
| teleport | Return the mount node for ActionSheet | _string \| Element_ | - |

### Data Structure of Action

| Key       | Description                  | Type      |
| --------- | ---------------------------- | --------- |
| name      | Title                        | _string_  |
| subname   | Subtitle                     | _string_  |
| color     | Text color                   | _string_  |
| className | className for the option     | _any_     |
| loading   | Whether to be loading status | _boolean_ |
| disabled  | Whether to be disabled       | _boolean_ |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| select | Triggered when click option | _action: Action, index: number_ |
| cancel | Triggered when click cancel button | - |
| open | Triggered when open ActionSheet | - |
| close | Triggered when close ActionSheet | - |
| opened | Triggered when opened ActionSheet | - |
| closed | Triggered when closed ActionSheet | - |
| click-overlay | Triggered when click overlay | - |

### Slots

| Name                  | Description        |
| --------------------- | ------------------ |
| default               | Custom content     |
| description `v2.10.4` | Custom description |
