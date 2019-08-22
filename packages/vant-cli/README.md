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
vant changelog ./name.md
```

#### Commit Lint

```json
"husky": {
  "hooks": {
    "commit-msg": "vant commit-lint"
  }
}
```
