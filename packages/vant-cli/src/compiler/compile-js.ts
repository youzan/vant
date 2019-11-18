import { transformFileSync } from '@babel/core';
import { removeSync, outputFileSync } from 'fs-extra';
import { replaceExt } from '../common';

export function compileJs(filePath: string) {
  const result = transformFileSync(filePath);

  if (result) {
    const jsFilePath = replaceExt(filePath, '.js');

    removeSync(filePath);
    outputFileSync(jsFilePath, result.code);
  }
}
