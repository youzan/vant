# Vant Nuxt

> Vant module for Nuxt

## Features

- Automatically import components and styles on demand.
- Automatically import of showDialog, showToast and other methods.

## Install

```shell
npm i @vant/nuxt -D
```

```ts
export default defineNuxtConfig({
  modules: ['@vant/nuxt'],
  vant: {
    /** Options */
  },
});
```

## Usage

```vue
<template>
  <van-button type="primary" @click="showToast('toast')"> button </van-button>
  <VanButton type="success" @click="showNotify('notify')"> button </VanButton>
  <LazyVanButton type="default"> lazy button </LazyVanButton>
</template>
```

## Options

### lazyload

- Type: `boolean` | `object`
- Default: `false`

How to load directives and components from lazyload.

eg. `{ lazyComponent: true }`

### components

- Type: `array`

If there are components that are not imported automatically from Vant, you need to add the component here.

### imports

- Type: `array`

If you wish to add automatically import content from Vant, you can add it here.

### include

- Type: `array`

Include files that need to automatically import styles.

### exclude

- Type: `array`

Exclude files that do not require the automatic import of styles.

## Development

- Run `pnpm i` to install the dependencies.
- Run `pnpm dev:prepare` to generate type stubs.
- Run `pnpm dev` to start playground in development mode.
- Run `pnpm dev:build` to build playground.
- Run `pnpm dev:start` to locally preview playground.
- Run `pnpm build` to build this project.
