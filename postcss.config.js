if (process.env.scene === 'desktop') {
  module.exports = {
    plugins: {
    }
  };
} else {
  module.exports = {
    plugins: [
      require('./postcss-plugins/px2vw')({
        unitToConvert: 'px',
        viewportWidth: 375,
        propList: ['*'],
        selectorBlackList: ['nov', /^m401$/, /^m404$/],

        landscape: true,
        landscapeUnit: 'vw',
        landscapeWidth: 812,
        exclude: [
          /\/cli\/site\//
        ],
      }),
    ],
  };
}
