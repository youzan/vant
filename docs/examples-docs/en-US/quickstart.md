## Vant

Mobile UI Component based on `Vue 2.0`

### Install

```shell
npm i vant -S
```

### Usage

#### 1. Use [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) (推荐)
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
import 'vant/lib/vant-css/button.css';
```
 
#### 3. Import all components

```js
import Vue from 'vue';
import Vant from 'vant';
import 'vant/lib/vant-css/index.css';

Vue.use(Vant);
```
