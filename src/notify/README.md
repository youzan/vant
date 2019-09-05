# Notify

### Install

``` javascript
import Vue from 'vue';
import { Notify } from 'vant';

Vue.use(Notify);
```

## Usage

### Basic Usage

```js
Notify('Notify Message');
```

### Notify Type

```js
Notify({ type: 'primary', message: 'Notify Message' });
Notify({ type: 'success', message: 'Notify Message' });
Notify({ type: 'danger', message: 'Notify Message' });
Notify({ type: 'warning', message: 'Notify Message' });
```

### Custom Notify

```js
Notify({
  message: 'Custom Color',
  color: '#ad0000',
  background: '#ffe1e1'
});

Notify({
  message: 'Custom Duration',
  duration: 1000
});
```

### $notify Method

After import the Notify component, the $notify method is automatically mounted on Vue.prototype, making it easy to call within a vue component.

```js
export default {
  mounted() {
    this.$notify('Notify Message');
  }
}
```

## API

### Methods

| Methods | Attribute | Return value | Description |
|------|------|------|------|
| Notify | `options | message` | notify instance | Show notify |
| Notify.clear | - | `void` | Close notify |
| Notify.setDefaultOptions | `options` | `void` | Set default options of all notifies |
| Notify.resetDefaultOptions | - | `void` | Reset default options of all notifies |

### Options

| Attribute | Description | Type | Default | Version |
|------|------|------|------|------|
| type | Can be set to `primary` `info` `warning` | *string* | `danger` | - |
| message | Message | *string* | - | - |
| duration | Duration(ms), won't disappear if value is 0 | *number* | `3000` | - |
| color | Message color | *string* | `#fff` | | - |
| background | Background color | *string* | `#ee0a24` | - |
| className | Custom className | *any* | - | - |
| onClick | Callback function after click | *Function* | - | - |
| onOpened | Callback function after opened | *Function* | - | - |
| onClose | Callback function after close | *Function* | - | - |
