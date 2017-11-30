## Dialog

### Install

```js
import { Dialog } from 'vant';
```

### Usage

#### Alert dialog
Used to prompt for some messages, only including one confirm button

```javascript
Dialog.alert({
  title: 'Title',
  message: 'Content'
}).then(() => {
  // on close
});

Dialog.alert({
  message: 'Content'
}).then(() => {
  // on close
});
```

#### Confirm dialog
Used to confirm some messages, including a confirm button and a cancel button

```javascript
 Dialog.confirm({
  title: 'Title',
  message: 'Content'
}).then(() => {
  // on confirm
}).catch(() => {
  // on cancel
});
```

#### $dialog Method
After import the Dialog component, the $dialog method is automatically mounted on Vue.prototype, making it easy to call within a vue component.

```js
export default {
  mounted() {
    this.$dialog.alert({
      message: 'Content'
    });
  }
}
```

### Methods

| Name | Attribute | Return value | Description |
|-----------|-----------|-----------|-------------|
| Dialog.alert | options | `Promise` | Show alert dialog |
| Dialog.confirm | options | `Promise` | Show confim dialog |
| Dialog.close | - | `void` | Close dialog |

### Options

| Attribute | Description | Type | Default | Accepted Values |
|-----------|-----------|-----------|-------------|-------------|
| title | Title | `String` | - | - |
| message | Message | `String` | - | - |
| showConfirmButton | Whether to show confirm button | `Boolean` |  `true` | - |
| showCancelButton | Whether to show cancel button | `Boolean` |  `false` | - |
| confirmButtonText | Confirm button text | `String` |  `Confirm` | - |
| cancelButtonText | Cancel button test | `String` | `Cancel` | - |
| overlay | Whether to show overlay | `Boolean` | `true` | - |
| closeOnClickOverlay | Whether to close when click overlay | `Boolean` | `false` | - |
| lockOnScroll | Whether to lock body scroll | `Boolean` | `true` | - |
