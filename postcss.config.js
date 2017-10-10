module.exports = {
  plugins: [
    require('postcss-easy-import')({
      extensions: ['pcss', 'css']
    }),
    require('precss')(),
    require('postcss-calc')(),
    require('autoprefixer')({
      browsers: ['Android >= 4.0', 'iOS >= 7']
    })
  ]
};
