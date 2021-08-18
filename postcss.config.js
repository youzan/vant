module.exports = (api) => {
  // `api.file` - 文件路径
  // `api.mode` - webpack 的 `mode` 属性值，请查阅 https://webpack.js.org/configuration/mode/
  // `api.webpackLoaderContext` - 在复杂情况下使用的 loader 上下文
  // `api.env` - `api.mode` 的别名，与 `postcss-cli` 兼容
  // `api.options` - `postcssOptions` 的选项

  if (process.env.scecn == 'desktop') {
    return {
    };
  }

  return {
    // 你可以指定下面提到的所有选项 https://postcss.org/api/#processoptions
    plugins: [
      // ...
      ['postcss-px-to-viewport', {
        viewportWidth: 375,
        // propList: ["*", "!font-size", "!line-height"],
        propList: ["*"],
        selectorBlackList: ["nov"],
      }
      ]
    ]
  };
};
