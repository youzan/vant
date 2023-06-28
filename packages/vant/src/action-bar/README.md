# ActionBar

### Intro

Used to provide convenient interaction for page-related operations.

### Install

Register component globally via `app.use`, refer to [Component Registration](#/en-US/advanced-usage#zu-jian-zhu-ce) for more registration ways.

```js
import { createApp } from 'vue';
import { ActionBar, ActionBarIcon, ActionBarButton } from 'vant';

const app = createApp();
app.use(ActionBar);
app.use(ActionBarIcon);
app.use(ActionBarButton);
```

## Usage

### Basic Usage

```html
<van-action-bar>
  <van-action-bar-icon icon="chat-o" text="Icon1" @click="onClickIcon" />
  <van-action-bar-icon icon="cart-o" text="Icon2" @click="onClickIcon" />
  <van-action-bar-icon icon="shop-o" text="Icon3" @click="onClickIcon" />
  <van-action-bar-button type="danger" text="Button" @click="onClickButton" />
</van-action-bar>
```

```js
import { showToast } from 'vant';

export default {
  setup() {
    const onClickIcon = () => showToast('Click Icon');
    const onClickButton = () => showToast('Click Button');
    return {
      onClickIcon,
      onClickButton,
    };
  },
};
```

### Icon Badge

Use `badge` prop to show badge in icon.

```html
<van-action-bar>
  <van-action-bar-icon icon="chat-o" text="Icon1" dot />
  <van-action-bar-icon icon="cart-o" text="Icon2" badge="5" />
  <van-action-bar-icon icon="shop-o" text="Icon3" badge="12" />
  <van-action-bar-button type="warning" text="Button" />
  <van-action-bar-button type="danger" text="Button" />
</van-action-bar>
```

### Custom Icon Color

```html
<van-action-bar>
  <van-action-bar-icon icon="chat-o" text="Icon1" color="#ee0a24" />
  <van-action-bar-icon icon="cart-o" text="Icon2" />
  <van-action-bar-icon icon="star" text="Collected" color="#ff5000" />
  <van-action-bar-button type="warning" text="Button" />
  <van-action-bar-button type="danger" text="Button" />
</van-action-bar>
```

### Custom Button Color

```html
<van-action-bar>
  <van-action-bar-icon icon="chat-o" text="Icon1" />
  <van-action-bar-icon icon="shop-o" text="Icon2" />
  <van-action-bar-button color="#be99ff" type="warning" text="Button" />
  <van-action-bar-button color="#7232dd" type="danger" text="Button" />
</van-action-bar>
```

## API

### ActionBar Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| safe-area-inset-bottom | Whether to enable bottom safe area adaptation | _boolean_ | `true` |
| placeholder | Whether to generate a placeholder element | _boolean_ | `false` |

### ActionBarIcon Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| text | Button text | _string_ | - |
| icon | Icon | _string_ | - |
| color | Icon color | _string_ | `#323233` |
| icon-class | Icon class name | _string \| Array \| object_ | `''` |
| icon-prefix | Icon className prefix | _string_ | `van-icon` |
| dot | Whether to show red dot | _boolean_ | - |
| badge | Content of the badge | _number \| string_ | - |
| badge-props | Props of Badge, see [Badge - props](#/en-US/badge#props) | _BadgeProps_ | - |
| url | Link URL | _string_ | - |
| to | The target route should navigate to when clicked on, same as the [to prop](https://router.vuejs.org/api/interfaces/RouterLinkProps.html#Properties-to) of Vue Router | _string \| object_ | - |
| replace | If true, the navigation will not leave a history record | _boolean_ | `false` |

### ActionBarButton Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| text | Button text | _string_ | - |
| type | Button type, Can be set to `default` `primary` `success` `warning` `danger` | _string_ | `default` |
| color | Button color, support linear-gradient | _string_ | - |
| icon | Left Icon | _string_ | - |
| disabled | Whether to disable button | _boolean_ | `false` |
| loading | Whether to show loading status | _boolean_ | `false` |
| url | Link | _string_ | - |
| to | The target route should navigate to when clicked on, same as the [to prop](https://router.vuejs.org/api/interfaces/RouterLinkProps.html#Properties-to) of Vue Router | _string \| object_ | - |
| replace | If true, the navigation will not leave a history record | _boolean_ | `false` |

### ActionBarIcon Slots

| Name    | Description |
| ------- | ----------- |
| default | Text        |
| icon    | Custom icon |

### ActionBarButton Slots

| Name    | Description    |
| ------- | -------------- |
| default | Button content |

### Types

The component exports the following type definitions:

```ts
import type {
  ActionBarProps,
  ActionBarIconProps,
  ActionBarButtonProps,
} from 'vant';
```

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/config-provider).

| Name | Default Value | Description |
| --- | --- | --- |
| --van-action-bar-background | _var(--van-background-2)_ | - |
| --van-action-bar-height | _50px_ | - |
| --van-action-bar-icon-width | _48px_ | - |
| --van-action-bar-icon-height | _100%_ | - |
| --van-action-bar-icon-color | _var(--van-text-color)_ | - |
| --van-action-bar-icon-size | _18px_ | - |
| --van-action-bar-icon-font-size | _var(--van-font-size-xs)_ | - |
| --van-action-bar-icon-active-color | _var(--van-active-color)_ | - |
| --van-action-bar-icon-text-color | _var(--van-text-color)_ | - |
| --van-action-bar-icon-background | _var(--van-background-2)_ | - |
| --van-action-bar-button-height | _40px_ | - |
| --van-action-bar-button-warning-color | _var(--van-gradient-orange)_ | - |
| --van-action-bar-button-danger-color | _var(--van-gradient-red)_ | - |
