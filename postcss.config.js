if (process.env.scene == 'desktop') {
  module.exports = {
    plugins: {
    }
  };
} else {
  module.exports = {
    plugins: {
      'postcss-px-to-viewport': {
        viewportWidth: 375,
        // propList: ["*", "!font-size", "!line-height"],
        propList: ["*"],
        selectorBlackList: ["nov"]
      }
    }
  };
}

