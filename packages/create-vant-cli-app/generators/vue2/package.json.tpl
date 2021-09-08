{
  "name": "<%= name %>",
  "version": "1.0.0",
  "description": "",
  "main": "lib/<%= name %>.js",
  "style": "lib/index.css",
  "files": [
    "lib",
    "es"
  ],
  "scripts": {
    "dev": "vant-cli dev",
    "test": "vant-cli test",
    "lint": "vant-cli lint",
    "build": "vant-cli build",
    "release": "vant-cli release",
    "test:coverage": "open test/coverage/index.html",
    "build-site": "vant-cli build-site && gh-pages -d site-dist"
  },
  "author": "",
  "license": "MIT",
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged",
      "commit-msg": "vant-cli commit-lint"
    }
  },
  "lint-staged": {
    "*.{ts,tsx,js,jsx,vue}": "eslint --fix",
    "*.{vue,css,less,scss}": "stylelint --fix"
  },
  "peerDependencies": {
    "vue": "^2.6.11",
    "vue-template-compiler": "^2.6.11"
  },
  "devDependencies": {
    "@vant/cli": "^2.0.0",
    "babel-plugin-import": "^1.13.0",
    "vue": "^2.6.11",
    "vue-template-compiler": "^2.6.11"
  },
  "eslintConfig": {
    "root": true,
    "extends": [
      "@vant"
    ]
  },
  "stylelint": {
    "extends": [
      "@vant/stylelint-config"
    ]
  },
  "prettier": {
    "singleQuote": true
  },
  "browserslist": [
    "Android >= 4.0",
    "iOS >= 8"
  ]
}
