const { join } = require('path');
const { existsSync } = require('fs');
const { ROOT } = require('./shared.cjs');

function getRootPostcssConfig() {
  const ROOT_POSTCSS_CONFIG_FILE = join(ROOT, 'postcss.config.js');
  if (existsSync(ROOT_POSTCSS_CONFIG_FILE)) {
    return require(ROOT_POSTCSS_CONFIG_FILE);
  }
  return { plugins: [] };
}

function getPostcssPlugins(rootConfig) {
  const plugins = rootConfig.plugins || [];

  if (Array.isArray(plugins)) {
    const hasAutoprefixerPlugin = plugins.find((plugin) => {
      if (typeof plugin === 'object') {
        return plugin.postcssPlugin === 'autoprefixer';
      }
      return plugin === 'autoprefixer';
    });
    if (hasAutoprefixerPlugin) {
      return plugins;
    }

    return [require('autoprefixer'), ...plugins];
  }

  return {
    autoprefixer: {},
    ...plugins,
  };
}

function resolvePostcssConfig() {
  const rootConfig = getRootPostcssConfig();
  return {
    ...rootConfig,
    plugins: getPostcssPlugins(rootConfig),
  };
}

module.exports = resolvePostcssConfig();
