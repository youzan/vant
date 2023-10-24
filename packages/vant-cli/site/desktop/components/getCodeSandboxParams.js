import { getParameters } from './utils';

const indexHtml = `<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Vant Demo</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.js"></script>
  </body>
</html>
`;

const App = `
<template>
  <demo />
</template>

<script>
import { defineComponent } from "vue";
import Demo from "./Demo.vue";

export default defineComponent({
components: {
    Demo,
  },
});
</script>`;

const mainJs = `
import { createApp } from 'vue';
import Vant from 'vant';
import App from './App.vue';
import 'vant/lib/index.css';

const app = createApp(App)
app.use(Vant);
app.mount("#app");
`;

const viteConfig = `
  import { defineConfig } from 'vite';
  import vue from '@vitejs/plugin-vue';
  import vueJsx from '@vitejs/plugin-vue-jsx';

  export default defineConfig({
    plugins: [vue(), vueJsx()],
  });
`;

export function getCodeSandboxParams(code, meta) {
  return getParameters({
    files: {
      'package.json': {
        content: JSON.stringify(
          {
            title: meta.title,
            scripts: {
              dev: 'vite',
              build: 'vite build',
              serve: 'vite preview',
            },
            dependencies: {
              vue: 'latest',
              vant: 'latest',
            },
            devDependencies: {
              vite: 'latest',
              '@vitejs/plugin-vue': 'latest',
              '@vitejs/plugin-vue-jsx': 'latest',
            },
          },
          null,
          2,
        ),
        isBinary: false,
      },
      'index.html': {
        content: indexHtml,
        isBinary: false,
      },
      'vite.config.js': {
        content: viteConfig,
        isBinary: false,
      },
      'src/Demo.vue': {
        content: code,
        isBinary: false,
      },
      'src/App.vue': {
        content: App,
        isBinary: false,
      },
      'src/main.js': {
        content: mainJs,
        isBinary: false,
      },
    },
  });
}
