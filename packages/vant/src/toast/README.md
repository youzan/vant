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

```js
import { showToast } from 'vant';

showToast('Some messages');
```

### Loading

```js
import { showLoadingToast } from 'vant';

showLoadingToast({
  message: 'Loading...',
  forbidClick: true,
});
```

### Success/Fail

```js
import { showSuccessToast, showFailToast } from 'vant';

showSuccessToast('Success');
showFailToast('Fail');
```

### Custom Icon

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

showLoadingToast({
  message: 'Loading...',
  forbidClick: true,
  loadingType: 'spinner',
});
```

### Custom Position

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

### Update Message

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

Toast use singleton mode by default, if you need to pop multiple Toast at the same time, you can refer to the following example:

```js
import { showToast, showSuccessToast, allowMultipleToast } from 'vant';

allowMultipleToast();

const toast1 = showToast('First Toast');
const toast2 = showSuccessToast('Second Toast');

toast1.close();
toast2.close();
```

### Set Default Options

The Toast default configuration can be globally modified with the `setToastDefaultOptions` function.

```js
import { setToastDefaultOptions, resetToastDefaultOptions } from 'vant';

setToastDefaultOptions({ duration: 2000 });

setToastDefaultOptions('loading', { forbidClick: true });

resetToastDefaultOptions();

resetToastDefaultOptions('loading');
```

### Use Toast Component

If you want to render Vue components within a Toast, you can use the Toast component.

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
| showToast | Show toast | `ToastOptions \| string` | toast instance |
| showLoadingToast | Show loading toast | `ToastOptions \| string` | toast instance |
| showSuccessToast | Show success toast | `ToastOptions \| string` | toast instance |
| showFailToast | Show fail toast | `ToastOptions \| string` | toast instance |
| closeToast | Close toast | `closeAll: boolean` | `void` |
| allowMultipleToast | Allow multiple toast at the same time | - | `void` |
| setToastDefaultOptions | Set default options of all toasts | `type \| ToastOptions` | `void` |
| resetToastDefaultOptions | Reset default options of all toasts | `type` | `void` |

### ToastOptions

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| type | Can be set to `loading` `success` `fail` `html` | _ToastType_ | `text` |
| position | Can be set to `top` `middle` `bottom` | _ToastPosition_ | `middle` |
| message | Message | _string_ | `''` |
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
| overlayClass `v3.0.4` | Custom overlay class | _string \| Array \| object_ | - |
| overlayStyle `v3.0.4` | Custom overlay style | _object_ | - |
| onOpened | Callback function after opened | _Function_ | - |
| onClose | Callback function after close | _Function_ | - |
| transition | Transition, equivalent to `name` prop of [transition](https://v3.vuejs.org/api/built-in-components.html#transition) | _string_ | `van-fade` |
| teleport | Specifies a target element where Toast will be mounted | _string \| Element_ | `body` |

### Slots

You can use following slots when using `Toast` component:

| Name    | Description    |
| ------- | -------------- |
| message | Custom message |

### Types

The component exports the following type definitions:

```ts
import type { ToastType, ToastProps, ToastOptions, ToastPosition } from 'vant';
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
