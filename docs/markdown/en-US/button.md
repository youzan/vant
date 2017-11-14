## Button

### Install
``` javascript
import { Button } from 'vant';

Vue.component(Button.name, Button);
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
<van-button loading></van-button>
<van-button loading type="primary"></van-button>
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
<van-button type="primary" bottomAction>Button</van-button>

<van-row>
  <van-col span="12">
    <van-button bottomAction>Button</van-button>
  </van-col>
  <van-col span="12">
    <van-button type="primary" bottomAction>Button</van-button>
  </van-col>
</van-row>
```

### API

| Attribute | Description | Type | Default | Accepted Values |
|-----------|-----------|-----------|-------------|-------------|
| type | Type | `String` | `default` | `primary` `danger` |
| size | Size | `String` | `normal` | `large` `small` `mini` |
| tag | Tag | `String` | `button` | - |
| nativeType | Native Type Attribute | `String` | `''` | - |
| diabled | Whether disable button | `Boolean` | `false` | - |
| loading | Whether show loading status | `Boolean` | `false` | - |
| block | Whether to set display block | `Boolean` | `false` | - |
| bottomAction | Whether to be action button | `Boolean` | `false` | - |
