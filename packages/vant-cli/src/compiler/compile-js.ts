// @ts-ignore
import findBabelConfig from 'find-babel-config';
import { join } from 'path';
import { transformFileAsync } from '@babel/core';
import { removeSync, outputFileSync, existsSync } from 'fs-extra';
import { replaceExt } from '../common';
import { ROOT, DIST_DIR } from '../common/constant';

type Options = {
  // whether to fouce reload babel config
  reloadConfig?: boolean;
};

const TEMP_BABEL_CONFIG = join(DIST_DIR, 'babel.config.js');

function genTempBabelConfig() {
  const { config } = findBabelConfig.sync(ROOT);
  const content = `module.exports = function (api) {
  api.cache.never();

  return ${JSON.stringify(config)}
};`;

  outputFileSync(TEMP_BABEL_CONFIG, content);
}

function getBabelOptions(options: Options) {
  if (options.reloadConfig) {
    if (!existsSync(TEMP_BABEL_CONFIG)) {
      genTempBabelConfig();
    }

    return {
      configFile: TEMP_BABEL_CONFIG
    };
  }

  return {};
}

export function compileJs(
  filePath: string,
  options: Options = {}
): Promise<undefined> {
  return new Promise((resolve, reject) => {
    transformFileAsync(filePath, getBabelOptions(options))
      .then(result => {
        if (result) {
          const jsFilePath = replaceExt(filePath, '.js');

          removeSync(filePath);
          outputFileSync(jsFilePath, result.code);
          resolve();
        }
      })
      .catch(reject);
  });
}
