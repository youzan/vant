# Vant Cli

Vant Cli 是一个 Vue 组件库构建工具，通过 Vant Cli 可以快速搭建一套功能完备的 Vue 组件库。

### 特性

- 提供丰富的命令，涵盖从开发测试到构建发布的完整流程
- 基于约定的目录结构，自动生成优雅的文档站点和组件示例
- 内置 ESlint、Stylelint 校验规则，提交代码时自动执行校验
- 构建后的组件库默认支持按需引入、主题定制、Tree Shaking

### 快速上手

执行以下命令可以快速创建一个基于 Vant Cli 的项目：

```bash
npx create-vant-cli-app
```

### 手动安装

```shell
# 通过 npm 安装
npm i @vant/cli -D

# 通过 yarn 安装
yarn add @vant/cli --dev
```

安装完成后，请将以下配置添加到 package.json 文件中

```json
{
  "scripts": {
    "dev": "vant-cli dev",
    "test": "vant-cli test",
    "lint": "vant-cli lint",
    "release": "vant-cli release",
    "build-site": "vant-cli build-site"
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged",
      "commit-msg": "vant commit-lint"
    }
  },
  "lint-staged": {
    "*.{ts,tsx,js,jsx,vue}": [
      "eslint",
      "git add"
    ],
    "*.{vue,css,less,scss}": [
      "stylelint",
      "git add"
    ]
  },
  "eslintConfig": {
    "root": true,
    "extends": ["@vant"]
  },
  "stylelint": {
    "extends": ["@vant/stylelint-config"]
  },
  "prettier": {
    "singleQuote": true
  },
  "browserslist": ["Android >= 4.0", "iOS >= 8"]
}
```

## 命令

参见[命令](https://github.com/youzan/vant/tree/dev/packages/vant-cli/docs/commands.md)。

## 配置

参见[配置指南](https://github.com/youzan/vant/tree/dev/packages/vant-cli/docs/config.md)。

## 更新日志

参见[更新日志](https://github.com/youzan/vant/tree/dev/packages/vant-cli/changelog.md)。
