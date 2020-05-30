# Vant Markdown Vetur

将 .md 文件转换成能描述 vue 组件的 .json 文件，供 WebStorm 和 vscode 的 `vetur` 插件读取，从而可以在 vue 模版语法中拥有自动补全的功能。

## Install

#### NPM

```shell
npm i @vant/markdown-vetur -D
```

#### YARN

```shell
yarn add @vant/markdown-vetur --dev
```

## API

#### parseAndWrite

解析目录下所有匹配的文件，并输出为 tags.json 和 attributes.json

```ts
interface Options {
  // 需要解析的文件夹路径
  path: PathLike;
  // 文件匹配正则
  test: RegExp;
  // 输出目录
  outputDir: string;
  // 递归的目录最大深度
  maxDeep?: number;
  // 解析出来的组件名前缀
  tagPrefix?: string;
}
```
