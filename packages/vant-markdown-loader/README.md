# vant-markdown-loader

Simple and fast vue markdown loader, transform markdown to vue component.

## Install

### NPM

```shell
npm i @vant/markdown-loader -S
```

### YARN

```shell
yarn add @vant/markdown-loader
```

## Options

- `enableMetaData`: Default `false`. Whether to use [front-matter](https://github.com/jxson/front-matter) to extract markdown meta data

- `linkOpen`: Default `true`. Whether to add target="_blank" to all links

- `wrapper(html, fm)`: Format the returned content using a custom function
    - `html`: The result of [markdown-it](https://github.com/markdown-it/markdown-it)'s render
    - `fm`: See [fm(string)](https://github.com/jxson/front-matter#fmstring). If `enableMetaData` option is `false`, the value is `undefined`. 
        - `attributes`
        - `body`
        - `frontmatter`
