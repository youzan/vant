# Vant Contributing Guide

## 开发环境

当你克隆好仓库后，运行：

```shell
yarn || npm i
```

### 常用的npm scripts

```shell
# watch和自动build，并启动一个静态服务器
$ npm run dev

# 代码规范校验
$ npm run lint

# unit test watch
$ npm run test:watch

# test
$ npm run test

# 打包
$ npm run dist

# gh-pages分支deploy
$ npm run deploy
```

### 项目目录结构

- build：打包配置
- docs：文档目录
  - examples-dist：手机端md文件，自动生成，请勿改动
  - examples-docs：PC端文档md文件
  - src：文档页项目代码
- lib：打包后生成的文件
- packages：组件目录，每个组件是一个目录
- src：主文件以及一些公用的`mixins`和`utils`
- test：测试用例
