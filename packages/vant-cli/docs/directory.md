# 目录结构

## 源代码目录

基于 Vant Cli 搭建的组件库的基本目录结构如下所示：

```
project
├─ src                # 组件源代码
│   ├─ button        # button 组件源代码
│   └─ dialog        # dialog 组件源代码
│
├─ docs               # 静态文档目录
│   ├─ home.md       # 文档首页
│   └─ changelog.md  # 更新日志
│
├─ babel.config.js    # Babel 配置文件
├─ vant.config.js     # Vant Cli 配置文件
├─ pacakge.json
└─ README.md
```

单个组件的目录如下：

```
button
├─ demo             # 示例目录
│   └─ index.vue   # 组件示例
├─ index.vue        # 组件源码
└─ README.md        # 组件文档
```

使用 .vue 文件编写组件时，编译后会生成对应的 JS 和 CSS 文件，且 JS 文件中会自动引入 CSS 文件。

如果需要将 JS 和 CSS 解耦，实现主题定制等功能，在编写代码时就要使用独立的 JS 和 CSS 文件，如下所示：

```
button
├─ demo             # 组件示例
│   └─ index.vue   # 组件示例入口
├─ index.js         # 组件入口
├─ index.less       # 组件样式，可以为 less 或 scss
└─ README.md        # 组件文档
```

采用这种目录结构时，组件的使用者需要分别引入 JS 和 CSS 文件，也可以通过 babel-plugin-import 自动引入样式。

通过引入样式源文件（less 或 scss）并修改样式变量，可以实现主题定制功能。

## 构建结果目录

运行 build 命令会在 `es` 和 `lib` 目录下生成可用于生产环境的组件代码，结构如下：

```
project
├─ es               # es 目录下的代码遵循 esmodule 规范
│   ├─ button      # button 组件编译后的代码目录
│   ├─ dialog      # dialog 组件编译后的代码目录
│   └─ index.js    # 引入所有组件的入口，支持 tree shaking
│
└─ lib              # lib 目录下的代码遵循 commonjs 规范
    ├─ button       # button 组件编译后的代码目录
    ├─ dialog       # dialog 组件编译后的代码目录
    ├─ index.js     # 引入所有组件的入口
    ├─ index.less   # 所有组件未编译的样式
    ├─ index.css    # 所有组件打包后的样式，用于 CDN 引入
    ├─ name.js      # 所有组件打包后的脚本，未压缩，用于 CDN 引入
    └─ name.min.js  # 所有组件打包后的脚本，已压缩，用于 CDN 引入
```

单个组件编译后的目录如下：

```
button
├─ index.js         # 组件编译后的 JS 文件
├─ index.css        # 组件编译后的 CSS 文件
├─ index.less       # 组件编译前的 CSS 文件，可以为 less 或 scss
└─ style            # 按需引入样式的入口
    ├─ index.js     # 按需引入编译后的样式
    └─ less.js      # 按需引入未编译的样式，可用于主题定制
```
