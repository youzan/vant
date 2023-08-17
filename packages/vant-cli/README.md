# Vant CLI

Vant CLI is a tool for building vue component library. You can quickly build a full-featured Vue component library with vant-cli.

🇨🇳 <a href="./README.zh-CN.md">查看中文版介绍</a>

---

### Features

- Provides rich commands covering the complete process from development to deploy
- Based on conventional directory structure. Generate elegant document website and component examples automatically.
- ESlint built-in.
- Support Tree Shaking/Theme Customization/Import on Demand

### Quickstart

To create a Vant CLI project, run:

```bash
yarn create vant-cli-app
```

### Install Manually

```shell
# via npm
npm i @vant/cli -D

# via yarn
yarn add @vant/cli -D

# via pnpm
pnpm add @vant/cli -D

# via Bun
bun add @vant/cli -D
```

Please add the followed config to `package.json` file.

```json
{
  "scripts": {
    "dev": "vant-cli dev",
    "test": "vant-cli test",
    "lint": "vant-cli lint",
    "build": "vant-cli build",
    "prepare": "husky install",
    "release": "vant-cli release",
    "build-site": "vant-cli build-site"
  },
  "nano-staged": {
    "*.md": "prettier --write",
    "*.{ts,tsx,js,vue,less,scss}": "prettier --write",
    "*.{ts,tsx,js,vue}": "eslint --fix"
  },
  "eslintConfig": {
    "root": true,
    "extends": ["@vant"]
  },
  "prettier": {
    "singleQuote": true
  },
  "browserslist": ["Chrome >= 51", "iOS >= 10"]
}
```

## More Details

- [cli](https://github.com/vant-ui/vant/tree/main/packages/vant-cli/docs/commands.md)
- [config](https://github.com/vant-ui/vant/tree/main/packages/vant-cli/docs/config.md)
- [directory structure](https://github.com/vant-ui/vant/tree/main/packages/vant-cli/docs/directory.md)
- [CHANGELOG](https://github.com/vant-ui/vant/tree/main/packages/vant-cli/changelog.md)
