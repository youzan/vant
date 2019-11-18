# Vant Cli

## Install

#### NPM

```shell
npm i @vant/cli -D
```

#### YARN

```shell
yarn add @vant/cli --dev
```

## Commands

#### Build Changelog

```shell
vant-cli changelog ./name.md
```

#### Commit Lint

```json
"husky": {
  "hooks": {
    "commit-msg": "vant-cli commit-lint"
  }
}
```
