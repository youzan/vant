import fse from 'fs-extra';
import babel from '@babel/core';
import esbuild, { type Format } from 'esbuild';
import { sep } from 'node:path';
import { isJsx, replaceExt, getVantConfig } from '../common/index.js';
import { replaceCSSImportExt } from '../common/css.js';
import { replaceScriptImportExt } from './get-deps.js';

const { readFileSync, removeSync, outputFileSync } = fse;

export async function compileScript(
  filePath: string,
  format: Format,
): Promise<void> {
  if (filePath.includes('.d.ts')) {
    return;
  }

  const extensionMap = getVantConfig().build?.extensions;
  const extension = extensionMap?.[format] || '.js';

  let code = readFileSync(filePath, 'utf-8');

  if (!filePath.includes(`${sep}style${sep}`)) {
    code = replaceCSSImportExt(code);
  }
  code = replaceScriptImportExt(code, filePath, extension);

  if (isJsx(filePath)) {
    const babelResult = await babel.transformAsync(code, {
      filename: filePath,
      babelrc: false,
      presets: ['@babel/preset-typescript'],
      plugins: [
        [
          '@vue/babel-plugin-jsx',
          {
            enableObjectSlots: false,
          },
        ],
      ],
    });
    if (babelResult?.code) {
      ({ code } = babelResult);
    }
  }

  const esbuildResult = await esbuild.transform(code, {
    loader: 'ts',
    target: 'es2016',
    format,
  });

  ({ code } = esbuildResult);

  const jsFilePath = replaceExt(filePath, extension);

  removeSync(filePath);
  outputFileSync(jsFilePath, code);
}
