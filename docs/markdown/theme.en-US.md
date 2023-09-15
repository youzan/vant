# Custom Theme

### Intro

Vant use [Less](http://lesscss.org/) as css preprocessor，you can override the default less variables to custom theme.

### Less variables

There are some basic variables below, all available variables could be found in [var.less](https://github.com/vant-ui/vant/blob/2.x/src/style/var.less)。

```less
// Color Palette
@black: #000;
@white: #fff;
@gray-1: #f7f8fa;
@gray-2: #f2f3f5;
@gray-3: #ebedf0;
@gray-4: #dcdee0;
@gray-5: #c8c9cc;
@gray-6: #969799;
@gray-7: #646566;
@gray-8: #323233;
@red: #ee0a24;
@blue: #1989fa;
@orange: #ff976a;
@orange-dark: #ed6a0c;
@orange-light: #fffbe8;
@green: #07c160;

// Gradient Colors
@gradient-red: linear-gradient(to right, #ff6034, #ee0a24);
@gradient-orange: linear-gradient(to right, #ffd01e, #ff8917);

// Component Colors
@text-color: @gray-8;
@active-color: @gray-2;
@active-opacity: 0.7;
@disabled-opacity: 0.5;
@background-color: @gray-1;
@background-color-light: #fafafa;
@text-link-color: #576b95;

// Padding
@padding-base: 4px;
@padding-xs: @padding-base * 2;
@padding-sm: @padding-base * 3;
@padding-md: @padding-base * 4;
@padding-lg: @padding-base * 6;
@padding-xl: @padding-base * 8;

// Font
@font-size-xs: 10px;
@font-size-sm: 12px;
@font-size-md: 14px;
@font-size-lg: 16px;
@font-weight-bold: 500;
@line-height-xs: 14px;
@line-height-sm: 18px;
@line-height-md: 20px;
@line-height-lg: 22px;
@base-font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue',
  Helvetica, Segoe UI, Arial, Roboto, 'PingFang SC', 'miui', 'Hiragino Sans GB',
  'Microsoft Yahei', sans-serif;
@price-integer-font-family: Avenir-Heavy, PingFang SC, Helvetica Neue, Arial,
  sans-serif;

// Animation
@animation-duration-base: 0.3s;
@animation-duration-fast: 0.2s;
@animation-timing-function-enter: ease-out;
@animation-timing-function-leave: ease-in;

// Border
@border-color: @gray-3;
@border-width-base: 1px;
@border-radius-sm: 2px;
@border-radius-md: 4px;
@border-radius-lg: 8px;
@border-radius-max: 999px;
```

## How to custom theme

### Step 1: import less file

First you should import the less source file to your project. you can use babel-plugin-import to automatically import or just manually import less file.

#### Automatically import style

Configure babel plugin in babel.config.js, if you are using babel6, please manually import less file.

```js
module.exports = {
  plugins: [
    [
      'import',
      {
        libraryName: 'vant',
        libraryDirectory: 'es',
        // specify less file path
        style: (name) => `${name}/style/less`,
      },
      'vant',
    ],
  ],
};
```

#### Manually import style

```js
// import all styles
import 'vant/lib/index.less';

// import style of single component
import 'vant/lib/button/style/less';
```

### Step 2: modify less variables

Use [modifyVars](http://lesscss.org/usage/#using-less-in-the-browser-modify-variables) provided by less.js to modify less variables，webpack config for reference:

```js
// webpack.config.js
module.exports = {
  rules: [
    {
      test: /\.less$/,
      use: [
        // ...other loaders
        {
          loader: 'less-loader',
          options: {
            lessOptions: {
              modifyVars: {
                // overide with less vars
                'text-color': '#111',
                'border-color': '#eee'
                // or override with less file
                'hack': `true; @import "your-less-file-path.less";`
              },
            }
          },
        },
      ],
    },
  ],
};
```

If you build a project by vue-cli,it can be configured in `vue.config.js`:

```js
// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            // overide with less vars
            'text-color': '#111',
            'border-color': '#eee',
            // or override with less file
            hack: `true; @import "your-less-file-path.less";`,
          },
        },
      },
    },
  },
};
```
