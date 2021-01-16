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
import { ref } from 'vue';
import { Toast } from 'vant';

export default {
  setup() {
    const show = ref(false);
    const actions = [
      { name: 'Option 1' },
      { name: 'Option 2' },
      { name: 'Option 3' },
    ];
    const onSelect = (item) => {
      show.value = false;
      Toast(item.name);
    };

    return {
      show,
      actions,
      onSelect,
    };
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
import { ref } from 'vue';
import { Toast } from 'vant';

export default {
  setup() {
    const show = ref(false);
    const actions = [
      { name: 'Option 1' },
      { name: 'Option 2' },
      { name: 'Option 3' },
    ];
    const onCancel = () => {
      Toast('cancel');
    };

    return {
      show,
      actions,
      onCancel,
    };
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
import { ref } from 'vue';

export default {
  setup() {
    const show = ref(false);
    const actions = [
      { name: 'Option 1' },
      { name: 'Option 2' },
      { name: 'Option 3', subname: 'Description' },
    ];

    return {
      show,
      actions,
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
import { ref } from 'vue';

export default {
  setup() {
    const show = ref(false);
    const actions = [
      { name: 'Colored Option', color: '#ee0a24' },
      { name: 'Disabled Option', disabled: true },
      { name: 'Loading Option', loading: true },
    ];

    return {
      show,
      actions,
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
| closeable | Whether to show close icon | _boolean_ | `true` |
| close-icon | Close icon name | _string_ | `cross` |
| duration | Transition duration, unit second | _number \| string_ | `0.3` |
| round | Whether to show round corner | _boolean_ | `true` |
| overlay | Whether to show overlay | _boolean_ | `true` |
| lock-scroll | Whether to lock background scroll | _boolean_ | `true` |
| lazy-render | Whether to lazy render util appeared | _boolean_ | `true` |
| close-on-popstate | Whether to close when popstate | _boolean_ | `false` |
| close-on-click-action | Whether to close when an action is clicked | _boolean_ | `false` |
| close-on-click-overlay | Whether to close when overlay is clicked | _boolean_ | `true` |
| safe-area-inset-bottom | Whether to enable bottom safe area adaptation | _boolean_ | `true` |
| teleport | Return the mount node for ActionSheet | _string \| Element_ | - |

### Data Structure of Action

| Key       | Description                  | Type                        |
| --------- | ---------------------------- | --------------------------- |
| name      | Title                        | _string_                    |
| subname   | Subtitle                     | _string_                    |
| color     | Text color                   | _string_                    |
| className | className for the option     | _string \| Array \| object_ |
| loading   | Whether to be loading status | _boolean_                   |
| disabled  | Whether to be disabled       | _boolean_                   |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| select | Emitted when an option is clicked | _action: Action, index: number_ |
| cancel | Emitted when the cancel button is clicked | - |
| open | Emitted when opening ActionSheet | - |
| close | Emitted when closing ActionSheet | - |
| opened | Emitted when ActionSheet is opened | - |
| closed | Emitted when ActionSheet is closed | - |
| click-overlay | Emitted when overlay is clicked | - |

### Slots

| Name        | Description        |
| ----------- | ------------------ |
| default     | Custom content     |
| description | Custom description |

### Less Variables

How to use: [Custom Theme](#/en-US/theme).

| Name                                   | Default Value       | Description |
| -------------------------------------- | ------------------- | ----------- |
| @action-sheet-max-height               | `80%`               | -           |
| @action-sheet-header-height            | `48px`              | -           |
| @action-sheet-header-font-size         | `@font-size-lg`     | -           |
| @action-sheet-description-color        | `@gray-6`           | -           |
| @action-sheet-description-font-size    | `@font-size-md`     | -           |
| @action-sheet-description-line-height  | `@line-height-md`   | -           |
| @action-sheet-item-background          | `@white`            | -           |
| @action-sheet-item-font-size           | `@font-size-lg`     | -           |
| @action-sheet-item-line-height         | `@line-height-lg`   | -           |
| @action-sheet-item-text-color          | `@text-color`       | -           |
| @action-sheet-item-disabled-text-color | `@gray-5`           | -           |
| @action-sheet-subname-color            | `@gray-6`           | -           |
| @action-sheet-subname-font-size        | `@font-size-sm`     | -           |
| @action-sheet-subname-line-height      | `@line-height-sm`   | -           |
| @action-sheet-close-icon-size          | `22px`              | -           |
| @action-sheet-close-icon-color         | `@gray-5`           | -           |
| @action-sheet-close-icon-active-color  | `@gray-6`           | -           |
| @action-sheet-close-icon-padding       | `0 @padding-md`     | -           |
| @action-sheet-cancel-text-color        | `@gray-7`           | -           |
| @action-sheet-cancel-padding-top       | `@padding-xs`       | -           |
| @action-sheet-cancel-padding-color     | `@background-color` | -           |
| @action-sheet-loading-icon-size        | `22px`              | -           |
