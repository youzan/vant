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
    "build": "vant-cli build",
    "release": "vant-cli release",
    "test:coverage": "open test/coverage/index.html",
    "build-site": "vant-cli build-site && npx gh-pages -d site-dist"
  },
  "author": "",
  "husky": {
    "hooks": {
      "commit-msg": "vant-cli commit-lint"
    }
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
  "prettier": {
    "singleQuote": true
  },
  "browserslist": [
    "Android >= 4.0",
    "iOS >= 8"
  ]
}
