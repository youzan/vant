# Button

### Intro

Buttons are used to trigger an action, such as submitting a form.

### Install

Register component globally via `app.use`, refer to [Component Registration](#/en-US/advanced-usage#zu-jian-zhu-ce) for more registration ways.

```js
import { createApp } from 'vue';
import { Button } from 'vant';

const app = createApp();
app.use(Button);
```

## Usage

### Type

The Button supports five types: `default`, `primary`, `success`, `warning`, and `danger`. The default type is `default`.

```html
<van-button type="primary">Primary</van-button>
<van-button type="success">Success</van-button>
<van-button type="default">Default</van-button>
<van-button type="danger">Danger</van-button>
<van-button type="warning">Warning</van-button>
```

### Plain

Use the `plain` prop to set the button as a plain button. The text color of a plain button is the same as the button color, and the background is white.

```html
<van-button plain type="primary">Plain</van-button>
<van-button plain type="success">Plain</van-button>
```

### Hairline

Setting the `hairline` prop to display a border with a thickness of 0.5px.

```html
<van-button plain hairline type="primary">Hairline</van-button>
<van-button plain hairline type="success">Hairline</van-button>
```

### Disabled

Use the `disabled` prop to disable the button. In the disabled state, the button cannot be clicked.

```html
<van-button disabled type="primary">Disabled</van-button>
<van-button disabled type="success">Disabled</van-button>
```

### Loading

Set the button as a loading state using the `loading` prop. In the loading state, the button text is hidden by default. You can set the text for the loading state using the `loading-text` property.

```html
<van-button loading type="primary" />
<van-button loading type="primary" loading-type="spinner" />
<van-button loading type="success" loading-text="Loading..." />
```

### Shape

Use the `square` prop to set the button as square-shaped and the `round` prop to set it as round-shaped.

```html
<van-button square type="primary">Square</van-button>
<van-button round type="success">Round</van-button>
```

### Icon

Use the `icon` prop to set the button icon. It supports all icons from the Icon component or you can pass a custom icon URL.

```html
<van-button icon="plus" type="primary" />
<van-button icon="plus" type="primary">Button</van-button>
<van-button
  icon="https://fastly.jsdelivr.net/npm/@vant/assets/user-active.png"
  type="primary"
>
  Button
</van-button>
```

### Size

Four sizes are supported: `large`, `normal`, `small`, and `mini`. The default size is `normal`.

```html
<van-button type="primary" size="large">Large</van-button>
<van-button type="primary" size="normal">Normal</van-button>
<van-button type="primary" size="small">Small</van-button>
<van-button type="primary" size="mini">Mini</van-button>
```

### Block Element

By default, the button is an inline-block element. Use the `block` prop to change the button element type to a block-level element.

```html
<van-button type="primary" block>Block Element</van-button>
```

### Route

You can use the `url` prop for URL redirection or the `to` prop for route navigation.

```html
<van-button type="primary" url="https://github.com">URL</van-button>
<van-button type="primary" to="index">Vue Router</van-button>
```

### Custom Color

Customize the button color using the `color` prop.

```html
<van-button color="#7232dd">Pure</van-button>
<van-button color="#7232dd" plain>Pure</van-button>
<van-button color="linear-gradient(to right, #ff6034, #ee0a24)">
  Gradient
</van-button>
```

### Animated Button

With the combination of the Button and [Swipe component](<(/#/en-US/swipe)>), you can create an animated button effect with vertical scrolling.

```html
<van-button type="danger" round>
  <van-swipe
    vertical
    class="notice-swipe"
    :autoplay="2000"
    :touchable="false"
    :show-indicators="false"
  >
    <van-swipe-item>Do Task</van-swipe-item>
    <van-swipe-item>Lottery</van-swipe-item>
  </van-swipe>
</van-button>

<style>
  .notice-swipe {
    height: 40px;
    line-height: 40px;
  }
</style>
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| type | Can be set to `primary` `success` `warning` `danger` | _string_ | `default` |
| size | Can be set to `large` `small` `mini` | _string_ | `normal` |
| text | Text | _string_ | - |
| color | Color, support linear-gradient | _string_ | - |
| icon | Left Icon | _string_ | - |
| icon-prefix | Icon className prefix | _string_ | `van-icon` |
| icon-position | Icon position, can be set to `right` | _string_ | `left` |
| tag | HTML Tag | _string_ | `button` |
| native-type | Native Type Attribute | _string_ | `button` |
| plain | Whether to be plain button | _boolean_ | `false` |
| block | Whether to set display block | _boolean_ | `false` |
| round | Whether to be round button | _boolean_ | `false` |
| square | Whether to be square button | _boolean_ | `false` |
| disabled | Whether to disable button | _boolean_ | `false` |
| loading | Whether to show loading status | _boolean_ | `false` |
| loading-text | Loading text | _string_ | - |
| loading-type | Loading type, can be set to `spinner` | _string_ | `circular` |
| loading-size | Loading icon size | _number \| string_ | `20px` |
| url | Link URL | _string_ | - |
| to | The target route should navigate to when clicked on, same as the [to prop](https://router.vuejs.org/api/interfaces/RouterLinkProps.html#Properties-to) of Vue Router | _string \| object_ | - |
| replace | If true, the navigation will not leave a history record | _boolean_ | `false` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| click | Emitted when button is clicked and not disabled or loading | _event: MouseEvent_ |
| touchstart | Emitted when button is touched | _event: TouchEvent_ |

### Slots

| Name    | Description         |
| ------- | ------------------- |
| default | Default slot        |
| icon    | Custom icon         |
| loading | Custom loading icon |

### Types

The component exports the following type definitions:

```ts
import type {
  ButtonType,
  ButtonSize,
  ButtonProps,
  ButtonNativeType,
  ButtonIconPosition,
} from 'vant';
```

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/config-provider).

| Name | Default Value | Description |
| --- | --- | --- |
| --van-button-mini-height | _24px_ | - |
| --van-button-mini-padding | _0 var(--van-padding-base)_ | - |
| --van-button-mini-font-size | _var(--van-font-size-xs)_ | - |
| --van-button-small-height | _32px_ | - |
| --van-button-small-padding | _0 var(--van-padding-xs)_ | - |
| --van-button-small-font-size | _var(--van-font-size-sm)_ | - |
| --van-button-normal-font-size | _var(--van-font-size-md)_ | - |
| --van-button-normal-padding | _0 15px_ | - |
| --van-button-large-height | _50px_ | - |
| --van-button-default-height | _44px_ | - |
| --van-button-default-line-height | _1.2_ | - |
| --van-button-default-font-size | _var(--van-font-size-lg)_ | - |
| --van-button-default-color | _var(--van-text-color)_ | - |
| --van-button-default-background | _var(--van-background-2)_ | - |
| --van-button-default-border-color | _var(--van-gray-4)_ | - |
| --van-button-primary-color | _var(--van-white)_ | - |
| --van-button-primary-background | _var(--van-primary-color)_ | - |
| --van-button-primary-border-color | _var(--van-primary-color)_ | - |
| --van-button-success-color | _var(--van-white)_ | - |
| --van-button-success-background | _var(--van-success-color)_ | - |
| --van-button-success-border-color | _var(--van-success-color)_ | - |
| --van-button-danger-color | _var(--van-white)_ | - |
| --van-button-danger-background | _var(--van-danger-color)_ | - |
| --van-button-danger-border-color | _var(--van-danger-color)_ | - |
| --van-button-warning-color | _var(--van-white)_ | - |
| --van-button-warning-background | _var(--van-warning-color)_ | - |
| --van-button-warning-border-color | _var(--van-warning-color)_ | - |
| --van-button-border-width | _var(--van-border-width)_ | - |
| --van-button-radius | _var(--van-radius-md)_ | - |
| --van-button-round-radius | _var(--van-radius-max)_ | - |
| --van-button-plain-background | _var(--van-white)_ | - |
| --van-button-disabled-opacity | _var(--van-disabled-opacity)_ | - |
| --van-button-icon-size | _1.2em_ | - |
| --van-button-loading-icon-size | _20px_ | - |
