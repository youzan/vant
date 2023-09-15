# Quickstart

## Install

### npm

```bash
# Install latest Vant for Vue 3 project
npm i vant -S

# Install Vant 2 for Vue 2 project
npm i vant@latest-v2 -S
```

### CDN

The easiest way to use Vant is to include a CDN link in the html file, after which you can access all components via the global variable `vant`.

```html
<!-- import style -->
<link
  rel="stylesheet"
  href="https://unpkg.com/vant@2.12/lib/index.css"
/>

<!-- import script -->
<script src="https://unpkg.com/vue@2.6/dist/vue.min.js"></script>
<script src="https://unpkg.com/vant@2.12/lib/vant.min.js"></script>

<script>
  // Render the Button component
  new Vue({
    el: '#app',
    template: `<van-button>Button</van-button>`,
  });

  // Call function component
  vant.Toast('Message');

  // Register Lazyload directive
  Vue.use(vant.Lazyload);
</script>
```

#### Free CDN

You can use Vant through these free CDN services:

- [jsdelivr](https://www.jsdelivr.com/package/npm/vant)
- [cdnjs](https://cdnjs.com/libraries/vant)
- [unpkg](https://unpkg.com/)

Note: Free CDN is generally used for making prototypes or personal projects. It is not recommended to use free CDN in production environment.

For enterprise developers, we recommend:

- install with npm, use build tools to bundle it
- download the scripts, host it on your own server

### CLI

We recommend to use [Vue Cli](https://cli.vuejs.org/) to create a new project.

```bash
# Install Vue Cli
npm install -g @vue/cli

# Create a project
vue create hello-world

# Open GUI
vue ui
```

![](https://img01.yzcdn.cn/vant/vue-cli-demo-201809030812.png)

In the GUI, click on 'Dependencies' -> `Install Dependencies` and add `vant` to the dependencies.

## Usage

### 1. Import on demand

Use [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) to import components on demand.

```bash
# Install plugin
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

```js
// Then you can import components from vant
import { Button } from 'vant';
```

> If you are using TypeScript，please use [ts-import-plugin](https://github.com/Brooooooklyn/ts-import-plugin) instead.

### 2. Manually import

```js
import Button from 'vant/lib/button';
import 'vant/lib/button/style';
```

### 3. Import all components

```js
import Vue from 'vue';
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
```

> If you configured babel-plugin-import, you won't be allowed to import all components.
