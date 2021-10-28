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
    const hasPostcssPlugin = plugins.find(
      (plugin) =>
        plugin === 'autoprefixer' && plugin.postcssPlugin === 'autoprefixer'
    );
    if (hasPostcssPlugin) {
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
