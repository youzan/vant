# Icon

### Install

```js
import Vue from 'vue';
import { Icon } from 'vant';

Vue.use(Icon);
```

## Usage

### Basic Usage

Use `name` prop to set icon name or icon URL.

```html
<van-icon name="chat-o" />
<van-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" />
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
<van-icon name="chat-o" size="40" /> <van-icon name="chat-o" size="3rem" />
```

### Use local font file

Icon uses font file in `yzcdn.cn` by default，if you want to use the local font file，please import the following css file.

```js
import 'vant/lib/icon/local.css';
```

> Tips: Starting from version 2.10.13, Vant will use local font files in woff2 format by default

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

| Attribute      | Description             | Type               | Default    |
| -------------- | ----------------------- | ------------------ | ---------- |
| name           | Icon name or URL        | _string_           | `''`       |
| dot            | Whether to show red dot | _boolean_          | `false`    |
| badge `v2.5.6` | Content of the badge    | _number \| string_ | `''`       |
| color          | Icon color              | _string_           | `inherit`  |
| size           | Icon size               | _number \| string_ | `inherit`  |
| class-prefix   | ClassName prefix        | _string_           | `van-icon` |
| tag            | HTML Tag                | _string_           | `i`        |

### Events

| Event | Description                  | Arguments      |
| ----- | ---------------------------- | -------------- |
| click | Emitted when icon is clicked | _event: Event_ |
