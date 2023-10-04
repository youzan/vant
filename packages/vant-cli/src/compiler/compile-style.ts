import { parse } from 'node:path';
import fse from 'fs-extra';
import { logger } from 'rslog';
import { getVantConfig, replaceExt } from '../common/index.js';
import { compileCss } from './compile-css.js';
import { compileLess } from './compile-less.js';
import { compileSass } from './compile-sass.js';

const { readFileSync, writeFileSync, removeSync } = fse;

async function compileFile(filePath: string) {
  const parsedPath = parse(filePath);

  try {
    if (parsedPath.ext === '.less') {
      const source = await compileLess(filePath);
      return await compileCss(source);
    }

    if (parsedPath.ext === '.scss') {
      const source = await compileSass(filePath);
      return await compileCss(source);
    }

    const source = readFileSync(filePath, 'utf-8');
    return await compileCss(source);
  } catch (err) {
    logger.error('Compile style failed: ' + filePath);
    throw err;
  }
}

export async function compileStyle(filePath: string) {
  const css = await compileFile(filePath);
  const vantConfig = getVantConfig();

  if (vantConfig.build?.css?.removeSourceFile) {
    removeSync(filePath);
  }

  writeFileSync(replaceExt(filePath, '.css'), css);
}
