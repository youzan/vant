# Custom Theme

### Intro

Vant provides a set of default themes, if you want to custom the theme color or other styles, you can use the following methods:

### Less variables

Vant use [Less](http://lesscss.org/) as css preprocessor，you can modify less variables to custom theme.

There are some basic variables below, all available variables could be found in [var.less](https://github.com/youzan/vant/blob/dev/src/style/var.less)。

```less
// Component Colors
@text-color: #323233;
@border-color: #ebedf0;
@active-color: #f2f3f5;
@background-color: #f7f8fa;
@background-color-light: #fafafa;
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
