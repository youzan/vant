## Button

### Install
``` javascript
import { Button } from 'vant';

Vue.use(Button);
```

### Usage

#### Type

```html
<van-button type="primary">Primary</van-button>
<van-button type="danger">Danger</van-button>
<van-button type="default">Default</van-button>
<van-button type="warning">Warning</van-button>
```

#### Plain

```html
<van-button plain type="primary">Primary</van-button>
<van-button plain type="danger">Danger</van-button>
```

#### Disabled

```html
<van-button disabled type="primary">Diabled</van-button>
<van-button disabled type="danger">Diabled</van-button>
```

#### Loading

```html 
<van-button loading type="primary" />
<van-button loading type="primary" />
```

#### Shape

```html 
<van-button square type="primary">Square</van-button>
<van-button round type="danger">Round</van-button>
```

#### Size

```html 
<van-button size="large">Large</van-button>
<van-button size="normal">Normal</van-button>
<van-button size="small">Small</van-button>
<van-button size="mini">Mini</van-button>
```

### API

| Attribute | Description | Type | Default |
|------|------|------|------|
| type | Can be set to `primary` `warning` `danger` | `String` | `default` |
| size | Can be set to `large` `small` `mini` | `String` | `normal` |
| text | Text | `String` | - |
| tag | Tag | `String` | `button` |
| native-type | Native Type Attribute | `String` | `''` |
| plain | Whether to be plain button | `Boolean` | `false` |
| disabled | Whether to disable button | `Boolean` | `false` |
| loading | Whether show loading status | `Boolean` | `false` |
| block | Whether to set display block | `Boolean` | `false` |
| round | Whether to be round button | `Boolean` | `false` |
| square | Whether to be square button | `Boolean` | `false` |

### Event

| Event | Description | Arguments |
|------|------|------|
| click | Triggered when click button and not disabled or loading | - |
