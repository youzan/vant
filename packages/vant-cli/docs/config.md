# Config

- [Config](#----)
  - [vant.config.mjs](#vantconfigmjs)
    - [name](#name)
    - [build.css.base](#buildcssbase)
    - [build.css.preprocessor](#buildcsspreprocessor)
    - [build.site.publicPath](#buildsitepublicpath)
    - [build.srcDir](#buildsrcdir)
    - [build.namedExport](#buildnamedexport)
    - [build.configureVite](#buildconfigurevite)
    - [build.packageManager](#buildpackagemanager)
    - [site.title](#sitetitle)
    - [site.logo](#sitelogo)
    - [site.description](#sitedescription)
    - [site.nav](#sitenav)
    - [site.versions](#siteversions)
    - [site.baiduAnalytics](#sitebaiduanalytics)
    - [site.searchConfig](#sitesearchconfig)
    - [site.hideSimulator](#sitehidesimulator)
    - [site.simulator.url](#sitesimulatorurl)
    - [site.htmlMeta](#sitehtmlmeta)
    - [site.enableVConsole](#siteenablevconsole)
  - [PostCSS](#postcss)
    - [Default Config](#-----1)
  - [browserslist](#browserslist)

## vant.config.mjs

`vant.config.mjs` includes bundle and documentation site config. Please create this file and place it in your project root directory. Here is a basic example:

```js
export default {
  // component library name
  name: 'demo-ui',
  // bundle config
  build: {
    site: {
      publicPath: '/demo-ui/',
    },
  },
  // documentation site config
  site: {
    // title
    title: 'Demo UI',
    // logo
    logo: 'https://fastly.jsdelivr.net/npm/@vant/assets/logo.png',
    // description
    description: '示例组件库',
    // left nav
    nav: [
      {
        title: 'example',
        items: [
          {
            path: 'home',
            title: 'home',
          },
        ],
      },
      {
        title: 'basic components',
        items: [
          {
            path: 'my-button',
            title: 'MyButton',
          },
        ],
      },
    ],
  },
};
```

### name

- Type: `string`
- Default: `''`

Component library name. kebab-case recommended.

### build.css.base

- Type: `string`
- Default: `'style/base.less'`

Global style file path. Support absolute path and relative path both.

Note: relative path is calculated based on `src`.

```js
module.exports = {
  build: {
    css: {
      base: 'style/global.scss',
    },
  },
};
```

### build.css.preprocessor

- Type: `string`
- Default: `'less'`

CSS preprocessor config, support `less` and `sass`. Use `less` by default.

```js
module.exports = {
  build: {
    css: {
      preprocessor: 'sass',
    },
  },
};
```

### build.css.removeSourceFile

- Type: `boolean`
- Default: `'false'`

Whether to remove the source style files after build.

```js
module.exports = {
  build: {
    css: {
      removeSourceFile: true,
    },
  },
};
```

### build.site.publicPath

- Type: `string`
- Default: `/`

Equivalent to vite `build.outDir`.

Generally, documentation site will be deployed to subpath of domain. For example: `https://my.github.io/demo-ui/`, `publicPath` should be `/demo-ui/`.

```js
module.exports = {
  build: {
    site: {
      publicPath: '/demo-ui/',
    },
  },
};
```

### build.srcDir

- Type: `string`
- Default: `src`

```js
module.exports = {
  build: {
    srcDir: 'myDir',
  },
};
```

### build.namedExport

- Type: `boolean`
- Default: `false`

Should export components by Named Export.

When set to `false`, `export default from 'xxx'` will be used to export module.

When set to `true`, `export * from 'xxx'` will be used to export all modules and type definition.

### build.configureVite

- Type: `(config: InlineConfig): InlineConfig`
- Default: `undefined`

Custom vite config(`@vant/cli>= 4.0.0`)

```js
module.exports = {
  build: {
    configureVite(config) {
      // add vite plugin
      config.plugins.push(vitePluginXXX);
      return config;
    },
  },
};
```

```js
module.exports = {
  build: {
    configureVite(config) {
      const { BUILD_TARGET } = process.env;

      if (BUILD_TARGET === 'package') {
        // component library bundle config
      }

      if (BUILD_TARGET === 'site') {
        // documentation site bundle config
      }

      return config;
    },
  },
};
```

### build.packageManager

- Type: `'npm' | 'yarn' | 'pnpm'`
- Default: `undefined`

`npm` package manager.

### build.bundleOptions

- Type: `BundleOptions[]`

Specify the format of the bundled output.

The type of `BundleOptions`:

```ts
type BundleOption = {
  // Whether to minify code (Tips: es format output can't be minified by vite)
  minify?: boolean;
  // Formats, can be set to 'es' | 'cjs' | 'umd' | 'iife'
  formats: LibraryFormats[];
  // Dependencies to external (Vue is externaled by default)
  external?: string[];
};
```

Default value：

```ts
const DEFAULT_OPTIONS: BundleOption[] = [
  {
    minify: false,
    formats: ['umd'],
  },
  {
    minify: true,
    formats: ['umd'],
  },
  {
    minify: false,
    formats: ['es', 'cjs'],
    external: allDependencies,
  },
];
```

### site.title

- Type: `string`
- Default: `''`

Documentation site title.

### site.logo

- Type: `string`
- Default: `''`

Documentation site logo.

### site.description

- Type: `string`
- Default: `''`

Documentation site description.

### site.nav

- Type: `object[]`
- Default: `undefined`

Documentation site left nav. Each item of `nav` means a navigation group.

```js
module.exports = {
  site: {
    nav: [
      {
        // group title
        title: 'Development Guide',
        // nav items
        items: [
          {
            // nav router
            path: 'home',
            // nav title
            title: 'title',
            // should hide phone emulator(false by default)
            hideSimulator: true,
          },
        ],
      },
    ],
  },
};
```

### site.versions

- Type: `object[]`
- Default: `undefined`

Documentation site muti-version config.

```js
module.exports = {
  site: {
    versions: [
      {
        label: 'v1',
        link: 'https://vant-ui.github.io/vant/v1/',
      },
    ],
  },
};
```

### site.baiduAnalytics

- Type: `object`
- Default: `undefined`

Documentation site baidu analysis config. The script of Baidu Statistic will be automatically loaded when build documentation website.

```js
module.exports = {
  site: {
    baiduAnalytics: {
      // 打开百度统计 ->『管理』->『代码获取』
      // find the followed URL: "https://hm.baidu.com/hm.js?xxxxx"
      // add `xxxxx` in the seed
      seed: 'xxxxx',
    },
  },
};
```

### site.searchConfig

- Type: `object`
- Default: `undefined`

Documentation site search config. Based on [docsearch](https://docsearch.algolia.com/docs/behavior) of algolia.

### site.hideSimulator

- Type: `boolean`
- Default: `false`

Should hide phone emulator, `false` by default.

### site.simulator.url

- Type: `string`
- Default: -

Customize iframe URL.

### site.htmlMeta

- Type: `Record<string, string>`
- Default: `undefined`

Customize HTML meta tag, key means name, value means content.

### site.headHtml

- Type: `string`
- Default: `undefined`

Insert a custom HTML content in the `<head>` tag.

### site.enableVConsole

- Type: `boolean`
- Default: `false`

Whether to enable [vConsole](https://github.com/Tencent/vConsole) debugging in dev, usually used for mobile debugging.

## PostCSS

PostCSS can be configured through the `postcss.config.js` file in the root directory.

### Default Config

PostCSS default config:

```js
module.exports = {
  plugins: {
    autoprefixer: {},
  },
};
```

## browserslist

Add browserslist field to `package.json` file is recommended. It's used by `autoprefixer` to determine the version of target browser, ensuring compatibility of compiled code.

You can add the following config for mobile:

```json
{
  "browserslist": ["Chrome >= 51", "iOS >= 10"]
}
```
