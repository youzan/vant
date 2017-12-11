## Icon

### Install
``` javascript
import { Icon } from 'vant';

Vue.component(Icon.name, Icon);
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

### API

| Attribute | Description | Type | Default | Accepted Values |
|-----------|-----------|-----------|-------------|-------------|
| name | Icon name | `String` | `''` | - |
