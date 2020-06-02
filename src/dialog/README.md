# Dialog

### Install

```js
import Vue from 'vue';
import { Dialog } from 'vant';

Vue.use(Dialog);
```

## Usage

### Alert dialog

Used to prompt for some messages, only including one confirm button.

```js
Dialog.alert({
  title: 'Title',
  message: 'Content',
}).then(() => {
  // on close
});

Dialog.alert({
  message: 'Content',
}).then(() => {
  // on close
});
```

### Confirm dialog

Used to confirm some messages, including a confirm button and a cancel button.

```js
Dialog.confirm({
  title: 'Title',
  message: 'Content',
})
  .then(() => {
    // on confirm
  })
  .catch(() => {
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
  beforeClose,
});
```

### Global Method

After import the Dialog component, the `$dialog` method is automatically mounted on Vue.prototype, making it easy to call within a vue component.

```js
export default {
  mounted() {
    this.$dialog.alert({
      message: 'Content',
    });
  },
};
```

### Advanced Usage

If you need to render vue components within a dialog, you can use dialog component.

```html
<van-dialog v-model="show" title="Title" show-cancel-button>
  <img src="https://img.yzcdn.cn/vant/apple-3.jpg" />
</van-dialog>
```

```js
export default {
  data() {
    return {
      show: false,
    };
  },
};
```

## API

### Methods

| Name | Description | Attribute | Return value |
| --- | --- | --- | --- |
| Dialog | Show dialog | `options` | `Promise` |
| Dialog.alert | Show alert dialog | `options` | `Promise` |
| Dialog.confirm | Show confim dialog | `options` | `Promise` |
| Dialog.setDefaultOptions | Set default options of all dialogs | `options` | `void` |
| Dialog.resetDefaultOptions | Reset default options of all dialogs | - | `void` |
| Dialog.close | Close dialog | - | `void` |

### Options

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| title | Title | _string_ | - |
| width `v2.2.7` | Width | _number \| string_ | `320px` |
| message | Message | _string_ | - |
| messageAlign | Message text align，can be set to `left` `right` | _string_ | `center` |
| className | Custom className | _any_ | - |
| showConfirmButton | Whether to show confirm button | _boolean_ | `true` |
| showCancelButton | Whether to show cancel button | _boolean_ | `false` |
| cancelButtonText | Cancel button text | _string_ | `Cancel` |
| cancelButtonColor | Cancel button color | _string_ | `black` |
| confirmButtonText | Confirm button text | _string_ | `Confirm` |
| confirmButtonColor | Confirm button color | _string_ | `#1989fa` |
| overlay | Whether to show overlay | _boolean_ | `true` |
| overlayClass `v2.2.7` | Custom overlay class | _string_ | - |
| overlayStyle `v2.2.7` | Custom overlay style | _object_ | - |
| closeOnPopstate `v2.0.5` | Whether to close when popstate | _boolean_ | `false` |
| closeOnClickOverlay | Whether to close when click overlay | _boolean_ | `false` |
| lockScroll | Whether to lock body scroll | _boolean_ | `true` |
| beforeClose | Callback before close,<br>call done() to close dialog,<br>call done(false) to cancel loading | (action: string, done: Function) => void | - |
| transition `v2.2.6` | Transition, equivalent to `name` prop of [transtion](https://vuejs.org/v2/api/#transition) | _string_ | - |
| getContainer | Return the mount node for Dialog | _string \| () => Element_ | `body` |

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| v-model | Whether to show dialog | _boolean_ | - |
| title | Title | _string_ | - |
| width `v2.2.7` | Width | _number \| string_ | `320px` |
| message | Message | _string_ | - |
| message-align | Message align，can be set to `left` `right` | _string_ | `center` |
| show-confirm-button | Whether to show confirm button | _boolean_ | `true` |
| show-cancel-button | Whether to show cancel button | _boolean_ | `false` |
| cancel-button-text | Cancel button text | _string_ | `Cancel` |
| cancel-button-color | Cancel button color | _string_ | `black` |
| confirm-button-text | Confirm button text | _string_ | `Confirm` |
| confirm-button-color | Confirm button color | _string_ | `#1989fa` |
| overlay | Whether to show overlay | _boolean_ | `true` |
| overlay-class `v2.2.7` | Custom overlay class | _string_ | - |
| overlay-style `v2.2.7` | Custom overlay style | _object_ | - |
| close-on-popstate `v2.0.5` | Whether to close when popstate | _boolean_ | `false` |
| close-on-click-overlay | Whether to close when click overlay | _boolean_ | `false` |
| lazy-render | Whether to lazy render util appeared | _boolean_ | `true` |
| lock-scroll | Whether to lock background scroll | _boolean_ | `true` |
| before-close | Callback before close,<br>call done() to close dialog,<br>call done(false) to cancel loading | (action: string, done: Function) => void | - |
| transition `v2.2.6` | Transition, equivalent to `name` prop of [transtion](https://vuejs.org/v2/api/#transition) | _string_ | - |
| get-container | Return the mount node for Dialog | _string \| () => Element_ | - |

### Events

| Event   | Description                         | Parameters |
| ------- | ----------------------------------- | ---------- |
| confirm | Triggered when click confirm button | -          |
| cancel  | Triggered when click cancel button  | -          |
| open    | Triggered when open Dialog          | -          |
| close   | Triggered when close Dialog         | -          |
| opened  | Triggered when opened Dialog        | -          |
| closed  | Triggered when closed Dialog        | -          |

### Slots

| Name    | Description    |
| ------- | -------------- |
| default | Custom message |
| title   | Custom title   |
