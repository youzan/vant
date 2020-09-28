# Icon

### Install

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
<van-icon name="chat-o" color="#1989fa" />
<van-icon name="chat-o" color="#07c160" />
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

| Event | Description               | Arguments      |
| ----- | ------------------------- | -------------- |
| click | Triggered when click icon | _event: Event_ |
