## 定制主题

`Vant`提供了一套默认主题，CSS 命名采用 BEM 的风格，方便使用者覆盖样式。如果你想完全替换主题色或者其他样式，可以使用下面的方法：

### 示例工程

我们提供了一个基于 Vue Cli 3 的示例工程，仓库地址为 [Vant Demo](https://github.com/youzan/vant-demo)，其中包含了定制主题的基本配置，可以作为参考。

### 样式变量

Vant 使用了 [Less](http://lesscss.org/) 对样式进行预处理，并内置了一些样式变量，通过替换样式变量即可定制你自己需要的主题。

下面是一些基本的样式变量，所有可用的颜色变量请参考 [配置文件](https://github.com/youzan/vant/blob/dev/packages/style/var.less)。

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

### 定制方法

定制主题分为两步：引入样式源文件和修改样式变量

#### 步骤一. 引入样式源文件

Vant 支持通过 babel 插件按需引入和手动引入两种方式，推荐使用按需引入的方式。

```js
// 在 babel.config.js 中配置按需引入样式源文件
// 注意：babel6 不支持按需引入样式，请手动引入
module.exports = {
  plugins: [
    [
      'import',
      {
        libraryName: 'vant',
        libraryDirectory: 'es',
        // 指定样式路径
        style: name => `${name}/style/less`
      },
      'vant'
    ]
  ]
};
```

下面是手动引入的方法：

```js
// 手动引入组件的样式源文件
import Button from 'vant/lib/button';
import 'vant/lib/button/style/less';
```

#### 步骤二. 修改样式变量

使用 less 提供的 [modifyVars](http://lesscss.org/usage/#using-less-in-the-browser-modify-variables) 即可对变量进行修改，下面是参考的 webpack 配置。

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
