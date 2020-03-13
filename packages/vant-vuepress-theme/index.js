const VantCardPlugin = require('./plugins/vant-md-card');
const highlightPlugin = require('./plugins/highlight');

module.exports = {
  extend: '@vuepress/theme-default',
  plugins: [VantCardPlugin, highlightPlugin],
};
