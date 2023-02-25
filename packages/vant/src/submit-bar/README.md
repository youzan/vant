# SubmitBar

### Intro

Used to display the order amount and submit the order.

### Install

Register component globally via `app.use`, refer to [Component Registration](#/en-US/advanced-usage#zu-jian-zhu-ce) for more registration ways.

```js
import { createApp } from 'vue';
import { SubmitBar } from 'vant';

const app = createApp();
app.use(SubmitBar);
```

## Usage

### Basic Usage

```html
<van-submit-bar :price="3050" button-text="Submit" @submit="onSubmit" />
```

```js
import { showToast } from 'vant';

export default {
  setup() {
    const onSubmit = () => showToast('Submit');
    return {
      onSubmit,
    };
  },
};
```

### Disabled

`submit` event will not triggered when disabled.

```html
<van-submit-bar
  disabled
  :price="3050"
  button-text="Submit"
  tip="Some tips"
  tip-icon="info-o"
  @submit="onSubmit"
/>
```

### Loading

`submit` event will not triggered when loading.

```html
<van-submit-bar loading :price="3050" button-text="Submit" @submit="onSubmit" />
```

### Advanced Usage

Use slot to add custom contents.

```html
<van-submit-bar :price="3050" button-text="Submit" @submit="onSubmit">
  <van-checkbox v-model="checked">Check</van-checkbox>
  <template #tip> Some tips, <span @click="onClickLink">Link</span> </template>
</van-submit-bar>
```

```js
import { showToast } from 'vant';

export default {
  setup() {
    const onSubmit = () => showToast('Submit');
    const onClickLink = () => showToast('Click Link');
    return {
      onSubmit,
      onClickLink,
    };
  },
};
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| price | Price | _number_ | - |
| decimal-length | Price decimal length | _number \| string_ | `2` |
| label | Price left label | _string_ | `Total: ` |
| suffix-label | Price right label | _string_ | - |
| text-align | Price label text align can be set to `left` | _string_ | `right` |
| button-text | Button text | _string_ | - |
| button-type | Button type | _string_ | `danger` |
| button-color | Button color | _string_ | - |
| tip | Tip | _string_ | - |
| tip-icon | Tip left icon | _string_ | - |
| currency | Currency symbol | _string_ | `¥` |
| disabled | Whether to disable button | _boolean_ | `false` |
| loading | Whether to show loading icon | _boolean_ | `false` |
| safe-area-inset-bottom | Whether to enable bottom safe area adaptation | _boolean_ | `true` |
| placeholder | Whether to generate a placeholder element | _boolean_ | `false` |

### Events

| Event  | Description                        | Arguments |
| ------ | ---------------------------------- | --------- |
| submit | Triggered when click submit button | -         |

### Slots

| Name    | Description         |
| ------- | ------------------- |
| default | Custom left content |
| button  | Custom button       |
| top     | Custom top content  |
| tip     | Custom tips         |

### Types

The component exports the following type definitions:

```ts
import type { SubmitBarProps, SubmitBarTextAlign } from 'vant';
```

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/config-provider).

| Name | Default Value | Description |
| --- | --- | --- |
| --van-submit-bar-height | _50px_ | - |
| --van-submit-bar-z-index | _100_ | - |
| --van-submit-bar-background | _var(--van-background-2)_ | - |
| --van-submit-bar-button-width | _110px_ | - |
| --van-submit-bar-price-color | _var(--van-danger-color)_ | - |
| --van-submit-bar-price-font-size | _var(--van-font-size-sm)_ | - |
| --van-submit-bar-price-integer-font-size | _20px_ | - |
| --van-submit-bar-price-font | _var(--van-price-font)_ | - |
| --van-submit-bar-text-color | _var(--van-text-color)_ | - |
| --van-submit-bar-text-font-size | _var(--van-font-size-md)_ | - |
| --van-submit-bar-tip-padding | _var(--van-padding-xs) var(--van-padding-sm)_ | - |
| --van-submit-bar-tip-font-size | _var(--van-font-size-sm)_ | - |
| --van-submit-bar-tip-line-height | _1.5_ | - |
| --van-submit-bar-tip-color | _var(--van-orange-dark)_ | - |
| --van-submit-bar-tip-background | _var(--van-orange-light)_ | - |
| --van-submit-bar-tip-icon-size | _12px_ | - |
| --van-submit-bar-button-height | _40px_ | - |
| --van-submit-bar-padding | _0 var(--van-padding-md)_ | - |
