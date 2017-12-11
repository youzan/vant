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
  buttonText="Submit"
  @submit="onSubmit"
/>
```

#### Disabled
`submit` event will not triggerd when disabled.

```html
<van-submit-bar
  disabled
  :price="3050"
  buttonText="Submit"
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
  buttonText="Submit"
  @submit="onSubmit"
/>
```

#### Advanced Usage
Use slot to add custom contents.

```html
<van-submit-bar
  :price="3050"
  buttonText="Submit"
  @submit="onSubmit"
>
  <van-checkbox v-model="checked">Check</van-checkbox>
  <span slot="tip">
    Some tips, <span @click="onClickEditAddress">Link</span>
  </span>
</van-submit-bar>
```

### API

| Attribute | Description | Type | Default | Accepted Values |
|-----------|-----------|-----------|-------------|-------------|
| price | Price |  `Number` | - | - |
| label | Price label |  `String` | `合计：` | - |
| buttonText | Button text | `String` | - | - |
| buttonType | Button type |  `String` | `danger` | - |
| tip | Tip |  `String` | - | - |
| disabled | Whether to disable button |  `Boolean` | `false` | - |
| loading | Whether to show loading icon |  `Boolean` | `false` | - |

### Event

| Event | Description | Attribute |
|-----------|-----------|-----------|
| submit | Triggerd when click submit button | - |

### Slot

| Name | Description |
|-----------|-----------|
| default | Custom left content |
| tip | Custom tips |
