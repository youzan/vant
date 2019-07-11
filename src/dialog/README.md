# Dialog

### Install

```js
import { Dialog } from 'vant';

Vue.use(Dialog);
```

## Usage

### Alert dialog

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

### Confirm dialog

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

### Asnyc Close

```js
function beforeClose(action, done) {
  if (action === 'confirm') {
    setTimeout(done, 1000);
  } else {
    done();
  }
}

Dialog.confirm({
  title: 'Title',
  message: 'Content',
  beforeClose
});
```

### $dialog Method

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

### Advanced Usage

If you need to render vue components within a dialog, you can use dialog component.

```html
<van-dialog
  v-model="show"
  title="Title"
  show-cancel-button
>
  <img src="https://img.yzcdn.cn/vant/apple-3.jpg">
</van-dialog>
```

```js
export default {
  data() {
    return {
      show: false
    };
  }
}
```

## API

### Methods

| Name | Attribute | Return value | Description |
|------|------|------|------|
| Dialog | `options` | `Promise` | Show dialog |
| Dialog.alert | `options` | `Promise` | Show alert dialog |
| Dialog.confirm | `options` | `Promise` | Show confim dialog |
| Dialog.setDefaultOptions | `options` | `void` | Set default options of all dialogs |
| Dialog.resetDefaultOptions | - | `void` | Reset default options of all dialogs |
| Dialog.close | - | `void` | Close dialog |

### Options

| Attribute | Description | Type | Default |
|------|------|------|------|
| title | Title | `string` | - |
| message | Message | `string` | - |
| messageAlign | Message text align，can be set to `left` `right` | `string` | `center` |
| className | Custom className | `any` | - |
| showConfirmButton | Whether to show confirm button | `boolean` | `true` |
| showCancelButton | Whether to show cancel button | `boolean` | `false` |
| cancelButtonText | Cancel button text | `string` | `Cancel` |
| cancelButtonColor | Cancel button color | `string` | `#000` |
| confirmButtonText | Confirm button text | `string` | `Confirm` |
| confirmButtonColor | Confirm button color | `string` | `#1989fa` |
| overlay | Whether to show overlay | `boolean` | `true` |
| closeOnPopstate | Whether to close when popstate | `boolean` | `false` |
| closeOnClickOverlay | Whether to close when click overlay | `boolean` | `false` |
| lockScroll | Whether to lock body scroll | `boolean` | `true` |
| beforeClose | Callback before close,<br>call done() to close dialog,<br>call done(false) to cancel loading | (action: string, done: Function) => void | - |
| getContainer | Return the mount node for Dialog | `string | () => HTMLElement` | `body` |

### Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| v-model | Whether to show dialog | `boolean` | - |
| title | Title | `string` | - |
| message | Message | `string` | - |
| message-align | Message align，can be set to `left` `right` | `string` | `center` |
| show-confirm-button | Whether to show confirm button | `boolean` |  `true` |
| show-cancel-button | Whether to show cancel button | `boolean` |  `false` |
| cancel-button-text | Cancel button text | `string` | `Cancel` |
| cancel-button-color | Cancel button color | `string` | `#000` |
| confirm-button-text | Confirm button text | `string` | `Confirm` |
| confirm-button-color | Confirm button color | `string` | `#1989fa` |
| overlay | Whether to show overlay | `boolean` | `true` |
| close-on-click-overlay | Whether to close when click overlay | `boolean` | `false` |
| lock-scroll | Whether to lock background scroll | `boolean` | `true` |
| before-close | Callback before close,<br>call done() to close dialog,<br>call done(false) to cancel loading | (action: string, done: Function) => void | - |
| get-container | Return the mount node for Dialog | `string | () => HTMLElement` | - |

### Events

| Event | Description | Parameters |
|------|------|------|
| confirm | Triggered when click confirm button | - |
| cancel | Triggered when click cancel button | - |
