import { transformFileAsync } from '@babel/core';
import { removeSync, outputFileSync } from 'fs-extra';
import { replaceExt } from '../common';

export function compileJs(filePath: string): Promise<undefined> {
  return new Promise((resolve, reject) => {
    transformFileAsync(filePath)
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
