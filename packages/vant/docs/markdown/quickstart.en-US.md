# Quickstart

## Install

### npm

```bash
# Install Vant 2 for Vue 2 project
npm i vant -S

# Install Vant 3 for Vue 3 project
npm i vant@next -S
```

### CDN

The easiest way to use Vant is to include a CDN link in the html file, after which you can access all components via the global variable `vant`.

```html
<!-- import style -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/vant@next/lib/index.css"
/>

<!-- import script -->
<script src="https://cdn.jsdelivr.net/npm/vue@next"></script>
<script src="https://cdn.jsdelivr.net/npm/vant@next/lib/vant.min.js"></script>

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

You can use Vant through these free CDN services:

- [jsdelivr](https://www.jsdelivr.com/package/npm/vant)
- [cdnjs](https://cdnjs.com/libraries/vant)
- [unpkg](https://unpkg.com/)

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

### 1. Import on demand

Use [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) to import components on demand.

```bash
# Install plugin
npm i babel-plugin-import -D
```

Set babel config in .babelrc or babel.config.js:

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

Then you can import components from vant:

```js
// Input
import { Button } from 'vant';

// Output
import Button from 'vant/es/button';
import 'vant/es/button/style';
```

> If you are using TypeScript，please use [ts-import-plugin](https://github.com/Brooooooklyn/ts-import-plugin) instead.

### 2. Vite Plugin

If you are using Vite, please use [vite-plugin-style-import](https://github.com/anncwb/vite-plugin-style-import).

```bash
npm i vite-plugin-style-import -D
```

```js
// vite.config.js
import vue from '@vitejs/plugin-vue';
import styleImport from 'vite-plugin-style-import';

export default {
  plugins: [
    vue(),
    styleImport({
      libs: [
        {
          libraryName: 'vant',
          esModule: true,
          resolveStyle: (name) => `vant/es/${name}/style`,
        },
      ],
    }),
  ],
};
```

### 3. Manually import

```js
import Button from 'vant/es/button';
import 'vant/es/button/style';
```

### 4. Import all components

```js
import { createApp } from 'vue';
import Vant from 'vant';
import 'vant/lib/index.css';

const app = createApp();
app.use(Vant);
```

> If you configured babel-plugin-import, you won't be allowed to import all components.
