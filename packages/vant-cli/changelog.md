# 更新日志

## v4.0.0-beta.6

### 不兼容更新

- 使用 vite 代替 webpack 进行构建，移除了所有 webpack 相关依赖
- 站点构建产物的目录由 `site` 调整为 `site-dist`
- 不再支持 webpack.config.js 配置文件
- 不再支持 less import 语法中使用波浪号
- 不再在 demo 文件中自动注册组件
- 移除 build 命令的 --watch 参数
- 移除内置的 babel-plugin-import 插件
- 由于不再使用 html-webpack-plugin, 因此移除了 site.htmlPluginOptions 配置项
- 为了减少依赖数量，移除了默认安装的 sass 依赖，使用 sass 时需要手动安装：

```bash
yarn add sass
```

### Features

- 新增 site.htmlMeta 配置项
- 新增 ESModule 格式的构建产物，分别为 `lib/[name].es.js` 和 `lib/[name].es.min.js`

### 依赖升级

对以下依赖进行了大版本升级：

- jest v27
- husky v7
- ts-jest v27
- postcss v8
- clean-css v5
- commander v8
- babel-jest v27
- lint-staged v11
- autoprefixer v10

## v3.11.2

`2021-07-15`

- test 命令支持更多 jest 参数

## v3.11.1

`2021-07-08`

- 支持 commit message 以 `release` 为前缀

## v3.11.0

`2021-06-25`

- 构建时保留静态资源

## v3.10.9

`2021-06-24`

- 降级 prettier 版本到 2.1.0

## v3.10.8

`2021-06-23`

- 修复 sfc 编译 defineComponent 错误的问题

## v3.10.7

`2021-06-23`

- 支持自定义 autoprefixer 插件

## v3.10.6

`2021-06-11`

- 修复文档样式问题
- 升级依赖版本

## v3.10.5

`2021-06-06`

- 修复预览桌面端组件时样式污染问题

## v3.10.3

`2021-04-29`

- windows 系统禁用左右方向键导航

## v3.10.2

`2021-04-19`

- 修复搜索框图标不展示的问题
- 修复 import type 可能导致分析组件样式依赖关系错误的问题

## v3.10.1

`2021-04-16`

- 升级 `@vant/markdown-vetur` 2.2.0 版本
- 移除 friendly-errors-webpack-plugin
- 移除 @babel/plugin-transform-runtime

## v3.10.0

`2021-04-10`

- 新增 `site.simulator` 选项
- 支持 iframe 通信跨域

## v3.9.3

`2021-04-10`

- 新增 `build.namedExport` 选项

## v3.9.2

`2021-04-04`

- 修复 highlight.js 版本过低的问题

## v3.9.1

`2021-04-04`

- commit-lint 命令适配 husky v6

## v3.9.0

`2021-04-04`

