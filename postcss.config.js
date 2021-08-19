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
