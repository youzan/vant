# Toast

### Intro

Black semi-transparent pop-up hint in the middle of the page, used for message notification, loading hint, operation result hint and other scenarios.

### Install

Register component globally via `app.use`, refer to [Component Registration](#/en-US/advanced-usage#zu-jian-zhu-ce) for more registration ways.

```js
import { createApp } from 'vue';
import { Toast } from 'vant';

const app = createApp();
app.use(Toast);
```

### Function Call

Vant provides some utility functions that can quickly evoke global `Toast` components.

For example, calling the `showToast` function will render a Toast directly in the page.

```js
import { showToast } from 'vant';

showToast('Some messages');
```

## Usage

### Text

Use the `showToast` method to display a text toast in the center of the screen.

```js
import { showToast } from 'vant';

showToast('Some messages');
```

### Loading

Use the `showLoadingToast` method to display a loading toast. The `forbidClick` option can be used to disable background clicks.

```js
import { showLoadingToast } from 'vant';

showLoadingToast({
  message: 'Loading...',
  forbidClick: true,
});
```

### Success/Fail

Use the `showSuccessToast` method to display a success message, and use the `showFailToast` method to display a failure message.

```js
import { showSuccessToast, showFailToast } from 'vant';

showSuccessToast('Success');
showFailToast('Fail');
```

### Custom Icon

The `icon` option allows you to customize the icon by specifying either the icon name or an image URL, which is equivalent to the `name` attribute of the Icon component.

```js
import { showToast, showLoadingToast } from 'vant';

showToast({
  message: 'Custom Icon',
  icon: 'like-o',
});

showToast({
  message: 'Custom Image',
  icon: 'https://fastly.jsdelivr.net/npm/@vant/assets/logo.png',
});
```

The `loadingType` option allows you to customize the type of loading icon.

```js
showLoadingToast({
  message: 'Loading...',
  forbidClick: true,
  loadingType: 'spinner',
});
```

### Custom Position

By default, the Toast is rendered in the center of the screen. You can control the position of the Toast by using the `position` option.

```js
import { showToast } from 'vant';

showToast({
  message: 'Top',
  position: 'top',
});

showToast({
  message: 'Bottom',
  position: 'bottom',
});
```

### Word Break

The `wordBreak` option controls how the text in the Toast is truncated when it exceeds the available space. The default value is `break-all`, and the optional values are `break-word` and `normal`.

```js
import { showToast } from 'vant';

showToast({
  message: 'This message will contain a incomprehensibilities long word.',
  wordBreak: 'break-all',
});

showToast({
  message: 'This message will contain a incomprehensibilities long word.',
  wordBreak: 'break-word',
});
```

### Update Message

When executing the Toast method, it returns the corresponding Toast instance. You can dynamically update the message by modifying the `message` property on the instance.

```js
import { showLoadingToast, closeToast } from 'vant';

const toast = showLoadingToast({
  duration: 0,
  forbidClick: true,
  loadingType: 'spinner',
  message: '3 seconds',
});

let second = 3;
const timer = setInterval(() => {
  second--;
  if (second) {
    toast.message = `${second} seconds`;
  } else {
    clearInterval(timer);
    closeToast();
  }
}, 1000);
```

### Singleton

The Toast is implemented as a singleton by default, which means that only one Toast can exist at a time. If you need to display multiple Toasts at the same time, you can refer to the following example:

```js
import { showToast, showSuccessToast, allowMultipleToast } from 'vant';

allowMultipleToast();

const toast1 = showToast('First Toast');
const toast2 = showSuccessToast('Second Toast');

toast1.close();
toast2.close();
```

### Set Default Options

You can globally modify the default configuration of the `showToast` and other methods by using the `setToastDefaultOptions` function.

```js
import { setToastDefaultOptions, resetToastDefaultOptions } from 'vant';

setToastDefaultOptions({ duration: 2000 });

setToastDefaultOptions('loading', { forbidClick: true });

resetToastDefaultOptions();

resetToastDefaultOptions('loading');
```

### Use Toast Component

If you need to embed components or other custom content within the Toast, you can directly use the Toast component and customize it using the message slot. Before using it, you need to register the component using `app.use` or other methods.

```html
<van-toast v-model:show="show" style="padding: 0">
  <template #message>
    <van-image :src="image" width="200" height="140" style="display: block" />
  </template>
</van-toast>
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

Vant exports following Toast utility functions:

| Name | Description | Attribute | Return value |
| --- | --- | --- | --- |
| showToast | Display a text toast | `ToastOptions \| string` | Toast instance |
| showLoadingToast | Display a loading toast | `ToastOptions \| string` | Toast instance |
| showSuccessToast | Display a success toast | `ToastOptions \| string` | Toast instance |
| showFailToast | Display a fail toast | `ToastOptions \| string` | Toast instance |
| closeToast | Close the currently displayed toast | `closeAll: boolean` | `void` |
| allowMultipleToast | Allow multiple toasts to be displayed as the same time | - | `void` |
| setToastDefaultOptions | Modify the default configuration that affects all `showToast` calls. Specify the `type` parameter to modify the default configuration of a specific type of toast | `type \| ToastOptions` | `void` |
| resetToastDefaultOptions | Reset the default configuration that affects all `showToast` calls. Specify the `type` parameter to reset the default configuration of a specific type of toast | `type` | `void` |

### ToastOptions

When calling the `showToast` and other related methods, the following options are supported:

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| type | Can be set to `loading` `success` `fail` `html` | _ToastType_ | `text` |
| position | Can be set to `top` `middle` `bottom` | _ToastPosition_ | `middle` |
| message | Message | _string_ | `''` |
| wordBreak | Can be set to `normal` `break-all` `break-word` | _ToastWordBreak_ | `'break-all'` |
| icon | Custom icon | _string_ | - |
| iconSize | Custom icon size | _number \| string_ | `36px` |
| iconPrefix | Icon className prefix | _string_ | `van-icon` |
| overlay | Whether to show overlay | _boolean_ | `false` |
| forbidClick | Whether to forbid click background | _boolean_ | `false` |
| closeOnClick | Whether to close after clicked | _boolean_ | `false` |
| closeOnClickOverlay | Whether to close when overlay is clicked | _boolean_ | `false` |
| loadingType | Loading icon type, can be set to `spinner` | _string_ | `circular` |
| duration | Toast duration(ms), won't disappear if value is 0 | _number_ | `2000` |
| className | Custom className | _string \| Array \| object_ | - |
| overlayClass | Custom overlay class | _string \| Array \| object_ | - |
| overlayStyle | Custom overlay style | _object_ | - |
| transition | Transition, equivalent to `name` prop of [transition](https://vuejs.org/api/built-in-components.html#transition) | _string_ | `van-fade` |
| teleport | Specifies a target element where Toast will be mounted | _string \| Element_ | `body` |
| zIndex | Set the z-index to a fixed value | _number \| string_ | `2000+` |
| onClose | Callback function after close | _Function_ | - |
| onOpened | Callback function after opened | _Function_ | - |

### Props

When using `Toast` as a component, the following props are supported:

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| v-model:show | Whether to show toast | _boolean_ | `false` |
| type | Can be set to `loading` `success` `fail` `html` | _ToastType_ | `text` |
| position | Can be set to `top` `middle` `bottom` | _ToastPosition_ | `middle` |
| message | Message | _string_ | `''` |
| word-break | Can be set to `normal` `break-all` `break-word` | _ToastWordBreak_ | `'break-all'` |
| icon | Custom icon | _string_ | - |
| icon-size | Custom icon size | _number \| string_ | `36px` |
| icon-prefix | Icon className prefix | _string_ | `van-icon` |
| overlay | Whether to show overlay | _boolean_ | `false` |
| forbid-click | Whether to forbid click background | _boolean_ | `false` |
| close-on-click | Whether to close after clicked | _boolean_ | `false` |
| close-on-click-overlay | Whether to close when overlay is clicked | _boolean_ | `false` |
| loading-type | Loading icon type, can be set to `spinner` | _string_ | `circular` |
| duration | Toast duration(ms), won't disappear if value is 0 | _number_ | `2000` |
| class-name | Custom className | _string \| Array \| object_ | - |
| overlay-class | Custom overlay class | _string \| Array \| object_ | - |
| overlay-style | Custom overlay style | _object_ | - |
| transition | Transition, equivalent to `name` prop of [transition](https://vuejs.org/api/built-in-components.html#transition) | _string_ | `van-fade` |
| teleport | Specifies a target element where Toast will be mounted | _string \| Element_ | `body` |
| z-index | Set the z-index to a fixed value | _number \| string_ | `2000+` |

### Events

When using `Toast` as a component, the following events are supported:

| Event  | Description                    | Parameters |
| ------ | ------------------------------ | ---------- |
| close  | Callback function after close  | -          |
| opened | Callback function after opened | -          |

### Slots

You can use following slots when using `Toast` component:

| Name    | Description    |
| ------- | -------------- |
| message | Custom message |

### Types

The component exports the following type definitions:

```ts
import type {
  ToastType,
  ToastProps,
  ToastOptions,
  ToastPosition,
  ToastWordBreak,
  ToastWrapperInstance,
} from 'vant';
```

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/config-provider).

| Name | Default Value | Description |
| --- | --- | --- |
| --van-toast-max-width | _70%_ | - |
| --van-toast-font-size | _var(--van-font-size-md)_ | - |
| --van-toast-text-color | _var(--van-white)_ | - |
| --van-toast-loading-icon-color | _var(--van-white)_ | - |
| --van-toast-line-height | _var(--van-line-height-md)_ | - |
| --van-toast-radius | _var(--van-radius-lg)_ | - |
| --van-toast-background | _fade(var(--van-black), 70%)_ | - |
| --van-toast-icon-size | _36px_ | - |
| --van-toast-text-min-width | _96px_ | - |
| --van-toast-text-padding | _var(--van-padding-xs) var(--van-padding-sm)_ | - |
| --van-toast-default-padding | _var(--van-padding-md)_ | - |
| --van-toast-default-width | _88px_ | - |
| --van-toast-default-min-height | _88px_ | - |
| --van-toast-position-top-distance | _20%_ | - |
| --van-toast-position-bottom-distance | _20%_ | - |