- 升级 husky v6，迁移指南参见 [Migrate from v4 to v6](https://typicode.github.io/husky/#/?id=migrate-from-v4-to-v6)

## v3.8.0

`2021-04-02`

- 修复生成 vetur 配置和 web-types 配置不正确的问题

## v3.7.1

`2021-03-18`

- 修复无法跳转到锚点的问题

## v3.7.0

`2021-03-17`

- 支持预览 PC 端组件

## v3.6.1

`2021-03-08`

- 修复样式入口文件 import 后缀错误的问题

## v3.6.0

`2021-03-04`

- build 时支持输出类型定义

## v3.5.1

`2021-02-26`

- 修复缺少 `ts-jest` 依赖的问题

## v3.5.0

`2021-02-24`

- 支持 lint markdown 文件
- 升级 `html-webpack-plugin` 5.2.0 版本

## v3.4.1

`2021-01-22`

- 降级 `webpack-dev-server`，修复 windows 无法开发问题

## v3.4.0

`2021-01-12`

- 升级 `webpack-dev-server` 4.0.0-beta.0，修复 Hot Reload 不生效的问题

## v3.3.0

`2021-01-09`

- 默认关闭 jsx 插件的 enableObjectSlots 选项

## v3.2.1

`2021-01-09`

- 修复大屏幕下预览区域位置错位的问题

## v3.2.0

`2021-01-09`

- 升级 Less 4.0

## v3.1.8

`2020-12-30`

- 升级 @vue/babel-plugin-jsx 1.0.0 正式版

## v3.1.7

`2020-12-16`

- 修复 build 失败时未抛出异常的问题
- 修复 component-definition-name-casing 规则冲突的问题

## v3.1.6

`2020-12-16`

- 修复个别情况下提示堆栈溢出的问题

## v3.1.5

`2020-12-16`

- 升级 `vue-router` v4 正式版
- 修复锚点不生效的问题

## v3.1.4

`2020-12-04`

- 支持配置 `babel-preset-env` 的 loose 选项

## v3.1.3

`2020-12-03`

- 支持通过 `site.htmlPluginOptions` 来配置 html-webpack-plugin
- 修复组件内部引用 `.vue` 文件时 build 结果不正确的问题

## v3.1.2

`2020-12-02`

- 修复在 .vue 文件内使用 ts 语法时会导致 build 报错的问题

## v3.1.1

`2020-12-02`

- 支持在 scss 文件中通过 import 引入 node_module 中的文件

## v3.1.0

`2020-12-01`

-  升级 docsearch 3，优化搜索框样式

## v3.0.0

`2020-11-29`

- 升级 Vue 3
- 升级 VueRouter 4
- 升级 VueLoader 16
- 升级 Webpack 5
- 升级 ESLint 7
- 升级 TypeScript 4

## v2.7.0

`2020-12-03`

- 支持通过 `site.htmlPluginOptions` 来配置 html-webpack-plugin
- 修复组件内部引用 `.vue` 文件时 build 结果不正确的问题

## v2.6.2

`2020-11-15`

- 支持自定义 postcss 配置时传入数组格式的 plugins

### v2.6.1

`2020-10-09`

- 升级 @vant/markdown-vetur@2.0.2

### v2.6.0

`2020-09-27`

- 优化站点样式

### v2.5.5

`2020-09-26`

- 新增 Open Sans 字体
- 修复搜索时无法跳转到对应锚点的问题
- 修复自定义 webpack 配置时某些情况下出现配置错误的问题

### v2.5.4

`2020-09-22`

- 支持在 webpack.config.js 中修改内部 Webpack 配置

### v2.5.3

`2020-09-16`

- 升级 vue-jest@4.0.0-rc.0，修复生成测试覆盖率失败的问题

### v2.5.2

`2020-07-05`

- 内置的 demo-block 组件新增 card 属性

### v2.5.1

`2020-05-27`

- 移除多余的 log

### v2.5.0

`2020-05-27`

- 开启 fork-ts-checker-webpack-plugin，在编译时进行类型检查
- 现在点击锚点时会立即滚动到对应位置

### v2.4.2

`2020-05-04`

- 升级 less-loader@6
- 优化移动端示例导航栏样式

### v2.4.1

`2020-04-19`

- 支持 style 类型的 commit message

### v2.4.0

`2020-04-02`

- 升级 prettier v2
- 升级 html-webpack-plugin v4

### v2.3.1

`2020-03-29`

- 优化网站导航栏在大屏上的适配 ([#5928](https://github.com/youzan/vant/pull/5928))

### v2.3.0

`2020-03-25`

- build 命令支持编译 scoped 样式 ([#5910](https://github.com/youzan/vant/pull/5910))
- build 命令支持生成 WebStorm 组件定义文件 ([#5899](https://github.com/youzan/vant/issues/5899))
- clean 命令现在会移除而不是清空文件夹 ([#5895](https://github.com/youzan/vant/issues/5895))
- 升级 @vant/markdown-vetur 2.0.0

### v2.2.8

`2020-03-20`

- 修复构建 changelog 可能失败的问题

### v2.2.7

`2020-03-19`

- 新增 process.env.VANT_CLI_VERSION 环境变量

### v2.2.6

`2020-03-18`

- 升级 commander 5
- 修复右侧预览 iframe 链接可能错误的问题

### v2.2.5

`2020-03-08`

- 升级依赖
- 优化代码块与底部文字之间的间距
- 修复 create-vant-cli-app 初始化时报错的问题

### v2.2.4

`2020-02-14`

- 修复在 windows 上构建出的样式入口文件路径错误的问题 ([#5655](https://github.com/youzan/vant/pull/5655)

### v2.2.3

`2020-02-13`

- 链接颜色调整为蓝色

### v2.2.2

`2020-02-05`

- 修复在 windows 上获取 markdown 路径错误的问题 ([#5626](https://github.com/youzan/vant/pull/5626))

### v2.2.1

`2020-02-04`

- 升级 babel@7.8
- 修复切换版本时跳转 undefined 的问题 ([#5620](https://github.com/youzan/vant/pull/5620))

### v2.2.0

`2020-01-19`

- 升级 @vant/eslint-config@2.0.0

### v2.1.8

`2020-01-18`

- 新增 create-vant-cli-app 初始化命令
- 新增 --version 选项
- 优化站点导航栏颜色
- 优化站点代码块颜色

### v2.1.7

`2020-01-15`

- 优化 help 命令 
- 优化控制台输出信息

### v2.1.6

`2020-01-12`

- 支持自定义 Postcss 配置
- 支持自定义 devServer 端口
- 优化文档站点的 meta 字段
- 新增 API 文档中的版本标签样式

### v2.1.5

`2020-01-10`

- 修复编译时未替换 import 语句中的 CSS 后缀的问题
- 升级 husky 版本到 4.0

### v2.1.4

`2020-01-06`

**Bug Fixes**

- 锁死 @vue/test-utils 版本为 1.0.0-beta.29

### v2.1.3

`2020-01-06`

**Feature**

- 增加 cache-loader，提高构建速度
- 调整 jest setup 文件执行时机，延迟至 env 初始化后执行

### v2.1.2

`2020-01-05`

**Feature**

- 优化文档站点样式，统一圆角大小

**Bug Fixes**

- 修复 windows 下路径分隔符错误的问题
