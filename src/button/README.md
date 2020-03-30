# Button

### Install

```js
import Vue from 'vue';
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
<van-button plain type="info">Danger</van-button>
```

### Hairline

```html
<van-button plain hairline type="primary">Hairline</van-button>
<van-button plain hairline type="info">Hairline</van-button>
```

### Disabled

```html
<van-button disabled type="primary">Diabled</van-button>
<van-button disabled type="info">Diabled</van-button>
```

### Loading

```html 
<van-button loading type="primary" />
<van-button loading type="primary" loading-type="spinner" />
<van-button loading type="info" loading-text="Loading..." />
```

### Shape

```html 
<van-button square type="primary">Square</van-button>
<van-button round type="info">Round</van-button>
```

### Icon

```html 
<van-button icon="star-o" type="primary" />
<van-button icon="star-o" type="primary">Button</van-button>
<van-button icon="https://img.yzcdn.cn/vant/logo.png" type="info">Button</van-button>
```

### Size

```html 
<van-button type="primary" size="large">Large</van-button>
<van-button type="primary" size="normal">Normal</van-button>
<van-button type="primary" size="small">Small</van-button>
<van-button type="primary" size="mini">Mini</van-button>
```

### Block Element

```html
<van-button type="primary" block>Block Element</van-button>
```

### Route

```html
<van-button type="primary" url="/vant/mobile.html">URL</van-button>
<van-button type="primary" to="index">Vue Router</van-button>
```

### Custom Color

```html
<van-button color="#7232dd">Pure</van-button>
<van-button color="#7232dd" plain>Pure</van-button>
<van-button color="linear-gradient(to right, #4bb0ff, #6149f6)">Gradient</van-button>
```

## API

### Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| type | Can be set to `primary` `info` `warning` `danger` | *string* | `default` |
| size | Can be set to `large` `small` `mini` | *string* | `normal` |
| text | Text | *string* | - |
| color `v2.1.8` | Color, support linear-gradient | *string* | - |
| icon | Left Icon | *string* | - |
| icon-prefix `v2.6.0` | Icon className prefix | *string* | `van-icon` |
| tag | HTML Tag | *string* | `button` |
| native-type | Native Type Attribute | *string* | `''` |
| plain | Whether to be plain button | *boolean* | `false` |
| block | Whether to set display block | *boolean* | `false` |
| round | Whether to be round button | *boolean* | `false` |
| square | Whether to be square button | *boolean* | `false` |
| disabled | Whether to disable button | *boolean* | `false` |
| loading | Whether show loading status | *boolean* | `false` |
| loading-text | Loading text | *string* | - |
| loading-type | Loading type, can be set to `spinner` | *string* | `circular` |
| loading-size | Loading icon size | *string* | `20px` |
| url | Link URL | *string* | - |
| to | Target route of the link, same as to of vue-router | *string \| object* | - |
| replace | If true, the navigation will not leave a history record | *boolean* | `false` |

### Events

| Event | Description | Arguments |
|------|------|------|
| click | Triggered when click button and not disabled or loading | *event: Event* |
| touchstart | Triggered when touch start | *event: TouchEvent* |
