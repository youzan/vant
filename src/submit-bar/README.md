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
import { Toast } from 'vant';

export default {
  setup() {
    const onSubmit = () => Toast('Submit');
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
import { Toast } from 'vant';

export default {
  setup() {
    const onSubmit = () => Toast('Submit');
    const onClickLink = () => Toast('Click Link');
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
| label | Price left label | _string_ | `Total：` |
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

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/config-provider).

| Name | Default Value | Description |
| --- | --- | --- |
| --van-submit-bar-height | `50px` | - |
| --van-submit-bar-z-index | `100` | - |
| --van-submit-bar-background-color | `var(--van-white)` | - |
| --van-submit-bar-button-width | `110px` | - |
| --van-submit-bar-price-color | `var(--van-red)` | - |
| --van-submit-bar-text-color | `var(--van-text-color)` | - |
| --van-submit-bar-text-font-size | `var(--van-font-size-md)` | - |
| --van-submit-bar-tip-padding | `var(--van-padding-xs) var(--van-padding-sm)` | - |
| --van-submit-bar-tip-font-size | `var(--van-font-size-sm)` | - |
| --van-submit-bar-tip-line-height | `1.5` | - |
| --van-submit-bar-tip-color | `#f56723` | - |
| --van-submit-bar-tip-background-color | `#fff7cc` | - |
| --van-submit-bar-tip-icon-size | `12px` | - |
| --van-submit-bar-button-height | `40px` | - |
| --van-submit-bar-padding | `0 var(--van-padding-md)` | - |
| --van-submit-bar-price-font-size | `var(--van-font-size-sm)` | - |
| --van-submit-bar-price-integer-font-size | `20px` | - |
| --van-submit-bar-price-font-family | `var(--van-price-integer-font-family)` | - |
