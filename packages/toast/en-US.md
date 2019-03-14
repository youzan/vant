## Toast

### Install

```javascript
import { Toast } from 'vant';

Vue.use(Toast);
```

### Usage

#### Text

```javascript
Toast('Some messages');
```


#### Loading

```javascript
Toast.loading({
  mask: true,
  message: 'Loading...'
});
```


#### Success/Fail

```javascript
Toast.success('Success');
Toast.fail('Fail');
```


#### Advanced Usage

```javascript
const toast = Toast.loading({
  duration: 0,       // continuous display toast
  forbidClick: true, // forbid click background
  loadingType: 'spinner',
  message: '3 seconds'
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

#### $toast Method
After import the Toast component, the $toast method is automatically mounted on Vue.prototype, making it easy to call within a vue component.

```js
export default {
  mounted() {
    this.$toast('Some messages');
  }
}
```

#### Singleton
Toast use singleton mode by default, if you need to pop multiple Toast at the same time, you can refer to the following example

```js
Toast.allowMultiple();

const toast1 = Toast('First Toast');
const toast2 = Toast.success('Second Toast');

toast1.clear();
toast2.clear();
```

### Methods

| Methods | Attribute | Return value | Description |
|------|------|------|------|
| Toast | `options | message` | toast instance | Show toast |
| Toast.loading | `options | message` | toast instance | Show loading toast |
| Toast.success | `options | message` | toast instance | Show success toast |
| Toast.fail | `options | message` | toast instance | Show fail toast |
| Toast.clear | `clearAll` | `void` | Close toast |
| Toast.allowMultiple | - | `void` | Allow multlple toast at the same time |
| Toast.setDefaultOptions | `options` | `void` | Set default options of all toasts |
| Toast.resetDefaultOptions | - | `void` | Reset default options of all toasts |

### Options

| Attribute | Description | Type | Default |
|------|------|------|------|
| type | Can be set to `loading` `success` `fail` `html` | `String` | `text` |
| position | Can be set to `top` `middle` `bottom` | `String` | `middle` |
| message | Message | `String` | `''` |
| mask | Whether to show mask | `Boolean` | `false` |
| forbidClick | Whether to forbid click background | `Boolean` | `false` |
| loadingType | Loading icon type, can be set to `spinner` | `String` | `circular` |
| duration | Toast duration(ms), won't disappear if value is 0 | `Number` | `3000` |
| className | Custom className | `String | Array | Object` | - |
| onClose | onClose callback function | `Function` | - |
| getContainer | Return the mount node for Toast | `String | () => HTMLElement` | `body` |
