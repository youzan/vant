import { sep } from 'path';
import { transformAsync } from '@babel/core';
import { readFileSync, removeSync, outputFileSync } from 'fs-extra';
import { replaceExt } from '../common';
import { replaceCSSImportExt } from '../common/css';
import { replaceScriptImportExt } from './get-deps';

export async function compileScript(filePath: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (filePath.includes('.d.ts')) {
      resolve();
      return;
    }

    let code = readFileSync(filePath, 'utf-8');

    if (!filePath.includes(`${sep}style${sep}`)) {
      code = replaceCSSImportExt(code);
    }
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
