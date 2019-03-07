## Quickstart

### Starter kit

We recomment to use [Vue Cli 3](https://cli.vuejs.org/zh/) to create a project.

```bash
# Install Vue Cli
npm install -g @vue/cli

# Create a project
vue create hello-world
```

After the creation is complete, you can open the GUI by command.

```bash
# Open GUI
vue ui
```

In the GUI, click on 'Dependencies' -> `Install Dependencies` and add `vant` to the dependencies.

<img width="100%" style="box-shadow: 0 1px 1px rgba(0, 0, 0, .1); border-radius: 3px;" src="https://img.yzcdn.cn/vant/vue-cli-demo-201809030812.png" >

### Install

#### NPM

```shell
npm i vant -S
```

#### YARN

```shell
yarn add vant
```

#### CDN

```html
<!-- import style -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/vant@1.6/lib/index.css" />

<!-- import script -->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vant@1.6/lib/vant.min.js"></script>
```

### Usage

#### 1. Use [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) (Recommended)

```bash
# Install babel-plugin-import
npm i babel-plugin-import -D
```

```js
// set babel config in .babelrc or babel-loader
// Note: Don't set libraryDirectory if you are using webpack 1.
{
  "plugins": [
    ["import", {
      "libraryName": "vant",
      "libraryDirectory": "es",
      "style": true
    }]
  ]
}

// For users who use babel7, that can be configured in babel.config.js
module.exports = {
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]
};
```

Then you can import components from vant, equivalent to import manually below.

```js
import { Button } from 'vant';
```

> If you are using TypeScript，please use [ts-import-plugin](https://github.com/Brooooooklyn/ts-import-plugin) instead

#### 2. Manually import

```js
import Button from 'vant/lib/button';
import 'vant/lib/button/style';
```
 
#### 3. Import all components

```js
import Vue from 'vue';
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
```

> If you configured babel-plugin-import, you won't be allowed to import all components.


### Rem units

Vant use `px` as size units by default，you can use tools such as `postcss-pxtorem` to transform units to `rem`.

- [postcss-pxtorem](https://github.com/cuth/postcss-pxtorem)
- [lib-flexible](https://github.com/amfe/lib-flexible)

postcss config example:

```js
module.exports = {
  plugins: {
    'autoprefixer': {
      browsers: ['Android >= 4.0', 'iOS >= 7']
    },
    'postcss-pxtorem': {
      rootValue: 37.5,
      propList: ['*']
    }
  }
}
```