## Notify

### Install

``` javascript
import { Notify } from 'vant';

Vue.use(Notify);
```

### Usage

#### Basic Usage

```js
Notify('Notify Message');
```

#### Custom Config

```js
Notify({
  message: 'Notify Message',
  duration: 1000,
  background: '#1989fa'
});
```

#### $notify Method

After import the Notify component, the $notify method is automatically mounted on Vue.prototype, making it easy to call within a vue component.

```js
export default {
  mounted() {
    this.$notify('Notify Message');
  }
}
```

### Methods

| Methods | Attribute | Return value | Description |
|------|------|------|------|
| Notify | `options | message` | notify instance | Show notify |
| Notify.clear | - | `void` | Close notify |
| Notify.setDefaultOptions | `options` | `void` | Set default options of all notifies |
| Notify.resetDefaultOptions | - | `void` | Reset default options of all notifies |

### API

| Attribute | Description | Type | Default |
|------|------|------|------|
| message | Message | `String` | - |
| duration | Duration(ms), won't disappear if value is 0 | `Number` | `3000` |
| color | Message color | `String` | `#fff` | |
| background | Background color | `String` | `#f44` |
| className | Custom className | `String | Array | Object` | - |
