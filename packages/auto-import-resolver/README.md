# Vant Auto Import Resolver

@vant/auto-import-resolver For vant on-demand introduction, parser based on unplugin-vue-components

🇨🇳 <a href="./README.zh-CN.md">查看中文版介绍</a>

---

### Features

- Supports Vite, Webpack, Rspack, Vue CLI, Rollup, esbuild and more, powered by <a href="https://github.com/antfu/unplugin-vue-components">unplugin-vue-components</a>.

- `css style` Support `VantResolver()` `default`

- `less style` Support `VantResolver({ importStyle: false | 'less' })` , `vant 4.0` The `less` file has been removed from the above `npm` package.

- `ssr` Support `VantResolver({ ssr: true })`

### Install Manually

```shell
# via npm
npm i @vant/auto-import-resolver unplugin-vue-components -D


# via yarn
yarn add @vant/auto-import-resolver unplugin-vue-components -D

# via pnpm
pnpm add @vant/auto-import-resolver unplugin-vue-components -D

# via Bun
bun add @vant/auto-import-resolver unplugin-vue-components -D
```

<details>
<summary>Vite</summary><br>

```ts
// vite.config.ts
import Components from 'unplugin-vue-components/vite';
import VantResolver from '@vant/auto-import-resolver';

export default defineConfig({
  plugins: [
    Components({
      resolvers: [VantResolver()],
    }),
  ],
});
```

<br></details>

<details>
<summary>Rollup</summary><br>

```ts
// rollup.config.js
import Components from 'unplugin-vue-components/rollup';
import VantResolver from '@vant/auto-import-resolver';

export default {
  plugins: [
    Components({
      resolvers: [VantResolver()],
    }),
  ],
};
```

<br></details>

<details>
<summary>Webpack</summary><br>

```ts
// webpack.config.js
import Components from 'unplugin-vue-components/webpack';
import VantResolver from '@vant/auto-import-resolver';

module.exports = {
  /* ... */
  plugins: [
    Components({
      resolvers: [VantResolver()],
    }),
  ],
};
```

<br></details>

<details>
<summary>Vue CLI</summary><br>

```ts
// vue.config.js
import Components from 'unplugin-vue-components/webpack';
import VantResolver from '@vant/auto-import-resolver';

module.exports = {
  configureWebpack: {
    plugins: [
      Components({
        resolvers: [VantResolver()],
      }),
    ],
  },
};
```

<br></details>

<details>
<summary>esbuild</summary><br>

```ts
// esbuild.config.js
import { build } from 'esbuild';
import Components from 'unplugin-vue-components/esbuild';
import VantResolver from '@vant/auto-import-resolver';

build({
  plugins: [
    Components({
      resolvers: [VantResolver()],
    }),
  ],
});
```

<br></details>
