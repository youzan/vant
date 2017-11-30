## Toast

### Install

```javascript
import { Toast } from 'vant';
```

### Usage

#### Text

```javascript
Toast('Some messages');
```


#### Loading

```javascript
Toast.loading({ mask: true });
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

### Methods

| Methods | Attribute | Return value | Description |
|-----------|-----------|-----------|-------------|
| Toast | `options | message` | toast instance | Show toast |
| Toast.loading | `options | message` | toast instance | Show loading toast |
| Toast.success | `options | message` | toast instance | Show success toast |
| Toast.fail | `options | message` | toast instance | Show fail toast |
| Toast.clear | - | `void` | Close  |

### Options

| Attribute | Description | Type | Default | Accepted Values |
|-----------|-----------|-----------|-------------|-------------|
| type | Type | `String` | `text` | `loading` `success` `fail` `html` |
| message | Message | `String` | `''` | - |
| position | Position | `String` | `middle` | `top` `bottom` |
| mask | Whether to show mask | `Boolean` | `false` | - |
| forbidClick | Whether to forbid click background | `Boolean` | `false` | - |
| duration | Toast duration(ms) | `Number` | `3000` | Toast won't disappear if value is 0 |
