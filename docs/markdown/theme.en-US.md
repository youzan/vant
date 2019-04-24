## Custom Theme

`Vant` provides a set of default themes, if you want to custom the theme color or other styles, you can use the following methods:

### Less variables

Vant use [Less](http://lesscss.org/) as css preprocessor，you can modify less variables to custom theme.

There are some basic variables below, all available variables could be found in [var.less](https://github.com/youzan/vant/blob/dev/packages/style/var.less)。

```less
// color variables
@black: #000;
@white: #fff;
@red: #f44;
@blue: #1989fa;
@orange: #ff976a;
@orange-dark: #ed6a0c;
@orange-light: #fffbe8;
@green: #07c160;
@gray: #c9c9c9;
@gray-light: #e5e5e5;
@gray-darker: #7d7e80;
@gray-dark: #969799;

// default colors
@text-color: #323233;
@border-color: #ebedf0;
@active-color: #f2f3f5;
@background-color: #f8f8f8;
@background-color-light: #fafafa;
```

### How to custom theme


#### Step 1: import less file

First you should import the less source file to your project. you can use babel-plugin-import to automatically import or just manually import less file.

```js
// configure babel plugin in babel.config.js
// For users who use babel6, please manually import less file
module.exports = {
  plugins: [
    [
      'import',
      {
        libraryName: 'vant',
        libraryDirectory: 'es',
        // specify less file path
        style: name => `${name}/style/less`
      },
      'vant'
    ]
  ]
};
```

manually import less file：

```js
import Button from 'vant/lib/button';
import 'vant/lib/button/style/less';
```

#### Step 2: modify less variables

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
            modifyVars: {
              red: '#03a9f4',
              blue: '#3eaf7c',
              orange: '#f08d49',
              'text-color': '#111'
            }
          }
        }
      ]
    }
  ]
};
```
