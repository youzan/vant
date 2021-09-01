# Dialog

### Intro

A modal box pops up on the page, which is often used for message prompts, message confirmation, or to complete specific interactive operations in the current page. It supports two methods: function call and component call.

### Install

Register component globally via `app.use`, refer to [Component Registration](#/en-US/advanced-usage#zu-jian-zhu-ce) for more registration ways.

```js
import { createApp } from 'vue';
import { Dialog } from 'vant';

const app = createApp();
app.use(Dialog);
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
const beforeClose = (action) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(action === 'confirm');
    }, 1000);
  });

Dialog.confirm({
  title: 'Title',
  message: 'Content',
  beforeClose,
});
```

### Global Method

After registering the Dialog component through `app.use`, the `$dialog` method will be automatically mounted on all subComponents of the app.

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
<van-dialog v-model:show="show" title="Title" show-cancel-button>
  <img src="https://img.yzcdn.cn/vant/apple-3.jpg" />
</van-dialog>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const show = ref(false);
    return { show };
  },
};
```

## API

### Methods

| Name | Description | Attribute | Return value |
| --- | --- | --- | --- |
| Dialog | Show dialog | _options: DialogOptions_ | `Promise<void>` |
| Dialog.alert | Show alert dialog | _options: DialogOptions_ | `Promise<void>` |
| Dialog.confirm | Show confirm dialog | _options: DialogOptions_ | `Promise<void>` |
| Dialog.setDefaultOptions | Set default options of all dialogs | _options: DialogOptions_ | `void` |
| Dialog.resetDefaultOptions | Reset default options of all dialogs | - | `void` |
| Dialog.close | Close dialog | - | `void` |

### DialogOptions

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| title | Title | _string_ | - |
| width | Dialog width | _number \| string_ | `320px` |
| message | Message | _string \| () => JSX.ELement_ | - |
| messageAlign | Message text align，can be set to `left` `right` | _string_ | `center` |
| theme | Theme style，can be set to `round-button` | _string_ | `default` |
| className | Custom className | _string \| Array \| object_ | - |
| showConfirmButton | Whether to show confirm button | _boolean_ | `true` |
| showCancelButton | Whether to show cancel button | _boolean_ | `false` |
| cancelButtonText | Cancel button text | _string_ | `Cancel` |
| cancelButtonColor | Cancel button color | _string_ | `black` |
| confirmButtonText | Confirm button text | _string_ | `Confirm` |
| confirmButtonColor | Confirm button color | _string_ | `#ee0a24` |
| overlay | Whether to show overlay | _boolean_ | `true` |
| overlayClass | Custom overlay class | _string \| Array \| object_ | - |
| overlayStyle | Custom overlay style | _object_ | - |
| closeOnPopstate | Whether to close when popstate | _boolean_ | `true` |
| closeOnClickOverlay | Whether to close when overlay is clicked | _boolean_ | `false` |
| lockScroll | Whether to lock body scroll | _boolean_ | `true` |
| allowHtml | Whether to allow HTML rendering in message | _boolean_ | `false` |
| beforeClose | Callback function before close | _(action: string) => boolean \| Promise\<boolean\>_ | - |
| transition | Transition, equivalent to `name` prop of [transition](https://v3.vuejs.org/api/built-in-components.html#transition) | _string_ | - |
| teleport | Specifies a target element where Dialog will be mounted | _string \| Element_ | `body` |

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| v-model:show | Whether to show dialog | _boolean_ | - |
| title | Title | _string_ | - |
| width | Width | _number \| string_ | `320px` |
| message | Message | _string \| () => JSX.ELement_ | - |
| message-align | Message align，can be set to `left` `right` | _string_ | `center` |
| theme | Theme style，can be set to `round-button` | _string_ | `default` |
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
| allow-html | Whether to allow HTML rendering in message | _boolean_ | `false` |
| before-close | Callback function before close | _(action: string) => boolean \| Promise\<boolean\>_ | - |
| transition | Transition, equivalent to `name` prop of [transition](https://v3.vuejs.org/api/built-in-components.html#transition) | _string_ | - |
| teleport | Specifies a target element where Dialog will be mounted | _string \| Element_ | - |

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

| Name             | Description    |
| ---------------- | -------------- |
| default          | Custom message |
| title            | Custom title   |
| footer `v3.0.10` | Custom footer  |

### Types

The component exports the following type definitions:

```ts
import type {
  DialogTheme,
  DialogMessage,
  DialogOptions,
  DialogMessageAlign,
} from 'vant';
```

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/config-provider).

| Name | Default Value | Description |
| --- | --- | --- |
| --van-dialog-width | _320px_ | - |
| --van-dialog-small-screen-width | _90%_ | - |
| --van-dialog-font-size | _var(--van-font-size-lg)_ | - |
| --van-dialog-transition | _var(--van-animation-duration-base)_ | - |
| --van-dialog-border-radius | _16px_ | - |
| --van-dialog-background-color | _var(--van-white)_ | - |
| --van-dialog-header-font-weight | _var(--van-font-weight-bold)_ | - |
| --van-dialog-header-line-height | _24px_ | - |
| --van-dialog-header-padding-top | _26px_ | - |
| --van-dialog-header-isolated-padding | _var(--van-padding-lg) 0_ | - |
| --van-dialog-message-padding | _var(--van-padding-lg)_ | - |
| --van-dialog-message-font-size | _var(--van-font-size-md)_ | - |
| --van-dialog-message-line-height | _var(--van-line-height-md)_ | - |
| --van-dialog-message-max-height | _60vh_ | - |
| --van-dialog-has-title-message-text-color | _var(--van-gray-7)_ | - |
| --van-dialog-has-title-message-padding-top | _var(--van-padding-xs)_ | - |
| --van-dialog-button-height | _48px_ | - |
| --van-dialog-round-button-height | _36px_ | - |
| --van-dialog-confirm-button-text-color | _var(--van-danger-color)_ | - |
