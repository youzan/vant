## Icon

### Install
``` javascript
import { Icon } from 'vant';

Vue.use(Icon);
```

### Usage

#### Basic Usage

Use `name` prop to set icon name or icon URL

```html
<van-icon name="close" />
<van-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" />
```

#### Show Info

```html
<van-icon name="chat" info="9" />
<van-icon name="chat" info="99+" />
```

#### Use local font file
Icon uses font file in `yzcdn.cn` by default，if you want to use the local font file，please import the following css file.

```js
import 'vant/lib/icon/local.css';
```

#### Add custom iconfont

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

### API

| Attribute | Description | Type | Default |
|------|------|------|------|
| name | Icon name or URL | `String` | `''` |
| info | Info message | `String | Number` | `''` |
| color | Icon color | `String` | `inherit` |
| size | Icon size | `String` | `inherit` |
| class-prefix | ClassName prefix | `String` | `van-icon` |
| tag | HTML Tag | `String` | `i` |

### Event

| Event | Description | Arguments |
|------|------|------|
| click | Triggered when click icon | - |
