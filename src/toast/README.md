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

## Usage

### Text

```js
Toast('Some messages');
```

### Loading

```js
Toast.loading({
  message: 'Loading...',
  forbidClick: true,
});
```

### Success/Fail

```js
Toast.success('Success');
Toast.fail('Fail');
```

### Custom Icon

```js
Toast({
  message: 'Custom Icon',
  icon: 'like-o',
});

Toast({
  message: 'Custom Image',
  icon: 'https://img.yzcdn.cn/vant/logo.png',
});

Toast.loading({
  message: 'Loading...',
  forbidClick: true,
  loadingType: 'spinner',
});
```

### Custom Position

```js
Toast({
  message: 'Top',
  position: 'top',
});

Toast({
  message: 'Bottom',
  position: 'bottom',
});
```

### Update Message

```js
const toast = Toast.loading({
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
    Toast.clear();
  }
}, 1000);
```

### Global Method

After registering the Toast component through `app.use`, the `$toast` method will be automatically mounted on all subcomponents of the app.

```js
export default {
  mounted() {
    this.$toast('Some messages');
  },
};
```

### Singleton

Toast use singleton mode by default, if you need to pop multiple Toast at the same time, you can refer to the following example:

```js
Toast.allowMultiple();

const toast1 = Toast('First Toast');
const toast2 = Toast.success('Second Toast');

toast1.clear();
toast2.clear();
```

### Set Default Options

The Toast default configuration can be globally modified with the `Toast.setDefaultOptions` function.

```js
Toast.setDefaultOptions({ duration: 2000 });

Toast.setDefaultOptions('loading', { forbidClick: true });

Toast.resetDefaultOptions();

Toast.resetDefaultOptions('loading');
```

## API

### Methods

| Methods | Attribute | Return value | Description |
| --- | --- | --- | --- |
| Toast | `options \| message` | toast instance | Show toast |
| Toast.loading | `options \| message` | toast instance | Show loading toast |
| Toast.success | `options \| message` | toast instance | Show success toast |
| Toast.fail | `options \| message` | toast instance | Show fail toast |
| Toast.clear | `clearAll: boolean` | `void` | Close toast |
| Toast.allowMultiple | - | `void` | Allow multiple toast at the same time |
| Toast.setDefaultOptions | `type \| options` | `void` | Set default options of all toasts |
| Toast.resetDefaultOptions | `type` | `void` | Reset default options of all toasts |

### Options

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

### Types

The component exports the following type definitions:

```ts
import type { ToastType, ToastOptions, ToastPosition } from 'vant';
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
| --van-toast-border-radius | _var(--van-border-radius-lg)_ | - |
| --van-toast-background-color | _fade(var(--van-black), 70%)_ | - |
| --van-toast-icon-size | _36px_ | - |
| --van-toast-text-min-width | _96px_ | - |
| --van-toast-text-padding | _var(--van-padding-xs) var(--van-padding-sm)_ | - |
| --van-toast-default-padding | _var(--van-padding-md)_ | - |
| --van-toast-default-width | _88px_ | - |
| --van-toast-default-min-height | _88px_ | - |
| --van-toast-position-top-distance | _20%_ | - |
| --van-toast-position-bottom-distance | _20%_ | - |
