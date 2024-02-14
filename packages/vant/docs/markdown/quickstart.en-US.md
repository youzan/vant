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

Using `yarn`, `pnpm`, or `bun`:

```bash
# with yarn
yarn add vant

# with pnpm
pnpm add vant

# with Bun
bun add vant
```

### Using in a New Project

If you need to create a new project, we recommend using [Rsbuild](https://github.com/web-infra-dev/rsbuild), [Vite](https://vitejs.dev/) or [Nuxt framework](https://nuxtjs.org/).

#### Rsbuild

Rsbuild is a build tool based on Rspack, developed by the author of Vant, with first-class build speed and development experience, providing first-priority support for Vant.

You can create a Rsbuild project with the following command:

```bash
npm create rsbuild@latest
```

Please visit the [Rsbuild repository](https://github.com/web-infra-dev/rsbuild) for more information.

#### Example

Here are the example projects provided by Vant official. You can clone these projects and copy the code.

- [vant-demo - rsbuild](https://github.com/vant-ui/vant-demo/tree/master/vant/rsbuild): Build an application using Vue 3, Vant 4, and Rsbuild.
- [vant-demo - vite](https://github.com/vant-ui/vant-demo/tree/master/vant/vite): Build an application using Vue 3, Vant 4, and Vite.
- [vant-demo - nuxt3](https://github.com/vant-ui/vant-demo/tree/master/vant/nuxt3): Build an application using Vue 3, Nuxt 3, and Vant 4.

### CDN

If you only need to develop a simple HTML page, you can directly include the CDN links in the HTML file. After that, you can access all the components through the global variable `vant`.

```html
<!-- import style -->
<link
  rel="stylesheet"
  href="https://fastly.jsdelivr.net/npm/vant@4/lib/index.css"
/>

<!-- import script -->
<script src="https://fastly.jsdelivr.net/npm/vue@3"></script>
<script src="https://fastly.jsdelivr.net/npm/vant@4/lib/vant.min.js"></script>

<script>
  // Render the Button component
  const app = Vue.createApp({
    template: `<van-button>Button</van-button>`,
  });
  app.use(vant);

  // Register Lazyload directive
  app.use(vant.Lazyload);

  // Call function component
  vant.showToast('Message');

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

## Usage

### Basic Usage

The basic usage of Vant components:

```js
import { createApp } from 'vue';
// 1. Import the components you need
import { Button } from 'vant';
// 2. Import the components style
import 'vant/lib/index.css';

const app = createApp();

// 3. Register the components you need
app.use(Button);
```

> Tip: Vant supports Tree Shaking by default, so you don't need to configure any plugins, the unused JS code will be removed by Tree Shaking, but CSS styles cannot be optimized by it.

### Import on demand

If you are using Rsbuild, Vite, webpack or vue-cli, you can use [unplugin-vue-components](https://github.com/unplugin/unplugin-vue-components), this plugin can help you to auto importing components.

Vant officially wrote an automatic import style parser [@vant/auto-import-resolver](https://github.com/youzan/vant/tree/main/packages/vant-auto-import-resolver) based on `unplugin-vue-components`, both of which are used together.

Compared with conventional usage, this method can introduce the CSS style of components on demand, thus reducing part of the code volume, but it will become more cumbersome to use. If the business's volume requirements for CSS are not particularly extreme, we recommend a simpler general usage.

#### 1. Install Plugin

```bash
# with npm
npm i @vant/auto-import-resolver unplugin-vue-components -D

# with yarn
yarn add @vant/auto-import-resolver unplugin-vue-components -D

# with pnpm
pnpm add @vant/auto-import-resolver unplugin-vue-components -D

# with Bun
bun add @vant/auto-import-resolver unplugin-vue-components -D
```

#### 2. Configure Plugin

For Rsbuild based project，configure the plugin in the `rsbuild.config.js` file:

```js
import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';
import Components from 'unplugin-vue-components/rspack';
import { VantResolver } from '@vant/auto-import-resolver';

export default defineConfig({
  plugins: [pluginVue()],
  tools: {
    rspack: {
      plugins: [
        Components({
          resolvers: [VantResolver()],
        }),
      ],
    },
  },
});
```

For Vite based project，configure the plugin in the `vite.config.js` file:

```js
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from '@vant/auto-import-resolver';

export default {
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
};
```

For vue-cli based project，configure the plugin in the `vue.config.js` file:

```js
const { VantResolver } = require('@vant/auto-import-resolver');
const ComponentsPlugin = require('unplugin-vue-components/webpack');

module.exports = {
  configureWebpack: {
    plugins: [
      // When the version of unplugin-vue-components is less than 0.26.0:
      ComponentsPlugin({ resolvers: [VantResolver()] }),
      // when the unplugin-vue-components version is greater than or equal to 0.26.0:
      ComponentsPlugin.default({ resolvers: [VantResolver()] }),
    ],
  },
};
```

For webpack based project，configure the plugin in the `webpack.config.js` file:

```js
const { VantResolver } = require('@vant/auto-import-resolver');
const ComponentsPlugin = require('unplugin-vue-components/webpack');

module.exports = {
  plugins: [
    // When the version of unplugin-vue-components is less than 0.26.0:
    ComponentsPlugin({ resolvers: [VantResolver()] }),
    // when the unplugin-vue-components version is greater than or equal to 0.26.0:
    ComponentsPlugin.default({ resolvers: [VantResolver()] }),
  ],
};
```

#### 3. Using Components

Then you can using components from Vant in the template, the `unplugin-vue-components` will automatically import the corresponding Vant components,`@vant/auto-import-resolver` The corresponding component style will be automatically introduced.

```html
<template>
  <van-button type="primary" />
</template>
```

#### 4. Style of Function Components

Some components of Vant are provided as function, including `Toast`, `Dialog`, `Notify` and `ImagePreview`. When using function components, `unplugin-vue-components` cannot parse the automatic registration component, resulting in `@vant/auto-import-resolver` unable to parse the style, so the style needs to be introduced manually.

```js
// Toast
import { showToast } from 'vant';
import 'vant/es/toast/style';

// Dialog
import { showDialog } from 'vant';
import 'vant/es/dialog/style';

// Notify
import { showNotify } from 'vant';
import 'vant/es/notify/style';

// ImagePreview
import { showImagePreview } from 'vant';
import 'vant/es/image-preview/style';
```

> Tip: "Full Import" and "On-demand Import" should not be used at the same time, otherwise it will lead to problems such as code duplication and style overrides.

#### Tips

- "Full Import" and "On-demand Import" should not be used at the same time, otherwise it will lead to problems such as code duplication and style overrides.
- During use, if the component cannot be imported, because `unplugin-vue-components` is not a plug-in officially maintained by `Vant`, it is recommended to give feedback under the [unplugin/unplugin-vue-components](https://github.com/antfu/unplugin/unplugin-vue-components) repository.
- when the version number of `unplugin-vue-components` is >= 0.26.0, for `webpack`, `vue-cli`, and `rspack`, you need to use `ComponentsPlugin.default` to register.
- `@vant/auto-import-resolver` provides some configuration options. Please refer to the [README document](https://github.com/youzan/vant/tree/main/packages/vant-auto-import-resolver) for more information.
- If it is a similar problem that the style does not take effect, feedback under the `Vant` repository.

## With Frameworks

### Use Vant in Nuxt 3

When using Vant in Nuxt 3, you can use [vant-nuxt](https://github.com/vant-ui/vant-nuxt), this module can help you to auto importing components and reduce CSS file size.

#### 1. Install Module

```bash
# with npm
npm i @vant/nuxt -D

# with yarn
yarn add @vant/nuxt -D

# with pnpm
pnpm add @vant/nuxt -D

# with Bun
bun add @vant/nuxt -D
```

#### 2. Add Module

add the module in the `nuxt.config.js` file:

```js
export default defineNuxtConfig({
  modules: ['@vant/nuxt'],
});
```

#### 3. Using Components

Then you can using components from Vant in the template, Go to the [Nuxt documentation](https://nuxt.com/docs/guide/directory-structure/components) to learn more.

```html
<template>
  <van-button type="primary" @click="showToast('toast')">button</van-button>
  <VanButton type="success" @click="showNotify('notify')">button</VanButton>
  <LazyVanButton type="default">lazy button</LazyVanButton>
</template>
```
