# Dialog

### Install

```js
import Vue from 'vue';
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

| Name | Description | Attribute | Return value |
|------|------|------|------|
| Dialog | Show dialog | `options` | `Promise` |
| Dialog.alert | Show alert dialog | `options` | `Promise` |
| Dialog.confirm | Show confim dialog | `options` | `Promise` |
| Dialog.setDefaultOptions | Set default options of all dialogs | `options` | `void` |
| Dialog.resetDefaultOptions | Reset default options of all dialogs | - | `void` |
| Dialog.close | Close dialog | - | `void` |

### Options

| Attribute | Description | Type | Default | Version |
|------|------|------|------|------|
| title | Title | *string* | - | - |
| width | Width | *string \| number* | `320px` | 2.2.7 |
| message | Message | *string* | - | - |
| messageAlign | Message text align，can be set to `left` `right` | *string* | `center` | - |
| className | Custom className | *any* | - | - |
| showConfirmButton | Whether to show confirm button | *boolean* | `true` | - |
| showCancelButton | Whether to show cancel button | *boolean* | `false` | - |
| cancelButtonText | Cancel button text | *string* | `Cancel` | - |
| cancelButtonColor | Cancel button color | *string* | `#000` | - |
| confirmButtonText | Confirm button text | *string* | `Confirm` | - |
| confirmButtonColor | Confirm button color | *string* | `#1989fa` | - |
| overlay | Whether to show overlay | *boolean* | `true` | - |
| overlayClass | Custom overlay class | *string* | - | 2.2.7 |
| overlayStyle | Custom overlay style | *object* | - | 2.2.7 |
| closeOnPopstate | Whether to close when popstate | *boolean* | `false` | 2.0.5 |
| closeOnClickOverlay | Whether to close when click overlay | *boolean* | `false` | - |
| lockScroll | Whether to lock body scroll | *boolean* | `true` | - |
| beforeClose | Callback before close,<br>call done() to close dialog,<br>call done(false) to cancel loading | (action: string, done: Function) => void | - | - |
| transition | Transition, equivalent to `name` prop of [transtion](https://vuejs.org/v2/api/#transition) | *string* | - | 2.2.6 |
| getContainer | Return the mount node for Dialog | *string \| () => Element* | `body` | - |

### Props

| Attribute | Description | Type | Default | Version |
|------|------|------|------|------|
| v-model | Whether to show dialog | *boolean* | - | - |
| title | Title | *string* | - | - |
| width | Width | *string \| number* | `320px` | 2.2.7 |
| message | Message | *string* | - | - |
| message-align | Message align，can be set to `left` `right` | *string* | `center` | - |
| show-confirm-button | Whether to show confirm button | *boolean* |  `true` | - |
| show-cancel-button | Whether to show cancel button | *boolean* | `false` | - |
| cancel-button-text | Cancel button text | *string* | `Cancel` | - |
| cancel-button-color | Cancel button color | *string* | `#000` | - |
| confirm-button-text | Confirm button text | *string* | `Confirm` | - |
| confirm-button-color | Confirm button color | *string* | `#1989fa` | - |
| overlay | Whether to show overlay | *boolean* | `true` | - |
| overlay-class | Custom overlay class | *string* | - | 2.2.7 |
| overlay-style | Custom overlay style | *object* | - | 2.2.7 |
| close-on-popstate | Whether to close when popstate | *boolean* | `false` | 2.0.5 |
| close-on-click-overlay | Whether to close when click overlay | *boolean* | `false` | - |
| lazy-render | Whether to lazy render util appeared | *boolean* | `true` | - |
| lock-scroll | Whether to lock background scroll | *boolean* | `true` | - |
| before-close | Callback before close,<br>call done() to close dialog,<br>call done(false) to cancel loading | (action: string, done: Function) => void | - | - |
| transition | Transition, equivalent to `name` prop of [transtion](https://vuejs.org/v2/api/#transition) | *string* | - | 2.2.6 |
| get-container | Return the mount node for Dialog | *string \| () => Element* | - | - |

### Events

| Event | Description | Parameters |
|------|------|------|
| confirm | Triggered when click confirm button | - |
| cancel | Triggered when click cancel button | - |
| open | Triggered when open Dialog | - |
| opened | Triggered when opened Dialog | - |
| close | Triggered when close Dialog | - |
| closed | Triggered when closed Dialog | - |

### Slots

| Name | Description |
|------|------|
| default | Custom message |
| title | Custom title |
