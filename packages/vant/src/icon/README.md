# Icon

### Intro

The font-based icon set that can be used via the Icon component or referenced in other components via the `icon` attribute.

### Install

Register component globally via `app.use`, refer to [Component Registration](#/en-US/advanced-usage#zu-jian-zhu-ce) for more registration ways.

```js
import { createApp } from 'vue';
import { Icon } from 'vant';

const app = createApp();
app.use(Icon);
```

## Usage

### Basic Usage

Use `name` prop to set icon name or icon URL.

```html
<van-icon name="chat-o" />
```

### Using URL

You can directly passing an image URL to the `name` props.

```html
<van-icon name="https://fastly.jsdelivr.net/npm/@vant/assets/icon-demo.png" />
```

### Show Badge

Use `dot` prop, a small red dot will be displayed in the upper right corner of the icon.

Use `badge` prop, the badge will be displayed in the upper right corner of the icon.

```html
<van-icon name="chat-o" dot />
<van-icon name="chat-o" badge="9" />
<van-icon name="chat-o" badge="99+" />
```

### Icon Color

Use `color` prop to set icon color.

```html
<van-icon name="cart-o" color="#1989fa" />
<van-icon name="fire-o" color="#ee0a24" />
```

### Icon Size

Use `size` prop to set icon size.

```html
<!-- Using px unit by default -->
<van-icon name="chat-o" size="40" />
<!-- Using rem unit -->
<van-icon name="chat-o" size="3rem" />
```

### Add custom iconfont

```css
@font-face {
  font-family: 'my-icon';
  src: url('./my-icon.ttf') format('truetype');
}

.my-icon {
  font-family: 'my-icon';
}

.my-icon-extra::before {
  content: '\e626';
}
```

```html
<van-icon class-prefix="my-icon" name="extra" />
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| name | Icon name or URL | _string_ | `''` |
| dot | Whether to show red dot | _boolean_ | `false` |
| badge | Content of the badge | _number \| string_ | `''` |
| badge-props | Props of Badge, see [Badge - props](#/en-US/badge#props) | _BadgeProps_ | - |
| color | Icon color | _string_ | `inherit` |
| size | Icon size | _number \| string_ | `inherit` |
| class-prefix | ClassName prefix | _string_ | `van-icon` |
| tag | HTML Tag of root element | _string_ | `i` |

### Events

| Event | Description                  | Arguments           |
| ----- | ---------------------------- | ------------------- |
| click | Emitted when icon is clicked | _event: MouseEvent_ |

### Types

The component exports the following type definitions:

```ts
import type { IconProps } from 'vant';
```

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/config-provider).

| Name                   | Default Value | Description |
| ---------------------- | ------------- | ----------- |
| --van-icon-font-family | _'van-icon'_  | -           |
