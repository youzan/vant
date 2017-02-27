module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'semi': ['error', 'always'],
    'space-before-function-paren': ['error', 'never'],
    'no-useless-escape': 0,
    'no-extra-boolean-cast': 0,
    'no-new': 0
  },
  "globals": {
    "zanui": true,
    "location": true,
    "Swiper": true,
    "wysihtml5": true,
    "wysihtml5ParserRules": true
  }
}
