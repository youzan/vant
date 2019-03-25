## Dialog

### Install

```js
import { Dialog } from 'vant';

Vue.use(Dialog);
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
| title | Title | `String` | - |
| message | Message | `String` | - |
| messageAlign | Message text align，can be set to `left` `right` | `String` | `center` |
| className | Custom className | `String | Array | Object` | - |
| showConfirmButton | Whether to show confirm button | `Boolean` | `true` |
| showCancelButton | Whether to show cancel button | `Boolean` | `false` |
| confirmButtonText | Confirm button text | `String` | `Confirm` |
| cancelButtonText | Cancel button test | `String` | `Cancel` |
| overlay | Whether to show overlay | `Boolean` | `true` |
| closeOnClickOverlay | Whether to close when click overlay | `Boolean` | `false` |
| lockScroll | Whether to lock body scroll | `Boolean` | `true` |
| beforeClose | Callback before close,<br>call done() to close dialog,<br>call done(false) to cancel loading | (action: string, done: function) => void | - |
| getContainer | Return the mount node for Dialog | `String | () => HTMLElement` | `body` |


#### Advanced Usage

If you need to render vue components within a dialog, you can use dialog component.

```html
<van-dialog v-model="show" :asyncConfirm="onClickConfirmAsync">
  <van-field
    v-model="username"
    label="Username"
    placeholder="Username"
  />
  <van-field
    v-model="password"
    type="password"
    label="Password"
    placeholder="Password"
  />
</van-dialog>
```

```js
Vue.use(Dialog);

export default {
  data() {
    return {
      show: false,
      username: '',
      password: ''
    };
  },
  
  methods: {
    beforeClose(action, done) {
      if (action === 'confirm') {
        setTimeout(done, 1000);
      } else {
        done();
      }
    }
  }
}
```

### API

| Attribute | Description | Type | Default |
|------|------|------|------|
| v-model | Whether to show dialog | `Boolean` | - |
| title | Title | `String` | - |
| message | Message | `String` | - |
| message-align | Message align，can be set to `left` `right` | `String` | `center` |
| show-confirm-button | Whether to show confirm button | `Boolean` |  `true` |
| show-cancel-button | Whether to show cancel button | `Boolean` |  `false` |
| confirm-button-text | Confirm button text | `String` |  `Confirm` |
| cancel-button-text | Cancel button test | `String` | `Cancel` |
| overlay | Whether to show overlay | `Boolean` | `true` |
| close-on-click-overlay | Whether to close when click overlay | `Boolean` | `false` |
| lock-scroll | Whether to lock background scroll | `Boolean` | `true` |
| before-close | Callback before close,<br>call done() to close dialog,<br>call done(false) to cancel loading | (action: string, done: function) => void | - |
| get-container | Return the mount node for Dialog | `String | () => HTMLElement` | `body` |

### Event

| Event | Description | Parameters |
|------|------|------|
| confirm | Triggered when click confirm button | - |
| cancel | Triggered when click cancel button | - |
