# 命令

Vant Cli 中内置了一系列的命令，可以将命令添加到 npm scripts 中进行使用。

```json
// package.json
{
  "scripts": {
    "dev": "vant-cli dev",
    "test": "vant-cli test",
    "lint": "vant-cli lint",
    "release": "vant-cli release",
    "build-site": "vant-cli build-site"
  }
}
```

也可以通过 npm 自带的 [npx](https://github.com/npm/npx) 直接执行某个命令：

```bash
npx vant-cli dev
```

### dev

运行本地开发环境。

运行 dev 命令时，Vant Cli 会通过 [webpack-dev-server](https://github.com/webpack/webpack-dev-server) 启动一个本地服务器，用于在开发过程中对文档和示例进行预览。

### build

构建组件库。

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
├─ index.less       # 组件编译前的 CSS 文件
└─ style            # 按需引入样式的入口
    ├─ index.js     # 按需引入编译后的样式
    └─ less.js      # 按需引入未编译的样式，可用于主题定制
```

发布 npm 时，请将以下配置加入到 `package.json` 中，使 npm 包能被正确识别:

```json
// package.json
{
  "main": "lib/index.js",
  "module": "es/index.js",
  "files": ["es", "lib"]
}
```

### build-site

构建文档站点，在 `site` 目录生成可用于生产环境的文档站点代码。

### release

发布组件库，发布前会自动执行 build 和 changelog 命令，并通过 [release-it](https://github.com/release-it/release-it) 发布 npm 包。

## changelog

基于 commit 记录生成更新日志，基于 [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog) 实现。

## commit-lint

校验 commit message 的格式是否符合规范，需要配合 `husky` 在提交 commit 时触发。
