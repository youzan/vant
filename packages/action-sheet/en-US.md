# ActionSheet

### Install
``` javascript
import { ActionSheet } from 'vant';

Vue.use(ActionSheet);
```

## Usage

### Basic Usage

Use `actions` prop to set options of action-sheet. 

```html
<van-action-sheet
  v-model="show"
  :actions="actions"
  @select="onSelect"
/>
```

```javascript
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
}
```

### Status

```html
<van-action-sheet
  v-model="show"
  :actions="actions"
/>
```

```javascript
export default {
  data() {
    return {
      show: false,
      actions: [
        { name: 'Option' },
        { loading: true },
        { name: 'Disabled Option', disabled: true }
      ]
    };
  }
}
```

### ActionSheet with cancel button

```html
<van-action-sheet
  v-model="show"
  :actions="actions"
  cancel-text="Cancel"
  @select="onSelect"
  @cancel="onCancel"
/>
```

### ActionSheet with title

```html
<van-action-sheet v-model="show" title="Title">
  <p>Content</p>
</van-action-sheet>
```

## API

### Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| actions | Options | `Array` | `[]` |
| title | Title | `String` | - |
| cancel-text | Text of cancel button | `String` | - |
| overlay | Whether to show overlay | `Boolean` | `true` |
| close-on-click-action | Whether to close when click action | `Boolean` | `false` |
| close-on-click-overlay | Whether to close when click overlay | `Boolean` | `true` |
| lock-scroll | Whether to lock background scroll | `Boolean` | `true` |
| lazy-render | Whether to lazy render util appeared | `Boolean` | `true` |
| get-container | Return the mount node for action-sheet | `String | () => HTMLElement` | - |
| safe-area-inset-bottom | Whether to enable bottom safe area adaptation, to enable those features use `viewport-fit=cover` in the `viewport` meta tag | `Boolean` | `false` |

### Events

| Event | Description | Arguments |
|------|------|------|
| select | Triggered when click option | item, index |
| cancel | Triggered when cancel click | - |

### Data struct of actions

| key | Description |
|------|------|
| name | Title |
| subname | Subtitle |
| className | className for the option |
| loading | Whether to be loading status |
| disabled | Whether to be disabled |
