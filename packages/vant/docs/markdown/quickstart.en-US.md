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
  href="https://cdn.jsdelivr.net/npm/vant@3/lib/index.css"
/>

<!-- import script -->
<script src="https://cdn.jsdelivr.net/npm/vue@3"></script>
<script src="https://cdn.jsdelivr.net/npm/vant@3/lib/vant.min.js"></script>

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

We recommend to use [Vue Cli](https://cli.vuejs.org/) to create a new project.

```bash
# Install Vue Cli
npm install -g @vue/cli

# Create a project
vue create hello-world

# Open GUI
vue ui
```

![](https://img.yzcdn.cn/vant/vue-cli-demo-201809030812.png)

In the GUI, click on 'Dependencies' -> `Install Dependencies` and add `vant` to the dependencies.

## Usage

### Import on demand in vite projects (recommended)

If you are using vite, please use [vite-plugin-style-import](https://github.com/anncwb/vite-plugin-style-import).

#### 1. Install Plugin

```bash
# with npm
npm i vite-plugin-style-import@1.4.1 -D

# with yarn
yarn add vite-plugin-style-import@1.4.1 -D

# with pnpm
pnpm add vite-plugin-style-import@1.4.1 -D
```

#### 2. Configure Plugin

Configure the plugin in the `vite.config.js` file:

```js
import vue from '@vitejs/plugin-vue';
import styleImport, { VantResolve } from 'vite-plugin-style-import';

export default {
  plugins: [
    vue(),
    styleImport({
      resolves: [VantResolve()],
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

> Vant supports Tree Shaking by default.

### Import on demand in non-vite projects (recommended)

In non-vite projects, use [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) to import components on demand.

#### 1. Install Plugin

```bash
npm i babel-plugin-import -D
```

#### 2. Configure Plugin

Set babel config in `.babelrc` or `babel.config.js`:

```json
{
  "plugins": [
    [
      "import",
      {
        "libraryName": "vant",
        "libraryDirectory": "es",
        "style": true
      }
    ]
  ]
}
```

#### 3. Import Components

Then you can import components from Vant:

```js
// Input
import { Button } from 'vant';

// Output
import Button from 'vant/es/button';
import 'vant/es/button/style';
```

> If you are using TypeScript，please use [ts-import-plugin](https://github.com/Brooooooklyn/ts-import-plugin) instead.

### Import all components (not recommended)

Import all components will **increase the bundle size**, so this is not recommended.

```js
import { createApp } from 'vue';
import Vant from 'vant';
import 'vant/lib/index.css';

const app = createApp();
app.use(Vant);
```

> If you configured babel-plugin-import, you won't be allowed to import all components.

### Manually import (not recommended)

```js
// import script
import Button from 'vant/es/button/index';
// import style
// if the component does not have a style file, there is no need to import
import 'vant/es/button/style/index';
```
