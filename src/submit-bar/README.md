# SubmitBar

### Install

```js
import Vue from 'vue';
import { SubmitBar } from 'vant';

Vue.use(SubmitBar);
```

## Usage

### Basic Usage

```html
<van-submit-bar
  :price="3050"
  button-text="Submit"
  @submit="onSubmit"
/>
```

### Disabled

`submit` event will not triggerd when disabled.

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

`submit` event will not triggerd when loading.

```html
<van-submit-bar
  loading
  :price="3050"
  button-text="Submit"
  @submit="onSubmit"
/>
```

### Advanced Usage

Use slot to add custom contents.

```html
<van-submit-bar
  :price="3050"
  button-text="Submit"
  @submit="onSubmit"
>
  <van-checkbox v-model="checked">Check</van-checkbox>
  <template #tip>
    Some tips, <span @click="onClickEditAddress">Link</span>
  </template>
</van-submit-bar>
```

## API

### Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| price | Price | *number* | - |
| label | Price left label | *string* | `Total：` |
| suffix-label | Price right label | *string* | - |
| text-align `v2.3.0` | Price label text align can be set to `left` | *string* | `right` |
| button-text | Button text | *string* | - |
| button-type | Button type | *string* | `danger` |
| tip | Tip | *string* | - |
| tip-icon | Icon |  *string* | - |
| currency | Currency symbol | *string* | `¥` |
| decimal-length | number of digits to appear after the decimal point | *number \| string* | `2` |
| disabled | Whether to disable button | *boolean* | `false` |
| loading | Whether to show loading icon | *boolean* | `false` |
| safe-area-inset-bottom | Whether to enable bottom safe area adaptation | *boolean* | `true` |

### Events

| Event | Description | Arguments |
|------|------|------|
| submit | Triggerd when click submit button | - |

### Slots

| Name | Description |
|------|------|
| default | Custom left content |
| top | Custom top content |
| tip | Custom tips |
