# 更新日志

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
