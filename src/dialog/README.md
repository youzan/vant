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

### Round Button Style

Use round button style.

```js
Dialog.alert({
  title: 'Title',
  message: 'Content',
  theme: 'round-button',
}).then(() => {
  // on close
});

Dialog.alert({
  message: 'Content',
  theme: 'round-button',
}).then(() => {
  // on close
});
```

### Async Close

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
  <img src="https://img01.yzcdn.cn/vant/apple-3.jpg" />
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
| Dialog.confirm | Show confirm dialog | `options` | `Promise` |
| Dialog.setDefaultOptions | Set default options of all dialogs | `options` | `void` |
| Dialog.resetDefaultOptions | Reset default options of all dialogs | - | `void` |
| Dialog.close | Close dialog | - | `void` |

### Options

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| title | Title | _string_ | - |
| width | Dialog width | _number \| string_ | `320px` |
| message | Message | _string_ | - |
| messageAlign | Message text align，can be set to `left` `right` | _string_ | `center` |
| theme `v2.10.0` | theme style，can be set to `round` | _string_ | `default` |
| className | Custom className | _any_ | - |
| showConfirmButton | Whether to show confirm button | _boolean_ | `true` |
| showCancelButton | Whether to show cancel button | _boolean_ | `false` |
| cancelButtonText | Cancel button text | _string_ | `Cancel` |
| cancelButtonColor | Cancel button color | _string_ | `black` |
| confirmButtonText | Confirm button text | _string_ | `Confirm` |
| confirmButtonColor | Confirm button color | _string_ | `#ee0a24` |
| overlay | Whether to show overlay | _boolean_ | `true` |
| overlayClass | Custom overlay class | _string_ | - |
| overlayStyle | Custom overlay style | _object_ | - |
| closeOnPopstate | Whether to close when popstate | _boolean_ | `true` |
| closeOnClickOverlay | Whether to close when overlay is clicked | _boolean_ | `false` |
| lockScroll | Whether to lock body scroll | _boolean_ | `true` |
| allowHtml `v2.8.7` | Whether to allow HTML rendering in message | _boolean_ | `true` |
| beforeClose | Callback before close,<br>call done() to close dialog,<br>call done(false) to cancel loading | (action: string, done: Function) => void | - |
| transition | Transition, equivalent to `name` prop of [transition](https://vuejs.org/v2/api/#transition) | _string_ | - |
| getContainer | Return the mount node for Dialog | _string \| () => Element_ | `body` |

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| v-model | Whether to show dialog | _boolean_ | - |
| title | Title | _string_ | - |
| width | Width | _number \| string_ | `320px` |
| message | Message | _string_ | - |
| message-align | Message align，can be set to `left` `right` | _string_ | `center` |
| theme `v2.10.0` | theme style，can be set to `round-button` | _string_ | `default` |
| show-confirm-button | Whether to show confirm button | _boolean_ | `true` |
| show-cancel-button | Whether to show cancel button | _boolean_ | `false` |
| cancel-button-text | Cancel button text | _string_ | `Cancel` |
| cancel-button-color | Cancel button color | _string_ | `black` |
| confirm-button-text | Confirm button text | _string_ | `Confirm` |
| confirm-button-color | Confirm button color | _string_ | `#ee0a24` |
| overlay | Whether to show overlay | _boolean_ | `true` |
| overlay-class | Custom overlay class | _string_ | - |
| overlay-style | Custom overlay style | _object_ | - |
| close-on-popstate | Whether to close when popstate | _boolean_ | `true` |
| close-on-click-overlay | Whether to close when overlay is clicked | _boolean_ | `false` |
| lazy-render | Whether to lazy render util appeared | _boolean_ | `true` |
| lock-scroll | Whether to lock background scroll | _boolean_ | `true` |
| allow-html `v2.8.7` | Whether to allow HTML rendering in message | _boolean_ | `true` |
| before-close | Callback before close,<br>call done() to close dialog,<br>call done(false) to cancel loading | (action: string, done: Function) => void | - |
| transition | Transition, equivalent to `name` prop of [transition](https://vuejs.org/v2/api/#transition) | _string_ | - |
| get-container | Return the mount node for Dialog | _string \| () => Element_ | - |

### Events

| Event   | Description                                | Parameters |
| ------- | ------------------------------------------ | ---------- |
| confirm | Emitted when the confirm button is clicked | -          |
| cancel  | Emitted when the cancel button is clicked  | -          |
| open    | Emitted when opening Dialog                | -          |
| close   | Emitted when closing Dialog                | -          |
| opened  | Emitted when Dialog is opened              | -          |
| closed  | Emitted when Dialog is closed              | -          |

### Slots

| Name    | Description    |
| ------- | -------------- |
| default | Custom message |
| title   | Custom title   |

### Less Variables

How to use: [Custom Theme](#/en-US/theme).

| Name | Default Value | Description |
| --- | --- | --- |
| @dialog-width | `320px` | - |
| @dialog-small-screen-width | `90%` | - |
| @dialog-font-size | `@font-size-lg` | - |
| @dialog-transition | `@animation-duration-base` | - |
| @dialog-border-radius | `16px` | - |
| @dialog-background-color | `@white` | - |
| @dialog-header-font-weight | `@font-weight-bold` | - |
| @dialog-header-line-height | `24px` | - |
| @dialog-header-padding-top | `26px` | - |
| @dialog-header-isolated-padding | `@padding-lg 0` | - |
| @dialog-message-padding | `@padding-lg` | - |
| @dialog-message-font-size | `@font-size-md` | - |
| @dialog-message-line-height | `@line-height-md` | - |
| @dialog-message-max-height | `60vh` | - |
| @dialog-has-title-message-text-color | `@gray-7` | - |
| @dialog-has-title-message-padding-top | `@padding-xs` | - |
| @dialog-button-height | `48px` | - |
| @dialog-round-button-height | `36px` | - |
| @dialog-confirm-button-text-color | `@red` | - |
