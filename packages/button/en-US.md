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
<van-button
  loading
  type="danger"
  loading-type="spinner"
  loading-text="Loading..."
/>
```

### Shape

```html 
<van-button square type="primary">Square</van-button>
<van-button round type="danger">Round</van-button>
```

### Icon

```html 
<van-button icon="star-o" type="primary" />
<van-button icon="star-o" type="danger">Button</van-button>
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
| type | Can be set to `primary` `info` `warning` `danger` | `String` | `default` |
| size | Can be set to `large` `small` `mini` | `String` | `normal` |
| text | Text | `String` | - |
| icon | Left Icon | `String` | - |
| tag | HTML Tag | `String` | `button` |
| native-type | Native Type Attribute | `String` | `''` |
| plain | Whether to be plain button | `Boolean` | `false` |
| block | Whether to set display block | `Boolean` | `false` |
| round | Whether to be round button | `Boolean` | `false` |
| square | Whether to be square button | `Boolean` | `false` |
| disabled | Whether to disable button | `Boolean` | `false` |
| loading | Whether show loading status | `Boolean` | `false` |
| loading-text | Loading text | `String` | - |
| loading-type | Loading type, can be set to `spinner` | `String` | `circular` |
| loading-size | Loading icon size | `String` | `20px` |
| url | Link URL | `String` | - |
| to | Target route of the link, same as to of `vue-router` | `String | Object` | - |
| replace | If true, the navigation will not leave a history record | `Boolean` | `false` |

### Events

| Event | Description | Arguments |
|------|------|------|
| click | Triggered when click button and not disabled or loading | event: Event |
| touchstart | Triggered when touch start | event: TouchEvent |
