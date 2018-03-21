## Button

### Install
``` javascript
import { Button } from 'vant';

Vue.use(Button);
```

### Usage

#### Type

```html
<van-button type="default">Default</van-button>
<van-button type="primary">Primary</van-button>
<van-button type="danger">Danger</van-button>
```

#### Size

```html 
<van-button size="large">Large</van-button>
<van-button size="normal">Normal</van-button>
<van-button size="small">Small</van-button>
<van-button size="mini">Mini</van-button>
```

#### Disabled

```html
<van-button disabled>Diabled</van-button>
```

#### Loading

```html 
<van-button loading />
<van-button loading type="primary" />
```

#### Custom Tag
Use `tag` prop to custom button tag

```html 
<van-button tag="a" href="https://www.youzan.com" target="_blank">
  Button
</van-button>
```

#### Action Button

```html 
<van-button type="primary" bottom-action>Button</van-button>

<van-row>
  <van-col span="12">
    <van-button bottom-action>Button</van-button>
  </van-col>
  <van-col span="12">
    <van-button type="primary" bottom-action>Button</van-button>
  </van-col>
</van-row>
```

### API

| Attribute | Description | Type | Default | Accepted Values |
|-----------|-----------|-----------|-------------|-------------|
| type | Type | `String` | `default` | `primary` `danger` |
| size | Size | `String` | `normal` | `large` `small` `mini` |
| text | Text | `String` | - | - |
| tag | Tag | `String` | `button` | - |
| native-type | Native Type Attribute | `String` | `''` | - |
| disabled | Whether disable button | `Boolean` | `false` | - |
| loading | Whether show loading status | `Boolean` | `false` | - |
| block | Whether to set display block | `Boolean` | `false` | - |
| bottom-action | Whether to be action button | `Boolean` | `false` | - |

### Event

| Event | Description | Arguments |
|-----------|-----------|-----------|
| click | Triggered when click button and not disabled or loading | - |
