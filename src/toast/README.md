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

Toast.loading({
  message: 'Loading...',
  forbidClick: true,
  loadingType: 'spinner',
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
| Toast.allowMultiple | - | `void` | Allow multlple toast at the same time |
| Toast.setDefaultOptions | `type | options` | `void` | Set default options of all toasts |
| Toast.resetDefaultOptions | `type` | `void` | Reset default options of all toasts |

### Options

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| type | Can be set to `loading` `success` `fail` `html` | _string_ | `text` |
| position | Can be set to `top` `middle` `bottom` | _string_ | `middle` |
| message | Message | _string_ | `''` |
| icon `v2.0.1` | Custom icon | _string_ | - |
| iconPrefix `v2.0.9` | Icon className prefix | _string_ | `van-icon` |
| overlay `v2.2.13` | Whether to show overlay | _boolean_ | `false` |
| forbidClick | Whether to forbid click background | _boolean_ | `false` |
| closeOnClick `v2.1.5` | Whether to close after clicked | _boolean_ | `false` |
| closeOnClickOverlay `v2.2.13` | Whether to close when click overlay | _boolean_ | `false` |
| loadingType | Loading icon type, can be set to `spinner` | _string_ | `circular` |
| duration | Toast duration(ms), won't disappear if value is 0 | _number_ | `2000` |
| className | Custom className | _any_ | - |
| onOpened | Callback function after opened | _Function_ | - |
| onClose | Callback function after close | _Function_ | - |
| transition `v2.2.6` | Transition, equivalent to `name` prop of [transtion](https://vuejs.org/v2/api/#transition) | _string_ | `van-fade` |
| getContainer | Return the mount node for Toast | _string \| () => Element_ | `body` |
