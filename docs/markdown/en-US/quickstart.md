## Vant

Mobile UI Component based on `Vue 2.0`

### Install

```shell
npm i vant -S
```

### Usage

#### 1. Use [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) (Recommended)
```bash
# Install babel-plugin-import
npm i babel-plugin-import -D
```

```js
// set babel config in .babelrc or babel-loader
{
  "plugins": [
    ["import", { "libraryName": "vant", "style": true }]
  ]
}
```

Then you can import components from vant, equivalent to import manually below.

```js
import { Button } from 'vant';
```

#### 2. Manually import

```js
import { Button } from 'vant/lib/button';
import 'vant/lib/vant-css/base.css';
import 'vant/lib/vant-css/button.css';
```
 
#### 3. Import all components

```js
import Vue from 'vue';
import Vant from 'vant';
import 'vant/lib/vant-css/index.css';

Vue.use(Vant);
```

### CDN

```html
<!-- import style -->
<link rel="stylesheet" href="https://unpkg.com/vant/lib/vant-css/index.css" />

<!-- import script -->
<script src="https://unpkg.com/vant/lib/vant.min.js"></script>
```

### Props Named Style
HTML attributes are case-insensitive, so when using non-string templates, camelCased prop names need to use their kebab-case (hyphen-delimited) equivalents.

``` html
<!-- camelCase in JavaScript -->
<van-cell isLink />

<!-- kebab-case in HTML -->
<van-cell is-link />
```

