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

```html
<van-button type="primary">Primary</van-button>
<van-button type="success">Success</van-button>
<van-button type="default">Default</van-button>
<van-button type="danger">Danger</van-button>
<van-button type="warning">Warning</van-button>
```

### Plain

```html
<van-button plain type="primary">Primary</van-button>
<van-button plain type="primary">Danger</van-button>
```

### Hairline

```html
<van-button plain hairline type="primary">Hairline</van-button>
<van-button plain hairline type="primary">Hairline</van-button>
```

### Disabled

```html
<van-button disabled type="primary">Disabled</van-button>
<van-button disabled type="primary">Disabled</van-button>
```

### Loading

```html
<van-button loading type="primary" />
<van-button loading type="primary" loading-type="spinner" />
<van-button loading type="primary" loading-text="Loading..." />
```

### Shape

```html
<van-button square type="primary">Square</van-button>
<van-button round type="primary">Round</van-button>
```

### Icon

```html
<van-button icon="plus" type="primary" />
<van-button icon="plus" type="primary">Button</van-button>
<van-button icon="https://img.yzcdn.cn/vant/user-active.png" type="primary">
  Button
</van-button>
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
<van-button color="linear-gradient(to right, #ff6034, #ee0a24)">
  Gradient
</van-button>
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
| loading | Whether show loading status | _boolean_ | `false` |
| loading-text | Loading text | _string_ | - |
| loading-type | Loading type, can be set to `spinner` | _string_ | `circular` |
| loading-size | Loading icon size | _number \| string_ | `20px` |
| url | Link URL | _string_ | - |
| to | Target route of the link, same as using vue-router | _string \| object_ | - |
| replace | If true, the navigation will not leave a history record | _boolean_ | `false` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| click | Emitted when button is clicked and not disabled or loading | _event: MouseEvent_ |
| touchstart | Emitted when button is touched | _event: TouchEvent_ |

### Slots

| Name           | Description         |
| -------------- | ------------------- |
| default        | Default slot        |
| icon `v3.0.18` | Custom icon         |
| loading        | Custom loading icon |

### Types

The component exports the following type definitions:

```ts
import type {
  ButtonType,
  ButtonSize,
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
| --van-button-default-background-color | _var(--van-white)_ | - |
| --van-button-default-border-color | _var(--van-border-color)_ | - |
| --van-button-primary-color | _var(--van-white)_ | - |
| --van-button-primary-background-color | _var(--van-primary-color)_ | - |
| --van-button-primary-border-color | _var(--van-primary-color)_ | - |
| --van-button-success-color | _var(--van-white)_ | - |
| --van-button-success-background-color | _var(--van-success-color)_ | - |
| --van-button-success-border-color | _var(--van-success-color)_ | - |
| --van-button-danger-color | _var(--van-white)_ | - |
| --van-button-danger-background-color | _var(--van-danger-color)_ | - |
| --van-button-danger-border-color | _var(--van-danger-color)_ | - |
| --van-button-warning-color | _var(--van-white)_ | - |
| --van-button-warning-background-color | _var(--van-warning-color)_ | - |
| --van-button-warning-border-color | _var(--van-warning-color)_ | - |
| --van-button-border-width | _var(--van-border-width-base)_ | - |
| --van-button-border-radius | _var(--van-border-radius-sm)_ | - |
| --van-button-round-border-radius | _var(--van-border-radius-max)_ | - |
| --van-button-plain-background-color | _var(--van-white)_ | - |
| --van-button-disabled-opacity | _var(--van-disabled-opacity)_ | - |
| --van-button-icon-size | _1.2em_ | - |
| --van-button-loading-icon-size | _20px_ | - |
