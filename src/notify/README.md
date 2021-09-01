# Notify

### Intro

The display message prompt is at the top of the page, and supports two methods: function call and component call.

### Install

Register component globally via `app.use`, refer to [Component Registration](#/en-US/advanced-usage#zu-jian-zhu-ce) for more registration ways.

```js
import { createApp } from 'vue';
import { Notify } from 'vant';

const app = createApp();
app.use(Notify);
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

After registering the Notify component through `app.use`, the `$notify` method will be automatically mounted on all subcomponents of the app.

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
<van-notify v-model:show="show" type="success">
  <van-icon name="bell" style="margin-right: 4px;" />
  <span>Content</span>
</van-notify>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const show = ref(false);

    const showNotify = () => {
      show.value = true;
      setTimeout(() => {
        show.value = false;
      }, 2000);
    };

    return {
      show,
      showNotify,
    };
  },
};
```

## API

### Methods

| Methods | Attribute | Return value | Description |
| --- | --- | --- | --- |
| Notify | `options \| message` | notify instance | Show notify |
| Notify.clear | - | `void` | Close notify |
| Notify.setDefaultOptions | `options` | `void` | Set default options of all notifies |
| Notify.resetDefaultOptions | - | `void` | Reset default options of all notifies |

### Options

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| type | Can be set to `primary` `success` `warning` | _string_ | `danger` |
| message | Message | _string_ | - |
| duration | Duration(ms), won't disappear if value is 0 | _number \| string_ | `3000` |
| color | Message color | _string_ | `white` |
| background | Background color | _string_ | - |
| className | Custom className | _string \| Array \| object_ | - |
| lockScroll `v3.0.7` | Whether to lock background scroll | _boolean_ | `false` |
| onClick | Callback function after click | _(event: MouseEvent) => void_ | - |
| onOpened | Callback function after opened | _() => void_ | - |
| onClose | Callback function after close | _() => void_ | - |

### Types

The component exports the following type definitions:

```ts
import type { NotifyType, NotifyOptions } from 'vant';
```

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/config-provider).

| Name | Default Value | Description |
| --- | --- | --- |
| --van-notify-text-color | _var(--van-white)_ | - |
| --van-notify-padding | _var(--van-padding-xs) var(--van-padding-md)_ | - |
| --van-notify-font-size | _var(--van-font-size-md)_ | - |
| --van-notify-line-height | _var(--van-line-height-md)_ | - |
| --van-notify-primary-background-color | _var(--van-primary-color)_ | - |
| --van-notify-success-background-color | _var(--van-success-color)_ | - |
| --van-notify-danger-background-color | _var(--van-danger-color)_ | - |
| --van-notify-warning-background-color | _var(--van-warning-color)_ | - |
