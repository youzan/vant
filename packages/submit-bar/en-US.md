## SubmitBar

### Install
``` javascript
import { SubmitBar } from 'vant';

Vue.use(SubmitBar);
```

### Usage

#### Basic Usage

```html
<van-submit-bar
  :price="3050"
  button-text="Submit"
  @submit="onSubmit"
/>
```

#### Disabled
`submit` event will not triggerd when disabled.

```html
<van-submit-bar
  disabled
  :price="3050"
  button-text="Submit"
  tip="Some tips"
  @submit="onSubmit"
/>
```

#### Loading
`submit` event will not triggerd when loading.

```html
<van-submit-bar
  loading
  :price="3050"
  button-text="Submit"
  @submit="onSubmit"
/>
```

#### Advanced Usage
Use slot to add custom contents.

```html
<van-submit-bar
  :price="3050"
  button-text="Submit"
  @submit="onSubmit"
>
  <van-checkbox v-model="checked">Check</van-checkbox>
  <span slot="tip">
    Some tips, <span @click="onClickEditAddress">Link</span>
  </span>
</van-submit-bar>
```

### API

| Attribute | Description | Type | Default |
|------|------|------|------|
| price | Price |  `Number` | - |
| label | Price label |  `String` | `合计：` |
| button-text | Button text | `String` | - |
| button-type | Button type |  `String` | `danger` |
| tip | Tip |  `String` | - |
| disabled | Whether to disable button |  `Boolean` | `false` |
| loading | Whether to show loading icon |  `Boolean` | `false` |
| currency | Currency symbol |  `String` | `¥` |
| decimal-length | Number of digits to appear after the decimal point | `Number` | `2` |
| safe-area-inset-bottom | Whether to enable bottom safe area adaptation, to enable those features use `viewport-fit=cover` in the `viewport` meta tag | `Boolean` | `false` |

### Event

| Event | Description | Arguments |
|------|------|------|
| submit | Triggerd when click submit button | - |

### Slot

| Name | Description |
|------|------|
| - | Custom left content |
| top | Custom top content |
| tip | Custom tips |
