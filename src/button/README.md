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
<van-button type="primary">Primary</van-button>
<van-button type="info">Info</van-button>
<van-button type="default">Default</van-button>
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
<van-button disabled type="primary">Disabled</van-button>
<van-button disabled type="info">Disabled</van-button>
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
<van-button icon="plus" type="primary" />
<van-button icon="plus" type="primary">Button</van-button>
<van-button icon="https://img01.yzcdn.cn/vant/user-active.png" type="info">
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
| type | Can be set to `primary` `info` `warning` `danger` | _string_ | `default` |
| size | Can be set to `large` `small` `mini` | _string_ | `normal` |
| text | Text | _string_ | - |
| color | Color, support linear-gradient | _string_ | - |
| icon | Left Icon | _string_ | - |
| icon-prefix `v2.6.0` | Icon className prefix | _string_ | `van-icon` |
| icon-position `v2.10.7` | Icon position, can be set to `right` | _string_ | `left` |
| tag | HTML Tag | _string_ | `button` |
| native-type | Native Type Attribute | _string_ | `''` |
| plain | Whether to be plain button | _boolean_ | `false` |
| block | Whether to set display block | _boolean_ | `false` |
| round | Whether to be round button | _boolean_ | `false` |
| square | Whether to be square button | _boolean_ | `false` |
| disabled | Whether to disable button | _boolean_ | `false` |
| loading | Whether show loading status | _boolean_ | `false` |
| loading-text | Loading text | _string_ | - |
| loading-type | Loading type, can be set to `spinner` | _string_ | `circular` |
| loading-size | Loading icon size | _string_ | `20px` |
| url | Link URL | _string_ | - |
| to | Target route of the link, same as using vue-router | _string \| object_ | - |
| replace | If true, the navigation will not leave a history record | _boolean_ | `false` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| click | Emitted when button is clicked and not disabled or loading | _event: Event_ |
| touchstart | Emitted when button is touched | _event: TouchEvent_ |

### Slots

| Name              | Description         |
| ----------------- | ------------------- |
| default           | Default slot        |
| icon `v2.12.21`   | Custom icon         |
| loading `v2.10.1` | Custom loading icon |

### Less Variables

How to use: [Custom Theme](#/en-US/theme).

| Name                             | Default Value        | Description |
| -------------------------------- | -------------------- | ----------- |
| @button-mini-height              | `24px`               | -           |
| @button-mini-font-size           | `@font-size-xs`      | -           |
| @button-small-height             | `32px`               | -           |
| @button-small-font-size          | `@font-size-sm`      | -           |
| @button-normal-font-size         | `@font-size-md`      | -           |
| @button-large-height             | `50px`               | -           |
| @button-default-height           | `44px`               | -           |
| @button-default-line-height      | `1.2`                | -           |
| @button-default-font-size        | `@font-size-lg`      | -           |
| @button-default-color            | `@text-color`        | -           |
| @button-default-background-color | `@white`             | -           |
| @button-default-border-color     | `@border-color`      | -           |
| @button-primary-color            | `@white`             | -           |
| @button-primary-background-color | `@green`             | -           |
| @button-primary-border-color     | `@green`             | -           |
| @button-info-color               | `@white`             | -           |
| @button-info-background-color    | `@blue`              | -           |
| @button-info-border-color        | `@blue`              | -           |
| @button-danger-color             | `@white`             | -           |
| @button-danger-background-color  | `@red`               | -           |
| @button-danger-border-color      | `@red`               | -           |
| @button-warning-color            | `@white`             | -           |
| @button-warning-background-color | `@orange`            | -           |
| @button-warning-border-color     | `@orange`            | -           |
| @button-border-width             | `@border-width-base` | -           |
| @button-border-radius            | `@border-radius-sm`  | -           |
| @button-round-border-radius      | `@border-radius-max` | -           |
| @button-plain-background-color   | `@white`             | -           |
| @button-disabled-opacity         | `@disabled-opacity`  | -           |
