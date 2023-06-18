{
  "name": "<%= name %>",
  "version": "1.0.0",
  "description": "",
  "main": "lib/<%= name %>.js",
  "module": "es/index.js",
  "style": "lib/index.css",
  "typings": "lib/index.d.ts",
  "files": [
    "lib",
    "es"
  ],
  "scripts": {
    "dev": "vant-cli dev",
    "lint": "vant-cli lint",
    "test": "vant-cli test",
    "build": "vant-cli build",
    "build:site": "vant-cli build-site",
    "release": "vant-cli release --tag next",
    "release:site": "pnpm build:site && npx gh-pages -d site-dist",
    "test:watch": "vant-cli test --watch",
    "test:coverage": "open test/coverage/index.html"
  },
  "author": "",
  "nano-staged": {
    "*.md": "prettier --write",
    "*.{ts,tsx,js,vue,less,scss}": "prettier --write",
    "*.{ts,tsx,js,vue}": "eslint --fix"
  },
  "peerDependencies": {
    "vue": "^3.3.4"
  },
  "devDependencies": {
    "@vant/cli": "^6.0.0",
    "vue": "^3.3.4",
    "sass": "^1.49.7"
  },
  "eslintConfig": {
    "root": true,
    "extends": [
      "@vant"
    ]
  },
  "prettier": {
    "singleQuote": true
  },
  "browserslist": [
    "Chrome >= 51",
    "iOS >= 10"
  ]
}
