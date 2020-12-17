# Notify

### Install

```js
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
  background: '#ffe1e1',
});

Notify({
  message: 'Custom Duration',
  duration: 1000,
});
```

### Global Method

After import the Notify component, the `$notify` method is automatically mounted on Vue.prototype, making it easy to call within a vue component.

```js
export default {
  mounted() {
    this.$notify('Notify Message');
  },
};
```

### Component Call

```html
<van-button type="primary" text="Component Call" @click="showNotify" />
<van-notify v-model="show" type="success">
  <van-icon name="bell" style="margin-right: 4px;" />
  <span>Content</span>
</van-notify>
```

```js
export default {
  data() {
    return {
      show: false,
    };
  },
  methods: {
    showNotify() {
      this.show = true;
      setTimeout(() => {
        this.show = false;
      }, 2000);
    },
  },
};
```

## API

### Methods

| Methods | Attribute | Return value | Description |
| --- | --- | --- | --- |
| Notify | `options | message` | notify instance | Show notify |
| Notify.clear | - | `void` | Close notify |
| Notify.setDefaultOptions | `options` | `void` | Set default options of all notifies |
| Notify.resetDefaultOptions | - | `void` | Reset default options of all notifies |

### Options

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| type | Can be set to `primary` `success` `warning` | _string_ | `danger` |
| message | Message | _string_ | - |
| duration | Duration(ms), won't disappear if value is 0 | _number \| string_ | `3000` |
| color | Message color | _string_ | `white` |  |
| background | Background color | _string_ | - |
| className | Custom className | _any_ | - |
| onClick | Callback function after click | _Function_ | - |
| onOpened | Callback function after opened | _Function_ | - |
| onClose | Callback function after close | _Function_ | - |

### Less Variables

How to use: [Custom Theme](#/en-US/theme).

| Name                             | Default Value             | Description |
| -------------------------------- | ------------------------- | ----------- |
| @notify-text-color               | `@white`                  | -           |
| @notify-padding                  | `@padding-xs @padding-md` | -           |
| @notify-font-size                | `@font-size-md`           | -           |
| @notify-line-height              | `@line-height-md`         | -           |
| @notify-primary-background-color | `@blue`                   | -           |
| @notify-success-background-color | `@green`                  | -           |
| @notify-danger-background-color  | `@red`                    | -           |
| @notify-warning-background-color | `@orange`                 | -           |
