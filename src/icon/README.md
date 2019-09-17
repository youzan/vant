# Icon

### Install

``` javascript
import Vue from 'vue';
import { Icon } from 'vant';

Vue.use(Icon);
```

## Usage

### Basic Usage

Use `name` prop to set icon name or icon URL

```html
<van-icon name="close" />
<van-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" />
```

### Show Info

```html
<van-icon name="chat" dot />
<van-icon name="chat" info="9" />
<van-icon name="chat" info="99+" />
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

| Attribute | Description | Type | Default | Version |
|------|------|------|------|------|
| name | Icon name or URL | *string* | `''` | - |
| dot | Whether to show red dot | *boolean* | `false` | 2.2.1 |
| info | Content of the badge | *string \| number* | `''` | - |
| color | Icon color | *string* | `inherit` | - |
| size | Icon size | *string \| number* | `inherit` | - |
| class-prefix | ClassName prefix | *string* | `van-icon` | - |
| tag | HTML Tag | *string* | `i` | - |

### Events

| Event | Description | Arguments |
|------|------|------|
| click | Triggered when click icon | event: Event |
