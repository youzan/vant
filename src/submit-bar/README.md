# SubmitBar

### Install

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
<van-submit-bar loading :price="3050" button-text="Submit" @submit="onSubmit" />
```

### Advanced Usage

Use slot to add custom contents.

```html
<van-submit-bar :price="3050" button-text="Submit" @submit="onSubmit">
  <van-checkbox v-model="checked">Check</van-checkbox>
  <template #tip>
    Some tips, <span @click="onClickEditAddress">Link</span>
  </template>
</van-submit-bar>
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| price | Price | _number_ | - |
| label | Price left label | _string_ | `Total：` |
| suffix-label | Price right label | _string_ | - |
| text-align `v2.3.0` | Price label text align can be set to `left` | _string_ | `right` |
| button-text | Button text | _string_ | - |
| button-type | Button type | _string_ | `danger` |
| button-color `v2.9.1` | Button color | _string_ | - |
| tip | Tip | _string_ | - |
| tip-icon | Icon | _string_ | - |
| currency | Currency symbol | _string_ | `¥` |
| decimal-length | number of digits to appear after the decimal point | _number \| string_ | `2` |
| disabled | Whether to disable button | _boolean_ | `false` |
| loading | Whether to show loading icon | _boolean_ | `false` |
| safe-area-inset-bottom | Whether to enable bottom safe area adaptation | _boolean_ | `true` |

### Events

| Event  | Description                       | Arguments |
| ------ | --------------------------------- | --------- |
| submit | Triggerd when click submit button | -         |

### Slots

| Name    | Description         |
| ------- | ------------------- |
| default | Custom left content |
| top     | Custom top content  |
| tip     | Custom tips         |
