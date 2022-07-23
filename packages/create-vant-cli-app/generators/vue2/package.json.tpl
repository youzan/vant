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
    "build-site": "vant-cli build-site && npx gh-pages -d site-dist"
  },
  "author": "",
  "husky": {
    "hooks": {
      "pre-commit": "nano-staged",
      "commit-msg": "vant-cli commit-lint"
    }
  },
  "nano-staged": {
    "*.{ts,tsx,js,jsx,vue}": "eslint --fix"
  },
  "peerDependencies": {
    "vue": "^2.6.11",
    "vue-template-compiler": "^2.6.11"
  },
  "devDependencies": {
    "@vant/cli": "^2.0.0",
    "vue": "^2.6.11",
    "vue-template-compiler": "^2.6.11"
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
    "Android >= 4.0",
    "iOS >= 8"
  ]
}
