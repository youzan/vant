# Vant Auto Import Resolver

@vant/auto-import-resolver 用于 vant 按需引入，基于 unplugin-vue-components 的解析器

### 特性

- 支持 Vite, Webpack, Rspack, Vue CLI, Rollup, esbuild 等, 基于 <a href="https://github.com/antfu/unplugin-vue-components">unplugin-vue-components</a>.

- 支持自动引入 `css` 样式 `VantResolver()` 默认

- 支持自动引入 `less` 样式 `VantResolver({ importStyle: false | 'less' })` , `vant 4.0` 以上 `npm` 包内移除了`less` 文件

- 支持 `ssr` `VantResolver({ ssr: true })`

### 安装

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
