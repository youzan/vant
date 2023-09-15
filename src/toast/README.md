# Toast

### Install

```js
import Vue from 'vue';
import { Toast } from 'vant';

Vue.use(Toast);
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
  icon: 'https://img01.yzcdn.cn/vant/logo.png',
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
  duration: 0, // continuous display toast
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

After import the Toast component, the `$toast` method is automatically mounted on Vue.prototype, making it easy to call within a vue component.

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
// Set the duration of all Toast to 2000 ms
Toast.setDefaultOptions({ duration: 2000 });

// Set all loading types Toast to background unclickable
Toast.setDefaultOptions('loading', { forbidClick: true });

// Reset default options of all Toast
Toast.resetDefaultOptions();

// Reset default options of all loading Toast
Toast.resetDefaultOptions('loading');
```

## API

### Methods

| Methods | Attribute | Return value | Description |
| --- | --- | --- | --- |
| Toast | `options | message` | toast instance | Show toast |
| Toast.loading | `options | message` | toast instance | Show loading toast |
| Toast.success | `options | message` | toast instance | Show success toast |
| Toast.fail | `options | message` | toast instance | Show fail toast |
| Toast.clear | `clearAll: boolean` | `void` | Close toast |
| Toast.allowMultiple | - | `void` | Allow multiple toast at the same time |
| Toast.setDefaultOptions | `type | options` | `void` | Set default options of all toasts |
| Toast.resetDefaultOptions | `type` | `void` | Reset default options of all toasts |

### Options

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| type | Can be set to `loading` `success` `fail` `html` | _string_ | `text` |
| position | Can be set to `top` `middle` `bottom` | _string_ | `middle` |
| message | Message | _string_ | `''` |
| icon | Custom icon | _string_ | - |
| iconPrefix | Icon className prefix | _string_ | `van-icon` |
| overlay | Whether to show overlay | _boolean_ | `false` |
| forbidClick | Whether to forbid click background | _boolean_ | `false` |
| closeOnClick | Whether to close after clicked | _boolean_ | `false` |
| closeOnClickOverlay | Whether to close when overlay is clicked | _boolean_ | `false` |
| loadingType | Loading icon type, can be set to `spinner` | _string_ | `circular` |
| duration | Toast duration(ms), won't disappear if value is 0 | _number_ | `2000` |
| className | Custom className | _any_ | - |
| onOpened | Callback function after opened | _Function_ | - |
| onClose | Callback function after close | _Function_ | - |
| transition | Transition, equivalent to `name` prop of [transition](https://vuejs.org/v2/api/#transition) | _string_ | `van-fade` |
| getContainer | Return the mount node for Toast | _string \| () => Element_ | `body` |

### Less Variables

How to use: [Custom Theme](#/en-US/theme).

| Name                            | Default Value             | Description |
| ------------------------------- | ------------------------- | ----------- |
| @toast-max-width                | `70%`                     | -           |
| @toast-font-size                | `@font-size-md`           | -           |
| @toast-text-color               | `@white`                  | -           |
| @toast-loading-icon-color       | `@white`                  | -           |
| @toast-line-height              | `@line-height-md`         | -           |
| @toast-border-radius            | `@border-radius-lg`       | -           |
| @toast-background-color         | `fade(@black, 70%)`       | -           |
| @toast-icon-size                | `36px`                    | -           |
| @toast-text-min-width           | `96px`                    | -           |
| @toast-text-padding             | `@padding-xs @padding-sm` | -           |
| @toast-default-padding          | `@padding-md`             | -           |
| @toast-default-width            | `88px`                    | -           |
| @toast-default-min-height       | `88px`                    | -           |
| @toast-position-top-distance    | `20%`                     | -           |
| @toast-position-bottom-distance | `20%`                     | -           |
