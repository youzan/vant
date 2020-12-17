import { existsSync } from 'fs-extra';
import { ROOT_POSTCSS_CONFIG_FILE } from '../common/constant';

type PostcssConfig = {
  plugins?: Record<string, unknown> | unknown[];
};

export function getRootPostcssConfig(): PostcssConfig {
  if (existsSync(ROOT_POSTCSS_CONFIG_FILE)) {
    return require(ROOT_POSTCSS_CONFIG_FILE);
  }
  return { plugins: [] };
}

function getPostcssPlugins(rootConfig: PostcssConfig) {
  const plugins = rootConfig.plugins || [];

  if (Array.isArray(plugins)) {
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
