# Button

### Install

``` javascript
import { Button } from 'vant';

Vue.use(Button);
```

## Usage

### Type

```html
<van-button type="default">Default</van-button>
<van-button type="primary">Primary</van-button>
<van-button type="info">Info</van-button>
<van-button type="danger">Danger</van-button>
<van-button type="warning">Warning</van-button>
```

### Plain

```html
<van-button plain type="primary">Primary</van-button>
<van-button plain type="danger">Danger</van-button>
```

### Hairline

```html
<van-button plain hairline type="primary">Hairline</van-button>
<van-button plain hairline type="danger">Hairline</van-button>
```

### Disabled

```html
<van-button disabled type="primary">Diabled</van-button>
<van-button disabled type="danger">Diabled</van-button>
```

### Loading

```html 
<van-button loading type="primary" />
<van-button loading type="primary" loading-type="spinner" />
<van-button loading type="danger" loading-text="Loading..." />
```

### Shape

```html 
<van-button square type="primary">Square</van-button>
<van-button round type="danger">Round</van-button>
```

### Icon

```html 
<van-button icon="star-o" type="primary" />
<van-button icon="star-o" type="primary">Button</van-button>
<van-button icon="https://img.yzcdn.cn/vant/logo.png" type="danger">Button</van-button>
```

### Size

```html 
<van-button type="primary" size="large">Large</van-button>
<van-button type="primary" size="normal">Normal</van-button>
<van-button type="primary" size="small">Small</van-button>
<van-button type="primary" size="mini">Mini</van-button>
```

## API

### Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| type | Can be set to `primary` `info` `warning` `danger` | `string` | `default` |
| size | Can be set to `large` `small` `mini` | `string` | `normal` |
| text | Text | `string` | - |
| icon | Left Icon | `string` | - |
| tag | HTML Tag | `string` | `button` |
| native-type | Native Type Attribute | `string` | `''` |
| plain | Whether to be plain button | `boolean` | `false` |
| block | Whether to set display block | `boolean` | `false` |
| round | Whether to be round button | `boolean` | `false` |
| square | Whether to be square button | `boolean` | `false` |
| disabled | Whether to disable button | `boolean` | `false` |
| loading | Whether show loading status | `boolean` | `false` |
| loading-text | Loading text | `string` | - |
| loading-type | Loading type, can be set to `spinner` | `string` | `circular` |
| loading-size | Loading icon size | `string` | `20px` |
| url | Link URL | `string` | - |
| to | Target route of the link, same as to of vue-router | `string | object` | - |
| replace | If true, the navigation will not leave a history record | `boolean` | `false` |

### Events

| Event | Description | Arguments |
|------|------|------|
| click | Triggered when click button and not disabled or loading | event: Event |
| touchstart | Triggered when touch start | event: TouchEvent |
