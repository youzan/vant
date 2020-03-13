module.exports = {
  chainMarkdown(config) {
    config.options
      // eslint-disable-next-line global-require
      .highlight(require('@vant/markdown-loader/src/highlight'));
  },
};
