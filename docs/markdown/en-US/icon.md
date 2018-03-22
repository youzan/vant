## Icon

### Install
``` javascript
import { Icon } from 'vant';

Vue.use(Icon);
```

### Usage

#### Basic Usage
View all usable icons on the right.

```html
<van-icon name="success" />
```

#### Use local font file
Icon uses font file in `yzcdn.cn` by default，if you want to use the local font file，please import the following css file.

```js
import 'vant/lib/vant-css/icon-local.css';
```

#### Use custom font
Add more custom icon

[Demo](https://github.com/qianzhaoy/vant--mobile-mall/blob/master/src/assets/scss/iconfont/iconfont.css)

```css
@font-face {
	font-family: "iconfont";
	src: url('./iconfont.ttf') format('truetype');
}

@font-face {
	font-family: "vanIcon";
	src: url(https://b.yzcdn.cn/zanui/icon/vant-icon-4c3245.ttf) format('truetype');
}

.van-icon {
	position: relative;
	font-family: "iconfont", "vanIcon" !important;
	font-size: 14px;
	font-style: normal;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

.van-icon-success:before {
	content: "\e626";
}
```

### API

| Attribute | Description | Type | Default | Accepted Values |
|-----------|-----------|-----------|-------------|-------------|
| name | Icon name | `String` | `''` | - |
| info | Info message | `String` | `''` | - |

### Event

| Event | Description | Arguments |
|-----------|-----------|-----------|
| click | Triggered when click icon | - |
