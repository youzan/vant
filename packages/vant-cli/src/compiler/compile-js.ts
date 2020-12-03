import { transformAsync } from '@babel/core';
import { readFileSync, removeSync, outputFileSync } from 'fs-extra';
import { replaceExt } from '../common';
import { replaceCssImportExt } from '../common/css';
import { replaceScriptImportExt } from './get-deps';

export function compileJs(filePath: string): Promise<undefined> {
  return new Promise((resolve, reject) => {
    let code = readFileSync(filePath, 'utf-8');

    code = replaceCssImportExt(code);
    code = replaceScriptImportExt(code, '.vue', '');

    transformAsync(code, { filename: filePath })
      .then((result) => {
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
