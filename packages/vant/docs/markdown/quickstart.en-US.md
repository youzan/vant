# Quickstart

## Install

### npm

Using `npm` to install:

```bash
# install latest Vant for Vue 3 project
npm i vant

# install Vant 2 for Vue 2 project
npm i vant@latest-v2
```

Using `yarn` or `pnpm`:

```bash
# with yarn
yarn add vant

# with pnpm
pnpm add vant
```

### CDN

The easiest way to use Vant is to include a CDN link in the html file, after which you can access all components via the global variable `vant`.

```html
<!-- import style -->
<link
  rel="stylesheet"
  href="https://fastly.jsdelivr.net/npm/vant@3/lib/index.css"
/>

<!-- import script -->
<script src="https://fastly.jsdelivr.net/npm/vue@3"></script>
<script src="https://fastly.jsdelivr.net/npm/vant@3/lib/vant.min.js"></script>

<script>
  // Render the Button component
  const app = Vue.createApp({
    template: `<van-button>Button</van-button>`,
  });
  app.use(vant);

  // Register Lazyload directive
  app.use(vant.Lazyload);

  // Call function component
  vant.Toast('Message');

  app.mount('#app');
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

We recommend to use [Vue CLI](https://cli.vuejs.org/) to create a new project.

```bash
# Install Vue CLI
npm install -g @vue/cli

# Create a project
vue create hello-world

# Open GUI
vue ui
```

![](https://fastly.jsdelivr.net/npm/@vant/assets/vue-cli-demo-201809030812.png)

In the GUI, click on 'Dependencies' -> `Install Dependencies` and add `vant` to the dependencies.

## Usage

### Import on demand (recommended)

If you are using vite, webpack or vue-cli, please use [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components).

#### 1. Install Plugin

```bash
# with npm
npm i unplugin-vue-components -D

# with yarn
yarn add unplugin-vue-components -D

# with pnpm
pnpm add unplugin-vue-components -D
```

#### 2. Configure Plugin

For `vite` based project，configure the plugin in the `vite.config.js` file:

```js
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';

export default {
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
};
```

For `vue-cli` based project，configure the plugin in the `vue.config.js` file:

```js
const { VantResolver } = require('unplugin-vue-components/resolvers');
const ComponentsPlugin = require('unplugin-vue-components/webpack');

module.exports = {
  configureWebpack: {
    plugins: [
      ComponentsPlugin({
        resolvers: [VantResolver()],
      }),
    ],
  },
};
```

For `webpack` based project，configure the plugin in the `webpack.config.js` file:

```js
const { VantResolver } = require('unplugin-vue-components/resolvers');
const ComponentsPlugin = require('unplugin-vue-components/webpack');

module.exports = {
  plugins: [
    ComponentsPlugin({
      resolvers: [VantResolver()],
    }),
  ],
};
```

#### 3. Import Components

Then you can import components from Vant:

```js
import { createApp } from 'vue';
import { Button } from 'vant';

const app = createApp();
app.use(Button);
```

#### 4. Style of Function Components

Some components of Vant are provided as function, including `Toast`, `Dialog`, `Notify` and `ImagePreview`. When using function components, `unplugin-vue-components` can not auto import the component style, so we need to import style manually.

```js
// Toast
import { Toast } from 'vant';
import 'vant/es/toast/style';

// Dialog
import { Dialog } from 'vant';
import 'vant/es/dialog/style';

// Notify
import { Notify } from 'vant';
import 'vant/es/notify/style';

// ImagePreview
import { ImagePreview } from 'vant';
import 'vant/es/image-preview/style';
```

> Vant supports tree shaking by default, so you don't necessarily need the webpack plugin, if you can't accept the full import of css.

### Import all components (not recommended)

Import all components will **increase the bundle size**, so this is not recommended.

```js
import { createApp } from 'vue';
import Vant from 'vant';
import 'vant/lib/index.css';

const app = createApp();
app.use(Vant);
```

### Manually import (not recommended)

```js
// import script
import Button from 'vant/es/button/index';
// import style
// if the component does not have a style file, there is no need to import
import 'vant/es/button/style/index';
```
