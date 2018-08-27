## 定制主题

`Vant`提供了一套默认主题，CSS 命名采用 BEM 的风格，方便使用者覆盖样式。如果你想完全替换主题色或者其他样式，可以使用下面的方法：

### 方案一. PostCSS 插件
在项目中直接引入组件对应的 postcss 源代码，并通过 postcss 插件 [postcss-theme-variables](https://www.npmjs.com/package/postcss-theme-variables) 替换颜色变量，步骤如下：

```javascript
// 引入基础样式
import 'vant/packages/vant-css/src/base.css';

// 引入组件对应的样式
import 'vant/packages/vant-css/src/button.css';
import 'vant/packages/vant-css/src/checkbox.css';
```

接着在 postcss.config.js 中引入所需的 postcss 插件，并根据项目需求配置颜色变量，所有可用的颜色变量请参考 [配置文件](https://github.com/youzan/vant/blob/dev/packages/vant-css/src/common/var.css)

```javascript
module.exports = {
  plugins: [
    require('postcss-theme-variables')({
      vars: {
        red: '#F60',
        gray: '#CCC',
        blue: '#03A9F4'
      },
      prefix: '$'
    }),
    require('precss')(),
    require('postcss-calc')(),
    require('autoprefixer')({
      browsers: ['Android >= 4.0', 'iOS >= 7']
    })
  ]
};
```

### 方案二. 本地构建
可以通过在本地构建 vant-css 的方式生成所需的主题

```bash
# 克隆仓库
git clone git@github.com:youzan/vant.git
cd packages/vant-css
```

在本地 vant-css 仓库中，修改 src/common/var.css 中的颜色变量，然后执行以下构建命令，即可生成对应的样式文件
```bash
npm run build
```
