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

### Show Cancel Button

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

### Option Status

```html
<van-action-sheet
  v-model="show"
  :actions="actions"
  cancel-text="Cancel"
  @cancel="onCancel"
/>
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

### Custom Panel

```html
<van-action-sheet v-model="show" title="Title">
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
|------|------|------|------|
| actions | Options | *Action[]* | `[]` | 
| title | Title | *string* | - |
| cancel-text | Text of cancel button | *string* | - |
| description `v2.2.8` | Description above the options | *string* | - |
| close-icon `v2.2.13` | Close icon name | *string* | `cross` |
| duration `v2.0.3` | Transition duration, unit second | *number \| string* | `0.3` |
| round `v2.0.9` | Whether to show round corner | *boolean* | `true` |
| overlay | Whether to show overlay | *boolean* | `true` |
| lock-scroll | Whether to lock background scroll | *boolean* | `true` |
| lazy-render | Whether to lazy render util appeared | *boolean* | `true`  |
| close-on-popstate `v2.5.3` | Whether to close when popstate | *boolean* | `false` |
| close-on-click-action | Whether to close when click action | *boolean* | `false` |
| close-on-click-overlay | Whether to close when click overlay | *boolean* | `true` |
| safe-area-inset-bottom | Whether to enable bottom safe area adaptation | *boolean* | `true` |
| get-container | Return the mount node for ActionSheet | *string \| () => Element* | - |

### Data Structure of Action

| Key | Description | Type |
|------|------|------|
| name | Title | *string* |
| subname | Subtitle | *string* |
| color | Text color | *string* |
| className | className for the option | *any* |
| loading | Whether to be loading status | *boolean* |
| disabled | Whether to be disabled | *boolean* |

### Events

| Event | Description | Arguments |
|------|------|------|
| select | Triggered when click option | *action: Action, index: number* |
| cancel | Triggered when cancel click | - |
| open | Triggered when open ActionSheet | - |
| close | Triggered when close ActionSheet | - |
| opened | Triggered when opened ActionSheet | - |
| closed | Triggered when closed ActionSheet | - |
| click-overlay | Triggered when click overlay | - |
